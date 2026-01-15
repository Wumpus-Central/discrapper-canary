n.d(t, {
    QJ: () => g,
    QN: () => h,
    ZP: () => E,
    c7: () => m,
    mw: () => b,
}),
    n(388685);
var r = n(473749),
    i = n(311570),
    a = n(399606),
    o = n(353926),
    s = n(335131),
    l = n(1870),
    c = n(952597),
    u = n(267097);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (0, c.a)("useFetchPurchases");
    let t = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
        n = i.v.VARIANTS_GROUP,
        [u, d, f, p, _, m] = (0, a.Wu)([l.Z], () => [
            l.Z.isFetching,
            l.Z.isClaiming,
            l.Z.fetchError,
            l.Z.claimError,
            l.Z.purchases,
            l.Z.hasPreviouslyFetched,
        ]),
        h = (0, r.useRef)(l.Z.hasPreviouslyFetched);
    (0, r.useEffect)(() => {
        h.current = m;
    }, [m]);
    let g = (0, r.useRef)(l.Z.fetchError);
    (0, r.useEffect)(() => {
        g.current = f;
    }, [f]);
    let E = (0, r.useRef)(l.Z.isFetching);
    return (
        (0, r.useEffect)(() => {
            E.current = u;
        }, [u]),
        (0, r.useEffect)(() => {
            !t || E.current || (!0 === e && h.current && null == g.current) || (0, s.qg)({ variantsReturnStyle: n });
        }, [e, n, t]),
        {
            isClaiming: d,
            fetchPurchasesError: f,
            claimError: p,
            isFetching: u,
            purchases: _,
            hasPreviouslyFetched: m,
        }
    );
}
n(25251);
let h = () => m(!0),
    g = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { purchases: n } = m(t);
        return null != e ? n.get(e) : void 0;
    };
function E(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        {
            isFetching: r,
            categories: i,
            fetchCategoriesError: a,
            refreshCategories: o,
        } = (0, u.Z)(
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
            fetchPurchasesError: l,
            claimError: c,
            isFetching: d,
            purchases: f,
            hasPreviouslyFetched: p,
        } = m(null == e ? void 0 : e.stalePurchasesOK);
    return {
        isFetching: r || d,
        isFetchingCategories: r,
        isFetchingPurchases: d,
        isClaiming: s,
        categories: i,
        purchases: f,
        fetchCategoriesError: a,
        fetchPurchasesError: l,
        claimError: c,
        refreshCategories: o,
        hasPreviouslyFetched: p,
    };
}
let b = (e) => E(_(f({}, null != e ? e : {}), { stalePurchasesOK: !0 }));
