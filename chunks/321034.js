"use strict";
n.d(t, { A: () => u });
var r = n(77729),
    i = n(626584),
    s = n(832213),
    a = n(837921);
let o = new i.A("ProcessUtilsElectron");
class l extends s.D {
    lastMemoryUsageKB = void 0;
    constructor() {
        super(), (this.cpuCoreCount = r.A?.processUtils?.getCPUCoreCount?.()), this.setupReportingTimer();
    }
    setupReportingTimer() {
        let e = r.A?.processUtils?.setMemoryInformation;
        if (null == e) return void o.log("setMemoryInformation not available.");
        function t(e) {
            return Math.ceil(e / 1024);
        }
        performance.memory?.usedJSHeapSize == null && o.error("usedJSHeapSize is not available."),
            setInterval(() => {
                let n = performance.memory?.usedJSHeapSize ?? 0;
                e({ memoryUsageKB: this.lastMemoryUsageKB ?? 0, usedJSHeapSizeKB: t(n) });
            }, 1e4);
    }
    getProcessUptime() {
        return r.A?.processUtils?.getProcessUptime?.();
    }
    getCurrentCPUUsagePercent() {
        return r.A?.processUtils?.getCurrentCPUUsagePercent?.();
    }
    getCumulativeCPUUsage() {
        return r.A?.processUtils?.getCumulativeCPUUsage?.();
    }
    getCurrentMemoryUsageKB() {
        let e = l.getCurrentMemoryUsageKBCore();
        return (this.lastMemoryUsageKB = e), e;
    }
    static getCurrentMemoryUsageKBCore() {
        try {
            let e = a.Ay.getDiscordMemoryUsage();
            if (null == e) return 0;
            let t = Object.values(e).reduce((e, t) => e + t, 0);
            return Math.ceil(t / 1024);
        } catch (e) {
            return 0;
        }
    }
    getMemoryUsageDetails() {
        return a.Ay.getDiscordMemoryUsage();
    }
    getMemoryUsageElectronRenderer() {
        try {
            return a.Ay.getDiscordMemoryUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryPrivateUsageElectronRenderer() {
        try {
            return a.Ay.getDiscordMemoryPrivateUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryUsageElectronRendererUsedHeapSize() {
        return r.A?.processUtils?.getUsedHeapSize?.();
    }
    getMemoryHeapStats() {
        return r.A?.processUtils?.getHeapStats?.();
    }
    getBlinkMemoryInfo() {
        return r.A?.processUtils?.getBlinkMemoryInfo?.();
    }
    getMemoryUsageElectronProcessTypeDetails() {
        try {
            return a.Ay.getDiscordMemoryUsageElectronProcessTypeDetails();
        } catch (e) {
            return null;
        }
    }
    enablePerfMemoryHooks(e) {
        try {
            return a.Ay.enablePerfMemoryHooks(e);
        } catch (e) {
            return null;
        }
    }
    disablePerfMemoryHooks() {
        try {
            return a.Ay.disablePerfMemoryHooks();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemory() {
        try {
            return a.Ay.getPerfAttributedMemory();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemoryCallstacks(e) {
        try {
            return a.Ay.getPerfAttributedMemoryCallstacks(e);
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemoryStats() {
        try {
            return a.Ay.getPerfAttributedMemoryStats();
        } catch (e) {
            return null;
        }
    }
    startCPUProfiling(e) {
        try {
            return a.Ay.startCPUProfiling(e);
        } catch (e) {
            return null;
        }
    }
    stopCPUProfiling() {
        return a.Ay.stopCPUProfiling();
    }
    enablePAMemoryProfiler(e) {
        try {
            let t = r.A?.processUtils?.enablePAMemoryProfiler;
            if (void 0 === t) return null;
            return t(e), !0;
        } catch (e) {
            return null;
        }
    }
    disablePAMemoryProfiler() {
        try {
            let e = r.A?.processUtils?.disablePAMemoryProfiler;
            if (void 0 === e) return null;
            return e(), !0;
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedPAMemory() {
        try {
            return r.A?.processUtils?.getPerfAttributedPAMemory?.();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedPAMemoryCallstacks(e) {
        try {
            return r.A?.processUtils?.getPerfAttributedPAMemoryCallstacks?.(e);
        } catch (e) {
            return null;
        }
    }
    getPartitionAllocatorStats() {
        try {
            return r.A?.processUtils?.getPartitionAllocatorStats?.();
        } catch (e) {
            return null;
        }
    }
    enableProfilingV8Heap(e) {
        try {
            return r.A?.processUtils?.enableProfilingV8Heap?.(e);
        } catch (e) {
            return;
        }
    }
    disableProfilingV8Heap() {
        try {
            return r.A?.processUtils?.disableProfilingV8Heap?.();
        } catch (e) {
            return;
        }
    }
    getProfilerV8MemoryCallstacks() {
        try {
            return r.A?.processUtils?.getProfilerV8MemoryCallstacks?.();
        } catch (e) {
            return null;
        }
    }
    getSystemMetrics() {
        try {
            return r.A?.processUtils?.getSystemMetrics?.() ?? Promise.resolve(null);
        } catch (e) {
            return Promise.resolve(null);
        }
    }
}
let u = new l();
