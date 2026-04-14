"use strict";
let r, i, s;
n.d(t, { A: () => G });
var a = n(735438),
    o = n(311907),
    l = n(73153),
    u = n(773669),
    c = n(993408),
    d = n(510801);
let _ = new Map(),
    f = new Map(),
    h = new Map(),
    p = new Map(),
    m = _,
    E = f,
    g = h,
    A = [],
    I = p,
    T = !1,
    S = new Set(),
    y = new Map(),
    v = new Map(),
    C = {},
    N = 0,
    R = (e) => {
        let { skuId: t } = e;
        (S = new Set(S)).add(t), (y = new Map(y)).delete(t), (v = new Map(v)).delete(t);
    },
    b = (e) => {
        let { skuId: t, error: n } = e;
        (S = new Set(S)).delete(t), (y = new Map(y)).set(t, n), (v = new Map(v)).set(t, Date.now());
    },
    O = (e) => {
        let { skuId: t, product: n } = e,
            r = E.get(t);
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
        E.set(t, n), (S = new Set(S)).delete(t), (y = new Map(y)).delete(t), (v = new Map(v)).delete(t);
    },
    D = (e) => {
        (T = !0), (r = void 0), (s = void 0), (C = e.options);
    },
    L = (e) => {
        let { error: t } = e;
        (m = _), (E = f), (T = !1), (S = new Set()), (r = t), (s = Date.now());
    },
    w = (e) => {
        let t =
            e.categories.collections.length > 0
                ? e.categories.collections.map(d.A.fromStorefrontCollectionRecord)
                : e.categories.categories;
        if (0 === t.length) (m = _), (E = f);
        else if (!(0, a.isEqual)([...m.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            m.forEach((t, r) => {
                !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t);
            }),
                x(e);
        }
        (i = Date.now()), (T = !1), (r = void 0), (s = void 0);
    },
    M = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        x(new Map([...m, ...t]));
    },
    x = (e) => {
        (I = new Map([...(m = e).values()].map((e) => [e.storeListingId, e]))),
            (E = new Map((0, c.P_)(m, !0).map((e) => [e.skuId, e]))),
            (A = [...(g = new Map((0, c.P_)(m, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    P = () => {
        (m = _), (E = f), (i = void 0), (T = !1), (S = new Set()), (r = void 0), (s = void 0), (C = {}), (N = 0);
    },
    k = (e) => {
        N = e.skipNumCategories;
    };
class U extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([u.default], P);
    }
    get isFetchingCategories() {
        return T;
    }
    isFetchingProduct(e) {
        return null != e && S.has(e);
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
        return C;
    }
    get categories() {
        return m;
    }
    get products() {
        return E;
    }
    get productsWithVariantsAsGroup() {
        return A;
    }
    get skipNumCategories() {
        return N;
    }
    getCategory(e) {
        return null != e ? m.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? E.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => E.get(e)).filter((e) => null != e);
    }
    getProductFetchError(e) {
        return null != e ? y.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? v.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? g.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? I.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let G = new U(l.h, {
    COLLECTIBLES_CATEGORIES_FETCH: D,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: w,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: L,
    COLLECTIBLES_PRODUCT_FETCH: R,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: O,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: b,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: M,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: k,
    LOGOUT: P,
});
