"use strict";
let r, i, a;
n.d(t, { A: () => W });
var s = n(735438),
    o = n(311907),
    l = n(73153),
    u = n(49463),
    c = n(547065),
    d = n(773669),
    _ = n(993408),
    f = n(758836);
let p = new Map(),
    h = new Map(),
    m = new Map(),
    g = new Map(),
    E = [],
    A = p,
    I = h,
    T = m,
    y = [],
    S = g,
    v = E,
    C = null,
    b = !1,
    N = new Set(),
    R = new Map(),
    O = new Map(),
    D = {},
    L = 0,
    w = (e) => {
        let { skuId: t } = e;
        (N = new Set(N)).add(t), (R = new Map(R)).delete(t), (O = new Map(O)).delete(t);
    },
    x = (e) => {
        let { skuId: t, error: n } = e;
        (N = new Set(N)).delete(t), (R = new Map(R)).set(t, n), (O = new Map(O)).set(t, Date.now());
    },
    P = (e) => {
        let { skuId: t, product: n } = e;
        I.set(t, n), (N = new Set(N)).delete(t), (R = new Map(R)).delete(t), (O = new Map(O)).delete(t);
    },
    M = (e) => {
        (b = !0), (r = void 0), (a = void 0), (D = e.options);
    },
    k = (e) => {
        let { error: t } = e;
        (A = p), (I = h), (v = E), (b = !1), (N = new Set()), (r = t), (a = Date.now());
    },
    U = (e) => {
        let t = e.categories.categories;
        if (0 === t.length) (A = p), (I = h);
        else if (!(0, s.isEqual)([...A.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            A.forEach((t, r) => {
                !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t);
            }),
                V(e);
        }
        F(t, I), (i = Date.now()), (b = !1), (r = void 0), (a = void 0);
    },
    G = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        V(new Map([...A, ...t]));
    },
    V = (e) => {
        (S = new Map([...(A = e).values()].map((e) => [e.storeListingId, e]))),
            (I = new Map((0, _.P_)(A, !0).map((e) => [e.skuId, e]))),
            (y = [...(T = new Map((0, _.P_)(A, !1).map((e) => [e.storeListingId, e]))).values()]);
    },
    F = (e, t) => {
        if (0 === e.length) {
            v = E;
            return;
        }
        switch (C) {
            case c.J.POPULAR:
                v = f.xG;
                break;
            case c.J.RECENT:
                v = (0, _.H1)(e, t);
                break;
            case c.J.NONE:
            default:
                v = E;
        }
    },
    B = () => {
        (A = p),
            (I = h),
            (v = E),
            (i = void 0),
            (b = !1),
            (N = new Set()),
            (r = void 0),
            (a = void 0),
            (D = {}),
            (L = 0);
    },
    j = () => {
        if (!u.A.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = c.P.getCurrentConfig(
            { location: "CollectiblesCategoryStore handleExperimentChange" },
            { autoTrackExposure: !1 },
        );
        e !== C && (i = void 0), (C = e);
    },
    H = (e) => {
        L = e.skipNumCategories;
    };
class Y extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([d.default], B), this.syncWith([u.A], j);
    }
    get isFetchingCategories() {
        return b;
    }
    isFetchingProduct(e) {
        return null != e && N.has(e);
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
        return D;
    }
    get categories() {
        return A;
    }
    get products() {
        return I;
    }
    get productsWithVariantsAsGroup() {
        return y;
    }
    get recommendedGiftSkuIds() {
        return v;
    }
    get skipNumCategories() {
        return L;
    }
    getCategory(e) {
        return null != e ? A.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? I.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => I.get(e)).filter((e) => null != e);
    }
    getProductFetchError(e) {
        return null != e ? R.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? O.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? T.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let W = new Y(l.h, {
    COLLECTIBLES_CATEGORIES_FETCH: M,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: U,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: k,
    COLLECTIBLES_PRODUCT_FETCH: w,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: P,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: x,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: G,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: H,
    LOGOUT: B,
});
