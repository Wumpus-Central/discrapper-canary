n.d(t, { Z: () => u });
var r = n(603263),
    s = n(977885),
    l = n(961216),
    a = n(416638),
    i = n(187462),
    o = n(981631),
    c = n(862825);
let u = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: l, searchMode: i } = e,
            u = (0, a.WJ)(t);
        (r.Gn(u),
            r.QY(u, !1),
            r.h7(u, l),
            s.Z.clearSearchState(u),
            s.Z.fetchMessages({
                searchContext: t,
                searchTabs: [c.sR.MESSAGES],
                searchQueryString: l,
                searchMode: i,
                getId: () => u,
                getLimit: () => o.vpv,
                onFetchStart: (e) => {
                    let { searchQueryString: t, searchQuery: s } = e;
                    r.Vs(u, t, s, n * o.vpv);
                },
                pagination: { offset: n * o.vpv },
                trackExactTotalHits: !0
            }));
    },
    cleanUpSearchState: function (e) {
        (r.qt(e), s.Z.clearSearchState(e), i.Z.cleanUp(e), l.Z.cleanUp(e));
    }
};
