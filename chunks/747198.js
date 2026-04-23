n.d(t, { i: () => d });
var r = n(64700),
    a = n(635358),
    i = n(17928),
    o = n(736056),
    l = n(803375),
    s = n(590180);
function d(e, t, n) {
    let d = (0, i.bG)([o.A], () => o.A.hasLoadedExperiments),
        [u, c, _, p, C, h, E] = (0, i.yK)([s.A], () => [
            s.A.isFetchingCategories,
            s.A.lastFetchOptions,
            s.A.error,
            s.A.lastErrorTimestamp ?? 0,
            s.A.lastSuccessfulFetch ?? 0,
            s.A.categories,
            s.A.skipNumCategories,
        ]);
    return (
        (0, r.useEffect)(() => {
            if (!d || s.A.isFetchingCategories) return;
            let r = Date.now() - p < 6e5;
            if (_ && r) return;
            let i = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E },
                o = !(0, l.gn)(c, i),
                u = Date.now() - C < 6e5;
            (o || !u) && (0, l.CK)(i, t, n);
        }, [d, c, C, e, _, p, t, n, E]),
        {
            isFetching: u,
            categories: h,
            fetchCategoriesError: _,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E };
                (0, l.CK)(t, void 0, n);
            }, [e, n, E]),
        }
    );
}
