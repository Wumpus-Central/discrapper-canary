n.d(t, {
    A: () => k,
}),
    n(747238),
    n(812715),
    n(733351);
var r = n(627968),
    i = n(271830),
    a = n(192308),
    s = n(988665),
    o = n(138298),
    l = n(734057),
    c = n(203982),
    u = n(504531),
    d = n(614690),
    f = n(256796),
    p = n(822382),
    _ = n(23667),
    h = n(956467),
    m = n(408730),
    g = n(771650),
    E = n(616252),
    b = n(65600),
    y = n(145331),
    O = n(768570),
    A = n(921242),
    v = n(652215);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function N(e) {
    let t = (0, p.bS)(e);
    E.A.clearSearchEditorState(e), f.A.clearSearchMessages(t), _.A.cleanUp(t), h.A.cleanUp(t);
}

function R(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        a = (0, p.bS)(t);
    f.A.clearSearchMessages(a),
        E.A.setShowNoResultsAlt(t),
        E.A.setShowBlockedResults(t, !1),
        E.A.updateSearchResultsQuery(t, n, r, i),
        E.A.addSearchHistoryItem(t, n);
}

function w(e) {
    var t;
    let { searchContext: n, searchQueryString: r, searchEverywhere: i, offset: a } = e,
        s = (0, p.bS)(n),
        o = null != (t = b.A.getSearchMode(s)) ? t : A.z,
        l = {
            offset: a,
        };
    n.type === v.I4_.DMS
        ? f.A.fetchTabMessages({
              searchContext: n,
              searchTabs: [O.$H.MESSAGES],
              searchQueryString: r,
              searchMode: o,
              getId: () => s,
              getLimit: () => v.T_y,
              pagination: l,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  R({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          })
        : f.A.fetchMessages({
              searchContext: n,
              searchQueryString: r,
              pagination: l,
              searchMode: o,
              searchEverywhere: i,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  R({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          });
}

function P(e) {
    let t = (0, p.bS)(e),
        n = b.A.getEditorState(t);
    return null != n ? u.pe(n) : null;
}

function D(e, t) {
    var n;
    let r = (0, p.bS)(e),
        i = null != (n = b.A.getEditorState(r)) ? n : u.e_(d.ys(g.Ay)),
        a = u.t7(t, i);
    a = u.a4(a, 512);
    let o = (0, p._o)(t).filter((e) => e.type !== s.Ay.NON_TOKEN_TYPE);
    (a = u.uD(o, a, g.Ay)), (a = u.UO(0 + t.length, a)), E.A.updateSearchEditorState(e, a);
}

function x(e, t) {
    let n = P(e);
    if (null == n) return;
    let r = n.endsWith(" ") ? n + t : n + " " + t;
    D(e, r),
        w({
            searchContext: e,
            searchQueryString: r,
            offset: 0,
        });
}

function L(e) {
    c._.dispatch(v.jej.SET_SEARCH_QUERY, e);
}

function j(e, t, n) {
    let r = (0, p.bS)(e),
        i = b.A.getEditorState(r);
    if (null == i) return;
    let a = u.pe(i),
        s = t.type === v.I4_.CHANNEL ? (0, p.EH)(a) : a;
    D(t, (s = s.trim()));
    let l = b.A.getSearchMode(r);
    E.A.updateSearchMode(t, null != l ? l : A.z), m.A.transferSession(e, t);
    let c = (0, p._o)(s),
        d = (0, p.Zf)(c);
    m.A.refreshQueryId(t),
        (0, y.fd)({
            searchContext: t,
            query: d,
            queryString: s,
            searchQuerySource: O.Q_.SEARCH_XDM_SETTINGS,
        }),
        w({
            searchContext: t,
            searchQueryString: s,
            offset: 0,
        });
    let _ = (0, p.bS)(t);
    o.A.setSelectedSearchContext(_), E.A.clearSearchEditorState(e), f.A.clearSearchMessages(r), null == n || n();
}

function M() {
    b.A.getSearchStateIds().forEach((e) => {
        let t = l.A.getChannel(e);
        null != t &&
            t.isPrivate() &&
            N({
                type: v.I4_.CHANNEL,
                channelId: t.id,
            });
    });
}
let k = {
    cleanUpSearchState: N,
    fetchMessages: w,
    setSearchInputText: D,
    appendToSearchInputText: x,
    getSearchInputText: P,
    ensureSearchInputDecorators: function (e) {
        let t,
            n = (0, p.bS)(e),
            r = b.A.getEditorState(n),
            a = null == r ? void 0 : r.getCurrentContent(),
            s = null == r ? void 0 : r.getSelection();
        null != a && null != s
            ? ((t = u.Rg(d.ys(g.Ay), a)), (t = i.EditorState.forceSelection(t, s)))
            : (t = u.e_(d.ys(g.Ay))),
            E.A.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: n, replace: r, resultsState: i, searchQuerySource: a } = e,
            { mode: s, cursorScope: o } = i,
            l = 0;
        null != s.token
            ? (l = s.token.start)
            : (null == o ? void 0 : o.currentToken) != null && (l = o.currentToken.end);
        let c = null != s.token ? s.token.end : l;
        L({
            query: t,
            anchor: l,
            focus: c,
            performSearch: n,
            replace: r,
            searchQuerySource: a,
        });
    },
    dispatchSetSearchQuery: L,
    transitionStateToSearchContext: j,
    cleanUpPrivateChannelSearchState: M,
    openSearchFiltersModal: function (e) {
        (0, y.TJ)({
            searchContext: e,
        }),
            (0, a.openModalLazy)(
                async () => {
                    let { default: t } = await n.e("47230").then(n.bind(n, 561965));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            C(I({}, n), {
                                searchContext: e,
                            }),
                        );
                },
                {
                    modalKey: A.b,
                },
            );
    },
};
