"use strict";
let i, r, s;
n.d(t, { A: () => D });
var a = n(735438),
    o = n(17928),
    l = n(228366),
    _ = n(773669),
    d = n(993408),
    u = n(510801);
let c = new Map(),
    E = new Map(),
    h = new Map(),
    m = new Map(),
    f = E,
    g = h,
    I = [],
    A = {},
    p = c,
    T = m,
    S = !1,
    N = {},
    O = 0,
    R = (e) => {
        (T = new Map([...(p = e).values()].map((e) => [e.storeListingId, e]))),
            (f = new Map((0, d.P_)(p, !0).map((e) => [e.skuId, e]))),
            (I = [...(g = new Map((0, d.P_)(p, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    C = () => {
        (p = c), (f = E), (r = void 0), (S = !1), (A = {}), (i = void 0), (s = void 0), (N = {}), (O = 0);
    };
class y extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([_.default], C);
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
        return N;
    }
    get categories() {
        return p;
    }
    get products() {
        return f;
    }
    get productsWithVariantsAsGroup() {
        return I;
    }
    get skipNumCategories() {
        return O;
    }
    getCategory(e) {
        return null != e ? p.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? f.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => f.get(e)).filter((e) => null != e);
    }
    getProductFetch(e) {
        return null != e ? A[e] : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? g.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? T.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let D = new y(l.h, {
    COLLECTIBLES_CATEGORIES_FETCH: (e) => {
        (S = !0), (i = void 0), (s = void 0), (N = e.options);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
        let t =
            e.categories.collections.length > 0
                ? e.categories.collections.map(u.A.fromStorefrontCollectionRecord)
                : e.categories.categories;
        if (0 === t.length) (p = c), (f = E);
        else if (!(0, a.isEqual)([...p.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            p.forEach((t, i) => {
                !e.has(i) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(i, t);
            }),
                R(e);
        }
        (r = Date.now()), (S = !1), (i = void 0), (s = void 0);
    },
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (p = c), (f = E), (S = !1), (A = {}), (i = t), (s = Date.now());
    },
    COLLECTIBLES_PRODUCT_FETCH: (e) => {
        let { skuId: t, startedAt: n } = e;
        A[t] = { state: "fetching", startedAt: n };
    },
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
        let { skuId: t, product: n, endedAt: i } = e,
            r = f.get(t);
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
        f.set(t, n), (A[t] = { state: "success", startedAt: A[t]?.startedAt, endedAt: i });
    },
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
        let { skuId: t, error: n, endedAt: i } = e;
        A[t] = { state: "error", startedAt: A[t]?.startedAt, endedAt: i, error: n };
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        R(new Map([...p, ...t]));
    },
    COLLECTIBLES_SKIP_NUM_CATEGORIES: (e) => {
        O = e.skipNumCategories;
    },
    LOGOUT: C,
});
