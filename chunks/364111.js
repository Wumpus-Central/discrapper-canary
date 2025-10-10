n.d(t, { E: () => f }), n(388685);
var r = n(647438),
    i = n(311570),
    l = n(442837),
    a = n(353926),
    o = n(358085),
    s = n(335131),
    c = n(597688),
    u = n(52030),
    d = n(447988);
let p = i.v.VARIANTS_GROUP;
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        f = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        h = (0, l.e7)([c.Z], () => c.Z.skipNumCategories),
        g = (0, o.isDesktop)() || (0, o.isWeb)(),
        [m, b, _, O, E, y, v, I] = (0, l.Wu)([u.Z], () => {
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
        S = (0, r.useMemo)(() => {
            var e, n;
            return (
                (e = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t)),
                (n = n =
                    {
                        variantsReturnStyle: p,
                        includeBundles: g,
                        includePopularPicks: !0,
                        includeDynamicBlocks: !0,
                        shopHomeConfig: I,
                        skipNumCategories: h,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      }),
                e
            );
        }, [t, g, I, h]),
        C = (0, r.useMemo)(() => !(0, s.oc)(O, S), [O, S]),
        T = (0, d.J)(m, null != y && y, i),
        N = (0, r.useMemo)(() => !T && Date.now() - b < 600000, [b, T]);
    return (
        (0, r.useEffect)(() => {
            if (!f || y) return;
            let t = Date.now() - _ < 600000;
            (null == E || !t) && (C || !N || v) && (0, s.Ov)(e, S, n);
        }, [f, y, E, _, N, v, C, S, e, n]),
        {
            isFetchingShopHome: y,
            fetchShopHomeError: E,
            shopBlocks: m,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, s.Ov)(e, S, n);
            }, [e, S, n]),
        }
    );
}
