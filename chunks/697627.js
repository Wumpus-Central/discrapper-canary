n.d(t, { A: () => c, e: () => o });
var i,
    l = n(17928),
    r = n(228366);
let s = new Map(),
    a = new Map();
var o =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class E extends l.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return a.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return s.get(e)?.get(t);
    }
}
let c = new E(r.h, {
    CONNECTION_OPEN: function () {
        s.clear(), a.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        a.has(t) || a.set(t, new Map()), a.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        a.has(t) || a.set(t, new Map()), a.get(t).set(n, 2), s.has(t) || s.set(t, new Map()), s.get(t).set(n, i);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        a.has(t) || a.set(t, new Map()), a.get(t).set(n, 2);
    },
});
