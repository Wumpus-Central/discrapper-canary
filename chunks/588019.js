r.d(t, {
    init: () => d,
}),
    r(457529);
var i = r(626584),
    n = r(313320),
    s = r(711204),
    a = r(622397);

function o(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let l = new i.A("MeticulousPerformanceReporter"),
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
            var e, t, r;
            let i;
            if (this.isInitialized) return !0;
            let n = (0, a.a)();
            return (
                null != n &&
                ((this.mode =
                    ((i = n.native.performance),
                    {
                        name: "meticulous",
                        sessionId: n.sessionBeingReplayed.id,
                        commitSha: null == (e = n.commitUnderTest) ? void 0 : e.sha,
                        branchName: null == (t = n.commitUnderTest) ? void 0 : t.branchName,
                        commitDate: null == (r = n.commitUnderTest) ? void 0 : r.date,
                        PerformanceObserver: n.native.PerformanceObserver,
                        performanceNow: () => i.now(),
                        mark: (e, t) => performance.mark(e, t),
                        getMemory: () => {
                            let e = i.memory;
                            if (null != e)
                                return {
                                    jsHeapSizeLimit: e.jsHeapSizeLimit,
                                    totalJSHeapSize: e.totalJSHeapSize,
                                    usedJSHeapSize: e.usedJSHeapSize,
                                };
                        },
                        sendToIngest: async (e) => {
                            let t = JSON.stringify(e),
                                { metrics: r } = e,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        n,
                                        s = {};
                                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                                        for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++)
                                            (i = r[n]),
                                                !(t.indexOf(i) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                    (s[i] = e[i]);
                                        return s;
                                    }
                                    if (
                                        ((s = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                i,
                                                n = {},
                                                s = Object.getOwnPropertyNames(e);
                                            for (i = 0; i < s.length; i++)
                                                (r = s[i]),
                                                    !(t.indexOf(r) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                        (n[r] = e[r]);
                                            return n;
                                        })(e, t)),
                                        Object.getOwnPropertySymbols)
                                    )
                                        for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                                            (i = r[n]),
                                                !(t.indexOf(i) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                    (s[i] = e[i]);
                                    return s;
                                })(e, ["metrics"]);
                            l.log("QP payload metadata", JSON.stringify(i, null, 2)),
                                l.log("QP payload metrics", JSON.stringify(r, null, 2));
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
                    })),
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
                o(this, "actionTracker", new n.d()),
                o(this, "heapSampler", new s.r());
        }
    })();

function d() {
    return m.init();
}
