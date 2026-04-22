l.d(t, { y: () => h });
var a = l(64700),
    r = l(635358),
    n = l(311907),
    s = l(49463),
    o = l(979286),
    i = l(590180),
    d = l(295811),
    c = l(766201);
function h(e, t, l) {
    let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g = (0, n.bG)([s.A], () => s.A.hasLoadedExperiments),
        u = (0, n.bG)([i.A], () => i.A.skipNumCategories),
        [A, R, T, m, v, N, _, B] = (0, n.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        p = (0, a.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: B,
                skipNumCategories: u,
            }),
            [t, B, u],
        ),
        b = (0, a.useMemo)(() => !(0, o.gn)(m, p), [m, p]),
        E = (0, c.n)(A, N ?? !1, h),
        O = (0, a.useMemo)(() => !E && Date.now() - R < 6e5, [R, E]);
    return (
        (0, a.useEffect)(() => {
            if (!g || N) return;
            let t = Date.now() - T < 6e5;
            (null != v && t) || ((b || !O || _) && (0, o.h$)(e, p, l));
        }, [g, N, v, T, O, _, b, p, e, l]),
        {
            isFetchingShopHome: N,
            fetchShopHomeError: v,
            shopBlocks: A,
            refreshShopHome: (0, a.useCallback)(() => {
                (0, o.h$)(e, p, l);
            }, [e, p, l]),
        }
    );
}
