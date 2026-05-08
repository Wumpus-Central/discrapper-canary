s.d(t, { init: () => M });
var r = s(626584);
s(321073);
var i = s(228366),
    a = s(723702),
    n = s(290805);
function o(e) {
    return {
        js_heap_size_limit: e.jsHeapSizeLimit,
        total_js_heap_size: e.totalJSHeapSize,
        used_js_heap_size: e.usedJSHeapSize,
    };
}
var l = s(927813);
function m(e) {
    let t = e / l.A.Millis.MINUTE;
    return t < 5
        ? "0-5min"
        : t < 15
          ? "5-15min"
          : t < 30
            ? "15-30min"
            : t < 45
              ? "30-45min"
              : t < 60
                ? "45-60min"
                : t < 120
                  ? "1-2hr"
                  : t < 180
                    ? "2-3hr"
                    : "3hr+";
}
let u = new r.A("MeticulousActionTracker"),
    h = "meticulous-start",
    c = "meticulous-end",
    d = new Set([
        "APP_STATE_UPDATE",
        "CONNECTION_CLOSED",
        "CONNECTION_OPEN",
        "CONNECTION_RESUMED",
        "LOGIN_SUCCESS",
        "LOGIN",
        "LOGOUT",
        "SESSION_START",
        "RESET_SOCKET",
        "CHANNEL_SELECT",
        "GUILD_SELECT",
        "OVERLAY_INITIALIZE",
        "CALL_CREATE",
        "LOAD_MESSAGES_SUCCESS",
        "SEARCH_START",
        "SEARCH_FINISH",
        "CLEAR_CACHES",
        "WRITE_CACHES",
        "PUSH_NOTIFICATION_CLICK",
        "UPLOAD_FAIL",
    ]);
