i.d(t, { i: () => o });
var s = i(64700),
    l = i(635358),
    a = i(17928),
    n = i(736056),
    r = i(693477),
    c = i(590180);
function o(e, t, i) {
    let o = (0, a.bG)([n.A], () => n.A.hasLoadedExperiments),
        [d, u, m, T, g, x, f] = (0, a.yK)([c.A], () => [
            c.A.isFetchingCategories,
            c.A.lastFetchOptions,
            c.A.error,
            c.A.lastErrorTimestamp ?? 0,
            c.A.lastSuccessfulFetch ?? 0,
            c.A.categories,
            c.A.skipNumCategories,
        ]);
    return (
        (0, s.useEffect)(() => {
            if (!o || c.A.isFetchingCategories) return;
            let s = Date.now() - T < 6e5;
            if (m && s) return;
            let a = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f },
                n = !(0, r.gn)(u, a),
                d = Date.now() - g < 6e5;
            (n || !d) && (0, r.CK)(a, t, i);
        }, [o, u, g, e, m, T, t, i, f]),
        {
            isFetching: d,
            categories: x,
            fetchCategoriesError: m,
            refreshCategories: (0, s.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f };
                (0, r.CK)(t, void 0, i);
            }, [e, i, f]),
        }
    );
}
