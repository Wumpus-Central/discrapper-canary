"use strict";
n.d(t, { A: () => c });
var i = n(354328),
    r = n(64700),
    s = n(635358),
    a = n(17928),
    o = n(736056),
    l = n(859040),
    u = n(590180);
function c(e, t) {
    let n = e?.paymentGateway;
    return (function (e, t, n) {
        let i = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments),
            [c, d, _, h, f, p, E] = (0, a.yK)([u.A], () => [
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
                let r = Date.now() - h < 6e5;
                if (_ && r) return;
                let a = { ...e, variantsReturnStyle: s.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E },
                    o = !(0, l.gn)(d, a),
                    c = Date.now() - f < 6e5;
                (o || !c) && (0, l.CK)(a, t, n);
            }, [i, d, f, e, _, h, t, n, E]),
            {
                isFetching: c,
                categories: p,
                fetchCategoriesError: _,
                refreshCategories: (0, r.useCallback)(() => {
                    let t = { ...e, variantsReturnStyle: s.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: E };
                    (0, l.CK)(t, void 0, n);
                }, [e, n, E]),
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
