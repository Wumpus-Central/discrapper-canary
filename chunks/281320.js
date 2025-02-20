n.d(t, {
    M: () => c,
    Z: () => f
}),
    n(47120);
var i,
    r,
    l,
    o,
    s = n(442837),
    a = n(570140);
let u = new Map(),
    d = new Map();
var c = (((r = {})[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), r);
class h extends (i = s.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, i;
        return null !== (i = null === (n = d.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null === (n = u.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(o = 'CreatorMonetizationStore'),
    (l = 'displayName') in h
        ? Object.defineProperty(h, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[l] = o);
let f = new h(a.Z, {
    CONNECTION_OPEN: function () {
        u.clear(), d.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        d.has(t) || d.set(t, new Map()), d.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        d.has(t) || d.set(t, new Map()), d.get(t).set(n, 2), u.has(t) || u.set(t, new Map()), u.get(t).set(n, i);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        d.has(t) || d.set(t, new Map()), d.get(t).set(n, 2);
    }
});
