"use strict";
n.d(t, { i: () => _ });
var r = n(64700),
    i = n(635358),
    a = n(311907),
    s = n(49463),
    o = n(979286),
    l = n(590180),
    u = n(233525);
let c = 6e5,
    d = 6e5;
function _(e, t, n) {
    (0, u.n)("useMaybeFetchCollectiblesCategoriesShared");
    let _ = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
        f = e?.includeBundles,
        p = i.g.VARIANTS_GROUP,
        [h, m, g, E, A, I, T] = (0, a.yK)([l.A], () => [
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
            if (!_ || h) return;
            let r = Date.now() - E < d;
            if (g && r) return;
            let i = { ...e, variantsReturnStyle: p, includeBundles: f, skipNumCategories: T },
                a = !(0, o.gn)(m, i),
                s = Date.now() - A < c;
            (a || !s) && (0, o.CK)(i, t, n);
        }, [_, h, m, A, e, g, f, E, t, n, T, p]),
        {
            isFetching: h,
            categories: I,
            fetchCategoriesError: g,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: p, includeBundles: f, skipNumCategories: T };
                (0, o.CK)(t, void 0, n);
            }, [e, f, n, T, p]),
        }
    );
}
