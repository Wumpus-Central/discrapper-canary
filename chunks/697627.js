n.d(t, {
    A: () => h,
    e: () => c,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = new Map(),
    l = new Map();
var c = (function (e) {
    return (
        (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        e
    );
})({});

function u() {
    o.clear(), l.clear();
}

function d(e) {
    let { guildId: t, priceTierType: n } = e;
    l.has(t) || l.set(t, new Map()), l.get(t).set(n, 1);
}

function f(e) {
    let { guildId: t, priceTierType: n, priceTiers: r } = e;
    l.has(t) || l.set(t, new Map()), l.get(t).set(n, 2), o.has(t) || o.set(t, new Map()), o.get(t).set(n, r);
}

function p(e) {
    let { guildId: t, priceTierType: n } = e;
    l.has(t) || l.set(t, new Map()), l.get(t).set(n, 2);
}
class _ extends (r = i.Ay.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, r;
        return null != (n = null == (r = l.get(e)) ? void 0 : r.get(t)) ? n : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null == (n = o.get(e)) ? void 0 : n.get(t);
    }
}
s(_, "displayName", "CreatorMonetizationStore");
let h = new _(a.h, {
    CONNECTION_OPEN: u,
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: d,
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: f,
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: p,
});
