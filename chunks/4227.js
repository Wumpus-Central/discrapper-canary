let i, r, a;
n.d(t, { A: () => A });
var s = n(435558),
    l = n(17928),
    o = n(228366);
let d = new Map(),
    c = d,
    u = !1,
    _ = !1;
class E extends l.Ay.Store {
    static displayName = "CollectiblesPurchaseStore";
    get isFetching() {
        return u;
    }
    get isClaiming() {
        return i;
    }
    get purchases() {
        return c;
    }
    get fetchError() {
        return r;
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
let A = new E(o.h, {
    COLLECTIBLES_PURCHASES_FETCH: function (e) {
        (u = !0), (r = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: function (e) {
        0 === e.purchases.length
            ? (c = d)
            : (0, s.isEqual)([...c.values()], e.purchases) || (c = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (_ = !0),
            (u = !1),
            (r = void 0);
    },
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (c = d), (u = !1), (r = t), (_ = !0);
    },
    COLLECTIBLES_CLAIM: function (e) {
        (i = e.skuId), (a = void 0);
    },
    COLLECTIBLES_CLAIM_SUCCESS: function (e) {
        null == e.purchases || 0 === e.purchases.length
            ? (c = d)
            : (0, s.isEqual)([...c.values()], e.purchases) || (c = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (i = void 0),
            (a = void 0);
    },
    COLLECTIBLES_CLAIM_FAILURE: function (e) {
        let { error: t, skuId: n } = e;
        (i = n), (a = t);
    },
    LOGOUT: function (e) {
        (c = d), (u = !1), (i = void 0), (r = void 0), (a = void 0), (_ = !1);
    },
});
