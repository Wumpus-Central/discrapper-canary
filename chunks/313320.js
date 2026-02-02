r.d(t, {
    d: () => p,
}),
    r(896048),
    r(65821),
    r(321073);
var i = r(73153),
    n = r(626584),
    s = r(723702),
    a = r(290805),
    o = r(381505),
    l = r(622397);

function m(e, t, r) {
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
let d = new n.A("MeticulousActionTracker"),
    c = "meticulous-start",
    u = "meticulous-end",
    h = new Set([
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
        return {
            platform: (0, s.getNativePlatform)(),
            release_channel: null !== a.y && void 0 !== a.y ? a.y : "unknown",
            uptime_bucket: (0, l.X)(e),
        };
    }
    buildReport(e) {
        if (null == this.mode) throw Error("Cannot build report without mode");
        let t = this.mode.getMemory(),
            r = this.mode.baselineUsedMemory;
        return {
            type: "heap_snapshot_action",
            session_id: this.mode.sessionId,
            commit_sha: this.mode.commitSha,
            branch_name: this.mode.branchName,
            commit_date: this.mode.commitDate,
            timestamp: new Date().toISOString(),
            build_number: "492190",
            built_at: "1770061493534",
            release_channel: null !== a.y && void 0 !== a.y ? a.y : "unknown",
            tags: this.getTags(),
            metrics: {
                report_time_memory: null != t ? (0, o.c)(t) : void 0,
                delta_from_baseline:
                    null != r && (null == t ? void 0 : t.usedJSHeapSize) != null ? t.usedJSHeapSize - r : void 0,
                baseline_memory: r,
                timing: {
                    collected_at: this.mode.performanceNow(),
                },
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
                    if (null != this.mode && h.has(e.type)) {
                        var t;
                        let r = ++this.dispatchCounter,
                            i = this.mode.getMemory(),
                            n = null != (t = this.pendingDispatches.get(e.type)) ? t : [];
                        n.push(r),
                            this.pendingDispatches.set(e.type, n),
                            this.mode.mark("".concat(c, "-").concat(e.type, "-").concat(r), {
                                detail: {
                                    memory: i,
                                },
                            });
                    }
                    return !1;
                }),
                (this.interceptorAdded = !0)),
            h.forEach((e) => {
                if (this.actionHandlers.has(e)) return;
                let t = () => {
                    let t = this.pendingDispatches.get(e),
                        r = null == t ? void 0 : t.shift();
                    if (null == r) return void d.warn("No pending dispatch ID for action: ".concat(e));
                    let i = () => {
                        var t, i;
                        let n = null == (t = this.mode) ? void 0 : t.getMemory();
                        null == (i = this.mode) ||
                            i.mark("".concat(u, "-").concat(e, "-").concat(r), {
                                detail: {
                                    memory: n,
                                    actionType: e,
                                    dispatchId: r,
                                },
                            });
                    };
                    requestAnimationFrame(() => {
                        requestAnimationFrame(i);
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
                        "mark" === t.entryType && -1 !== t.name.indexOf(u) && this.collectEntry(t);
                    this.collectedEntries.length >= 100 && this.flush();
                })),
                    this.observer.observe({
                        type: "mark",
                        buffered: !0,
                    });
            } catch (e) {
                d.warn("Failed to set up PerformanceObserver:", e);
            }
    }
    collectEntry(e) {
        try {
            var t, r, i, n, s;
            let a = null == (t = e.detail) ? void 0 : t.actionType,
                l = null == (r = e.detail) ? void 0 : r.dispatchId;
            if (null == a || null == l) {
                d.warn("End mark missing actionType or dispatchId:", e.name), performance.clearMarks(e.name);
                return;
            }
            let m = "".concat(c, "-").concat(a, "-").concat(l),
                u = performance.getEntriesByName(m);
            if (0 === u.length) {
                d.warn("Missing start mark for action: ".concat(m)), performance.clearMarks(e.name);
                return;
            }
            let h = u[0],
                p = null == (i = h.detail) ? void 0 : i.memory,
                f = null == (n = e.detail) ? void 0 : n.memory,
                S = null == (s = this.mode) ? void 0 : s.baselineUsedMemory,
                y = (null == f ? void 0 : f.usedJSHeapSize) != null && null != S ? f.usedJSHeapSize - S : void 0,
                v = null != this.mode ? this.mode.performanceNow() : 0;
            this.collectedEntries.push({
                name: a,
                start_time: h.startTime,
                end_time: e.startTime,
                collected_at: v,
                start_memory: null != p ? (0, o.c)(p) : void 0,
                end_memory: null != f ? (0, o.c)(f) : void 0,
                memory_delta_from_baseline: y,
            }),
                performance.clearMarks(m),
                performance.clearMarks(e.name);
        } catch (e) {
            d.warn("Failed to collect performance entry information:", e);
        }
    }
    constructor() {
        m(this, "mode", null),
            m(this, "observer", null),
            m(this, "collectedEntries", []),
            m(this, "flushIntervalId", null),
            m(this, "sessionStartTime", 0),
            m(this, "interceptorAdded", !1),
            m(this, "actionHandlers", new Map()),
            m(this, "dispatchCounter", 0),
            m(this, "pendingDispatches", new Map());
    }
}
