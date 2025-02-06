n.d(t, { E: () => u }), n(47120);
var i = n(192379),
    l = n(442837),
    r = n(353926),
    a = n(358085),
    s = n(335131),
    o = n(52030),
    c = n(67696),
    d = n(228624);
function u(e, t) {
    let n = (0, l.e7)([r.Z], () => r.Z.hasLoadedExperiments),
        u = (0, d.hv)('useMaybeFetchCollectiblesShopHome'),
        h = (0, c.n)('useMaybeFetchCollectiblesShopHome'),
        m = (0, c.N)('useMaybeFetchCollectiblesShopHome'),
        p = (0, a.isDesktop)() || (0, a.isWeb)(),
        [g, _, f, E, I, C] = (0, l.Wu)([o.Z], () => {
            var t, n;
            return [o.Z.getShopBlocks(e), null !== (t = o.Z.getLastSuccessfulFetch(e)) && void 0 !== t ? t : 0, null !== (n = o.Z.getLastErrorTimestamp(e)) && void 0 !== n ? n : 0, o.Z.getLastFetchOptions(e), o.Z.getFetchShopHomeError(e), o.Z.getIsFetchingShopHome(e)];
        }),
        v = (0, i.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: u,
                includeBundles: p,
                includePopularPicks: m,
                includeDynamicBlocks: !0
            }),
            [t, u, p, m, !0]
        ),
        N = (0, i.useMemo)(() => !(0, s.oc)(E, v), [E, v]),
        T = (0, i.useMemo)(() => Date.now() - _ < 600000, [_]);
    return (
        (0, i.useEffect)(() => {
            if (!n || !h || C) return;
            let t = Date.now() - f < 600000;
            (null == I || !t) && (N || !T) && (0, s.Ov)(e, v);
        }, [n, h, C, I, f, T, N, v, e]),
        {
            isFetchingShopHome: C,
            fetchShopHomeError: I,
            shopBlocks: g,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, s.Ov)(e, v);
            }, [e, v])
        }
    );
}
