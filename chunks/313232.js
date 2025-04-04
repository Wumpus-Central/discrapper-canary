function r(e, t, n) {
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
n.d(t, { r: () => i }), n(47120);
class i {
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
    static getCalculatorOrCreate(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            o = e[t.ssrc];
        return null == o && ((o = new s(n, r, i)), (e[t.ssrc] = o)), o;
    }
    getInboundBytesRecevierCalculator(e) {
        return i.getCalculatorOrCreate(this.inboundVideoBitrate, e, 'bytesReceived', 'timestamp', 3);
    }
    getInboundFrameDecodeRateCalculator(e) {
        return i.getCalculatorOrCreate(this.inboundDecodeFps, e, 'framesDecoded', 'timestamp', 5);
    }
    getOutboundBytesSentCalculator(e) {
        return i.getCalculatorOrCreate(this.outboundVideoBitrate, e, 'bytesSent', 'timestamp', 3);
    }
    getOutboundEncodeRateCalculator(e) {
        return i.getCalculatorOrCreate(this.outboundEncodeFps, e, 'framesEncoded', 'timestamp', 5);
    }
    constructor() {
        r(this, 'inboundVideoBitrate', {}), r(this, 'inboundDecodeFps', {}), r(this, 'outboundVideoBitrate', {}), r(this, 'outboundEncodeFps', {});
    }
}
var o = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.MILLISECONDS_FROM_SECONDS = 1)] = 'MILLISECONDS_FROM_SECONDS'), (e[(e.BYTES_TO_BITS = 2)] = 'BYTES_TO_BITS'), (e[(e.ROUND = 4)] = 'ROUND'), e;
})(o || {});
let a = {
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
class s {
    calculate(e) {
        let t = this.previous;
        if (((this.previous = e), null == t)) return;
        let n = e.timestamp - t.timestamp;
        if (n <= 0 || 'number' != typeof n) return;
        let r = t[this.accumulativeMetricKey],
            i = e[this.accumulativeMetricKey];
        if ('number' != typeof r || 'number' != typeof i) return;
        let o = t[this.samplesMetricKey],
            a = e[this.samplesMetricKey];
        if ('number' != typeof o || 'number' != typeof a) return;
        let s = ((i - r) / (a - o)) * this.multiplier;
        return this.round ? Math.round(s) : s;
    }
    constructor(e, t, n = 0) {
        for (let l in (r(this, 'accumulativeMetricKey', void 0), r(this, 'samplesMetricKey', void 0), r(this, 'previous', void 0), r(this, 'multiplier', void 0), r(this, 'round', void 0), (this.accumulativeMetricKey = e), (this.samplesMetricKey = t), (this.multiplier = 1), (this.round = !1), o)) {
            var i, s;
            let e = Number(l);
            !isNaN(e) && (n & e) != 0 && l in a && (this.multiplier *= null != (s = null == (i = a[l]) ? void 0 : i.multiplier) ? s : 1);
        }
        this.round = (4 & n) != 0;
    }
}
