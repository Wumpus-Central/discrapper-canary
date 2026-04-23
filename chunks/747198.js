"use strict";
n.d(t, { i: () => u });
var r = n(64700),
    i = n(635358),
    s = n(311907),
    a = n(49463),
    o = n(979286),
    l = n(590180);
function u(e, t, n) {
    let u = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments),
        [c, d, _, f, p, h, E] = (0, s.yK)([l.A], () => [
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
            if (!u || l.A.isFetchingCategories) return;
            let r = Date.now() - f < 6e5;
            if (_ && r) return;
            let s = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E },
                a = !(0, o.gn)(d, s),
                c = Date.now() - p < 6e5;
            (a || !c) && (0, o.CK)(s, t, n);
        }, [u, d, p, e, _, f, t, n, E]),
        {
            isFetching: c,
            categories: h,
            fetchCategoriesError: _,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E };
                (0, o.CK)(t, void 0, n);
            }, [e, n, E]),
        }
    );
}
