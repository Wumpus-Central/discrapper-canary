(n(321073), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var r,
    i,
    s,
    a,
    l,
    o =
        (((r = {}).Connect = "connect"),
        (r.Disconnect = "disconnect"),
        (r.Log = "log"),
        (r.Failure = "transport-failure"),
        (r.MissingAddress = "missing-address"),
        (r.Starting = "starting"),
        (r.Timeout = "timeout"),
        (r.ReadStarted = "read-started"),
        r),
    u = (((i = {}).Connect = "connect"), (i.Close = "close"), i),
    c =
        (((s = {})[(s.EventList = 0)] = "EventList"),
        (s[(s.Ack = 1)] = "Ack"),
        (s[(s.StreamDrawing = 2)] = "StreamDrawing"),
        s);
function d(e, t, n, r) {
    (e.setBigUint64(0, t), e.setBigUint64(8, n), e.setUint8(16, r));
}
function h(e) {
    return e.replace(/([?&]token=)[^&\s"'<>)]*/gi, "$1<redacted>");
}
function f(e) {
    return "string" == typeof e ? h(e) : null;
}
function g(e) {
    let t = null != e && "object" == typeof e ? e.stack : void 0;
    return `Uncaught exception in worker ${f(String(e))}. Trace: ${f(String(t))}`;
}
function p(e, t) {
    let n = null != e && "object" == typeof e ? e : {},
        r = "<invalid URL>";
    try {
        r = new URL(t).host;
    } catch {}
    return JSON.stringify({ name: f(n.name), message: f(n.message), endpoint: r });
}
(n(323874), n(14289), n(35956));
var m =
    (((a = {}).Connect = "connect"),
    (a.Disconnect = "disconnect"),
    (a.Key = "key"),
    (a.MouseButton = "mouse-button"),
    (a.MouseMove = "mouse-move"),
    (a.MouseWheel = "mouse-wheel"),
    (a.ControllerButton = "controller-button"),
    (a.ControllerStick = "controller-stick"),
    (a.ControllerTrigger = "controller-trigger"),
    (a.ControllerPlug = "controller-plug"),
    (a.Grab = "grab"),
    (a.GrabAllow = "grab-allow"),
    (a.Drop = "drop"),
    (a.Log = "log"),
    a);
function b(e) {
    postMessage([m.Log, e]);
}
let y = [2, 2, 4, 1, 1, 0, 0, 0, 2, 1, 1, 4, 4, 1, 1, 0, 0],
    w = 1e3 / 120,
    k = (1e3 / 120) * 4;
function v(e, t) {
    let n = (e - t) & 65535;
    return n > 0 && n <= 32767;
}
class S {
    context;
    static packetTypes = [c.EventList, c.Ack];
    hosting = !1;
    peerMap = new Map();
    drainedCallback = null;
    constructor(e) {
        this.context = e;
    }
    get writer() {
        return this.context.writer;
    }
    emit(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        this.context.emit(e, ...n);
    }
    readFailure(e) {
        b(h(`Failed to read ${e}, trace ${e.stack}`));
    }
    receive(e, t) {
        if (t.byteLength < 21 || e.destination !== this.context.userId) return;
        let n = e.sender,
            r = e.type,
            i = t.getUint32(17);
        switch (r) {
            case c.EventList:
                this.handleEventPacket(n, i, t);
                break;
            case c.Ack: {
                let e = this.peerMap.get(i);
                null != e && this.handleAckPacket(e, t);
                break;
            }
            default:
                b(`Unhandled packet type ${r}`);
        }
    }
    command(e, t) {
        switch (e) {
            case "setHosting":
                this.hosting = t[0];
                break;
            case "sendKey":
                this.sendKey(t[0], t[1], t[2]);
                break;
            case "sendMouseMove":
                this.sendMouseMove(t[0], t[1], t[2]);
                break;
            case "sendMouseWheel":
                this.sendMouseWheel(t[0], t[1]);
                break;
            case "sendControllerButton":
                this.sendControllerButton(t[0], t[1], t[2]);
                break;
            case "sendControllerStick":
                this.sendControllerStick(t[0], t[1], t[2], t[3]);
                break;
            case "sendControllerTrigger":
                this.sendControllerTrigger(t[0], t[1], t[2]);
                break;
            case "sendControllerPlug":
                this.sendControllerPlug(t[0], t[1]);
                break;
            case "sendMouseButton":
                this.sendMouseButton(t[0], t[1], t[2]);
                break;
            case "sendGrab":
                this.sendGrab(t[0], t[1]);
                break;
            case "sendGrabAllow":
                this.sendHandshakeEvent(t[0], 6);
                break;
            case "sendDrop":
                this.sendHandshakeEvent(t[0], 7);
                break;
            default:
                return !1;
        }
        return !0;
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
                writeBuffer: new ArrayBuffer(this.context.maxDatagramSize),
                resendInterval: -1,
                full: !1,
                queue: [],
            },
            r = new DataView(n.writeBuffer);
        return (
            d(r, t, this.context.userId, c.EventList),
            r.setUint32(17, e),
            r.setUint16(21, n.nextSeqNumber),
            this.peerMap.set(e, n),
            n
        );
    }
    handleEventPacket(e, t, n) {
        let r = n.getUint16(21),
            i = this.peerMap.get(t),
            s = null == i;
        if (null == i) {
            if (!(0 === r && n.byteLength > 23 && 5 === n.getUint8(23)) || !this.hosting) return;
            i = this.createSession(t, e);
        }
        let a = !1;
        for (let l = 23; l < n.byteLength; r = (r + 1) & 65535) {
            let o = n.getUint8(l++);
            if (v(r, i.processedSeqNumber)) {
                switch (o) {
                    case 0:
                    case 1:
                        let u = n.getUint16(l);
                        this.emit(m.Key, t, u, 0 === o);
                        break;
                    case 2: {
                        let e = n.getInt16(l),
                            r = n.getInt16(l + 2);
                        this.emit(m.MouseMove, t, e, r);
                        break;
                    }
                    case 8:
                        let c = n.getInt16(l);
                        (b(`Received mouse wheel ${c}`), this.emit(m.MouseWheel, t, c));
                        break;
                    case 3:
                    case 4: {
                        let e = n.getUint8(l);
                        this.emit(m.MouseButton, t, e, 3 === o);
                        break;
                    }
                    case 9:
                    case 10: {
                        let e = n.getUint8(l);
                        this.emit(m.ControllerButton, t, e, 9 === o);
                        break;
                    }
                    case 11:
                    case 12: {
                        let e = n.getInt16(l),
                            r = n.getInt16(l + 2);
                        this.emit(m.ControllerStick, t, 11 === o, e, r);
                        break;
                    }
                    case 13:
                    case 14: {
                        let e = n.getUint8(l);
                        this.emit(m.ControllerTrigger, t, 13 === o, e);
                        break;
                    }
                    case 15:
                    case 16:
                        this.emit(m.ControllerPlug, t, 15 === o);
                        break;
                    case 5:
                        if (!s || 0 !== r) {
                            b(`Ignoring grab outside session start @ ${l}`);
                            break;
                        }
                        this.emit(m.Grab, e, t);
                        break;
                    case 6:
                        this.emit(m.GrabAllow, t);
                        break;
                    case 7:
                        (this.emit(m.Drop, t), (a = !0));
                        break;
                    default:
                        b(`Unhandled event type ${o} @ ${l}`);
                        return;
                }
                i.processedSeqNumber = r;
            }
            if (o > y.length) return void b(`Unhandled event type ${o} @ ${l}`);
            l += y[o];
        }
        (this.maybeSendAck(e, i), a && this.forgetSession(t));
    }
    handleAckPacket(e, t) {
        if (!this.context.connected) return;
        let n = t.getUint16(21);
        if (v(n, e.lastAckReceived)) {
            e.lastAckReceived = n;
            let t = new DataView(e.writeBuffer),
                r = e.queue[0].seqNumber,
                i = e.queue[0].offset,
                s = ((n - r) & 65535) + 1;
            if (((e.full = !1), e.queue.length > s)) {
                (e.queue.splice(0, s), t.setUint16(21, e.queue[0].seqNumber));
                let n = new Uint8Array(e.writeBuffer);
                for (let t of e.queue) {
                    if (null != t.data) {
                        if (i + t.size > n.byteLength) break;
                        for (let e = 0; e < t.size; e++) n[i + e] = t.data[e];
                        t.data = null;
                    } else for (let e = 0; e < t.size; e++) n[i + e] = n[t.offset + e];
                    ((t.offset = i), (i += t.size));
                }
                e.curPacketSize = i;
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
            i = 0;
        if (!e.full && e.curPacketSize + t <= e.writeBuffer.byteLength)
            ((r = new DataView(e.writeBuffer, e.curPacketSize, t)), (i = e.curPacketSize), (e.curPacketSize += t));
        else {
            e.full = !0;
            let i = new ArrayBuffer(t);
            ((r = new DataView(i)), (n = new Uint8Array(i)));
        }
        return (
            e.queue.push({ seqNumber: e.nextSeqNumber, offset: i, size: t, data: n }),
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
            }, w)),
            await this.sendEvents(e));
    }
    async maybeSendAck(e, t) {
        if (null == this.writer) return;
        let n = Date.now();
        if (n - t.lastAckSentMs < k) return;
        t.lastAckSentMs = n;
        let r = new ArrayBuffer(23),
            i = new DataView(r);
        (d(i, e, this.context.userId, c.Ack),
            i.setUint32(17, t.sessionId),
            i.setUint16(21, t.processedSeqNumber),
            await this.writer.ready,
            await this.writer.write(r));
    }
    async sendKey(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let i = this.enqueueEvent(r, 3);
        (i.setUint8(0, +!n), i.setUint16(1, t), await this.maybeSendEvents(r));
    }
    async sendMouseMove(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let i = this.enqueueEvent(r, 5);
        (i.setUint8(0, 2), i.setUint16(1, t), i.setUint16(3, n), await this.maybeSendEvents(r));
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
        let i = this.enqueueEvent(r, 2);
        (i.setUint8(0, n ? 3 : 4), i.setUint8(1, t), await this.maybeSendEvents(r));
    }
    async sendControllerButton(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let i = this.enqueueEvent(r, 2);
        (i.setUint8(0, n ? 9 : 10), i.setUint8(1, t), await this.maybeSendEvents(r));
    }
    async sendControllerStick(e, t, n, r) {
        let i = this.peerMap.get(e);
        if (null == i) return;
        let s = this.enqueueEvent(i, 5);
        (s.setUint8(0, t ? 11 : 12), s.setInt16(1, n), s.setInt16(3, r), await this.maybeSendEvents(i));
    }
    async sendControllerTrigger(e, t, n) {
        let r = this.peerMap.get(e);
        if (null == r) return;
        let i = this.enqueueEvent(r, 2);
        (i.setUint8(0, t ? 13 : 14), i.setUint8(1, n), await this.maybeSendEvents(r));
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
            this.peerMap.forEach((e, t, n) => {
                e.resendInterval > 0 && clearInterval(e.resendInterval);
            }));
    }
}
var U = n(435558),
    M = n(824120),
    x = n.n(M);
