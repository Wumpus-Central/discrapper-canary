n.d(t, { Z: () => s });
var r = n(603263),
    i = n(977885),
    l = n(416638),
    a = n(652399),
    o = n(981631),
    c = n(862825);
let s = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: s, searchMode: u } = e,
            d = (0, l.WJ)(t);
        (r.Gn(d),
            r.QY(d, !1),
            r.h7(d, s),
            i.Z.clearSearchState(d),
            i.Z.fetchMessages({
                searchContext: t,
                searchTabs: [c.sR.MESSAGES],
                searchQueryString: s,
                searchMode: u,
                getId: () => d,
                getLimit: () => o.vpv,
                onFetchStart: (e) => {
                    let { searchQueryString: i, searchQuery: l } = e;
                    (r.Vs(d, i, l, n * o.vpv),
                        (0, a.tI)({
                            searchType: t.type,
                            searchId: d,
                            query: l,
                            queryString: i
                        }));
                },
                pagination: { offset: n * o.vpv },
                trackExactTotalHits: !0
            }));
    }
};
