n.d(t, { A: () => E });
var i = n(311907),
    r = n(73153),
    a = n(927813),
    l = n(48128);
let s = a.A.Millis.DAY,
    o = 5 * a.A.Millis.MINUTE,
    d = {},
    u = !1,
    c = null,
    A = null;
function h() {
    !(u || (null != A && Date.now() < A + o)) && (null == c || Date.now() >= c + s) && l.A.fetch();
}
class _ extends i.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getUnclaimedGameIdsForGuild(e) {
        return h(), d[e] ?? [];
    }
    hasUnclaimedGames(e) {
        h();
        let t = d[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        return h(), Object.keys(d).filter((e) => d[e].length > 0);
    }
    get fetching() {
        return u;
    }
    get lastFetchedAt() {
        return c;
    }
}
let E = new _(r.h, {
    LOGOUT: function () {
        (d = {}), (u = !1), (c = null), (A = null);
    },
    UNCLAIMED_GAMES_FETCH: function () {
        u = !0;
    },
    UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
        let { guildIdToGameIds: t } = e;
        (d = t), (u = !1), (c = Date.now()), (A = null);
    },
    UNCLAIMED_GAMES_FETCH_FAIL: function () {
        (u = !1), (A = Date.now());
    },
});
