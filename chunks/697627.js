n.d(e, { A: () => c, e: () => l });
var s,
    i = n(17928),
    a = n(228366);
let o = new Map(),
    r = new Map();
var l =
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
        return o.get(t)?.get(e);
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        o.clear(), r.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
        let { guildId: e, priceTierType: n } = t;
        r.has(e) || r.set(e, new Map()), r.get(e).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
        let { guildId: e, priceTierType: n, priceTiers: s } = t;
        r.has(e) || r.set(e, new Map()), r.get(e).set(n, 2), o.has(e) || o.set(e, new Map()), o.get(e).set(n, s);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
        let { guildId: e, priceTierType: n } = t;
        r.has(e) || r.set(e, new Map()), r.get(e).set(n, 2);
    },
});
