let r, i, o;
n.d(t, { Z: () => I }), n(47120);
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
    _ = !1,
    p = !1,
    h = (e) => {
        (_ = !0), (i = void 0);
    },
    m = (e) => {
        let { error: t } = e;
        (f = d), (_ = !1), (i = t), (p = !0);
    },
    g = (e) => {
        0 === e.purchases.length ? (f = d) : (0, s.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (p = !0), (_ = !1), (i = void 0);
    },
    E = (e) => {
        (r = e.skuId), (o = void 0);
    },
    b = (e) => {
        null == e.purchases || 0 === e.purchases.length ? (f = d) : (0, s.isEqual)([...f.values()], e.purchases) || (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (r = void 0), (o = void 0);
    },
    y = (e) => {
        let { error: t, skuId: n } = e;
        (r = n), (o = t);
    },
    v = (e) => {
        (f = d), (_ = !1), (r = void 0), (i = void 0), (o = void 0), (p = !1);
    };
class O extends (a = l.ZP.Store) {
    get isFetching() {
        return _;
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
        return p;
    }
    getPurchase(e) {
        return null != e ? f.get(e) : void 0;
    }
}
u(O, 'displayName', 'CollectiblesPurchaseStore');
let I = new O(c.Z, {
    COLLECTIBLES_PURCHASES_FETCH: h,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
    COLLECTIBLES_PURCHASES_FETCH_FAILURE: m,
    COLLECTIBLES_CLAIM: E,
    COLLECTIBLES_CLAIM_SUCCESS: b,
    COLLECTIBLES_CLAIM_FAILURE: y,
    LOGOUT: v
});
