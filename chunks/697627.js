n.d(t, { A: () => _, e: () => d });
var i,
    r = n(17928),
    s = n(228366);
let l = new Map(),
    a = new Map();
var d =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class o extends r.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return a.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return l.get(e)?.get(t);
    }
}
let _ = new o(s.h, {
    CONNECTION_OPEN: function () {
        l.clear(), a.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        a.has(t) || a.set(t, new Map()), a.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        a.has(t) || a.set(t, new Map()), a.get(t).set(n, 2), l.has(t) || l.set(t, new Map()), l.get(t).set(n, i);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        a.has(t) || a.set(t, new Map()), a.get(t).set(n, 2);
    },
});
