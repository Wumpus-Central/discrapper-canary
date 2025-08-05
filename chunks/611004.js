n.d(t, { Z: () => p });
var r = n(748610),
    i = n(607802),
    a = n(187462),
    o = n(532496),
    s = n(723642),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
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
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: a, offset: o } = e,
        s = (0, i.WJ)(t);
    (r.Z.clearSearchMessages(s), r.Z.setShowNoResultsAlt(s), r.Z.setShowBlockedResults(s, !1), r.Z.updateSearchResultsQuery(s, n, a, o), r.Z.addWebSearchHistoryItem(s, n));
}
let p = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: n, queryString: a, searchMode: o } = e,
            c = (0, i.WJ)(t);
        r.Z.fetchTabMessages({
            searchContext: t,
            searchTabs: [s.sR.MESSAGES],
            searchQueryString: a,
            searchMode: o,
            getId: () => c,
            getLimit: () => l.vpv,
            onFetchStart: (e) => {
                let { searchQueryString: r, searchQuery: i } = e;
                _({
                    searchContext: t,
                    searchQueryString: r,
                    searchQuery: i,
                    offset: n * l.vpv
                });
            },
            pagination: { offset: n * l.vpv },
            trackExactTotalHits: !0
        });
    },
    cleanUpSearchState: function (e) {
        let t = (0, i.WJ)(e);
        (r.Z.clearSearchState(t), r.Z.clearSearchMessages(t), a.Z.cleanUp(t), o.Z.cleanUp(t));
    },
    fetchMessages: function (e) {
        let { searchContext: t, searchQuery: n, queryString: a, searchEverywhere: o, offset: s, searchMode: l } = e,
            c = f(u({}, n, null != l ? (0, i.zH)(l) : {}), { offset: s });
        (_({
            searchContext: t,
            searchQueryString: a,
            searchQuery: c,
            offset: s
        }),
            r.Z.fetchMessages({
                searchContext: t,
                query: c,
                searchEverywhere: o
            }));
    }
};
