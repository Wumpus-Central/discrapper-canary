n.d(t, { A: () => c, e: () => u });
var s,
    i = n(17928),
    l = n(73153);
let a = new Map(),
    o = new Map();
var u =
    (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (s[(s.FETCHING = 1)] = "FETCHING"),
    (s[(s.FETCHED = 2)] = "FETCHED"),
    s);
class r extends i.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return o.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return a.get(e)?.get(t);
    }
}
let c = new r(l.h, {
    CONNECTION_OPEN: function () {
        (a.clear(), o.clear());
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (o.has(t) || o.set(t, new Map()), o.get(t).set(n, 1));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: s } = e;
        (o.has(t) || o.set(t, new Map()), o.get(t).set(n, 2), a.has(t) || a.set(t, new Map()), a.get(t).set(n, s));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (o.has(t) || o.set(t, new Map()), o.get(t).set(n, 2));
    },
});
