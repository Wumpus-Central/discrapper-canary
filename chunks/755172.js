a.d(t, { y: () => g });
var o = a(582128),
    s = a(635358),
    r = a(17928),
    l = a(736056),
    n = a(815996),
    i = a(590180),
    c = a(295811),
    d = a(651162),
    m = a(652215),
    u = a(758836);
function g(e, t, a) {
    let g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        p = (0, r.bG)([l.A], () => l.A.hasLoadedExperiments),
        v = (0, r.bG)([i.A], () => i.A.skipNumCategories),
        [x, b, f, y, C, S, k, E] = (0, r.yK)([c.A], () => [
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
                variantsReturnStyle: s.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: E,
                skipNumCategories: v,
            }),
            [t, E, v],
        ),
        A = (0, o.useMemo)(() => !(0, n.gn)(y, w), [y, w]),
        j = ((e, t, a) => {
            let [s, r] = (0, o.useState)(!1);
            return (
                (0, o.useEffect)(() => {
                    let o,
                        s =
                            ((o = null),
                            e.forEach((e) => {
                                let t = null;
                                (e.type === d.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === d.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
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
        })(x, S ?? !1, g),
        I = (0, o.useMemo)(() => !j && Date.now() - b < u.i0, [b, j]);
    return (
        (0, o.useEffect)(() => {
            if (h || !p || S) return;
            let t = Date.now() - f < u.Zq;
            (null != C && t) || ((A || !I || k) && (0, n.h$)(e, w, a));
        }, [h, p, S, C, f, I, k, A, w, e, a]),
        {
            isFetchingShopHome: S,
            fetchShopHomeError: C,
            shopBlocks: x,
            refreshShopHome: (0, o.useCallback)(() => {
                (0, n.h$)(e, w, a);
            }, [e, w, a]),
        }
    );
}
