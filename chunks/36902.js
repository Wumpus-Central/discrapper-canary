n.d(t, { Z: () => c }), n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(46973),
    a = n(909766);
function s(e, t, n) {
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
class c {
    start() {
        this.connection.on(o.Sh.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(o.Sh.Stats, this.sampleStats);
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
        s(this, 'connection', void 0),
            s(this, 'pttQueueLatencyHistogram', void 0),
            s(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.sampleStats = (e) => {
                null != e &&
                    i().forEach(e.rtp.outbound, (e) => {
                        if ('audio' === e.type) {
                            var t;
                            for (let n of null !== (t = e.pttQueueLatencyMicrosSamples) && void 0 !== t ? t : []) {
                                let e = n / l;
                                this.pttQueueLatencyHistogram.addSample(e);
                            }
                        }
                    });
            }),
            (this.pttQueueLatencyHistogram = new a.b());
    }
}
