n.d(t, { i: () => c });
var a = n(64700),
    i = n(635358),
    l = n(17928),
    r = n(736056),
    o = n(693477),
    s = n(590180);
function c(e, t, n) {
    let c = (0, l.bG)([r.A], () => r.A.hasLoadedExperiments),
        [d, u, _, p, f, h, m] = (0, l.yK)([s.A], () => [
            s.A.isFetchingCategories,
            s.A.lastFetchOptions,
            s.A.error,
            s.A.lastErrorTimestamp ?? 0,
            s.A.lastSuccessfulFetch ?? 0,
            s.A.categories,
            s.A.skipNumCategories,
        ]);
    return (
        (0, a.useEffect)(() => {
            if (!c || s.A.isFetchingCategories) return;
            let a = Date.now() - p < 6e5;
            if (_ && a) return;
            let l = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: m },
                r = !(0, o.gn)(u, l),
                d = Date.now() - f < 6e5;
            (r || !d) && (0, o.CK)(l, t, n);
        }, [c, u, f, e, _, p, t, n, m]),
        {
            isFetching: d,
            categories: h,
            fetchCategoriesError: _,
            refreshCategories: (0, a.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: m };
                (0, o.CK)(t, void 0, n);
            }, [e, n, m]),
        }
    );
}
