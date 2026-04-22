"use strict";
let r, i, s;
n.d(t, { A: () => E });
var a = n(735438),
    o = n(311907),
    l = n(73153);
let u = new Map(),
    d = u,
    c = !1,
    _ = !1;
class f extends o.Ay.Store {
    static displayName = "CollectiblesPurchaseStore";
    get isFetching() {
        return c;
    }
    get isClaiming() {
        return r;
    }
    get purchases() {
        return d;
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
        return null != e ? d.get(e) : void 0;
    }
    getPurchases(e) {
        return e.map((e) => d.get(e)).filter((e) => null != e);
    }
}
let E = new f(l.h, {
    COLLECTIBLES_PURCHASES_FETCH: (e) => {
        (c = !0), (i = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: (e) => {
        0 === e.purchases.length
            ? (d = u)
            : (0, a.isEqual)([...d.values()], e.purchases) || (d = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (_ = !0),
            (c = !1),
            (i = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (d = u), (c = !1), (i = t), (_ = !0);
    },
    COLLECTIBLES_CLAIM: (e) => {
        (r = e.skuId), (s = void 0);
    },
    COLLECTIBLES_CLAIM_SUCCESS: (e) => {
        null == e.purchases || 0 === e.purchases.length
            ? (d = u)
            : (0, a.isEqual)([...d.values()], e.purchases) || (d = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (r = void 0),
            (s = void 0);
    },
    COLLECTIBLES_CLAIM_FAILURE: (e) => {
        let { error: t, skuId: n } = e;
        (r = n), (s = t);
    },
    LOGOUT: (e) => {
        (d = u), (c = !1), (r = void 0), (i = void 0), (s = void 0), (_ = !1);
    },
});
