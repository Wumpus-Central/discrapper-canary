n.d(t, {
    E: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(353926),
    a = n(358085),
    s = n(335131),
    o = n(52030),
    c = n(67696),
    d = n(228624);
function u(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        n = (0, d.hv)('useMaybeFetchCollectiblesShopHome'),
        u = (0, c.n)('useMaybeFetchCollectiblesShopHome'),
        h = (0, a.isDesktop)() || (0, a.isWeb)(),
        [m, p, g, f, _, E] = (0, r.Wu)([o.Z], () => {
            var e, t;
            return [o.Z.shopBlocks, null !== (e = o.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0, null !== (t = o.Z.lastErrorTimestamp) && void 0 !== t ? t : 0, o.Z.lastFetchOptions, o.Z.fetchShopHomeError, o.Z.isFetchingShopHome];
        }),
        I = (0, i.useMemo)(
            () => ({
                ...e,
                variantsReturnStyle: n,
                includeBundles: h
            }),
            [e, n, h]
        ),
        C = (0, i.useMemo)(() => !(0, s.oc)(f, I), [f, I]),
        N = (0, i.useMemo)(() => Date.now() - p < 600000, [p]);
    return (
        (0, i.useEffect)(() => {
            if (!t || !u || E) return;
            let e = Date.now() - g < 600000;
            if (null == _ || !e) (C || !N) && (0, s.Ov)(I);
        }, [t, u, E, _, g, N, C, I]),
        {
            isFetchingShopHome: E,
            fetchShopHomeError: _,
            shopBlocks: m,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, s.Ov)(I);
            }, [I])
        }
    );
}
