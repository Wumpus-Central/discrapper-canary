"use strict";
r.d(t, { i: () => c });
var n = r(64700),
    i = r(635358),
    a = r(17928),
    s = r(736056),
    l = r(693477),
    o = r(590180);
function c(e, t, r) {
    let c = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
        [d, u, _, p, f, m, h] = (0, a.yK)([o.A], () => [
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
            if (_ && n) return;
            let a = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: h },
                s = !(0, l.gn)(u, a),
                d = Date.now() - f < 6e5;
            (s || !d) && (0, l.CK)(a, t, r);
        }, [c, u, f, e, _, p, t, r, h]),
        {
            isFetching: d,
            categories: m,
            fetchCategoriesError: _,
            refreshCategories: (0, n.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: h };
                (0, l.CK)(t, void 0, r);
            }, [e, r, h]),
        }
    );
}
