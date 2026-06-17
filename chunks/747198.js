"use strict";
n.d(t, { i: () => c });
var i = n(64700),
    r = n(635358),
    s = n(17928),
    a = n(736056),
    o = n(564064),
    l = n(590180),
    u = n(758836);
function c(e, t, n) {
    let c = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        [d, _, h, f, p, E, m] = (0, s.yK)([l.A], () => [
            l.A.isFetchingCategories,
            l.A.lastFetchOptions,
            l.A.error,
            l.A.lastErrorTimestamp ?? 0,
            l.A.lastSuccessfulFetch ?? 0,
            l.A.categories,
            l.A.skipNumCategories,
        ]);
    return (
        (0, i.useEffect)(() => {
            if (!c || l.A.isFetchingCategories) return;
            let i = Date.now() - f < u.Zq;
            if (h && i) return;
            let s = { ...e, variantsReturnStyle: r.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: m },
                a = !(0, o.gn)(_, s),
                d = Date.now() - p < u.i0;
            (a || !d) && (0, o.CK)(s, t, n);
        }, [c, _, p, e, h, f, t, n, m]),
        {
            isFetching: d,
            categories: E,
            fetchCategoriesError: h,
            refreshCategories: (0, i.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: r.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: m };
                (0, o.CK)(t, void 0, n);
            }, [e, n, m]),
        }
    );
}
