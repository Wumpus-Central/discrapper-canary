a.d(t, { i: () => c });
var r = a(64700),
    n = a(635358),
    l = a(17928),
    i = a(736056),
    s = a(693477),
    o = a(590180);
function c(e, t, a) {
    let c = (0, l.bG)([i.A], () => i.A.hasLoadedExperiments),
        [d, u, h, p, m, f, b] = (0, l.yK)([o.A], () => [
            o.A.isFetchingCategories,
            o.A.lastFetchOptions,
            o.A.error,
            o.A.lastErrorTimestamp ?? 0,
            o.A.lastSuccessfulFetch ?? 0,
            o.A.categories,
            o.A.skipNumCategories,
        ]);
    return (
        (0, r.useEffect)(() => {
            if (!c || o.A.isFetchingCategories) return;
            let r = Date.now() - p < 6e5;
            if (h && r) return;
            let l = { ...e, variantsReturnStyle: n.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: b },
                i = !(0, s.gn)(u, l),
                d = Date.now() - m < 6e5;
            (i || !d) && (0, s.CK)(l, t, a);
        }, [c, u, m, e, h, p, t, a, b]),
        {
            isFetching: d,
            categories: f,
            fetchCategoriesError: h,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: n.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: b };
                (0, s.CK)(t, void 0, a);
            }, [e, a, b]),
        }
    );
}
