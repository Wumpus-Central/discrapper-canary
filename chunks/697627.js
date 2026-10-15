n.d(e, { A: () => d, e: () => r });
var i,
    s = n(17928),
    a = n(73153);
let l = new Map(),
    o = new Map();
var r =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class u extends s.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(t, e) {
        return o.get(t)?.get(e) ?? 0;
    }
    getPriceTiersForGuildAndType(t, e) {
        return l.get(t)?.get(e);
    }
}
let d = new u(a.h, {
    CONNECTION_OPEN: function () {
        (l.clear(), o.clear());
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
        let { guildId: e, priceTierType: n } = t;
        (o.has(e) || o.set(e, new Map()), o.get(e).set(n, 1));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
        let { guildId: e, priceTierType: n, priceTiers: i } = t;
        (o.has(e) || o.set(e, new Map()), o.get(e).set(n, 2), l.has(e) || l.set(e, new Map()), l.get(e).set(n, i));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
        let { guildId: e, priceTierType: n } = t;
        (o.has(e) || o.set(e, new Map()), o.get(e).set(n, 2));
    },
});
