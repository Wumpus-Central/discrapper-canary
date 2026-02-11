"use strict";
n.d(t, { A: () => Q }), n(321073), n(134528), n(947204);
var r = n(141931),
    i = n(506774),
    a = n(439372),
    s = n(77729),
    o = n(31717),
    l = n(885576),
    u = n(430452),
    c = n(383501),
    d = n(954571),
    _ = n(927813),
    f = n(723702),
    h = n(321034),
    p = n(728458),
    g = n(837921),
    E = n(664335),
    A = n(652215);
let I = 1048576,
    T = 15 * _.A.Millis.MINUTE,
    y = 2 * I,
    S = 3 * I,
    v = 4096,
    C = 12,
    b = !0,
    N = !0,
    R = 15 * _.A.Millis.MINUTE,
    O = +I,
    D = 1.5 * I,
    L = 256,
    w = 12,
    x = !0,
    P = 15 * _.A.Millis.MINUTE,
    M = 0.75 * I,
    k = +I,
    U = 64,
    G = 4 * I,
    F = 30 * _.A.Millis.MINUTE,
    V = 8 * I,
    B = 60 * _.A.Millis.MINUTE,
    j = "lastMemoryUsageRestart",
    H = +_.A.Millis.DAY,
    Y = +_.A.Millis.MINUTE,
    W = 10 * _.A.Millis.MINUTE,
    K = 60 * _.A.Millis.MINUTE,
    $ = 0.5,
    z = 1,
    q = 1e4;
