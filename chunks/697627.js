"use strict";
n.d(t, { A: () => c, e: () => l });
var i,
    r = n(17928),
    s = n(228366);
let a = new Map(),
    o = new Map();
var l =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class u extends r.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return o.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return a.get(e)?.get(t);
    }
}
let c = new u(s.h, {
    CONNECTION_OPEN: function () {
        a.clear(), o.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        o.has(t) || o.set(t, new Map()), o.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        o.has(t) || o.set(t, new Map()), o.get(t).set(n, 2), a.has(t) || a.set(t, new Map()), a.get(t).set(n, i);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        o.has(t) || o.set(t, new Map()), o.get(t).set(n, 2);
    },
});
