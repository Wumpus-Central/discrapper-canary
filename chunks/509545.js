n.d(t, { Z: () => P }), n(388685), n(642613), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(301766),
    s = n(251625),
    l = n(709054),
    c = n(981631),
    u = n(474936);
function d(e, t, n) {
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
let f = {},
    p = {},
    _ = new Set(),
    m = new Set(),
    h = {},
    g = {};
function E(e) {
    let t = e.skuId;
    f[e.id] = e;
    let n = e.prices[c.tuJ.DEFAULT];
    if (null != n) {
        var r;
        let t = new Set(Object.keys(n.paymentSourcePrices));
        h[e.id] = t;
        let i = Array.from(null != (r = g[e.skuId]) ? r : new Set());
        g[e.skuId] = new Set([...i, ...Array.from(t)]);
    }
    let i = p[t];
    null != i ? i.add(e.id) : (p[t] = new Set([e.id]));
}
function b() {
    [u.GP[u.Xh.NONE_MONTH], u.GP[u.Xh.NONE_YEAR], u.GP[u.Xh.NONE_3_MONTH], u.GP[u.Xh.NONE_6_MONTH]].forEach((e) =>
        E(
            o.ZP.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: c.pKx.USD,
                price: 0,
                price_tier: 0,
            }),
        ),
    );
}
function y(e) {
    E(o.ZP.createFromServer(e));
}
function O(e) {
    let { skuId: t } = e;
    _.add(t);
}
function v(e) {
    let { skuId: t, subscriptionPlans: n } = e;
    (p[t] = new Set()), (g[t] = new Set()), n.forEach(y), _.delete(t), m.delete(t);
}
function S(e) {
    let { giftCode: t } = e;
    null != t.subscription_plan && y(t.subscription_plan);
}
function I(e) {
    let { skuId: t } = e;
    _.delete(t), m.delete(t);
}
function T(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.subscription_plan && y(e.subscription_plan);
}
function C() {
    (0, s.Ti)(f), (0, s.Ti)(p), _.clear(), m.clear(), (0, s.Ti)(h), (0, s.Ti)(g), b();
}
b();
let A = [u.rV.DAY, u.rV.MONTH, u.rV.YEAR];
class N extends (r = i.ZP.Store) {
    getPlanIdsForSkus(e) {
        let t = [];
        for (let r of e) {
            var n;
            let e = Array.from(null != (n = p[r]) ? n : new Set());
            e.sort((e, t) => {
                let n = f[e],
                    r = f[t];
                return A.indexOf(n.interval) - A.indexOf(r.interval) || n.intervalCount - r.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return l.default.keys(p);
    }
    getForSKU(e) {
        var t;
        return Array.from(null != (t = p[e]) ? t : []).map((e) => f[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return f[e];
    }
    isFetchingForSKU(e) {
        return _.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!m.has(e) || (!_.has(e) && null != p[e]);
    }
    isLoadedForSKUs(e) {
        return e.every((e) => this.isLoadedForSKU(e));
    }
    isFetchingForPremiumSKUs() {
        return u.YQ.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForPremiumSKUs() {
        return u.YQ.every((e) => this.isLoadedForSKU(e));
    }
    ignoreSKUFetch(e) {
        m.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return h.hasOwnProperty(e) ? h[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(h).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return u.Si.NONE === t || (null != g[t] && g[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
d(N, "displayName", "SubscriptionPlanStore");
let P = new N(a.Z, {
    SUBSCRIPTION_PLANS_FETCH: O,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: v,
    SUBSCRIPTION_PLANS_FETCH_FAILURE: I,
    SUBSCRIPTION_PLANS_RESET: C,
    GIFT_CODE_RESOLVE_SUCCESS: S,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: T,
    LOGOUT: C,
});
