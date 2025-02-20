n.d(t, { E: () => u }), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(353926),
    o = n(358085),
    a = n(335131),
    s = n(52030),
    c = n(228624);
function u(e, t) {
    let n = (0, i.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        u = (0, c.hv)('useMaybeFetchCollectiblesShopHome'),
        d = (0, o.isDesktop)() || (0, o.isWeb)(),
        [p, h, f, g, m, b] = (0, i.Wu)([s.Z], () => {
            var t, n;
            return [s.Z.getShopBlocks(e), null !== (t = s.Z.getLastSuccessfulFetch(e)) && void 0 !== t ? t : 0, null !== (n = s.Z.getLastErrorTimestamp(e)) && void 0 !== n ? n : 0, s.Z.getLastFetchOptions(e), s.Z.getFetchShopHomeError(e), s.Z.getIsFetchingShopHome(e)];
        }),
        _ = (0, r.useMemo)(() => {
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
                        variantsReturnStyle: u,
                        includeBundles: d,
                        includePopularPicks: !0,
                        includeDynamicBlocks: !0
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
        }, [t, u, d]),
        E = (0, r.useMemo)(() => !(0, a.oc)(g, _), [g, _]),
        O = (0, r.useMemo)(() => Date.now() - h < 600000, [h]);
    return (
        (0, r.useEffect)(() => {
            if (!n || b) return;
            let t = Date.now() - f < 600000;
            (null == m || !t) && (E || !O) && (0, a.Ov)(e, _);
        }, [n, b, m, f, O, E, _, e]),
        {
            isFetchingShopHome: b,
            fetchShopHomeError: m,
            shopBlocks: p,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, a.Ov)(e, _);
            }, [e, _])
        }
    );
}
