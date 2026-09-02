"use strict";
n.d(t, { A: () => G });
var i = n(132500),
    r = n(141931),
    a = n(451988),
    s = n(228366),
    l = n(439372),
    o = n(626584),
    d = n(206885),
    c = n(41984),
    u = n(296027),
    _ = n(614455),
    E = n(871633),
    A = n(763827),
    h = n(531685),
    I = n(174459),
    f = n(927813),
    p = n(973522),
    T = n(605404),
    m = n(19575);
class g {
    pids = new Set();
    enabled = !1;
    enable() {
        if (!this.enabled) for (let e of ((this.enabled = !0), this.pids)) this.startMonitoringPid(e);
    }
    disable() {
        if (this.enabled) {
            for (let e of ((this.enabled = !1), this.pids)) m.Ay.SetSystemServicePerformanceMonitorEnabled(e, !1);
            this.pids.clear();
        }
    }
    reset() {
        this.enabled = !1;
    }
    startMonitoringPid(e) {
        this.pids.add(e), this.enabled && m.Ay.SetSystemServicePerformanceMonitorEnabled(e, !0);
    }
    stopMonitoringPid(e) {
        this.pids.has(e) &&
            (this.pids.delete(e), this.enabled && m.Ay.SetSystemServicePerformanceMonitorEnabled(e, !1));
    }
    getSnapshot(e) {
        return this.enabled && this.pids.has(e)
            ? m.Ay.GetSystemServicePerformanceMonitorSnapshot(e)
            : Promise.resolve(null);
    }
}
let S = new g();
var N = n(952818),
    C = n(687658),
    O = n(321034);
let R = new o.A("RunningGameSystemMetricsMonitor"),
    L = [50, 95, 99];
function y(e) {
    let t = e.getReport(L);
    return {
        p50: t.percentiles[50] ?? 0,
        p95: t.percentiles[95] ?? 0,
        p99: t.percentiles[99] ?? 0,
        avg: t.mean,
        max: t.max,
        min: t.min,
    };
}
class D {
    cpuHistogram = new C.d();
    memoryHistogram = new C.d();
    discordMemoryHistogram = new C.d();
    lastCpuSnapshot = null;
    samplingInterval = null;
    enable() {
        null == this.samplingInterval &&
            (this.resetHistograms(),
            (this.samplingInterval = setInterval(() => {
                this.takeSample();
            }, 1e3)));
    }
    disable() {
        null != this.samplingInterval && (clearInterval(this.samplingInterval), (this.samplingInterval = null)),
            (this.lastCpuSnapshot = null),
            this.resetHistograms();
    }
    getSnapshot() {
        if (
            [this.cpuHistogram, this.memoryHistogram, this.discordMemoryHistogram].every(
                (e) => 0 === e.getReport().count,
            )
        )
            return null;
        let e = y(this.cpuHistogram),
            t = y(this.memoryHistogram),
            n = y(this.discordMemoryHistogram);
        return (
            this.resetHistograms(),
            {
                system_cpu_pct_p50: e.p50,
                system_cpu_pct_p95: e.p95,
                system_cpu_pct_p99: e.p99,
                system_cpu_pct_avg: e.avg,
                system_cpu_pct_max: e.max,
                system_cpu_pct_min: e.min,
                system_memory_pct_p50: t.p50,
                system_memory_pct_p95: t.p95,
                system_memory_pct_p99: t.p99,
                system_memory_pct_avg: t.avg,
                system_memory_pct_max: t.max,
                system_memory_pct_min: t.min,
                discord_memory_pct_p50: n.p50,
                discord_memory_pct_p95: n.p95,
                discord_memory_pct_p99: n.p99,
                discord_memory_pct_avg: n.avg,
                discord_memory_pct_max: n.max,
                discord_memory_pct_min: n.min,
            }
        );
    }
    resetHistograms() {
        (this.cpuHistogram = new C.d()), (this.memoryHistogram = new C.d()), (this.discordMemoryHistogram = new C.d());
    }
    async takeSample() {
        this.sampleDiscordMemory(), await this.sampleCpuAndMemory();
    }
    async sampleCpuAndMemory() {
        try {
            let e = await O.A.getSystemMetrics();
            if (null == e) return;
            if (e.memoryTotal > 0) {
                let t = ((e.memoryTotal - e.memoryFree) / e.memoryTotal) * 100;
                this.memoryHistogram.addSample(t);
            }
            if (null != this.lastCpuSnapshot) {
                let t = e.cpuTotalTick - this.lastCpuSnapshot.cpuTotalTick,
                    n = e.cpuTotalIdle - this.lastCpuSnapshot.cpuTotalIdle;
                t > 0 && this.cpuHistogram.addSample(((t - n) / t) * 100);
            }
            this.lastCpuSnapshot = e;
        } catch (e) {
            R.warn("Failed to sample CPU/memory metrics", e?.message);
        }
    }
    sampleDiscordMemory() {
        try {
            let e;
            if (null == this.lastCpuSnapshot || this.lastCpuSnapshot.memoryTotal <= 0) return;
            let t = O.A.getCurrentMemoryUsageKB();
            if (null != t && t > 0) e = 1024 * t;
            else {
                let t = O.A.getMemoryUsageDetails();
                if (null == t || (e = Object.values(t).reduce((e, t) => e + t, 0)) <= 0) return;
            }
            let n = (e / this.lastCpuSnapshot.memoryTotal) * 100;
            this.discordMemoryHistogram.addSample(n);
        } catch (e) {
            R.warn("Failed to sample Discord memory metrics", e?.message);
        }
    }
}
let v = new D();
var b = n(652215);
let M = new o.A("RunningGameHeartbeatManager"),
    P = 5 * f.A.Millis.MINUTE;
