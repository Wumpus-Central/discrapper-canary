i.d(t, { init: () => g });
var r = i(626584);
i(321073);
var s = i(228366),
    a = i(723702),
    n = i(290805);
function o(e) {
    return {
        js_heap_size_limit: e.jsHeapSizeLimit,
        total_js_heap_size: e.totalJSHeapSize,
        used_js_heap_size: e.usedJSHeapSize,
    };
}
var l = i(927813);
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
let d = new r.A("MeticulousActionTracker"),
    h = "meticulous-start",
    c = "meticulous-end",
    u = new Set([
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
                s.h.unsubscribe(t, e);
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
            i = this.mode.baselineUsedMemory;
        return {
            type: "heap_snapshot_action",
            session_id: this.mode.sessionId,
            commit_sha: this.mode.commitSha,
            base_commit_sha: this.mode.baseCommitSha,
            branch_name: this.mode.branchName,
            commit_date: this.mode.commitDate,
            timestamp: new Date().toISOString(),
            build_number: "534155",
            built_at: "1776968096744",
            release_channel: n.y ?? "unknown",
            tags: this.getTags(),
            metrics: {
                report_time_memory: null != t ? o(t) : void 0,
                delta_from_baseline: null != i && t?.usedJSHeapSize != null ? t.usedJSHeapSize - i : void 0,
                baseline_memory: i,
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
                (s.h.addInterceptor((e) => {
                    if (null != this.mode && u.has(e.type)) {
                        let t = ++this.dispatchCounter,
                            i = this.mode.getMemory(),
                            r = this.pendingDispatches.get(e.type) ?? [];
                        r.push(t),
                            this.pendingDispatches.set(e.type, r),
                            this.mode.mark(`${h}-${e.type}-${t}`, { detail: { memory: i } });
                    }
                    return !1;
                }),
                (this.interceptorAdded = !0)),
            u.forEach((e) => {
                if (this.actionHandlers.has(e)) return;
                let t = () => {
                    let t = this.pendingDispatches.get(e),
                        i = t?.shift();
                    if (null == i) return void d.warn(`No pending dispatch ID for action: ${e}`);
                    let r = () => {
                        let t = this.mode?.getMemory();
                        this.mode?.mark(`${c}-${e}-${i}`, { detail: { memory: t, actionType: e, dispatchId: i } });
                    };
                    requestAnimationFrame(() => {
                        requestAnimationFrame(r);
                    });
                };
                s.h.subscribe(e, t), this.actionHandlers.set(e, t);
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
                d.warn("Failed to set up PerformanceObserver:", e);
            }
    }
    collectEntry(e) {
        try {
            let t = e.detail?.actionType,
                i = e.detail?.dispatchId;
            if (null == t || null == i) {
                d.warn("End mark missing actionType or dispatchId:", e.name), performance.clearMarks(e.name);
                return;
            }
            let r = `${h}-${t}-${i}`,
                s = performance.getEntriesByName(r);
            if (0 === s.length) {
                d.warn(`Missing start mark for action: ${r}`), performance.clearMarks(e.name);
                return;
            }
            let a = s[0],
                n = a.detail?.memory,
                l = e.detail?.memory,
                m = this.mode?.baselineUsedMemory,
                c = l?.usedJSHeapSize != null && null != m ? l.usedJSHeapSize - m : void 0,
                u = null != this.mode ? this.mode.performanceNow() : 0;
            this.collectedEntries.push({
                name: t,
                start_time: a.startTime,
                end_time: e.startTime,
                collected_at: u,
                start_memory: null != n ? o(n) : void 0,
                end_memory: null != l ? o(l) : void 0,
                memory_delta_from_baseline: c,
            }),
                performance.clearMarks(r),
                performance.clearMarks(e.name);
        } catch (e) {
            d.warn("Failed to collect performance entry information:", e);
        }
    }
}
let S = +l.A.Millis.MINUTE;
class f {
    mode = null;
    sampleIntervalId = null;
    sessionStartTime = 0;
    peakMemory = 0;
    start(e, t) {
        (this.mode = e),
            (this.sessionStartTime = t),
            (this.peakMemory = e.getMemory()?.usedJSHeapSize ?? 0),
            this.sampleAndSend(),
            (this.sampleIntervalId = window.setInterval(() => {
                this.sampleAndSend();
            }, S));
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
    sampleAndSend() {
        if (null == this.mode) return;
        let e = this.mode.getMemory();
        if (null == e) return;
        this.updatePeakMemory(e.usedJSHeapSize);
        let t = this.mode.performanceNow() - this.sessionStartTime,
            i = { platform: (0, a.getNativePlatform)(), release_channel: n.y ?? "unknown", uptime_bucket: m(t) },
            r = {
                type: "heap_snapshot_interval",
                session_id: this.mode.sessionId,
                commit_sha: this.mode.commitSha,
                base_commit_sha: this.mode.baseCommitSha,
                branch_name: this.mode.branchName,
                commit_date: this.mode.commitDate,
                timestamp: new Date().toISOString(),
                build_number: "534155",
                built_at: "1776968096744",
                release_channel: n.y ?? "unknown",
                tags: i,
                metrics: {
                    js_heap_size_limit: e.jsHeapSizeLimit,
                    total_js_heap_size: e.totalJSHeapSize,
                    used_js_heap_size: e.usedJSHeapSize,
                    peak_memory: this.peakMemory,
                    delta_from_baseline:
                        null != this.mode.baselineUsedMemory ? e.usedJSHeapSize - this.mode.baselineUsedMemory : void 0,
                    baseline_memory: this.mode.baselineUsedMemory,
                    timing: { collected_at: this.mode.performanceNow() },
                },
            };
        this.mode.sendToIngest(r);
    }
}
let _ = new r.A("MeticulousPerformanceReporter");
class y {
    mode = null;
    boundBeforeUnload = null;
    actionTracker = new p();
    heapSampler = new f();
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
        let i =
            null != (e = window.Meticulous) && e.isRunningAsTest && e.replay?.isBenchmarkableReplay ? e.replay : null;
        return (
            null != i &&
            ((this.mode =
                ((t = i.native.performance),
                {
                    name: "meticulous",
                    sessionId: i.sessionBeingReplayed.id,
                    commitSha: i.commitUnderTest?.sha,
                    baseCommitSha: i.commitUnderTest?.baseCommitSha,
                    branchName: i.commitUnderTest?.branchName,
                    commitDate: i.commitUnderTest?.date,
                    PerformanceObserver: i.native.PerformanceObserver,
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
                    sendToIngest: async (e) => {
                        let t = JSON.stringify(e),
                            { metrics: i, ...r } = e;
                        _.log("QP payload metadata", JSON.stringify(r, null, 2)),
                            _.log("QP payload metrics", JSON.stringify(i, null, 2));
                        try {
                            let e = await fetch("https://meticulous-ingest.discord.tools/webhook", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", "meticulous-passthrough": "true" },
                                body: t,
                                keepalive: !0,
                            });
                            if (!e.ok)
                                return _.warn(`Failed to send performance data: ${e.status} ${e.statusText}`), !1;
                            return !0;
                        } catch (e) {
                            return _.warn("Error sending performance data:", e), !1;
                        }
                    },
                })),
            this.start(),
            _.log(`Performance reporter initialized [${this.mode.name}]`),
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
                    _.log("\uD83D\uDCE4 [DEV] Ingest payload:", JSON.stringify(e, null, 2)), await Promise.resolve(!0)
                ),
            }),
            this.start(),
            _.log(`🔧 Performance reporter initialized [${this.mode.name}] - entries will be logged to console`),
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
            _.log("Performance reporter terminated"),
            (this.mode = null));
    }
}
let b = new y();
function g() {
    return b.init();
}
