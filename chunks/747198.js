"use strict";
n.d(t, { i: () => d });
var r = n(64700),
    i = n(635358),
    s = n(311907),
    a = n(49463),
    o = n(979286),
    l = n(590180);
let u = 6e5,
    c = 6e5;
function d(e, t, n) {
    let d = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        _ = e?.includeBundles,
        [f, p, h, m, E, g, A] = (0, s.yK)([l.A], () => [
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
            if (!d || l.A.isFetchingCategories) return;
            let r = Date.now() - m < c;
            if (h && r) return;
            let s = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: _, skipNumCategories: A },
                a = !(0, o.gn)(p, s),
                f = Date.now() - E < u;
            (a || !f) && (0, o.CK)(s, t, n);
        }, [d, p, E, e, h, _, m, t, n, A]),
        {
            isFetching: f,
            categories: g,
            fetchCategoriesError: h,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: _, skipNumCategories: A };
                (0, o.CK)(t, void 0, n);
            }, [e, _, n, A]),
        }
    );
}
