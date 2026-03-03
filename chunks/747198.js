"use strict";
n.d(t, { i: () => _ });
var r = n(64700),
    i = n(635358),
    s = n(311907),
    a = n(49463),
    o = n(979286),
    l = n(590180),
    u = n(233525);
let c = 6e5,
    d = 6e5;
function _(e, t, n) {
    (0, u.n)("useMaybeFetchCollectiblesCategoriesShared");
    let _ = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        f = e?.includeBundles,
        p = i.g.VARIANTS_GROUP,
        [h, m, E, g, A, I, T] = (0, s.yK)([l.A], () => [
            l.A.isFetchingCategories,
            l.A.lastFetchOptions,
            l.A.error,
            l.A.lastErrorTimestamp ?? 0,
            l.A.lastSuccessfulFetch ?? 0,
            l.A.categories,
            l.A.skipNumCategories,
        ]);
    return (
        (0, r.useEffect)(() => {
            if (!_ || l.A.isFetchingCategories) return;
            let r = Date.now() - g < d;
            if (E && r) return;
            let i = { ...e, variantsReturnStyle: p, includeBundles: f, skipNumCategories: T },
                s = !(0, o.gn)(m, i),
                a = Date.now() - A < c;
            (s || !a) && (0, o.CK)(i, t, n);
        }, [_, m, A, e, E, f, g, t, n, T, p]),
        {
            isFetching: h,
            categories: I,
            fetchCategoriesError: E,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: p, includeBundles: f, skipNumCategories: T };
                (0, o.CK)(t, void 0, n);
            }, [e, f, n, T, p]),
        }
    );
}
