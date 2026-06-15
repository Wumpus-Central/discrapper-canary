n.d(t, { A: () => d });
var i = n(354328),
    l = n(64700),
    s = n(635358),
    r = n(17928),
    a = n(736056),
    o = n(859040),
    c = n(590180);
function d(e, t) {
    let n = e?.paymentGateway;
    return (function (e, t, n) {
        let i = (0, r.bG)([a.A], () => a.A.hasLoadedExperiments),
            [d, u, m, h, g, f, x] = (0, r.yK)([c.A], () => [
                c.A.isFetchingCategories,
                c.A.lastFetchOptions,
                c.A.error,
                c.A.lastErrorTimestamp ?? 0,
                c.A.lastSuccessfulFetch ?? 0,
                c.A.categories,
                c.A.skipNumCategories,
            ]);
        return (
            (0, l.useEffect)(() => {
                if (!i || c.A.isFetchingCategories) return;
                let l = Date.now() - h < 6e5;
                if (m && l) return;
                let r = { ...e, variantsReturnStyle: s.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: x },
                    a = !(0, o.gn)(u, r),
                    d = Date.now() - g < 6e5;
                (a || !d) && (0, o.CK)(r, t, n);
            }, [i, u, g, e, m, h, t, n, x]),
            {
                isFetching: d,
                categories: f,
                fetchCategoriesError: m,
                refreshCategories: (0, l.useCallback)(() => {
                    let t = { ...e, variantsReturnStyle: s.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: x };
                    (0, o.CK)(t, void 0, n);
                }, [e, n, x]),
            }
        );
    })(
        {
            noCache: (0, i.A)("shop_disable_cache"),
            includeUnpublished: (0, i.A)("shop_include_unpublished"),
            paymentGateway: n,
            logPerf: e?.logPerf,
        },
        void 0,
        t,
    );
}
