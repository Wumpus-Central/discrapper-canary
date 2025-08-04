(n.d(t, { Z: () => b }), n(388685));
var r = n(570140),
    i = n(147913),
    a = n(70956),
    o = n(358085),
    s = n(998502),
    l = n(104755),
    c = n(355281),
    u = n(817788),
    d = n(509003),
    _ = n(802512),
    f = n(981631);
function p(e, t, n) {
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
let h = 3 * a.Z.Millis.DAY,
    m = 7 * a.Z.Millis.DAY,
    g = {
        joinGameLogPrefix: '[FLog::GameJoinLoadTime] Report game_join_loadtime:',
        joinGameFields: [
            {
                regex: 'universeid:([0-9]+)',
                key: u.SQ.UNIVERSE_ID
            },
            {
                regex: 'placeid:([0-9]+)',
                key: u.SQ.PLACE_ID
            },
            {
                regex: 'userid:([0-9]+)',
                key: u.SQ.USER_ID
            },
            {
                regex: 'sid:([0-9a-zA-Z-]+)',
                key: u.SQ.JOB_ID
            }
        ],
        leaveGameLogPrefix: '[FLog::SingleSurfaceApp] returnToLuaApp:'
    };
class E extends i.Z {
    _initialize() {
        this.stores = new Map().set(_.Z, () => this.handleRobloxSubgameStoreChanged());
    }
    constructor(...e) {
        (super(...e),
            p(this, 'currentInterval_', null),
            p(this, 'currentSubgameInfo_', null),
            p(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                RUNNING_GAMES_CHANGE: (e) => this.handleRunningGamesChange(e)
            }),
            p(this, 'handleRobloxSubgameStoreChanged', () => {
                let e = _.Z.getCurrentSubgameInfo();
                if (null == e.subgameInfo || null == e.subgameInfo.universeId || !c.D.getCurrentConfig({ location: 'roblox_subgame_detection' }).enabled) return;
                let t = e.subgameInfo.universeId,
                    n = _.Z.getState();
                (null == n.universeIdToApplicationInfo[t] || (null == e.application && n.universeIdToApplicationInfo[t].lastFetchedTime < Date.now() - h) || (null != e.application && n.universeIdToApplicationInfo[t].lastFetchedTime < Date.now() - m)) && (0, l.s)(t);
            }),
            p(this, 'handleGetRobloxSubgameInfo', (e) => {
                let t = (0, d.I8)(e);
                (0, d.yA)(this.currentSubgameInfo_, t) &&
                    ((this.currentSubgameInfo_ = t),
                    r.Z.dispatch({
                        type: 'ROBLOX_SUBGAME_UPDATE',
                        subgameInfo: t
                    }));
            }),
            p(this, 'handlePostConnectionOpen', () => {
                !__OVERLAY__ && ((0, o.isWindows)() || (0, o.isMac)()) && s.ZP.setRobloxSubgameDetectionConfig(g, this.handleGetRobloxSubgameInfo);
            }),
            p(this, 'handleRunningGamesChange', (e) => {
                if (__OVERLAY__) return;
                let t = e.games.some((e) => e.distributor === f.GQo.ROBLOX);
                (t &&
                    !e.added.some((e) => e.distributor === f.GQo.ROBLOX) &&
                    r.Z.dispatch({
                        type: 'ROBLOX_SUBGAME_UPDATE',
                        subgameInfo: this.currentSubgameInfo_
                    }),
                    t || null == this.currentInterval_
                        ? t &&
                          null == this.currentInterval_ &&
                          (s.ZP.checkForRobloxSubgameUpdate(),
                          (this.currentInterval_ = setInterval(() => {
                              s.ZP.checkForRobloxSubgameUpdate();
                          }, 5000)))
                        : (clearInterval(this.currentInterval_), (this.currentInterval_ = null)));
            }));
    }
}
let b = new E();
