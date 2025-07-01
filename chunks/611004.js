n.d(t, { Z: () => o });
var r = n(603263),
    s = n(977885),
    l = n(416638),
    a = n(981631),
    i = n(862825);
let o = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: o } = e,
            c = (0, l.WJ)(t);
        (r.Gn(c),
            r.QY(c, !1),
            s.Z.clearSearch(),
            s.Z.fetchMessages({
                searchContext: t,
                searchTabs: [i.sR.MESSAGES],
                searchQueryString: o,
                getLimit: () => a.vpv,
                onFetchStart: (e) => {
                    let { searchQueryString: t, searchQuery: n } = e;
                    r.Vs(c, t, n);
                },
                pagination: { offset: n * a.vpv },
                trackExactTotalHits: !0
            }));
    }
};
