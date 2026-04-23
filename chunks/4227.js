"use strict";
let r, i, s;
n.d(t, { A: () => p });
var a = n(735438),
    o = n(311907),
    l = n(73153);
let u = new Map(),
    c = u,
    d = !1,
    _ = !1;
class f extends o.Ay.Store {
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
        return s;
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
let p = new f(l.h, {
    COLLECTIBLES_PURCHASES_FETCH: (e) => {
        (d = !0), (i = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: (e) => {
        0 === e.purchases.length
            ? (c = u)
            : (0, a.isEqual)([...c.values()], e.purchases) || (c = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (_ = !0),
            (d = !1),
            (i = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (c = u), (d = !1), (i = t), (_ = !0);
    },
    COLLECTIBLES_CLAIM: (e) => {
        (r = e.skuId), (s = void 0);
    },
    COLLECTIBLES_CLAIM_SUCCESS: (e) => {
        null == e.purchases || 0 === e.purchases.length
            ? (c = u)
            : (0, a.isEqual)([...c.values()], e.purchases) || (c = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (r = void 0),
            (s = void 0);
    },
    COLLECTIBLES_CLAIM_FAILURE: (e) => {
        let { error: t, skuId: n } = e;
        (r = n), (s = t);
    },
    LOGOUT: (e) => {
        (c = u), (d = !1), (r = void 0), (i = void 0), (s = void 0), (_ = !1);
    },
});
