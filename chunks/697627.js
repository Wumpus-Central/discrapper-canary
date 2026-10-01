n.d(t, { A: () => c, e: () => r });
var s,
    i = n(17928),
    a = n(73153);
let l = new Map(),
    o = new Map();
var r =
    (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (s[(s.FETCHING = 1)] = "FETCHING"),
    (s[(s.FETCHED = 2)] = "FETCHED"),
    s);
class u extends i.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return o.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return l.get(e)?.get(t);
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        (l.clear(), o.clear());
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (o.has(t) || o.set(t, new Map()), o.get(t).set(n, 1));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: s } = e;
        (o.has(t) || o.set(t, new Map()), o.get(t).set(n, 2), l.has(t) || l.set(t, new Map()), l.get(t).set(n, s));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (o.has(t) || o.set(t, new Map()), o.get(t).set(n, 2));
    },
});
