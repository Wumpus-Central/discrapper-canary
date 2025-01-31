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
function f(e) {
    let t = 'useMaybeFetchCollectiblesCategories';
    (0, a.j)({
        location: t + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: t + ' auto off',
            autoTrackExposure: !1
        });
    let n = (0, r.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        f = null == e ? void 0 : e.includeBundles,
        _ = (0, u.hv)('useMaybeFetchCollectiblesCategoriesShared'),
        [p, h, m, g, E, v] = (0, r.Wu)([l.Z], () => {
            var e, t;
            return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null !== (e = l.Z.lastErrorTimestamp) && void 0 !== e ? e : 0, null !== (t = l.Z.lastSuccessfulFetch) && void 0 !== t ? t : 0, l.Z.categories];
        });
    return (
        (0, i.useEffect)(() => {
            if (!n || p) return;
            let t = Date.now() - g < d;
            if (m && t) return;
            let i = {
                    ...e,
                    includeBundles: f,
                    variantsReturnStyle: _
                },
                r = !(0, o.oc)(h, i),
                a = Date.now() - E < c;
            (r || !a) && (0, o.F$)(i);
        }, [n, p, h, E, e, m, f, g, _]),
        {
            isFetching: p,
            categories: v,
            fetchCategoriesError: m,
            refreshCategories: (0, i.useCallback)(() => {
                let t = {
                    ...e,
                    includeBundles: f
                };
                (0, o.F$)(t);
            }, [e, f])
        }
    );
}
