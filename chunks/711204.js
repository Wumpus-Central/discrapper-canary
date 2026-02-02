r.d(t, {
    r: () => m,
});
var i = r(927813),
    n = r(723702),
    s = r(290805),
    a = r(622397);

function o(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let l = +i.A.Millis.MINUTE;
class m {
    start(e, t) {
        var r, i;
        (this.mode = e),
            (this.sessionStartTime = t),
            (this.peakMemory = null != (r = null == (i = e.getMemory()) ? void 0 : i.usedJSHeapSize) ? r : 0),
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
        var e, t, r;
        return null != (e = null == (r = this.mode) || null == (t = r.getMemory()) ? void 0 : t.usedJSHeapSize) ? e : 0;
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
            r = {
                platform: (0, n.getNativePlatform)(),
                release_channel: null !== s.y && void 0 !== s.y ? s.y : "unknown",
                uptime_bucket: (0, a.X)(t),
            },
            i = {
                type: "heap_snapshot_interval",
                session_id: this.mode.sessionId,
                commit_sha: this.mode.commitSha,
                branch_name: this.mode.branchName,
                commit_date: this.mode.commitDate,
                timestamp: new Date().toISOString(),
                build_number: "492190",
                built_at: "1770061493534",
                release_channel: null !== s.y && void 0 !== s.y ? s.y : "unknown",
                tags: r,
                metrics: {
                    js_heap_size_limit: e.jsHeapSizeLimit,
                    total_js_heap_size: e.totalJSHeapSize,
                    used_js_heap_size: e.usedJSHeapSize,
                    peak_memory: this.peakMemory,
                    delta_from_baseline:
                        null != this.mode.baselineUsedMemory ? e.usedJSHeapSize - this.mode.baselineUsedMemory : void 0,
                    baseline_memory: this.mode.baselineUsedMemory,
                    timing: {
                        collected_at: this.mode.performanceNow(),
                    },
                },
            };
        this.mode.sendToIngest(i);
    }
    constructor() {
        o(this, "mode", null),
            o(this, "sampleIntervalId", null),
            o(this, "sessionStartTime", 0),
            o(this, "peakMemory", 0);
    }
}
