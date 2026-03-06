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
        [_, f, p, h, m, E, g] = (0, s.yK)([l.A], () => [
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
            let r = Date.now() - h < c;
            if (p && r) return;
            let s = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: g },
                a = !(0, o.gn)(f, s),
                _ = Date.now() - m < u;
            (a || !_) && (0, o.CK)(s, t, n);
        }, [d, f, m, e, p, h, t, n, g]),
        {
            isFetching: _,
            categories: E,
            fetchCategoriesError: p,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: g };
                (0, o.CK)(t, void 0, n);
            }, [e, n, g]),
        }
    );
}
