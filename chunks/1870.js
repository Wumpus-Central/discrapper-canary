let i, a, o;
var s,
    l = r(47120);
var u = r(392711);
var c = r(442837),
    d = r(570140);
function f(e, n, r) {
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
let p = new Map(),
    h = p,
    _ = !1;
let m = !1,
    g = (e) => {
        (_ = !0), (a = void 0);
    },
    E = (e) => {
        let { error: n } = e;
        (h = p), (_ = !1), (a = n), (m = !0);
    },
    v = (e) => {
        0 === e.purchases.length ? (h = p) : !(0, u.isEqual)([...h.values()], e.purchases) && (h = new Map(e.purchases.map((e) => [e.skuId, e]))), (m = !0), (_ = !1), (a = void 0);
    },
    y = (e) => {
        (i = e.skuId), (o = void 0);
    },
    b = (e) => {
        null == e.purchases || 0 === e.purchases.length ? (h = p) : !(0, u.isEqual)([...h.values()], e.purchases) && (h = new Map(e.purchases.map((e) => [e.skuId, e]))), (i = void 0), (o = void 0);
    },
    I = (e) => {
        let { error: n, skuId: r } = e;
        (i = r), (o = n);
    },
    T = (e) => {
        (h = p), (_ = !1), (i = void 0), (a = void 0), (o = void 0);
    };
class S extends (s = c.ZP.Store) {
    get isFetching() {
        return _;
    }
    get isClaiming() {
        return i;
    }
    get purchases() {
        return h;
    }
    get fetchError() {
        return a;
    }
    get claimError() {
        return o;
    }
    get hasPreviouslyFetched() {
        return m;
    }
    getPurchase(e) {
        return null != e ? h.get(e) : void 0;
    }
}
f(S, 'displayName', 'CollectiblesPurchaseStore'),
    (n.Z = new S(d.Z, {
        COLLECTIBLES_PURCHASES_FETCH: g,
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: v,
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: E,
        COLLECTIBLES_CLAIM: y,
        COLLECTIBLES_CLAIM_SUCCESS: b,
        COLLECTIBLES_CLAIM_FAILURE: I,
        LOGOUT: T
    }));
