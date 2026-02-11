"use strict";
let r, i, a;
n.d(t, { A: () => G });
var s = n(735438),
    o = n(311907),
    l = n(73153),
    u = n(773669),
    c = n(993408);
let d = new Map(),
    _ = new Map(),
    f = new Map(),
    h = new Map(),
    p = d,
    g = _,
    E = f,
    A = [],
    I = h,
    T = !1,
    y = new Set(),
    S = new Map(),
    v = new Map(),
    C = {},
    b = 0,
    N = (e) => {
        let { skuId: t } = e;
        (y = new Set(y)).add(t), (S = new Map(S)).delete(t), (v = new Map(v)).delete(t);
    },
    R = (e) => {
        let { skuId: t, error: n } = e;
        (y = new Set(y)).delete(t), (S = new Map(S)).set(t, n), (v = new Map(v)).set(t, Date.now());
    },
    O = (e) => {
        let { skuId: t, product: n } = e;
        g.set(t, n), (y = new Set(y)).delete(t), (S = new Map(S)).delete(t), (v = new Map(v)).delete(t);
    },
    D = (e) => {
        (T = !0), (r = void 0), (a = void 0), (C = e.options);
    },
    L = (e) => {
        let { error: t } = e;
        (p = d), (g = _), (T = !1), (y = new Set()), (r = t), (a = Date.now());
    },
    w = (e) => {
        let t = e.categories.categories;
        if (0 === t.length) (p = d), (g = _);
        else if (!(0, s.isEqual)([...p.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            p.forEach((t, r) => {
                !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t);
            }),
                P(e);
        }
        (i = Date.now()), (T = !1), (r = void 0), (a = void 0);
    },
    x = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        P(new Map([...p, ...t]));
    },
    P = (e) => {
        (I = new Map([...(p = e).values()].map((e) => [e.storeListingId, e]))),
            (g = new Map((0, c.P_)(p, !0).map((e) => [e.skuId, e]))),
            (A = [...(E = new Map((0, c.P_)(p, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    M = () => {
        (p = d), (g = _), (i = void 0), (T = !1), (y = new Set()), (r = void 0), (a = void 0), (C = {}), (b = 0);
    },
    k = (e) => {
        b = e.skipNumCategories;
    };
class U extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([u.default], M);
    }
    get isFetchingCategories() {
        return T;
    }
    isFetchingProduct(e) {
        return null != e && y.has(e);
    }
    get error() {
        return r;
    }
    get lastErrorTimestamp() {
        return a;
    }
    get lastSuccessfulFetch() {
        return i;
    }
    get lastFetchOptions() {
        return C;
    }
    get categories() {
        return p;
    }
    get products() {
        return g;
    }
    get productsWithVariantsAsGroup() {
        return A;
    }
    get skipNumCategories() {
        return b;
    }
    getCategory(e) {
        return null != e ? p.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? g.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => g.get(e)).filter((e) => null != e);
    }
    getProductFetchError(e) {
        return null != e ? S.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? v.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? E.get(e) : void 0;
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
    COLLECTIBLES_PRODUCT_FETCH: N,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: O,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: R,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: x,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: k,
    LOGOUT: M,
});
