n.d(t, { A: () => c, e: () => o });
var i,
    l = n(311907),
    a = n(73153);
let r = new Map(),
    s = new Map();
var o =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class d extends l.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return s.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return r.get(e)?.get(t);
    }
}
let c = new d(a.h, {
    CONNECTION_OPEN: function () {
        r.clear(), s.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        s.has(t) || s.set(t, new Map()), s.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        s.has(t) || s.set(t, new Map()), s.get(t).set(n, 2), r.has(t) || r.set(t, new Map()), r.get(t).set(n, i);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        s.has(t) || s.set(t, new Map()), s.get(t).set(n, 2);
    },
});
