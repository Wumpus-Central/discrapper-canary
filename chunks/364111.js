n.d(t, { E: () => p }), n(388685);
var r = n(473749),
    i = n(311570),
    l = n(442837),
    a = n(353926),
    o = n(335131),
    s = n(597688),
    c = n(52030),
    u = n(952597),
    d = n(447988);
function p(e, t, n) {
    let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        f = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments);
    (0, u.a)("useMaybeFetchCollectiblesShopHome");
    let g = i.v.VARIANTS_GROUP,
        h = (0, l.e7)([s.Z], () => s.Z.skipNumCategories),
        [m, b, _, E, O, v, y, I] = (0, l.Wu)([c.Z], () => {
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
        C = (0, r.useMemo)(() => {
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
                        variantsReturnStyle: g,
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
        }, [t, I, h, g]),
        S = (0, r.useMemo)(() => !(0, o.oc)(E, C), [E, C]),
        T = (0, d.J)(m, null != v && v, p),
        N = (0, r.useMemo)(() => !T && Date.now() - b < 600000, [b, T]);
    return (
        (0, r.useEffect)(() => {
            if (!f || v) return;
            let t = Date.now() - _ < 600000;
            (null == O || !t) && (S || !N || y) && (0, o.Ov)(e, C, n);
        }, [f, v, O, _, N, y, S, C, e, n]),
        {
            isFetchingShopHome: v,
            fetchShopHomeError: O,
            shopBlocks: m,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, o.Ov)(e, C, n);
            }, [e, C, n]),
        }
    );
}
