n.d(t, { Z: () => y }), n(388685);
var r = n(772848),
    i = n(846519),
    a = n(147913),
    o = n(509003),
    s = n(77498),
    l = n(19780),
    c = n(626135),
    u = n(70956),
    d = n(581567),
    f = n(594190),
    p = n(981631);
function _(e, t, n) {
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
let m = 5 * u.Z.Millis.MINUTE;
function h(e) {
    return e.distributor === p.GQo.ROBLOX ? (0, o.x3)(e) : null;
}
function g(e) {
    let t = null != e.name ? e.name : "",
        n = "".concat(e.exePath, ":").concat(t),
        r = h(e);
    return null != r && (n += ":".concat(r)), n;
}
function E(e) {
    return "".concat(g(e), ":").concat(e.pid);
}
class b extends a.Z {
    _terminate() {
        this.heartbeatInterval.stop();
    }
    handleLogout() {
        this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        if ((this.processSessionChanges(), 0 === f.ZP.getRunningGames().length))
            return void this.heartbeatInterval.stop();
        this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(m, this.logRunningGameHeartbeats);
    }
    logHeartbeat(e, t, n, r) {
        var i, a;
        let u = performance.now(),
            _ = n ? 0 : Math.round(u - t.lastHeartbeatTime),
            m = null != (a = e.id) ? a : null == (i = s.Z.getGameByName(e.name)) ? void 0 : i.id;
        c.default.track(p.rMx.RUNNING_GAME_HEARTBEAT, {
            game_id: m,
            game_name: e.name,
            game_distributor: e.distributor,
            game_distributor_game_id: e.sku,
            game_metadata: (0, o.sD)(e),
            game_executable: (0, d.N6)(e.exePath),
            game_detection_enabled: (0, f.ik)(e),
            initial_heartbeat: n,
            final_heartbeat: r,
            game_session_id: t.sessionId,
            duration_tracked_ms: _,
            rtc_connection_id: l.Z.getRTCConnectionId(),
            media_session_id: l.Z.getMediaSessionId(),
        }),
            (t.lastHeartbeatTime = u);
    }
    processSessionChanges() {
        let e = f.ZP.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            let e = E(i);
            if ((n.add(e), !this.gameSessions.has(e))) {
                let n = {
                    sessionId: (0, r.Z)(),
                    lastHeartbeatTime: t,
                    runningGame: i,
                };
                this.gameSessions.set(e, n), this.logHeartbeat(i, n, !0, !1);
            }
        }
        for (let [e, t] of this.gameSessions)
            n.has(e) || (this.logHeartbeat(t.runningGame, t, !1, !0), this.gameSessions.delete(e));
    }
    constructor(...e) {
        super(...e),
            _(this, "heartbeatInterval", new i.Xp()),
            _(this, "gameSessions", new Map()),
            _(this, "actions", {
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
                POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
                LOGOUT: () => this.handleLogout(),
            }),
            _(this, "handleRunningGamesChanged", (e) => {
                this.scheduleHeartbeatTracking();
            }),
            _(this, "logRunningGameHeartbeats", () => {
                for (let e of f.ZP.getRunningGames()) {
                    let t = E(e),
                        n = this.gameSessions.get(t);
                    null != n && this.logHeartbeat(e, n, !1, !1);
                }
            });
    }
}
let y = new b();
