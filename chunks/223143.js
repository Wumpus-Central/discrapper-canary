(n.d(t, {
    ZP: () => _,
    c7: () => d
}),
    n(388685));
var r = n(73800),
    i = n(399606),
    a = n(335131),
    o = n(1870),
    s = n(228624),
    l = n(267097);
function c(e, t, n) {
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
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = (0, s.hv)('useFetchPurchases'),
        [l, c, u, d, _, f] = (0, i.Wu)([o.Z], () => [o.Z.isFetching, o.Z.isClaiming, o.Z.fetchError, o.Z.claimError, o.Z.purchases, o.Z.hasPreviouslyFetched]),
        p = (0, r.useRef)(o.Z.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        p.current = f;
    }, [f]);
    let h = (0, r.useRef)(o.Z.fetchError);
    return (
        (0, r.useEffect)(() => {
            h.current = u;
        }, [u]),
        (0, r.useEffect)(() => {
            (!0 === e && p.current && null == h.current) ||
                (0, a.qg)({
                    variantsReturnStyle: n,
                    location: t
                });
        }, [t, e, n]),
        {
            isClaiming: c,
            fetchPurchasesError: u,
            claimError: d,
            isFetching: l,
            purchases: _,
            hasPreviouslyFetched: f
        }
    );
}
function _(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: a,
            refreshCategories: o
        } = (0, l.Z)(
            {
                paymentGateway: n,
                noOp: null == e ? void 0 : e.noOp,
                logPerf: null == e ? void 0 : e.logPerf,
                countryCode: null == e ? void 0 : e.countryCode
            },
            t
        ),
        { isClaiming: s, fetchPurchasesError: c, claimError: u, isFetching: _, purchases: f, hasPreviouslyFetched: p } = d(null == e ? void 0 : e.stalePurchasesOK, null == e ? void 0 : e.location);
    return {
        isFetching: r || _,
        isFetchingCategories: r,
        isFetchingPurchases: _,
        isClaiming: s,
        categories: i,
        purchases: f,
        fetchCategoriesError: a,
        fetchPurchasesError: c,
        claimError: u,
        refreshCategories: o,
        hasPreviouslyFetched: p
    };
}
