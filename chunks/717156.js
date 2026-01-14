i.d(t, { q: () => m });
var n = i(70956),
    r = i(358085),
    s = i(747268),
    a = i(939073);
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
let l = +n.Z.Millis.MINUTE;
class m {
    start(e, t) {
        var i, n;
        (this.mode = e),
            (this.sessionStartTime = t),
            (this.peakMemory = null != (n = null == (i = e.getMemory()) ? void 0 : i.usedJSHeapSize) ? n : 0),
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
        return null != (i = null == (t = this.mode) || null == (e = t.getMemory()) ? void 0 : e.usedJSHeapSize) ? i : 0;
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
                platform: (0, r.getNativePlatform)(),
                release_channel: null !== s.Z && void 0 !== s.Z ? s.Z : "unknown",
                uptime_bucket: (0, a.l)(t),
            },
            n = {
                type: "heap_snapshot_interval",
                session_id: this.mode.sessionId,
                commit_sha: this.mode.commitSha,
                branch_name: this.mode.branchName,
                commit_date: this.mode.commitDate,
                timestamp: new Date().toISOString(),
                build_number: "485747",
                built_at: "1768418470110",
                release_channel: null !== s.Z && void 0 !== s.Z ? s.Z : "unknown",
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
        this.mode.sendToIngest(n);
    }
    constructor() {
        o(this, "mode", null),
            o(this, "sampleIntervalId", null),
            o(this, "sessionStartTime", 0),
            o(this, "peakMemory", 0);
    }
}
