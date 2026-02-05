"use strict";
let r, i, a;
n.d(t, { A: () => T });
var s = n(735438),
    o = n(311907),
    l = n(73153);
let u = new Map(),
    c = u,
    d = !1,
    _ = !1,
    f = (e) => {
        (d = !0), (i = void 0);
    },
    p = (e) => {
        let { error: t } = e;
        (c = u), (d = !1), (i = t), (_ = !0);
    },
    h = (e) => {
        0 === e.purchases.length
            ? (c = u)
            : (0, s.isEqual)([...c.values()], e.purchases) || (c = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (_ = !0),
            (d = !1),
            (i = void 0);
    },
    m = (e) => {
        (r = e.skuId), (a = void 0);
    },
    g = (e) => {
        null == e.purchases || 0 === e.purchases.length
            ? (c = u)
            : (0, s.isEqual)([...c.values()], e.purchases) || (c = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (r = void 0),
            (a = void 0);
    },
    E = (e) => {
        let { error: t, skuId: n } = e;
        (r = n), (a = t);
    },
    A = (e) => {
        (c = u), (d = !1), (r = void 0), (i = void 0), (a = void 0), (_ = !1);
    };
class I extends o.Ay.Store {
    static displayName = "CollectiblesPurchaseStore";
    get isFetching() {
        return d;
    }
    get isClaiming() {
        return r;
    }
    get purchases() {
        return c;
    }
    get fetchError() {
        return i;
    }
    get claimError() {
        return a;
    }
    get hasPreviouslyFetched() {
        return _;
    }
    getPurchase(e) {
        return null != e ? c.get(e) : void 0;
    }
    getPurchases(e) {
        return e.map((e) => c.get(e)).filter((e) => null != e);
    }
}
let T = new I(l.h, {
    COLLECTIBLES_PURCHASES_FETCH: f,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: h,
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: p,
    COLLECTIBLES_CLAIM: m,
    COLLECTIBLES_CLAIM_SUCCESS: g,
    COLLECTIBLES_CLAIM_FAILURE: E,
    LOGOUT: A,
});
