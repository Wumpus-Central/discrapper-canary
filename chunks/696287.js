n.d(t, { Z: () => m }), n(47120);
var r = n(846519),
    i = n(147913),
    o = n(77498),
    a = n(19780),
    s = n(626135),
    l = n(70956),
    c = n(581567),
    u = n(594190),
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = 5 * l.Z.Millis.MINUTE;
class h extends i.Z {
    _terminate() {
        this.stopHeartbeat();
    }
    maybeStartHeartbeat() {
        this.heartbeatInterval.isStarted() || (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(p, this.logRunningGameHeartbeats));
    }
    stopHeartbeat() {
        this.heartbeatInterval.stop(), this.runningGameKeys.clear();
    }
    handlePostConnectionOpen() {
        u.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat();
    }
    constructor(...e) {
        super(...e),
            f(this, 'heartbeatInterval', new r.Xp()),
            f(this, 'runningGameKeys', new Set()),
            f(this, 'actions', {
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
                LOGOUT: () => this.stopHeartbeat(),
                CONNECTION_CLOSED: () => this.stopHeartbeat(),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }),
            f(this, 'handleRunningGamesChanged', (e) => {
                let { games: t } = e;
                if (0 === t.length) return void this.stopHeartbeat();
                this.maybeStartHeartbeat();
            }),
            f(this, 'logRunningGameHeartbeats', () => {
                let e = u.ZP.getRunningGames(),
                    t = {
                        rtc_connection_id: a.Z.getRTCConnectionId(),
                        media_session_id: a.Z.getMediaSessionId()
                    },
                    n = new Set();
                e.forEach((e) => {
                    var r, i;
                    let a = (0, u.rH)(e),
                        l = !this.runningGameKeys.has(a),
                        f = null != (i = e.id) ? i : null == (r = o.Z.getGameByName(e.name)) ? void 0 : r.id;
                    s.default.track(
                        d.rMx.RUNNING_GAME_HEARTBEAT,
                        _(
                            {
                                game_id: f,
                                game_name: e.name,
                                game_distributor: e.distributor,
                                game_executable: (0, c.N6)(e.exePath),
                                game_detection_enabled: (0, u.ik)(e),
                                initial_heartbeat: l
                            },
                            t
                        )
                    ),
                        n.add((0, u.rH)(e));
                }),
                    (this.runningGameKeys = n);
            });
    }
}
let m = new h();
