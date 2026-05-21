n.d(t, { i: () => c });
var i = n(64700),
    l = n(635358),
    s = n(17928),
    r = n(736056),
    a = n(859040),
    o = n(590180);
function c(e, t, n) {
    let c = (0, s.bG)([r.A], () => r.A.hasLoadedExperiments),
        [d, u, m, h, g, x, f] = (0, s.yK)([o.A], () => [
            o.A.isFetchingCategories,
            o.A.lastFetchOptions,
            o.A.error,
            o.A.lastErrorTimestamp ?? 0,
            o.A.lastSuccessfulFetch ?? 0,
            o.A.categories,
            o.A.skipNumCategories,
        ]);
    return (
        (0, i.useEffect)(() => {
            if (!c || o.A.isFetchingCategories) return;
            let i = Date.now() - h < 6e5;
            if (m && i) return;
            let s = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f },
                r = !(0, a.gn)(u, s),
                d = Date.now() - g < 6e5;
            (r || !d) && (0, a.CK)(s, t, n);
        }, [c, u, g, e, m, h, t, n, f]),
        {
            isFetching: d,
            categories: x,
            fetchCategoriesError: m,
            refreshCategories: (0, i.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f };
                (0, a.CK)(t, void 0, n);
            }, [e, n, f]),
        }
    );
}
