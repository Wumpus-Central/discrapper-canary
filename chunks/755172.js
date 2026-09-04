a.d(t, { y: () => u });
var o = a(582128),
    l = a(635358),
    s = a(17928),
    n = a(736056),
    r = a(839534),
    i = a(590180),
    c = a(295811),
    d = a(651162),
    m = a(652215),
    h = a(758836);
function u(e, t, a) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g = (0, s.bG)([n.A], () => n.A.hasLoadedExperiments),
        p = (0, s.bG)([i.A], () => i.A.skipNumCategories),
        [v, x, b, f, y, S, C, k] = (0, s.yK)([c.A], () => [
            c.A.getShopBlocks(e),
            c.A.getLastSuccessfulFetch(e) ?? 0,
            c.A.getLastErrorTimestamp(e) ?? 0,
            c.A.getLastFetchOptions(e),
            c.A.getFetchShopHomeError(e),
            c.A.getIsFetchingShopHome(e),
            c.A.getHasKnownStaleData(e),
            c.A.getShopHomeConfigOverride(),
        ]),
        w = (0, o.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: l.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: k,
                skipNumCategories: p,
            }),
            [t, k, p],
        ),
        E = (0, o.useMemo)(() => !(0, r.gn)(f, w), [f, w]),
        A = ((e, t, a) => {
            let [l, s] = (0, o.useState)(!1);
            return (
                (0, o.useEffect)(() => {
                    let o,
                        l =
                            ((o = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === d.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === d.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == o || (null != t && t < o)) && (o = t);
                            }),
                            o);
                    if (t || a || null == l) return void s(!1);
                    let n = l - Date.now();
                    if (n <= 0) return void s(!0);
                    s(!1);
                    let r = setTimeout(
                        () => {
                            s(!0);
                        },
                        Math.min(m.mnr, n),
                    );
                    return () => clearTimeout(r);
                }, [t, a, e]),
                l
            );
        })(v, S ?? !1, u),
        j = (0, o.useMemo)(() => !A && Date.now() - x < h.i0, [x, A]);
    return (
        (0, o.useEffect)(() => {
            if (!g || S) return;
            let t = Date.now() - b < h.Zq;
            (null != y && t) || ((E || !j || C) && (0, r.h$)(e, w, a));
        }, [g, S, y, b, j, C, E, w, e, a]),
        {
            isFetchingShopHome: S,
            fetchShopHomeError: y,
            shopBlocks: v,
            refreshShopHome: (0, o.useCallback)(() => {
                (0, r.h$)(e, w, a);
            }, [e, w, a]),
        }
    );
}
