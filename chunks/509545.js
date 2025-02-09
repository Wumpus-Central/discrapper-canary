n.d(t, { Z: () => O }), n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(301766),
    o = n(251625),
    l = n(709054),
    u = n(981631),
    c = n(474936);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = {},
    _ = {},
    p = new Set(),
    h = new Set(),
    m = {},
    g = {};
function E(e) {
    let t = e.skuId;
    f[e.id] = e;
    let n = e.prices[u.tuJ.DEFAULT];
    if (null != n) {
        var i;
        let t = new Set(Object.keys(n.paymentSourcePrices));
        m[e.id] = t;
        let r = Array.from(null !== (i = g[e.skuId]) && void 0 !== i ? i : new Set());
        g[e.skuId] = new Set([...r, ...Array.from(t)]);
    }
    let r = _[t];
    null != r ? r.add(e.id) : (_[t] = new Set([e.id]));
}
function v() {
    [c.GP[c.Xh.NONE_MONTH], c.GP[c.Xh.NONE_YEAR], c.GP[c.Xh.NONE_3_MONTH], c.GP[c.Xh.NONE_6_MONTH]].forEach((e) =>
        E(
            s.ZP.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: u.pKx.USD,
                price: 0,
                price_tier: 0,
                discount_price: null
            })
        )
    );
}
function y(e) {
    E(s.ZP.createFromServer(e));
}
function I(e) {
    let { skuId: t } = e;
    p.add(t);
}
function T(e) {
    let { skuId: t, subscriptionPlans: n } = e;
    (_[t] = new Set()), (g[t] = new Set()), n.forEach(y), p.delete(t), h.delete(t);
}
function b(e) {
    let { giftCode: t } = e;
    null != t.subscription_plan && y(t.subscription_plan);
}
function S(e) {
    let { skuId: t } = e;
    p.delete(t), h.delete(t);
}
function A(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.subscription_plan && y(e.subscription_plan);
}
function N() {
    (0, o.Ti)(f), (0, o.Ti)(_), p.clear(), h.clear(), (0, o.Ti)(m), (0, o.Ti)(g), v();
}
v();
let C = [c.rV.DAY, c.rV.MONTH, c.rV.YEAR];
class R extends (i = r.ZP.Store) {
    getPlanIdsForSkus(e) {
        let t = [];
        for (let i of e) {
            var n;
            let e = Array.from(null !== (n = _[i]) && void 0 !== n ? n : new Set());
            e.sort((e, t) => {
                let n = f[e],
                    i = f[t];
                return C.indexOf(n.interval) - C.indexOf(i.interval) || n.intervalCount - i.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return l.default.keys(_);
    }
    getForSKU(e) {
        var t;
        return Array.from(null !== (t = _[e]) && void 0 !== t ? t : []).map((e) => f[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return f[e];
    }
    isFetchingForSKU(e) {
        return p.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!h.has(e) || (!p.has(e) && null != _[e]);
    }
    isLoadedForSKUs(e) {
        return e.every((e) => this.isLoadedForSKU(e));
    }
    isFetchingForPremiumSKUs() {
        return c.YQ.map((e) => this.isFetchingForSKU(e)).includes(!0);
    }
    isLoadedForPremiumSKUs() {
        return c.YQ.every((e) => this.isLoadedForSKU(e));
    }
    ignoreSKUFetch(e) {
        h.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return m.hasOwnProperty(e) ? m[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(m).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return c.Si.NONE === t || (null != g[t] && g[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
d(R, 'displayName', 'SubscriptionPlanStore');
let O = new R(a.Z, {
    SUBSCRIPTION_PLANS_FETCH: I,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: T,
    SUBSCRIPTION_PLANS_FETCH_FAILURE: S,
    SUBSCRIPTION_PLANS_RESET: N,
    GIFT_CODE_RESOLVE_SUCCESS: b,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: A,
    LOGOUT: N
});