function X() {
    return f.isPlatformEmbedded && (0, f.isWindows)();
}
class Z extends a.A {
    _checkIntervalNativeHeap = null;
    _checkIntervalPA = null;
    _checkIntervalV8 = null;
    _checkIntervalCPUProfiler = null;
    _nativeHeapHooksInstalled = !1;
    _paHeapHooksInstalled = !1;
    _v8ProfilerRunning = !1;
    _pushedNativeDeadlockMinidumpCount = 0;
    _startupTime = performance.now();
    _supportedNativeChannel = !0;
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    _initialize() {}
    _terminate() {
        X() &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = null),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = null),
            clearInterval(this._checkIntervalV8),
            (this._checkIntervalV8 = null),
            clearTimeout(this._checkIntervalCPUProfiler),
            (this._checkIntervalCPUProfiler = null),
            h.A.disablePerfMemoryHooks(),
            h.A.disablePAMemoryProfiler(),
            h.A.disableProfilingV8Heap(),
            h.A.stopCPUProfiling());
    }
    handlePostConnectionOpen() {
        if (!X()) return;
        let e = s.A.remoteApp.getReleaseChannel?.();
        "development" !== e && "canary" !== e && (this._supportedNativeChannel = !1),
            clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = setInterval(async () => {
                await this.trackNativeHeapPerformanceStats();
            }, T)),
            this._supportedNativeChannel &&
                (clearInterval(this._checkIntervalPA),
                (this._checkIntervalPA = setInterval(async () => {
                    await this.trackPartitionAllocPerformanceStats();
                }, R)),
                clearInterval(this._checkIntervalV8),
                (this._checkIntervalV8 = setInterval(async () => {
                    await this.trackV8HeapAlloc();
                }, P)),
                clearTimeout(this._checkIntervalCPUProfiler),
                (this._checkIntervalCPUProfiler = setTimeout(() => {
                    100 * Math.random() < $ && this.trackCPUProfiling();
                }, W)));
    }
    async trackNativeHeapPerformanceStats() {
        let e = h.A.getMemoryUsageElectronProcessTypeDetails();
        if (null == e) return;
        let t = e.renderer?.wss_priv_kb ?? 0;
        !this._nativeHeapHooksInstalled &&
            this._supportedNativeChannel &&
            t > y &&
            h.A.enablePerfMemoryHooks({ allocationThresholdKB: C, enableCallStackTracking: b }) &&
            (this._nativeHeapHooksInstalled = !0),
            this._nativeHeapHooksInstalled && (await this.trackNativeHeapHookStats(t)),
            this.doRestartIfNeeded(t);
    }
    async trackNativeHeapHookStats(e) {
        if (e < S) return;
        let t = h.A.getPerfAttributedMemory();
        if (null == t) return;
        let n = [],
            r = [],
            i = [],
            a = [],
            s = Object.entries(t);
        for (let [e, t] of (s.sort((e, t) => {
            let [, n] = e,
                [, r] = t;
            return (r?.total_allocation_kb ?? 0) - (n?.total_allocation_kb ?? 0);
        }),
        s.slice(0, 10)))
            null != t &&
                (n.push(e),
                r.push(t.total_allocation_kb ?? 0),
                i.push(t.allocation_count ?? 0),
                a.push(t.module_version ?? ""));
        let o = h.A.getPerfAttributedMemoryStats(),
            l = o?.events_dropped,
            c = {
                memory_type: "native_heap",
                module_name: n,
                allocation_total_size_kb: r,
                allocation_count: i,
                module_version: a,
                events_dropped: l,
            };
        if ((d.default.track(A.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, c), b)) {
            let e = s.slice(0, 3).map((e) => e[0]),
                t = 3;
            for (let n of e
                .map((e) => h.A.getPerfAttributedMemoryCallstacks(e))
                .filter((e) => null != e)
                .flatMap((e) => e)
                .sort((e, t) => (t.total_alloc_kb ?? 0) - (e.total_alloc_kb ?? 0))
                .slice(0, t)
                .filter((e) => (e.total_alloc_kb ?? 0) > v)) {
                let e = {
                    memory_type: "native_heap",
                    module_name: n.module_name,
                    callstack_allocation_total_size_kb: n.total_alloc_kb,
                    callstack_frame_module_names: n.frame_module_names,
                    callstack_frame_module_codeids: n.frame_module_codeids,
                    callstack_frame_relative_offsets: n.frame_rel_offsets,
                    events_dropped: l,
                };
                d.default.track(A.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
            }
        }
        if (N && this._pushedNativeDeadlockMinidumpCount < 5) {
            let t = h.A.getMemoryHeapStats(),
                n = t?.usedHeapSize ?? -1,
                r = t?.totalAvailableSize ?? -1,
                i = t?.peakMallocedMemory ?? -1;
            await g.Ay.submitLiveCrashReport({
                message: "Desktop Memory Thread State",
                extra: {
                    renderer_memory_kb: e,
                    gpu_brand: u.Ay.getGpuBrand(),
                    used_v8_heap_kb: n,
                    avail_size_kb: r,
                    peak_malloc_kb: i,
                },
            }),
                (this._pushedNativeDeadlockMinidumpCount += 1);
        }
    }
    doRestartIfNeeded(e) {
        if (e < G) return;
        let t = performance.now() - this._startupTime;
        if (t < B) return;
        let n = i.w.get(j);
        if (null != n && n.timestamp >= Date.now() - H) return;
        let { enable: a, enableForce: s } = E.A.getConfig({ location: "DesktopPerfAnalyticsManager" });
        a &&
            setTimeout(() => {
                let n = !0;
                if (e < V || !s) {
                    let e = l.A.getIdleSince();
                    if (null == e || e > Date.now() - F || null != c.A.getRTCConnection()) return;
                } else n = !1;
                o.A.persist(),
                    i.w.set(j, { timeSinceStartup: t, timestamp: Date.now() }),
                    g.Ay.setCrashInformation(
                        r.du.IntentionalCrashReason,
                        `excessive-memory-usage${n ? "-forced" : ""}`,
                    ),
                    p.A.addBreadcrumb({
                        category: "excessive-memory-usage-restart",
                        message: `Restarting due to excessive renderer memory usage: ${e}kB`,
                    }),
                    g.Ay.crash(3);
            }, Y);
    }
    trackPartitionAllocPerformanceStats() {
        let e = h.A.getPartitionAllocatorStats();
        if (null == e) return;
        let t = e.total_alloc_kb ?? 0;
        if (!this._paHeapHooksInstalled && t > O) {
            let e = h.A.enablePAMemoryProfiler({ allocationThresholdKB: w, enableCallStackTracking: x });
            null != e && e && (this._paHeapHooksInstalled = !0);
        }
        if (this._paHeapHooksInstalled) {
            if (t < D) return;
            let e = h.A.getPerfAttributedPAMemory();
            if (null == e) return;
            let n = [],
                r = [],
                i = [],
                a = [],
                s = Object.entries(e);
            for (let [e, t] of (s.sort((e, t) => {
                let [, n] = e,
                    [, r] = t;
                return (r?.total_allocation_kb ?? 0) - (n?.total_allocation_kb ?? 0);
            }),
            s.slice(0, 10)))
                null != t &&
                    (n.push(e), r.push(t.total_allocation_kb ?? 0), i.push(t.allocation_count ?? 0), a.push(""));
            let o = {
                memory_type: "part_alloc",
                module_name: n,
                allocation_total_size_kb: r,
                allocation_count: i,
                module_version: a,
                events_dropped: void 0,
            };
            if ((d.default.track(A.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, o), x)) {
                let e = s.slice(0, 3).map((e) => e[0]),
                    t = 3;
                for (let n of e
                    .map((e) => h.A.getPerfAttributedPAMemoryCallstacks({ typeName: e }))
                    .filter((e) => null != e)
                    .flatMap((e) => e)
                    .sort((e, t) => (t.total_alloc_kb ?? 0) - (e.total_alloc_kb ?? 0))
                    .slice(0, t)
                    .filter((e) => (e.total_alloc_kb ?? 0) > L)) {
                    let e = {
                        memory_type: "part_alloc",
                        module_name: n.type_name,
                        callstack_allocation_total_size_kb: n.total_alloc_kb,
                        callstack_frame_module_names: n.frame_module_names,
                        callstack_frame_module_codeids: n.frame_module_codeids,
                        callstack_frame_relative_offsets: n.frame_rel_offsets,
                        events_dropped: void 0,
                    };
                    d.default.track(A.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e);
                }
            }
        }
    }
    trackV8HeapAlloc() {
        let e = h.A.getMemoryHeapStats();
        if (null == e) return;
        let t = e.usedHeapSize ?? 0;
        if (
            (!this._v8ProfilerRunning &&
                t >= M &&
                (h.A.enableProfilingV8Heap({ allocationThresholdKB: U, sampleIntervalBytes: 65536, stackDepth: 64 }),
                (this._v8ProfilerRunning = !0)),
            this._v8ProfilerRunning)
        ) {
            if (t < k) return;
            let e = h.A.getProfilerV8MemoryCallstacks();
            if (null != e) {
                let t = 3,
                    n = e.map((e) => ({
                        callstack: e,
                        totalSize: e.frame_alloc_size?.reduce((e, t) => e + t, 0) ?? 0,
                    }));
                for (let e of (n.sort((e, t) => t.totalSize - e.totalSize), n.slice(0, t).map((e) => e.callstack))) {
                    let t = e.frame_script_name?.length ?? 0;
                    if (
                        null == t ||
                        t !== e.frame_name?.length ||
                        t !== e.frame_line?.length ||
                        t !== e.frame_col?.length
                    )
                        continue;
                    let n = {
                        memory_type: "v8_heap",
                        callstack_allocation_total_size_kb: Math.floor(
                            (e.frame_alloc_size?.reduce((e, t) => e + t, 0) ?? 0) / 1024,
                        ),
                        callstack_frame_module_names: e.frame_script_name?.map((t, n) => {
                            let r = e.frame_name?.[n] ?? "",
                                i = e.frame_line?.[n] ?? 0,
                                a = e.frame_col?.[n] ?? 0;
                            return r.length > 0 ? `at ${r} (${t}:${i}:${a})` : `at ${t}:${i}:${a}`;
                        }),
                    };
                    d.default.track(A.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, n);
                }
            }
        }
    }
    trackCPUProfiling() {
        let e = { maxSampleCount: q, sampleRateMS: z, captureJSThreadOnly: !1 },
            t = z * q + 1e3,
            n = h.A.startCPUProfiling(e);
        null != n &&
            (n.success ?? !1) !== !1 &&
            (this._checkIntervalCPUProfiler = setTimeout(async () => {
                let e = null;
                try {
                    e = await h.A.stopCPUProfiling();
                } catch (e) {}
                if (null === e || null == e.fg_module_name || null == e.fg_sample_data) return;
                for (let t = 0; t < e.fg_module_name.length; t++) {
                    let n = e.fg_module_name.at(t);
                    n?.includes("<unknown_0>") && (e.fg_module_name[t] = "[JS] jit_tracking_not_enabled");
                }
                let t = [],
                    n = new Map();
                for (let r = 0; r < e.fg_module_name.length; r++) {
                    let i = e.fg_module_name[r],
                        a = t.indexOf(i);
                    -1 === a && ((a = t.length), t.push(i)), n.set(r, a);
                }
                let r = [],
                    i = new Map();
                if (null != e.fg_code_id)
                    for (let t = 0; t < e.fg_code_id.length; t++) {
                        let n = e.fg_code_id[t],
                            a = r.indexOf(n);
                        -1 === a && ((a = r.length), r.push(n)), i.set(t, a);
                    }
                let a = e.fg_sample_data.split("\n"),
                    s = [];
                for (let e of a) {
                    if (0 === e.trim().length) continue;
                    let t = e.split(" "),
                        r = t[0],
                        a = t[1],
                        o = r
                            .split(";")
                            .map((e) => parseInt(e, 10))
                            .map((e) => {
                                let t = n.get(e) ?? 0,
                                    r = i.get(e) ?? 0;
                                return `${t},${r},${e}`;
                            });
                    s.push(`${o.join(";")} ${a}`);
                }
                let o = s.join("\n"),
                    l = await g.Ay.gzipAndBase64Encode(o),
                    u = null != l && l.length > 0 ? l : o,
                    c = {
                        sample_period_ms: z,
                        sample_count: e.fg_sample_count,
                        fg_sample_data: u,
                        fg_module_name: t,
                        fg_code_id: r,
                        fg_instr_rel_addr_high: e.fg_instr_rel_addr_high,
                        fg_instr_rel_addr_low: e.fg_instr_rel_addr_low,
                    };
                d.default.track(A.HAw.DESKTOP_PERF_CPU_PROFILE, c),
                    (this._checkIntervalCPUProfiler = setTimeout(() => {
                        this.trackCPUProfiling();
                    }, K));
            }, t));
    }
}
let Q = new Z();
