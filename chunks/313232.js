function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { r: () => r }), n(47120);
class r {
    update(e) {
        for (let t in e.rtp.inbound)
            for (let n of e.rtp.inbound[t])
                if ('video' === n.type) {
                    let e = this.getInboundBytesRecevierCalculator(n),
                        t = this.getInboundFrameDecodeRateCalculator(n);
                    (n.bitrate = e.calculate(n)), (n.frameRateDecode = t.calculate(n));
                }
        for (let t of e.rtp.outbound)
            if ('video' === t.type) {
                let e = this.getOutboundBytesSentCalculator(t),
                    n = this.getOutboundEncodeRateCalculator(t);
                (t.bitrate = e.calculate(t)), (t.frameRateEncode = n.calculate(t));
            }
    }
    static getCalculatorOrCreate(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            a = e[t.ssrc];
        return null == a && ((a = new o(n, i, r)), (e[t.ssrc] = a)), a;
    }
    getInboundBytesRecevierCalculator(e) {
        return r.getCalculatorOrCreate(this.inboundVideoBitrate, e, 'bytesReceived', 'timestamp', 3);
    }
    getInboundFrameDecodeRateCalculator(e) {
        return r.getCalculatorOrCreate(this.inboundDecodeFps, e, 'framesDecoded', 'timestamp', 5);
    }
    getOutboundBytesSentCalculator(e) {
        return r.getCalculatorOrCreate(this.outboundVideoBitrate, e, 'bytesSent', 'timestamp', 3);
    }
    getOutboundEncodeRateCalculator(e) {
        return r.getCalculatorOrCreate(this.outboundEncodeFps, e, 'framesEncoded', 'timestamp', 5);
    }
    constructor() {
        i(this, 'inboundVideoBitrate', {}), i(this, 'inboundDecodeFps', {}), i(this, 'outboundVideoBitrate', {}), i(this, 'outboundEncodeFps', {});
    }
}
var a = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.MILLISECONDS_FROM_SECONDS = 1)] = 'MILLISECONDS_FROM_SECONDS'), (e[(e.BYTES_TO_BITS = 2)] = 'BYTES_TO_BITS'), (e[(e.ROUND = 4)] = 'ROUND'), e;
})(a || {});
let s = {
    0: { multiplier: 1 },
    1: {
        postfix: '_in_ms',
        multiplier: 1000
    },
    2: {
        bitrate: !0,
        postfix: '',
        multiplier: 8
    }
};
class o {
    calculate(e) {
        let t = this.previous;
        if (((this.previous = e), null == t)) return;
        let n = e.timestamp - t.timestamp;
        if (n <= 0 || 'number' != typeof n) return;
        let i = t[this.accumulativeMetricKey],
            r = e[this.accumulativeMetricKey];
        if ('number' != typeof i || 'number' != typeof r) return;
        let a = t[this.samplesMetricKey],
            s = e[this.samplesMetricKey];
        if ('number' != typeof a || 'number' != typeof s) return;
        let o = ((r - i) / (s - a)) * this.multiplier;
        return this.round ? Math.round(o) : o;
    }
    constructor(e, t, n = 0) {
        for (let l in (i(this, 'accumulativeMetricKey', void 0), i(this, 'samplesMetricKey', void 0), i(this, 'previous', void 0), i(this, 'multiplier', void 0), i(this, 'round', void 0), (this.accumulativeMetricKey = e), (this.samplesMetricKey = t), (this.multiplier = 1), (this.round = !1), a)) {
            var r, o;
            let e = Number(l);
            !isNaN(e) && (n & e) != 0 && l in s && (this.multiplier *= null !== (o = null === (r = s[l]) || void 0 === r ? void 0 : r.multiplier) && void 0 !== o ? o : 1);
        }
        this.round = (4 & n) != 0;
    }
}
