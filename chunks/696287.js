(n.d(t, { Z: () => b }), n(388685));
var r = n(846519),
    i = n(147913),
    a = n(509003),
    o = n(77498),
    s = n(19780),
    l = n(626135),
    c = n(70956),
    u = n(581567),
    d = n(594190),
    _ = n(981631);
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
let h = 5 * c.Z.Millis.MINUTE;
function m(e) {
    return e.distributor === _.GQo.ROBLOX ? (0, a.x3)(e) : null;
}
function g(e) {
    let t = null != e.name ? e.name : '',
        n = ''.concat(e.exePath, ':').concat(t),
        r = m(e);
    return (null != r && (n += ':'.concat(r)), n);
}
class E extends i.Z {
    _terminate() {
        this.stopHeartbeat();
    }
    maybeStartHeartbeat() {
        this.heartbeatInterval.isStarted() || (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(h, this.logRunningGameHeartbeats));
    }
    stopHeartbeat() {
        (this.heartbeatInterval.stop(), this.runningGameKeys.clear());
    }
    handlePostConnectionOpen() {
        d.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat();
    }
    constructor(...e) {
        (super(...e),
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
                let e = d.ZP.getRunningGames(),
                    t = {
                        rtc_connection_id: s.Z.getRTCConnectionId(),
                        media_session_id: s.Z.getMediaSessionId()
                    },
                    n = new Set();
                (e.forEach((e) => {
                    var r, i;
                    let s = g(e),
                        c = !this.runningGameKeys.has(s),
                        f = null != (i = e.id) ? i : null == (r = o.Z.getGameByName(e.name)) ? void 0 : r.id;
                    (l.default.track(
                        _.rMx.RUNNING_GAME_HEARTBEAT,
                        p(
                            {
                                game_id: f,
                                game_name: e.name,
                                game_distributor: e.distributor,
                                game_distributor_game_id: e.sku,
                                game_metadata: (0, a.sD)(e),
                                game_executable: (0, u.N6)(e.exePath),
                                game_detection_enabled: (0, d.ik)(e),
                                initial_heartbeat: c
                            },
                            t
                        )
                    ),
                        n.add(g(e)));
                }),
                    (this.runningGameKeys = n));
            }));
    }
}
let b = new E();
