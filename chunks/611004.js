n.d(t, { Z: () => o });
var r = n(603263),
    l = n(977885),
    s = n(416638),
    a = n(981631),
    i = n(862825);
let o = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: o, searchMode: c } = e,
            u = (0, s.WJ)(t);
        (r.Gn(u),
            r.QY(u, !1),
            r.h7(u, o),
            l.Z.clearSearchState(u),
            l.Z.fetchMessages({
                searchContext: t,
                searchTabs: [i.sR.MESSAGES],
                searchQueryString: o,
                searchMode: c,
                getId: () => u,
                getLimit: () => a.vpv,
                onFetchStart: (e) => {
                    let { searchQueryString: t, searchQuery: n } = e;
                    r.Vs(u, t, n);
                },
                pagination: { offset: n * a.vpv },
                trackExactTotalHits: !0
            }));
    }
};
