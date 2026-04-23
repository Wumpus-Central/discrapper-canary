"use strict";
n.d(t, { i: () => o });
var a = n(64700),
    i = n(635358),
    r = n(311907),
    l = n(49463),
    s = n(979286),
    d = n(590180);
function o(e, t, n) {
    let o = (0, r.bG)([l.A], () => l.A.hasLoadedExperiments),
        [c, u, _, m, p, h, g] = (0, r.yK)([d.A], () => [
            d.A.isFetchingCategories,
            d.A.lastFetchOptions,
            d.A.error,
            d.A.lastErrorTimestamp ?? 0,
            d.A.lastSuccessfulFetch ?? 0,
            d.A.categories,
            d.A.skipNumCategories,
        ]);
    return (
        (0, a.useEffect)(() => {
            if (!o || d.A.isFetchingCategories) return;
            let a = Date.now() - m < 6e5;
            if (_ && a) return;
            let r = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: g },
                l = !(0, s.gn)(u, r),
                c = Date.now() - p < 6e5;
            (l || !c) && (0, s.CK)(r, t, n);
        }, [o, u, p, e, _, m, t, n, g]),
        {
            isFetching: c,
            categories: h,
            fetchCategoriesError: _,
            refreshCategories: (0, a.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: g };
                (0, s.CK)(t, void 0, n);
            }, [e, n, g]),
        }
    );
}
