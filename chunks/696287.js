n.d(t, { Z: () => h }), n(47120);
var i = n(846519),
    r = n(147913),
    a = n(77498),
    s = n(19780),
    o = n(626135),
    l = n(70956),
    u = n(581567),
    c = n(594190),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 5 * l.Z.Millis.MINUTE;
class p extends r.Z {
    _terminate() {
        this.stopHeartbeat();
    }
    maybeStartHeartbeat() {
        this.heartbeatInterval.isStarted() || (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(_, this.logRunningGameHeartbeats));
    }
    stopHeartbeat() {
        this.heartbeatInterval.stop(), this.runningGameKeys.clear();
    }
    handlePostConnectionOpen() {
        c.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat();
    }
    constructor(...e) {
        super(...e),
            f(this, 'heartbeatInterval', new i.Xp()),
            f(this, 'runningGameKeys', new Set()),
            f(this, 'actions', {
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
                LOGOUT: () => this.stopHeartbeat(),
                CONNECTION_CLOSED: () => this.stopHeartbeat(),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }),
            f(this, 'handleRunningGamesChanged', (e) => {
                let { games: t } = e;
                if (0 === t.length) {
                    this.stopHeartbeat();
                    return;
                }
                this.maybeStartHeartbeat();
            }),
            f(this, 'logRunningGameHeartbeats', () => {
                let e = c.ZP.getRunningGames(),
                    t = {
                        rtc_connection_id: s.Z.getRTCConnectionId(),
                        media_session_id: s.Z.getMediaSessionId()
                    },
                    n = new Set();
                e.forEach((e) => {
                    var i, r;
                    let s = (0, c.rH)(e),
                        l = !this.runningGameKeys.has(s),
                        f = null !== (r = e.id) && void 0 !== r ? r : null === (i = a.Z.getGameByName(e.name)) || void 0 === i ? void 0 : i.id;
                    o.default.track(d.rMx.RUNNING_GAME_HEARTBEAT, {
                        game_id: f,
                        game_name: e.name,
                        game_distributor: e.distributor,
                        game_executable: (0, u.N6)(e.exePath),
                        game_detection_enabled: (0, c.ik)(e),
                        initial_heartbeat: l,
                        ...t
                    }),
                        n.add((0, c.rH)(e));
                }),
                    (this.runningGameKeys = n);
            });
    }
}
let h = new p();
