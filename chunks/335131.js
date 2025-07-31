(n.d(t, {
    B1: () => j,
    DR: () => R,
    F$: () => L,
    Ov: () => G,
    R2: () => U,
    Sm: () => C,
    fK: () => k,
    fi: () => B,
    jr: () => M,
    mK: () => N,
    oK: () => P,
    oc: () => D,
    p8: () => V,
    qg: () => x
}),
    n(388685),
    n(49124));
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
    _ = n(748147),
    f = n(1870),
    p = n(549616),
    h = n(833798),
    m = n(778787),
    g = n(161226),
    E = n(251728),
    b = n(303952),
    y = n(578976),
    O = n(411700);
n(215023);
var v = n(981631);
function I(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
(n(597688), n(328347), n(874703), n(52030));
let N = (e) => {
        var { openInLayer: t = !0, tab: n } = e;
        (C(S(e, ['openInLayer', 'tab'])), t ? (0, l.jN)(v.S9g.COLLECTIBLES_SHOP) : (0, d.uL)(n ? v.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n) : v.Z5c.COLLECTIBLES_SHOP));
    },
    C = (e) => {
        s.Z.dispatch(T({ type: 'COLLECTIBLES_SHOP_OPEN' }, e));
    },
    R = () => {
        (s.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, l.xf)());
    },
    P = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    w = (e, t) => !!e == !!t,
    D = (e, t) => w(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && w(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && w(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && w(null == e ? void 0 : e.includePopularPicks, null == t ? void 0 : t.includePopularPicks) && w(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) && w(null == e ? void 0 : e.includeNameplatesOnMobile, null == t ? void 0 : t.includeNameplatesOnMobile) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway) && (null == e ? void 0 : e.shopHomeConfig) === (null == t ? void 0 : t.shopHomeConfig) && (null == e ? void 0 : e.skipNumCategories) === (null == t ? void 0 : t.skipNumCategories),
    L = async (e, t, n) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let r = (0, y.nW)(e),
            i = u.ZP.get('shop_show_debug_overlay');
        ((null == e ? void 0 : e.logPerf) &&
            (0, b.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: b.a.CATEGORIES_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                cacheDisabled: null == e ? void 0 : e.noCache
            }),
            i && (0, _.v)('fetchCollectiblesCategories started: '.concat(JSON.stringify(r, null, 2))));
        try {
            let a = await o.tn.get({
                url: v.ANM.COLLECTIBLES_CATEGORIES,
                query: r,
                rejectWithError: !0
            });
            ((null == e ? void 0 : e.logPerf) &&
                (0, b.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: b.a.CATEGORIES_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                    cacheDisabled: null == e ? void 0 : e.noCache
                }),
                i && (0, _.v)('fetchCollectiblesCategories completed '.concat(a.body.length, ' categories')),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                    categories: a.body.map(p.Z.fromServer),
                    noOp: t
                }));
        } catch (t) {
            let e = new c.Hx(t);
            ((0, O.G)(e),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: e
                }),
                i && (0, _.v)('fetchCollectiblesCategories failed: '.concat(e.message)));
        }
    },
    x = async (e) => {
        if (f.Z.isFetching) return;
        s.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
        let t = u.ZP.get('shop_show_debug_overlay');
        t && (0, _.v)('fetchCollectiblesPurchases started, options: '.concat(JSON.stringify(e, null, 2)));
        try {
            let n = {
                url: v.ANM.COLLECTIBLES_PURCHASES,
                rejectWithError: !0
            };
            ((null == e ? void 0 : e.variantsReturnStyle) === a.v.VARIANTS_GROUP && (n.query = { variants_return_style: a.v.VARIANTS_GROUP }), t && (0, _.v)('fetchCollectiblesPurchases request: '.concat(JSON.stringify(n, null, 2))));
            let r = await o.tn.get(n);
            (t && (0, _.v)('fetchCollectiblesPurchases completed with '.concat(r.body.length, ' purchases')),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: r.body.map(g.Z.fromServer)
                }));
        } catch (n) {
            let e = new c.Hx(n);
            throw (
                (0, O.G)(e),
                t && (0, _.v)('fetchCollectiblesPurchases failed: '.concat(e.message)),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                    error: e
                }),
                e
            );
        }
    },
    M = async (e, t) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            ((null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway));
            let r = await o.tn.get({
                url: v.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n,
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: m.Z.fromServer(r.body)
            });
        } catch (n) {
            let t = new c.Hx(n);
            ((0, O.G)(t),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: t
                }));
        }
    },
    k = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var t;
            let n = await o.tn.put({
                url: v.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null == (t = n.body) ? void 0 : t.map(g.Z.fromServer)
            });
        } catch (n) {
            let t = new c.Hx(n);
            throw (
                s.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: t
                }),
                t
            );
        }
    },
    j = async (e, t) => {
        try {
            return (
                await o.tn.get({
                    url: v.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    },
                    rejectWithError: !0
                })
            ).body.valid;
        } catch (e) {
            return ((0, O.G)(new c.Hx(e)), !1);
        }
    },
    U = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await o.tn.get({
                url: v.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: h.s.fromServer(e.body)
            });
        } catch (e) {
            ((0, O.G)(new c.Hx(e)), s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }));
        }
    },
    G = async (e, t, n) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_HOME_FETCH',
            tab: e,
            options: null != t ? t : {}
        });
        let r = (0, y.nW)(t, e);
        (null == t ? void 0 : t.logPerf) &&
            (0, b.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: b.a.SHOP_HOME_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                cacheDisabled: null == t ? void 0 : t.noCache
            });
        try {
            let i = await o.tn.get({
                url: v.ANM.COLLECTIBLES_SHOP,
                query: r,
                rejectWithError: !0
            });
            ((null == t ? void 0 : t.logPerf) &&
                (0, b.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: b.a.SHOP_HOME_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                    cacheDisabled: null == t ? void 0 : t.noCache
                }),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS',
                    tab: e,
                    shopHome: E.Y.fromServer(i.body)
                }));
        } catch (n) {
            let t = new c.Hx(n);
            ((0, O.G)(t),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_SHOP_HOME_FETCH_FAILURE',
                    tab: e,
                    error: t
                }));
        }
    },
    B = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE',
            shopHomeConfigOverride: e
        });
    },
    V = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_SKIP_NUM_CATEGORIES',
            skipNumCategories: e
        });
    };
