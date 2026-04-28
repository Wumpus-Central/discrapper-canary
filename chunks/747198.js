"use strict";
n.d(t, { i: () => c });
var r = n(64700),
    a = n(635358),
    i = n(17928),
    l = n(736056),
    s = n(693477),
    o = n(590180);
function c(e, t, n) {
    let c = (0, i.bG)([l.A], () => l.A.hasLoadedExperiments),
        [d, u, _, p, f, m, h] = (0, i.yK)([o.A], () => [
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
            if (_ && r) return;
            let i = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: h },
                l = !(0, s.gn)(u, i),
                d = Date.now() - f < 6e5;
            (l || !d) && (0, s.CK)(i, t, n);
        }, [c, u, f, e, _, p, t, n, h]),
        {
            isFetching: d,
            categories: m,
            fetchCategoriesError: _,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: h };
                (0, s.CK)(t, void 0, n);
            }, [e, n, h]),
        }
    );
}
