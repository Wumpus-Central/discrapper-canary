n.d(e, { A: () => c, e: () => o });
var s,
    i = n(17928),
    a = n(228366);
let l = new Map(),
    r = new Map();
var o =
    (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (s[(s.FETCHING = 1)] = "FETCHING"),
    (s[(s.FETCHED = 2)] = "FETCHED"),
    s);
class u extends i.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(t, e) {
        return r.get(t)?.get(e) ?? 0;
    }
    getPriceTiersForGuildAndType(t, e) {
        return l.get(t)?.get(e);
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        l.clear(), r.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
        let { guildId: e, priceTierType: n } = t;
        r.has(e) || r.set(e, new Map()), r.get(e).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
        let { guildId: e, priceTierType: n, priceTiers: s } = t;
        r.has(e) || r.set(e, new Map()), r.get(e).set(n, 2), l.has(e) || l.set(e, new Map()), l.get(e).set(n, s);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
        let { guildId: e, priceTierType: n } = t;
        r.has(e) || r.set(e, new Map()), r.get(e).set(n, 2);
    },
});
