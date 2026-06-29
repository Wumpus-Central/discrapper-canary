"use strict";
let i, r, s;
n.d(t, { A: () => M });
var a = n(735438),
    o = n(158390),
    l = n(17928),
    u = n(228366),
    c = n(773669),
    d = n(927813),
    _ = n(993408),
    h = n(510801);
let f = 10 * d.A.Millis.SECOND,
    p = 10 * d.A.Millis.MINUTE,
    E = new Map(),
    m = new Map(),
    g = new Map(),
    A = new Map(),
    I = m,
    T = g,
    S = [],
    y = {},
    C = {},
    N = E,
    v = A,
    R = !1,
    O = {},
    b = 0;
function D(e) {
    v = new Map([...(N = e).values()].map((e) => [e.storeListingId, e]));
    let t = new Map((0, _.P_)(N, !0).map((e) => [e.skuId, e]));
    I.forEach((e) => {
        t.has(e.skuId) || t.set(e.skuId, e);
    }),
        (I = t),
        (S = [...(T = new Map((0, _.P_)(N, !1).map((e) => [e.storeListingId, e]))).values()]);
}
function L() {
    (N = E),
        (I = m),
        (r = void 0),
        (R = !1),
        (C = {}),
        Object.values(y).forEach((e) => e.cancel()),
        (y = {}),
        (i = void 0),
        (s = void 0),
        (O = {}),
        (b = 0);
}
class w extends l.Ay.Store {
    static displayName = "CollectiblesCategoryStore";
    initialize() {
        this.syncWith([c.default], L);
    }
    get isFetchingCategories() {
        return R;
    }
    isFetchingProduct(e) {
        return null != e && C[e]?.state === "fetching";
    }
    isProductFetchBackedOff(e) {
        return null != e && y[e]?.pending === !0;
    }
    get error() {
        return i;
    }
    get lastErrorTimestamp() {
        return s;
    }
    get lastSuccessfulFetch() {
        return r;
    }
    get lastFetchOptions() {
        return O;
    }
    get categories() {
        return N;
    }
    get products() {
        return I;
    }
    get productsWithVariantsAsGroup() {
        return S;
    }
    get skipNumCategories() {
        return b;
    }
    getCategory(e) {
        return null != e ? N.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? I.get(e) : void 0;
    }
    getProductsBySkus(e) {
        return e.map((e) => I.get(e)).filter((e) => null != e);
    }
    getProductFetch(e) {
        return null != e ? C[e] : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? T.get(e) : void 0;
    }
    getCategoryByStoreListingId(e) {
        return null != e ? v.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(t?.categorySkuId);
    }
}
let M = new w(u.h, {
    COLLECTIBLES_CATEGORIES_FETCH: function (e) {
        (R = !0), (i = void 0), (s = void 0), (O = e.options);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: function (e) {
        let t =
            e.categories.collections.length > 0
                ? e.categories.collections.map(h.A.fromStorefrontCollectionRecord)
                : e.categories.categories;
        if (0 === t.length) (N = E), (I = m);
        else if (!(0, a.isEqual)([...N.values()], t) && !e.noOp) {
            let e = new Map(t.map((e) => [e.skuId, e])),
                n = new Date();
            N.forEach((t, i) => {
                !e.has(i) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(i, t);
            }),
                D(e);
        }
        (r = Date.now()), (R = !1), (i = void 0), (s = void 0);
    },
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (N = E), (I = m), (R = !1), (C = {}), (i = t), (s = Date.now());
    },
    COLLECTIBLES_PRODUCT_FETCH: function (e) {
        let { skuId: t, startedAt: n } = e;
        C[t] = { state: "fetching", startedAt: n };
    },
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: function (e) {
        let { skuId: t, product: n, endedAt: i } = e,
            r = I.get(t);
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
        I.set(t, n), (C[t] = { state: "success", startedAt: C[t]?.startedAt, endedAt: i }), y[t]?.succeed();
    },
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: function (e) {
        let { skuId: t, error: n, endedAt: i } = e;
        C[t] = { state: "error", startedAt: C[t]?.startedAt, endedAt: i, error: n };
        let r = y[t];
        null == r && ((r = new o.A(f, p)), (y[t] = r)),
            r.pending || r.fail(() => u.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED", skuId: t }));
    },
    COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED: function (e) {
        let { skuId: t } = e;
        y[t]?.cancel();
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function (e) {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map((e) => [e.skuId, e]));
        D(new Map([...N, ...t]));
    },
    COLLECTIBLES_SKIP_NUM_CATEGORIES: function (e) {
        b = e.skipNumCategories;
    },
    LOGOUT: L,
});
