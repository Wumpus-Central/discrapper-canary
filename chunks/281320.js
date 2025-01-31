n.d(t, {
    M: () => c,
    Z: () => g
}),
    n(47120);
var i,
    l,
    r,
    s,
    a = n(442837),
    o = n(570140);
let d = new Map(),
    u = new Map();
var c = (((l = {})[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED'), l);
class h extends (i = a.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, i;
        return null !== (i = null === (n = u.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null === (n = d.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(s = 'CreatorMonetizationStore'),
    (r = 'displayName') in h
        ? Object.defineProperty(h, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[r] = s);
let g = new h(o.Z, {
    CONNECTION_OPEN: function () {
        d.clear(), u.clear();
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
        let { guildId: t, priceTierType: n } = e;
        u.has(t) || u.set(t, new Map()), u.get(t).set(n, 1);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
        let { guildId: t, priceTierType: n, priceTiers: i } = e;
        u.has(t) || u.set(t, new Map()), u.get(t).set(n, 2), d.has(t) || d.set(t, new Map()), d.get(t).set(n, i);
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
        let { guildId: t, priceTierType: n } = e;
        u.has(t) || u.set(t, new Map()), u.get(t).set(n, 2);
    }
});