x()(1).shiftLeft(22).minus(1);
let I = function (e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        var t;
        return ((t = e), Math.floor(Number(t) / 4194304) + 14200704e5 >= 14200704e5);
    } catch {
        return !1;
    }
};
var E =
    (((l = {})[(l.Stroke = 0)] = "Stroke"),
    (l[(l.Cursor = 1)] = "Cursor"),
    (l[(l.Ping = 2)] = "Ping"),
    (l[(l.Stamp = 3)] = "Stamp"),
    (l[(l.StampGrowing = 4)] = "StampGrowing"),
    l);
function B(e, t, n) {
    return "number" == typeof e && !!Number.isInteger(e) && e >= t && e <= n;
}
function q(e) {
    return "number" == typeof e && !!Number.isFinite(e) && e >= 0 && e <= 1;
}
function C(e) {
    if (e.length > 68) return null;
    let [t, ...n] = e.split(":");
    if ("guild" !== t || 3 !== n.length) return null;
    try {
        let e = n.map((e) => BigInt(e));
        if (e.some((e, t) => e <= BigInt(0) || e > BigInt("18446744073709551615") || e.toString() !== n[t]))
            return null;
        return e;
    } catch {
        return null;
    }
}
let A = new Set([
    "kind",
    "streamKey",
    "strokeId",
    "sequence",
    "x",
    "y",
    "width",
    "height",
    "color",
    "end",
    "outlineWhite",
    "stampSize",
    "stampElapsed",
    "emoji",
]);
function D(e) {
    var t;
    if (
        null == e ||
        "object" != typeof e ||
        Array.isArray(e) ||
        Object.keys(e).some((e) => !A.has(e)) ||
        !(
            "string" == typeof e.streamKey &&
            null != C(e.streamKey) &&
            "string" == typeof e.strokeId &&
            /^[0-9a-f]{16}$/.test(e.strokeId) &&
            B(e.sequence, 0, 0xffffffff)
        ) ||
        !(q(e.x) && q(e.y) && B(e.width, 1, 65535) && B(e.height, 1, 65535)) ||
        !(
            "boolean" == typeof e.end &&
            B(e.kind, 0, 4) &&
            (void 0 === e.outlineWhite || "boolean" == typeof e.outlineWhite) &&
            1
        )
    )
        return !1;
    return (
        !!(
            B(e.color, 0, 0xffffff) &&
            (void 0 === e.emoji ||
                (null != (t = e.emoji) &&
                    "object" == typeof t &&
                    (null != t.id
                        ? "string" == typeof t.id && !!I(t.id) && "boolean" == typeof t.animated && null == t.unicode
                        : "string" == typeof t.unicode &&
                          0 !== t.unicode.length &&
                          !(t.unicode.length > 64) &&
                          !/[\u0000-\u001f\u007f]/.test(t.unicode)))) &&
            1
        ) &&
        !!(
            (4 !== e.kind || null != e.stampElapsed) &&
            ((3 !== e.kind && 4 !== e.kind) || null != e.stampSize) &&
            (void 0 === e.stampSize || B(e.stampSize, 16, 88)) &&
            (void 0 === e.stampElapsed || B(e.stampElapsed, 0, 0xffffffff)) &&
            1
        )
    );
}
let P = new TextEncoder(),
    T = new TextDecoder("utf-8", { fatal: !0 });
