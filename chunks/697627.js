"use strict";
n.d(t, { A: () => c, e: () => o });
var i,
    r = n(17928),
    a = n(228366);
let s = new Map(),
    l = new Map();
var o =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class d extends r.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return l.get(e)?.get(t) ?? 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        return s.get(e)?.get(t);
    }
}
let c = new d(a.h, {
    CONNECTION_OPEN: function () {
        s.clear(), l.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        l.has(t) || l.set(t, new Map()), l.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        l.has(t) || l.set(t, new Map()), l.get(t).set(n, 2), s.has(t) || s.set(t, new Map()), s.get(t).set(n, i);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        l.has(t) || l.set(t, new Map()), l.get(t).set(n, 2);
    },
});
