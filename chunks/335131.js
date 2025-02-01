n.d(t, {
    B1: () => D,
    DR: () => T,
    F$: () => N,
    K$: () => x,
    Ov: () => P,
    R2: () => L,
    Sm: () => y,
    fK: () => O,
    jr: () => R,
    mK: () => I,
    oK: () => b,
    oc: () => A,
    qg: () => C
});
var i = n(561842),
    r = n(664081),
    a = n(311570),
    s = n(544891),
    o = n(570140),
    l = n(37234),
    u = n(881052);
n(777639);
var c = n(703656),
    d = n(1870),
    f = n(549616),
    _ = n(833798),
    p = n(778787),
    h = n(161226),
    m = n(251728),
    g = n(578976),
    E = n(439170),
    v = n(981631);
n(597688), n(574709), n(328347), n(874703), n(52030);
let y = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...e
        });
    },
    I = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        y(n), t ? (0, l.jN)(v.S9g.COLLECTIBLES_SHOP) : (0, c.uL)(v.Z5c.COLLECTIBLES_SHOP);
    },
    T = () => {
        o.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, l.xf)();
    },
    b = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    S = (e, t) => !!e == !!t,
    A = (e, t) => S(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && S(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && S(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && S(null == e ? void 0 : e.includePopularPicks, null == t ? void 0 : t.includePopularPicks) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    N = async (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = (0, g.n)(e);
        try {
            let e = await s.tn.get({
                url: v.ANM.COLLECTIBLES_CATEGORIES,
                query: t,
                rejectWithError: !0
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(f.Z.fromServer)
            });
        } catch (t) {
            let e = new u.Hx(t);
            (0, E.G)(e),
                o.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: e
                });
        }
    },
    C = async (e) => {
        if (!d.Z.isFetching) {
            o.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let t = {
                    url: v.ANM.COLLECTIBLES_PURCHASES,
                    rejectWithError: !0
                };
                (null == e ? void 0 : e.variantsReturnStyle) === a.v.VARIANTS_GROUP && (t.query = { variants_return_style: a.v.VARIANTS_GROUP });
                let n = await s.tn.get(t);
                o.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: n.body.map(h.Z.fromServer)
                });
            } catch (t) {
                let e = new u.Hx(t);
                throw (
                    (o.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: e
                    }),
                    e)
                );
            }
        }
    },
    R = async (e, t) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let i = await s.tn.get({
                url: v.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n,
                rejectWithError: !0
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: p.Z.fromServer(i.body)
            });
        } catch (n) {
            let t = new u.Hx(n);
            (0, E.G)(t),
                o.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: t
                });
        }
    },
    O = async (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var t;
            let n = await s.tn.put({
                url: v.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(h.Z.fromServer)
            });
        } catch (n) {
            let t = new u.Hx(n);
            throw (
                (o.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: t
                }),
                t)
            );
        }
    },
    D = async (e, t) => {
        try {
            return (
                await s.tn.get({
                    url: v.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    },
                    rejectWithError: !0
                })
            ).body.valid;
        } catch (e) {
            return (0, E.G)(new u.Hx(e)), !1;
        }
    },
    x = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    L = async (e) => {
        let { release: t = r.P.PROD } = e;
        o.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: i.h.DESKTOP };
        t !== r.P.PROD && (n.release = t);
        try {
            let e = await s.tn.get({
                url: v.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: _.s.fromServer(e.body)
            });
        } catch (e) {
            (0, E.G)(new u.Hx(e)), o.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' });
        }
    },
    P = async (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_HOME_FETCH',
            options: null != e ? e : {}
        });
        let t = (0, g.n)(e);
        try {
            let e = await s.tn.get({
                url: v.ANM.COLLECTIBLES_SHOP_HOME,
                query: t,
                rejectWithError: !0
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS',
                shopHome: m.Y.fromServer(e.body)
            });
        } catch (t) {
            let e = new u.Hx(t);
            (0, E.G)(e),
                o.Z.dispatch({
                    type: 'COLLECTIBLES_SHOP_HOME_FETCH_FAILURE',
                    error: e
                });
        }
    };
