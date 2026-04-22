"use strict";
n.d(t, { A: () => b }), n(321073), n(134528), n(947204);
var r = n(141931),
    i = n(506774),
    s = n(439372),
    a = n(77729),
    o = n(31717),
    l = n(885576),
    u = n(430452),
    d = n(383501),
    c = n(954571),
    _ = n(927813),
    f = n(723702),
    E = n(321034),
    h = n(728458),
    p = n(837921),
    m = n(652215);
let g = 15 * _.A.Millis.MINUTE,
    A = 15 * _.A.Millis.MINUTE,
    I = 15 * _.A.Millis.MINUTE,
    T = 30 * _.A.Millis.MINUTE,
    S = 60 * _.A.Millis.MINUTE,
    y = "lastMemoryUsageRestart",
    N = +_.A.Millis.DAY,
    O = 10 * _.A.Millis.MINUTE,
    R = 60 * _.A.Millis.MINUTE;
function v() {
    return f.isPlatformEmbedded && (0, f.isWindows)();
}
class C extends s.A {
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
        v() &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = null),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = null),
            clearInterval(this._checkIntervalV8),
            (this._checkIntervalV8 = null),
            clearTimeout(this._checkIntervalCPUProfiler),
            (this._checkIntervalCPUProfiler = null),
            E.A.disablePerfMemoryHooks(),
            E.A.disablePAMemoryProfiler(),
            E.A.disableProfilingV8Heap(),
            E.A.stopCPUProfiling());
    }
    handlePostConnectionOpen() {
        if (!v()) return;
        let e = a.A.app.getReleaseChannel();
        "development" !== e && "canary" !== e && (this._supportedNativeChannel = !1),
            clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = setInterval(async () => {
                await this.trackNativeHeapPerformanceStats();
            }, g)),
            this._supportedNativeChannel &&
                (clearInterval(this._checkIntervalPA),
                (this._checkIntervalPA = setInterval(async () => {
                    await this.trackPartitionAllocPerformanceStats();
                }, A)),
                clearInterval(this._checkIntervalV8),
                (this._checkIntervalV8 = setInterval(async () => {
                    await this.trackV8HeapAlloc();
                }, I)),
                clearTimeout(this._checkIntervalCPUProfiler),
                (this._checkIntervalCPUProfiler = setTimeout(() => {
                    100 * Math.random() < 0.5 && this.trackCPUProfiling();
                }, O)));
    }
    async trackNativeHeapPerformanceStats() {
        let e = E.A.getMemoryUsageElectronProcessTypeDetails();
        if (null == e) return;
        let t = e.renderer?.wss_priv_kb ?? 0;
        !this._nativeHeapHooksInstalled &&
            this._supportedNativeChannel &&
            t > 2097152 &&
            E.A.enablePerfMemoryHooks({ allocationThresholdKB: 12, enableCallStackTracking: !0 }) &&
            (this._nativeHeapHooksInstalled = !0),
            this._nativeHeapHooksInstalled && (await this.trackNativeHeapHookStats(t)),
            this.doRestartIfNeeded(t);
    }
    async trackNativeHeapHookStats(e) {
        if (e < 3145728) return;
        let t = E.A.getPerfAttributedMemory();
        if (null == t) return;
        let n = [],
            r = [],
            i = [],
            s = [],
            a = Object.entries(t);
        for (let [e, t] of (a.sort((e, t) => {
            let [, n] = e,
                [, r] = t;
            return (r?.total_allocation_kb ?? 0) - (n?.total_allocation_kb ?? 0);
        }),
        a.slice(0, 10)))
            null != t &&
                (n.push(e),
                r.push(t.total_allocation_kb ?? 0),
                i.push(t.allocation_count ?? 0),
                s.push(t.module_version ?? ""));
        let o = E.A.getPerfAttributedMemoryStats(),
            l = o?.events_dropped;
        for (let e of (c.default.track(m.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, {
            memory_type: "native_heap",
            module_name: n,
            allocation_total_size_kb: r,
            allocation_count: i,
            module_version: s,
            events_dropped: l,
        }),
        a
            .slice(0, 3)
            .map((e) => e[0])
            .map((e) => E.A.getPerfAttributedMemoryCallstacks(e))
            .filter((e) => null != e)
            .flatMap((e) => e)
            .sort((e, t) => (t.total_alloc_kb ?? 0) - (e.total_alloc_kb ?? 0))
            .slice(0, 3)
            .filter((e) => (e.total_alloc_kb ?? 0) > 4096))) {
            let t = {
                memory_type: "native_heap",
                module_name: e.module_name,
                callstack_allocation_total_size_kb: e.total_alloc_kb,
                callstack_frame_module_names: e.frame_module_names,
                callstack_frame_module_codeids: e.frame_module_codeids,
                callstack_frame_relative_offsets: e.frame_rel_offsets,
                events_dropped: l,
            };
            c.default.track(m.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, t);
        }
        if (this._pushedNativeDeadlockMinidumpCount < 5) {
            let t = E.A.getMemoryHeapStats(),
                n = t?.usedHeapSize ?? -1,
                r = t?.totalAvailableSize ?? -1,
                i = t?.peakMallocedMemory ?? -1;
            await p.Ay.submitLiveCrashReport({
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
        if (e < 4194304) return;
        let t = performance.now() - this._startupTime;
        if (t < S) return;
        let n = i.w.get(y);
        if (null != n && n.timestamp >= Date.now() - N) return;
        let s = l.A.getIdleSince();
        null == s ||
            s > Date.now() - T ||
            null != d.A.getRTCConnection() ||
            (o.A.persist(),
            i.w.set(y, { timeSinceStartup: t, timestamp: Date.now() }),
            p.Ay.setCrashInformation(r.du.IntentionalCrashReason, "excessive-memory-usage"),
            h.A.addBreadcrumb({
                category: "excessive-memory-usage-restart",
                message: `Restarting due to excessive renderer memory usage: ${e}kB`,
            }),
            p.Ay.crash(3));
    }
    trackPartitionAllocPerformanceStats() {
        let e = E.A.getPartitionAllocatorStats();
        if (null == e) return;
        let t = e.total_alloc_kb ?? 0;
        if (!this._paHeapHooksInstalled && t > 1048576) {
            let e = E.A.enablePAMemoryProfiler({ allocationThresholdKB: 12, enableCallStackTracking: !0 });
            null != e && e && (this._paHeapHooksInstalled = !0);
        }
        if (this._paHeapHooksInstalled) {
            if (t < 1572864) return;
            let e = E.A.getPerfAttributedPAMemory();
            if (null == e) return;
            let n = [],
                r = [],
                i = [],
                s = [],
                a = Object.entries(e);
            for (let [e, t] of (a.sort((e, t) => {
                let [, n] = e,
                    [, r] = t;
                return (r?.total_allocation_kb ?? 0) - (n?.total_allocation_kb ?? 0);
            }),
            a.slice(0, 10)))
                null != t &&
                    (n.push(e), r.push(t.total_allocation_kb ?? 0), i.push(t.allocation_count ?? 0), s.push(""));
            for (let e of (c.default.track(m.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, {
                memory_type: "part_alloc",
                module_name: n,
                allocation_total_size_kb: r,
                allocation_count: i,
                module_version: s,
                events_dropped: void 0,
            }),
            a
                .slice(0, 3)
                .map((e) => e[0])
                .map((e) => E.A.getPerfAttributedPAMemoryCallstacks({ typeName: e }))
                .filter((e) => null != e)
                .flatMap((e) => e)
                .sort((e, t) => (t.total_alloc_kb ?? 0) - (e.total_alloc_kb ?? 0))
                .slice(0, 3)
                .filter((e) => (e.total_alloc_kb ?? 0) > 256))) {
                let t = {
                    memory_type: "part_alloc",
                    module_name: e.type_name,
                    callstack_allocation_total_size_kb: e.total_alloc_kb,
                    callstack_frame_module_names: e.frame_module_names,
                    callstack_frame_module_codeids: e.frame_module_codeids,
                    callstack_frame_relative_offsets: e.frame_rel_offsets,
                    events_dropped: void 0,
                };
                c.default.track(m.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, t);
            }
        }
    }
    trackV8HeapAlloc() {
        let e = E.A.getMemoryHeapStats();
        if (null == e) return;
        let t = e.usedHeapSize ?? 0;
        if (
            (!this._v8ProfilerRunning &&
                t >= 786432 &&
                (E.A.enableProfilingV8Heap({ allocationThresholdKB: 64, sampleIntervalBytes: 65536, stackDepth: 64 }),
                (this._v8ProfilerRunning = !0)),
            this._v8ProfilerRunning)
        ) {
            if (t < 1048576) return;
            let e = E.A.getProfilerV8MemoryCallstacks();
            if (null != e) {
                let t = e.map((e) => ({
                    callstack: e,
                    totalSize: e.frame_alloc_size?.reduce((e, t) => e + t, 0) ?? 0,
                }));
                for (let e of (t.sort((e, t) => t.totalSize - e.totalSize), t.slice(0, 3).map((e) => e.callstack))) {
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
                                s = e.frame_col?.[n] ?? 0;
                            return r.length > 0 ? `at ${r} (${t}:${i}:${s})` : `at ${t}:${i}:${s}`;
                        }),
                    };
                    c.default.track(m.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, n);
                }
            }
        }
    }
    trackCPUProfiling() {
        let e = E.A.startCPUProfiling({ maxSampleCount: 1e4, sampleRateMS: 1, captureJSThreadOnly: !1 });
        null != e &&
            (e.success ?? !1) !== !1 &&
            (this._checkIntervalCPUProfiler = setTimeout(async () => {
                let e = null;
                try {
                    e = await E.A.stopCPUProfiling();
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
                        s = t.indexOf(i);
                    -1 === s && ((s = t.length), t.push(i)), n.set(r, s);
                }
                let r = [],
                    i = new Map();
                if (null != e.fg_code_id)
                    for (let t = 0; t < e.fg_code_id.length; t++) {
                        let n = e.fg_code_id[t],
                            s = r.indexOf(n);
                        -1 === s && ((s = r.length), r.push(n)), i.set(t, s);
                    }
                let s = e.fg_sample_data.split("\n"),
                    a = [];
                for (let e of s) {
                    if (0 === e.trim().length) continue;
                    let t = e.split(" "),
                        r = t[0],
                        s = t[1],
                        o = r
                            .split(";")
                            .map((e) => parseInt(e, 10))
                            .map((e) => {
                                let t = n.get(e) ?? 0,
                                    r = i.get(e) ?? 0;
                                return `${t},${r},${e}`;
                            });
                    a.push(`${o.join(";")} ${s}`);
                }
                let o = a.join("\n"),
                    l = await p.Ay.gzipAndBase64Encode(o),
                    u = null != l && l.length > 0 ? l : o,
                    d = {
                        sample_period_ms: 1,
                        sample_count: e.fg_sample_count,
                        fg_sample_data: u,
                        fg_module_name: t,
                        fg_code_id: r,
                        fg_instr_rel_addr_high: e.fg_instr_rel_addr_high,
                        fg_instr_rel_addr_low: e.fg_instr_rel_addr_low,
                    };
                c.default.track(m.HAw.DESKTOP_PERF_CPU_PROFILE, d),
                    (this._checkIntervalCPUProfiler = setTimeout(() => {
                        this.trackCPUProfiling();
                    }, R));
            }, 11e3));
    }
}
let b = new C();
