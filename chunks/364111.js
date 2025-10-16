n.d(t, { E: () => b }), n(388685);
var r = n(647438),
    i = n(311570),
    a = n(442837),
    o = n(353926),
    s = n(358085),
    l = n(335131),
    c = n(597688),
    u = n(52030),
    d = n(447988);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
let m = 600000,
    g = 600000,
    E = i.v.VARIANTS_GROUP;
function b(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        f = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
        p = (0, a.e7)([c.Z], () => c.Z.skipNumCategories),
        b = (0, s.isDesktop)() || (0, s.isWeb)(),
        [y, O, v, I, T, S, A, C] = (0, a.Wu)([u.Z], () => {
            var t, n;
            return [
                u.Z.getShopBlocks(e),
                null != (t = u.Z.getLastSuccessfulFetch(e)) ? t : 0,
                null != (n = u.Z.getLastErrorTimestamp(e)) ? n : 0,
                u.Z.getLastFetchOptions(e),
                u.Z.getFetchShopHomeError(e),
                u.Z.getIsFetchingShopHome(e),
                u.Z.getHasKnownStaleData(e),
                u.Z.getShopHomeConfigOverride(),
            ];
        }),
        N = (0, r.useMemo)(
            () =>
                h(_({}, t), {
                    variantsReturnStyle: E,
                    includeBundles: b,
                    includePopularPicks: !0,
                    includeDynamicBlocks: !0,
                    shopHomeConfig: C,
                    skipNumCategories: p,
                }),
            [t, b, C, p],
        ),
        R = (0, r.useMemo)(() => !(0, l.oc)(I, N), [I, N]),
        P = (0, d.J)(y, null != S && S, i),
        w = (0, r.useMemo)(() => !P && Date.now() - O < m, [O, P]);
    return (
        (0, r.useEffect)(() => {
            if (!f || S) return;
            let t = Date.now() - v < g;
            (null == T || !t) && (R || !w || A) && (0, l.Ov)(e, N, n);
        }, [f, S, T, v, w, A, R, N, e, n]),
        {
            isFetchingShopHome: S,
            fetchShopHomeError: T,
            shopBlocks: y,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, l.Ov)(e, N, n);
            }, [e, N, n]),
        }
    );
}
