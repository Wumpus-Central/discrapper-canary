n.d(t, {
    A: () => p,
    e: () => u,
}),
    n(896048);
var r,
    i,
    l,
    a = n(311907),
    s = n(73153);
let o = new Map(),
    c = new Map();
var u =
    (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    i);
class d extends (r = a.Ay.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, r;
        return null != (n = null == (r = c.get(e)) ? void 0 : r.get(t)) ? n : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null == (n = o.get(e)) ? void 0 : n.get(t);
    }
}
(l = "displayName") in d
    ? Object.defineProperty(d, l, {
          value: "CreatorMonetizationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[l] = "CreatorMonetizationStore");
let p = new d(s.h, {
    CONNECTION_OPEN: function () {
        o.clear(), c.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        c.has(t) || c.set(t, new Map()), c.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: r } = e;
        c.has(t) || c.set(t, new Map()), c.get(t).set(n, 2), o.has(t) || o.set(t, new Map()), o.get(t).set(n, r);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        c.has(t) || c.set(t, new Map()), c.get(t).set(n, 2);
    },
});
