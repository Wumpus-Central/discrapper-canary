n.d(t, { E: () => u }), n(388685);
var r = n(192379),
    i = n(442837),
    l = n(353926),
    a = n(358085),
    o = n(335131),
    s = n(52030),
    c = n(228624);
function u(e, t, n) {
    let u = (0, i.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        d = (0, c.hv)('useMaybeFetchCollectiblesShopHome'),
        p = (0, a.isDesktop)() || (0, a.isWeb)(),
        [h, f, g, m, b, _, E] = (0, i.Wu)([s.Z], () => {
            var t, n;
            return [s.Z.getShopBlocks(e), null != (t = s.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = s.Z.getLastErrorTimestamp(e)) ? n : 0, s.Z.getLastFetchOptions(e), s.Z.getFetchShopHomeError(e), s.Z.getIsFetchingShopHome(e), s.Z.getShopHomeConfigOverride()];
        }),
        O = (0, r.useMemo)(() => {
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
                        variantsReturnStyle: d,
                        includeBundles: p,
                        includePopularPicks: !0,
                        includeDynamicBlocks: !0,
                        shopHomeConfig: E
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
        }, [t, d, p, E]),
        y = (0, r.useMemo)(() => !(0, o.oc)(m, O), [m, O]),
        I = (0, r.useMemo)(() => Date.now() - f < 600000, [f]);
    return (
        (0, r.useEffect)(() => {
            if (!u || _) return;
            let t = Date.now() - g < 600000;
            (null != b && t) || ((y || !I) && (0, o.Ov)(e, O, n));
        }, [u, _, b, g, I, y, O, e, n]),
        {
            isFetchingShopHome: _,
            fetchShopHomeError: b,
            shopBlocks: h,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, o.Ov)(e, O, n);
            }, [e, O, n])
        }
    );
}
