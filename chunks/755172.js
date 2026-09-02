a.d(t, { y: () => p });
var n = a(582128),
    o = a(635358),
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
        [x, v, f, b, y, k, C, j] = (0, r.yK)([c.A], () => [
            c.A.getShopBlocks(e),
            c.A.getLastSuccessfulFetch(e) ?? 0,
            c.A.getLastErrorTimestamp(e) ?? 0,
            c.A.getLastFetchOptions(e),
            c.A.getFetchShopHomeError(e),
            c.A.getIsFetchingShopHome(e),
            c.A.getHasKnownStaleData(e),
            c.A.getShopHomeConfigOverride(),
        ]),
        S = (0, n.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: j,
                skipNumCategories: g,
            }),
            [t, j, g],
        ),
        w = (0, n.useMemo)(() => !(0, s.gn)(b, S), [b, S]),
        A = ((e, t, a) => {
            let [o, r] = (0, n.useState)(!1);
            return (
                (0, n.useEffect)(() => {
                    let n,
                        o =
                            ((n = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === u.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === u.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == n || (null != t && t < n)) && (n = t);
                            }),
                            n);
                    if (t || a || null == o) return void r(!1);
                    let l = o - Date.now();
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
                o
            );
        })(x, k ?? !1, p),
        E = (0, n.useMemo)(() => !A && Date.now() - v < m.i0, [v, A]);
    return (
        (0, n.useEffect)(() => {
            if (!h || k) return;
            let t = Date.now() - f < m.Zq;
            (null != y && t) || ((w || !E || C) && (0, s.h$)(e, S, a));
        }, [h, k, y, f, E, C, w, S, e, a]),
        {
            isFetchingShopHome: k,
            fetchShopHomeError: y,
            shopBlocks: x,
            refreshShopHome: (0, n.useCallback)(() => {
                (0, s.h$)(e, S, a);
            }, [e, S, a]),
        }
    );
}
