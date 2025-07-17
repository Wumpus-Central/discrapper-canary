n.d(t, { Z: () => c });
var r = n(603263),
    i = n(977885),
    l = n(416638),
    o = n(981631),
    a = n(862825);
let c = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: c, searchMode: s } = e,
            u = (0, l.WJ)(t);
        (r.Gn(u),
            r.QY(u, !1),
            r.h7(u, c),
            i.Z.clearSearchState(u),
            i.Z.fetchMessages({
                searchContext: t,
                searchTabs: [a.sR.MESSAGES],
                searchQueryString: c,
                searchMode: s,
                getId: () => u,
                getLimit: () => o.vpv,
                onFetchStart: (e) => {
                    let { searchQueryString: t, searchQuery: i } = e;
                    r.Vs(u, t, i, n * o.vpv);
                },
                pagination: { offset: n * o.vpv },
                trackExactTotalHits: !0
            }));
    }
};
