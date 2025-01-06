n.d(e, {
    M: function () {
        return i;
    }
}),
    n(47120);
var i,
    r,
    l,
    o,
    u,
    a,
    s = n(442837),
    c = n(570140);
let d = new Map(),
    f = new Map();
((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED');
class _ extends (r = s.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(t, e) {
        var n, i;
        return null !== (i = null === (n = f.get(t)) || void 0 === n ? void 0 : n.get(e)) && void 0 !== i ? i : 0;
    }
    getPriceTiersForGuildAndType(t, e) {
        var n;
        return null === (n = d.get(t)) || void 0 === n ? void 0 : n.get(e);
    }
}
(a = 'CreatorMonetizationStore'),
    (u = 'displayName') in (o = _)
        ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[u] = a),
    (e.Z = new _(c.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), f.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
            let { guildId: e, priceTierType: n } = t;
            !f.has(e) && f.set(e, new Map()), f.get(e).set(n, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
            let { guildId: e, priceTierType: n, priceTiers: i } = t;
            !f.has(e) && f.set(e, new Map()), f.get(e).set(n, 2), !d.has(e) && d.set(e, new Map()), d.get(e).set(n, i);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
            let { guildId: e, priceTierType: n } = t;
            !f.has(e) && f.set(e, new Map()), f.get(e).set(n, 2);
        }
    }));
