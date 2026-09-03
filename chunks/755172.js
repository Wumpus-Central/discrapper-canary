a.d(t, { y: () => p });
var o = a(582128),
    n = a(635358),
    r = a(17928),
    l = a(736056),
    s = a(839534),
    i = a(590180),
    c = a(295811),
    u = a(651162),
    d = a(652215),
    m = a(758836);
function p(e, t, a) {
    let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h = (0, r.bG)([l.A], () => l.A.hasLoadedExperiments),
        g = (0, r.bG)([i.A], () => i.A.skipNumCategories),
        [x, v, b, f, y, k, C, j] = (0, r.yK)([c.A], () => [
            c.A.getShopBlocks(e),
            c.A.getLastSuccessfulFetch(e) ?? 0,
            c.A.getLastErrorTimestamp(e) ?? 0,
            c.A.getLastFetchOptions(e),
            c.A.getFetchShopHomeError(e),
            c.A.getIsFetchingShopHome(e),
            c.A.getHasKnownStaleData(e),
            c.A.getShopHomeConfigOverride(),
        ]),
        S = (0, o.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: n.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: j,
                skipNumCategories: g,
            }),
            [t, j, g],
        ),
        w = (0, o.useMemo)(() => !(0, s.gn)(f, S), [f, S]),
        A = ((e, t, a) => {
            let [n, r] = (0, o.useState)(!1);
            return (
                (0, o.useEffect)(() => {
                    let o,
                        n =
                            ((o = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === u.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === u.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == o || (null != t && t < o)) && (o = t);
                            }),
                            o);
                    if (t || a || null == n) return void r(!1);
                    let l = n - Date.now();
                    if (l <= 0) return void r(!0);
                    r(!1);
                    let s = setTimeout(
                        () => {
                            r(!0);
                        },
                        Math.min(d.mnr, l),
                    );
                    return () => clearTimeout(s);
                }, [t, a, e]),
                n
            );
        })(x, k ?? !1, p),
        E = (0, o.useMemo)(() => !A && Date.now() - v < m.i0, [v, A]);
    return (
        (0, o.useEffect)(() => {
            if (!h || k) return;
            let t = Date.now() - b < m.Zq;
            (null != y && t) || ((w || !E || C) && (0, s.h$)(e, S, a));
        }, [h, k, y, b, E, C, w, S, e, a]),
        {
            isFetchingShopHome: k,
            fetchShopHomeError: y,
            shopBlocks: x,
            refreshShopHome: (0, o.useCallback)(() => {
                (0, s.h$)(e, S, a);
            }, [e, S, a]),
        }
    );
}
