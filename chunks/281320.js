(n.d(t, {
    M: () => d,
    Z: () => m
}),
    n(388685));
var r,
    i,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = new Map(),
    u = new Map();
var d = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), i);
class p extends (r = o.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, r;
        return null != (r = null == (n = u.get(e)) ? void 0 : n.get(t)) ? r : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null == (n = c.get(e)) ? void 0 : n.get(t);
    }
}
((a = 'CreatorMonetizationStore'),
    (l = 'displayName') in p
        ? Object.defineProperty(p, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[l] = a));
let m = new p(s.Z, {
    CONNECTION_OPEN: function () {
        (c.clear(), u.clear());
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (u.has(t) || u.set(t, new Map()), u.get(t).set(n, 1));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: r } = e;
        (u.has(t) || u.set(t, new Map()), u.get(t).set(n, 2), c.has(t) || c.set(t, new Map()), c.get(t).set(n, r));
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        (u.has(t) || u.set(t, new Map()), u.get(t).set(n, 2));
    }
});
