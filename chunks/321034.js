"use strict";
n.d(t, { A: () => u });
var r = n(77729),
    i = n(626584),
    a = n(832213),
    s = n(837921);
let o = new i.A("ProcessUtilsElectron");
class l extends a.D {
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
            let e = s.Ay.getDiscordMemoryUsage();
            if (null == e) return 0;
            let t = Object.values(e).reduce((e, t) => e + t, 0);
            return Math.ceil(t / 1024);
        } catch (e) {
            return 0;
        }
    }
    getMemoryUsageDetails() {
        return s.Ay.getDiscordMemoryUsage();
    }
    getMemoryUsageElectronRenderer() {
        try {
            return s.Ay.getDiscordMemoryUsageElectronRenderer();
        } catch (e) {
            return null;
        }
    }
    getMemoryPrivateUsageElectronRenderer() {
        try {
            return s.Ay.getDiscordMemoryPrivateUsageElectronRenderer();
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
            return s.Ay.getDiscordMemoryUsageElectronProcessTypeDetails();
        } catch (e) {
            return null;
        }
    }
    enablePerfMemoryHooks(e) {
        try {
            return s.Ay.enablePerfMemoryHooks(e);
        } catch (e) {
            return null;
        }
    }
    disablePerfMemoryHooks() {
        try {
            return s.Ay.disablePerfMemoryHooks();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemory() {
        try {
            return s.Ay.getPerfAttributedMemory();
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemoryCallstacks(e) {
        try {
            return s.Ay.getPerfAttributedMemoryCallstacks(e);
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedMemoryStats() {
        try {
            return s.Ay.getPerfAttributedMemoryStats();
        } catch (e) {
            return null;
        }
    }
    startCPUProfiling(e) {
        try {
            return s.Ay.startCPUProfiling(e);
        } catch (e) {
            return null;
        }
    }
    stopCPUProfiling() {
        return s.Ay.stopCPUProfiling();
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
}
let u = new l();
