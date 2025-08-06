(n.d(t, {
    ZP: () => p,
    c7: () => _,
    mw: () => h
}),
    n(388685));
var r = n(73800),
    i = n(399606),
    o = n(335131),
    a = n(1870),
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
function u(e) {
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
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = (0, s.hv)('useFetchPurchases'),
        [l, c, u, d, f, _] = (0, i.Wu)([a.Z], () => [a.Z.isFetching, a.Z.isClaiming, a.Z.fetchError, a.Z.claimError, a.Z.purchases, a.Z.hasPreviouslyFetched]),
        p = (0, r.useRef)(a.Z.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        p.current = _;
    }, [_]);
    let h = (0, r.useRef)(a.Z.fetchError);
    return (
        (0, r.useEffect)(() => {
            h.current = u;
        }, [u]),
        (0, r.useEffect)(() => {
            (!0 === e && p.current && null == h.current) ||
                (0, o.qg)({
                    variantsReturnStyle: n,
                    location: t
                });
        }, [t, e, n]),
        {
            isClaiming: c,
            fetchPurchasesError: u,
            claimError: d,
            isFetching: l,
            purchases: f,
            hasPreviouslyFetched: _
        }
    );
}
function p(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: o,
            refreshCategories: a
        } = (0, l.Z)(
            {
                paymentGateway: n,
                noOp: null == e ? void 0 : e.noOp,
                logPerf: null == e ? void 0 : e.logPerf,
                countryCode: null == e ? void 0 : e.countryCode
            },
            t
        ),
        { isClaiming: s, fetchPurchasesError: c, claimError: u, isFetching: d, purchases: f, hasPreviouslyFetched: p } = _(null == e ? void 0 : e.stalePurchasesOK, null == e ? void 0 : e.location);
    return {
        isFetching: r || d,
        isFetchingCategories: r,
        isFetchingPurchases: d,
        isClaiming: s,
        categories: i,
        purchases: f,
        fetchCategoriesError: o,
        fetchPurchasesError: c,
        claimError: u,
        refreshCategories: a,
        hasPreviouslyFetched: p
    };
}
let h = (e) => p(f(u({}, null != e ? e : {}), { stalePurchasesOK: !0 }));
