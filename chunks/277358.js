(n.d(t, { Z: () => _ }), n(388685));
var r = n(570140),
    i = n(147913),
    a = n(358085),
    o = n(998502),
    s = n(817788),
    l = n(509003),
    c = n(981631);
function u(e, t, n) {
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
let d = {
    joinGameLogPrefix: '[FLog::GameJoinLoadTime] Report game_join_loadtime:',
    joinGameFields: [
        {
            regex: 'universeid:([0-9]+)',
            key: s.SQ.UNIVERSE_ID
        },
        {
            regex: 'placeid:([0-9]+)',
            key: s.SQ.PLACE_ID
        },
        {
            regex: 'userid:([0-9]+)',
            key: s.SQ.USER_ID
        },
        {
            regex: 'sid:([0-9a-zA-Z-]+)',
            key: s.SQ.JOB_ID
        }
    ],
    leaveGameLogPrefix: '[FLog::SingleSurfaceApp] returnToLuaApp:'
};
class f extends i.Z {
    constructor(...e) {
        (super(...e),
            u(this, 'currentInterval_', null),
            u(this, 'currentSubgameInfo_', null),
            u(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChange(e)
            }),
            u(this, 'handleGetRobloxSubgameInfo', (e) => {
                let t = (0, l.I8)(e);
                (0, l.yA)(this.currentSubgameInfo_, t) &&
                    ((this.currentSubgameInfo_ = t),
                    r.Z.dispatch({
                        type: 'ROBLOX_SUBGAME_UPDATE',
                        subgameInfo: t
                    }));
            }),
            u(this, 'handlePostConnectionOpen', () => {
                !__OVERLAY__ && ((0, a.isWindows)() || (0, a.isMac)()) && o.ZP.setRobloxSubgameDetectionConfig(d, this.handleGetRobloxSubgameInfo);
            }),
            u(this, 'handleRunningGamesChange', (e) => {
                if (__OVERLAY__) return;
                let t = e.games.some((e) => e.distributor === c.GQo.ROBLOX);
                (t &&
                    !e.added.some((e) => e.distributor === c.GQo.ROBLOX) &&
                    r.Z.dispatch({
                        type: 'ROBLOX_SUBGAME_UPDATE',
                        subgameInfo: this.currentSubgameInfo_
                    }),
                    t || null == this.currentInterval_
                        ? t &&
                          null == this.currentInterval_ &&
                          (o.ZP.checkForRobloxSubgameUpdate(),
                          (this.currentInterval_ = setInterval(() => {
                              o.ZP.checkForRobloxSubgameUpdate();
                          }, 5000)))
                        : (clearInterval(this.currentInterval_), (this.currentInterval_ = null)));
            }));
    }
}
let _ = new f();
