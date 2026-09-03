n.d(t, { A: () => D }), n(321073), n(134528), n(947204);
var i = n(141931),
    r = n(506774),
    a = n(439372),
    s = n(77729),
    l = n(31717),
    o = n(885576),
    d = n(916546),
    c = n(763827),
    u = n(174459),
    _ = n(927813),
    E = n(723702),
    A = n(321034),
    h = n(38405),
    I = n(19575),
    f = n(652215);
let p = 15 * _.A.Millis.MINUTE,
    T = 15 * _.A.Millis.MINUTE,
    m = 15 * _.A.Millis.MINUTE,
    g = 30 * _.A.Millis.MINUTE,
    S = 60 * _.A.Millis.MINUTE,
    N = "lastMemoryUsageRestart",
    C = +_.A.Millis.DAY,
    O = 10 * _.A.Millis.MINUTE,
    R = 60 * _.A.Millis.MINUTE;
function L() {
    return E.isPlatformEmbedded && (0, E.isWindows)();
}
class y extends a.A {
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
        L() &&
            (clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = null),
            clearInterval(this._checkIntervalPA),
            (this._checkIntervalPA = null),
            clearInterval(this._checkIntervalV8),
            (this._checkIntervalV8 = null),
            clearTimeout(this._checkIntervalCPUProfiler),
            (this._checkIntervalCPUProfiler = null),
            A.A.disablePerfMemoryHooks(),
            A.A.disablePAMemoryProfiler(),
            A.A.disableProfilingV8Heap(),
            A.A.stopCPUProfiling());
    }
    handlePostConnectionOpen() {
        if (!L()) return;
        let e = s.A.app.getReleaseChannel();
        "development" !== e && "canary" !== e && (this._supportedNativeChannel = !1),
            clearInterval(this._checkIntervalNativeHeap),
            (this._checkIntervalNativeHeap = setInterval(async () => {
                await this.trackNativeHeapPerformanceStats();
            }, p)),
            this._supportedNativeChannel &&
                (clearInterval(this._checkIntervalPA),
                (this._checkIntervalPA = setInterval(async () => {
                    await this.trackPartitionAllocPerformanceStats();
                }, T)),
                clearInterval(this._checkIntervalV8),
                (this._checkIntervalV8 = setInterval(async () => {
                    await this.trackV8HeapAlloc();
                }, m)),
                clearTimeout(this._checkIntervalCPUProfiler),
                (this._checkIntervalCPUProfiler = setTimeout(() => {
                    100 * Math.random() < 0.5 && this.trackCPUProfiling();
                }, O)));
    }
    async trackNativeHeapPerformanceStats() {
        let e = A.A.getMemoryUsageElectronProcessTypeDetails();
        if (null == e) return;
        let t = e.renderer?.wss_priv_kb ?? 0;
        !this._nativeHeapHooksInstalled &&
            this._supportedNativeChannel &&
            t > 2097152 &&
            A.A.enablePerfMemoryHooks({ allocationThresholdKB: 12, enableCallStackTracking: !0 }) &&
            (this._nativeHeapHooksInstalled = !0),
            this._nativeHeapHooksInstalled && (await this.trackNativeHeapHookStats(t)),
            this.doRestartIfNeeded(t);
    }
    async trackNativeHeapHookStats(e) {
        if (e < 3145728) return;
        let t = A.A.getPerfAttributedMemory();
        if (null == t) return;
        let n = [],
            i = [],
            r = [],
            a = [],
            s = Object.entries(t);
        for (let [e, t] of (s.sort((e, t) => {
            let [, n] = e,
                [, i] = t;
            return (i?.total_allocation_kb ?? 0) - (n?.total_allocation_kb ?? 0);
        }),
        s.slice(0, 10)))
            null != t &&
                (n.push(e),
                i.push(t.total_allocation_kb ?? 0),
                r.push(t.allocation_count ?? 0),
                a.push(t.module_version ?? ""));
        let l = A.A.getPerfAttributedMemoryStats(),
            o = l?.events_dropped;
        for (let e of (u.default.track(f.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, {
            memory_type: "native_heap",
            module_name: n,
            allocation_total_size_kb: i,
            allocation_count: r,
            module_version: a,
            events_dropped: o,
        }),
        s
            .slice(0, 3)
            .map((e) => e[0])
            .map((e) => A.A.getPerfAttributedMemoryCallstacks(e))
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
                events_dropped: o,
            };
            u.default.track(f.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, t);
        }
        if (this._pushedNativeDeadlockMinidumpCount < 5) {
            let t = A.A.getMemoryHeapStats(),
                n = t?.usedHeapSize ?? -1,
                i = t?.totalAvailableSize ?? -1,
                r = t?.peakMallocedMemory ?? -1;
            await I.Ay.submitLiveCrashReport({
                message: "Desktop Memory Thread State",
                extra: {
                    renderer_memory_kb: e,
                    gpu_brand: d.Ay.getGpuBrand(),
                    used_v8_heap_kb: n,
                    avail_size_kb: i,
                    peak_malloc_kb: r,
                },
            }),
                (this._pushedNativeDeadlockMinidumpCount += 1);
        }
    }
    doRestartIfNeeded(e) {
        if (e < 4194304) return;
        let t = performance.now() - this._startupTime;
        if (t < S) return;
        let n = r.w.get(N);
        if (null != n && n.timestamp >= Date.now() - C) return;
        let a = o.A.getIdleSince();
        null == a ||
            a > Date.now() - g ||
            null != c.A.getRTCConnection() ||
            (l.A.persist(),
            r.w.set(N, { timeSinceStartup: t, timestamp: Date.now() }),
            I.Ay.setCrashInformation(i.du.IntentionalCrashReason, "excessive-memory-usage"),
            h.A.addBreadcrumb({
                category: "excessive-memory-usage-restart",
                message: `Restarting due to excessive renderer memory usage: ${e}kB`,
            }),
            I.Ay.crash(3));
    }
    trackPartitionAllocPerformanceStats() {
        let e = A.A.getPartitionAllocatorStats();
        if (null == e) return;
        let t = e.total_alloc_kb ?? 0;
        if (!this._paHeapHooksInstalled && t > 1048576) {
            let e = A.A.enablePAMemoryProfiler({ allocationThresholdKB: 12, enableCallStackTracking: !0 });
            null != e && e && (this._paHeapHooksInstalled = !0);
        }
        if (this._paHeapHooksInstalled) {
            if (t < 1572864) return;
            let e = A.A.getPerfAttributedPAMemory();
            if (null == e) return;
            let n = [],
                i = [],
                r = [],
                a = [],
                s = Object.entries(e);
            for (let [e, t] of (s.sort((e, t) => {
                let [, n] = e,
                    [, i] = t;
                return (i?.total_allocation_kb ?? 0) - (n?.total_allocation_kb ?? 0);
            }),
            s.slice(0, 10)))
                null != t &&
                    (n.push(e), i.push(t.total_allocation_kb ?? 0), r.push(t.allocation_count ?? 0), a.push(""));
            for (let e of (u.default.track(f.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, {
                memory_type: "part_alloc",
                module_name: n,
                allocation_total_size_kb: i,
                allocation_count: r,
                module_version: a,
                events_dropped: void 0,
            }),
            s
                .slice(0, 3)
                .map((e) => e[0])
                .map((e) => A.A.getPerfAttributedPAMemoryCallstacks({ typeName: e }))
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
                u.default.track(f.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, t);
            }
        }
    }
    trackV8HeapAlloc() {
        let e = A.A.getMemoryHeapStats();
        if (null == e) return;
        let t = e.usedHeapSize ?? 0;
        if (
            (!this._v8ProfilerRunning &&
                t >= 786432 &&
                (A.A.enableProfilingV8Heap({ allocationThresholdKB: 64, sampleIntervalBytes: 65536, stackDepth: 64 }),
                (this._v8ProfilerRunning = !0)),
            this._v8ProfilerRunning)
        ) {
            if (t < 1048576) return;
            let e = A.A.getProfilerV8MemoryCallstacks();
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
                            let i = e.frame_name?.[n] ?? "",
                                r = e.frame_line?.[n] ?? 0,
                                a = e.frame_col?.[n] ?? 0;
                            return i.length > 0 ? `at ${i} (${t}:${r}:${a})` : `at ${t}:${r}:${a}`;
                        }),
                    };
                    u.default.track(f.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, n);
                }
            }
        }
    }
    trackCPUProfiling() {
        let e = A.A.startCPUProfiling({ maxSampleCount: 1e4, sampleRateMS: 1, captureJSThreadOnly: !1 });
        null != e &&
            (e.success ?? !1) !== !1 &&
            (this._checkIntervalCPUProfiler = setTimeout(async () => {
                let e = null;
                try {
                    e = await A.A.stopCPUProfiling();
                } catch (e) {}
                if (null === e || null == e.fg_module_name || null == e.fg_sample_data) return;
                for (let t = 0; t < e.fg_module_name.length; t++) {
                    let n = e.fg_module_name.at(t);
                    n?.includes("<unknown_0>") && (e.fg_module_name[t] = "[JS] jit_tracking_not_enabled");
                }
                let t = [],
                    n = new Map();
                for (let i = 0; i < e.fg_module_name.length; i++) {
                    let r = e.fg_module_name[i],
                        a = t.indexOf(r);
                    -1 === a && ((a = t.length), t.push(r)), n.set(i, a);
                }
                let i = [],
                    r = new Map();
                if (null != e.fg_code_id)
                    for (let t = 0; t < e.fg_code_id.length; t++) {
                        let n = e.fg_code_id[t],
                            a = i.indexOf(n);
                        -1 === a && ((a = i.length), i.push(n)), r.set(t, a);
                    }
                let a = e.fg_sample_data.split("\n"),
                    s = [];
                for (let e of a) {
                    if (0 === e.trim().length) continue;
                    let t = e.split(" "),
                        i = t[0],
                        a = t[1],
                        l = i
                            .split(";")
                            .map((e) => parseInt(e, 10))
                            .map((e) => {
                                let t = n.get(e) ?? 0,
                                    i = r.get(e) ?? 0;
                                return `${t},${i},${e}`;
                            });
                    s.push(`${l.join(";")} ${a}`);
                }
                let l = s.join("\n"),
                    o = await I.Ay.gzipAndBase64Encode(l),
                    d = null != o && o.length > 0 ? o : l,
                    c = {
                        sample_period_ms: 1,
                        sample_count: e.fg_sample_count,
                        fg_sample_data: d,
                        fg_module_name: t,
                        fg_code_id: i,
                        fg_instr_rel_addr_high: e.fg_instr_rel_addr_high,
                        fg_instr_rel_addr_low: e.fg_instr_rel_addr_low,
                    };
                u.default.track(f.HAw.DESKTOP_PERF_CPU_PROFILE, c),
                    (this._checkIntervalCPUProfiler = setTimeout(() => {
                        this.trackCPUProfiling();
                    }, R));
            }, 11e3));
    }
}
let D = new y();
