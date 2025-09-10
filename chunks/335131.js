n.d(t, {
    B1: () => G,
    DR: () => w,
    F$: () => j,
    Ov: () => Z,
    R2: () => B,
    Sm: () => P,
    fK: () => U,
    fi: () => F,
    jr: () => k,
    mK: () => R,
    oK: () => D,
    oc: () => L,
    p8: () => V,
    qg: () => M,
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
    f = n(748147),
    _ = n(1870),
    p = n(526503),
    h = n(206788),
    m = n(549616),
    g = n(833798),
    E = n(778787),
    b = n(161226),
    y = n(251728),
    O = n(303952),
    v = n(578976),
    I = n(411700);
n(215023);
var T = n(981631);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(597688), n(328347), n(874703), n(52030);
let R = (e) => {
        var { openInLayer: t = !0, tab: n } = e;
        P(C(e, ["openInLayer", "tab"])),
            t
                ? (0, l.jN)(T.S9g.COLLECTIBLES_SHOP)
                : (0, d.uL)(n ? T.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n) : T.Z5c.COLLECTIBLES_SHOP);
    },
    P = (e) => {
        s.Z.dispatch(A({ type: "COLLECTIBLES_SHOP_OPEN" }, e));
    },
    w = () => {
        s.Z.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" }), (0, l.xf)();
    },
    D = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
            item: e,
        });
    },
    x = (e, t) => !!e == !!t,
    L = (e, t) =>
        x(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) &&
        x(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) &&
        x(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) &&
        x(null == e ? void 0 : e.includePopularPicks, null == t ? void 0 : t.includePopularPicks) &&
        x(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) &&
        x(null == e ? void 0 : e.includeNameplatesOnMobile, null == t ? void 0 : t.includeNameplatesOnMobile) &&
        (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) &&
        (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway) &&
        (null == e ? void 0 : e.shopHomeConfig) === (null == t ? void 0 : t.shopHomeConfig) &&
        (null == e ? void 0 : e.skipNumCategories) === (null == t ? void 0 : t.skipNumCategories),
    j = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CATEGORIES_FETCH",
            options: null != e ? e : {},
        });
        let r = (0, v.nW)(e),
            i = u.ZP.get("shop_show_debug_overlay");
        (null == e ? void 0 : e.logPerf) &&
            (0, O.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: O.a.CATEGORIES_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                cacheDisabled: null == e ? void 0 : e.noCache,
            }),
            i && (0, f.v)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
        try {
            let a = (0, p.i)("CollectiblesActionCreators"),
                l = await o.tn.get({
                    url: a ? T.ANM.COLLECTIBLES_CATEGORIES_V2 : T.ANM.COLLECTIBLES_CATEGORIES,
                    query: r,
                    rejectWithError: !0,
                });
            (null == e ? void 0 : e.logPerf) &&
                (0, O.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: O.a.CATEGORIES_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                    cacheDisabled: null == e ? void 0 : e.noCache,
                }),
                i &&
                    (0, f.v)(
                        "fetchCollectiblesCategories completed ".concat(
                            a ? l.body.categories.length : l.body.length,
                            " categories",
                        ),
                    ),
                a
                    ? s.Z.dispatch({
                          type: "COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS",
                          categories: h.C.fromServer(l.body),
                          noOp: t,
                      })
                    : s.Z.dispatch({
                          type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                          categories: l.body.map(m.Z.fromServer),
                          noOp: t,
                      });
        } catch (t) {
            let e = new c.Hx(t);
            (0, I.G)(e),
                s.Z.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                    error: e,
                }),
                i && (0, f.v)("fetchCollectiblesCategories failed: ".concat(e.message));
        }
    },
    M = async (e) => {
        if (_.Z.isFetching) return;
        s.Z.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let t = u.ZP.get("shop_show_debug_overlay");
        t && (0, f.v)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
        try {
            let n = {
                url: T.ANM.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
            };
            (null == e ? void 0 : e.variantsReturnStyle) === a.v.VARIANTS_GROUP &&
                (n.query = { variants_return_style: a.v.VARIANTS_GROUP }),
                t && (0, f.v)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
            let r = await o.tn.get(n);
            t && (0, f.v)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                    purchases: r.body.map(b.Z.fromServer),
                });
        } catch (n) {
            let e = new c.Hx(n);
            throw (
                ((0, I.G)(e),
                t && (0, f.v)("fetchCollectiblesPurchases failed: ".concat(e.message)),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                    error: e,
                }),
                e)
            );
        }
    },
    k = async (e, t) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH",
            skuId: e,
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode),
                (null == t ? void 0 : t.paymentGateway) !== null &&
                    (n.payment_gateway = null == t ? void 0 : t.paymentGateway),
                (null == t ? void 0 : t.includeBundles) !== null &&
                    (n.include_bundles = null == t ? void 0 : t.includeBundles);
            let r = await o.tn.get({
                url: T.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n,
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: E.Z.fromServer(r.body),
            });
        } catch (n) {
            let t = new c.Hx(n);
            (0, I.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    skuId: e,
                    error: t,
                });
        }
    },
    U = async (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CLAIM",
            skuId: e,
        });
        try {
            var t;
            let n = await o.tn.put({
                url: T.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_CLAIM_SUCCESS",
                skuId: e,
                purchases: null == (t = n.body) ? void 0 : t.map(b.Z.fromServer),
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
    G = async (e, t) => {
        try {
            return (
                await o.tn.get({
                    url: T.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e,
                    },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, I.G)(new c.Hx(e)), !1;
        }
    },
    B = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await o.tn.get({
                url: T.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
                marketings: g.s.fromServer(e.body),
            });
        } catch (e) {
            (0, I.G)(new c.Hx(e)), s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    Z = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SHOP_HOME_FETCH",
            tab: e,
            options: null != t ? t : {},
        });
        let r = (0, v.nW)(t, e);
        (null == t ? void 0 : t.logPerf) &&
            (0, O.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: O.a.SHOP_HOME_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                cacheDisabled: null == t ? void 0 : t.noCache,
            });
        try {
            let i = await o.tn.get({
                url: T.ANM.COLLECTIBLES_SHOP,
                query: r,
                rejectWithError: !0,
            });
            (null == t ? void 0 : t.logPerf) &&
                (0, O.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: O.a.SHOP_HOME_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                    cacheDisabled: null == t ? void 0 : t.noCache,
                }),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
                    tab: e,
                    shopHome: y.Y.fromServer(i.body),
                });
        } catch (n) {
            let t = new c.Hx(n);
            (0, I.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
                    tab: e,
                    error: t,
                });
        }
    },
    F = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
            shopHomeConfigOverride: e,
        });
    },
    V = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
            skipNumCategories: e,
        });
    };
