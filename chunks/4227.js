"use strict";
let i, r, s;
n.d(t, { A: () => h });
var a = n(735438),
    o = n(17928),
    l = n(228366);
let d = new Map(),
    _ = d,
    u = !1,
    c = !1;
class E extends o.Ay.Store {
    static displayName = "CollectiblesPurchaseStore";
    get isFetching() {
        return u;
    }
    get isClaiming() {
        return i;
    }
    get purchases() {
        return _;
    }
    get fetchError() {
        return r;
    }
    get claimError() {
        return s;
    }
    get hasPreviouslyFetched() {
        return c;
    }
    getPurchase(e) {
        return null != e ? _.get(e) : void 0;
    }
    getPurchases(e) {
        return e.map((e) => _.get(e)).filter((e) => null != e);
    }
}
let h = new E(l.h, {
    COLLECTIBLES_PURCHASES_FETCH: (e) => {
        (u = !0), (r = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: (e) => {
        0 === e.purchases.length
            ? (_ = d)
            : (0, a.isEqual)([..._.values()], e.purchases) || (_ = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (c = !0),
            (u = !1),
            (r = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (_ = d), (u = !1), (r = t), (c = !0);
    },
    COLLECTIBLES_CLAIM: (e) => {
        (i = e.skuId), (s = void 0);
    },
    COLLECTIBLES_CLAIM_SUCCESS: (e) => {
        null == e.purchases || 0 === e.purchases.length
            ? (_ = d)
            : (0, a.isEqual)([..._.values()], e.purchases) || (_ = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (i = void 0),
            (s = void 0);
    },
    COLLECTIBLES_CLAIM_FAILURE: (e) => {
        let { error: t, skuId: n } = e;
        (i = n), (s = t);
    },
    LOGOUT: (e) => {
        (_ = d), (u = !1), (i = void 0), (r = void 0), (s = void 0), (c = !1);
    },
});
