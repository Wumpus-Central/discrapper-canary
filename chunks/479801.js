n.d(t, { e: () => f }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(634894),
    s = n(353926),
    o = n(335131),
    l = n(597688),
    u = n(228624);
let c = 600000,
    d = 600000;
function f(e, t) {
    let n = 'useMaybeFetchCollectiblesCategories';
    (0, a.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let f = (0, r.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        _ = null == e ? void 0 : e.includeBundles,
        p = (0, u.hv)('useMaybeFetchCollectiblesCategoriesShared'),
        [h, m, g, E, v, y] = (0, r.Wu)([l.Z], () => {
            var e, t;
            return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null !== (e = l.Z.lastErrorTimestamp) && void 0 !== e ? e : 0, null !== (t = l.Z.lastSuccessfulFetch) && void 0 !== t ? t : 0, l.Z.categories];
        });
    return (
        (0, i.useEffect)(() => {
            if (!f || h) return;
            let n = Date.now() - E < d;
            if (g && n) return;
            let i = {
                    ...e,
                    includeBundles: _,
                    variantsReturnStyle: p
                },
                r = !(0, o.oc)(m, i),
                a = Date.now() - v < c;
            (r || !a) && (0, o.F$)(i, t);
        }, [f, h, m, v, e, g, _, E, p, t]),
        {
            isFetching: h,
            categories: y,
            fetchCategoriesError: g,
            refreshCategories: (0, i.useCallback)(() => {
                let t = {
                    ...e,
                    includeBundles: _
                };
                (0, o.F$)(t);
            }, [e, _])
        }
    );
}
