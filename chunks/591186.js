"use strict";
n.d(t, { A: () => l });
var r = n(735438),
    i = n.n(r),
    a = n(205693),
    s = n(687658);
let o = 1e3;
class l {
    connection;
    pttQueueLatencyHistogram;
    constructor(e) {
        (this.connection = e), (this.pttQueueLatencyHistogram = new s.d());
    }
    start() {
        this.connection.on(a.yq.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(a.yq.Stats, this.sampleStats);
    }
    getPttQueueLatencyStats() {
        let e = this.pttQueueLatencyHistogram.getReport([50, 95]);
        return {
            ptt_queue_latency_max: e.max,
            ptt_queue_latency_mean: e.mean,
            ptt_queue_latency_p50: e.percentiles["50"],
            ptt_queue_latency_p95: e.percentiles["95"],
            ptt_queue_latency_samples: e.samples,
        };
    }
    sampleStats = (e) => {
        null != e &&
            i().forEach(e.rtp.outbound, (e) => {
                if ("audio" === e.type)
                    for (let t of e.pttQueueLatencyMicrosSamples ?? []) {
                        let e = t / o;
                        this.pttQueueLatencyHistogram.addSample(e);
                    }
            });
    };
}
