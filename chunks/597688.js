let i, r, a;
n.d(t, { Z: () => j }), n(47120);
var s,
    o = n(392711),
    l = n(442837),
    u = n(570140),
    c = n(353926),
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
    v = new Map(),
    y = [],
    I = m,
    T = g,
    b = E,
    S = v,
    A = y,
    N = null,
    C = !1,
    R = new Set(),
    O = new Map(),
    D = new Map(),
    L = {},
    x = (e) => {
        let { skuId: t } = e;
        (R = new Set(R)).add(t), (O = new Map(O)).delete(t), (D = new Map(D)).delete(t);
    },
    P = (e) => {
        let { skuId: t, error: n } = e;
        (R = new Set(R)).delete(t), (O = new Map(O)).set(t, n), (D = new Map(D)).set(t, Date.now());
    },
    w = (e) => {
        let { skuId: t, product: n } = e;
        T.set(t, n), (R = new Set(R)).delete(t), (O = new Map(O)).delete(t), (D = new Map(D)).delete(t);
    },
    M = (e) => {
        (C = !0), (i = void 0), (a = void 0), (L = e.options);
    },
    k = (e) => {
        let { error: t } = e;
        (I = m), (T = g), (A = y), (C = !1), (R = new Set()), (i = t), (a = Date.now());
    },
    U = (e) => {
        if (0 === e.categories.length) (I = m), (T = g);
        else if (!(0, o.isEqual)([...I.values()], e.categories)) {
            let t = new Map(e.categories.map((e) => [e.skuId, e])),
                n = new Date();
            I.forEach((e, i) => {
                !t.has(i) && (null == e.unpublishedAt || e.unpublishedAt > n) && t.set(i, e);
            }),
                (S = new Map((I = t).values().map((e) => [e.storeListingId, e]))),
                (T = new Map((0, _.Cs)(I, !0).map((e) => [e.skuId, e]))),
                (b = new Map((0, _.Cs)(I, !1).map((e) => [e.storeListingId, e])));
        }
        B(e.categories, T), (r = Date.now()), (C = !1), (i = void 0), (a = void 0);
    },
    G = (e) => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        (I = new Map([...I, ...t])), (T = new Map((0, _.Cs)(I, !0).map((e) => [e.skuId, e])));
    },
    B = (e, t) => {
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
    Z = () => {
        (I = m), (T = g), (A = y), (r = void 0), (C = !1), (R = new Set()), (i = void 0), (a = void 0), (L = {});
    },
    F = () => {
        if (!c.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = d.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== N && (r = void 0), (N = e);
    };
class V extends (s = l.ZP.Store) {
    initialize() {
        this.syncWith([f.default], Z), this.syncWith([c.Z], F);
    }
    get isFetchingCategories() {
        return C;
    }
    isFetchingProduct(e) {
        return null != e && R.has(e);
    }
    get error() {
        return i;
    }
    get lastErrorTimestamp() {
        return a;
    }
    get lastSuccessfulFetch() {
        return r;
    }
    get lastFetchOptions() {
        return L;
    }
    get categories() {
        return I;
    }
    get products() {
        return T;
    }
    get recommendedGiftSkuIds() {
        return A;
    }
    getCategory(e) {
        return null != e ? I.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? T.get(e) : void 0;
    }
    getProductFetchError(e) {
        return null != e ? O.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? D.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? b.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
h(V, 'displayName', 'CollectiblesCategoryStore');
let j = new V(u.Z, {
    COLLECTIBLES_CATEGORIES_FETCH: M,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: U,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: k,
    COLLECTIBLES_PRODUCT_FETCH: x,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: w,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: P,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: G,
    LOGOUT: Z
});
