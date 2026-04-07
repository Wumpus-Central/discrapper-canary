"use strict";
let r, i, s;
n.d(t, { A: () => U });
var a = n(735438),
    o = n(311907),
    l = n(73153),
    u = n(773669),
    c = n(993408);
let d = new Map(),
    _ = new Map(),
    f = new Map(),
    p = new Map(),
    h = d,
    m = _,
    E = f,
    g = [],
    A = p,
    I = !1,
    T = new Set(),
    S = new Map(),
    y = new Map(),
    v = {},
    N = 0,
    C = (e) => {
        let { skuId: t } = e;
        (T = new Set(T)).add(t), (S = new Map(S)).delete(t), (y = new Map(y)).delete(t);
    },
    R = (e) => {
        let { skuId: t, error: n } = e;
        (T = new Set(T)).delete(t), (S = new Map(S)).set(t, n), (y = new Map(y)).set(t, Date.now());
    },
    O = (e) => {
        let { skuId: t, product: n } = e,
            r = m.get(t);
        if (
            null != r &&
            0 === Object.keys(n.prices).length &&
            ((n.prices = r.prices), null != r.bundledProducts && null != n.bundledProducts)
        ) {
            let e = new Map(r.bundledProducts.map((e) => [e.skuId, e.prices]));
            for (let t of n.bundledProducts) {
                let n = e.get(t.skuId);
                null != n && 0 === Object.keys(t.prices).length && (t.prices = n);
            }
        }
        m.set(t, n), (T = new Set(T)).delete(t), (S = new Map(S)).delete(t), (y = new Map(y)).delete(t);
    },
    b = (e) => {
        (I = !0), (r = void 0), (s = void 0), (v = e.options);
    },
    D = (e) => {
        let { error: t } = e;
        (h = d), (m = _), (I = !1), (T = new Set()), (r = t), (s = Date.now());
    },
    L = (e) => {
        let t = e.categories.categories;
        if (0 === t.length) (h = d), (m = _);
        else if (!(0, a.isEqual)([...h.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            h.forEach((t, r) => {
                !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t);
            }),
                M(e);
        }
        (i = Date.now()), (I = !1), (r = void 0), (s = void 0);
    },
    w = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        M(new Map([...h, ...t]));
    },
    M = (e) => {
        (A = new Map([...(h = e).values()].map((e) => [e.storeListingId, e]))),
            (m = new Map((0, c.P_)(h, !0).map((e) => [e.skuId, e]))),
            (g = [...(E = new Map((0, c.P_)(h, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    x = () => {
        (h = d), (m = _), (i = void 0), (I = !1), (T = new Set()), (r = void 0), (s = void 0), (v = {}), (N = 0);
    },
    P = (e) => {
        N = e.skipNumCategories;
    };
class k extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([u.default], x);
    }
    get isFetchingCategories() {
        return I;
    }
    isFetchingProduct(e) {
        return null != e && T.has(e);
    }
    get error() {
        return r;
    }
    get lastErrorTimestamp() {
        return s;
    }
    get lastSuccessfulFetch() {
        return i;
    }
    get lastFetchOptions() {
        return v;
    }
    get categories() {
        return h;
    }
    get products() {
        return m;
    }
    get productsWithVariantsAsGroup() {
        return g;
    }
    get skipNumCategories() {
        return N;
    }
    getCategory(e) {
        return null != e ? h.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? m.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => m.get(e)).filter((e) => null != e);
    }
    getProductFetchError(e) {
        return null != e ? S.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? y.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? E.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? A.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let U = new k(l.h, {
    COLLECTIBLES_CATEGORIES_FETCH: b,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: L,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: D,
    COLLECTIBLES_PRODUCT_FETCH: C,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: O,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: R,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: w,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: P,
    LOGOUT: x,
});
