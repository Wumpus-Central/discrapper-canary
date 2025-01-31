n.d(t, { E: () => u }), n(47120);
var i = n(192379),
    l = n(442837),
    r = n(353926),
    a = n(358085),
    s = n(335131),
    o = n(52030),
    c = n(67696),
    d = n(228624);
function u(e) {
    let t = (0, l.e7)([r.Z], () => r.Z.hasLoadedExperiments),
        n = (0, d.hv)('useMaybeFetchCollectiblesShopHome'),
        u = (0, c.n)('useMaybeFetchCollectiblesShopHome'),
        h = (0, c.N)('useMaybeFetchCollectiblesShopHome'),
        m = (0, a.isDesktop)() || (0, a.isWeb)(),
        [p, g, _, f, E, I] = (0, l.Wu)([o.Z], () => {
            var e, t;
            return [o.Z.shopBlocks, null !== (e = o.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0, null !== (t = o.Z.lastErrorTimestamp) && void 0 !== t ? t : 0, o.Z.lastFetchOptions, o.Z.fetchShopHomeError, o.Z.isFetchingShopHome];
        }),
        C = (0, i.useMemo)(
            () => ({
                ...e,
                variantsReturnStyle: n,
                includeBundles: m,
                includePopularPicks: h
            }),
            [e, n, m, h]
        ),
        v = (0, i.useMemo)(() => !(0, s.oc)(f, C), [f, C]),
        N = (0, i.useMemo)(() => Date.now() - g < 600000, [g]);
    return (
        (0, i.useEffect)(() => {
            if (!t || !u || I) return;
            let e = Date.now() - _ < 600000;
            (null == E || !e) && (v || !N) && (0, s.Ov)(C);
        }, [t, u, I, E, _, N, v, C]),
        {
            isFetchingShopHome: I,
            fetchShopHomeError: E,
            shopBlocks: p,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, s.Ov)(C);
            }, [C])
        }
    );
}
