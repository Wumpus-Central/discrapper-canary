(n.d(t, { e: () => h }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(353926),
    o = n(335131),
    s = n(597688),
    l = n(228624);
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
function _(e, t) {
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
let f = 600000,
    p = 600000;
function h(e, t, n) {
    let c = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        d = null == e ? void 0 : e.includeBundles,
        h = (0, l.hv)('useMaybeFetchCollectiblesCategoriesShared'),
        [m, g, E, b, y, O, v] = (0, i.Wu)([s.Z], () => {
            var e, t;
            return [s.Z.isFetchingCategories, s.Z.lastFetchOptions, s.Z.error, null != (e = s.Z.lastErrorTimestamp) ? e : 0, null != (t = s.Z.lastSuccessfulFetch) ? t : 0, s.Z.categories, s.Z.skipNumCategories];
        });
    return (
        (0, r.useEffect)(() => {
            if (!c || m) return;
            let r = Date.now() - b < p;
            if (E && r) return;
            let i = _(u({}, e), {
                    includeBundles: d,
                    variantsReturnStyle: h,
                    skipNumCategories: v
                }),
                a = !(0, o.oc)(g, i),
                s = Date.now() - y < f;
            (a || !s) && (0, o.F$)(i, t, n);
        }, [c, m, g, y, e, E, d, b, h, t, n, v]),
        {
            isFetching: m,
            categories: O,
            fetchCategoriesError: E,
            refreshCategories: (0, r.useCallback)(() => {
                let t = _(u({}, e), {
                    includeBundles: d,
                    skipNumCategories: v
                });
                (0, o.F$)(t, void 0, n);
            }, [e, d, n, v])
        }
    );
}
