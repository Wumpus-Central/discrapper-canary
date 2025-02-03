let i, r, a;
n.d(t, { Z: () => T }), n(47120);
var s,
    o = n(392711),
    l = n(442837),
    u = n(570140);
function c(e, t, n) {
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
let d = new Map(),
    f = d,
    _ = !1,
    p = !1,
    h = (e) => {
        (_ = !0), (r = void 0);
    },
    m = (e) => {
        let { error: t } = e;
        (f = d), (_ = !1), (r = t), (p = !0);
    },
    g = (e) => {
        0 === e.purchases.length ? (f = d) : (0, o.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (p = !0), (_ = !1), (r = void 0);
    },
    E = (e) => {
        (i = e.skuId), (a = void 0);
    },
    v = (e) => {
        null == e.purchases || 0 === e.purchases.length ? (f = d) : (0, o.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (i = void 0), (a = void 0);
    },
    y = (e) => {
        let { error: t, skuId: n } = e;
        (i = n), (a = t);
    },
    I = (e) => {
        (f = d), (_ = !1), (i = void 0), (r = void 0), (a = void 0), (p = !1);
    };
class b extends (s = l.ZP.Store) {
    get isFetching() {
        return _;
    }
    get isClaiming() {
        return i;
    }
    get purchases() {
        return f;
    }
    get fetchError() {
        return r;
    }
    get claimError() {
        return a;
    }
    get hasPreviouslyFetched() {
        return p;
    }
    getPurchase(e) {
        return null != e ? f.get(e) : void 0;
    }
}
c(b, 'displayName', 'CollectiblesPurchaseStore');
let T = new b(u.Z, {
    COLLECTIBLES_PURCHASES_FETCH: h,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: m,
    COLLECTIBLES_CLAIM: E,
    COLLECTIBLES_CLAIM_SUCCESS: v,
    COLLECTIBLES_CLAIM_FAILURE: y,
    LOGOUT: I
});
