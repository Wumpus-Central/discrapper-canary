a.d(t, { y: () => p });
var l = a(582128),
    n = a(635358),
    r = a(17928),
    o = a(736056),
    s = a(839534),
    i = a(590180),
    c = a(295811),
    d = a(651162),
    u = a(652215),
    m = a(758836);
function p(e, t, a) {
    let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h = (0, r.bG)([o.A], () => o.A.hasLoadedExperiments),
        g = (0, r.bG)([i.A], () => i.A.skipNumCategories),
        [v, x, f, b, y, S, C, w] = (0, r.yK)([c.A], () => [
            c.A.getShopBlocks(e),
            c.A.getLastSuccessfulFetch(e) ?? 0,
            c.A.getLastErrorTimestamp(e) ?? 0,
            c.A.getLastFetchOptions(e),
            c.A.getFetchShopHomeError(e),
            c.A.getIsFetchingShopHome(e),
            c.A.getHasKnownStaleData(e),
            c.A.getShopHomeConfigOverride(),
        ]),
        E = (0, l.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: n.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: w,
                skipNumCategories: g,
            }),
            [t, w, g],
        ),
        k = (0, l.useMemo)(() => !(0, s.gn)(b, E), [b, E]),
        A = ((e, t, a) => {
            let [n, r] = (0, l.useState)(!1);
            return (
                (0, l.useEffect)(() => {
                    let l,
                        n =
                            ((l = null),
                            e.forEach((e) => {
                                let t = null;
                                (e.type === d.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === d.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == l || (null != t && t < l)) && (l = t));
                            }),
                            l);
                    if (t || a || null == n) return void r(!1);
                    let o = n - Date.now();
                    if (o <= 0) return void r(!0);
                    r(!1);
                    let s = setTimeout(
                        () => {
                            r(!0);
                        },
                        Math.min(u.mnr, o),
                    );
                    return () => clearTimeout(s);
                }, [t, a, e]),
                n
            );
        })(v, S ?? !1, p),
        I = (0, l.useMemo)(() => !A && Date.now() - x < m.i0, [x, A]);
    return (
        (0, l.useEffect)(() => {
            if (!h || S) return;
            let t = Date.now() - f < m.Zq;
            (null != y && t) || ((k || !I || C) && (0, s.h$)(e, E, a));
        }, [h, S, y, f, I, C, k, E, e, a]),
        {
            isFetchingShopHome: S,
            fetchShopHomeError: y,
            shopBlocks: v,
            refreshShopHome: (0, l.useCallback)(() => {
                (0, s.h$)(e, E, a);
            }, [e, E, a]),
        }
    );
}
