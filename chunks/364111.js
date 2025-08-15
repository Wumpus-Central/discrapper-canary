n.d(t, { E: () => p }), n(388685);
var r = n(647438),
    i = n(311570),
    l = n(442837),
    a = n(353926),
    o = n(358085),
    s = n(335131),
    c = n(597688),
    u = n(52030);
let d = i.v.VARIANTS_GROUP;
function p(e, t, n) {
    let i = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        p = (0, l.e7)([c.Z], () => c.Z.skipNumCategories),
        f = (0, o.isDesktop)() || (0, o.isWeb)(),
        [h, g, m, b, _, O, E, y] = (0, l.Wu)([u.Z], () => {
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
        v = (0, r.useMemo)(() => {
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
                        variantsReturnStyle: d,
                        includeBundles: f,
                        includePopularPicks: !0,
                        includeDynamicBlocks: !0,
                        shopHomeConfig: y,
                        skipNumCategories: p,
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
        }, [t, f, y, p]),
        I = (0, r.useMemo)(() => !(0, s.oc)(b, v), [b, v]),
        C = (0, r.useMemo)(() => Date.now() - g < 600000, [g]);
    return (
        (0, r.useEffect)(() => {
            if (!i || O) return;
            let t = Date.now() - m < 600000;
            (null == _ || !t) && (I || !C || E) && (0, s.Ov)(e, v, n);
        }, [i, O, _, m, C, E, I, v, e, n]),
        {
            isFetchingShopHome: O,
            fetchShopHomeError: _,
            shopBlocks: h,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, s.Ov)(e, v, n);
            }, [e, v, n]),
        }
    );
}
