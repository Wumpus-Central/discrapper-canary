n.d(t, { y: () => A });
var i = n(64700),
    r = n(635358),
    a = n(311907),
    l = n(49463),
    s = n(979286),
    o = n(590180),
    d = n(295811),
    c = n(233525),
    u = n(766201);
function A(e, t, n) {
    let A = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h = (0, a.bG)([l.A], () => l.A.hasLoadedExperiments);
    (0, c.n)("useMaybeFetchCollectiblesShopHome");
    let _ = r.g.VARIANTS_GROUP,
        m = (0, a.bG)([o.A], () => o.A.skipNumCategories),
        [p, g, E, f, I, C, N, T] = (0, a.yK)([d.A], () => [
            d.A.getShopBlocks(e),
            d.A.getLastSuccessfulFetch(e) ?? 0,
            d.A.getLastErrorTimestamp(e) ?? 0,
            d.A.getLastFetchOptions(e),
            d.A.getFetchShopHomeError(e),
            d.A.getIsFetchingShopHome(e),
            d.A.getHasKnownStaleData(e),
            d.A.getShopHomeConfigOverride(),
        ]),
        S = (0, i.useMemo)(
            () => ({ ...t, variantsReturnStyle: _, includeDynamicBlocks: !0, shopHomeConfig: T, skipNumCategories: m }),
            [t, T, m, _],
        ),
        x = (0, i.useMemo)(() => !(0, s.gn)(f, S), [f, S]),
        v = (0, u.n)(p, C ?? !1, A),
        b = (0, i.useMemo)(() => !v && Date.now() - g < 6e5, [g, v]);
    return (
        (0, i.useEffect)(() => {
            if (!h || C) return;
            let t = Date.now() - E < 6e5;
            (null != I && t) || ((x || !b || N) && (0, s.h$)(e, S, n));
        }, [h, C, I, E, b, N, x, S, e, n]),
        {
            isFetchingShopHome: C,
            fetchShopHomeError: I,
            shopBlocks: p,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, s.h$)(e, S, n);
            }, [e, S, n]),
        }
    );
}
