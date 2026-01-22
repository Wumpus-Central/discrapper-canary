n.d(t, { y: () => p }), n(896048);
var r = n(64700),
    i = n(635358),
    l = n(311907),
    a = n(49463),
    s = n(979286),
    o = n(590180),
    c = n(295811),
    u = n(233525),
    d = n(766201);
function p(e, t, n) {
    let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        f = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments);
    (0, u.n)("useMaybeFetchCollectiblesShopHome");
    let h = i.g.VARIANTS_GROUP,
        A = (0, l.bG)([o.A], () => o.A.skipNumCategories),
        [g, m, b, _, E, O, y, I] = (0, l.yK)([c.A], () => {
            var t, n;
            return [
                c.A.getShopBlocks(e),
                null != (t = c.A.getLastSuccessfulFetch(e)) ? t : 0,
                null != (n = c.A.getLastErrorTimestamp(e)) ? n : 0,
                c.A.getLastFetchOptions(e),
                c.A.getFetchShopHomeError(e),
                c.A.getIsFetchingShopHome(e),
                c.A.getHasKnownStaleData(e),
                c.A.getShopHomeConfigOverride(),
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
                        variantsReturnStyle: h,
                        includeDynamicBlocks: !0,
                        shopHomeConfig: I,
                        skipNumCategories: A,
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
        }, [t, I, A, h]),
        S = (0, r.useMemo)(() => !(0, s.gn)(_, v), [_, v]),
        C = (0, d.n)(g, null != O && O, p),
        N = (0, r.useMemo)(() => !C && Date.now() - m < 600000, [m, C]);
    return (
        (0, r.useEffect)(() => {
            if (!f || O) return;
            let t = Date.now() - b < 600000;
            (null != E && t) || ((S || !N || y) && (0, s.h$)(e, v, n));
        }, [f, O, E, b, N, y, S, v, e, n]),
        {
            isFetchingShopHome: O,
            fetchShopHomeError: E,
            shopBlocks: g,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, s.h$)(e, v, n);
            }, [e, v, n]),
        }
    );
}
