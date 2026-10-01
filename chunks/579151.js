r.d(t, { A: () => l });
var s = r(354328),
    n = r(582128),
    i = r(635358),
    c = r(17928),
    u = r(736056),
    a = r(815996),
    o = r(590180),
    h = r(758836);
function l(e, t) {
    let r = e?.paymentGateway;
    return (function (e, t, r) {
        let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = (0, c.bG)([u.A], () => u.A.hasLoadedExperiments),
            [f, A, d, g, p, C, F] = (0, c.yK)([o.A], () => [
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
                if (s || !l || o.A.isFetchingCategories) return;
                let n = Date.now() - g < h.Zq;
                if (d && n) return;
                let c = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: F },
                    u = !(0, a.gn)(A, c),
                    f = Date.now() - p < h.i0;
                (u || !f) && (0, a.CK)(c, t, r);
            }, [s, l, A, p, e, d, g, t, r, F]),
            {
                isFetching: f,
                categories: C,
                fetchCategoriesError: d,
                refreshCategories: (0, n.useCallback)(() => {
                    let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: F };
                    (0, a.CK)(t, void 0, r);
                }, [e, r, F]),
            }
        );
    })(
        {
            noCache: (0, s.A)("shop_disable_cache"),
            includeUnpublished: (0, s.A)("shop_include_unpublished"),
            paymentGateway: r,
            logPerf: e?.logPerf,
        },
        void 0,
        t,
        e?.skipFetch,
    );
}
