"use strict";
n.d(t, { A: () => u });
var i = n(354328),
    r = n(582128),
    a = n(635358),
    s = n(17928),
    l = n(736056),
    o = n(34332),
    d = n(590180),
    c = n(758836);
function u(e, t) {
    let n = e?.paymentGateway;
    return (function (e, t, n) {
        let i = (0, s.bG)([l.A], () => l.A.hasLoadedExperiments),
            [u, _, E, A, h, I, f] = (0, s.yK)([d.A], () => [
                d.A.isFetchingCategories,
                d.A.lastFetchOptions,
                d.A.error,
                d.A.lastErrorTimestamp ?? 0,
                d.A.lastSuccessfulFetch ?? 0,
                d.A.categories,
                d.A.skipNumCategories,
            ]);
        return (
            (0, r.useEffect)(() => {
                if (!i || d.A.isFetchingCategories) return;
                let r = Date.now() - A < c.Zq;
                if (E && r) return;
                let s = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f },
                    l = !(0, o.gn)(_, s),
                    u = Date.now() - h < c.i0;
                (l || !u) && (0, o.CK)(s, t, n);
            }, [i, _, h, e, E, A, t, n, f]),
            {
                isFetching: u,
                categories: I,
                fetchCategoriesError: E,
                refreshCategories: (0, r.useCallback)(() => {
                    let t = { ...e, variantsReturnStyle: a.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: f };
                    (0, o.CK)(t, void 0, n);
                }, [e, n, f]),
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
