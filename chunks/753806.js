r.d(t, {
    A: () => L,
}),
    r(747238),
    r(812715),
    r(733351);
var n = r(627968),
    l = r(271830),
    s = r(192308),
    a = r(988665),
    i = r(138298),
    o = r(734057),
    c = r(203982),
    u = r(504531),
    d = r(614690),
    h = r(256796),
    p = r(822382),
    f = r(23667),
    g = r(956467),
    S = r(408730),
    E = r(771650),
    y = r(616252),
    _ = r(65600),
    m = r(145331),
    A = r(768570),
    b = r(921242),
    O = r(652215);

function R(e) {
    let t = (0, p.bS)(e);
    y.A.clearSearchEditorState(e), h.A.clearSearchMessages(t), f.A.cleanUp(t), g.A.cleanUp(t);
}

function v(e) {
    let { searchContext: t, searchQueryString: r, searchQuery: n, offset: l } = e,
        s = (0, p.bS)(t);
    h.A.clearSearchMessages(s),
        y.A.setShowNoResultsAlt(t),
        y.A.setShowBlockedResults(t, !1),
        y.A.updateSearchResultsQuery(t, r, n, l),
        y.A.addSearchHistoryItem(t, r);
}

function x(e) {
    var t;
    let { searchContext: r, searchQueryString: n, searchEverywhere: l, offset: s } = e,
        a = (0, p.bS)(r),
        i = null != (t = _.A.getSearchMode(a)) ? t : b.z,
        o = {
            offset: s,
        };
    r.type === O.I4_.DMS
        ? h.A.fetchTabMessages({
              searchContext: r,
              searchTabs: [A.$H.MESSAGES],
              searchQueryString: n,
              searchMode: i,
              getId: () => a,
              getLimit: () => O.T_y,
              pagination: o,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: n } = e;
                  v({
                      searchContext: r,
                      searchQueryString: t,
                      searchQuery: n,
                      offset: s,
                  });
              },
          })
        : h.A.fetchMessages({
              searchContext: r,
              searchQueryString: n,
              pagination: o,
              searchMode: i,
              searchEverywhere: l,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: n } = e;
                  v({
                      searchContext: r,
                      searchQueryString: t,
                      searchQuery: n,
                      offset: s,
                  });
              },
          });
}

function T(e) {
    let t = (0, p.bS)(e),
        r = _.A.getEditorState(t);
    return null != r ? u.pe(r) : null;
}

function I(e, t) {
    var r;
    let n = (0, p.bS)(e),
        l = null != (r = _.A.getEditorState(n)) ? r : u.e_(d.ys(E.Ay)),
        s = u.t7(t, l);
    s = u.a4(s, 512);
    let i = (0, p._o)(t).filter((e) => e.type !== a.Ay.NON_TOKEN_TYPE);
    (s = u.uD(i, s, E.Ay)), (s = u.UO(0 + t.length, s)), y.A.updateSearchEditorState(e, s);
}

function j(e) {
    c._.dispatch(O.jej.SET_SEARCH_QUERY, e);
}
let L = {
    cleanUpSearchState: R,
    fetchMessages: x,
    setSearchInputText: I,
    appendToSearchInputText: function (e, t) {
        let r = T(e);
        if (null == r) return;
        let n = r.endsWith(" ") ? r + t : r + " " + t;
        I(e, n),
            x({
                searchContext: e,
                searchQueryString: n,
                offset: 0,
            });
    },
    getSearchInputText: T,
    ensureSearchInputDecorators: function (e) {
        let t,
            r = (0, p.bS)(e),
            n = _.A.getEditorState(r),
            s = null == n ? void 0 : n.getCurrentContent(),
            a = null == n ? void 0 : n.getSelection();
        null != s && null != a
            ? ((t = u.Rg(d.ys(E.Ay), s)), (t = l.EditorState.forceSelection(t, a)))
            : (t = u.e_(d.ys(E.Ay))),
            y.A.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: r, replace: n, resultsState: l, searchQuerySource: s } = e,
            { mode: a, cursorScope: i } = l,
            o = 0;
        null != a.token
            ? (o = a.token.start)
            : (null == i ? void 0 : i.currentToken) != null && (o = i.currentToken.end);
        let c = null != a.token ? a.token.end : o;
        j({
            query: t,
            anchor: o,
            focus: c,
            performSearch: r,
            replace: n,
            searchQuerySource: s,
        });
    },
    dispatchSetSearchQuery: j,
    transitionStateToSearchContext: function (e, t, r) {
        let n = (0, p.bS)(e),
            l = _.A.getEditorState(n);
        if (null == l) return;
        let s = u.pe(l),
            a = t.type === O.I4_.CHANNEL ? (0, p.EH)(s) : s;
        I(t, (a = a.trim()));
        let o = _.A.getSearchMode(n);
        y.A.updateSearchMode(t, null != o ? o : b.z), S.A.transferSession(e, t);
        let c = (0, p._o)(a),
            d = (0, p.Zf)(c);
        S.A.refreshQueryId(t),
            (0, m.fd)({
                searchContext: t,
                query: d,
                queryString: a,
                searchQuerySource: A.Q_.SEARCH_XDM_SETTINGS,
            }),
            x({
                searchContext: t,
                searchQueryString: a,
                offset: 0,
            });
        let f = (0, p.bS)(t);
        i.A.setSelectedSearchContext(f), y.A.clearSearchEditorState(e), h.A.clearSearchMessages(n), null == r || r();
    },
    cleanUpPrivateChannelSearchState: function () {
        _.A.getSearchStateIds().forEach((e) => {
            let t = o.A.getChannel(e);
            null != t &&
                t.isPrivate() &&
                R({
                    type: O.I4_.CHANNEL,
                    channelId: t.id,
                });
        });
    },
    openSearchFiltersModal: function (e) {
        (0, m.TJ)({
            searchContext: e,
        }),
            (0, s.openModalLazy)(
                async () => {
                    let { default: t } = await r.e("47230").then(r.bind(r, 561965));
                    return (r) => {
                        var l, s;
                        return (0, n.jsx)(
                            t,
                            ((l = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, r)),
                            (s = s =
                                {
                                    searchContext: e,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            l),
                        );
                    };
                },
                {
                    modalKey: b.b,
                },
            );
    },
};
