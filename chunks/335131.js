n.d(t, {
    B1: () => V,
    DR: () => x,
    F$: () => U,
    Ov: () => Y,
    R2: () => H,
    Sm: () => L,
    fK: () => F,
    fi: () => W,
    jr: () => B,
    lW: () => Z,
    mK: () => D,
    oK: () => j,
    oc: () => k,
    p8: () => K,
    qg: () => G,
}),
    n(388685),
    n(49124);
var r = n(561842),
    i = n(664081),
    a = n(311570),
    o = n(544891),
    s = n(570140),
    l = n(37234),
    c = n(881052),
    u = n(432877);
n(777639);
var d = n(703656),
    f = n(706454),
    _ = n(526665),
    p = n(597688),
    h = n(748147),
    m = n(1870),
    g = n(526503),
    E = n(206788),
    b = n(549616),
    y = n(833798),
    O = n(778787),
    v = n(161226),
    I = n(251728),
    T = n(303952),
    S = n(578976),
    A = n(411700);
n(215023);
var C = n(981631);
function N(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(328347), n(874703), n(52030);
let D = (e) => {
        var { openInLayer: t = !0, tab: r } = e,
            i = P(e, ["openInLayer", "tab"]);
        {
            let { default: e } = n(342386);
            L(i),
                (0, _.yP)("closeUserSettings") && e(),
                t
                    ? (0, l.jN)(C.S9g.COLLECTIBLES_SHOP)
                    : (0, d.uL)(r ? C.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r) : C.Z5c.COLLECTIBLES_SHOP);
        }
    },
    L = (e) => {
        s.Z.dispatch(R({ type: "COLLECTIBLES_SHOP_OPEN" }, e));
    },
    x = () => {
        s.Z.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" }), (0, l.xf)();
    },
    j = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
            item: e,
        });
    },
    M = (e, t) => !!e == !!t,
    k = (e, t) =>
        M(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) &&
        M(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) &&
        M(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) &&
        M(null == e ? void 0 : e.includePopularPicks, null == t ? void 0 : t.includePopularPicks) &&
        M(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) &&
        M(null == e ? void 0 : e.includeNameplatesOnMobile, null == t ? void 0 : t.includeNameplatesOnMobile) &&
        (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) &&
        (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway) &&
        (null == e ? void 0 : e.shopHomeConfig) === (null == t ? void 0 : t.shopHomeConfig) &&
        (null == e ? void 0 : e.skipNumCategories) === (null == t ? void 0 : t.skipNumCategories),
    U = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CATEGORIES_FETCH",
            options: null != e ? e : {},
        });
        let r = (0, S.nW)(e),
            i = u.ZP.get("shop_show_debug_overlay");
        (null == e ? void 0 : e.logPerf) &&
            (0, T.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: T.a.CATEGORIES_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                cacheDisabled: null == e ? void 0 : e.noCache,
            }),
            i && (0, h.v)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
        try {
            let a = (0, g.i)("CollectiblesActionCreators"),
                l = await o.tn.get({
                    url: a ? C.ANM.COLLECTIBLES_CATEGORIES_V2 : C.ANM.COLLECTIBLES_CATEGORIES,
                    query: r,
                    rejectWithError: !0,
                });
            (null == e ? void 0 : e.logPerf) &&
                (0, T.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: T.a.CATEGORIES_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                    cacheDisabled: null == e ? void 0 : e.noCache,
                }),
                i &&
                    (0, h.v)(
                        "fetchCollectiblesCategories completed ".concat(
                            a ? l.body.categories.length : l.body.length,
                            " categories",
                        ),
                    ),
                a
                    ? s.Z.dispatch({
                          type: "COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS",
                          categories: E.C.fromServer(l.body),
                          noOp: t,
                      })
                    : s.Z.dispatch({
                          type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                          categories: l.body.map(b.Z.fromServer),
                          noOp: t,
                      });
        } catch (t) {
            let e = new c.Hx(t);
            (0, A.G)(e),
                s.Z.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                    error: e,
                }),
                i && (0, h.v)("fetchCollectiblesCategories failed: ".concat(e.message));
        }
    },
    G = async (e) => {
        if (m.Z.isFetching) return;
        s.Z.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let t = u.ZP.get("shop_show_debug_overlay");
        t && (0, h.v)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
        try {
            let n = {
                url: C.ANM.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
            };
            (null == e ? void 0 : e.variantsReturnStyle) === a.v.VARIANTS_GROUP &&
                (n.query = { variants_return_style: a.v.VARIANTS_GROUP }),
                t && (0, h.v)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
            let r = await o.tn.get(n);
            t && (0, h.v)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                    purchases: r.body.map(v.Z.fromServer),
                });
        } catch (n) {
            let e = new c.Hx(n);
            throw (
                ((0, A.G)(e),
                t && (0, h.v)("fetchCollectiblesPurchases failed: ".concat(e.message)),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                    error: e,
                }),
                e)
            );
        }
    },
    B = async (e, t) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH",
            skuId: e,
        });
        try {
            let n = { locale: f.default.locale };
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode),
                (null == t ? void 0 : t.paymentGateway) !== null &&
                    (n.payment_gateway = null == t ? void 0 : t.paymentGateway),
                (null == t ? void 0 : t.includeBundles) !== null &&
                    (n.include_bundles = null == t ? void 0 : t.includeBundles);
            let r = await o.tn.get({
                url: C.ANM.COLLECTIBLES_PRODUCTS(e),
                rejectWithError: !0,
                query: n,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: O.Z.fromServer(r.body),
            });
        } catch (n) {
            let t = new c.Hx(n);
            (0, A.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    skuId: e,
                    error: t,
                });
        }
    },
    Z = async (e, t) => {
        p.Z.isFetchingProduct(e) || (await B(e, t));
    },
    F = async (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CLAIM",
            skuId: e,
        });
        try {
            var t;
            let n = await o.tn.put({
                url: C.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_CLAIM_SUCCESS",
                skuId: e,
                purchases: null == (t = n.body) ? void 0 : t.map(v.Z.fromServer),
            });
        } catch (n) {
            let t = new c.Hx(n);
            throw (
                (s.Z.dispatch({
                    type: "COLLECTIBLES_CLAIM_FAILURE",
                    skuId: e,
                    error: t,
                }),
                t)
            );
        }
    },
    V = async (e, t) => {
        try {
            return (
                await o.tn.get({
                    url: C.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e,
                    },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, A.G)(new c.Hx(e)), !1;
        }
    },
    H = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await o.tn.get({
                url: C.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
                marketings: y.s.fromServer(e.body),
            });
        } catch (e) {
            (0, A.G)(new c.Hx(e)), s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    Y = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SHOP_HOME_FETCH",
            tab: e,
            options: null != t ? t : {},
        });
        let r = (0, S.nW)(t, e);
        (null == t ? void 0 : t.logPerf) &&
            (0, T.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: T.a.SHOP_HOME_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                cacheDisabled: null == t ? void 0 : t.noCache,
            });
        try {
            let i = await o.tn.get({
                url: C.ANM.COLLECTIBLES_SHOP,
                query: r,
                rejectWithError: !0,
            });
            (null == t ? void 0 : t.logPerf) &&
                (0, T.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: T.a.SHOP_HOME_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                    cacheDisabled: null == t ? void 0 : t.noCache,
                }),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
                    tab: e,
                    shopHome: I.Y.fromServer(i.body),
                });
        } catch (n) {
            let t = new c.Hx(n);
            (0, A.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
                    tab: e,
                    error: t,
                });
        }
    },
    W = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
            shopHomeConfigOverride: e,
        });
    },
    K = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
            skipNumCategories: e,
        });
    };
