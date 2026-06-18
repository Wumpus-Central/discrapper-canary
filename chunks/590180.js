"use strict";
let i, r, s;
n.d(t, { A: () => O });
var a = n(735438),
    o = n(17928),
    l = n(228366),
    u = n(773669),
    c = n(993408),
    d = n(510801);
let _ = new Map(),
    h = new Map(),
    f = new Map(),
    p = new Map(),
    E = h,
    m = f,
    g = [],
    A = {},
    I = _,
    T = p,
    S = !1,
    y = {},
    C = 0,
    N = (e) => {
        T = new Map([...(I = e).values()].map((e) => [e.storeListingId, e]));
        let t = new Map((0, c.P_)(I, !0).map((e) => [e.skuId, e]));
        E.forEach((e) => {
            t.has(e.skuId) || t.set(e.skuId, e);
        }),
            (E = t),
            (g = [...(m = new Map((0, c.P_)(I, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    v = () => {
        (I = _), (E = h), (r = void 0), (S = !1), (A = {}), (i = void 0), (s = void 0), (y = {}), (C = 0);
    };
class R extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([u.default], v);
    }
    get isFetchingCategories() {
        return S;
    }
    isFetchingProduct(e) {
        return null != e && A[e]?.state === "fetching";
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
        return y;
    }
    get categories() {
        return I;
    }
    get products() {
        return E;
    }
    get productsWithVariantsAsGroup() {
        return g;
    }
    get skipNumCategories() {
        return C;
    }
    getCategory(e) {
        return null != e ? I.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? E.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => E.get(e)).filter((e) => null != e);
    }
    getProductFetch(e) {
        return null != e ? A[e] : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? m.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? T.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let O = new R(l.h, {
    COLLECTIBLES_CATEGORIES_FETCH: (e) => {
        (S = !0), (i = void 0), (s = void 0), (y = e.options);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
        let t =
            e.categories.collections.length > 0
                ? e.categories.collections.map(d.A.fromStorefrontCollectionRecord)
                : e.categories.categories;
        if (0 === t.length) (I = _), (E = h);
        else if (!(0, a.isEqual)([...I.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            I.forEach((t, i) => {
                !e.has(i) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(i, t);
            }),
                N(e);
        }
        (r = Date.now()), (S = !1), (i = void 0), (s = void 0);
    },
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (I = _), (E = h), (S = !1), (A = {}), (i = t), (s = Date.now());
    },
    COLLECTIBLES_PRODUCT_FETCH: (e) => {
        let { skuId: t, startedAt: n } = e;
        A[t] = { state: "fetching", startedAt: n };
    },
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
        let { skuId: t, product: n, endedAt: i } = e,
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
        E.set(t, n), (A[t] = { state: "success", startedAt: A[t]?.startedAt, endedAt: i });
    },
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
        let { skuId: t, error: n, endedAt: i } = e;
        A[t] = { state: "error", startedAt: A[t]?.startedAt, endedAt: i, error: n };
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        N(new Map([...I, ...t]));
    },
    COLLECTIBLES_SKIP_NUM_CATEGORIES: (e) => {
        C = e.skipNumCategories;
    },
    LOGOUT: v,
});
