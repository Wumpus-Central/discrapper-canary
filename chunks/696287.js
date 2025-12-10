n.d(t, { Z: () => b }), n(388685);
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
    var t;
    let n = null != e.name ? e.name : "",
        r = "".concat(null != (t = e.id) ? t : e.exePath, ":").concat(n),
        i = h(e);
    return null != i && (r += ":".concat(i)), r;
}
class E extends a.Z {
    _terminate() {
        this.heartbeatInterval.stop();
    }
    handleLogout() {
        this.gameSessions.clear(), this.heartbeatInterval.stop();
    }
    scheduleHeartbeatTracking() {
        if ((this.processSessionChanges(), 0 === this.gameSessions.size)) return void this.heartbeatInterval.stop();
        this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(m, this.logRunningGameHeartbeats);
    }
    logHeartbeat(e, t, n) {
        var r, i;
        let a = e.runningGame,
            u = performance.now(),
            _ = t ? 0 : Math.round(u - e.lastHeartbeatTime),
            m = null != (i = a.id) ? i : null == (r = s.Z.getGameByName(a.name)) ? void 0 : r.id;
        c.default.track(p.rMx.RUNNING_GAME_HEARTBEAT, {
            game_id: m,
            game_name: a.name,
            game_distributor: a.distributor,
            game_distributor_game_id: a.sku,
            game_metadata: (0, o.sD)(a),
            game_executable: (0, d.N6)(a.exePath),
            game_detection_enabled: (0, f.ik)(a),
            initial_heartbeat: t,
            final_heartbeat: n,
            game_session_id: e.sessionId,
            duration_tracked_ms: _,
            rtc_connection_id: l.Z.getRTCConnectionId(),
            media_session_id: l.Z.getMediaSessionId(),
        }),
            (e.lastHeartbeatTime = u);
    }
    processSessionChanges() {
        let e = f.ZP.getRunningGames(),
            t = performance.now(),
            n = new Set();
        for (let i of e) {
            if (i.isLauncher) continue;
            let e = g(i);
            if ((n.add(e), !this.gameSessions.has(e))) {
                let n = {
                    sessionId: (0, r.Z)(),
                    lastHeartbeatTime: t,
                    runningGame: i,
                };
                this.gameSessions.set(e, n), this.logHeartbeat(n, !0, !1);
            }
        }
        for (let [e, t] of this.gameSessions) n.has(e) || (this.logHeartbeat(t, !1, !0), this.gameSessions.delete(e));
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
                for (let e of this.gameSessions.values()) this.logHeartbeat(e, !1, !1);
            });
    }
}
let b = new E();
