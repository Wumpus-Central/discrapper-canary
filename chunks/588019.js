i.d(t, { init: () => d });
var r = i(626584),
    s = i(313320),
    a = i(711204),
    n = i(622397);
let o = new r.A("MeticulousPerformanceReporter");
class l {
    mode = null;
    boundBeforeUnload = null;
    actionTracker = new s.d();
    heapSampler = new a.r();
    get isInitialized() {
        return null != this.mode;
    }
    getPeakMemory() {
        return this.heapSampler.getPeakMemory();
    }
    getCurrentMemory() {
        return this.heapSampler.getCurrentMemory();
    }
    getBaselineMemory() {
        return this.mode?.baselineUsedMemory;
    }
    init() {
        let e;
        if (this.isInitialized) return !0;
        let t = (0, n.a)();
        return (
            null != t &&
            ((this.mode =
                ((e = t.native.performance),
                {
                    name: "meticulous",
                    sessionId: t.sessionBeingReplayed.id,
                    commitSha: t.commitUnderTest?.sha,
                    baseCommitSha: t.commitUnderTest?.baseCommitSha,
                    branchName: t.commitUnderTest?.branchName,
                    commitDate: t.commitUnderTest?.date,
                    PerformanceObserver: t.native.PerformanceObserver,
                    performanceNow: () => e.now(),
                    mark: (e, t) => performance.mark(e, t),
                    getMemory: () => {
                        let t = e.memory;
                        if (null != t)
                            return {
                                jsHeapSizeLimit: t.jsHeapSizeLimit,
                                totalJSHeapSize: t.totalJSHeapSize,
                                usedJSHeapSize: t.usedJSHeapSize,
                            };
                    },
                    sendToIngest: async (e) => {
                        let t = JSON.stringify(e),
                            { metrics: i, ...r } = e;
                        o.log("QP payload metadata", JSON.stringify(r, null, 2)),
                            o.log("QP payload metrics", JSON.stringify(i, null, 2));
                        try {
                            let e = await fetch("https://meticulous-ingest.discord.tools/webhook", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", "meticulous-passthrough": "true" },
                                body: t,
                                keepalive: !0,
                            });
                            if (!e.ok)
                                return o.warn(`Failed to send performance data: ${e.status} ${e.statusText}`), !1;
                            return !0;
                        } catch (e) {
                            return o.warn("Error sending performance data:", e), !1;
                        }
                    },
                })),
            this.start(),
            o.log(`Performance reporter initialized [${this.mode.name}]`),
            !0)
        );
    }
    initDevMode() {
        return (
            !!this.isInitialized ||
            ((this.mode = {
                name: "dev",
                sessionId: `dev-${Date.now()}`,
                commitSha: "dev",
                branchName: "local",
                commitDate: null,
                PerformanceObserver: window.PerformanceObserver,
                performanceNow: () => performance.now(),
                mark: (e, t) => performance.mark(e, t),
                getMemory: () => {
                    let e = performance.memory;
                    if (null != e)
                        return {
                            jsHeapSizeLimit: e.jsHeapSizeLimit,
                            totalJSHeapSize: e.totalJSHeapSize,
                            usedJSHeapSize: e.usedJSHeapSize,
                        };
                },
                sendToIngest: async (e) => (
                    o.log("\uD83D\uDCE4 [DEV] Ingest payload:", JSON.stringify(e, null, 2)), await Promise.resolve(!0)
                ),
            }),
            this.start(),
            o.log(`🔧 Performance reporter initialized [${this.mode.name}] - entries will be logged to console`),
            !0)
        );
    }
    start() {
        if (null == this.mode) return;
        let e = this.mode.performanceNow();
        (this.mode.baselineUsedMemory = this.mode.getMemory()?.usedJSHeapSize),
            this.actionTracker.start(this.mode, e),
            this.heapSampler.start(this.mode, e),
            (this.boundBeforeUnload = () => void this.terminate()),
            window.addEventListener("beforeunload", this.boundBeforeUnload);
    }
    async terminate() {
        this.isInitialized &&
            (null != this.boundBeforeUnload &&
                (window.removeEventListener("beforeunload", this.boundBeforeUnload), (this.boundBeforeUnload = null)),
            await this.actionTracker.flush(),
            this.actionTracker.stop(),
            this.heapSampler.stop(),
            o.log("Performance reporter terminated"),
            (this.mode = null));
    }
}
let m = new l();
function d() {
    return m.init();
}
