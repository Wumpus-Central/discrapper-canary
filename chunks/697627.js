var i,
    s = n(855986),
    a = n(73153);
let r = new Map(),
    l = new Map();
var o =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class u extends s.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return l.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return r.get(e)?.get(t);
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        (r.clear(), l.clear());
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (l.has(t) || l.set(t, new Map()), l.get(t).set(n, 1));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        (l.has(t) || l.set(t, new Map()), l.get(t).set(n, 2), r.has(t) || r.set(t, new Map()), r.get(t).set(n, i));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (l.has(t) || l.set(t, new Map()), l.get(t).set(n, 2));
    },
});
n.d(t, {}, { A: c, e: o });
