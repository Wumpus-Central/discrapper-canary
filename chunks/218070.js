i.r(t),
    i.d(t, {
        default: () => S,
        getBaselineMemory: () => f,
        getCurrentMemory: () => p,
        getPeakMemory: () => h,
        init: () => d,
        initDevMode: () => u,
        terminate: () => c,
    }),
    i(49124);
var n = i(710845),
    r = i(87169),
    s = i(717156),
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
let l = new n.Z("MeticulousPerformanceReporter"),
    m = new (class {
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
            var e;
            return null == (e = this.mode) ? void 0 : e.baselineUsedMemory;
        }
        init() {
            if (this.isInitialized) return !0;
            let e = (0, a.k)();
            return (
                null != e &&
                ((this.mode = (function (e) {
                    var t, i, n;
                    let r = e.native.performance;
                    return {
                        name: "meticulous",
                        sessionId: e.sessionBeingReplayed.id,
                        commitSha: null == (t = e.commitUnderTest) ? void 0 : t.sha,
                        branchName: null == (i = e.commitUnderTest) ? void 0 : i.branchName,
                        commitDate: null == (n = e.commitUnderTest) ? void 0 : n.date,
                        PerformanceObserver: e.native.PerformanceObserver,
                        performanceNow: () => r.now(),
                        mark: (e, t) => performance.mark(e, t),
                        getMemory: () => {
                            let e = r.memory;
                            if (null != e)
                                return {
                                    jsHeapSizeLimit: e.jsHeapSizeLimit,
                                    totalJSHeapSize: e.totalJSHeapSize,
                                    usedJSHeapSize: e.usedJSHeapSize,
                                };
                        },
                        sendToIngest: async (e) => {
                            let t = JSON.stringify(e);
                            l.log("QP payload", t);
                            try {
                                let e = await fetch("https://meticulous-ingest.discord.tools/webhook", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "meticulous-passthrough": "true",
                                    },
                                    body: t,
                                    keepalive: !0,
                                });
                                if (!e.ok)
                                    return (
                                        l.warn(
                                            "Failed to send performance data: "
                                                .concat(e.status, " ")
                                                .concat(e.statusText),
                                        ),
                                        !1
                                    );
                                return !0;
                            } catch (e) {
                                return l.warn("Error sending performance data:", e), !1;
                            }
                        },
                    };
                })(e)),
                this.start(),
                l.log("Performance reporter initialized [".concat(this.mode.name, "]")),
                !0)
            );
        }
        initDevMode() {
            return (
                !!this.isInitialized ||
                ((this.mode = {
                    name: "dev",
                    sessionId: "dev-".concat(Date.now()),
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
                        l.log("\uD83D\uDCE4 [DEV] Ingest payload:", JSON.stringify(e, null, 2)),
                        await Promise.resolve(!0)
                    ),
                }),
                this.start(),
                l.log(
                    "\uD83D\uDD27 Performance reporter initialized [".concat(
                        this.mode.name,
                        "] - entries will be logged to console",
                    ),
                ),
                !0)
            );
        }
        start() {
            var e;
            if (null == this.mode) return;
            let t = this.mode.performanceNow();
            (this.mode.baselineUsedMemory = null == (e = this.mode.getMemory()) ? void 0 : e.usedJSHeapSize),
                this.actionTracker.start(this.mode, t),
                this.heapSampler.start(this.mode, t),
                (this.boundBeforeUnload = () => void this.terminate()),
                window.addEventListener("beforeunload", this.boundBeforeUnload);
        }
        async terminate() {
            this.isInitialized &&
                (null != this.boundBeforeUnload &&
                    (window.removeEventListener("beforeunload", this.boundBeforeUnload),
                    (this.boundBeforeUnload = null)),
                await this.actionTracker.flush(),
                this.actionTracker.stop(),
                this.heapSampler.stop(),
                l.log("Performance reporter terminated"),
                (this.mode = null));
        }
        constructor() {
            o(this, "mode", null),
                o(this, "boundBeforeUnload", null),
                o(this, "actionTracker", new r.n()),
                o(this, "heapSampler", new s.q());
        }
    })();
function d() {
    return m.init();
}
function u() {
    return m.initDevMode();
}
function c() {
    return m.terminate();
}
function h() {
    return m.getPeakMemory();
}
function p() {
    return m.getCurrentMemory();
}
function f() {
    return m.getBaselineMemory();
}
let S = m;
