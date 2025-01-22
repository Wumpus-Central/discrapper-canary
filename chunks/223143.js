r.d(n, {
    ZP: function () {
        return p;
    },
    c7: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(399606),
    s = r(634894),
    l = r(335131),
    u = r(1870),
    c = r(228624),
    d = r(267097);
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 ? arguments[1] : void 0,
        r = 'useFetchPurchases';
    (0, s.j)({
        location: r + ' auto on',
        autoTrackExposure: !0
    }),
        (0, s.j)({
            location: r + ' auto off',
            autoTrackExposure: !1
        });
    let i = (0, c.hv)('useFetchPurchases'),
        [d, f, p, h, _, m] = (0, o.Wu)([u.Z], () => [u.Z.isFetching, u.Z.isClaiming, u.Z.fetchError, u.Z.claimError, u.Z.purchases, u.Z.hasPreviouslyFetched]),
        g = (0, a.useRef)(u.Z.hasPreviouslyFetched);
    (0, a.useEffect)(() => {
        g.current = m;
    }, [m]);
    let E = (0, a.useRef)(u.Z.fetchError);
    return (
        (0, a.useEffect)(() => {
            E.current = p;
        }, [p]),
        (0, a.useEffect)(() => {
            if (!0 !== e || !g.current || null != E.current)
                (0, l.qg)({
                    variantsReturnStyle: i,
                    location: n
                });
        }, [n, e, i]),
        {
            isClaiming: f,
            fetchPurchasesError: p,
            claimError: h,
            isFetching: d,
            purchases: _,
            hasPreviouslyFetched: m
        }
    );
}
function p(e) {
    let n = null == e ? void 0 : e.paymentGateway,
        r = 'useFetchCollectiblesCategoriesAndPurchases';
    (0, s.j)({
        location: r + ' auto on',
        autoTrackExposure: !0
    }),
        (0, s.j)({
            location: r + ' auto off',
            autoTrackExposure: !1
        });
    let { isFetching: i, categories: a, fetchCategoriesError: o, refreshCategories: l } = (0, d.Z)({ paymentGateway: n }),
        { isClaiming: u, fetchPurchasesError: c, claimError: p, isFetching: h, purchases: _, hasPreviouslyFetched: m } = f(null == e ? void 0 : e.stalePurchasesOK, null == e ? void 0 : e.location);
    return {
        isFetching: i || h,
        isFetchingCategories: i,
        isFetchingPurchases: h,
        isClaiming: u,
        categories: a,
        purchases: _,
        fetchCategoriesError: o,
        fetchPurchasesError: c,
        claimError: p,
        refreshCategories: l,
        hasPreviouslyFetched: m
    };
}
