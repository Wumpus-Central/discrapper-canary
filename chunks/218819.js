(r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162), r(321073));
var n,
    s =
        (((n = {}).Connect = "connect"),
        (n.Disconnect = "disconnect"),
        (n.Key = "key"),
        (n.MouseButton = "mouse-button"),
        (n.MouseMove = "mouse-move"),
        (n.Grab = "grab"),
        (n.GrabAllow = "grab-allow"),
        (n.Drop = "drop"),
        (n.Log = "log"),
        n);
function i(e) {
    postMessage([s.Log, e]);
}
let a = [2, 2, 4, 1, 1, 0, 0, 0],
    l = 1e3 / 120,
    u = (1e3 / 120) * 4;
function o(e, t) {
    let r = (e - t) & 65535;
    return r > 0 && r <= 32767;
}
class c {
    transport;
    writer;
    reader;
    readBuffer;
    userIdHigh;
    userIdLow;
    peerMap;
    drainedCallback;
    disconnected = !1;
    constructor(e, t, r) {
        ((this.transport = new WebTransport(e, { serverCertificateHashes: t })),
            (this.writer = null),
            (this.reader = null),
            (this.readBuffer = null),
            (this.drainedCallback = null));
        let n = BigInt(r);
        ((this.userIdHigh = Number(BigInt.asUintN(32, n >> BigInt(32)))),
            (this.userIdLow = Number(BigInt.asUintN(32, n))),
            (this.peerMap = new Map()),
            this.connect());
    }
    async connect() {
        try {
            await this.transport.ready;
        } catch {
            (i("failed to connect"), this.emitDisconnect());
            return;
        }
        let e =
            "function" == typeof this.transport.datagrams.createWritable
                ? this.transport.datagrams.createWritable()
                : this.transport.datagrams.writable;
        ((this.writer = e.getWriter()),
            (this.reader = this.transport.datagrams.readable.getReader({ mode: "byob" })),
            (this.readBuffer = new ArrayBuffer(this.transport.datagrams.maxDatagramSize)),
            this.startRead(),
            this.emit(s.Connect));
        try {
            await this.transport.closed;
        } catch {
        } finally {
            this.emitDisconnect();
        }
    }
    emitDisconnect() {
        this.disconnected || (this.emit(s.Disconnect), (this.disconnected = !0));
    }
    emit(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        postMessage([e, ...r]);
    }
    createSession(e, t) {
        let r = {
                sessionId: e,
                closing: !1,
                nextSeqNumber: 0,
                lastAckReceived: 65535,
                processedSeqNumber: 65535,
                lastAckSentMs: 0,
                curPacketSize: 23,
                writeBuffer: new ArrayBuffer(this.transport.datagrams.maxDatagramSize),
                resendInterval: -1,
                full: !1,
                queue: [],
            },
            n = new DataView(r.writeBuffer);
        return (
            n.setBigUint64(0, t),
            n.setUint32(8, this.userIdHigh),
            n.setUint32(12, this.userIdLow),
            n.setUint8(16, 0),
            n.setUint32(17, e),
            n.setUint16(21, r.nextSeqNumber),
            this.peerMap.set(e, r),
            r
        );
    }
    async startRead() {
        if (null == this.reader) return;
        i(`awaiting read with size ${this.readBuffer?.byteLength}`);
        let e = !1;
        for (; !e && null != this.readBuffer;)
            try {
                let t = await this.reader.read(new Uint8Array(this.readBuffer, 0, this.readBuffer.byteLength));
                if (null == t.value) break;
                if (((this.readBuffer = t.value.buffer), (e = t.done), t.value.byteLength < 21)) continue;
                let r = new DataView(t.value.buffer, 0, t.value.byteLength);
                if (r.getUint32(0) !== this.userIdHigh || r.getUint32(4) !== this.userIdLow) continue;
                let n = r.getBigUint64(8),
                    s = r.getUint8(16),
                    a = r.getUint32(17);
                switch (s) {
                    case 0:
                        this.handleEventPacket(n, a, r);
                        break;
                    case 1:
                        let l = this.peerMap.get(a);
                        null != l && this.handleAckPacket(l, r);
                        break;
                    default:
                        i("Unhandled packet type {packetType}");
                }
            } catch (t) {
                (i(`Failed to read ${t}, trace ${t.stack}`), (e = !0));
            }
        this.emitDisconnect();
    }
    handleEventPacket(e, t, r) {
        let n = r.getUint16(21),
            l = this.peerMap.get(t),
            u = null == l;
        if (null == l) {
            if (!(0 === n && r.byteLength > 23 && 5 === r.getUint8(23)) || !h) return;
            l = this.createSession(t, e);
        }
        let c = !1;
        for (let d = 23; d < r.byteLength; n = (n + 1) & 65535) {
            let h = r.getUint8(d++);
            if (o(n, l.processedSeqNumber)) {
                switch (h) {
                    case 0:
                    case 1:
                        let a = r.getUint16(d);
                        this.emit(s.Key, t, a, 0 === h);
                        break;
                    case 2:
                        let o = r.getInt16(d),
                            f = r.getInt16(d + 2);
                        this.emit(s.MouseMove, t, o, f);
                        break;
                    case 3:
                    case 4:
                        let p = r.getUint8(d);
                        this.emit(s.MouseButton, t, p, 3 === h);
                        break;
                    case 5:
                        if (!u || 0 !== n) {
                            i(`Ignoring grab outside session start @ ${d}`);
                            break;
                        }
                        this.emit(s.Grab, e, t);
                        break;
                    case 6:
                        this.emit(s.GrabAllow, t);
                        break;
                    case 7:
                        (this.emit(s.Drop, t), (c = !0));
                        break;
                    default:
                        i(`Unhandled event type ${h} @ ${d}`);
                        return;
                }
                l.processedSeqNumber = n;
            }
            if (h > a.length) return void i(`Unhandled event type ${h} @ ${d}`);
            d += a[h];
        }
        (this.maybeSendAck(e, l), c && this.forgetSession(t));
    }
    handleAckPacket(e, t) {
        if (null == this.readBuffer) return;
        let r = t.getUint16(21);
        if (o(r, e.lastAckReceived)) {
            e.lastAckReceived = r;
            let t = new DataView(e.writeBuffer),
                n = e.queue[0].seqNumber,
                s = e.queue[0].offset,
                i = ((r - n) & 65535) + 1;
            if (((e.full = !1), e.queue.length > i)) {
                (e.queue.splice(0, i), t.setUint16(21, e.queue[0].seqNumber));
                let r = new Uint8Array(e.writeBuffer);
                for (let t of e.queue) {
                    if (null != t.data) {
                        if (s + t.size > r.byteLength) break;
                        for (let e = 0; e < t.size; e++) r[s + e] = t.data[e];
                        t.data = null;
                    } else for (let e = 0; e < t.size; e++) r[s + e] = r[t.offset + e];
                    ((t.offset = s), (s += t.size));
                }
                e.curPacketSize = s;
            } else
                ((e.queue = []),
                    (e.curPacketSize = 23),
                    t.setUint16(21, e.nextSeqNumber),
                    e.resendInterval > 0 && (clearInterval(e.resendInterval), (e.resendInterval = -1)),
                    e.closing && this.forgetSession(e.sessionId),
                    null != this.drainedCallback && this.isDrained() && this.drainedCallback());
        }
    }
    isDrained() {
        return [...this.peerMap.values()].every((e) => 0 === e.queue.length);
    }
    enqueueEvent(e, t) {
        let r = null,
            n = null,
            s = 0;
        if (!e.full && e.curPacketSize + t <= e.writeBuffer.byteLength)
            ((n = new DataView(e.writeBuffer, e.curPacketSize, t)), (s = e.curPacketSize), (e.curPacketSize += t));
        else {
            e.full = !0;
            let s = new ArrayBuffer(t);
            ((n = new DataView(s)), (r = new Uint8Array(s)));
        }
        return (
            e.queue.push({ seqNumber: e.nextSeqNumber, offset: s, size: t, data: r }),
            (e.nextSeqNumber = (e.nextSeqNumber + 1) & 65535),
            n
        );
    }
    async sendEvents(e) {
        null != this.writer &&
            (await this.writer.ready, await this.writer.write(new Uint8Array(e.writeBuffer, 0, e.curPacketSize)));
    }
    async maybeSendEvents(e) {
        e.resendInterval < 0 &&
            ((e.resendInterval = setInterval(() => {
                this.sendEvents(e);
            }, l)),
            await this.sendEvents(e));
    }
    async maybeSendAck(e, t) {
        if (null == this.writer) return;
        let r = Date.now();
        if (r - t.lastAckSentMs < u) return;
        t.lastAckSentMs = r;
        let n = new ArrayBuffer(23),
            s = new DataView(n);
        (s.setBigUint64(0, e),
            s.setUint32(8, this.userIdHigh),
            s.setUint32(12, this.userIdLow),
            s.setUint8(16, 1),
            s.setUint32(17, t.sessionId),
            s.setUint16(21, t.processedSeqNumber),
            await this.writer.ready,
            await this.writer.write(n));
    }
    async sendKey(e, t, r) {
        let n = this.peerMap.get(e);
        if (null == n) return;
        let s = this.enqueueEvent(n, 3);
        (s.setUint8(0, +!r), s.setUint16(1, t), await this.maybeSendEvents(n));
    }
    async sendMouseMove(e, t, r) {
        let n = this.peerMap.get(e);
        if (null == n) return;
        let s = this.enqueueEvent(n, 5);
        (s.setUint8(0, 2), s.setUint16(1, t), s.setUint16(3, r), await this.maybeSendEvents(n));
    }
    async sendMouseButton(e, t, r) {
        let n = this.peerMap.get(e);
        if (null == n) return;
        let s = this.enqueueEvent(n, 2);
        (s.setUint8(0, r ? 3 : 4), s.setUint8(1, t), await this.maybeSendEvents(n));
    }
    async sendGrab(e, t) {
        (this.createSession(t, e), await this.sendHandshakeEvent(t, 5));
    }
    async sendHandshakeEvent(e, t) {
        let r = this.peerMap.get(e);
        null == r ||
            (this.enqueueEvent(r, 1).setUint8(0, t),
            7 === t && ((r.closing = !0), setTimeout(() => this.forgetSession(e), 1e3)),
            await this.maybeSendEvents(r));
    }
    forgetSession(e) {
        let t = this.peerMap.get(e);
        null != t && (t.resendInterval > 0 && clearInterval(t.resendInterval), this.peerMap.delete(e));
    }
    async close() {
        (await new Promise((e) => {
            null == this.writer || this.isDrained() ? e() : ((this.drainedCallback = e), setTimeout(e, 1e3));
        }),
            null != this.reader && (this.reader.cancel(), (this.reader = null)),
            null != this.writer && (this.writer.abort(), (this.writer = null)),
            this.transport.close(),
            this.peerMap.forEach((e, t, r) => {
                e.resendInterval > 0 && clearInterval(e.resendInterval);
            }));
    }
}
let d = null,
    h = !1,
    f = {
        setHosting: (e) => {
            h = e;
        },
        connect: (e, t, r) => {
            (null != d && (d.close(), (d = null)), (d = new c(e, t, r)));
        },
        sendKey: (e, t, r) => {
            null != d && d.sendKey(e, t, r);
        },
        sendMouseMove: (e, t, r) => {
            null != d && d.sendMouseMove(e, t, r);
        },
        sendMouseButton: (e, t, r) => {
            null != d && d.sendMouseButton(e, t, r);
        },
        sendGrab: (e, t) => {
            null != d && d.sendGrab(e, t);
        },
        sendGrabAllow: (e) => {
            null != d && d.sendHandshakeEvent(e, 6);
        },
        sendDrop: (e) => {
            null != d && d.sendHandshakeEvent(e, 7);
        },
        close: () => {
            null != d && (d.close(), (d = null));
        },
    };
onmessage = (e) => {
    try {
        let t = e.data[0],
            r = e.data.slice(1);
        f[t](...r);
    } catch (e) {
        i(`Uncaught exception in worker ${e}. Trace: ${e.stack}`);
    }
};
