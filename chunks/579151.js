"use strict";
n.d(t, { A: () => d });
var i = n(354328),
    r = n(64700),
    s = n(635358),
    a = n(17928),
    o = n(736056),
    l = n(662388),
    u = n(590180),
    c = n(758836);
function d(e, t) {
    let n = e?.paymentGateway;
    return (function (e, t, n) {
        let i = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments),
            [d, _, h, f, p, E, m] = (0, a.yK)([u.A], () => [
                u.A.isFetchingCategories,
                u.A.lastFetchOptions,
                u.A.error,
                u.A.lastErrorTimestamp ?? 0,
                u.A.lastSuccessfulFetch ?? 0,
                u.A.categories,
                u.A.skipNumCategories,
            ]);
        return (
            (0, r.useEffect)(() => {
                if (!i || u.A.isFetchingCategories) return;
                let r = Date.now() - f < c.Zq;
                if (h && r) return;
                let a = { ...e, variantsReturnStyle: s.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: m },
                    o = !(0, l.gn)(_, a),
                    d = Date.now() - p < c.i0;
                (o || !d) && (0, l.CK)(a, t, n);
            }, [i, _, p, e, h, f, t, n, m]),
            {
                isFetching: d,
                categories: E,
                fetchCategoriesError: h,
                refreshCategories: (0, r.useCallback)(() => {
                    let t = { ...e, variantsReturnStyle: s.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: m };
                    (0, l.CK)(t, void 0, n);
                }, [e, n, m]),
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
