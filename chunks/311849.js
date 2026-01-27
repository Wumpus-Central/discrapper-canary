n.d(t, {
    A: () => z,
}),
    n(638769),
    n(896048),
    n(321073),
    n(114821),
    n(339614);
var r = n(141931),
    i = n(506774),
    a = n(439372),
    s = n(77729),
    o = n(31717),
    l = n(885576),
    c = n(430452),
    u = n(383501),
    d = n(954571),
    f = n(927813),
    p = n(723702),
    _ = n(321034),
    h = n(728458),
    m = n(837921),
    g = n(664335),
    E = n(652215);

function y(e, t, n) {
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
let b = 1048576,
    O = 15 * f.A.Millis.MINUTE,
    v = 2 * b,
    A = 3 * b,
    I = 4096,
    S = 12,
    T = !0,
    C = !0,
    N = 15 * f.A.Millis.MINUTE,
    w = +b,
    R = 1.5 * b,
    P = 256,
    D = 12,
    x = !0,
    L = 15 * f.A.Millis.MINUTE,
    j = 0.75 * b,
    M = +b,
    k = 64,
    U = 4 * b,
    G = 30 * f.A.Millis.MINUTE,
    V = 8 * b,
    F = 60 * f.A.Millis.MINUTE,
    B = "lastMemoryUsageRestart",
    H = +f.A.Millis.DAY,
    Y = +f.A.Millis.MINUTE;

function W() {
    return p.isPlatformEmbedded && (0, p.isWindows)();
}
class K extends a.A {
    _initialize() {}
    _terminate() {
        W() &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = null),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = null),
            clearInterval(this._checkIntervalV8),
            (this._checkIntervalV8 = null),
            _.A.disablePerfMemoryHooks(),
            _.A.disablePAMemoryProfiler(),
            _.A.disableProfilingV8Heap());
    }
    handlePostConnectionOpen() {
        var e, t;
        if (!W()) return;
        let n = null == (e = (t = s.A.remoteApp).getReleaseChannel) ? void 0 : e.call(t);
        "development" !== n && "canary" !== n && (this._supportedNativeChannel = !1),
            clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = setInterval(async () => {
                await this.trackNativeHeapPerformanceStats();
            }, O)),
            this._supportedNativeChannel &&
                (clearInterval(this._checkIntervalPA),
                (this._checkIntervalPA = setInterval(async () => {
                    await this.trackPartitionAllocPerformanceStats();
                }, N)),
                clearInterval(this._checkIntervalV8),
                (this._checkIntervalV8 = setInterval(async () => {
                    await this.trackV8HeapAlloc();
                }, L)));
    }
    async trackNativeHeapPerformanceStats() {
        var e, t;
        let n = _.A.getMemoryUsageElectronProcessTypeDetails();
        if (null == n) return;
        let r = null != (e = null == (t = n.renderer) ? void 0 : t.wss_priv_kb) ? e : 0;
        !this._nativeHeapHooksInstalled &&
            this._supportedNativeChannel &&
            r > v &&
            _.A.enablePerfMemoryHooks({
                allocationThresholdKB: S,
                enableCallStackTracking: T,
            }) &&
            (this._nativeHeapHooksInstalled = !0),
            this._nativeHeapHooksInstalled && (await this.trackNativeHeapHookStats(r)),
            this.doRestartIfNeeded(r);
    }
    async trackNativeHeapHookStats(e) {
        var t, n, r, i, a, s;
        if (e < A) return;
        let o = _.A.getPerfAttributedMemory();
        if (null == o) return;
        let l = [],
            u = [],
            f = [],
            p = [],
            h = Object.entries(o);
        for (let [e, i] of (h.sort((e, t) => {
            var n, r;
            let [, i] = e,
                [, a] = t;
            return (
                (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
            );
        }),
        h.slice(0, 10)))
            null != i &&
                (l.push(e),
                u.push(null != (t = i.total_allocation_kb) ? t : 0),
                f.push(null != (n = i.allocation_count) ? n : 0),
                p.push(null != (r = i.module_version) ? r : ""));
        let g = _.A.getPerfAttributedMemoryStats(),
            y = null == g ? void 0 : g.events_dropped,
            b = {
                memory_type: "native_heap",
                module_name: l,
                allocation_total_size_kb: u,
                allocation_count: f,
                module_version: p,
                events_dropped: y,
            };
        if ((d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, b), T)) {
            let e = h.slice(0, 3).map((e) => e[0]),
                t = 3;
            for (let n of e
                .map((e) => _.A.getPerfAttributedMemoryCallstacks(e))
                .filter((e) => null != e)
                .flatMap((e) => e)
                .sort((e, t) => {
                    var n, r;
                    return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0);
                })
                .slice(0, t)
                .filter((e) => {
                    var t;
                    return (null != (t = e.total_alloc_kb) ? t : 0) > I;
                })) {
                let e = {
                    memory_type: "native_heap",
                    module_name: n.module_name,
                    callstack_allocation_total_size_kb: n.total_alloc_kb,
                    callstack_frame_module_names: n.frame_module_names,
                    callstack_frame_module_codeids: n.frame_module_codeids,
                    callstack_frame_relative_offsets: n.frame_rel_offsets,
                    events_dropped: y,
                };
                d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
            }
        }
        if (C && this._pushedNativeDeadlockMinidumpCount < 5) {
            let t = _.A.getMemoryHeapStats(),
                n = null != (i = null == t ? void 0 : t.usedHeapSize) ? i : -1,
                r = null != (a = null == t ? void 0 : t.totalAvailableSize) ? a : -1,
                o = null != (s = null == t ? void 0 : t.peakMallocedMemory) ? s : -1;
            await m.Ay.submitLiveCrashReport({
                message: "Desktop Memory Thread State",
                extra: {
                    renderer_memory_kb: e,
                    gpu_brand: c.A.getGpuBrand(),
                    used_v8_heap_kb: n,
                    avail_size_kb: r,
                    peak_malloc_kb: o,
                },
            }),
                (this._pushedNativeDeadlockMinidumpCount += 1);
        }
    }
    doRestartIfNeeded(e) {
        if (e < U) return;
        let t = performance.now() - this._startupTime;
        if (t < F) return;
        let n = i.w.get(B);
        if (null != n && n.timestamp >= Date.now() - H) return;
        let { enable: a, enableForce: s } = g.A.getConfig({
            location: "DesktopPerfAnalyticsManager",
        });
        a &&
            setTimeout(() => {
                let n = !0;
                if (e < V || !s) {
                    let e = l.A.getIdleSince();
                    if (null == e || e > Date.now() - G || null != u.A.getRTCConnection()) return;
                } else n = !1;
                o.A.persist(),
                    i.w.set(B, {
                        timeSinceStartup: t,
                        timestamp: Date.now(),
                    }),
                    m.Ay.setCrashInformation(
                        r.du.IntentionalCrashReason,
                        "excessive-memory-usage".concat(n ? "-forced" : ""),
                    ),
                    h.A.addBreadcrumb({
                        category: "excessive-memory-usage-restart",
                        message: "Restarting due to excessive renderer memory usage: ".concat(e, "kB"),
                    }),
                    m.Ay.crash(3);
            }, Y);
    }
    trackPartitionAllocPerformanceStats() {
        var e, t, n;
        let r = _.A.getPartitionAllocatorStats();
        if (null == r) return;
        let i = null != (e = r.total_alloc_kb) ? e : 0;
        if (!this._paHeapHooksInstalled && i > w) {
            let e = _.A.enablePAMemoryProfiler({
                allocationThresholdKB: D,
                enableCallStackTracking: x,
            });
            null != e && e && (this._paHeapHooksInstalled = !0);
        }
        if (this._paHeapHooksInstalled) {
            if (i < R) return;
            let e = _.A.getPerfAttributedPAMemory();
            if (null == e) return;
            let r = [],
                a = [],
                s = [],
                o = [],
                l = Object.entries(e);
            for (let [e, i] of (l.sort((e, t) => {
                var n, r;
                let [, i] = e,
                    [, a] = t;
                return (
                    (null != (n = null == a ? void 0 : a.total_allocation_kb) ? n : 0) -
                    (null != (r = null == i ? void 0 : i.total_allocation_kb) ? r : 0)
                );
            }),
            l.slice(0, 10)))
                null != i &&
                    (r.push(e),
                    a.push(null != (t = i.total_allocation_kb) ? t : 0),
                    s.push(null != (n = i.allocation_count) ? n : 0),
                    o.push(""));
            let c = {
                memory_type: "part_alloc",
                module_name: r,
                allocation_total_size_kb: a,
                allocation_count: s,
                module_version: o,
                events_dropped: void 0,
            };
            if ((d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, c), x)) {
                let e = l.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) =>
                        _.A.getPerfAttributedPAMemoryCallstacks({
                            typeName: e,
                        }),
                    )
                    .filter((e) => null != e)
                    .flatMap((e) => e)
                    .sort((e, t) => {
                        var n, r;
                        return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0);
                    })
                    .slice(0, t)
                    .filter((e) => {
                        var t;
                        return (null != (t = e.total_alloc_kb) ? t : 0) > P;
                    })) {
                    let e = {
                        memory_type: "part_alloc",
                        module_name: n.type_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: void 0,
                    };
                    d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
        }
    }
    trackV8HeapAlloc() {
        var e, t, n, r, i, a, s, o, l;
        let c = _.A.getMemoryHeapStats();
        if (null == c) return;
        let u = null != (e = c.usedHeapSize) ? e : 0;
        if (
            (!this._v8ProfilerRunning &&
                u >= j &&
                (_.A.enableProfilingV8Heap({
                    allocationThresholdKB: k,
                    sampleIntervalBytes: 65536,
                    stackDepth: 64,
                }),
                (this._v8ProfilerRunning = !0)),
            this._v8ProfilerRunning)
        ) {
            if (u < M) return;
            let e = _.A.getProfilerV8MemoryCallstacks();
            if (null != e) {
                let c = 3,
                    u = e.map((e) => {
                        var t, n;
                        return {
                            callstack: e,
                            totalSize:
                                null != (t = null == (n = e.frame_alloc_size) ? void 0 : n.reduce((e, t) => e + t, 0))
                                    ? t
                                    : 0,
                        };
                    });
                for (let e of (u.sort((e, t) => t.totalSize - e.totalSize), u.slice(0, c).map((e) => e.callstack))) {
                    let c = null != (t = null == (r = e.frame_script_name) ? void 0 : r.length) ? t : 0;
                    if (
                        null == c ||
                        c !== (null == (i = e.frame_name) ? void 0 : i.length) ||
                        c !== (null == (a = e.frame_line) ? void 0 : a.length) ||
                        c !== (null == (s = e.frame_col) ? void 0 : s.length)
                    )
                        continue;
                    let u = {
                        memory_type: "v8_heap",
                        callstack_allocation_total_size_kb: Math.floor(
                            (null != (n = null == (o = e.frame_alloc_size) ? void 0 : o.reduce((e, t) => e + t, 0))
                                ? n
                                : 0) / 1024,
                        ),
                        callstack_frame_module_names:
                            null == (l = e.frame_script_name)
                                ? void 0
                                : l.map((t, n) => {
                                      var r, i, a, s, o, l;
                                      let c = null != (r = null == (s = e.frame_name) ? void 0 : s[n]) ? r : "",
                                          u = null != (i = null == (o = e.frame_line) ? void 0 : o[n]) ? i : 0,
                                          d = null != (a = null == (l = e.frame_col) ? void 0 : l[n]) ? a : 0;
                                      return c.length > 0
                                          ? "at ".concat(c, " (").concat(t, ":").concat(u, ":").concat(d, ")")
                                          : "at ".concat(t, ":").concat(u, ":").concat(d);
                                  }),
                    };
                    d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, u);
                }
            }
        }
    }
    constructor(...e) {
        super(...e),
            y(this, "_checkIntervalNativeHeap", null),
            y(this, "_checkIntervalPA", null),
            y(this, "_checkIntervalV8", null),
            y(this, "_nativeHeapHooksInstalled", !1),
            y(this, "_paHeapHooksInstalled", !1),
            y(this, "_v8ProfilerRunning", !1),
            y(this, "_pushedNativeDeadlockMinidumpCount", 0),
            y(this, "_startupTime", performance.now()),
            y(this, "_supportedNativeChannel", !0),
            y(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
            });
    }
}
let z = new K();
