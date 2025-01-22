r.d(n, {
    B1: function () {
        return x;
    },
    DR: function () {
        return T;
    },
    F$: function () {
        return N;
    },
    K$: function () {
        return L;
    },
    Ov: function () {
        return P;
    },
    R2: function () {
        return w;
    },
    Sm: function () {
        return b;
    },
    fK: function () {
        return D;
    },
    jr: function () {
        return O;
    },
    mK: function () {
        return I;
    },
    oK: function () {
        return S;
    },
    oc: function () {
        return C;
    },
    qg: function () {
        return R;
    }
});
var i = r(561842),
    a = r(664081),
    o = r(311570),
    s = r(544891),
    l = r(570140),
    u = r(37234),
    c = r(881052),
    d = r(703656),
    f = r(1870),
    p = r(549616),
    h = r(833798),
    _ = r(778787),
    m = r(161226),
    g = r(251728),
    E = r(578976),
    v = r(439170),
    y = r(981631);
r(597688), r(574709), r(328347), r(874703), r(52030);
let b = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...e
        });
    },
    I = (e) => {
        let { openInLayer: n = !0, ...r } = e;
        b(r);
        n ? (0, u.jN)(y.S9g.COLLECTIBLES_SHOP) : (0, d.uL)(y.Z5c.COLLECTIBLES_SHOP);
    },
    T = () => {
        l.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, u.xf)();
    },
    S = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    A = (e, n) => !!e == !!n,
    C = (e, n) => A(null == e ? void 0 : e.noCache, null == n ? void 0 : n.noCache) && A(null == e ? void 0 : e.includeUnpublished, null == n ? void 0 : n.includeUnpublished) && A(null == e ? void 0 : e.includeBundles, null == n ? void 0 : n.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == n ? void 0 : n.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == n ? void 0 : n.paymentGateway),
    N = async (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let n = (0, E.n)(e);
        try {
            let e = await s.tn.get({
                url: y.ANM.COLLECTIBLES_CATEGORIES,
                query: n,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(p.Z.fromServer)
            });
        } catch (n) {
            let e = new c.Hx(n);
            (0, v.G)(e),
                l.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: e
                });
        }
    },
    R = async (e) => {
        if (!f.Z.isFetching) {
            l.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let n = {
                    url: y.ANM.COLLECTIBLES_PURCHASES,
                    rejectWithError: !0
                };
                (null == e ? void 0 : e.variantsReturnStyle) === o.v.VARIANTS_GROUP && (n.query = { variants_return_style: o.v.VARIANTS_GROUP });
                let r = await s.tn.get(n);
                l.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: r.body.map(m.Z.fromServer)
                });
            } catch (n) {
                let e = new c.Hx(n);
                throw (
                    (l.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: e
                    }),
                    e)
                );
            }
        }
    },
    O = async (e, n) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let r = {};
            (null == n ? void 0 : n.countryCode) !== null && (r.country_code = null == n ? void 0 : n.countryCode), (null == n ? void 0 : n.paymentGateway) !== null && (r.payment_gateway = null == n ? void 0 : n.paymentGateway);
            let i = await s.tn.get({
                url: y.ANM.COLLECTIBLES_PRODUCTS(e),
                query: r,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: _.Z.fromServer(i.body)
            });
        } catch (r) {
            let n = new c.Hx(r);
            (0, v.G)(n),
                l.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: n
                });
        }
    },
    D = async (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var n;
            let r = await s.tn.put({
                url: y.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (n = r.body) || void 0 === n ? void 0 : n.map(m.Z.fromServer)
            });
        } catch (r) {
            let n = new c.Hx(r);
            throw (
                (l.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: n
                }),
                n)
            );
        }
    },
    x = async (e, n) => {
        try {
            return (
                await s.tn.get({
                    url: y.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: n,
                        recipient_id: e
                    },
                    rejectWithError: !0
                })
            ).body.valid;
        } catch (e) {
            return (0, v.G)(new c.Hx(e)), !1;
        }
    },
    L = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    w = async (e) => {
        let { release: n = a.P.PROD } = e;
        l.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let r = { platform: i.h.DESKTOP };
        n !== a.P.PROD && (r.release = n);
        try {
            let e = await s.tn.get({
                url: y.ANM.COLLECTIBLES_MARKETING,
                query: r,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: h.s.fromServer(e.body)
            });
        } catch (e) {
            (0, v.G)(new c.Hx(e)), l.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' });
        }
    },
    P = async (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_HOME_FETCH',
            options: null != e ? e : {}
        });
        let n = (0, E.n)(e);
        try {
            let e = await s.tn.get({
                url: y.ANM.COLLECTIBLES_SHOP_HOME,
                query: n,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS',
                shopHome: g.Y.fromServer(e.body)
            });
        } catch (n) {
            let e = new c.Hx(n);
            (0, v.G)(e),
                l.Z.dispatch({
                    type: 'COLLECTIBLES_SHOP_HOME_FETCH_FAILURE',
                    error: e
                });
        }
    };