class z {
    context;
    constructor(e) {
        this.context = e;
    }
    static packetTypes = [c.StreamDrawing];
    receive(e, t) {
        let n = (function (e, t) {
            if (t.byteLength < 66 || t.byteLength > 264) return null;
            try {
                if (e.type !== c.StreamDrawing) return null;
                let n = t.getUint8(17);
                if (n > E.StampGrowing) return null;
                let r = t.getUint8(18);
                if ((-32 & r) != 0) return null;
                let i = (4 & r) != 0,
                    s = (8 & r) != 0,
                    a = (16 & r) != 0;
                if ((s && !i) || (a && !s)) return null;
                let l = [42, 50, 58].map((e) => t.getBigUint64(e));
                if (l.some((e) => e === BigInt(0))) return null;
                let o = {
                        kind: n,
                        streamKey: `guild:${l.join(":")}`,
                        strokeId: t.getBigUint64(34).toString(16).padStart(16, "0"),
                        sequence: t.getUint32(19),
                        x: t.getUint16(23) / 65535,
                        y: t.getUint16(25) / 65535,
                        width: t.getUint16(27),
                        height: t.getUint16(29),
                        color: (t.getUint8(31) << 16) | t.getUint16(32),
                        end: (1 & r) != 0,
                        outlineWhite: (2 & r) != 0,
                    },
                    u = 66;
                if (
                    ((n === E.Stamp || n === E.StampGrowing) && (o.stampSize = t.getUint8(u++)),
                    n === E.StampGrowing && ((o.stampElapsed = t.getUint32(u)), (u += 4)),
                    i)
                )
                    if (s) ((o.emoji = { id: t.getBigUint64(u).toString(), animated: a }), (u += 8));
                    else {
                        let e = t.getUint8(u++);
                        if (0 === e || e > 192 || u + e > t.byteLength) return null;
                        ((o.emoji = { unicode: T.decode(new DataView(t.buffer, t.byteOffset + u, e)) }), (u += e));
                    }
                if (u !== t.byteLength || !D(o)) return null;
                return { senderId: e.sender, point: o };
            } catch {
                return null;
            }
        })(e, t);
        null != n && this.context.emit("stream-drawing", n.senderId, n.point);
    }
    async send(e, t) {
        try {
            await e.write(t);
        } catch {}
    }
    command(e, t) {
        if ("sendStreamDrawing" !== e) return !1;
        let n = t[0];
        if (!D(n) || null == this.context.writer || (this.context.writer.desiredSize ?? 0) <= 0) return !0;
        let r = (function (e, t) {
            if (!D(t)) throw TypeError("Invalid stream drawing point");
            let n = C(t.streamKey),
                r = t.emoji,
                i = null != r && "unicode" in r ? P.encode(r.unicode) : null;
            if (null != i && (i.length > 192 || T.decode(i) !== r.unicode))
                throw TypeError("Invalid stream drawing emoji");
            let s = 66;
            ((t.kind === E.Stamp || t.kind === E.StampGrowing) && s++,
                t.kind === E.StampGrowing && (s += 4),
                null != r && (s += null == i ? 8 : 1 + i.length));
            let a = new Uint8Array(s),
                l = new DataView(a.buffer);
            (d(l, BigInt(0), e, c.StreamDrawing), l.setUint8(17, t.kind));
            let o = 0;
            (t.end && (o |= 1),
                t.outlineWhite && (o |= 2),
                null != r && ((o |= 4), "id" in r && ((o |= 8), r.animated && (o |= 16))),
                l.setUint8(18, o),
                l.setUint32(19, t.sequence),
                l.setUint16(23, Math.round(65535 * t.x)),
                l.setUint16(25, Math.round(65535 * t.y)),
                l.setUint16(27, t.width),
                l.setUint16(29, t.height),
                l.setUint8(31, t.color >>> 16),
                l.setUint16(32, 65535 & t.color),
                l.setBigUint64(34, BigInt(`0x${t.strokeId}`)));
            for (let e = 0; e < 3; e++) l.setBigUint64(42 + 8 * e, n[e]);
            let u = 66;
            return (
                (t.kind === E.Stamp || t.kind === E.StampGrowing) && l.setUint8(u++, t.stampSize),
                t.kind === E.StampGrowing && (l.setUint32(u, t.stampElapsed), (u += 4)),
                null != r && ("id" in r ? l.setBigUint64(u, BigInt(r.id)) : (l.setUint8(u++, i.length), a.set(i, u))),
                a
            );
        })(this.context.userId, n);
        return (r.byteLength <= this.context.maxDatagramSize && this.send(this.context.writer, r), !0);
    }
}
let L = [S, z];
class j {
    url;
    transport;
    writer = null;
    reader = null;
    protocols = [];
    protocolsByPacketType = new Map();
    disconnected = !1;
    constructor(e, t, n) {
        if (((this.url = e), "u" < typeof WebTransport)) throw Error("WebTransport unavailable");
        this.transport = new WebTransport(e, { serverCertificateHashes: t, datagramsReadableType: "bytes" });
        let r = this,
            i = {
                userId: BigInt(n),
                get writer() {
                    return r.writer;
                },
                get maxDatagramSize() {
                    return r.transport.datagrams.maxDatagramSize;
                },
                get connected() {
                    return !r.disconnected;
                },
                emit: function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    return postMessage([e, ...n]);
                },
            };
        (L.forEach((e) => {
            let t = new e(i);
            (this.protocols.push(t),
                e.packetTypes.forEach((e) => {
                    this.protocolsByPacketType.set(e, t);
                }));
        }),
            this.connect());
    }
    command(e, t) {
        for (let n of this.protocols) if (n.command(e, t)) return;
    }
    disconnect() {
        this.disconnected || ((this.disconnected = !0), postMessage([o.Disconnect]));
    }
    async connect() {
        let e = !1;
        try {
            await this.transport.ready;
            let t = this.transport.datagrams;
            ((this.writer = (t.createWritable?.() ?? t.writable).getWriter()),
                (this.reader = t.readable.getReader({ mode: "byob" })),
                postMessage([o.ReadStarted, t.maxDatagramSize]),
                this.read(),
                (e = !0),
                postMessage([o.Connect]),
                await this.transport.closed);
        } catch (n) {
            let t = e ? "WebTransport closed with error" : "WebTransport connection failed";
            postMessage([o.Failure, `${t} ${p(n, this.url)}`, e ? void 0 : "failed to connect"]);
        } finally {
            this.disconnect();
        }
    }
    async read() {
        let e = new ArrayBuffer(this.transport.datagrams.maxDatagramSize);
        try {
            for (; null != this.reader;) {
                let t = await this.reader.read(new Uint8Array(e));
                if (null == t.value) break;
                e = t.value.buffer;
                let n = (function (e) {
                    if (e.byteLength < 17) return null;
                    let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return {
                        header: { destination: t.getBigUint64(0), sender: t.getBigUint64(8), type: t.getUint8(16) },
                        view: t,
                    };
                })(t.value);
                if ((null != n && this.protocolsByPacketType.get(n.header.type)?.receive(n.header, n.view), t.done))
                    break;
            }
        } catch (e) {
            for (let t of this.protocols) t.readFailure?.(e);
        } finally {
            this.disconnect();
        }
    }
    async close() {
        (await Promise.all(this.protocols.map((e) => e.close?.())),
            this.reader?.cancel(),
            (this.reader = null),
            this.writer?.abort(),
            (this.writer = null),
            this.transport.close());
    }
}
let $ = null;
onmessage = (e) => {
    let [t, ...n] = e.data;
    try {
        t === u.Connect
            ? ($?.close(), ($ = new j(n[0], n[1], n[2])))
            : t === u.Close
              ? ($?.close(), ($ = null))
              : $?.command(t, n);
    } catch (e) {
        t === u.Connect
            ? (postMessage([o.Failure, `WebTransport connection failed ${p(e, n[0])}`, g(e)]),
              postMessage([o.Disconnect]))
            : postMessage([o.Log, g(e)]);
    }
};
