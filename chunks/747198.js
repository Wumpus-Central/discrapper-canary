"use strict";
n.d(t, { i: () => u });
var i = n(64700),
    r = n(635358),
    s = n(17928),
    a = n(736056),
    o = n(859040),
    l = n(590180);
function u(e, t, n) {
    let u = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        [c, d, _, f, h, p, E] = (0, s.yK)([l.A], () => [
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
            if (!u || l.A.isFetchingCategories) return;
            let i = Date.now() - f < 6e5;
            if (_ && i) return;
            let s = { ...e, variantsReturnStyle: r.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E },
                a = !(0, o.gn)(d, s),
                c = Date.now() - h < 6e5;
            (a || !c) && (0, o.CK)(s, t, n);
        }, [u, d, h, e, _, f, t, n, E]),
        {
            isFetching: c,
            categories: p,
            fetchCategoriesError: _,
            refreshCategories: (0, i.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: r.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E };
                (0, o.CK)(t, void 0, n);
            }, [e, n, E]),
        }
    );
}