class p {
    mode = null;
    observer = null;
    collectedEntries = [];
    flushIntervalId = null;
    sessionStartTime = 0;
    interceptorAdded = !1;
    actionHandlers = new Map();
    dispatchCounter = 0;
    pendingDispatches = new Map();
    start(e, t) {
        (this.mode = e),
            (this.sessionStartTime = t),
            this.setupDispatcherSubscription(),
            this.setupPerformanceObserver(),
            this.startFlushInterval();
    }
    stop() {
        null != this.flushIntervalId && (clearInterval(this.flushIntervalId), (this.flushIntervalId = null)),
            null != this.observer && (this.observer.disconnect(), (this.observer = null)),
            this.actionHandlers.forEach((e, t) => {
                i.h.unsubscribe(t, e);
            }),
            this.actionHandlers.clear(),
            this.pendingDispatches.clear(),
            (this.collectedEntries = []),
            (this.mode = null);
    }
    async flush() {
        if (null == this.mode || 0 === this.collectedEntries.length) return;
        let e = this.collectEntries(),
            t = this.buildReport(e);
        await this.mode.sendToIngest(t);
    }
    collectEntries() {
        let e = [...this.collectedEntries];
        return (this.collectedEntries = []), e;
    }
    getTags() {
        if (null == this.mode) throw Error("Cannot get tags without mode");
        let e = this.mode.performanceNow() - this.sessionStartTime;
        return { platform: (0, a.getNativePlatform)(), release_channel: n.y ?? "unknown", uptime_bucket: m(e) };
    }
    buildReport(e) {
        if (null == this.mode) throw Error("Cannot build report without mode");
        let t = this.mode.getMemory(),
            s = this.mode.baselineUsedMemory;
        return {
            type: "heap_snapshot_action",
            session_id: this.mode.sessionId,
            commit_sha: this.mode.commitSha,
            base_commit_sha: this.mode.baseCommitSha,
            branch_name: this.mode.branchName,
            commit_date: this.mode.commitDate,
            timestamp: new Date().toISOString(),
            build_number: "541529",
            built_at: "1778268213496",
            release_channel: n.y ?? "unknown",
            meticulous_perf_version: 5,
            tags: this.getTags(),
            metrics: {
                report_time_memory: null != t ? o(t) : void 0,
                delta_from_baseline: null != s && t?.usedJSHeapSize != null ? t.usedJSHeapSize - s : void 0,
                baseline_memory: s,
                timing: { collected_at: this.mode.performanceNow() },
                entries: e,
            },
        };
    }
    startFlushInterval() {
        this.flushIntervalId = window.setInterval(() => {
            this.flush();
        }, 1e4);
    }
    setupDispatcherSubscription() {
        null != this.mode &&
            (this.interceptorAdded ||
                (i.h.addInterceptor((e) => {
                    if (null != this.mode && d.has(e.type)) {
                        let t = ++this.dispatchCounter,
                            s = this.mode.getMemory(),
                            r = this.pendingDispatches.get(e.type) ?? [];
                        r.push(t),
                            this.pendingDispatches.set(e.type, r),
                            this.mode.mark(`${h}-${e.type}-${t}`, { detail: { memory: s } });
                    }
                    return !1;
                }),
                (this.interceptorAdded = !0)),
            d.forEach((e) => {
                if (this.actionHandlers.has(e)) return;
                let t = () => {
                    let t = this.pendingDispatches.get(e),
                        s = t?.shift();
                    if (null == s) return void u.warn(`No pending dispatch ID for action: ${e}`);
                    let r = () => {
                        let t = this.mode?.getMemory();
                        this.mode?.mark(`${c}-${e}-${s}`, { detail: { memory: t, actionType: e, dispatchId: s } });
                    };
                    requestAnimationFrame(() => {
                        requestAnimationFrame(r);
                    });
                };
                i.h.subscribe(e, t), this.actionHandlers.set(e, t);
            }));
    }
    setupPerformanceObserver() {
        if (null != this.mode)
            try {
                (this.observer = new this.mode.PerformanceObserver((e) => {
                    for (let t of e.getEntries())
                        "mark" === t.entryType && -1 !== t.name.indexOf(c) && this.collectEntry(t);
                    this.collectedEntries.length >= 100 && this.flush();
                })),
                    this.observer.observe({ type: "mark", buffered: !0 });
            } catch (e) {
                u.warn("Failed to set up PerformanceObserver:", e);
            }
    }
    collectEntry(e) {
        try {
            let t = e.detail?.actionType,
                s = e.detail?.dispatchId;
            if (null == t || null == s) {
                u.warn("End mark missing actionType or dispatchId:", e.name), performance.clearMarks(e.name);
                return;
            }
            let r = `${h}-${t}-${s}`,
                i = performance.getEntriesByName(r);
            if (0 === i.length) {
                u.warn(`Missing start mark for action: ${r}`), performance.clearMarks(e.name);
                return;
            }
            let a = i[0],
                n = a.detail?.memory,
                l = e.detail?.memory,
                m = this.mode?.baselineUsedMemory,
                c = l?.usedJSHeapSize != null && null != m ? l.usedJSHeapSize - m : void 0,
                d = null != this.mode ? this.mode.performanceNow() : 0;
            this.collectedEntries.push({
                name: t,
                start_time: a.startTime,
                end_time: e.startTime,
                collected_at: d,
                start_memory: null != n ? o(n) : void 0,
                end_memory: null != l ? o(l) : void 0,
                memory_delta_from_baseline: c,
            }),
                performance.clearMarks(r),
                performance.clearMarks(e.name);
        } catch (e) {
            u.warn("Failed to collect performance entry information:", e);
        }
    }
}
var S = s(474570);
let _ = 15 * l.A.Millis.SECOND;
class y {
    mode = null;
    sampleIntervalId = null;
    sessionStartTime = 0;
    peakMemory = 0;
    getPressureMetrics = null;
    start(e, t, s) {
        (this.mode = e),
            (this.sessionStartTime = t),
            (this.peakMemory = e.getMemory()?.usedJSHeapSize ?? 0),
            (this.getPressureMetrics = s ?? null),
            this.sampleAndSend(),
            (this.sampleIntervalId = window.setInterval(() => {
                this.sampleAndSend();
            }, _));
    }
    stop() {
        null != this.sampleIntervalId && (clearInterval(this.sampleIntervalId), (this.sampleIntervalId = null)),
            (this.mode = null);
    }
    getPeakMemory() {
        return this.peakMemory;
    }
    getCurrentMemory() {
        return this.mode?.getMemory()?.usedJSHeapSize ?? 0;
    }
    updatePeakMemory(e) {
        e > this.peakMemory && (this.peakMemory = e);
    }
    async sampleAndSend() {
        let e = this.mode;
        if (null == e) return;
        let t = e.getMemory();
        if (null == t) return;
        this.updatePeakMemory(t.usedJSHeapSize);
        let s = this.peakMemory,
            r = e.performanceNow(),
            i = new Date().toISOString(),
            o = r - this.sessionStartTime,
            l = (0, S.collectNonHeapMetrics)(),
            u = this.getPressureMetrics?.(),
            h = null != e.baselineUsedMemory ? t.usedJSHeapSize - e.baselineUsedMemory : void 0,
            c = await e.measureAgentMemory?.(),
            d = {
                type: "heap_snapshot_interval",
                session_id: e.sessionId,
                commit_sha: e.commitSha,
                base_commit_sha: e.baseCommitSha,
                branch_name: e.branchName,
                commit_date: e.commitDate,
                timestamp: i,
                build_number: "541529",
                built_at: "1778268213496",
                release_channel: n.y ?? "unknown",
                meticulous_perf_version: 5,
                tags: { platform: (0, a.getNativePlatform)(), release_channel: n.y ?? "unknown", uptime_bucket: m(o) },
                metrics: {
                    js_heap_size_limit: t.jsHeapSizeLimit,
                    total_js_heap_size: t.totalJSHeapSize,
                    used_js_heap_size: t.usedJSHeapSize,
                    peak_memory: s,
                    delta_from_baseline: h,
                    baseline_memory: e.baselineUsedMemory,
                    ...l,
                    ...u,
                    ...(null != c
                        ? {
                              agent_memory_bytes: c.bytes,
                              agent_memory_breakdown: c.breakdown.map((e) => ({ bytes: e.bytes, types: e.types })),
                              agent_baseline_memory_bytes: e.baselineAgentMemoryBytes,
                              agent_delta_from_baseline:
                                  null != e.baselineAgentMemoryBytes ? c.bytes - e.baselineAgentMemoryBytes : void 0,
                          }
                        : {}),
                    timing: { collected_at: r },
                },
            };
        e.sendToIngest(d);
    }
}
let f = ["nominal", "fair", "serious", "critical"];
class b {
    observer = null;
    currentState = "nominal";
    stateCounts = { nominal: 0, fair: 0, serious: 0, critical: 0 };
    totalSamples = 0;
    start(e) {
        if (null != e) {
            (this.currentState = "nominal"),
                (this.stateCounts = { nominal: 0, fair: 0, serious: 0, critical: 0 }),
                (this.totalSamples = 0);
            try {
                let t = new e((e) => {
                    for (let t of e)
                        "cpu" === t.source &&
                            f.includes(t.state) &&
                            ((this.currentState = t.state), this.stateCounts[this.currentState]++, this.totalSamples++);
                });
                (this.observer = t),
                    t.observe("cpu", { sampleInterval: 1e3 }).catch(() => {
                        this.observer === t && (this.observer = null);
                    });
            } catch {
                this.observer = null;
            }
        }
    }
    stop() {
        if (null != this.observer) {
            try {
                this.observer.unobserve("cpu");
            } catch {}
            this.observer = null;
        }
    }
    collect() {
        if (0 !== this.totalSamples)
            return {
                cpu_pressure_state: this.currentState,
                cpu_pressure_nominal_pct: Math.round((this.stateCounts.nominal / this.totalSamples) * 100),
                cpu_pressure_fair_pct: Math.round((this.stateCounts.fair / this.totalSamples) * 100),
                cpu_pressure_serious_pct: Math.round((this.stateCounts.serious / this.totalSamples) * 100),
                cpu_pressure_critical_pct: Math.round((this.stateCounts.critical / this.totalSamples) * 100),
                cpu_pressure_sample_count: this.totalSamples,
            };
    }
}
let g = new r.A("MeticulousPerformanceReporter");
class v {
    mode = null;
    boundBeforeUnload = null;
    actionTracker = new p();
    heapSampler = new y();
    pressureTracker = new b();
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
        let e, t;
        if (this.isInitialized) return !0;
        let s =
            null != (e = window.Meticulous) && e.isRunningAsTest && e.replay?.isBenchmarkableReplay ? e.replay : null;
        return (
            null != s &&
            ((this.mode =
                ((t = s.native.performance),
                {
                    name: "meticulous",
                    sessionId: s.sessionBeingReplayed.id,
                    commitSha: s.commitUnderTest?.sha,
                    baseCommitSha: s.commitUnderTest?.baseCommitSha,
                    branchName: s.commitUnderTest?.branchName,
                    commitDate: s.commitUnderTest?.date,
                    PerformanceObserver: s.native.PerformanceObserver,
                    performanceNow: () => t.now(),
                    mark: (e, t) => performance.mark(e, t),
                    getMemory: () => {
                        let e = t.memory;
                        if (null != e)
                            return {
                                jsHeapSizeLimit: e.jsHeapSizeLimit,
                                totalJSHeapSize: e.totalJSHeapSize,
                                usedJSHeapSize: e.usedJSHeapSize,
                            };
                    },
                    measureAgentMemory:
                        null != t.measureUserAgentSpecificMemory
                            ? async () => {
                                  try {
                                      return await t.measureUserAgentSpecificMemory();
                                  } catch {
                                      return;
                                  }
                              }
                            : void 0,
                    sendToIngest: async (e) => {
                        let t = JSON.stringify(e),
                            { metrics: s, ...r } = e;
                        g.log("QP payload metadata", JSON.stringify(r, null, 2)),
                            g.log("QP payload metrics", JSON.stringify(s, null, 2));
                        try {
                            let e = await fetch("https://meticulous-ingest.discord.tools/webhook", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", "meticulous-passthrough": "true" },
                                body: t,
                                keepalive: !0,
                            });
                            if (!e.ok)
                                return g.warn(`Failed to send performance data: ${e.status} ${e.statusText}`), !1;
                            return !0;
                        } catch (e) {
                            return g.warn("Error sending performance data:", e), !1;
                        }
                    },
                })),
            this.start(s.native.PressureObserver),
            g.log(`Performance reporter initialized [${this.mode.name}]`),
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
                    g.log("\uD83D\uDCE4 [DEV] Ingest payload:", JSON.stringify(e, null, 2)), await Promise.resolve(!0)
                ),
            }),
            this.start(),
            g.log(`\u{1F527} Performance reporter initialized [${this.mode.name}] - entries will be logged to console`),
            !0)
        );
    }
    start(e) {
        if (null == this.mode) return;
        let t = this.mode.performanceNow();
        this.mode.baselineUsedMemory = this.mode.getMemory()?.usedJSHeapSize;
        let s = this.mode.measureAgentMemory;
        if (null != s) {
            let e = this.mode;
            s().then((t) => {
                null != t && (e.baselineAgentMemoryBytes = t.bytes);
            });
        }
        this.pressureTracker.start(e),
            this.actionTracker.start(this.mode, t),
            this.heapSampler.start(this.mode, t, () => this.pressureTracker.collect()),
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
            this.pressureTracker.stop(),
            g.log("Performance reporter terminated"),
            (this.mode = null));
    }
}
let I = new v();
function M() {
    return I.init();
}
