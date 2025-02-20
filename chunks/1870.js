let r, i, o;
n.d(t, { Z: () => S }), n(47120);
var a,
    s = n(392711),
    l = n(442837),
    c = n(570140);
function u(e, t, n) {
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
        0 === e.purchases.length ? (f = d) : (0, s.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (_ = !0), (p = !1), (i = void 0);
    },
    E = (e) => {
        (r = e.skuId), (o = void 0);
    },
    v = (e) => {
        null == e.purchases || 0 === e.purchases.length ? (f = d) : (0, s.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (r = void 0), (o = void 0);
    },
    b = (e) => {
        let { error: t, skuId: n } = e;
        (r = n), (o = t);
    },
    y = (e) => {
        (f = d), (p = !1), (r = void 0), (i = void 0), (o = void 0), (_ = !1);
    };
class O extends (a = l.ZP.Store) {
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
        return o;
    }
    get hasPreviouslyFetched() {
        return _;
    }
    getPurchase(e) {
        return null != e ? f.get(e) : void 0;
    }
}
u(O, 'displayName', 'CollectiblesPurchaseStore');
let S = new O(c.Z, {
    COLLECTIBLES_PURCHASES_FETCH: h,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: m,
    COLLECTIBLES_CLAIM: E,
    COLLECTIBLES_CLAIM_SUCCESS: v,
    COLLECTIBLES_CLAIM_FAILURE: b,
    LOGOUT: y
});
