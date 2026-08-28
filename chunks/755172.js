l.d(t, { y: () => p });
var o = l(582128),
    n = l(635358),
    s = l(17928),
    r = l(736056),
    a = l(839534),
    i = l(590180),
    d = l(295811),
    c = l(651162),
    u = l(652215),
    h = l(758836);
function p(e, t, l) {
    let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        m = (0, s.bG)([r.A], () => r.A.hasLoadedExperiments),
        g = (0, s.bG)([i.A], () => i.A.skipNumCategories),
        [x, f, v, S, b, I, j, y] = (0, s.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        A = (0, o.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: n.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: y,
                skipNumCategories: g,
            }),
            [t, y, g],
        ),
        C = (0, o.useMemo)(() => !(0, a.gn)(S, A), [S, A]),
        E = ((e, t, l) => {
            let [n, s] = (0, o.useState)(!1);
            return (
                (0, o.useEffect)(() => {
                    let o,
                        n =
                            ((o = null),
                            e.forEach((e) => {
                                let t = null;
                                e.type === c.g.IMMERSIVE_BANNER
                                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                                    : e.type === c.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                                    (null == o || (null != t && t < o)) && (o = t);
                            }),
                            o);
                    if (t || l || null == n) return void s(!1);
                    let r = n - Date.now();
                    if (r <= 0) return void s(!0);
                    s(!1);
                    let a = setTimeout(
                        () => {
                            s(!0);
                        },
                        Math.min(u.mnr, r),
                    );
                    return () => clearTimeout(a);
                }, [t, l, e]),
                n
            );
        })(x, I ?? !1, p),
        k = (0, o.useMemo)(() => !E && Date.now() - f < h.i0, [f, E]);
    return (
        (0, o.useEffect)(() => {
            if (!m || I) return;
            let t = Date.now() - v < h.Zq;
            (null != b && t) || ((C || !k || j) && (0, a.h$)(e, A, l));
        }, [m, I, b, v, k, j, C, A, e, l]),
        {
            isFetchingShopHome: I,
            fetchShopHomeError: b,
            shopBlocks: x,
            refreshShopHome: (0, o.useCallback)(() => {
                (0, a.h$)(e, A, l);
            }, [e, A, l]),
        }
    );
}
