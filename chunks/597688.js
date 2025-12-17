let r, i, a;
n.d(t, { Z: () => W }), n(388685);
var o,
    s = n(392711),
    l = n(442837),
    c = n(570140),
    u = n(353926),
    d = n(109213),
    f = n(706454),
    p = n(884697),
    _ = n(215023);
function m(e, t, n) {
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
let h = new Map(),
    g = new Map(),
    E = new Map(),
    b = new Map(),
    y = [],
    O = h,
    v = g,
    S = E,
    I = [],
    T = b,
    C = y,
    A = null,
    N = !1,
    P = new Set(),
    R = new Map(),
    w = new Map(),
    D = {},
    x = 0,
    L = (e) => {
        let { skuId: t } = e;
        (P = new Set(P)).add(t), (R = new Map(R)).delete(t), (w = new Map(w)).delete(t);
    },
    j = (e) => {
        let { skuId: t, error: n } = e;
        (P = new Set(P)).delete(t), (R = new Map(R)).set(t, n), (w = new Map(w)).set(t, Date.now());
    },
    M = (e) => {
        let { skuId: t, product: n } = e;
        v.set(t, n), (P = new Set(P)).delete(t), (R = new Map(R)).delete(t), (w = new Map(w)).delete(t);
    },
    k = (e) => {
        (N = !0), (r = void 0), (a = void 0), (D = e.options);
    },
    U = (e) => {
        let { error: t } = e;
        (O = h), (v = g), (C = y), (N = !1), (P = new Set()), (r = t), (a = Date.now());
    },
    G = (e) => {
        let t = e.categories.categories;
        if (0 === t.length) (O = h), (v = g);
        else if (!(0, s.isEqual)([...O.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            O.forEach((t, r) => {
                !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t);
            }),
                (T = new Map([...(O = e).values()].map((e) => [e.storeListingId, e]))),
                (v = new Map((0, p.Cs)(O, !0).map((e) => [e.skuId, e]))),
                (I = [...(S = new Map((0, p.Cs)(O, !1).map((e) => [e.storeListingId, e]))).values()]);
        }
        F(t, v), (i = Date.now()), (N = !1), (r = void 0), (a = void 0);
    },
    Z = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        (T = new Map([...(O = new Map([...O, ...t])).values()].map((e) => [e.storeListingId, e]))),
            (v = new Map((0, p.Cs)(O, !0).map((e) => [e.skuId, e])));
    },
    F = (e, t) => {
        if (0 === e.length) {
            C = y;
            return;
        }
        switch (A) {
            case d.u.POPULAR:
                C = _.HU;
                break;
            case d.u.RECENT:
                C = (0, p.x0)(e, t);
                break;
            case d.u.NONE:
            default:
                C = y;
        }
    },
    B = () => {
        (O = h),
            (v = g),
            (C = y),
            (i = void 0),
            (N = !1),
            (P = new Set()),
            (r = void 0),
            (a = void 0),
            (D = {}),
            (x = 0);
    },
    V = () => {
        if (!u.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = d.G.getCurrentConfig(
            { location: "CollectiblesCategoryStore handleExperimentChange" },
            { autoTrackExposure: !1 },
        );
        e !== A && (i = void 0), (A = e);
    },
    H = (e) => {
        x = e.skipNumCategories;
    };
class Y extends (o = l.ZP.Store) {
    initialize() {
        this.syncWith([f.default], B), this.syncWith([u.Z], V);
    }
    get isFetchingCategories() {
        return N;
    }
    isFetchingProduct(e) {
        return null != e && P.has(e);
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
        return O;
    }
    get products() {
        return v;
    }
    get productsWithVariantsAsGroup() {
        return I;
    }
    get recommendedGiftSkuIds() {
        return C;
    }
    get skipNumCategories() {
        return x;
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
        return null != e ? R.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? w.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? T.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
m(Y, "displayName", "CollectiblesCategoryStore");
let W = new Y(c.Z, {
    COLLECTIBLES_CATEGORIES_FETCH: k,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: U,
    COLLECTIBLES_PRODUCT_FETCH: L,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: M,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: j,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: Z,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: H,
    LOGOUT: B,
});
