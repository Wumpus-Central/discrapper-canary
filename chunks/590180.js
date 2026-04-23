"use strict";
let i, r, s;
n.d(t, { A: () => L });
var a = n(735438),
    o = n(17928),
    l = n(228366),
    d = n(773669),
    _ = n(993408),
    u = n(510801);
let c = new Map(),
    E = new Map(),
    h = new Map(),
    m = new Map(),
    f = c,
    g = E,
    p = h,
    A = [],
    I = m,
    T = !1,
    S = new Set(),
    N = new Map(),
    C = new Map(),
    R = {},
    O = 0,
    y = (e) => {
        (I = new Map([...(f = e).values()].map((e) => [e.storeListingId, e]))),
            (g = new Map((0, _.P_)(f, !0).map((e) => [e.skuId, e]))),
            (A = [...(p = new Map((0, _.P_)(f, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    v = () => {
        (f = c), (g = E), (r = void 0), (T = !1), (S = new Set()), (i = void 0), (s = void 0), (R = {}), (O = 0);
    };
class D extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([d.default], v);
    }
    get isFetchingCategories() {
        return T;
    }
    isFetchingProduct(e) {
        return null != e && S.has(e);
    }
    get error() {
        return i;
    }
    get lastErrorTimestamp() {
        return s;
    }
    get lastSuccessfulFetch() {
        return r;
    }
    get lastFetchOptions() {
        return R;
    }
    get categories() {
        return f;
    }
    get products() {
        return g;
    }
    get productsWithVariantsAsGroup() {
        return A;
    }
    get skipNumCategories() {
        return O;
    }
    getCategory(e) {
        return null != e ? f.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? g.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => g.get(e)).filter((e) => null != e);
    }
    getProductFetchError(e) {
        return null != e ? N.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? C.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? p.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? I.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let L = new D(l.h, {
    COLLECTIBLES_CATEGORIES_FETCH: (e) => {
        (T = !0), (i = void 0), (s = void 0), (R = e.options);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
        let t =
            e.categories.collections.length > 0
                ? e.categories.collections.map(u.A.fromStorefrontCollectionRecord)
                : e.categories.categories;
        if (0 === t.length) (f = c), (g = E);
        else if (!(0, a.isEqual)([...f.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            f.forEach((t, i) => {
                !e.has(i) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(i, t);
            }),
                y(e);
        }
        (r = Date.now()), (T = !1), (i = void 0), (s = void 0);
    },
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (f = c), (g = E), (T = !1), (S = new Set()), (i = t), (s = Date.now());
    },
    COLLECTIBLES_PRODUCT_FETCH: (e) => {
        let { skuId: t } = e;
        (S = new Set(S)).add(t), (N = new Map(N)).delete(t), (C = new Map(C)).delete(t);
    },
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
        let { skuId: t, product: n } = e,
            i = g.get(t);
        if (
            null != i &&
            0 === Object.keys(n.prices).length &&
            ((n.prices = i.prices), null != i.bundledProducts && null != n.bundledProducts)
        ) {
            let e = new Map(i.bundledProducts.map((e) => [e.skuId, e.prices]));
            for (let t of n.bundledProducts) {
                let n = e.get(t.skuId);
                null != n && 0 === Object.keys(t.prices).length && (t.prices = n);
            }
        }
        g.set(t, n), (S = new Set(S)).delete(t), (N = new Map(N)).delete(t), (C = new Map(C)).delete(t);
    },
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
        let { skuId: t, error: n } = e;
        (S = new Set(S)).delete(t), (N = new Map(N)).set(t, n), (C = new Map(C)).set(t, Date.now());
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        y(new Map([...f, ...t]));
    },
    COLLECTIBLES_SKIP_NUM_CATEGORIES: (e) => {
        O = e.skipNumCategories;
    },
    LOGOUT: v,
});
