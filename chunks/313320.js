i.d(t, { d: () => u }), i(321073);
var r = i(73153),
    s = i(626584),
    a = i(723702),
    n = i(290805),
    o = i(381505),
    l = i(622397);
let m = new s.A("MeticulousActionTracker"),
    d = "meticulous-start",
    h = "meticulous-end",
    c = new Set([
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
class u {
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
                r.h.unsubscribe(t, e);
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
        return { platform: (0, a.getNativePlatform)(), release_channel: n.y ?? "unknown", uptime_bucket: (0, l.X)(e) };
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
            build_number: "527998",
            built_at: "1776122690720",
            release_channel: n.y ?? "unknown",
            tags: this.getTags(),
            metrics: {
                report_time_memory: null != t ? (0, o.c)(t) : void 0,
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
                (r.h.addInterceptor((e) => {
                    if (null != this.mode && c.has(e.type)) {
                        let t = ++this.dispatchCounter,
                            i = this.mode.getMemory(),
                            r = this.pendingDispatches.get(e.type) ?? [];
                        r.push(t),
                            this.pendingDispatches.set(e.type, r),
                            this.mode.mark(`${d}-${e.type}-${t}`, { detail: { memory: i } });
                    }
                    return !1;
                }),
                (this.interceptorAdded = !0)),
            c.forEach((e) => {
                if (this.actionHandlers.has(e)) return;
                let t = () => {
                    let t = this.pendingDispatches.get(e),
                        i = t?.shift();
                    if (null == i) return void m.warn(`No pending dispatch ID for action: ${e}`);
                    let r = () => {
                        let t = this.mode?.getMemory();
                        this.mode?.mark(`${h}-${e}-${i}`, { detail: { memory: t, actionType: e, dispatchId: i } });
                    };
                    requestAnimationFrame(() => {
                        requestAnimationFrame(r);
                    });
                };
                r.h.subscribe(e, t), this.actionHandlers.set(e, t);
            }));
    }
    setupPerformanceObserver() {
        if (null != this.mode)
            try {
                (this.observer = new this.mode.PerformanceObserver((e) => {
                    for (let t of e.getEntries())
                        "mark" === t.entryType && -1 !== t.name.indexOf(h) && this.collectEntry(t);
                    this.collectedEntries.length >= 100 && this.flush();
                })),
                    this.observer.observe({ type: "mark", buffered: !0 });
            } catch (e) {
                m.warn("Failed to set up PerformanceObserver:", e);
            }
    }
    collectEntry(e) {
        try {
            let t = e.detail?.actionType,
                i = e.detail?.dispatchId;
            if (null == t || null == i) {
                m.warn("End mark missing actionType or dispatchId:", e.name), performance.clearMarks(e.name);
                return;
            }
            let r = `${d}-${t}-${i}`,
                s = performance.getEntriesByName(r);
            if (0 === s.length) {
                m.warn(`Missing start mark for action: ${r}`), performance.clearMarks(e.name);
                return;
            }
            let a = s[0],
                n = a.detail?.memory,
                l = e.detail?.memory,
                h = this.mode?.baselineUsedMemory,
                c = l?.usedJSHeapSize != null && null != h ? l.usedJSHeapSize - h : void 0,
                u = null != this.mode ? this.mode.performanceNow() : 0;
            this.collectedEntries.push({
                name: t,
                start_time: a.startTime,
                end_time: e.startTime,
                collected_at: u,
                start_memory: null != n ? (0, o.c)(n) : void 0,
                end_memory: null != l ? (0, o.c)(l) : void 0,
                memory_delta_from_baseline: c,
            }),
                performance.clearMarks(r),
                performance.clearMarks(e.name);
        } catch (e) {
            m.warn("Failed to collect performance entry information:", e);
        }
    }
}
