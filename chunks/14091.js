(r.d(t, {
    $: () => H,
    Z: () => Q
}),
    r(388685),
    r(35282));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(392711),
    o = r.n(i),
    c = r(442837),
    u = r(481060),
    d = r(447543),
    h = r(603263),
    p = r(410030),
    f = r(169223),
    g = r(977885),
    m = r(778877),
    _ = r(903488),
    S = r(416638),
    y = r(695346),
    b = r(592125),
    x = r(768119),
    E = r(944486),
    C = r(585483),
    O = r(72006),
    I = r(965996),
    v = r(652399),
    j = r(970850),
    R = r(861262),
    T = r(251285),
    P = r(406326),
    N = r(994463),
    A = r(611004),
    Z = r(619753),
    k = r(902733),
    M = r(981631),
    L = r(531578),
    w = r(388032),
    F = r(682065);
function D(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
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
                let r = 0,
                    n = 0,
                    s = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (r++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && n++);
                        }),
                    0 === r
                        ? (0, v.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: H(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          })
                        : (0, v.hM)({
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
                              pageNumMessages: r,
                              pageNumLinks: l,
                              pageNumEmbeds: s,
                              pageNumAttachments: n,
                              searchQueryString: H(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let U = (e) => {
    let { children: t } = e;
    return (0, n.jsx)('div', {
        className: F.emptyResultsWrap,
        children: (0, n.jsx)('div', {
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
        return (0, n.jsxs)('section', {
            className: F.searchResultsWrap,
            'aria-label': w.intl.string(w.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, n.jsx)(u.Den, {
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
            D(this, 'scrollTo', (e, t, r) => {
                let n = this.scrollerRef.current;
                if (null == n) return;
                let s = n.getScrollerState().scrollTop - e;
                n.scrollTo({
                    to: s,
                    animate: t,
                    callback: r
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
                    searchType: r,
                    search: { isSearching: n },
                    searchAnalyticsId: s,
                    onSearchModeChange: l,
                    searchMode: a
                } = this.props;
                e === a ||
                    n ||
                    ((0, v.zW)({
                        searchId: t,
                        searchType: r,
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
                    ? (0, n.jsx)(k.Z, {
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
                    search: { totalResults: r, isSearching: s, isHistoricalIndexing: l, documentsIndexed: a }
                } = this.props;
                return (0, n.jsx)(P.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: r,
                    isSearching: s,
                    isIndexing: l,
                    documentsIndexed: a
                });
            }),
            D(this, 'renderIndexing', () => {
                let e = this.props.searchType === M.aib.GUILD ? w.intl.string(w.t.AXPbZm) : w.intl.string(w.t.Q0JJjo);
                return (0, n.jsxs)(U, {
                    children: [
                        (0, n.jsx)(N.Z, {}),
                        (0, n.jsx)('div', {
                            className: (F.emptyResultsText, F.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            D(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? w.intl.string(w.t['VrK/2d']) : w.intl.string(w.t.V6nAfH);
                return (0, n.jsxs)(U, {
                    children: [
                        (0, n.jsx)('div', { className: a()(F.noResultsImage, { [F.alt]: e }) }),
                        (0, n.jsx)('div', {
                            className: a()(F.emptyResultsText, F.noResults, { [F.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            D(this, 'renderError', () =>
                (0, n.jsxs)(U, {
                    children: [
                        (0, n.jsx)('div', { className: F.errorImage }),
                        (0, n.jsx)('div', {
                            className: a()(F.emptyResultsText, F.errorMessage),
                            children: w.intl.string(w.t.uvDZBQ)
                        })
                    ]
                })
            ),
            D(this, 'handleSearchResultClick', (e, t) => {
                let r = b.Z.getChannel(e.channel_id),
                    n = null != r ? r.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: i, totalResults: o } = this.props.search;
                (0, v.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: n,
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
                let { searchId: t, searchType: r, searchAnalyticsId: n } = this.props;
                ((0, v.t6)({
                    searchId: t,
                    searchType: r,
                    searchAnalyticsId: n,
                    newPageIndex: e
                }),
                    this.props.onPageChange(e));
            }),
            D(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: r, search: s, searchId: l, renderEmbeds: a } = this.props,
                    { totalResults: i, isSearching: o, isIndexing: c, hasError: u } = s;
                return u
                    ? this.renderError()
                    : c
                      ? this.renderIndexing()
                      : o
                        ? null
                        : i > 0
                          ? (0, n.jsx)(Z.Z, {
                                search: s,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: r,
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
    let { searchId: t, isFeedbackVisible: r, theme: l, dismissFeedbackEntrypoint: a } = e,
        i = (0, c.cj)([x.Z], () => x.Z.getResultsState(t), [t]),
        o = (0, R.k)(t),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: p, blockCount: f } = (0, T.Z)(t),
        { searchMode: g, setSearchMode: m } = (0, j.Z)({ searchId: t }),
        _ = s.useCallback(
            (e) => {
                m(e);
                let r = H(t);
                h.Nz(t, e, r);
            },
            [t, m]
        ),
        S = s.useCallback(
            (e) => {
                if (i.isSearching) return;
                let r = H(t);
                h.oO(t, e, r);
            },
            [t, i.isSearching]
        ),
        b = s.useDeferredValue(d),
        E = s.useDeferredValue(i);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(W, {
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
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: _,
                searchMode: g
            }),
            (0, n.jsx)(B, {
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
    let { theme: t, isFeedbackVisible: r, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: M.aib.DMS }), []),
        i = (0, S.WJ)(a),
        o = (0, c.cj)([_.Z, x.Z], () => {
            var e, t, r, n;
            return {
                isSearching: null != (e = _.Z.getIsFetching(i)) && e,
                isIndexing: null != (t = _.Z.getIsIndexing(i)) && t,
                isHistoricalIndexing: null != (r = _.Z.getIsHistoricalIndexing(i)) && r,
                documentsIndexed: _.Z.getDocumentsIndexed(i),
                offset: x.Z.getOffset(i),
                totalResults: null != (n = _.Z.getTotalCount(i)) ? n : 0,
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
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(W, {
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
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: l,
                onPageChange: b,
                onSearchModeChange: m,
                searchMode: f
            }),
            (0, n.jsx)(B, {
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
        r = (0, p.ZP)(),
        l = (0, m.U)({ location: 'SearchResults' }),
        a = s.useRef(null),
        [i, o] = s.useState(!1),
        { enabled: c, force: u } = (0, I.f)({ location: 'SearchResults' });
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
        ? (0, n.jsx)(q, {
              theme: r,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: d
          })
        : (0, n.jsx)(G, {
              theme: r,
              searchId: t,
              isFeedbackVisible: i,
              dismissFeedbackEntrypoint: d
          });
}
