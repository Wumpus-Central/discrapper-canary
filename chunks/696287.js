var i = r(47120);
var a = r(846519),
    o = r(147913),
    s = r(77498),
    l = r(19780),
    u = r(626135),
    c = r(70956),
    d = r(581567),
    f = r(594190),
    p = r(981631);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = 5 * c.Z.Millis.MINUTE;
class m extends o.Z {
    _terminate() {
        this.stopHeartbeat();
    }
    maybeStartHeartbeat() {
        !this.heartbeatInterval.isStarted() && (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(_, this.logRunningGameHeartbeats));
    }
    stopHeartbeat() {
        this.heartbeatInterval.stop(), this.runningGameKeys.clear();
    }
    handlePostConnectionOpen() {
        f.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat();
    }
    constructor(...e) {
        super(...e),
            h(this, 'heartbeatInterval', new a.Xp()),
            h(this, 'runningGameKeys', new Set()),
            h(this, 'actions', {
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChanged(e),
                LOGOUT: () => this.stopHeartbeat(),
                CONNECTION_CLOSED: () => this.stopHeartbeat(),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }),
            h(this, 'handleRunningGamesChanged', (e) => {
                let { games: n } = e;
                if (0 === n.length) {
                    this.stopHeartbeat();
                    return;
                }
                this.maybeStartHeartbeat();
            }),
            h(this, 'logRunningGameHeartbeats', () => {
                let e = f.ZP.getRunningGames(),
                    n = {
                        rtc_connection_id: l.Z.getRTCConnectionId(),
                        media_session_id: l.Z.getMediaSessionId()
                    },
                    r = new Set();
                e.forEach((e) => {
                    var i, a;
                    let o = (0, f.rH)(e),
                        l = !this.runningGameKeys.has(o),
                        c = null !== (a = e.id) && void 0 !== a ? a : null === (i = s.Z.getGameByName(e.name)) || void 0 === i ? void 0 : i.id;
                    u.default.track(p.rMx.RUNNING_GAME_HEARTBEAT, {
                        game_id: c,
                        game_name: e.name,
                        game_distributor: e.distributor,
                        game_executable: (0, d.N6)(e.exePath),
                        game_detection_enabled: (0, f.ik)(e),
                        initial_heartbeat: l,
                        ...n
                    }),
                        r.add((0, f.rH)(e));
                }),
                    (this.runningGameKeys = r);
            });
    }
}
n.Z = new m();
