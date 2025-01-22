var i,
    a = r(47120);
var o = r(653041);
var s = r(442837),
    l = r(570140),
    u = r(301766),
    c = r(251625),
    d = r(709054),
    f = r(981631),
    p = r(474936);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = {},
    m = {},
    g = new Set(),
    E = new Set(),
    v = {},
    y = {};
function b(e) {
    let n = e.skuId;
    _[e.id] = e;
    let r = e.prices[f.tuJ.DEFAULT];
    if (null != r) {
        var i;
        let n = new Set(Object.keys(r.paymentSourcePrices));
        v[e.id] = n;
        let a = Array.from(null !== (i = y[e.skuId]) && void 0 !== i ? i : new Set());
        y[e.skuId] = new Set([...a, ...Array.from(n)]);
    }
    let a = m[n];
    null != a ? a.add(e.id) : (m[n] = new Set([e.id]));
}
function I() {
    [p.GP[p.Xh.NONE_MONTH], p.GP[p.Xh.NONE_YEAR], p.GP[p.Xh.NONE_3_MONTH], p.GP[p.Xh.NONE_6_MONTH]].forEach((e) =>
        b(
            u.ZP.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: f.pKx.USD,
                price: 0,
                price_tier: 0,
                discount_price: null
            })
        )
    );
}
function T(e) {
    b(u.ZP.createFromServer(e));
}
function S(e) {
    let { skuId: n } = e;
    g.add(n);
}
function A(e) {
    let { skuId: n, subscriptionPlans: r } = e;
    (m[n] = new Set()), (y[n] = new Set()), r.forEach(T), g.delete(n), E.delete(n);
}
function C(e) {
    let { giftCode: n } = e;
    null != n.subscription_plan && T(n.subscription_plan);
}
function N(e) {
    let { skuId: n } = e;
    g.delete(n), E.delete(n);
}
function R(e) {
    let { entitlements: n } = e;
    for (let e of n) null != e.subscription_plan && T(e.subscription_plan);
}
function O() {
    (0, c.Ti)(_), (0, c.Ti)(m), g.clear(), E.clear(), (0, c.Ti)(v), (0, c.Ti)(y), I();
}
I();
let D = [p.rV.DAY, p.rV.MONTH, p.rV.YEAR];
class x extends (i = s.ZP.Store) {
    getPlanIdsForSkus(e) {
        let n = [];
        for (let i of e) {
            var r;
            let e = Array.from(null !== (r = m[i]) && void 0 !== r ? r : new Set());
            e.sort((e, n) => {
                let r = _[e],
                    i = _[n];
                return D.indexOf(r.interval) - D.indexOf(i.interval) || r.intervalCount - i.intervalCount;
            }),
                n.push(...e);
        }
        return n;
    }
    getFetchedSKUIDs() {
        return d.default.keys(m);
    }
    getForSKU(e) {
        var n;
        return Array.from(null !== (n = m[e]) && void 0 !== n ? n : []).map((e) => _[e]);
    }
    getForSkuAndInterval(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === n && e.intervalCount === r);
    }
    get(e) {
        return _[e];
    }
    isFetchingForSKU(e) {
        return g.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!E.has(e) || (!g.has(e) && null != m[e]);
    }
    isLoadedForSKUs(e) {
        return e.every((e) => this.isLoadedForSKU(e));
    }
    isFetchingForPremiumSKUs() {
        return p.YQ.map((e) => this.isFetchingForSKU(e)).includes(!0);
    }
    isLoadedForPremiumSKUs() {
        return p.YQ.every((e) => this.isLoadedForSKU(e));
    }
    ignoreSKUFetch(e) {
        E.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return v.hasOwnProperty(e) ? v[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(v).forEach((n) => n.forEach((n) => e.add(n))), e;
    }
    hasPaymentSourceForSKUId(e, n) {
        return p.Si.NONE === n || (null != y[n] && y[n].has(e));
    }
    hasPaymentSourceForSKUIds(e, n) {
        return n.every((n) => this.hasPaymentSourceForSKUId(e, n));
    }
}
h(x, 'displayName', 'SubscriptionPlanStore'),
    (n.Z = new x(l.Z, {
        SUBSCRIPTION_PLANS_FETCH: S,
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: A,
        SUBSCRIPTION_PLANS_FETCH_FAILURE: N,
        SUBSCRIPTION_PLANS_RESET: O,
        GIFT_CODE_RESOLVE_SUCCESS: C,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: R,
        LOGOUT: O
    }));
