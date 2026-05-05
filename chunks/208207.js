"use strict";
n.d(t, { A: () => U });
var i = n(835245),
    r = n(141931),
    s = n(451988),
    a = n(439372),
    o = n(626584),
    l = n(206885),
    u = n(41984),
    c = n(296027),
    d = n(614455),
    _ = n(871633),
    f = n(760751),
    h = n(763827),
    p = n(531685),
    E = n(174459),
    m = n(927813),
    g = n(973522),
    A = n(19575);
let I = (0, n(945810).mj)({
    name: "2026-01-system-service-performance-monitor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
class T {
    pids = new Set();
    enabled = !1;
    isExperimentEnabled() {
        return I.getConfig({ location: "RunningGamePerformanceMonitor" }).enabled;
    }
    enable() {
        if (this.isExperimentEnabled() && !this.enabled)
            for (let e of ((this.enabled = !0), this.pids)) this.startMonitoringPid(e);
    }
    disable() {
        if (this.enabled) {
            for (let e of ((this.enabled = !1), this.pids)) A.Ay.SetSystemServicePerformanceMonitorEnabled(e, !1);
            this.pids.clear();
        }
    }
    reset() {
        this.enabled = !1;
    }
    startMonitoringPid(e) {
        this.pids.add(e), this.enabled && A.Ay.SetSystemServicePerformanceMonitorEnabled(e, !0);
    }
    stopMonitoringPid(e) {
        this.pids.has(e) &&
            (this.pids.delete(e), this.enabled && A.Ay.SetSystemServicePerformanceMonitorEnabled(e, !1));
    }
    getSnapshot(e) {
        return this.enabled && this.pids.has(e)
            ? A.Ay.GetSystemServicePerformanceMonitorSnapshot(e)
            : Promise.resolve(null);
    }
}
let S = new T();
var N = n(952818),
    y = n(687658),
    C = n(451314);
let v = new o.A("RunningGameSystemMetricsMonitor"),
    O = [50, 95, 99];
function R(e) {
    let t = e.getReport(O);
    return {
        p50: t.percentiles[50] ?? 0,
        p95: t.percentiles[95] ?? 0,
        p99: t.percentiles[99] ?? 0,
        avg: t.mean,
        max: t.max,
        min: t.min,
    };
}
class b {
    cpuHistogram = new y.d();
    memoryHistogram = new y.d();
    discordMemoryHistogram = new y.d();
    lastCpuSnapshot = null;
    samplingInterval = null;
    isExperimentEnabled() {
        return I.getConfig({ location: "RunningGameSystemMetricsMonitor" }).enabled;
    }
    enable() {
        this.isExperimentEnabled() &&
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
        let e = R(this.cpuHistogram),
            t = R(this.memoryHistogram),
            n = R(this.discordMemoryHistogram);
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
        (this.cpuHistogram = new y.d()), (this.memoryHistogram = new y.d()), (this.discordMemoryHistogram = new y.d());
    }
    async takeSample() {
        this.sampleDiscordMemory(), await this.sampleCpuAndMemory();
    }
    async sampleCpuAndMemory() {
        try {
            let e = await C.A.getSystemMetrics();
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
            v.warn("Failed to sample CPU/memory metrics", e?.message);
        }
    }
    sampleDiscordMemory() {
        try {
            let e;
            if (null == this.lastCpuSnapshot || this.lastCpuSnapshot.memoryTotal <= 0) return;
            let t = C.A.getCurrentMemoryUsageKB();
            if (null != t && t > 0) e = 1024 * t;
            else {
                let t = C.A.getMemoryUsageDetails();
                if (null == t || (e = Object.values(t).reduce((e, t) => e + t, 0)) <= 0) return;
            }
            let n = (e / this.lastCpuSnapshot.memoryTotal) * 100;
            this.discordMemoryHistogram.addSample(n);
        } catch (e) {
            v.warn("Failed to sample Discord memory metrics", e?.message);
        }
    }
}
let D = new b();
var L = n(652215);
let w = new o.A("RunningGameHeartbeatManager"),
    M = 5 * m.A.Millis.MINUTE;
function P() {
    let e = p.A.isFocused(),
        t = p.A.isVisible();
    return e ? "focused" : t ? "visible" : "hidden";
}
class x extends a.A {
    heartbeatInterval = new s.IX();
    gameSessions = new Map();
    windowStateDurations = { focused: 0, visible: 0, hidden: 0 };
    windowStateTrackingState = "hidden";
    windowStateLastChangeTime = 0;
    windowTrackingEnabled = !1;
    actions = {
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
        this.heartbeatInterval.stop(), S.disable(), D.disable(), this.disableWindowTracking();
    }
    handleLogout() {
        S.disable(),
            D.disable(),
            this.disableWindowTracking(),
            this.gameSessions.clear(),
            this.heartbeatInterval.stop();
    }
    enableWindowTracking() {
        this.windowTrackingEnabled ||
            ((this.windowTrackingEnabled = !0),
            (this.windowStateDurations = { focused: 0, visible: 0, hidden: 0 }),
            (this.windowStateTrackingState = P()),
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
            (this.windowStateTrackingState = P());
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
            this.heartbeatInterval.stop(), D.disable(), this.disableWindowTracking();
            return;
        }
        D.enable(),
            this.enableWindowTracking(),
            this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(M, this.logRunningGameHeartbeats);
    }
    handleRunningGamesChanged = (e) => {
        this.scheduleHeartbeatTracking();
    };
    logHeartbeat(e, t, n, i, s) {
        let a = e.runningGame,
            o = performance.now(),
            p = t ? 0 : Math.round(o - e.lastHeartbeatTime),
            m = a.id ?? f.A.findGame(a)?.id;
        e.lastHeartbeatTime = o;
        let A = {
                game_id: m,
                game_name: a.name,
                game_distributor: a.distributor,
                game_distributor_game_id: a.sku,
                game_metadata: (0, _.MT)(a),
                game_executable: (0, g.Ic)(a.exePath),
                game_detection_enabled: (0, N.Xr)(a),
                initial_heartbeat: t,
                final_heartbeat: n,
                game_session_id: e.sessionId,
                duration_tracked_ms: p,
                rtc_connection_id: h.A.getRTCConnectionId(),
                media_session_id: h.A.getMediaSessionId(),
            },
            I = (function (e) {
                if (!l.O) return null;
                let t = c.default.getTrackedGameByPid(e);
                return {
                    overlay_state: t?.state ?? null,
                    overlay_method: null != t ? u.Ue[t.overlayMethod] : null,
                    overlay_version: d.A.getNativeModule()?.version() ?? 0,
                };
            })(a.pid),
            T = { discord_window_state: P() };
        return S.getSnapshot(a.pid)
            .then((e) => {
                E.default.track(L.HAw.RUNNING_GAME_HEARTBEAT, {
                    ...A,
                    ...T,
                    ...(s ?? {}),
                    ...(e ?? {}),
                    ...(i ?? {}),
                    ...(I ?? {}),
                });
            })
            .catch((e) => {
                t || e instanceof r.Fh || w.warn(`Failed to get performance snapshot for game ${a.id}`, e.message),
                    E.default.track(L.HAw.RUNNING_GAME_HEARTBEAT, {
                        ...A,
                        ...T,
                        ...(s ?? {}),
                        ...(i ?? {}),
                        ...(I ?? {}),
                    });
            });
    }
    processSessionChanges() {
        let e = N.Ay.getRunningGames(),
            t = performance.now(),
            n = new Set(),
            r = this.windowTrackingEnabled ? this.peekWindowStateDurations() : null;
        for (let s of e) {
            if (s.isLauncher) continue;
            let e = (function (e) {
                let t = null != e.name ? e.name : "",
                    n = `${e.id ?? e.exePath}:${t}`,
                    i = e.distributor === L.d3x.ROBLOX ? (0, _.hD)(e) : null;
                return null != i && (n += `:${i}`), n;
            })(s);
            if ((n.add(e), this.gameSessions.has(e))) {
                let n = this.gameSessions.get(e);
                if (n.runningGame.pid !== s.pid) {
                    let a = n.runningGame.pid,
                        o = { sessionId: (0, i.A)(), lastHeartbeatTime: t, runningGame: s };
                    this.gameSessions.set(e, o),
                        S.startMonitoringPid(s.pid),
                        this.logHeartbeat(n, !1, !0, null, r).finally(() => {
                            S.stopMonitoringPid(a);
                        }),
                        this.logHeartbeat(o, !0, !1, null, null);
                }
            } else {
                let n = { sessionId: (0, i.A)(), lastHeartbeatTime: t, runningGame: s };
                this.gameSessions.set(e, n), S.startMonitoringPid(s.pid), this.logHeartbeat(n, !0, !1, null, null);
            }
        }
        for (let [e, t] of this.gameSessions)
            if (!n.has(e)) {
                this.gameSessions.delete(e);
                let n = t.runningGame.pid;
                this.logHeartbeat(t, !1, !0, null, r).finally(() => {
                    S.stopMonitoringPid(n);
                });
            }
    }
    logRunningGameHeartbeats = () => {
        let e = D.getSnapshot(),
            t = this.getWindowStateDurationsSnapshot();
        for (let n of this.gameSessions.values()) this.logHeartbeat(n, !1, !1, e, t);
    };
}
let U = new x();
