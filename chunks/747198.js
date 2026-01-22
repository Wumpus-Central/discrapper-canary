n.d(t, { i: () => m }), n(896048);
var r = n(64700),
    i = n(635358),
    a = n(311907),
    s = n(49463),
    o = n(979286),
    l = n(590180),
    c = n(233525);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 600000,
    h = 600000;
function m(e, t, n) {
    (0, c.n)("useMaybeFetchCollectiblesCategoriesShared");
    let u = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
        f = null == e ? void 0 : e.includeBundles,
        m = i.g.VARIANTS_GROUP,
        [g, E, b, y, O, A, v] = (0, a.yK)([l.A], () => {
            var e, t;
            return [
                l.A.isFetchingCategories,
                l.A.lastFetchOptions,
                l.A.error,
                null != (e = l.A.lastErrorTimestamp) ? e : 0,
                null != (t = l.A.lastSuccessfulFetch) ? t : 0,
                l.A.categories,
                l.A.skipNumCategories,
            ];
        });
    return (
        (0, r.useEffect)(() => {
            if (!u || g) return;
            let r = Date.now() - y < h;
            if (b && r) return;
            let i = p(d({}, e), {
                    variantsReturnStyle: m,
                    includeBundles: f,
                    skipNumCategories: v,
                }),
                a = !(0, o.gn)(E, i),
                s = Date.now() - O < _;
            (a || !s) && (0, o.CK)(i, t, n);
        }, [u, g, E, O, e, b, f, y, t, n, v, m]),
        {
            isFetching: g,
            categories: A,
            fetchCategoriesError: b,
            refreshCategories: (0, r.useCallback)(() => {
                let t = p(d({}, e), {
                    variantsReturnStyle: m,
                    includeBundles: f,
                    skipNumCategories: v,
                });
                (0, o.CK)(t, void 0, n);
            }, [e, f, n, v, m]),
        }
    );
}
