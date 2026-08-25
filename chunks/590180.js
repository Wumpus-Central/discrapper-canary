"use strict";
let i, r, a;
n.d(t, { A: () => P });
var s = n(435558),
    l = n(158390),
    o = n(17928),
    d = n(228366),
    c = n(773669),
    u = n(927813),
    _ = n(993408),
    E = n(510801);
let A = 10 * u.A.Millis.SECOND,
    h = 10 * u.A.Millis.MINUTE,
    I = new Map(),
    f = new Map(),
    p = new Map(),
    T = new Map(),
    m = f,
    g = p,
    S = [],
    N = {},
    C = {},
    R = I,
    O = T,
    L = !1,
    y = {},
    D = 0;
function v(e) {
    O = new Map([...(R = e).values()].map((e) => [e.storeListingId, e]));
    let t = new Map((0, _.P_)(R, !0).map((e) => [e.skuId, e]));
    m.forEach((e) => {
        t.has(e.skuId) || t.set(e.skuId, e);
    }),
        (m = t),
        (S = [...(g = new Map((0, _.P_)(R, !1).map((e) => [e.storeListingId, e]))).values()]);
}
function b() {
    (R = I),
        (m = f),
        (r = void 0),
        (L = !1),
        (C = {}),
        Object.values(N).forEach((e) => e.cancel()),
        (N = {}),
        (i = void 0),
        (a = void 0),
        (y = {}),
        (D = 0);
}
class M extends o.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([c.default], b);
    }
    get isFetchingCategories() {
        return L;
    }
    isFetchingProduct(e) {
        return null != e && C[e]?.state === "fetching";
    }
    isProductFetchBackedOff(e) {
        return null != e && N[e]?.pending === !0;
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
        return y;
    }
    get categories() {
        return R;
    }
    get products() {
        return m;
    }
    get productsWithVariantsAsGroup() {
        return S;
    }
    get skipNumCategories() {
        return D;
    }
    getCategory(e) {
        return null != e ? R.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? m.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => m.get(e)).filter((e) => null != e);
    }
    getProductFetch(e) {
        return null != e ? C[e] : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? g.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? O.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let P = new M(d.h, {
    COLLECTIBLES_CATEGORIES_FETCH: function (e) {
        (L = !0), (i = void 0), (a = void 0), (y = e.options);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: function (e) {
        let t =
            e.categories.collections.length > 0
                ? e.categories.collections.map(E.A.fromStorefrontCollectionRecord)
                : e.categories.categories;
        if (0 === t.length) (R = I), (m = f);
        else if (!(0, s.isEqual)([...R.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            R.forEach((t, i) => {
                !e.has(i) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(i, t);
            }),
                v(e);
        }
        (r = Date.now()), (L = !1), (i = void 0), (a = void 0);
    },
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (R = I), (m = f), (L = !1), (C = {}), (i = t), (a = Date.now());
    },
    COLLECTIBLES_PRODUCT_FETCH: function (e) {
        let { skuId: t, startedAt: n } = e;
        C[t] = { state: "fetching", startedAt: n };
    },
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: function (e) {
        let { skuId: t, product: n, endedAt: i } = e,
            r = m.get(t);
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
        m.set(t, n), (C[t] = { state: "success", startedAt: C[t]?.startedAt, endedAt: i }), N[t]?.succeed();
    },
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: function (e) {
        let { skuId: t, error: n, endedAt: i } = e;
        C[t] = { state: "error", startedAt: C[t]?.startedAt, endedAt: i, error: n };
        let r = N[t];
        null == r && ((r = new l.A(A, h)), (N[t] = r)),
            r.pending || r.fail(() => d.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED", skuId: t }));
    },
    COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED: function (e) {
        let { skuId: t } = e;
        N[t]?.cancel();
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function (e) {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        v(new Map([...R, ...t]));
    },
    COLLECTIBLES_SKIP_NUM_CATEGORIES: function (e) {
        D = e.skipNumCategories;
    },
    LOGOUT: b,
});
