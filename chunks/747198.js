"use strict";
a.d(t, { i: () => d });
var r = a(64700),
    l = a(635358),
    n = a(311907),
    i = a(49463),
    s = a(979286),
    o = a(590180);
function d(e, t, a) {
    let d = (0, n.bG)([i.A], () => i.A.hasLoadedExperiments),
        [c, u, h, p, _, m, b] = (0, n.yK)([o.A], () => [
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
            if (!d || o.A.isFetchingCategories) return;
            let r = Date.now() - p < 6e5;
            if (h && r) return;
            let n = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: b },
                i = !(0, s.gn)(u, n),
                c = Date.now() - _ < 6e5;
            (i || !c) && (0, s.CK)(n, t, a);
        }, [d, u, _, e, h, p, t, a, b]),
        {
            isFetching: c,
            categories: m,
            fetchCategoriesError: h,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: l.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: b };
                (0, s.CK)(t, void 0, a);
            }, [e, a, b]),
        }
    );
}
