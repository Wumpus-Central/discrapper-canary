n.d(t, { E: () => p }), n(388685);
var r = n(647438),
    i = n(311570),
    l = n(442837),
    a = n(353926),
    s = n(335131),
    o = n(597688),
    c = n(52030),
    u = n(447988);
let d = i.v.VARIANTS_GROUP;
function p(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        p = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        f = (0, l.e7)([o.Z], () => o.Z.skipNumCategories),
        [h, g, m, _, b, E, O, y] = (0, l.Wu)([c.Z], () => {
            var t, n;
            return [
                c.Z.getShopBlocks(e),
                null != (t = c.Z.getLastSuccessfulFetch(e)) ? t : 0,
                null != (n = c.Z.getLastErrorTimestamp(e)) ? n : 0,
                c.Z.getLastFetchOptions(e),
                c.Z.getFetchShopHomeError(e),
                c.Z.getIsFetchingShopHome(e),
                c.Z.getHasKnownStaleData(e),
                c.Z.getShopHomeConfigOverride(),
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
                        includeDynamicBlocks: !0,
                        shopHomeConfig: y,
                        skipNumCategories: f,
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
        }, [t, y, f]),
        I = (0, r.useMemo)(() => !(0, s.oc)(_, v), [_, v]),
        C = (0, u.J)(h, null != E && E, i),
        S = (0, r.useMemo)(() => !C && Date.now() - g < 600000, [g, C]);
    return (
        (0, r.useEffect)(() => {
            if (!p || E) return;
            let t = Date.now() - m < 600000;
            (null == b || !t) && (I || !S || O) && (0, s.Ov)(e, v, n);
        }, [p, E, b, m, S, O, I, v, e, n]),
        {
            isFetchingShopHome: E,
            fetchShopHomeError: b,
            shopBlocks: h,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, s.Ov)(e, v, n);
            }, [e, v, n]),
        }
    );
}
