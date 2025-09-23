n.d(t, {
    B1: () => Z,
    DR: () => x,
    F$: () => k,
    Ov: () => V,
    R2: () => F,
    Sm: () => D,
    fK: () => B,
    fi: () => H,
    jr: () => G,
    mK: () => w,
    oK: () => L,
    oc: () => M,
    p8: () => Y,
    qg: () => U,
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
    p = n(748147),
    h = n(1870),
    m = n(526503),
    g = n(206788),
    E = n(549616),
    b = n(833798),
    y = n(778787),
    O = n(161226),
    v = n(251728),
    I = n(303952),
    T = n(578976),
    S = n(411700);
n(215023);
var A = n(981631);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(597688), n(328347), n(874703), n(52030);
let w = (e) => {
        var { openInLayer: t = !0, tab: r } = e,
            i = R(e, ["openInLayer", "tab"]);
        {
            let { default: e } = n(342386);
            D(i),
                (0, _.yP)("closeUserSettings") && e(),
                t
                    ? (0, l.jN)(A.S9g.COLLECTIBLES_SHOP)
                    : (0, d.uL)(r ? A.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r) : A.Z5c.COLLECTIBLES_SHOP);
        }
    },
    D = (e) => {
        s.Z.dispatch(N({ type: "COLLECTIBLES_SHOP_OPEN" }, e));
    },
    x = () => {
        s.Z.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" }), (0, l.xf)();
    },
    L = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
            item: e,
        });
    },
    j = (e, t) => !!e == !!t,
    M = (e, t) =>
        j(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) &&
        j(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) &&
        j(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) &&
        j(null == e ? void 0 : e.includePopularPicks, null == t ? void 0 : t.includePopularPicks) &&
        j(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) &&
        j(null == e ? void 0 : e.includeNameplatesOnMobile, null == t ? void 0 : t.includeNameplatesOnMobile) &&
        (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) &&
        (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway) &&
        (null == e ? void 0 : e.shopHomeConfig) === (null == t ? void 0 : t.shopHomeConfig) &&
        (null == e ? void 0 : e.skipNumCategories) === (null == t ? void 0 : t.skipNumCategories),
    k = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CATEGORIES_FETCH",
            options: null != e ? e : {},
        });
        let r = (0, T.nW)(e),
            i = u.ZP.get("shop_show_debug_overlay");
        (null == e ? void 0 : e.logPerf) &&
            (0, I.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: I.a.CATEGORIES_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                cacheDisabled: null == e ? void 0 : e.noCache,
            }),
            i && (0, p.v)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
        try {
            let a = (0, m.i)("CollectiblesActionCreators"),
                l = await o.tn.get({
                    url: a ? A.ANM.COLLECTIBLES_CATEGORIES_V2 : A.ANM.COLLECTIBLES_CATEGORIES,
                    query: r,
                    rejectWithError: !0,
                });
            (null == e ? void 0 : e.logPerf) &&
                (0, I.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: I.a.CATEGORIES_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                    cacheDisabled: null == e ? void 0 : e.noCache,
                }),
                i &&
                    (0, p.v)(
                        "fetchCollectiblesCategories completed ".concat(
                            a ? l.body.categories.length : l.body.length,
                            " categories",
                        ),
                    ),
                a
                    ? s.Z.dispatch({
                          type: "COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS",
                          categories: g.C.fromServer(l.body),
                          noOp: t,
                      })
                    : s.Z.dispatch({
                          type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                          categories: l.body.map(E.Z.fromServer),
                          noOp: t,
                      });
        } catch (t) {
            let e = new c.Hx(t);
            (0, S.G)(e),
                s.Z.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                    error: e,
                }),
                i && (0, p.v)("fetchCollectiblesCategories failed: ".concat(e.message));
        }
    },
    U = async (e) => {
        if (h.Z.isFetching) return;
        s.Z.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let t = u.ZP.get("shop_show_debug_overlay");
        t && (0, p.v)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
        try {
            let n = {
                url: A.ANM.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
            };
            (null == e ? void 0 : e.variantsReturnStyle) === a.v.VARIANTS_GROUP &&
                (n.query = { variants_return_style: a.v.VARIANTS_GROUP }),
                t && (0, p.v)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
            let r = await o.tn.get(n);
            t && (0, p.v)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                    purchases: r.body.map(O.Z.fromServer),
                });
        } catch (n) {
            let e = new c.Hx(n);
            throw (
                ((0, S.G)(e),
                t && (0, p.v)("fetchCollectiblesPurchases failed: ".concat(e.message)),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                    error: e,
                }),
                e)
            );
        }
    },
    G = async (e, t) => {
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
                url: A.ANM.COLLECTIBLES_PRODUCTS(e),
                rejectWithError: !0,
                query: n,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: y.Z.fromServer(r.body),
            });
        } catch (n) {
            let t = new c.Hx(n);
            (0, S.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    skuId: e,
                    error: t,
                });
        }
    },
    B = async (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CLAIM",
            skuId: e,
        });
        try {
            var t;
            let n = await o.tn.put({
                url: A.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_CLAIM_SUCCESS",
                skuId: e,
                purchases: null == (t = n.body) ? void 0 : t.map(O.Z.fromServer),
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
    Z = async (e, t) => {
        try {
            return (
                await o.tn.get({
                    url: A.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e,
                    },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, S.G)(new c.Hx(e)), !1;
        }
    },
    F = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await o.tn.get({
                url: A.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
                marketings: b.s.fromServer(e.body),
            });
        } catch (e) {
            (0, S.G)(new c.Hx(e)), s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    V = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SHOP_HOME_FETCH",
            tab: e,
            options: null != t ? t : {},
        });
        let r = (0, T.nW)(t, e);
        (null == t ? void 0 : t.logPerf) &&
            (0, I.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: I.a.SHOP_HOME_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                cacheDisabled: null == t ? void 0 : t.noCache,
            });
        try {
            let i = await o.tn.get({
                url: A.ANM.COLLECTIBLES_SHOP,
                query: r,
                rejectWithError: !0,
            });
            (null == t ? void 0 : t.logPerf) &&
                (0, I.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: I.a.SHOP_HOME_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                    cacheDisabled: null == t ? void 0 : t.noCache,
                }),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
                    tab: e,
                    shopHome: v.Y.fromServer(i.body),
                });
        } catch (n) {
            let t = new c.Hx(n);
            (0, S.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
                    tab: e,
                    error: t,
                });
        }
    },
    H = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
            shopHomeConfigOverride: e,
        });
    },
    Y = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
            skipNumCategories: e,
        });
    };
