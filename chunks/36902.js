n.d(t, { Z: () => u }), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(46973),
    s = n(909766);
function o(e, t, n) {
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
let l = 1000;
class u {
    start() {
        this.connection.on(a.Sh.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(a.Sh.Stats, this.sampleStats);
    }
    getPttQueueLatencyStats() {
        let e = this.pttQueueLatencyHistogram.getReport([50, 95]);
        return {
            ptt_queue_latency_max: e.max,
            ptt_queue_latency_mean: e.mean,
            ptt_queue_latency_p50: e.percentiles['50'],
            ptt_queue_latency_p95: e.percentiles['95'],
            ptt_queue_latency_samples: e.samples
        };
    }
    constructor(e) {
        o(this, 'connection', void 0),
            o(this, 'pttQueueLatencyHistogram', void 0),
            o(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.sampleStats = (e) => {
                null != e &&
                    r().forEach(e.rtp.outbound, (e) => {
                        if ('audio' === e.type) {
                            var t;
                            for (let n of null !== (t = e.pttQueueLatencyMicrosSamples) && void 0 !== t ? t : []) {
                                let e = n / l;
                                this.pttQueueLatencyHistogram.addSample(e);
                            }
                        }
                    });
            }),
            (this.pttQueueLatencyHistogram = new s.b());
    }
}
