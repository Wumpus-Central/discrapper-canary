n.d(t, { Z: () => u });
var r = n(748610),
    i = n(607802),
    l = n(187462),
    a = n(532496),
    o = n(723642),
    s = n(981631);
function c(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: l, offset: a } = e,
        o = (0, i.WJ)(t);
    (r.Z.clearSearchMessages(o), r.Z.setShowNoResultsAlt(o), r.Z.setShowBlockedResults(o, !1), r.Z.updateSearchResultsQuery(o, n, l, a), r.Z.addWebSearchHistoryItem(o, n));
}
let u = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: l, searchMode: a } = e,
            u = (0, i.WJ)(t);
        r.Z.fetchTabMessages({
            searchContext: t,
            searchTabs: [o.sR.MESSAGES],
            searchQueryString: l,
            searchMode: a,
            getId: () => u,
            getLimit: () => s.vpv,
            onFetchStart: (e) => {
                let { searchQueryString: r, searchQuery: i } = e;
                c({
                    searchContext: t,
                    searchQueryString: r,
                    searchQuery: i,
                    offset: n * s.vpv
                });
            },
            pagination: { offset: n * s.vpv },
            trackExactTotalHits: !0
        });
    },
    cleanUpSearchState: function (e) {
        let t = (0, i.WJ)(e);
        (r.Z.clearSearchState(t), r.Z.clearSearchMessages(t), l.Z.cleanUp(t), a.Z.cleanUp(t));
    },
    fetchMessages: function (e) {
        var t, n;
        let { searchContext: l, searchQuery: a, queryString: o, searchEverywhere: s, offset: u, searchMode: d } = e,
            _ =
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, a, null != d ? (0, i.zH)(d) : {})),
                (n = n = { offset: u }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t);
        (c({
            searchContext: l,
            searchQueryString: o,
            searchQuery: _,
            offset: u
        }),
            r.Z.fetchMessages({
                searchContext: l,
                query: _,
                searchEverywhere: s
            }));
    }
};
