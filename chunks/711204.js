i.d(t, { r: () => l });
var r = i(927813),
    s = i(723702),
    n = i(290805),
    a = i(622397);
let o = +r.A.Millis.MINUTE;
class l {
    mode = null;
    sampleIntervalId = null;
    sessionStartTime = 0;
    peakMemory = 0;
    start(e, t) {
        (this.mode = e),
            (this.sessionStartTime = t),
            (this.peakMemory = e.getMemory()?.usedJSHeapSize ?? 0),
            this.sampleAndSend(),
            (this.sampleIntervalId = window.setInterval(() => {
                this.sampleAndSend();
            }, o));
    }
    stop() {
        null != this.sampleIntervalId && (clearInterval(this.sampleIntervalId), (this.sampleIntervalId = null)),
            (this.mode = null);
    }
    getPeakMemory() {
        return this.peakMemory;
    }
    getCurrentMemory() {
        return this.mode?.getMemory()?.usedJSHeapSize ?? 0;
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
            i = { platform: (0, s.getNativePlatform)(), release_channel: n.y ?? "unknown", uptime_bucket: (0, a.X)(t) },
            r = {
                type: "heap_snapshot_interval",
                session_id: this.mode.sessionId,
                commit_sha: this.mode.commitSha,
                branch_name: this.mode.branchName,
                commit_date: this.mode.commitDate,
                timestamp: new Date().toISOString(),
                build_number: "493560",
                built_at: "1770252554499",
                release_channel: n.y ?? "unknown",
                tags: i,
                metrics: {
                    js_heap_size_limit: e.jsHeapSizeLimit,
                    total_js_heap_size: e.totalJSHeapSize,
                    used_js_heap_size: e.usedJSHeapSize,
                    peak_memory: this.peakMemory,
                    delta_from_baseline:
                        null != this.mode.baselineUsedMemory ? e.usedJSHeapSize - this.mode.baselineUsedMemory : void 0,
                    baseline_memory: this.mode.baselineUsedMemory,
                    timing: { collected_at: this.mode.performanceNow() },
                },
            };
        this.mode.sendToIngest(r);
    }
}
