n.d(t, { Z: () => O }), n(47120);
var r = n(846519),
    i = n(147913),
    o = n(553795),
    a = n(430824),
    s = n(626135),
    l = n(425128),
    c = n(276344),
    u = n(981631);
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
    _ = new r.V7(),
    p = !1,
    h = !1;
function m(e) {
    return e.some((e) => e.name === f);
}
function g() {
    let e = o.Z.getAccount(null, u.ABu.RIOT_GAMES),
        t = o.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS);
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
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: r } = e;
    if (!p && (!h || !r)) {
        _.stop();
        try {
            p = !0;
            let { next_update_timestamp: e } = await (0, l._7)({
                riotConnectionId: t,
                lolConnectionId: n,
                onlyUpdateIfStale: r
            });
            (p = !1), (h = !1);
            let i = new Date(1000 * e),
                o = new Date(),
                a = Math.max(0, i.getTime() - o.getTime());
            _.start(a, () =>
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
function b() {
    return Object.values(a.Z.getGuilds()).some(
        (e) =>
            e.hasFeature(u.oNc.LEADERBOARD_ENABLED) &&
            (0, c.NM)({
                guildId: e.id,
                location: 'LeagueOfLegendsLifecycleManager.handleDependantStoreChanges',
                autoTrackExposure: !1
            })
    );
}
function y(e) {
    s.default.track(u.rMx.LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING, { reason: e });
}
class v extends i.Z {
    handleRunningGameChange(e) {
        let { removed: t } = e;
        if (b() && m(t)) {
            let e = g();
            if ('string' == typeof e) return void y(e);
            E({
                riotConnectionId: e.riotConnection.id,
                lolConnectionId: e.lolConnection.id
            });
        }
    }
    handleDependantStoreChanges() {
        let e = g(),
            t = 'string' != typeof e,
            n = b() && t;
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
        super(...e), d(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange }), d(this, 'stores', new Map().set(a.Z, this.handleDependantStoreChanges).set(o.Z, this.handleDependantStoreChanges));
    }
}
let O = new v();
