n.d(t, { y: () => u });
var i = n(64700),
    r = n(635358),
    l = n(311907),
    a = n(49463),
    s = n(979286),
    o = n(590180),
    d = n(295811),
    c = n(766201);
function u(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        A = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments),
        h = (0, l.bG)([o.A], () => o.A.skipNumCategories),
        [_, m, g, p, E, I, f, C] = (0, l.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        T = (0, i.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: r.g.VARIANTS_GROUP,
                includeBundles: !0,
                includeDynamicBlocks: !0,
                shopHomeConfig: C,
                skipNumCategories: h,
            }),
            [t, C, h],
        ),
        N = (0, i.useMemo)(() => !(0, s.gn)(p, T), [p, T]),
        S = (0, c.n)(_, I ?? !1, u),
        x = (0, i.useMemo)(() => !S && Date.now() - m < 6e5, [m, S]);
    return (
        (0, i.useEffect)(() => {
            if (!A || I) return;
            let t = Date.now() - g < 6e5;
            (null != E && t) || ((N || !x || f) && (0, s.h$)(e, T, n));
        }, [A, I, E, g, x, f, N, T, e, n]),
        {
            isFetchingShopHome: I,
            fetchShopHomeError: E,
            shopBlocks: _,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, s.h$)(e, T, n);
            }, [e, T, n]),
        }
    );
}
