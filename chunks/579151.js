r.d(t, { A: () => h });
var n = r(354328),
    s = r(582128),
    i = r(635358),
    u = r(17928),
    c = r(736056),
    a = r(839534),
    o = r(590180),
    l = r(758836);
function h(e, t) {
    let r = e?.paymentGateway;
    return (function (e, t, r) {
        let n = (0, u.bG)([c.A], () => c.A.hasLoadedExperiments),
            [h, f, A, d, g, p, C] = (0, u.yK)([o.A], () => [
                o.A.isFetchingCategories,
                o.A.lastFetchOptions,
                o.A.error,
                o.A.lastErrorTimestamp ?? 0,
                o.A.lastSuccessfulFetch ?? 0,
                o.A.categories,
                o.A.skipNumCategories,
            ]);
        return (
            (0, s.useEffect)(() => {
                if (!n || o.A.isFetchingCategories) return;
                let s = Date.now() - d < l.Zq;
                if (A && s) return;
                let u = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: C },
                    c = !(0, a.gn)(f, u),
                    h = Date.now() - g < l.i0;
                (c || !h) && (0, a.CK)(u, t, r);
            }, [n, f, g, e, A, d, t, r, C]),
            {
                isFetching: h,
                categories: p,
                fetchCategoriesError: A,
                refreshCategories: (0, s.useCallback)(() => {
                    let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: C };
                    (0, a.CK)(t, void 0, r);
                }, [e, r, C]),
            }
        );
    })(
        {
            noCache: (0, n.A)("shop_disable_cache"),
            includeUnpublished: (0, n.A)("shop_include_unpublished"),
            paymentGateway: r,
            logPerf: e?.logPerf,
        },
        void 0,
        t,
    );
}
