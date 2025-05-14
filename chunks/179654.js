n.d(t, { Z: () => s });
var r = n(934458),
    i = n(848479),
    o = n(909766);
function a(e, t, n) {
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
class s {
    getStats() {
        let e = this.cpuHistogram.getReport(),
            t = this.memoryHistogram.getReport(),
            n = i.Z.getCumulativeCPUUsage(),
            r = null == this.startCPU || null == n ? void 0 : ((n.usage - this.startCPU.usage) * 100) / ((n.sampleTime - this.startCPU.sampleTime) / 1000);
        return {
            client_performance_cpu_percentile25: e.percentiles[25],
            client_performance_cpu_percentile50: e.percentiles[50],
            client_performance_cpu_percentile75: e.percentiles[75],
            client_performance_cpu_percentile90: e.percentiles[90],
            client_performance_cpu_percentile95: e.percentiles[95],
            client_performance_cpu_mean: null != r ? r : e.mean,
            client_performance_memory_percentile25: t.percentiles[25],
            client_performance_memory_percentile50: t.percentiles[50],
            client_performance_memory_percentile75: t.percentiles[75],
            client_performance_memory_percentile90: t.percentiles[90],
            client_performance_memory_percentile95: t.percentiles[95],
            client_performance_memory_min: t.min,
            client_performance_memory_max: t.max,
            client_performance_memory_mean: t.mean
        };
    }
    takeSample() {
        let e = i.Z.getCumulativeCPUUsage(),
            t = i.Z.getCurrentMemoryUsageKB();
        if (null != e) {
            let t = !0;
            if (null != this.lastCPU) {
                let n = e.sampleTime - this.lastCPU.sampleTime;
                if (n >= 1) {
                    let t = ((e.usage - this.lastCPU.usage) / (n / 1000)) * 100;
                    this.cpuHistogram.addSample(t, n);
                } else t = !1;
            }
            t && (this.lastCPU = e);
        } else {
            let e = i.Z.getCurrentCPUUsagePercent();
            null != e && this.cpuHistogram.addSample(e);
        }
        null != t && this.memoryHistogram.addSample(t);
    }
    async getCurrentBattery() {
        try {
            let { batteryLevel: e } = await (0, r._N)({ fallback: !1 });
            return e;
        } catch (e) {
            return null;
        }
    }
    async setLastBattery() {
        this.lastBattery = await this.getCurrentBattery();
    }
    async getBatteryLevelStats() {
        let e = await this.getCurrentBattery();
        return null == this.lastBattery || null == e
            ? {
                  startBattery: this.lastBattery,
                  currentBattery: e,
                  batteryUsageRounded: null
              }
            : {
                  startBattery: this.lastBattery,
                  currentBattery: e,
                  batteryUsageRounded: Math.round((e - this.lastBattery) * 1000) / 1000
              };
    }
    constructor() {
        a(this, 'cpuHistogram', new o.b()), a(this, 'memoryHistogram', new o.b()), a(this, 'startCPU', i.Z.getCumulativeCPUUsage()), a(this, 'lastCPU', this.startCPU), a(this, 'lastBattery', null);
    }
}
