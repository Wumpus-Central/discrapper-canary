r.d(t, { i: () => h });
var s = r(582128),
    n = r(635358),
    i = r(17928),
    c = r(736056),
    u = r(839534),
    a = r(590180),
    o = r(758836);
function h(e, t, r) {
    let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        [f, A, g, d, p, C, E] = (0, i.yK)([a.A], () => [
            a.A.isFetchingCategories,
            a.A.lastFetchOptions,
            a.A.error,
            a.A.lastErrorTimestamp ?? 0,
            a.A.lastSuccessfulFetch ?? 0,
            a.A.categories,
            a.A.skipNumCategories,
        ]);
    return (
        (0, s.useEffect)(() => {
            if (h || !l || a.A.isFetchingCategories) return;
            let s = Date.now() - d < o.Zq;
            if (g && s) return;
            let i = { ...e, variantsReturnStyle: n.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E },
                c = !(0, u.gn)(A, i),
                f = Date.now() - p < o.i0;
            (c || !f) && (0, u.CK)(i, t, r);
        }, [h, l, A, p, e, g, d, t, r, E]),
        {
            isFetching: f,
            categories: C,
            fetchCategoriesError: g,
            refreshCategories: (0, s.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: n.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E };
                (0, u.CK)(t, void 0, r);
            }, [e, r, E]),
        }
    );
}
