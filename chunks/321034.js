n.d(t, { A: () => u });
var i = n(77729),
    r = n(626584),
    a = n(832213),
    l = n(19575);
let s = new r.A("ProcessUtilsElectron");
class o extends a.D {
    lastMemoryUsageKB = void 0;
    constructor() {
        super(), (this.cpuCoreCount = i.A?.processUtils?.getCPUCoreCount?.()), this.setupReportingTimer();
    }
    setupReportingTimer() {
        let e = i.A?.processUtils?.setMemoryInformation;
        null == e
            ? s.log("setMemoryInformation not available.")
            : (performance.memory?.usedJSHeapSize == null && s.error("usedJSHeapSize is not available."),
              setInterval(() => {
                  let t = performance.memory?.usedJSHeapSize ?? 0;
                  e({ memoryUsageKB: this.lastMemoryUsageKB ?? 0, usedJSHeapSizeKB: Math.ceil(t / 1024) });
              }, 1e4));
    }
    getProcessUptime() {
        return i.A?.processUtils?.getProcessUptime?.();
    }
    getCurrentCPUUsagePercent() {
        return i.A?.processUtils?.getCurrentCPUUsagePercent?.();
    }
    getCumulativeCPUUsage() {
        return i.A?.processUtils?.getCumulativeCPUUsage?.();
    }
    getCurrentMemoryUsageKB() {
        let e = o.getCurrentMemoryUsageKBCore();
        return (this.lastMemoryUsageKB = e), e;
    }
    static getCurrentMemoryUsageKBCore() {
        try {
            let e = l.Ay.getDiscordMemoryUsage();
            if (null == e) return 0;
            let t = Object.values(e).reduce((e, t) => e + t, 0);
            return Math.ceil(t / 1024);
        } catch (e) {
            return 0;
        }
    }
    getMemoryUsageDetails() {
        return l.Ay.getDiscordMemoryUsage();
    }
    getMemoryUsageElectronRenderer() {
        try {
            return l.Ay.getDiscordMemoryUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryPrivateUsageElectronRenderer() {
        try {
            return l.Ay.getDiscordMemoryPrivateUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryUsageElectronRendererUsedHeapSize() {
        return i.A?.processUtils?.getUsedHeapSize?.();
    }
    getMemoryHeapStats() {
        return i.A?.processUtils?.getHeapStats?.();
    }
    getBlinkMemoryInfo() {
        return i.A?.processUtils?.getBlinkMemoryInfo?.();
    }
    getMemoryUsageElectronProcessTypeDetails() {
        try {
            return l.Ay.getDiscordMemoryUsageElectronProcessTypeDetails();
        } catch (e) {
            return null;
        }
    }
    enablePerfMemoryHooks(e) {
        try {
            return l.Ay.enablePerfMemoryHooks(e);
        } catch (e) {
            return null;
        }
    }
    disablePerfMemoryHooks() {
        try {
            return l.Ay.disablePerfMemoryHooks();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemory() {
        try {
            return l.Ay.getPerfAttributedMemory();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemoryCallstacks(e) {
        try {
            return l.Ay.getPerfAttributedMemoryCallstacks(e);
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemoryStats() {
        try {
            return l.Ay.getPerfAttributedMemoryStats();
        } catch (e) {
            return null;
        }
    }
    startCPUProfiling(e) {
        try {
            return l.Ay.startCPUProfiling(e);
        } catch (e) {
            return null;
        }
    }
    stopCPUProfiling() {
        return l.Ay.stopCPUProfiling();
    }
    enablePAMemoryProfiler(e) {
        try {
            let t = i.A?.processUtils?.enablePAMemoryProfiler;
            if (void 0 === t) return null;
            return t(e), !0;
        } catch (e) {
            return null;
        }
    }
    disablePAMemoryProfiler() {
        try {
            let e = i.A?.processUtils?.disablePAMemoryProfiler;
            if (void 0 === e) return null;
            return e(), !0;
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedPAMemory() {
        try {
            return i.A?.processUtils?.getPerfAttributedPAMemory?.();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedPAMemoryCallstacks(e) {
        try {
            return i.A?.processUtils?.getPerfAttributedPAMemoryCallstacks?.(e);
        } catch (e) {
            return null;
        }
    }
    getPartitionAllocatorStats() {
        try {
            return i.A?.processUtils?.getPartitionAllocatorStats?.();
        } catch (e) {
            return null;
        }
    }
    enableProfilingV8Heap(e) {
        try {
            return i.A?.processUtils?.enableProfilingV8Heap?.(e);
        } catch (e) {
            return;
        }
    }
    disableProfilingV8Heap() {
        try {
            return i.A?.processUtils?.disableProfilingV8Heap?.();
        } catch (e) {
            return;
        }
    }
    getProfilerV8MemoryCallstacks() {
        try {
            return i.A?.processUtils?.getProfilerV8MemoryCallstacks?.();
        } catch (e) {
            return null;
        }
    }
    getSystemMetrics() {
        try {
            return i.A?.processUtils?.getSystemMetrics?.() ?? Promise.resolve(null);
        } catch (e) {
            return Promise.resolve(null);
        }
    }
}
let u = new o();
