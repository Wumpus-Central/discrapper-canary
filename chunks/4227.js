let r, i, a;
n.d(t, {
    A: () => v,
}),
    n(896048);
var s,
    o = n(735438),
    l = n(311907),
    c = n(73153);

function u(e, t, n) {
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
let d = new Map(),
    f = d,
    p = !1,
    _ = !1,
    h = (e) => {
        (p = !0), (i = void 0);
    },
    m = (e) => {
        let { error: t } = e;
        (f = d), (p = !1), (i = t), (_ = !0);
    },
    g = (e) => {
        0 === e.purchases.length
            ? (f = d)
            : (0, o.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (_ = !0),
            (p = !1),
            (i = void 0);
    },
    E = (e) => {
        (r = e.skuId), (a = void 0);
    },
    b = (e) => {
        null == e.purchases || 0 === e.purchases.length
            ? (f = d)
            : (0, o.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))),
            (r = void 0),
            (a = void 0);
    },
    y = (e) => {
        let { error: t, skuId: n } = e;
        (r = n), (a = t);
    },
    O = (e) => {
        (f = d), (p = !1), (r = void 0), (i = void 0), (a = void 0), (_ = !1);
    };
class A extends (s = l.Ay.Store) {
    get isFetching() {
        return p;
    }
    get isClaiming() {
        return r;
    }
    get purchases() {
        return f;
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
        return null != e ? f.get(e) : void 0;
    }
    getPurchases(e) {
        return e.map((e) => f.get(e)).filter((e) => null != e);
    }
}
u(A, "displayName", "CollectiblesPurchaseStore");
let v = new A(c.h, {
    COLLECTIBLES_PURCHASES_FETCH: h,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: m,
    COLLECTIBLES_CLAIM: E,
    COLLECTIBLES_CLAIM_SUCCESS: b,
    COLLECTIBLES_CLAIM_FAILURE: y,
    LOGOUT: O,
});
