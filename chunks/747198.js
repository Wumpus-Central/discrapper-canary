"use strict";
n.d(t, { i: () => c });
var a = n(64700),
    r = n(635358),
    i = n(17928),
    l = n(736056),
    s = n(29292),
    o = n(590180);
function c(e, t, n) {
    let c = (0, i.bG)([l.A], () => l.A.hasLoadedExperiments),
        [d, u, _, p, m, h, f] = (0, i.yK)([o.A], () => [
            o.A.isFetchingCategories,
            o.A.lastFetchOptions,
            o.A.error,
            o.A.lastErrorTimestamp ?? 0,
            o.A.lastSuccessfulFetch ?? 0,
            o.A.categories,
            o.A.skipNumCategories,
        ]);
    return (
        (0, a.useEffect)(() => {
            if (!c || o.A.isFetchingCategories) return;
            let a = Date.now() - p < 6e5;
            if (_ && a) return;
            let i = { ...e, variantsReturnStyle: r.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f },
                l = !(0, s.gn)(u, i),
                d = Date.now() - m < 6e5;
            (l || !d) && (0, s.CK)(i, t, n);
        }, [c, u, m, e, _, p, t, n, f]),
        {
            isFetching: d,
            categories: h,
            fetchCategoriesError: _,
            refreshCategories: (0, a.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: r.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f };
                (0, s.CK)(t, void 0, n);
            }, [e, n, f]),
        }
    );
}
