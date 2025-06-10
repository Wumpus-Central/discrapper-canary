let r, i, a;
n.d(t, { Z: () => W }), n(388685);
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
                  writable: !0
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
    S = [],
    T = b,
    A = y,
    N = null,
    C = !1,
    R = new Set(),
    P = new Map(),
    w = new Map(),
    D = {},
    L = 0,
    x = (e) => {
        let { skuId: t } = e;
        (R = new Set(R)).add(t), (P = new Map(P)).delete(t), (w = new Map(w)).delete(t);
    },
    k = (e) => {
        let { skuId: t, error: n } = e;
        (R = new Set(R)).delete(t), (P = new Map(P)).set(t, n), (w = new Map(w)).set(t, Date.now());
    },
    M = (e) => {
        let { skuId: t, product: n } = e;
        v.set(t, n), (R = new Set(R)).delete(t), (P = new Map(P)).delete(t), (w = new Map(w)).delete(t);
    },
    j = (e) => {
        (C = !0), (r = void 0), (a = void 0), (D = e.options);
    },
    U = (e) => {
        let { error: t } = e;
        (O = m), (v = g), (A = y), (C = !1), (R = new Set()), (r = t), (a = Date.now());
    },
    G = (e) => {
        if (0 === e.categories.length) (O = m), (v = g);
        else if (!(0, s.isEqual)([...O.values()], e.categories) && !e.noOp) {
            let t = new Map(e.categories.map((e) => [e.skuId, e])),
                n = new Date();
            O.forEach((e, r) => {
                !t.has(r) && (null == e.unpublishedAt || e.unpublishedAt > n) && t.set(r, e);
            }),
                (T = new Map([...(O = t).values()].map((e) => [e.storeListingId, e]))),
                (v = new Map((0, _.Cs)(O, !0).map((e) => [e.skuId, e]))),
                (S = [...(I = new Map((0, _.Cs)(O, !1).map((e) => [e.storeListingId, e]))).values()]);
        }
        F(e.categories, v), (i = Date.now()), (C = !1), (r = void 0), (a = void 0);
    },
    B = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        (O = new Map([...O, ...t])), (v = new Map((0, _.Cs)(O, !0).map((e) => [e.skuId, e])));
    },
    F = (e, t) => {
        if (0 === e.length) {
            A = y;
            return;
        }
        switch (N) {
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
    V = () => {
        (O = m), (v = g), (A = y), (i = void 0), (C = !1), (R = new Set()), (r = void 0), (a = void 0), (D = {}), (L = 0);
    },
    Z = () => {
        if (!u.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = d.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== N && (i = void 0), (N = e);
    },
    H = (e) => {
        L = e.skipNumCategories;
    };
class Y extends (o = l.ZP.Store) {
    initialize() {
        this.syncWith([f.default], V), this.syncWith([u.Z], Z);
    }
    get isFetchingCategories() {
        return C;
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
        return D;
    }
    get categories() {
        return O;
    }
    get products() {
        return v;
    }
    get productsWithVariantsAsGroup() {
        return S;
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
    getProductFetchError(e) {
        return null != e ? P.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? w.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? I.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? T.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
h(Y, 'displayName', 'CollectiblesCategoryStore');
let W = new Y(c.Z, {
    COLLECTIBLES_CATEGORIES_FETCH: j,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: U,
    COLLECTIBLES_PRODUCT_FETCH: x,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: M,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: k,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: B,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: H,
    LOGOUT: V
});
