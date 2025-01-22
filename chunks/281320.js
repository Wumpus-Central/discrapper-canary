n.d(t, {
    M: function () {
        return i;
    }
}),
    n(47120);
var i,
    r,
    l,
    o,
    s,
    a,
    u = n(442837),
    d = n(570140);
let c = new Map(),
    h = new Map();
((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED');
class f extends (r = u.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, i;
        return null !== (i = null === (n = h.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null === (n = c.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(a = 'CreatorMonetizationStore'),
    (s = 'displayName') in (o = f)
        ? Object.defineProperty(o, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[s] = a),
    (t.Z = new f(d.Z, {
        CONNECTION_OPEN: function () {
            c.clear(), h.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !h.has(t) && h.set(t, new Map()), h.get(t).set(n, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: t, priceTierType: n, priceTiers: i } = e;
            !h.has(t) && h.set(t, new Map()), h.get(t).set(n, 2), !c.has(t) && c.set(t, new Map()), c.get(t).set(n, i);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !h.has(t) && h.set(t, new Map()), h.get(t).set(n, 2);
        }
    }));
