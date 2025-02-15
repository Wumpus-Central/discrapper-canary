n.d(t, {
    ZP: () => d,
    c7: () => c
}),
    n(47120);
var i = n(192379),
    r = n(399606),
    a = n(634894),
    s = n(335131),
    o = n(1870),
    l = n(228624),
    u = n(267097);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = 'useFetchPurchases';
    (0, a.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let u = (0, l.hv)('useFetchPurchases'),
        [c, d, f, _, p, h] = (0, r.Wu)([o.Z], () => [o.Z.isFetching, o.Z.isClaiming, o.Z.fetchError, o.Z.claimError, o.Z.purchases, o.Z.hasPreviouslyFetched]),
        m = (0, i.useRef)(o.Z.hasPreviouslyFetched);
    (0, i.useEffect)(() => {
        m.current = h;
    }, [h]);
    let g = (0, i.useRef)(o.Z.fetchError);
    return (
        (0, i.useEffect)(() => {
            g.current = f;
        }, [f]),
        (0, i.useEffect)(() => {
            (!0 !== e || !m.current || null != g.current) &&
                (0, s.qg)({
                    variantsReturnStyle: u,
                    location: t
                });
        }, [t, e, u]),
        {
            isClaiming: d,
            fetchPurchasesError: f,
            claimError: _,
            isFetching: c,
            purchases: p,
            hasPreviouslyFetched: h
        }
    );
}
function d(e) {
    let t = null == e ? void 0 : e.paymentGateway,
        n = 'useFetchCollectiblesCategoriesAndPurchases';
    (0, a.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let {
            isFetching: i,
            categories: r,
            fetchCategoriesError: s,
            refreshCategories: o
        } = (0, u.Z)({
            paymentGateway: t,
            noOp: null == e ? void 0 : e.noOp
        }),
        { isClaiming: l, fetchPurchasesError: d, claimError: f, isFetching: _, purchases: p, hasPreviouslyFetched: h } = c(null == e ? void 0 : e.stalePurchasesOK, null == e ? void 0 : e.location);
    return {
        isFetching: i || _,
        isFetchingCategories: i,
        isFetchingPurchases: _,
        isClaiming: l,
        categories: r,
        purchases: p,
        fetchCategoriesError: s,
        fetchPurchasesError: d,
        claimError: f,
        refreshCategories: o,
        hasPreviouslyFetched: h
    };
}
