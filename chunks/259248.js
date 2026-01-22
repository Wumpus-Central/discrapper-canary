n.d(t, {
    A: () => A,
}),
    n(896048),
    n(114821),
    n(339614);
var r,
    i = n(735438),
    a = n(575593),
    s = n(311907),
    o = n(73153),
    l = n(203632);

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
    d = (e, t) => !(0, i.isEqual)(u[e], t) && ((u[e] = t), !0),
    f = (e) => {
        var t, n;
        let r = !1;
        if (e.type !== a.R.PROFILE_EFFECT && e.type !== a.R.VARIANTS_GROUP) return r;
        let s = [
            ...e.items,
            ...(null !=
            (t =
                null == (n = e.variants)
                    ? void 0
                    : n.flatMap((e) => {
                          let { items: t } = e;
                          return t;
                      }))
                ? t
                : []),
        ].filter(l.C);
        for (let e of (0, i.uniqBy)(s, "skuId")) {
            let t = {
                skuId: e.skuId,
                config: e,
            };
            d(e.skuId, t) && (r = !0);
        }
        return r;
    },
    p = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                e.products.forEach((e) => {
                    f(e) && (t = !0);
                });
            }),
            t
        );
    },
    _ = (e) => {
        let t = !1;
        return (
            e.forEach((e) => {
                f(e) && (t = !0);
            }),
            t
        );
    },
    h = (e) => {
        let { product: t } = e;
        return f(t);
    },
    m = (e) => {
        let { categories: t } = e;
        return p(t.categories);
    },
    g = (e) => {
        let { shopHome: t } = e;
        return p(t.categories);
    },
    E = (e) => {
        let { purchases: t } = e;
        return _(t);
    },
    b = (e) => {
        let { purchases: t } = e;
        return null != t && _(t);
    },
    y = (e) => {
        u = {};
    };
class O extends (r = s.Ay.Store) {
    getAllProfileEffects() {
        return Object.values(u);
    }
    getProfileEffect(e) {
        return null != e ? u[e] : void 0;
    }
}
c(O, "displayName", "ProfileEffectStore");
let A = new O(o.h, {
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: h,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: m,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: g,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: E,
    COLLECTIBLES_CLAIM_SUCCESS: b,
    LOGOUT: y,
});
