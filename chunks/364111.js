r.d(t, { E: () => O }), r(388685);
var n = r(647438),
    o = r(311570),
    s = r(442837),
    i = r(353926),
    u = r(358085),
    c = r(335131),
    l = r(597688),
    a = r(52030),
    p = r(447988);
let f = o.v.VARIANTS_GROUP;
function O(e, t, r) {
    let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        O = (0, s.e7)([i.Z], () => i.Z.hasLoadedExperiments),
        d = (0, s.e7)([l.Z], () => l.Z.skipNumCategories),
        b = (0, u.isDesktop)() || (0, u.isWeb)(),
        [S, h, g, y, m, v, _, I] = (0, s.Wu)([a.Z], () => {
            var t, r;
            return [
                a.Z.getShopBlocks(e),
                null != (t = a.Z.getLastSuccessfulFetch(e)) ? t : 0,
                null != (r = a.Z.getLastErrorTimestamp(e)) ? r : 0,
                a.Z.getLastFetchOptions(e),
                a.Z.getFetchShopHomeError(e),
                a.Z.getIsFetchingShopHome(e),
                a.Z.getHasKnownStaleData(e),
                a.Z.getShopHomeConfigOverride(),
            ];
        }),
        P = (0, n.useMemo)(() => {
            var e, r;
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, t)),
                (r = r =
                    {
                        variantsReturnStyle: f,
                        includeBundles: b,
                        includePopularPicks: !0,
                        includeDynamicBlocks: !0,
                        shopHomeConfig: I,
                        skipNumCategories: d,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      }),
                e
            );
        }, [t, b, I, d]),
        E = (0, n.useMemo)(() => !(0, c.oc)(y, P), [y, P]),
        j = (0, p.J)(S, null != v && v, o),
        w = (0, n.useMemo)(() => !j && Date.now() - h < 600000, [h, j]);
    return (
        (0, n.useEffect)(() => {
            if (!O || v) return;
            let t = Date.now() - g < 600000;
            (null == m || !t) && (E || !w || _) && (0, c.Ov)(e, P, r);
        }, [O, v, m, g, w, _, E, P, e, r]),
        {
            isFetchingShopHome: v,
            fetchShopHomeError: m,
            shopBlocks: S,
            refreshShopHome: (0, n.useCallback)(() => {
                (0, c.Ov)(e, P, r);
            }, [e, P, r]),
        }
    );
}
