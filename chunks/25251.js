n.d(t, { Z: () => w });
var r,
    i = n(392711),
    a = n(442837),
    o = n(570140),
    s = n(212161),
    l = n(70956);
function c(e, t, n) {
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
let u = {},
    d = l.Z.Millis.MINUTE,
    f = l.Z.Millis.HOUR,
    _ = !1,
    p = 0,
    h = 0,
    m = (e) => Math.min(d * 2 ** e, f),
    g = (e, t) => !(0, i.isEqual)(u[e], t) && ((u[e] = t), !0),
    E = (e) => {
        let t = !1;
        return (
            e.items.forEach((n) => {
                if (!(0, s.H)(n)) return;
                let r = {
                    skuId: e.skuId,
                    config: n,
                };
                g(e.skuId, r) && (t = !0);
            }),
            t
        );
    },
    b = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                e.products.forEach((e) => {
                    E(e) && (t = !0);
                });
            }),
            t
        );
    },
    y = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                E(e) && (t = !0);
            }),
            t
        );
    },
    O = (e) => {
        _ = !0;
    },
    v = (e) => {
        let { configs: t } = e;
        t.forEach((e) => {
            g(e.skuId, {
                skuId: e.skuId,
                config: e,
            });
        }),
            (p = 1 / 0),
            (h = 0),
            (_ = !1);
    },
    I = (e) => {
        (p = Date.now() + m(h)), (h += 1), (_ = !1);
    },
    T = (e) => {
        let { product: t } = e;
        return E(t);
    },
    S = (e) => {
        let { categories: t } = e;
        return b(t);
    },
    A = (e) => {
        let { categories: t } = e;
        return b(t.categories);
    },
    C = (e) => {
        let { shopHome: t } = e;
        return b(t.categories);
    },
    N = (e) => {
        let { purchases: t } = e;
        return y(t);
    },
    R = (e) => {
        let { purchases: t } = e;
        return null != t && y(t);
    },
    P = (e) => {
        (u = {}), (_ = !1), (p = 0), (h = 0);
    };
class D extends (r = a.ZP.Store) {
    getAllProfileEffects() {
        return Object.values(u);
    }
    getProfileEffect(e) {
        return null != e ? u[e] : void 0;
    }
    get isFetchingAll() {
        return _;
    }
    canFetchAll() {
        return Date.now() >= p;
    }
}
c(D, "displayName", "ProfileEffectStore");
let w = new D(o.Z, {
    PROFILE_EFFECTS_FETCH_ALL: O,
    PROFILE_EFFECTS_FETCH_ALL_SUCCESS: v,
    PROFILE_EFFECTS_FETCH_ALL_FAILURE: I,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: T,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: S,
    COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS: A,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: C,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: N,
    COLLECTIBLES_CLAIM_SUCCESS: R,
    LOGOUT: P,
});
