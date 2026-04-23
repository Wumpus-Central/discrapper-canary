l.d(t, { i: () => o });
var r = l(64700),
    a = l(635358),
    s = l(311907),
    n = l(49463),
    i = l(979286),
    c = l(590180);
function o(e, t, l) {
    let o = (0, s.bG)([n.A], () => n.A.hasLoadedExperiments),
        [u, d, m, A, p, _, h] = (0, s.yK)([c.A], () => [
            c.A.isFetchingCategories,
            c.A.lastFetchOptions,
            c.A.error,
            c.A.lastErrorTimestamp ?? 0,
            c.A.lastSuccessfulFetch ?? 0,
            c.A.categories,
            c.A.skipNumCategories,
        ]);
    return (
        (0, r.useEffect)(() => {
            if (!o || c.A.isFetchingCategories) return;
            let r = Date.now() - A < 6e5;
            if (m && r) return;
            let s = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: h },
                n = !(0, i.gn)(d, s),
                u = Date.now() - p < 6e5;
            (n || !u) && (0, i.CK)(s, t, l);
        }, [o, d, p, e, m, A, t, l, h]),
        {
            isFetching: u,
            categories: _,
            fetchCategoriesError: m,
            refreshCategories: (0, r.useCallback)(() => {
                let t = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: h };
                (0, i.CK)(t, void 0, l);
            }, [e, l, h]),
        }
    );
}
