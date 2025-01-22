let i, a, o;
var s,
    l = r(47120);
var u = r(392711);
var c = r(442837),
    d = r(570140),
    f = r(353926),
    p = r(109213),
    h = r(706454),
    _ = r(884697),
    m = r(215023);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new Map(),
    v = new Map(),
    y = new Map(),
    b = new Map(),
    I = [],
    T = E,
    S = v,
    A = y,
    C = b,
    N = I,
    R = null,
    O = !1,
    D = new Set();
let x = new Map(),
    L = new Map();
let w = {},
    P = (e) => {
        let { skuId: n } = e;
        (D = new Set(D)).add(n), (x = new Map(x)).delete(n), (L = new Map(L)).delete(n);
    },
    M = (e) => {
        let { skuId: n, error: r } = e;
        (D = new Set(D)).delete(n), (x = new Map(x)).set(n, r), (L = new Map(L)).set(n, Date.now());
    },
    k = (e) => {
        let { skuId: n, product: r } = e;
        S.set(n, r), (D = new Set(D)).delete(n), (x = new Map(x)).delete(n), (L = new Map(L)).delete(n);
    },
    U = (e) => {
        (O = !0), (i = void 0), (o = void 0), (w = e.options);
    },
    B = (e) => {
        let { error: n } = e;
        (T = E), (S = v), (N = I), (O = !1), (D = new Set()), (i = n), (o = Date.now());
    },
    G = (e) => {
        0 === e.categories.length ? ((T = E), (S = v)) : !(0, u.isEqual)([...T.values()], e.categories) && ((T = new Map(e.categories.map((e) => [e.skuId, e]))), (C = new Map(e.categories.map((e) => [e.storeListingId, e]))), (S = new Map((0, _.Cs)(T, !0).map((e) => [e.skuId, e]))), (A = new Map((0, _.Cs)(T, !1).map((e) => [e.storeListingId, e])))), F(e.categories, S), (a = Date.now()), (O = !1), (i = void 0), (o = void 0);
    },
    Z = (e) => {
        0 !== e.shopHome.categories.length && 0 === T.size && ((T = new Map(e.shopHome.categories.map((e) => [e.skuId, e]))), (S = new Map((0, _.Cs)(T, !0).map((e) => [e.skuId, e]))));
    },
    F = (e, n) => {
        if (0 === e.length) {
            N = I;
            return;
        }
        switch (R) {
            case p.u.POPULAR:
                N = m.HU;
                break;
            case p.u.RECENT:
                N = (0, _.x0)(e, n);
                break;
            case p.u.NONE:
            default:
                N = I;
        }
    },
    V = () => {
        (T = E), (S = v), (N = I), (a = void 0), (O = !1), (D = new Set()), (i = void 0), (o = void 0), (w = {});
    },
    j = () => {
        if (!f.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = p.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== R && (a = void 0), (R = e);
    };
class H extends (s = c.ZP.Store) {
    initialize() {
        this.syncWith([h.default], V), this.syncWith([f.Z], j);
    }
    get isFetchingCategories() {
        return O;
    }
    isFetchingProduct(e) {
        return null != e && D.has(e);
    }
    get error() {
        return i;
    }
    get lastErrorTimestamp() {
        return o;
    }
    get lastSuccessfulFetch() {
        return a;
    }
    get lastFetchOptions() {
        return w;
    }
    get categories() {
        return T;
    }
    get products() {
        return S;
    }
    get recommendedGiftSkuIds() {
        return N;
    }
    getCategory(e) {
        return null != e ? T.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? S.get(e) : void 0;
    }
    getProductFetchError(e) {
        return null != e ? x.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? L.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? A.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? C.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let n = this.getProduct(e);
        return this.getCategory(null == n ? void 0 : n.categorySkuId);
    }
}
g(H, 'displayName', 'CollectiblesCategoryStore'),
    (n.Z = new H(d.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: U,
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: B,
        COLLECTIBLES_PRODUCT_FETCH: P,
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: k,
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: M,
        COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: Z,
        LOGOUT: V
    }));
