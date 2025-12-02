n.d(t, {
    QN: () => m,
    ZP: () => h,
    c7: () => _,
    mw: () => g,
}),
    n(388685);
var r = n(473749),
    i = n(311570),
    a = n(399606),
    o = n(335131),
    s = n(1870),
    l = n(267097);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
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
n(25251);
let p = i.v.VARIANTS_GROUP;
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n, i, l, c, u] = (0, a.Wu)([s.Z], () => [
            s.Z.isFetching,
            s.Z.isClaiming,
            s.Z.fetchError,
            s.Z.claimError,
            s.Z.purchases,
            s.Z.hasPreviouslyFetched,
        ]),
        d = (0, r.useRef)(s.Z.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        d.current = u;
    }, [u]);
    let f = (0, r.useRef)(s.Z.fetchError);
    (0, r.useEffect)(() => {
        f.current = i;
    }, [i]);
    let _ = (0, r.useRef)(s.Z.isFetching);
    return (
        (0, r.useEffect)(() => {
            _.current = t;
        }, [t]),
        (0, r.useEffect)(() => {
            _.current || (!0 === e && d.current && null == f.current) || (0, o.qg)({ variantsReturnStyle: p });
        }, [e]),
        {
            isClaiming: n,
            fetchPurchasesError: i,
            claimError: l,
            isFetching: t,
            purchases: c,
            hasPreviouslyFetched: u,
        }
    );
}
let m = () => _(!0);
function h(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: a,
            refreshCategories: o,
        } = (0, l.Z)(
            {
                paymentGateway: n,
                noOp: null == e ? void 0 : e.noOp,
                logPerf: null == e ? void 0 : e.logPerf,
                countryCode: null == e ? void 0 : e.countryCode,
            },
            t,
        ),
        {
            isClaiming: s,
            fetchPurchasesError: c,
            claimError: u,
            isFetching: d,
            purchases: f,
            hasPreviouslyFetched: p,
        } = _(null == e ? void 0 : e.stalePurchasesOK);
    return {
        isFetching: r || d,
        isFetchingCategories: r,
        isFetchingPurchases: d,
        isClaiming: s,
        categories: i,
        purchases: f,
        fetchCategoriesError: a,
        fetchPurchasesError: c,
        claimError: u,
        refreshCategories: o,
        hasPreviouslyFetched: p,
    };
}
let g = (e) => h(f(u({}, null != e ? e : {}), { stalePurchasesOK: !0 }));
