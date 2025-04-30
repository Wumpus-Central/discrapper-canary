let r, i, a;
n.d(t, { Z: () => Y }), n(388685);
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
    S = b,
    T = y,
    A = null,
    N = !1,
    C = new Set(),
    R = new Map(),
    P = new Map(),
    w = {},
    D = 0,
    L = (e) => {
        let { skuId: t } = e;
        (C = new Set(C)).add(t), (R = new Map(R)).delete(t), (P = new Map(P)).delete(t);
    },
    x = (e) => {
        let { skuId: t, error: n } = e;
        (C = new Set(C)).delete(t), (R = new Map(R)).set(t, n), (P = new Map(P)).set(t, Date.now());
    },
    M = (e) => {
        let { skuId: t, product: n } = e;
        v.set(t, n), (C = new Set(C)).delete(t), (R = new Map(R)).delete(t), (P = new Map(P)).delete(t);
    },
    k = (e) => {
        (N = !0), (r = void 0), (a = void 0), (w = e.options);
    },
    j = (e) => {
        let { error: t } = e;
        (O = m), (v = g), (T = y), (N = !1), (C = new Set()), (r = t), (a = Date.now());
    },
    U = (e) => {
        if (0 === e.categories.length) (O = m), (v = g);
        else if (!(0, s.isEqual)([...O.values()], e.categories) && !e.noOp) {
            let t = new Map(e.categories.map((e) => [e.skuId, e])),
                n = new Date();
            O.forEach((e, r) => {
                !t.has(r) && (null == e.unpublishedAt || e.unpublishedAt > n) && t.set(r, e);
            }),
                (S = new Map([...(O = t).values()].map((e) => [e.storeListingId, e]))),
                (v = new Map((0, _.Cs)(O, !0).map((e) => [e.skuId, e]))),
                (I = new Map((0, _.Cs)(O, !1).map((e) => [e.storeListingId, e])));
        }
        B(e.categories, v), (i = Date.now()), (N = !1), (r = void 0), (a = void 0);
    },
    G = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        (O = new Map([...O, ...t])), (v = new Map((0, _.Cs)(O, !0).map((e) => [e.skuId, e])));
    },
    B = (e, t) => {
        if (0 === e.length) {
            T = y;
            return;
        }
        switch (A) {
            case d.u.POPULAR:
                T = p.HU;
                break;
            case d.u.RECENT:
                T = (0, _.x0)(e, t);
                break;
            case d.u.NONE:
            default:
                T = y;
        }
    },
    V = () => {
        (O = m), (v = g), (T = y), (i = void 0), (N = !1), (C = new Set()), (r = void 0), (a = void 0), (w = {}), (D = 0);
    },
    F = () => {
        if (!u.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = d.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== A && (i = void 0), (A = e);
    },
    Z = (e) => {
        D = e.skipNumCategories;
    };
class H extends (o = l.ZP.Store) {
    initialize() {
        this.syncWith([f.default], V), this.syncWith([u.Z], F);
    }
    get isFetchingCategories() {
        return N;
    }
    isFetchingProduct(e) {
        return null != e && C.has(e);
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
    get recommendedGiftSkuIds() {
        return T;
    }
    get skipNumCategories() {
        return D;
    }
    getCategory(e) {
        return null != e ? O.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? v.get(e) : void 0;
    }
    getProductFetchError(e) {
        return null != e ? R.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? P.get(e) : void 0;
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
h(H, 'displayName', 'CollectiblesCategoryStore');
let Y = new H(c.Z, {
    COLLECTIBLES_CATEGORIES_FETCH: k,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: U,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: j,
    COLLECTIBLES_PRODUCT_FETCH: L,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: M,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: x,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: G,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: Z,
    LOGOUT: V
});
