n.d(t, {
    A: () => u,
});
var r = n(77729),
    i = n(626584),
    a = n(832213),
    s = n(837921);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = new i.A("ProcessUtilsElectron");
class c extends a.D {
    setupReportingTimer() {
        var e, t;
        let n = null === r.A || void 0 === r.A || null == (e = r.A.processUtils) ? void 0 : e.setMemoryInformation;
        if (null == n) return void l.log("setMemoryInformation not available.");

        function i(e) {
            return Math.ceil(e / 1024);
        }
        (null == (t = performance.memory) ? void 0 : t.usedJSHeapSize) == null &&
            l.error("usedJSHeapSize is not available."),
            setInterval(() => {
                var e, t, r;
                let a = null != (e = null == (r = performance.memory) ? void 0 : r.usedJSHeapSize) ? e : 0;
                n({
                    memoryUsageKB: null != (t = this.lastMemoryUsageKB) ? t : 0,
                    usedJSHeapSizeKB: i(a),
                });
            }, 1e4);
    }
    getProcessUptime() {
        var e, t;
        return null === r.A || void 0 === r.A || null == (t = r.A.processUtils) || null == (e = t.getProcessUptime)
            ? void 0
            : e.call(t);
    }
    getCurrentCPUUsagePercent() {
        var e, t;
        return null === r.A ||
            void 0 === r.A ||
            null == (t = r.A.processUtils) ||
            null == (e = t.getCurrentCPUUsagePercent)
            ? void 0
            : e.call(t);
    }
    getCumulativeCPUUsage() {
        var e, t;
        return null === r.A || void 0 === r.A || null == (t = r.A.processUtils) || null == (e = t.getCumulativeCPUUsage)
            ? void 0
            : e.call(t);
    }
    getCurrentMemoryUsageKB() {
        let e = c.getCurrentMemoryUsageKBCore();
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
        var e, t;
        return null === r.A || void 0 === r.A || null == (t = r.A.processUtils) || null == (e = t.getUsedHeapSize)
            ? void 0
            : e.call(t);
    }
    getMemoryHeapStats() {
        var e, t;
        return null === r.A || void 0 === r.A || null == (t = r.A.processUtils) || null == (e = t.getHeapStats)
            ? void 0
            : e.call(t);
    }
    getBlinkMemoryInfo() {
        var e, t;
        return null === r.A || void 0 === r.A || null == (t = r.A.processUtils) || null == (e = t.getBlinkMemoryInfo)
            ? void 0
            : e.call(t);
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
    enablePAMemoryProfiler(e) {
        try {
            var t;
            let n =
                null === r.A || void 0 === r.A || null == (t = r.A.processUtils) ? void 0 : t.enablePAMemoryProfiler;
            if (void 0 === n) return null;
            return n(e), !0;
        } catch (e) {
            return null;
        }
    }
    disablePAMemoryProfiler() {
        try {
            var e;
            let t =
                null === r.A || void 0 === r.A || null == (e = r.A.processUtils) ? void 0 : e.disablePAMemoryProfiler;
            if (void 0 === t) return null;
            return t(), !0;
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedPAMemory() {
        try {
            var e, t;
            return null === r.A ||
                void 0 === r.A ||
                null == (t = r.A.processUtils) ||
                null == (e = t.getPerfAttributedPAMemory)
                ? void 0
                : e.call(t);
        } catch (e) {
            return null;
        }
    }
    getPerfAttributedPAMemoryCallstacks(e) {
        try {
            var t, n;
            return null === r.A ||
                void 0 === r.A ||
                null == (n = r.A.processUtils) ||
                null == (t = n.getPerfAttributedPAMemoryCallstacks)
                ? void 0
                : t.call(n, e);
        } catch (e) {
            return null;
        }
    }
    getPartitionAllocatorStats() {
        try {
            var e, t;
            return null === r.A ||
                void 0 === r.A ||
                null == (t = r.A.processUtils) ||
                null == (e = t.getPartitionAllocatorStats)
                ? void 0
                : e.call(t);
        } catch (e) {
            return null;
        }
    }
    enableProfilingV8Heap(e) {
        try {
            var t, n;
            return null === r.A ||
                void 0 === r.A ||
                null == (n = r.A.processUtils) ||
                null == (t = n.enableProfilingV8Heap)
                ? void 0
                : t.call(n, e);
        } catch (e) {
            return;
        }
    }
    disableProfilingV8Heap() {
        try {
            var e, t;
            return null === r.A ||
                void 0 === r.A ||
                null == (t = r.A.processUtils) ||
                null == (e = t.disableProfilingV8Heap)
                ? void 0
                : e.call(t);
        } catch (e) {
            return;
        }
    }
    getProfilerV8MemoryCallstacks() {
        try {
            var e, t;
            return null === r.A ||
                void 0 === r.A ||
                null == (t = r.A.processUtils) ||
                null == (e = t.getProfilerV8MemoryCallstacks)
                ? void 0
                : e.call(t);
        } catch (e) {
            return null;
        }
    }
    constructor() {
        var e, t;
        super(),
            o(this, "lastMemoryUsageKB", void 0),
            (this.cpuCoreCount =
                null === r.A || void 0 === r.A || null == (t = r.A.processUtils) || null == (e = t.getCPUCoreCount)
                    ? void 0
                    : e.call(t)),
            this.setupReportingTimer();
    }
}
let u = new c();
