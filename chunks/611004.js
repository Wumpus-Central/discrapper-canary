r.d(t, { Z: () => u });
var n = r(748610),
    s = r(607802),
    l = r(187462),
    a = r(532496),
    i = r(723642),
    o = r(981631);
function c(e) {
    let { searchId: t, searchQueryString: r, searchQuery: s, offset: l } = e;
    (n.Z.clearSearchMessages(t), n.Z.setShowNoResultsAlt(t), n.Z.setShowBlockedResults(t, !1), n.Z.updateSearchResultsQuery(t, r, s, l), n.Z.addWebSearchHistoryItem(t, r));
}
let u = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: r, queryString: l, searchMode: a } = e,
            u = (0, s.WJ)(t);
        n.Z.fetchTabMessages({
            searchContext: t,
            searchTabs: [i.sR.MESSAGES],
            searchQueryString: l,
            searchMode: a,
            getId: () => u,
            getLimit: () => o.vpv,
            onFetchStart: (e) => {
                let { searchQueryString: t, searchQuery: n } = e;
                c({
                    searchId: u,
                    searchQueryString: t,
                    searchQuery: n,
                    offset: r * o.vpv
                });
            },
            pagination: { offset: r * o.vpv },
            trackExactTotalHits: !0
        });
    },
    cleanUpSearchState: function (e) {
        (n.Z.clearSearchState(e), n.Z.clearSearchMessages(e), l.Z.cleanUp(e), a.Z.cleanUp(e));
    },
    fetchMessages: function (e) {
        var t, r;
        let { searchId: l, searchQuery: a, queryString: i, searchEverywhere: o, offset: u, searchMode: h } = e,
            d =
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                ((n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n));
                            }));
                    }
                    return e;
                })({}, a, null != h ? (0, s.zH)(h) : {})),
                (r = r = { offset: u }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t);
        (c({
            searchId: l,
            searchQueryString: i,
            searchQuery: d,
            offset: u
        }),
            n.Z.fetchMessages({
                searchId: l,
                query: d,
                searchEverywhere: o
            }));
    }
};
