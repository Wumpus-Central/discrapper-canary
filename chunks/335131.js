n.d(t, {
    B1: () => M,
    DR: () => N,
    F$: () => w,
    Ov: () => j,
    R2: () => k,
    Sm: () => T,
    fK: () => x,
    fi: () => U,
    jr: () => L,
    mK: () => A,
    oK: () => C,
    oc: () => P,
    p8: () => G,
    qg: () => D
});
var r = n(561842),
    i = n(664081),
    o = n(311570),
    a = n(544891),
    s = n(570140),
    l = n(37234),
    c = n(881052);
n(777639);
var u = n(703656),
    d = n(1870),
    f = n(549616),
    _ = n(833798),
    p = n(778787),
    h = n(161226),
    m = n(251728),
    g = n(303952),
    E = n(578976),
    b = n(439170),
    y = n(981631);
function O(e, t, n) {
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
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(597688), n(328347), n(874703), n(52030);
let T = (e) => {
        s.Z.dispatch(v({ type: 'COLLECTIBLES_SHOP_OPEN' }, e));
    },
    A = (e) => {
        var { openInLayer: t = !0, tab: n } = e;
        T(I(e, ['openInLayer', 'tab'])), t ? (0, l.jN)(y.S9g.COLLECTIBLES_SHOP) : (0, u.uL)(n ? y.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n) : y.Z5c.COLLECTIBLES_SHOP);
    },
    N = () => {
        s.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, l.xf)();
    },
    C = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    R = (e, t) => !!e == !!t,
    P = (e, t) => R(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && R(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && R(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && R(null == e ? void 0 : e.includePopularPicks, null == t ? void 0 : t.includePopularPicks) && R(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway) && (null == e ? void 0 : e.shopHomeConfig) === (null == t ? void 0 : t.shopHomeConfig) && (null == e ? void 0 : e.skipNumCategories) === (null == t ? void 0 : t.skipNumCategories),
    w = async (e, t, n) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let r = (0, E.nW)(e);
        (null == e ? void 0 : e.logPerf) &&
            (0, g.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: g.a.CATEGORIES_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                cacheDisabled: null == e ? void 0 : e.noCache
            });
        try {
            let i = await a.tn.get({
                url: y.ANM.COLLECTIBLES_CATEGORIES,
                query: r,
                rejectWithError: !0
            });
            (null == e ? void 0 : e.logPerf) &&
                (0, g.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: g.a.CATEGORIES_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                    cacheDisabled: null == e ? void 0 : e.noCache
                }),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                    categories: i.body.map(f.Z.fromServer),
                    noOp: t
                });
        } catch (t) {
            let e = new c.Hx(t);
            (0, b.G)(e),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: e
                });
        }
    },
    D = async (e) => {
        if (!d.Z.isFetching) {
            s.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let t = {
                    url: y.ANM.COLLECTIBLES_PURCHASES,
                    rejectWithError: !0
                };
                (null == e ? void 0 : e.variantsReturnStyle) === o.v.VARIANTS_GROUP && (t.query = { variants_return_style: o.v.VARIANTS_GROUP });
                let n = await a.tn.get(t);
                s.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: n.body.map(h.Z.fromServer)
                });
            } catch (t) {
                let e = new c.Hx(t);
                throw (
                    (s.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: e
                    }),
                    e)
                );
            }
        }
    },
    L = async (e, t) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let r = await a.tn.get({
                url: y.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n,
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: p.Z.fromServer(r.body)
            });
        } catch (n) {
            let t = new c.Hx(n);
            (0, b.G)(t),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: t
                });
        }
    },
    x = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var t;
            let n = await a.tn.put({
                url: y.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null == (t = n.body) ? void 0 : t.map(h.Z.fromServer)
            });
        } catch (n) {
            let t = new c.Hx(n);
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: t
                }),
                t)
            );
        }
    },
    M = async (e, t) => {
        try {
            return (
                await a.tn.get({
                    url: y.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    },
                    rejectWithError: !0
                })
            ).body.valid;
        } catch (e) {
            return (0, b.G)(new c.Hx(e)), !1;
        }
    },
    k = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.tn.get({
                url: y.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: _.s.fromServer(e.body)
            });
        } catch (e) {
            (0, b.G)(new c.Hx(e)), s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' });
        }
    },
    j = async (e, t, n) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_HOME_FETCH',
            tab: e,
            options: null != t ? t : {}
        });
        let r = (0, E.nW)(t, e);
        (null == t ? void 0 : t.logPerf) &&
            (0, g.n)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: g.a.SHOP_HOME_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                isFullScreen: null == n ? void 0 : n.isFullScreen,
                unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                cacheDisabled: null == t ? void 0 : t.noCache
            });
        try {
            let i = await a.tn.get({
                url: y.ANM.COLLECTIBLES_SHOP,
                query: r,
                rejectWithError: !0
            });
            (null == t ? void 0 : t.logPerf) &&
                (0, g.n)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: g.a.SHOP_HOME_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    isFullScreen: null == n ? void 0 : n.isFullScreen,
                    unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                    cacheDisabled: null == t ? void 0 : t.noCache
                }),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS',
                    tab: e,
                    shopHome: m.Y.fromServer(i.body)
                });
        } catch (n) {
            let t = new c.Hx(n);
            (0, b.G)(t),
                s.Z.dispatch({
                    type: 'COLLECTIBLES_SHOP_HOME_FETCH_FAILURE',
                    tab: e,
                    error: t
                });
        }
    },
    U = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE',
            shopHomeConfigOverride: e
        });
    },
    G = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_SKIP_NUM_CATEGORIES',
            skipNumCategories: e
        });
    };
