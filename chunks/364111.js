n.d(t, { E: () => c }), n(47120);
var i = n(192379),
    l = n(442837),
    r = n(353926),
    a = n(358085),
    s = n(335131),
    o = n(52030),
    d = n(228624);
function c(e, t) {
    let n = (0, l.e7)([r.Z], () => r.Z.hasLoadedExperiments),
        c = (0, d.hv)('useMaybeFetchCollectiblesShopHome'),
        u = (0, a.isDesktop)() || (0, a.isWeb)(),
        [h, m, p, g, _, f] = (0, l.Wu)([o.Z], () => {
            var t, n;
            return [o.Z.getShopBlocks(e), null !== (t = o.Z.getLastSuccessfulFetch(e)) && void 0 !== t ? t : 0, null !== (n = o.Z.getLastErrorTimestamp(e)) && void 0 !== n ? n : 0, o.Z.getLastFetchOptions(e), o.Z.getFetchShopHomeError(e), o.Z.getIsFetchingShopHome(e)];
        }),
        E = (0, i.useMemo)(
            () => ({
                ...t,
                variantsReturnStyle: c,
                includeBundles: u,
                includePopularPicks: !0,
                includeDynamicBlocks: !0
            }),
            [t, c, u]
        ),
        I = (0, i.useMemo)(() => !(0, s.oc)(g, E), [g, E]),
        C = (0, i.useMemo)(() => Date.now() - m < 600000, [m]);
    return (
        (0, i.useEffect)(() => {
            if (!n || f) return;
            let t = Date.now() - p < 600000;
            (null == _ || !t) && (I || !C) && (0, s.Ov)(e, E);
        }, [n, f, _, p, C, I, E, e]),
        {
            isFetchingShopHome: f,
            fetchShopHomeError: _,
            shopBlocks: h,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, s.Ov)(e, E);
            }, [e, E])
        }
    );
}
