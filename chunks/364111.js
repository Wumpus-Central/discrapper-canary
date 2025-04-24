n.d(t, { E: () => d }), n(388685);
var r = n(192379),
    i = n(442837),
    l = n(353926),
    a = n(358085),
    o = n(335131),
    s = n(597688),
    c = n(52030),
    u = n(228624);
function d(e, t, n) {
    let d = (0, i.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        p = (0, i.e7)([s.Z], () => s.Z.skipNumCategories),
        h = (0, u.hv)('useMaybeFetchCollectiblesShopHome'),
        f = (0, a.isDesktop)() || (0, a.isWeb)(),
        [g, m, b, _, E, O, y] = (0, i.Wu)([c.Z], () => {
            var t, n;
            return [c.Z.getShopBlocks(e), null != (t = c.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = c.Z.getLastErrorTimestamp(e)) ? n : 0, c.Z.getLastFetchOptions(e), c.Z.getFetchShopHomeError(e), c.Z.getIsFetchingShopHome(e), c.Z.getShopHomeConfigOverride()];
        }),
        I = (0, r.useMemo)(() => {
            var e, n;
            return (
                (e = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t)),
                (n = n =
                    {
                        variantsReturnStyle: h,
                        includeBundles: f,
                        includePopularPicks: !0,
                        includeDynamicBlocks: !0,
                        shopHomeConfig: y,
                        skipNumCategories: p
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
        }, [t, h, f, y, p]),
        v = (0, r.useMemo)(() => !(0, o.oc)(_, I), [_, I]),
        C = (0, r.useMemo)(() => Date.now() - m < 600000, [m]);
    return (
        (0, r.useEffect)(() => {
            if (!d || O) return;
            let t = Date.now() - b < 600000;
            (null != E && t) || ((v || !C) && (0, o.Ov)(e, I, n));
        }, [d, O, E, b, C, v, I, e, n]),
        {
            isFetchingShopHome: O,
            fetchShopHomeError: E,
            shopBlocks: g,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, o.Ov)(e, I, n);
            }, [e, I, n])
        }
    );
}
