let i, a, s;
var o,
    l = r(47120);
var u = r(392711);
var c = r(442837),
    d = r(570140),
    f = r(353926),
    _ = r(109213),
    h = r(706454),
    p = r(884697),
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
    I = new Map(),
    T = new Map(),
    b = [],
    y = E,
    S = v,
    A = I,
    N = T,
    C = b,
    R = null,
    O = !1,
    D = new Set();
let L = new Map(),
    x = new Map();
let w = {},
    P = (e) => {
        let { skuId: n } = e;
        (D = new Set(D)).add(n), (L = new Map(L)).delete(n), (x = new Map(x)).delete(n);
    },
    M = (e) => {
        let { skuId: n, error: r } = e;
        (D = new Set(D)).delete(n), (L = new Map(L)).set(n, r), (x = new Map(x)).set(n, Date.now());
    },
    k = (e) => {
        let { skuId: n, product: r } = e;
        S.set(n, r), (D = new Set(D)).delete(n), (L = new Map(L)).delete(n), (x = new Map(x)).delete(n);
    },
    U = (e) => {
        (O = !0), (i = void 0), (s = void 0), (w = e.options);
    },
    B = (e) => {
        let { error: n } = e;
        (y = E), (S = v), (C = b), (O = !1), (D = new Set()), (i = n), (s = Date.now());
    },
    G = (e) => {
        0 === e.categories.length ? ((y = E), (S = v)) : !(0, u.isEqual)([...y.values()], e.categories) && ((y = new Map(e.categories.map((e) => [e.skuId, e]))), (N = new Map(e.categories.map((e) => [e.storeListingId, e]))), (S = new Map((0, p.Cs)(y, !0).map((e) => [e.skuId, e]))), (A = new Map((0, p.Cs)(y, !1).map((e) => [e.storeListingId, e])))), F(e.categories, S), (a = Date.now()), (O = !1), (i = void 0), (s = void 0);
    },
    Z = (e) => {
        0 !== e.shopHome.categories.length && 0 === y.size && ((y = new Map(e.shopHome.categories.map((e) => [e.skuId, e]))), (S = new Map((0, p.Cs)(y, !0).map((e) => [e.skuId, e]))));
    },
    F = (e, n) => {
        if (0 === e.length) {
            C = b;
            return;
        }
        switch (R) {
            case _.u.POPULAR:
                C = m.HU;
                break;
            case _.u.RECENT:
                C = (0, p.x0)(e, n);
                break;
            case _.u.NONE:
            default:
                C = b;
        }
    },
    V = () => {
        (y = E), (S = v), (C = b), (a = void 0), (O = !1), (D = new Set()), (i = void 0), (s = void 0), (w = {});
    },
    j = () => {
        if (!f.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = _.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== R && (a = void 0), (R = e);
    };
class H extends (o = c.ZP.Store) {
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
        return s;
    }
    get lastSuccessfulFetch() {
        return a;
    }
    get lastFetchOptions() {
        return w;
    }
    get categories() {
        return y;
    }
    get products() {
        return S;
    }
    get recommendedGiftSkuIds() {
        return C;
    }
    getCategory(e) {
        return null != e ? y.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? S.get(e) : void 0;
    }
    getProductFetchError(e) {
        return null != e ? L.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? x.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? A.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? N.get(e) : void 0;
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
