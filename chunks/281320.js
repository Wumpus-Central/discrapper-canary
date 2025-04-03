n.d(t, {
    M: () => d,
    Z: () => f
}),
    n(47120);
var r,
    i,
    l,
    o,
    a = n(442837),
    u = n(570140);
let s = new Map(),
    c = new Map();
var d = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), i);
class p extends (r = a.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, r;
        return null != (r = null == (n = c.get(e)) ? void 0 : n.get(t)) ? r : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null == (n = s.get(e)) ? void 0 : n.get(t);
    }
}
(o = 'CreatorMonetizationStore'),
    (l = 'displayName') in p
        ? Object.defineProperty(p, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[l] = o);
let f = new p(u.Z, {
    CONNECTION_OPEN: function () {
        s.clear(), c.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        c.has(t) || c.set(t, new Map()), c.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: r } = e;
        c.has(t) || c.set(t, new Map()), c.get(t).set(n, 2), s.has(t) || s.set(t, new Map()), s.get(t).set(n, r);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        c.has(t) || c.set(t, new Map()), c.get(t).set(n, 2);
    }
});
