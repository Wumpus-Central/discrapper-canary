r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(848479),
    a = r(909766);
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
    getStats() {
        let e = this.cpuHistogram.getReport(),
            n = this.memoryHistogram.getReport(),
            r = i.Z.getCumulativeCPUUsage(),
            a = null == this.startCPU || null == r ? void 0 : ((r.usage - this.startCPU.usage) * 100) / ((r.sampleTime - this.startCPU.sampleTime) / 1000);
        return {
            client_performance_cpu_percentile25: e.percentiles[25],
            client_performance_cpu_percentile50: e.percentiles[50],
            client_performance_cpu_percentile75: e.percentiles[75],
            client_performance_cpu_percentile90: e.percentiles[90],
            client_performance_cpu_percentile95: e.percentiles[95],
            client_performance_cpu_mean: null != a ? a : e.mean,
            client_performance_memory_percentile25: n.percentiles[25],
            client_performance_memory_percentile50: n.percentiles[50],
            client_performance_memory_percentile75: n.percentiles[75],
            client_performance_memory_percentile90: n.percentiles[90],
            client_performance_memory_percentile95: n.percentiles[95],
            client_performance_memory_min: n.min,
            client_performance_memory_max: n.max,
            client_performance_memory_mean: n.mean
        };
    }
    takeSample() {
        let e = i.Z.getCumulativeCPUUsage(),
            n = i.Z.getCurrentMemoryUsageKB();
        if (null != e) {
            let n = !0;
            if (null != this.lastCPU) {
                let r = e.sampleTime - this.lastCPU.sampleTime;
                if (r >= 1) {
                    let n = ((e.usage - this.lastCPU.usage) / (r / 1000)) * 100;
                    this.cpuHistogram.addSample(n, r);
                } else n = !1;
            }
            n && (this.lastCPU = e);
        } else {
            let e = i.Z.getCurrentCPUUsagePercent();
            null != e && this.cpuHistogram.addSample(e);
        }
        null != n && this.memoryHistogram.addSample(n);
    }
    constructor() {
        o(this, 'cpuHistogram', new a.b()), o(this, 'memoryHistogram', new a.b()), o(this, 'startCPU', i.Z.getCumulativeCPUUsage()), o(this, 'lastCPU', this.startCPU);
    }
}
