(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073));
var r,
    s =
        (((r = {}).Connect = "connect"),
        (r.Disconnect = "disconnect"),
        (r.Key = "key"),
        (r.MouseButton = "mouse-button"),
        (r.MouseMove = "mouse-move"),
        (r.MouseWheel = "mouse-wheel"),
        (r.ControllerButton = "controller-button"),
        (r.ControllerStick = "controller-stick"),
        (r.ControllerTrigger = "controller-trigger"),
        (r.ControllerPlug = "controller-plug"),
        (r.Grab = "grab"),
        (r.GrabAllow = "grab-allow"),
        (r.Drop = "drop"),
        (r.Log = "log"),
        r);
function i(e) {
    postMessage([s.Log, e]);
}
let a = [2, 2, 4, 1, 1, 0, 0, 0, 2, 1, 1, 4, 4, 1, 1, 0, 0],
    l = 1e3 / 120,
    u = (1e3 / 120) * 4;
function o(e, t) {
    let n = (e - t) & 65535;
    return n > 0 && n <= 32767;
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
    constructor(e, t, n) {
        ((this.transport = new WebTransport(e, { serverCertificateHashes: t })),
            (this.writer = null),
            (this.reader = null),
            (this.readBuffer = null),
            (this.drainedCallback = null));
        let r = BigInt(n);
        ((this.userIdHigh = Number(BigInt.asUintN(32, r >> BigInt(32)))),
            (this.userIdLow = Number(BigInt.asUintN(32, r))),
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
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        postMessage([e, ...n]);
    }
    createSession(e, t) {
        let n = {
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
            r = new DataView(n.writeBuffer);
        return (
            r.setBigUint64(0, t),
            r.setUint32(8, this.userIdHigh),
            r.setUint32(12, this.userIdLow),
            r.setUint8(16, 0),
            r.setUint32(17, e),
            r.setUint16(21, n.nextSeqNumber),
            this.peerMap.set(e, n),
            n
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
                let n = new DataView(t.value.buffer, 0, t.value.byteLength);
                if (n.getUint32(0) !== this.userIdHigh || n.getUint32(4) !== this.userIdLow) continue;
                let r = n.getBigUint64(8),
                    s = n.getUint8(16),
                    a = n.getUint32(17);
                switch (s) {
                    case 0:
                        this.handleEventPacket(r, a, n);
                        break;
                    case 1:
                        let l = this.peerMap.get(a);
                        null != l && this.handleAckPacket(l, n);
                        break;
                    default:
                        i("Unhandled packet type {packetType}");
                }
            } catch (t) {
                (i(`Failed to read ${t}, trace ${t.stack}`), (e = !0));
            }
        this.emitDisconnect();
    }
    handleEventPacket(e, t, n) {
        let r = n.getUint16(21),
            l = this.peerMap.get(t),
            u = null == l;
        if (null == l) {
            if (!(0 === r && n.byteLength > 23 && 5 === n.getUint8(23)) || !d) return;
            l = this.createSession(t, e);
        }
        let c = !1;
        for (let h = 23; h < n.byteLength; r = (r + 1) & 65535) {
            let d = n.getUint8(h++);
            if (o(r, l.processedSeqNumber)) {
                switch (d) {
                    case 0:
                    case 1:
                        let a = n.getUint16(h);
                        this.emit(s.Key, t, a, 0 === d);
                        break;
                    case 2: {
                        let e = n.getInt16(h),
                            r = n.getInt16(h + 2);
                        this.emit(s.MouseMove, t, e, r);
                        break;
                    }
                    case 8:
                        let o = n.getInt16(h);
                        (i(`Received mouse wheel ${o}`), this.emit(s.MouseWheel, t, o));
                        break;
                    case 3:
                    case 4: {
                        let e = n.getUint8(h);
                        this.emit(s.MouseButton, t, e, 3 === d);
                        break;
                    }
                    case 9:
                    case 10: {
                        let e = n.getUint8(h);
                        this.emit(s.ControllerButton, t, e, 9 === d);
                        break;
                    }
                    case 11:
                    case 12: {
                        let e = n.getInt16(h),
                            r = n.getInt16(h + 2);
                        this.emit(s.ControllerStick, t, 11 === d, e, r);
                        break;
                    }
                    case 13:
                    case 14: {
                        let e = n.getUint8(h);
                        this.emit(s.ControllerTrigger, t, 13 === d, e);
                        break;
                    }
                    case 15:
                    case 16:
                        this.emit(s.ControllerPlug, t, 15 === d);
                        break;
                    case 5:
                        if (!u || 0 !== r) {
                            i(`Ignoring grab outside session start @ ${h}`);
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
                        i(`Unhandled event type ${d} @ ${h}`);
                        return;
                }
                l.processedSeqNumber = r;
            }
            if (d > a.length) return void i(`Unhandled event type ${d} @ ${h}`);
            h += a[d];
        }
        (this.maybeSendAck(e, l), c && this.forgetSession(t));
    }
    handleAckPacket(e, t) {
        if (null == this.readBuffer) return;
        let n = t.getUint16(21);
        if (o(n, e.lastAckReceived)) {
            e.lastAckReceived = n;
            let t = new DataView(e.writeBuffer),
                r = e.queue[0].seqNumber,
                s = e.queue[0].offset,
                i = ((n - r) & 65535) + 1;
            if (((e.full = !1), e.queue.length > i)) {
                (e.queue.splice(0, i), t.setUint16(21, e.queue[0].seqNumber));
                let n = new Uint8Array(e.writeBuffer);
                for (let t of e.queue) {
                    if (null != t.data) {
                        if (s + t.size > n.byteLength) break;
                        for (let e = 0; e < t.size; e++) n[s + e] = t.data[e];
                        t.data = null;
                    } else for (let e = 0; e < t.size; e++) n[s + e] = n[t.offset + e];
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
        let n = null,
            r = null,
            s = 0;
        if (!e.full && e.curPacketSize + t <= e.writeBuffer.byteLength)
            ((r = new DataView(e.writeBuffer, e.curPacketSize, t)), (s = e.curPacketSize), (e.curPacketSize += t));
        else {
            e.full = !0;
            let s = new ArrayBuffer(t);
            ((r = new DataView(s)), (n = new Uint8Array(s)));
        }
        return (
            e.queue.push({ seqNumber: e.nextSeqNumber, offset: s, size: t, data: n }),
            (e.nextSeqNumber = (e.nextSeqNumber + 1) & 65535),
            r
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
        let n = Date.now();
        if (n - t.lastAckSentMs < u) return;
        t.lastAckSentMs = n;
        let r = new ArrayBuffer(23),
            s = new DataView(r);
        (s.setBigUint64(0, e),
            s.setUint32(8, this.userIdHigh),
            s.setUint32(12, this.userIdLow),
            s.setUint8(16, 1),
            s.setUint32(17, t.sessionId),
            s.setUint16(21, t.processedSeqNumber),
            await this.writer.ready,
            await this.writer.write(r));
    }
    async sendKey(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let s = this.enqueueEvent(r, 3);
        (s.setUint8(0, +!n), s.setUint16(1, t), await this.maybeSendEvents(r));
    }
    async sendMouseMove(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let s = this.enqueueEvent(r, 5);
        (s.setUint8(0, 2), s.setUint16(1, t), s.setUint16(3, n), await this.maybeSendEvents(r));
    }
    async sendMouseWheel(e, t) {
        let n = this.peerMap.get(e);
        if (null == n) return;
        let r = this.enqueueEvent(n, 3);
        (r.setUint8(0, 8), r.setInt16(1, t), await this.maybeSendEvents(n));
    }
    async sendMouseButton(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let s = this.enqueueEvent(r, 2);
        (s.setUint8(0, n ? 3 : 4), s.setUint8(1, t), await this.maybeSendEvents(r));
    }
    async sendControllerButton(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let s = this.enqueueEvent(r, 2);
        (s.setUint8(0, n ? 9 : 10), s.setUint8(1, t), await this.maybeSendEvents(r));
    }
    async sendControllerStick(e, t, n, r) {
        let s = this.peerMap.get(e);
        if (null == s) return;
        let i = this.enqueueEvent(s, 5);
        (i.setUint8(0, t ? 11 : 12), i.setInt16(1, n), i.setInt16(3, r), await this.maybeSendEvents(s));
    }
    async sendControllerTrigger(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let s = this.enqueueEvent(r, 2);
        (s.setUint8(0, t ? 13 : 14), s.setUint8(1, n), await this.maybeSendEvents(r));
    }
    async sendControllerPlug(e, t) {
        let n = this.peerMap.get(e);
        null == n || (this.enqueueEvent(n, 1).setUint8(0, t ? 15 : 16), await this.maybeSendEvents(n));
    }
    async sendGrab(e, t) {
        (this.createSession(t, e), await this.sendHandshakeEvent(t, 5));
    }
    async sendHandshakeEvent(e, t) {
        let n = this.peerMap.get(e);
        null == n ||
            (this.enqueueEvent(n, 1).setUint8(0, t),
            7 === t && ((n.closing = !0), setTimeout(() => this.forgetSession(e), 1e3)),
            await this.maybeSendEvents(n));
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
            this.peerMap.forEach((e, t, n) => {
                e.resendInterval > 0 && clearInterval(e.resendInterval);
            }));
    }
}
let h = null,
    d = !1,
    f = {
        setHosting: (e) => {
            d = e;
        },
        connect: (e, t, n) => {
            (null != h && (h.close(), (h = null)), (h = new c(e, t, n)));
        },
        sendKey: (e, t, n) => {
            null != h && h.sendKey(e, t, n);
        },
        sendMouseMove: (e, t, n) => {
            null != h && h.sendMouseMove(e, t, n);
        },
        sendMouseWheel: (e, t) => {
            null != h && h.sendMouseWheel(e, t);
        },
        sendMouseButton: (e, t, n) => {
            null != h && h.sendMouseButton(e, t, n);
        },
        sendControllerButton: (e, t, n) => {
            null != h && h.sendControllerButton(e, t, n);
        },
        sendControllerStick: (e, t, n, r) => {
            null != h && h.sendControllerStick(e, t, n, r);
        },
        sendControllerTrigger: (e, t, n) => {
            null != h && h.sendControllerTrigger(e, t, n);
        },
        sendControllerPlug: (e, t) => {
            null != h && h.sendControllerPlug(e, t);
        },
        sendGrab: (e, t) => {
            null != h && h.sendGrab(e, t);
        },
        sendGrabAllow: (e) => {
            null != h && h.sendHandshakeEvent(e, 6);
        },
        sendDrop: (e) => {
            null != h && h.sendHandshakeEvent(e, 7);
        },
        close: () => {
            null != h && (h.close(), (h = null));
        },
    };
onmessage = (e) => {
    try {
        let t = e.data[0],
            n = e.data.slice(1);
        f[t](...n);
    } catch (e) {
        i(`Uncaught exception in worker ${e}. Trace: ${e.stack}`);
    }
};
