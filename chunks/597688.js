let r, i, a;
n.d(t, { Z: () => z }), n(388685);
var o,
    s = n(392711),
    l = n(442837),
    c = n(570140),
    u = n(353926),
    d = n(109213),
    f = n(706454),
    _ = n(884697),
    p = n(215023);
function h(e, t, n) {
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
let m = new Map(),
    g = new Map(),
    E = new Map(),
    b = new Map(),
    y = [],
    O = m,
    v = g,
    I = E,
    T = [],
    S = b,
    A = y,
    C = null,
    N = !1,
    R = new Set(),
    P = new Map(),
    D = new Map(),
    w = {},
    L = 0,
    x = (e) => {
        let { skuId: t } = e;
        (R = new Set(R)).add(t), (P = new Map(P)).delete(t), (D = new Map(D)).delete(t);
    },
    M = (e) => {
        let { skuId: t, error: n } = e;
        (R = new Set(R)).delete(t), (P = new Map(P)).set(t, n), (D = new Map(D)).set(t, Date.now());
    },
    j = (e) => {
        let { skuId: t, product: n } = e;
        v.set(t, n), (R = new Set(R)).delete(t), (P = new Map(P)).delete(t), (D = new Map(D)).delete(t);
    },
    k = (e) => {
        (N = !0), (r = void 0), (a = void 0), (w = e.options);
    },
    U = (e) => {
        let { error: t } = e;
        (O = m), (v = g), (A = y), (N = !1), (R = new Set()), (r = t), (a = Date.now());
    },
    G = (e) => {
        Z(e.categories, e.noOp);
    },
    B = (e) => {
        Z(e.categories.categories, e.noOp);
    },
    Z = (e, t) => {
        if (0 === e.length) (O = m), (v = g);
        else if (!(0, s.isEqual)([...O.values()], e) && !t) {
            let t = new Map(e.map((e) => [e.skuId, e])),
                n = new Date();
            O.forEach((e, r) => {
                !t.has(r) && (null == e.unpublishedAt || e.unpublishedAt > n) && t.set(r, e);
            }),
                (S = new Map([...(O = t).values()].map((e) => [e.storeListingId, e]))),
                (v = new Map((0, _.Cs)(O, !0).map((e) => [e.skuId, e]))),
                (T = [...(I = new Map((0, _.Cs)(O, !1).map((e) => [e.storeListingId, e]))).values()]);
        }
        V(e, v), (i = Date.now()), (N = !1), (r = void 0), (a = void 0);
    },
    F = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        (S = new Map([...(O = new Map([...O, ...t])).values()].map((e) => [e.storeListingId, e]))),
            (v = new Map((0, _.Cs)(O, !0).map((e) => [e.skuId, e])));
    },
    V = (e, t) => {
        if (0 === e.length) {
            A = y;
            return;
        }
        switch (C) {
            case d.u.POPULAR:
                A = p.HU;
                break;
            case d.u.RECENT:
                A = (0, _.x0)(e, t);
                break;
            case d.u.NONE:
            default:
                A = y;
        }
    },
    H = () => {
        (O = m),
            (v = g),
            (A = y),
            (i = void 0),
            (N = !1),
            (R = new Set()),
            (r = void 0),
            (a = void 0),
            (w = {}),
            (L = 0);
    },
    Y = () => {
        if (!u.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = d.G.getCurrentConfig(
            { location: "CollectiblesCategoryStore handleExperimentChange" },
            { autoTrackExposure: !1 },
        );
        e !== C && (i = void 0), (C = e);
    },
    W = (e) => {
        L = e.skipNumCategories;
    };
class K extends (o = l.ZP.Store) {
    initialize() {
        this.syncWith([f.default], H), this.syncWith([u.Z], Y);
    }
    get isFetchingCategories() {
        return N;
    }
    isFetchingProduct(e) {
        return null != e && R.has(e);
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
        return w;
    }
    get categories() {
        return O;
    }
    get products() {
        return v;
    }
    get productsWithVariantsAsGroup() {
        return T;
    }
    get recommendedGiftSkuIds() {
        return A;
    }
    get skipNumCategories() {
        return L;
    }
    getCategory(e) {
        return null != e ? O.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? v.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => v.get(e)).filter((e) => null != e);
    }
    getProductFetchError(e) {
        return null != e ? P.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? D.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? I.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
h(K, "displayName", "CollectiblesCategoryStore");
let z = new K(c.Z, {
    COLLECTIBLES_CATEGORIES_FETCH: k,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
    COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS: B,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: U,
    COLLECTIBLES_PRODUCT_FETCH: x,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: j,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: M,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: F,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: W,
    LOGOUT: H,
});
