n.d(t, { Z: () => b }), n(47120);
var i = n(846519),
    r = n(147913),
    a = n(553795),
    s = n(430824),
    o = n(626135),
    l = n(425128),
    u = n(276344),
    c = n(981631);
function d(e, t, n) {
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
let f = 'League of Legends',
    _ = new i.V7(),
    p = !1,
    h = !1;
function m(e) {
    return e.some((e) => e.name === f);
}
function g() {
    let e = a.Z.getAccount(null, c.ABu.RIOT_GAMES),
        t = a.Z.getAccount(null, c.ABu.LEAGUE_OF_LEGENDS);
    return null == e && null == t
        ? 'missing_connections'
        : null == e
          ? 'missing_riot_connection'
          : null == t
            ? 'missing_league_of_legends_connection'
            : {
                  riotConnection: e,
                  lolConnection: t
              };
}
async function E(e) {
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: i } = e;
    if (!p && (!h || !i)) {
        _.stop();
        try {
            p = !0;
            let { next_update_timestamp: e } = await (0, l._7)({
                riotConnectionId: t,
                lolConnectionId: n,
                onlyUpdateIfStale: i
            });
            (p = !1), (h = !1);
            let r = new Date(1000 * e),
                a = new Date(),
                s = Math.max(0, r.getTime() - a.getTime());
            _.start(s, () =>
                (0, l._7)({
                    riotConnectionId: t,
                    lolConnectionId: n
                })
            );
        } catch (e) {
            (p = !1), (h = !0);
        }
    }
}
function v() {
    return Object.values(s.Z.getGuilds()).some(
        (e) =>
            e.hasFeature(c.oNc.LEADERBOARD_ENABLED) &&
            (0, u.NM)({
                guildId: e.id,
                location: 'LeagueOfLegendsLifecycleManager.handleDependantStoreChanges',
                autoTrackExposure: !1
            })
    );
}
function y(e) {
    o.default.track(c.rMx.LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING, { reason: e });
}
class I extends r.Z {
    handleRunningGameChange(e) {
        let { removed: t } = e;
        if (v() && m(t)) {
            let e = g();
            if ('string' == typeof e) {
                y(e);
                return;
            }
            E({
                riotConnectionId: e.riotConnection.id,
                lolConnectionId: e.lolConnection.id
            });
        }
    }
    handleDependantStoreChanges() {
        let e = g(),
            t = 'string' != typeof e,
            n = v() && t;
        _.isStarted() && !n
            ? _.stop()
            : !_.isStarted() &&
              n &&
              E({
                  riotConnectionId: e.riotConnection.id,
                  lolConnectionId: e.lolConnection.id,
                  onlyUpdateIfStale: !0
              });
    }
    constructor(...e) {
        super(...e), d(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange }), d(this, 'stores', new Map().set(s.Z, this.handleDependantStoreChanges).set(a.Z, this.handleDependantStoreChanges));
    }
}
let b = new I();
