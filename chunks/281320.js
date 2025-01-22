e.d(n, {
    M: function () {
        return i;
    }
}),
    e(47120);
var i,
    r,
    l,
    u,
    o,
    a,
    s = e(442837),
    c = e(570140);
let d = new Map(),
    f = new Map();
((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED');
class _ extends (r = s.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(t, n) {
        var e, i;
        return null !== (i = null === (e = f.get(t)) || void 0 === e ? void 0 : e.get(n)) && void 0 !== i ? i : 0;
    }
    getPriceTiersForGuildAndType(t, n) {
        var e;
        return null === (e = d.get(t)) || void 0 === e ? void 0 : e.get(n);
    }
}
(a = 'CreatorMonetizationStore'),
    (o = 'displayName') in (u = _)
        ? Object.defineProperty(u, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[o] = a),
    (n.Z = new _(c.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), f.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
            let { guildId: n, priceTierType: e } = t;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(e, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
            let { guildId: n, priceTierType: e, priceTiers: i } = t;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(e, 2), !d.has(n) && d.set(n, new Map()), d.get(n).set(e, i);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
            let { guildId: n, priceTierType: e } = t;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(e, 2);
        }
    }));
