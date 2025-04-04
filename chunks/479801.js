n.d(t, { e: () => m }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(634894),
    a = n(353926),
    s = n(335131),
    l = n(597688),
    c = n(228624);
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function _(e, t) {
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
let p = 600000,
    h = 600000;
function m(e, t) {
    let n = 'useMaybeFetchCollectiblesCategories';
    (0, o.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let u = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        f = null == e ? void 0 : e.includeBundles,
        m = (0, c.hv)('useMaybeFetchCollectiblesCategoriesShared'),
        [g, E, b, y, v, O] = (0, i.Wu)([l.Z], () => {
            var e, t;
            return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null != (e = l.Z.lastErrorTimestamp) ? e : 0, null != (t = l.Z.lastSuccessfulFetch) ? t : 0, l.Z.categories];
        });
    return (
        (0, r.useEffect)(() => {
            if (!u || g) return;
            let n = Date.now() - y < h;
            if (b && n) return;
            let r = _(d({}, e), {
                    includeBundles: f,
                    variantsReturnStyle: m
                }),
                i = !(0, s.oc)(E, r),
                o = Date.now() - v < p;
            (i || !o) && (0, s.F$)(r, t);
        }, [u, g, E, v, e, b, f, y, m, t]),
        {
            isFetching: g,
            categories: O,
            fetchCategoriesError: b,
            refreshCategories: (0, r.useCallback)(() => {
                let t = _(d({}, e), { includeBundles: f });
                (0, s.F$)(t);
            }, [e, f])
        }
    );
}
