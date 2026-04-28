a.d(t, { i: () => c });
var n = a(64700),
    l = a(635358),
    r = a(17928),
    i = a(736056),
    s = a(693477),
    o = a(590180);
function c(e, t, a) {
    let c = (0, r.bG)([i.A], () => i.A.hasLoadedExperiments),
        [d, u, h, p, m, f, _] = (0, r.yK)([o.A], () => [
            o.A.isFetchingCategories,
            o.A.lastFetchOptions,
            o.A.error,
            o.A.lastErrorTimestamp ?? 0,
            o.A.lastSuccessfulFetch ?? 0,
            o.A.categories,
            o.A.skipNumCategories,
        ]);
    return (
        (0, n.useEffect)(() => {
            if (!c || o.A.isFetchingCategories) return;
            let n = Date.now() - p < 6e5;
            if (h && n) return;
            let r = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: _ },
                i = !(0, s.gn)(u, r),
                d = Date.now() - m < 6e5;
            (i || !d) && (0, s.CK)(r, t, a);
        }, [c, u, m, e, h, p, t, a, _]),
        {
            isFetching: d,
            categories: f,
            fetchCategoriesError: h,
            refreshCategories: (0, n.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: _ };
                (0, s.CK)(t, void 0, a);
            }, [e, a, _]),
        }
    );
}
