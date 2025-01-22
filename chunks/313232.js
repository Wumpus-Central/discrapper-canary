r.d(n, {
    r: function () {
        return s;
    }
});
var i,
    a = r(47120);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class s {
    update(e) {
        for (let n in e.rtp.inbound)
            for (let r of e.rtp.inbound[n])
                if ('video' === r.type) {
                    let e = this.getInboundBytesRecevierCalculator(r),
                        n = this.getInboundFrameDecodeRateCalculator(r);
                    (r.bitrate = e.calculate(r)), (r.frameRateDecode = n.calculate(r));
                }
        for (let n of e.rtp.outbound)
            if ('video' === n.type) {
                let e = this.getOutboundBytesSentCalculator(n),
                    r = this.getOutboundEncodeRateCalculator(n);
                (n.bitrate = e.calculate(n)), (n.frameRateEncode = r.calculate(n));
            }
    }
    static getCalculatorOrCreate(e, n, r, i) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            o = e[n.ssrc];
        return null == o && ((o = new u(r, i, a)), (e[n.ssrc] = o)), o;
    }
    getInboundBytesRecevierCalculator(e) {
        return s.getCalculatorOrCreate(this.inboundVideoBitrate, e, 'bytesReceived', 'timestamp', 3);
    }
    getInboundFrameDecodeRateCalculator(e) {
        return s.getCalculatorOrCreate(this.inboundDecodeFps, e, 'framesDecoded', 'timestamp', 5);
    }
    getOutboundBytesSentCalculator(e) {
        return s.getCalculatorOrCreate(this.outboundVideoBitrate, e, 'bytesSent', 'timestamp', 3);
    }
    getOutboundEncodeRateCalculator(e) {
        return s.getCalculatorOrCreate(this.outboundEncodeFps, e, 'framesEncoded', 'timestamp', 5);
    }
    constructor() {
        o(this, 'inboundVideoBitrate', {}), o(this, 'inboundDecodeFps', {}), o(this, 'outboundVideoBitrate', {}), o(this, 'outboundEncodeFps', {});
    }
}
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.MILLISECONDS_FROM_SECONDS = 1)] = 'MILLISECONDS_FROM_SECONDS'), (e[(e.BYTES_TO_BITS = 2)] = 'BYTES_TO_BITS'), (e[(e.ROUND = 4)] = 'ROUND');
})(i || (i = {}));
let l = {
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
class u {
    calculate(e) {
        let n = this.previous;
        if (((this.previous = e), null == n)) return;
        let r = e.timestamp - n.timestamp;
        if (r <= 0 || 'number' != typeof r) return;
        let i = n[this.accumulativeMetricKey],
            a = e[this.accumulativeMetricKey];
        if ('number' != typeof i || 'number' != typeof a) return;
        let o = n[this.samplesMetricKey],
            s = e[this.samplesMetricKey];
        if ('number' != typeof o || 'number' != typeof s) return;
        let l = ((a - i) / (s - o)) * this.multiplier;
        return this.round ? Math.round(l) : l;
    }
    constructor(e, n, r = 0) {
        for (let u in (o(this, 'accumulativeMetricKey', void 0), o(this, 'samplesMetricKey', void 0), o(this, 'previous', void 0), o(this, 'multiplier', void 0), o(this, 'round', void 0), (this.accumulativeMetricKey = e), (this.samplesMetricKey = n), (this.multiplier = 1), (this.round = !1), i)) {
            var a, s;
            let e = Number(u);
            if (!isNaN(e) && (r & e) != 0 && u in l) this.multiplier *= null !== (s = null === (a = l[u]) || void 0 === a ? void 0 : a.multiplier) && void 0 !== s ? s : 1;
        }
        this.round = (4 & r) != 0;
    }
}
