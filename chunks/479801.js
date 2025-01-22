r.d(n, {
    e: function () {
        return h;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(634894),
    l = r(353926),
    u = r(335131),
    c = r(597688),
    d = r(228624);
let f = 600000,
    p = 600000;
function h(e) {
    let n = 'useMaybeFetchCollectiblesCategories';
    (0, s.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, s.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let r = (0, o.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        i = null == e ? void 0 : e.includeBundles,
        h = (0, d.hv)('useMaybeFetchCollectiblesCategoriesShared'),
        [_, m, g, E, v, y] = (0, o.Wu)([c.Z], () => {
            var e, n;
            return [c.Z.isFetchingCategories, c.Z.lastFetchOptions, c.Z.error, null !== (e = c.Z.lastErrorTimestamp) && void 0 !== e ? e : 0, null !== (n = c.Z.lastSuccessfulFetch) && void 0 !== n ? n : 0, c.Z.categories];
        });
    return (
        (0, a.useEffect)(() => {
            if (!r || _) return;
            let n = Date.now() - E < p;
            if (g && n) return;
            let a = {
                    ...e,
                    includeBundles: i,
                    variantsReturnStyle: h
                },
                o = !(0, u.oc)(m, a),
                s = Date.now() - v < f;
            (o || !s) && (0, u.F$)(a);
        }, [r, _, m, v, e, g, i, E, h]),
        {
            isFetching: _,
            categories: y,
            fetchCategoriesError: g,
            refreshCategories: (0, a.useCallback)(() => {
                let n = {
                    ...e,
                    includeBundles: i
                };
                (0, u.F$)(n);
            }, [e, i])
        }
    );
}
