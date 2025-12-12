n.d(t, { Z: () => v }), n(388685), n(361932), n(187205);
var r,
    i = n(392711),
    o = n(979554),
    a = n(442837),
    s = n(570140),
    l = n(212161);
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
        if (e.type !== o.Z.PROFILE_EFFECT && e.type !== o.Z.VARIANTS_GROUP) return r;
        let a = [
            ...e.items,
            ...(null != (n = null == (t = e.variants) ? void 0 : t.flatMap((e) => e.items)) ? n : []),
        ].filter(l.H);
        for (let e of (0, i.uniqBy)(a, "skuId")) {
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
    m = (e) => {
        let { product: t } = e;
        return f(t);
    },
    h = (e) => {
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
class O extends (r = a.ZP.Store) {
    getAllProfileEffects() {
        return Object.values(u);
    }
    getProfileEffect(e) {
        return null != e ? u[e] : void 0;
    }
}
c(O, "displayName", "ProfileEffectStore");
let v = new O(s.Z, {
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: m,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: h,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: g,
    COLLECTIBLES_PURCHASES_FETCH_SUCCESS: E,
    COLLECTIBLES_CLAIM_SUCCESS: b,
    LOGOUT: y,
});
