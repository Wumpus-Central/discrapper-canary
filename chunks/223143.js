n.d(t, {
    ZP: () => p,
    c7: () => f
}),
    n(47120);
var r = n(192379),
    i = n(399606),
    o = n(634894),
    a = n(335131),
    s = n(1870),
    l = n(228624),
    c = n(267097);
function u(e, t, n) {
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
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = 'useFetchPurchases';
    (0, o.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let c = (0, l.hv)('useFetchPurchases'),
        [u, d, f, p, _, h] = (0, i.Wu)([s.Z], () => [s.Z.isFetching, s.Z.isClaiming, s.Z.fetchError, s.Z.claimError, s.Z.purchases, s.Z.hasPreviouslyFetched]),
        m = (0, r.useRef)(s.Z.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        m.current = h;
    }, [h]);
    let g = (0, r.useRef)(s.Z.fetchError);
    return (
        (0, r.useEffect)(() => {
            g.current = f;
        }, [f]),
        (0, r.useEffect)(() => {
            (!0 !== e || !m.current || null != g.current) &&
                (0, a.qg)({
                    variantsReturnStyle: c,
                    location: t
                });
        }, [t, e, c]),
        {
            isClaiming: d,
            fetchPurchasesError: f,
            claimError: p,
            isFetching: u,
            purchases: _,
            hasPreviouslyFetched: h
        }
    );
}
function p(e) {
    let t = null == e ? void 0 : e.paymentGateway,
        n = 'useFetchCollectiblesCategoriesAndPurchases';
    (0, o.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let {
            isFetching: r,
            categories: i,
            fetchCategoriesError: a,
            refreshCategories: s
        } = (0, c.Z)({
            paymentGateway: t,
            noOp: null == e ? void 0 : e.noOp
        }),
        { isClaiming: l, fetchPurchasesError: u, claimError: d, isFetching: p, purchases: _, hasPreviouslyFetched: h } = f(null == e ? void 0 : e.stalePurchasesOK, null == e ? void 0 : e.location);
    return {
        isFetching: r || p,
        isFetchingCategories: r,
        isFetchingPurchases: p,
        isClaiming: l,
        categories: i,
        purchases: _,
        fetchCategoriesError: a,
        fetchPurchasesError: u,
        claimError: d,
        refreshCategories: s,
        hasPreviouslyFetched: h
    };
}
