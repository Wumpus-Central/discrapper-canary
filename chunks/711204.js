i.d(t, {
    r: () => m,
});
var r = i(927813),
    n = i(723702),
    s = i(290805),
    a = i(622397);

function o(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
let l = +r.A.Millis.MINUTE;
class m {
    start(e, t) {
        var i, r;
        (this.mode = e),
            (this.sessionStartTime = t),
            (this.peakMemory = null != (i = null == (r = e.getMemory()) ? void 0 : r.usedJSHeapSize) ? i : 0),
            this.sampleAndSend(),
            (this.sampleIntervalId = window.setInterval(() => {
                this.sampleAndSend();
            }, l));
    }
    stop() {
        null != this.sampleIntervalId && (clearInterval(this.sampleIntervalId), (this.sampleIntervalId = null)),
            (this.mode = null);
    }
    getPeakMemory() {
        return this.peakMemory;
    }
    getCurrentMemory() {
        var e, t, i;
        return null != (e = null == (i = this.mode) || null == (t = i.getMemory()) ? void 0 : t.usedJSHeapSize) ? e : 0;
    }
    updatePeakMemory(e) {
        e > this.peakMemory && (this.peakMemory = e);
    }
    sampleAndSend() {
        if (null == this.mode) return;
        let e = this.mode.getMemory();
        if (null == e) return;
        this.updatePeakMemory(e.usedJSHeapSize);
        let t = this.mode.performanceNow() - this.sessionStartTime,
            i = {
                platform: (0, n.getNativePlatform)(),
                release_channel: null !== s.y && void 0 !== s.y ? s.y : "unknown",
                uptime_bucket: (0, a.X)(t),
            },
            r = {
                type: "heap_snapshot_interval",
                session_id: this.mode.sessionId,
                commit_sha: this.mode.commitSha,
                branch_name: this.mode.branchName,
                commit_date: this.mode.commitDate,
                timestamp: new Date().toISOString(),
                build_number: "488230",
                built_at: "1769110173981",
                release_channel: null !== s.y && void 0 !== s.y ? s.y : "unknown",
                tags: i,
                metrics: {
                    js_heap_size_limit: e.jsHeapSizeLimit,
                    total_js_heap_size: e.totalJSHeapSize,
                    used_js_heap_size: e.usedJSHeapSize,
                    peak_memory: this.peakMemory,
                    delta_from_baseline:
                        null != this.mode.baselineUsedMemory ? e.usedJSHeapSize - this.mode.baselineUsedMemory : void 0,
                    baseline_memory: this.mode.baselineUsedMemory,
                },
            };
        this.mode.sendToIngest(r);
    }
    constructor() {
        o(this, "mode", null),
            o(this, "sampleIntervalId", null),
            o(this, "sessionStartTime", 0),
            o(this, "peakMemory", 0);
    }
}
