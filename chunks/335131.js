n.d(t, {
    B1: () => U,
    F$: () => x,
    Ov: () => F,
    R2: () => Z,
    Sm: () => P,
    _o: () => G,
    fK: () => k,
    fi: () => B,
    jr: () => j,
    lW: () => M,
    mK: () => N,
    oK: () => R,
    oc: () => D,
    p8: () => V,
    qg: () => L,
    wW: () => H,
}),
    n(388685),
    n(49124);
var r = n(561842),
    i = n(664081),
    a = n(311570),
    o = n(544891),
    s = n(570140);
n(37234);
var l = n(881052),
    c = n(432877);
n(777639);
var u = n(703656),
    d = n(706454),
    f = n(597688),
    p = n(748147),
    _ = n(1870),
    m = n(206788),
    h = n(833798),
    g = n(778787),
    E = n(161226),
    b = n(251728),
    y = n(303952),
    O = n(578976),
    v = n(411700);
n(215023);
var S = n(981631);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(328347), n(874703), n(52030);
let N = (e) => {
        var { tab: t } = e,
            r = C(e, ["tab"]);
        {
            let { default: e } = n(342386);
            P(r), e(), (0, u.uL)(t ? S.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t) : S.Z5c.COLLECTIBLES_SHOP);
        }
    },
    P = (e) => {
        s.Z.dispatch(T({ type: "COLLECTIBLES_SHOP_OPEN" }, e));
    },
    R = (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
            item: e,
        });
    },
    w = (e, t) => !!e == !!t,
    D = (e, t) =>
        w(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) &&
        w(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) &&
        w(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) &&
        w(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) &&
        w(null == e ? void 0 : e.includeNameplatesOnMobile, null == t ? void 0 : t.includeNameplatesOnMobile) &&
        (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) &&
        (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway) &&
        (null == e ? void 0 : e.shopHomeConfig) === (null == t ? void 0 : t.shopHomeConfig) &&
        (null == e ? void 0 : e.skipNumCategories) === (null == t ? void 0 : t.skipNumCategories),
    x = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CATEGORIES_FETCH",
            options: null != e ? e : {},
        });
        let r = (0, O.nW)(e),
            i = c.ZP.get("shop_show_debug_overlay");
        (null == e ? void 0 : e.logPerf) &&
            (0, y.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: y.a.CATEGORIES_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                cacheDisabled: null == e ? void 0 : e.noCache,
            }),
            i && (0, p.v)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
        try {
            let a = await o.tn.get({
                url: S.ANM.COLLECTIBLES_CATEGORIES_V2,
                query: r,
                rejectWithError: !0,
            });
            (null == e ? void 0 : e.logPerf) &&
                (0, y.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: y.a.CATEGORIES_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                    cacheDisabled: null == e ? void 0 : e.noCache,
                }),
                i && (0, p.v)("fetchCollectiblesCategories completed ".concat(a.body.categories.length, " categories")),
                s.Z.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: m.C.fromServer(a.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new l.Hx(t);
            (0, v.G)(e),
                s.Z.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                    error: e,
                }),
                i && (0, p.v)("fetchCollectiblesCategories failed: ".concat(e.message));
        }
    },
    L = async (e) => {
        if (_.Z.isFetching) return;
        s.Z.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let t = c.ZP.get("shop_show_debug_overlay");
        t && (0, p.v)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
        try {
            let n = {
                url: S.ANM.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
            };
            (null == e ? void 0 : e.variantsReturnStyle) === a.v.VARIANTS_GROUP &&
                (n.query = { variants_return_style: a.v.VARIANTS_GROUP }),
                t && (0, p.v)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
            let r = await o.tn.get(n);
            t && (0, p.v)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                    purchases: r.body.map(E.Z.fromServer),
                });
        } catch (n) {
            let e = new l.Hx(n);
            throw (
                ((0, v.G)(e),
                t && (0, p.v)("fetchCollectiblesPurchases failed: ".concat(e.message)),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                    error: e,
                }),
                e)
            );
        }
    },
    j = async (e, t) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH",
            skuId: e,
        });
        try {
            let n = { locale: d.default.locale };
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode),
                (null == t ? void 0 : t.paymentGateway) !== null &&
                    (n.payment_gateway = null == t ? void 0 : t.paymentGateway),
                (null == t ? void 0 : t.includeBundles) !== null &&
                    (n.include_bundles = null == t ? void 0 : t.includeBundles);
            let r = await o.tn.get({
                url: S.ANM.COLLECTIBLES_PRODUCTS(e),
                rejectWithError: !0,
                query: n,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: g.Z.fromServer(r.body),
            });
        } catch (n) {
            let t = new l.Hx(n);
            (0, v.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    skuId: e,
                    error: t,
                });
        }
    },
    M = async (e, t) => {
        f.Z.isFetchingProduct(e) || (await j(e, t));
    },
    k = async (e) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CLAIM",
            skuId: e,
        });
        try {
            var t;
            let n = await o.tn.put({
                url: S.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_CLAIM_SUCCESS",
                skuId: e,
                purchases: null == (t = n.body) ? void 0 : t.map(E.Z.fromServer),
            });
        } catch (n) {
            let t = new l.Hx(n);
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
    U = async (e, t) => {
        try {
            return (
                await o.tn.get({
                    url: S.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e,
                    },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, v.G)(new l.Hx(e)), !1;
        }
    },
    G = async (e, t) => {
        try {
            return (
                await o.tn.get({
                    url: S.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH,
                    query: {
                        sku_ids: t,
                        recipient_id: e,
                    },
                    rejectWithError: !0,
                })
            ).body;
        } catch (e) {
            return (0, v.G)(new l.Hx(e)), {};
        }
    },
    Z = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await o.tn.get({
                url: S.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
                marketings: h.s.fromServer(e.body),
            });
        } catch (e) {
            (0, v.G)(new l.Hx(e)), s.Z.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    F = async (e, t, n) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_SHOP_HOME_FETCH",
            tab: e,
            options: null != t ? t : {},
        });
        let r = (0, O.nW)(t, e);
        (null == t ? void 0 : t.logPerf) &&
            (0, y.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: y.a.SHOP_HOME_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                cacheDisabled: null == t ? void 0 : t.noCache,
            });
        try {
            let i = await o.tn.get({
                url: S.ANM.COLLECTIBLES_SHOP,
                query: r,
                rejectWithError: !0,
            });
            (null == t ? void 0 : t.logPerf) &&
                (0, y.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: y.a.SHOP_HOME_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                    cacheDisabled: null == t ? void 0 : t.noCache,
                }),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
                    tab: e,
                    shopHome: b.Y.fromServer(i.body),
                });
        } catch (n) {
            let t = new l.Hx(n);
            (0, v.G)(t),
                s.Z.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
                    tab: e,
                    error: t,
                });
        }
    },
    B = (e) => {
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
    },
    H = async (e, t) => {
        s.Z.dispatch({
            type: "COLLECTIBLES_CLAIM",
            skuId: t,
        });
        try {
            var n;
            let r = await o.tn.put({
                url: S.ANM.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            s.Z.dispatch({
                type: "COLLECTIBLES_CLAIM_SUCCESS",
                skuId: t,
                purchases: null == (n = r.body) ? void 0 : n.map(E.Z.fromServer),
            });
        } catch (n) {
            let e = new l.Hx(n);
            throw (
                (s.Z.dispatch({
                    type: "COLLECTIBLES_CLAIM_FAILURE",
                    skuId: t,
                    error: e,
                }),
                e)
            );
        }
    };
