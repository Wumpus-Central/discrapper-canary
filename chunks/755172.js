a.d(t, { y: () => p });
var r = a(582128),
    n = a(635358),
    l = a(17928),
    o = a(736056),
    s = a(815996),
    i = a(590180),
    c = a(295811),
    d = a(651162),
    u = a(652215),
    m = a(758836);
function p(e, t, a) {
    let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        h = (0, l.bG)([o.A], () => o.A.hasLoadedExperiments),
        v = (0, l.bG)([i.A], () => i.A.skipNumCategories),
        [x, f, b, y, S, C, E, w] = (0, l.yK)([c.A], () => [
            c.A.getShopBlocks(e),
            c.A.getLastSuccessfulFetch(e) ?? 0,
            c.A.getLastErrorTimestamp(e) ?? 0,
            c.A.getLastFetchOptions(e),
            c.A.getFetchShopHomeError(e),
            c.A.getIsFetchingShopHome(e),
            c.A.getHasKnownStaleData(e),
            c.A.getShopHomeConfigOverride(),
        ]),
        A = (0, r.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: n.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: w,
                skipNumCategories: v,
            }),
            [t, w, v],
        ),
        k = (0, r.useMemo)(() => !(0, s.gn)(y, A), [y, A]),
        I = ((e, t, a) => {
            let [n, l] = (0, r.useState)(!1);
            return (
                (0, r.useEffect)(() => {
                    let r,
                        n =
                            ((r = null),
                            e.forEach((e) => {
                                let t = null;
                                (e.type === d.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === d.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == r || (null != t && t < r)) && (r = t));
                            }),
                            r);
                    if (t || a || null == n) return void l(!1);
                    let o = n - Date.now();
                    if (o <= 0) return void l(!0);
                    l(!1);
                    let s = setTimeout(
                        () => {
                            l(!0);
                        },
                        Math.min(u.mnr, o),
                    );
                    return () => clearTimeout(s);
                }, [t, a, e]),
                n
            );
        })(x, C ?? !1, p),
        j = (0, r.useMemo)(() => !I && Date.now() - f < m.i0, [f, I]);
    return (
        (0, r.useEffect)(() => {
            if (g || !h || C) return;
            let t = Date.now() - b < m.Zq;
            (null != S && t) || ((k || !j || E) && (0, s.h$)(e, A, a));
        }, [g, h, C, S, b, j, E, k, A, e, a]),
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
