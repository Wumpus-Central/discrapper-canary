"use strict";
n.d(t, { J: () => r });
class r {
    inboundVideoBitrate = {};
    inboundDecodeFps = {};
    outboundVideoBitrate = {};
    outboundEncodeFps = {};
    update(e) {
        for (let t in e.rtp.inbound)
            for (let n of e.rtp.inbound[t])
                if ("video" === n.type) {
                    let e = this.getInboundBytesRecevierCalculator(n),
                        t = this.getInboundFrameDecodeRateCalculator(n);
                    (n.bitrate = e.calculate(n)), (n.frameRateDecode = t.calculate(n));
                }
        for (let t of e.rtp.outbound)
            if ("video" === t.type) {
                let e = this.getOutboundBytesSentCalculator(t),
                    n = this.getOutboundEncodeRateCalculator(t);
                (t.bitrate = e.calculate(t)), (t.frameRateEncode = n.calculate(t));
            }
    }
    static getCalculatorOrCreate(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = e[t.ssrc];
        return null == s && ((s = new o(n, r, i)), (e[t.ssrc] = s)), s;
    }
    getInboundBytesRecevierCalculator(e) {
        return r.getCalculatorOrCreate(this.inboundVideoBitrate, e, "bytesReceived", "timestamp", 3);
    }
    getInboundFrameDecodeRateCalculator(e) {
        return r.getCalculatorOrCreate(this.inboundDecodeFps, e, "framesDecoded", "timestamp", 5);
    }
    getOutboundBytesSentCalculator(e) {
        return r.getCalculatorOrCreate(this.outboundVideoBitrate, e, "bytesSent", "timestamp", 3);
    }
    getOutboundEncodeRateCalculator(e) {
        return r.getCalculatorOrCreate(this.outboundEncodeFps, e, "framesEncoded", "timestamp", 5);
    }
}
var i,
    s =
        (((i = s || {})[(i.NONE = 0)] = "NONE"),
        (i[(i.MILLISECONDS_FROM_SECONDS = 1)] = "MILLISECONDS_FROM_SECONDS"),
        (i[(i.BYTES_TO_BITS = 2)] = "BYTES_TO_BITS"),
        (i[(i.ROUND = 4)] = "ROUND"),
        i);
let a = {
    0: { multiplier: 1 },
    1: { postfix: "_in_ms", multiplier: 1e3 },
    2: { bitrate: !0, postfix: "", multiplier: 8 },
};
class o {
    accumulativeMetricKey;
    samplesMetricKey;
    previous;
    multiplier = 1;
    round = !1;
    constructor(e, t, n = 0) {
        for (const r in ((this.accumulativeMetricKey = e), (this.samplesMetricKey = t), s)) {
            const e = Number(r);
            !isNaN(e) && (n & e) != 0 && r in a && (this.multiplier *= a[r]?.multiplier ?? 1);
        }
        this.round = (4 & n) != 0;
    }
    calculate(e) {
        let t = this.previous;
        if (((this.previous = e), null == t)) return;
        let n = e.timestamp - t.timestamp;
        if (n <= 0 || "number" != typeof n) return;
        let r = t[this.accumulativeMetricKey],
            i = e[this.accumulativeMetricKey];
        if ("number" != typeof r || "number" != typeof i) return;
        let s = t[this.samplesMetricKey],
            a = e[this.samplesMetricKey];
        if ("number" != typeof s || "number" != typeof a) return;
        let o = ((i - r) / (a - s)) * this.multiplier;
        return this.round ? Math.round(o) : o;
    }
}