function U() {
    let e = h.A.isFocused(),
        t = h.A.isVisible();
    return e ? "focused" : t ? "visible" : "hidden";
}
class w extends l.A {
    heartbeatInterval = new a.IX();
    gameSessions = new Map();
    windowStateDurations = { focused: 0, visible: 0, hidden: 0 };
    windowStateTrackingState = "hidden";
    windowStateLastChangeTime = 0;
    windowTrackingEnabled = !1;
    actions = {
        APPLICATIONS_FETCH_SUCCESS: () => this.handleGameIdentityChange(),
        GAMES_DATABASE_UPDATE: () => this.handleGameIdentityChange(),
        LOCAL_ACTIVITY_UPDATE: () => this.handleGameIdentityChange(),
        LOGOUT: () => this.handleLogout(),
        POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
        RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
        SYSTEM_SERVICE_INITIALIZE: (e) => this.handleSystemServiceInitialize(e),
        WINDOW_FOCUS: () => this.handleWindowStateChange(),
        WINDOW_VISIBILITY_CHANGE: () => this.handleWindowStateChange(),
    };
    handleSystemServiceInitialize(e) {
        let { status: t, modules: n } = e;
        n.includes("tool-service") && ("running" === t.state ? S.enable() : S.reset());
    }
    _terminate() {
        this.heartbeatInterval.stop(), S.disable(), v.disable(), this.disableWindowTracking();
    }
    handleLogout() {
        S.disable(),
            v.disable(),
            this.disableWindowTracking(),
            this.gameSessions.clear(),
            this.heartbeatInterval.stop();
    }
    handleGameIdentityChange() {
        s.h.wait(() => this.scheduleHeartbeatTracking());
    }
    enableWindowTracking() {
        this.windowTrackingEnabled ||
            ((this.windowTrackingEnabled = !0),
            (this.windowStateDurations = { focused: 0, visible: 0, hidden: 0 }),
            (this.windowStateTrackingState = U()),
            (this.windowStateLastChangeTime = performance.now()));
    }
    disableWindowTracking() {
        this.windowTrackingEnabled = !1;
    }
    handleWindowStateChange() {
        if (!this.windowTrackingEnabled) return;
        let e = performance.now();
        (this.windowStateDurations[this.windowStateTrackingState] += e - this.windowStateLastChangeTime),
            (this.windowStateLastChangeTime = e),
            (this.windowStateTrackingState = U());
    }
    getWindowStateDurationsSnapshot() {
        let e = performance.now();
        (this.windowStateDurations[this.windowStateTrackingState] += e - this.windowStateLastChangeTime),
            (this.windowStateLastChangeTime = e);
        let t = {
            discord_window_focused_duration_ms: Math.round(this.windowStateDurations.focused),
            discord_window_visible_duration_ms: Math.round(this.windowStateDurations.visible),
            discord_window_hidden_duration_ms: Math.round(this.windowStateDurations.hidden),
        };
        return (this.windowStateDurations = { focused: 0, visible: 0, hidden: 0 }), t;
    }
    peekWindowStateDurations() {
        let e = performance.now() - this.windowStateLastChangeTime;
        return {
            discord_window_focused_duration_ms: Math.round(
                this.windowStateDurations.focused + ("focused" === this.windowStateTrackingState ? e : 0),
            ),
            discord_window_visible_duration_ms: Math.round(
                this.windowStateDurations.visible + ("visible" === this.windowStateTrackingState ? e : 0),
            ),
            discord_window_hidden_duration_ms: Math.round(
                this.windowStateDurations.hidden + ("hidden" === this.windowStateTrackingState ? e : 0),
            ),
        };
    }
    scheduleHeartbeatTracking() {
        if ((this.processSessionChanges(), 0 === this.gameSessions.size)) {
            this.heartbeatInterval.stop(), v.disable(), this.disableWindowTracking();
            return;
        }
        v.enable(),
            this.enableWindowTracking(),
            this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(P, this.logRunningGameHeartbeats);
    }
    handleRunningGamesChanged = (e) => {
        this.scheduleHeartbeatTracking();
    };
    getAnalyticsIdentity(e) {
        let t = (0, T.ME)(e);
        if (t.hasResolvedSdkIdentity) return t;
        let n = [...this.gameSessions.values()].find((t) => t.runningGame.pid === e.pid);
        return n?.analyticsIdentity.usesSocialSdk === !0 ? n.analyticsIdentity : t;
    }
    stopMonitoringPidIfInactive(e) {
        [...this.gameSessions.values()].some((t) => t.runningGame.pid === e) || S.stopMonitoringPid(e);
    }
    logHeartbeat(e, t, n, i, a) {
        let s = e.runningGame,
            l = performance.now(),
            o = t ? 0 : Math.round(l - e.lastHeartbeatTime);
        e.lastHeartbeatTime = l;
        let E = {
                game_id: e.analyticsIdentity.gameId,
                game_name: e.analyticsIdentity.gameName,
                game_distributor: s.distributor,
                game_distributor_game_id: s.sku,
                game_metadata: (0, p.EQ)(s, e.analyticsIdentity.usesSocialSdk, (0, p.wH)(s).gameId),
                game_executable: (0, p.Ic)(s.exePath),
                game_detection_enabled: (0, N.Xr)(s),
                initial_heartbeat: t,
                final_heartbeat: n,
                game_session_id: e.sessionId,
                duration_tracked_ms: o,
                rtc_connection_id: A.A.getRTCConnectionId(),
                media_session_id: A.A.getMediaSessionId(),
            },
            h = (function (e) {
                if (!d.O) return null;
                let t = u.default.getTrackedGameByPid(e);
                return {
                    overlay_state: t?.state ?? null,
                    overlay_method: null != t ? c.Ue[t.overlayMethod] : null,
                    overlay_version: _.A.getNativeModule()?.version() ?? 0,
                };
            })(s.pid),
            f = { discord_window_state: U() };
        return S.getSnapshot(s.pid)
            .then((e) => {
                I.default.track(b.HAw.RUNNING_GAME_HEARTBEAT, {
                    ...E,
                    ...f,
                    ...(a ?? {}),
                    ...(e ?? {}),
                    ...(i ?? {}),
                    ...(h ?? {}),
                });
            })
            .catch((e) => {
                t || e instanceof r.Fh || M.warn(`Failed to get performance snapshot for game ${s.id}`, e.message),
                    I.default.track(b.HAw.RUNNING_GAME_HEARTBEAT, {
                        ...E,
                        ...f,
                        ...(a ?? {}),
                        ...(i ?? {}),
                        ...(h ?? {}),
                    });
            });
    }
    processSessionChanges() {
        let e = N.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set(),
            r = this.windowTrackingEnabled ? this.peekWindowStateDurations() : null;
        for (let a of e) {
            if (a.isLauncher) continue;
            let e = this.getAnalyticsIdentity(a),
                s = (function (e, t) {
                    if (t.usesSocialSdk) return `social_sdk:${(0, T.Xv)(t)}`;
                    let n = null != e.name ? e.name : "",
                        i = `${e.id ?? e.exePath}:${n}`,
                        r = e.distributor === b.d3x.ROBLOX ? (0, E.hD)(e) : null;
                    return null != r && (i += `:${r}`), i;
                })(a, e);
            if ((n.add(s), this.gameSessions.has(s))) {
                let n = this.gameSessions.get(s);
                if (null == n) continue;
                if (n.runningGame.pid !== a.pid) {
                    let l = n.runningGame.pid,
                        o = { sessionId: (0, i.A)(), lastHeartbeatTime: t, runningGame: a, analyticsIdentity: e };
                    this.gameSessions.set(s, o),
                        S.startMonitoringPid(a.pid),
                        this.logHeartbeat(n, !1, !0, null, r).finally(() => {
                            this.stopMonitoringPidIfInactive(l);
                        }),
                        this.logHeartbeat(o, !0, !1, null, null);
                } else (n.runningGame = a), (n.analyticsIdentity = e);
            } else {
                let n = { sessionId: (0, i.A)(), lastHeartbeatTime: t, runningGame: a, analyticsIdentity: e };
                this.gameSessions.set(s, n), S.startMonitoringPid(a.pid), this.logHeartbeat(n, !0, !1, null, null);
            }
        }
        for (let [e, t] of this.gameSessions)
            if (!n.has(e)) {
                this.gameSessions.delete(e);
                let n = t.runningGame.pid;
                this.logHeartbeat(t, !1, !0, null, r).finally(() => {
                    this.stopMonitoringPidIfInactive(n);
                });
            }
    }
    logRunningGameHeartbeats = () => {
        let e = v.getSnapshot(),
            t = this.getWindowStateDurationsSnapshot();
        for (let n of this.gameSessions.values()) this.logHeartbeat(n, !1, !1, e, t);
    };
}
let G = new w();
