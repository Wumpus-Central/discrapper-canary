n.d(t, { Z: () => c });
var r = n(603263),
    l = n(977885),
    s = n(416638),
    a = n(652399),
    i = n(981631),
    o = n(862825);
let c = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: c, searchMode: u } = e,
            d = (0, s.WJ)(t);
        (r.Gn(d),
            r.QY(d, !1),
            r.h7(d, c),
            l.Z.clearSearchState(d),
            l.Z.fetchMessages({
                searchContext: t,
                searchTabs: [o.sR.MESSAGES],
                searchQueryString: c,
                searchMode: u,
                getId: () => d,
                getLimit: () => i.vpv,
                onFetchStart: (e) => {
                    let { searchQueryString: n, searchQuery: l } = e;
                    (r.Vs(d, n, l),
                        (0, a.tI)({
                            searchType: t.type,
                            searchId: d,
                            query: l,
                            queryString: n
                        }));
                },
                pagination: { offset: n * i.vpv },
                trackExactTotalHits: !0
            }));
    }
};
