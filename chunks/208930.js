a.d(t, { y: () => u });
var o = a(582128),
    s = a(635358),
    r = a(855986),
    l = a(343446),
    n = a(969935),
    i = a(590180),
    d = a(295811),
    c = a(651162),
    m = a(652215);
function u(e, t, a) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        h = (0, r.bG)([l.A], () => l.A.hasLoadedExperiments),
        p = (0, r.bG)([i.A], () => i.A.skipNumCategories),
        [b, v, x, y, f, S, C, k] = (0, r.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        E = (0, o.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: s.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: k,
                skipNumCategories: p,
            }),
            [t, k, p],
        ),
        w = (0, o.useMemo)(() => !(0, n.gn)(y, E), [y, E]),
        A = ((e, t, a) => {
            let [s, r] = (0, o.useState)(!1);
            return (
                (0, o.useEffect)(() => {
                    let o,
                        s =
                            ((o = null),
                            e.forEach((e) => {
                                let t = null;
                                (e.type === c.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === c.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == o || (null != t && t < o)) && (o = t));
                            }),
                            o);
                    if (t || a || null == s) return void r(!1);
                    let l = s - Date.now();
                    if (l <= 0) return void r(!0);
                    r(!1);
                    let n = setTimeout(
                        () => {
                            r(!0);
                        },
                        Math.min(m.mnr, l),
                    );
                    return () => clearTimeout(n);
                }, [t, a, e]),
                s
            );
        })(b, S ?? !1, u),
        j = (0, o.useMemo)(() => !A && Date.now() - v < 6e5, [v, A]);
    return (
        (0, o.useEffect)(() => {
            if (g || !h || S) return;
            let t = Date.now() - x < 6e5;
            (null != f && t) || ((w || !j || C) && (0, n.h$)(e, E, a));
        }, [g, h, S, f, x, j, C, w, E, e, a]),
        {
            isFetchingShopHome: S,
            fetchShopHomeError: f,
            shopBlocks: b,
            refreshShopHome: (0, o.useCallback)(() => {
                (0, n.h$)(e, E, a);
            }, [e, E, a]),
        }
    );
}
a(758836);
