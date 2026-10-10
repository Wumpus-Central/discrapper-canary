a.d(t, { y: () => p });
var r = a(582128),
    l = a(635358),
    n = a(17928),
    o = a(736056),
    s = a(815996),
    i = a(590180),
    d = a(295811),
    c = a(651162),
    u = a(652215),
    m = a(758836);
function p(e, t, a) {
    let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        h = (0, n.bG)([o.A], () => o.A.hasLoadedExperiments),
        v = (0, n.bG)([i.A], () => i.A.skipNumCategories),
        [x, b, f, y, S, C, w, E] = (0, n.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        A = (0, r.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: l.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: E,
                skipNumCategories: v,
            }),
            [t, E, v],
        ),
        k = (0, r.useMemo)(() => !(0, s.gn)(y, A), [y, A]),
        I = ((e, t, a) => {
            let [l, n] = (0, r.useState)(!1);
            return (
                (0, r.useEffect)(() => {
                    let r,
                        l =
                            ((r = null),
                            e.forEach((e) => {
                                let t = null;
                                (e.type === c.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === c.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == r || (null != t && t < r)) && (r = t));
                            }),
                            r);
                    if (t || a || null == l) return void n(!1);
                    let o = l - Date.now();
                    if (o <= 0) return void n(!0);
                    n(!1);
                    let s = setTimeout(
                        () => {
                            n(!0);
                        },
                        Math.min(u.mnr, o),
                    );
                    return () => clearTimeout(s);
                }, [t, a, e]),
                l
            );
        })(x, C ?? !1, p),
        j = (0, r.useMemo)(() => !I && Date.now() - b < m.i0, [b, I]);
    return (
        (0, r.useEffect)(() => {
            if (g || !h || C) return;
            let t = Date.now() - f < m.Zq;
            (null != S && t) || ((k || !j || w) && (0, s.h$)(e, A, a));
        }, [g, h, C, S, f, j, w, k, A, e, a]),
        {
            isFetchingShopHome: C,
            fetchShopHomeError: S,
            shopBlocks: x,
            refreshShopHome: (0, r.useCallback)(() => {
                (0, s.h$)(e, A, a);
            }, [e, A, a]),
        }
    );
}
