n.d(t, { Z: () => O });
var r,
    i = n(392711),
    a = n(442837),
    o = n(570140),
    s = n(212161);
function l(e, t, n) {
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
let c = {},
    u = (e, t) => !(0, i.isEqual)(c[e], t) && ((c[e] = t), !0),
    d = (e) => {
        let t = !1;
        return (
            e.items.forEach((n) => {
                if (!(0, s.H)(n)) return;
                let r = {
                    skuId: e.skuId,
                    config: n,
                };
                u(e.skuId, r) && (t = !0);
            }),
            t
        );
    },
    f = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                e.products.forEach((e) => {
                    d(e) && (t = !0);
                });
            }),
            t
        );
    },
    p = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                d(e) && (t = !0);
            }),
            t
        );
    },
    _ = (e) => {
        let { product: t } = e;
        return d(t);
    },
    m = (e) => {
        let { categories: t } = e;
        return f(t.categories);
    },
    h = (e) => {
        let { shopHome: t } = e;
        return f(t.categories);
    },
    g = (e) => {
        let { purchases: t } = e;
        return p(t);
    },
    E = (e) => {
        let { purchases: t } = e;
        return null != t && p(t);
    },
    b = (e) => {
        c = {};
    };
class y extends (r = a.ZP.Store) {
    getAllProfileEffects() {
        return Object.values(c);
    }
    getProfileEffect(e) {
        return null != e ? c[e] : void 0;
    }
}
l(y, "displayName", "ProfileEffectStore");
let O = new y(o.Z, {
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: _,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: m,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: h,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: g,
    COLLECTIBLES_CLAIM_SUCCESS: E,
    LOGOUT: b,
});
