(n.d(t, {
    $: () => H,
    Z: () => Q
}),
    n(388685),
    n(35282));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(392711),
    o = n.n(i),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    h = n(603263),
    p = n(410030),
    f = n(169223),
    g = n(977885),
    m = n(778877),
    _ = n(903488),
    S = n(416638),
    y = n(695346),
    b = n(592125),
    x = n(768119),
    E = n(944486),
    C = n(585483),
    O = n(72006),
    v = n(965996),
    I = n(652399),
    j = n(970850),
    R = n(861262),
    T = n(251285),
    P = n(406326),
    N = n(994463),
    A = n(611004),
    Z = n(619753),
    k = n(902733),
    M = n(981631),
    L = n(531578),
    w = n(388032),
    F = n(682065);
function D(e, t, n) {
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
function H(e) {
    let t = null != e ? x.Z.getEditorState(e) : null;
    return null != t ? O.Sq(t) : null;
}
class B extends s.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            D(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    s = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && r++);
                        }),
                    0 === n
                        ? (0, I.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: H(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          })
                        : (0, I.hM)({
                              searchType: t.props.searchType,
                              searchId: t.props.searchId,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              prevSearchAnalyticsId: e !== t.props.searchAnalyticsId ? e : null,
                              isError: t.props.searchHasError,
                              limit: t.props.searchLimit,
                              offset: t.props.searchOffset,
                              page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                              totalResults: t.props.searchTotalResults,
                              pageResults: null != t.props.searchResults ? t.props.searchResults.length : null,
                              isIndexing: t.props.searchIsIndexing,
                              pageNumMessages: n,
                              pageNumLinks: l,
                              pageNumEmbeds: s,
                              pageNumAttachments: r,
                              searchQueryString: H(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let U = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: F.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: F.emptyResultsContent,
            children: t
        })
    });
};
class W extends s.PureComponent {
    componentDidMount() {
        C.S.subscribe(M.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        C.S.unsubscribe(M.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
    }
    render() {
        return (0, r.jsxs)('section', {
            className: F.searchResultsWrap,
            'aria-label': w.intl.string(w.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: F.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            D(this, 'scrollerRef', s.createRef()),
            D(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let s = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: s,
                    animate: t,
                    callback: n
                });
            }),
            D(this, 'selectChannel', (e) => {
                e !== E.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            D(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                (h.qt(e), g.Z.clearSearchState(e));
            }),
            D(this, 'handleSearchModeChange', (e) => {
                let {
                    searchId: t,
                    searchType: n,
                    search: { isSearching: r },
                    searchAnalyticsId: s,
                    onSearchModeChange: l,
                    searchMode: a
                } = this.props;
                e === a ||
                    r ||
                    ((0, I.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: s,
                        mode: e
                    }),
                    l(e));
            }),
            D(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                h.QY(e, !t);
            }),
            D(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, r.jsx)(k.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            D(this, 'renderHeader', () => {
                let {
                    searchId: e,
                    searchMode: t,
                    search: { totalResults: n, isSearching: s, isHistoricalIndexing: l, documentsIndexed: a }
                } = this.props;
                return (0, r.jsx)(P.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: n,
                    isSearching: s,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            D(this, 'renderIndexing', () => {
                let e = this.props.searchType === M.aib.GUILD ? w.intl.string(w.t.AXPbZm) : w.intl.string(w.t.Q0JJjo);
                return (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)('div', {
                            className: (F.emptyResultsText, F.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            D(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? w.intl.string(w.t['VrK/2d']) : w.intl.string(w.t.V6nAfH);
                return (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)('div', { className: a()(F.noResultsImage, { [F.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: a()(F.emptyResultsText, F.noResults, { [F.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            D(this, 'renderError', () =>
                (0, r.jsxs)(U, {
                    children: [
                        (0, r.jsx)('div', { className: F.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(F.emptyResultsText, F.errorMessage),
                            children: w.intl.string(w.t.uvDZBQ)
                        })
                    ]
                })
            ),
            D(this, 'handleSearchResultClick', (e, t) => {
                let n = b.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: i, totalResults: o } = this.props.search;
                (0, I.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: r,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: o,
                    limit: M.vpv,
                    page: Math.floor(i / M.vpv) + 1,
                    offset: i,
                    index: t,
                    searchQueryString: H(s),
                    searchQuery: x.Z.getQuery(s)
                });
            }),
            D(this, 'handlePageChange', (e) => {
                let { searchId: t, searchType: n, searchAnalyticsId: r } = this.props;
                ((0, I.t6)({
                    searchId: t,
                    searchType: n,
                    searchAnalyticsId: r,
                    newPageIndex: e
                }),
                    this.props.onPageChange(e));
            }),
            D(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n, search: s, searchId: l, renderEmbeds: a } = this.props,
                    { totalResults: i, isSearching: o, isIndexing: c, hasError: u } = s;
                return u
                    ? this.renderError()
                    : c
                      ? this.renderIndexing()
                      : o
                        ? null
                        : i > 0
                          ? (0, r.jsx)(Z.Z, {
                                search: s,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
                                searchId: l,
                                renderEmbeds: a,
                                scrollTo: this.scrollTo,
                                onPageChange: this.handlePageChange
                            })
                          : this.renderNoResults();
            }));
    }
}
function G(e) {
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: a } = e,
        i = (0, c.cj)([x.Z], () => x.Z.getResultsState(t), [t]),
        o = (0, R.k)(t),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: p, blockCount: f } = (0, T.Z)(t),
        { searchMode: g, setSearchMode: m } = (0, j.Z)({ searchId: t }),
        _ = s.useCallback(
            (e) => {
                m(e);
                let n = H(t);
                h.Nz(t, e, n);
            },
            [t, m]
        ),
        S = s.useCallback(
            (e) => {
                if (i.isSearching) return;
                let n = H(t);
                h.oO(t, e, n);
            },
            [t, i.isSearching]
        ),
        b = s.useDeferredValue(d),
        E = s.useDeferredValue(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(W, {
                searchId: t,
                search: E,
                searchAnalyticsId: u,
                searchType: o,
                searchResults: b,
                ignoreCount: p,
                blockCount: f,
                renderEmbeds: y.NA.useSetting(),
                developerMode: y.Sb.useSetting(),
                theme: l,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: _,
                searchMode: g
            }),
            (0, r.jsx)(B, {
                searchId: t,
                searchType: o,
                searchAnalyticsId: u,
                searchResults: d,
                searchOffset: i.offset,
                searchLimit: M.vpv,
                searchHasError: i.hasError,
                searchTotalResults: i.totalResults,
                searchIsIndexing: i.isHistoricalIndexing,
                isSearching: i.isSearching
            })
        ]
    });
}
function q(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: M.aib.DMS }), []),
        i = (0, S.WJ)(a),
        o = (0, c.cj)([_.Z, x.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = _.Z.getIsFetching(i)) && e,
                isIndexing: null != (t = _.Z.getIsIndexing(i)) && t,
                isHistoricalIndexing: null != (n = _.Z.getIsHistoricalIndexing(i)) && n,
                documentsIndexed: _.Z.getDocumentsIndexed(i),
                offset: x.Z.getOffset(i),
                totalResults: null != (r = _.Z.getTotalCount(i)) ? r : 0,
                hasError: null != _.Z.getError(i),
                showBlockedResults: x.Z.shouldShowBlockedResults(i),
                showNoResultsAlt: x.Z.shouldShowNoResultsAlt(i)
            };
        }),
        u = (0, c.e7)([_.Z], () => _.Z.getLastSearchAnalyticsId()),
        { searchResults: d, ignoreCount: h, blockCount: p } = (0, T.G)(a),
        { searchMode: f, setSearchMode: g } = (0, j.Z)({ searchId: i }),
        m = s.useCallback(
            (e) => {
                g(e);
                let t = H(i);
                A.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: null != t ? t : '',
                    searchMode: e
                });
            },
            [a, i, g]
        ),
        b = s.useCallback(
            (e) => {
                var t;
                A.Z.fetchCrossDMMessages({
                    searchContext: a,
                    queryString: null != (t = H(i)) ? t : '',
                    selectedPageIndex: e,
                    searchMode: f
                });
            },
            [a, i, f]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(W, {
                searchId: M.aib.DMS,
                search: o,
                searchAnalyticsId: u,
                searchType: M.aib.DMS,
                searchResults: d,
                ignoreCount: h,
                blockCount: p,
                renderEmbeds: y.NA.useSetting(),
                developerMode: y.Sb.useSetting(),
                theme: t,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: l,
                onPageChange: b,
                onSearchModeChange: m,
                searchMode: f
            }),
            (0, r.jsx)(B, {
                searchId: M.aib.DMS,
                searchType: M.aib.DMS,
                searchAnalyticsId: u,
                searchResults: d,
                searchOffset: o.offset,
                searchLimit: M.vpv,
                searchHasError: o.hasError,
                searchTotalResults: o.totalResults,
                searchIsIndexing: o.isHistoricalIndexing,
                isSearching: o.isSearching
            })
        ]
    });
}
function Q(e) {
    let { searchId: t } = e,
        n = (0, p.ZP)(),
        l = (0, m.U)({ location: 'SearchResults' }),
        a = s.useRef(null),
        [i, o] = s.useState(!1),
        { enabled: c, force: u } = (0, v.f)({ location: 'SearchResults' });
    (s.useEffect(() => {
        c && u && o(!0);
    }, [u, c]),
        s.useEffect(() => {
            c &&
                (u ||
                    (t !== a.current &&
                        ((a.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            L.nw.SEARCH_RESULTS,
                            () => o(!0),
                            () => o(!1)
                        ))));
        }, [c, u, t]));
    let d = s.useCallback(() => {
        o(!1);
    }, []);
    return l && t === M.aib.DMS
        ? (0, r.jsx)(q, {
              theme: n,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: d
          })
        : (0, r.jsx)(G, {
              theme: n,
              searchId: t,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: d
          });
}
