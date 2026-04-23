"use strict";
let r, i, s;
n.d(t, { A: () => D });
var a = n(735438),
    o = n(311907),
    l = n(73153),
    u = n(773669),
    c = n(993408),
    d = n(510801);
let _ = new Map(),
    f = new Map(),
    p = new Map(),
    h = new Map(),
    E = _,
    m = f,
    g = p,
    A = [],
    I = h,
    T = !1,
    S = new Set(),
    y = new Map(),
    N = new Map(),
    v = {},
    C = 0,
    O = (e) => {
        (I = new Map([...(E = e).values()].map((e) => [e.storeListingId, e]))),
            (m = new Map((0, c.P_)(E, !0).map((e) => [e.skuId, e]))),
            (A = [...(g = new Map((0, c.P_)(E, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    R = () => {
        (E = _), (m = f), (i = void 0), (T = !1), (S = new Set()), (r = void 0), (s = void 0), (v = {}), (C = 0);
    };
class b extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([u.default], R);
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
        return v;
    }
    get categories() {
        return E;
    }
    get products() {
        return m;
    }
    get productsWithVariantsAsGroup() {
        return A;
    }
    get skipNumCategories() {
        return C;
    }
    getCategory(e) {
        return null != e ? E.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? m.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => m.get(e)).filter((e) => null != e);
    }
    getProductFetchError(e) {
        return null != e ? y.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? N.get(e) : void 0;
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
let D = new b(l.h, {
    COLLECTIBLES_CATEGORIES_FETCH: (e) => {
        (T = !0), (r = void 0), (s = void 0), (v = e.options);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
        let t =
            e.categories.collections.length > 0
                ? e.categories.collections.map(d.A.fromStorefrontCollectionRecord)
                : e.categories.categories;
        if (0 === t.length) (E = _), (m = f);
        else if (!(0, a.isEqual)([...E.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            E.forEach((t, r) => {
                !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t);
            }),
                O(e);
        }
        (i = Date.now()), (T = !1), (r = void 0), (s = void 0);
    },
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (E = _), (m = f), (T = !1), (S = new Set()), (r = t), (s = Date.now());
    },
    COLLECTIBLES_PRODUCT_FETCH: (e) => {
        let { skuId: t } = e;
        (S = new Set(S)).add(t), (y = new Map(y)).delete(t), (N = new Map(N)).delete(t);
    },
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
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
        m.set(t, n), (S = new Set(S)).delete(t), (y = new Map(y)).delete(t), (N = new Map(N)).delete(t);
    },
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
        let { skuId: t, error: n } = e;
        (S = new Set(S)).delete(t), (y = new Map(y)).set(t, n), (N = new Map(N)).set(t, Date.now());
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        O(new Map([...E, ...t]));
    },
    COLLECTIBLES_SKIP_NUM_CATEGORIES: (e) => {
        C = e.skipNumCategories;
    },
    LOGOUT: R,
});
