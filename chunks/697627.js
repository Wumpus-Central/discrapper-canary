l.d(t, { A: () => d, e: () => o });
var a,
    s = l(17928),
    i = l(228366);
let n = new Map(),
    r = new Map();
var o =
    (((a = {})[(a.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (a[(a.FETCHING = 1)] = "FETCHING"),
    (a[(a.FETCHED = 2)] = "FETCHED"),
    a);
class c extends s.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return r.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return n.get(e)?.get(t);
    }
}
let d = new c(i.h, {
    CONNECTION_OPEN: function () {
        n.clear(), r.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: l } = e;
        r.has(t) || r.set(t, new Map()), r.get(t).set(l, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: l, priceTiers: a } = e;
        r.has(t) || r.set(t, new Map()), r.get(t).set(l, 2), n.has(t) || n.set(t, new Map()), n.get(t).set(l, a);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: l } = e;
        r.has(t) || r.set(t, new Map()), r.get(t).set(l, 2);
    },
});
