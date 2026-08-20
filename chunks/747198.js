r.d(t, { i: () => l });
var s = r(582128),
    n = r(635358),
    i = r(17928),
    u = r(736056),
    c = r(839534),
    a = r(590180),
    o = r(758836);
function l(e, t, r) {
    let l = (0, i.bG)([u.A], () => u.A.hasLoadedExperiments),
        [h, f, A, g, d, p, C] = (0, i.yK)([a.A], () => [
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
            if (!l || a.A.isFetchingCategories) return;
            let s = Date.now() - g < o.Zq;
            if (A && s) return;
            let i = { ...e, variantsReturnStyle: n.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: C },
                u = !(0, c.gn)(f, i),
                h = Date.now() - d < o.i0;
            (u || !h) && (0, c.CK)(i, t, r);
        }, [l, f, d, e, A, g, t, r, C]),
        {
            isFetching: h,
            categories: p,
            fetchCategoriesError: A,
            refreshCategories: (0, s.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: n.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: C };
                (0, c.CK)(t, void 0, r);
            }, [e, r, C]),
        }
    );
}
