n.d(e, { A: () => d, e: () => o });
var i,
    a = n(17928),
    l = n(73153);
let s = new Map(),
    r = new Map();
var o =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class u extends a.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(t, e) {
        return r.get(t)?.get(e) ?? 0;
    }
    getPriceTiersForGuildAndType(t, e) {
        return s.get(t)?.get(e);
    }
}
let d = new u(l.h, {
    CONNECTION_OPEN: function () {
        (s.clear(), r.clear());
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
        let { guildId: e, priceTierType: n } = t;
        (r.has(e) || r.set(e, new Map()), r.get(e).set(n, 1));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
        let { guildId: e, priceTierType: n, priceTiers: i } = t;
        (r.has(e) || r.set(e, new Map()), r.get(e).set(n, 2), s.has(e) || s.set(e, new Map()), s.get(e).set(n, i));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
        let { guildId: e, priceTierType: n } = t;
        (r.has(e) || r.set(e, new Map()), r.get(e).set(n, 2));
    },
});
