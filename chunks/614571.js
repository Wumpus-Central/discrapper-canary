var i = r(47120);
var a = r(846519),
    o = r(147913),
    s = r(553795),
    l = r(430824),
    u = r(626135),
    c = r(425128),
    d = r(276344),
    f = r(981631);
function p(e, n, r) {
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
let h = 'League of Legends',
    _ = new a.V7(),
    m = !1,
    g = !1;
function E(e) {
    return e.some((e) => e.name === h);
}
function v() {
    let e = s.Z.getAccount(null, f.ABu.RIOT_GAMES),
        n = s.Z.getAccount(null, f.ABu.LEAGUE_OF_LEGENDS);
    if (null == e && null == n) return 'missing_connections';
    if (null == e) return 'missing_riot_connection';
    if (null == n) return 'missing_league_of_legends_connection';
    return {
        riotConnection: e,
        lolConnection: n
    };
}
async function y(e) {
    let { riotConnectionId: n, lolConnectionId: r, onlyUpdateIfStale: i } = e;
    if (!m && (!g || !i)) {
        _.stop();
        try {
            m = !0;
            let { next_update_timestamp: e } = await (0, c._7)({
                riotConnectionId: n,
                lolConnectionId: r,
                onlyUpdateIfStale: i
            });
            (m = !1), (g = !1);
            let a = new Date(1000 * e),
                o = new Date(),
                s = Math.max(0, a.getTime() - o.getTime());
            _.start(s, () =>
                (0, c._7)({
                    riotConnectionId: n,
                    lolConnectionId: r
                })
            );
        } catch (e) {
            (m = !1), (g = !0);
        }
    }
}
function b() {
    return Object.values(l.Z.getGuilds()).some(
        (e) =>
            e.hasFeature(f.oNc.LEADERBOARD_ENABLED) &&
            (0, d.NM)({
                guildId: e.id,
                location: 'LeagueOfLegendsLifecycleManager.handleDependantStoreChanges',
                autoTrackExposure: !1
            })
    );
}
function I(e) {
    u.default.track(f.rMx.LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING, { reason: e });
}
class T extends o.Z {
    handleRunningGameChange(e) {
        let { removed: n } = e;
        if (!!b()) {
            if (E(n)) {
                let e = v();
                if ('string' == typeof e) {
                    I(e);
                    return;
                }
                y({
                    riotConnectionId: e.riotConnection.id,
                    lolConnectionId: e.lolConnection.id
                });
            }
        }
    }
    handleDependantStoreChanges() {
        let e = v(),
            n = 'string' != typeof e,
            r = b() && n;
        _.isStarted() && !r
            ? _.stop()
            : !_.isStarted() &&
              r &&
              y({
                  riotConnectionId: e.riotConnection.id,
                  lolConnectionId: e.lolConnection.id,
                  onlyUpdateIfStale: !0
              });
    }
    constructor(...e) {
        super(...e), p(this, 'actions', { RUNNING_GAMES_CHANGE: this.handleRunningGameChange }), p(this, 'stores', new Map().set(l.Z, this.handleDependantStoreChanges).set(s.Z, this.handleDependantStoreChanges));
    }
}
n.Z = new T();
