(n.d(t, {
    $: () => D,
    Z: () => z
}),
    n(388685),
    n(35282));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    i = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    h = n(603263),
    p = n(410030),
    f = n(169223),
    g = n(778877),
    m = n(903488),
    b = n(416638),
    y = n(695346),
    S = n(592125),
    x = n(768119),
    j = n(944486),
    O = n(585483),
    v = n(72006),
    _ = n(965996),
    E = n(652399),
    C = n(970850),
    I = n(861262),
    R = n(251285),
    P = n(406326),
    T = n(994463),
    N = n(611004),
    k = n(619753),
    w = n(902733),
    Z = n(981631),
    A = n(531578),
    M = n(388032),
    F = n(682065);
function L(e, t, n) {
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
function D(e) {
    let t = null != e ? x.Z.getEditorState(e) : null;
    return null != t ? v.Sq(t) : null;
}
class H extends s.Component {
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
            L(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    s = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    i()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && r++);
                        }),
                    0 === n
                        ? (0, E.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: D(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          })
                        : (0, E.hM)({
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
                              searchQueryString: D(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let B = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: F.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: F.emptyResultsContent,
            children: t
        })
    });
};
class U extends s.PureComponent {
    componentDidMount() {
        O.S.subscribe(Z.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        O.S.unsubscribe(Z.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
            'aria-label': M.intl.string(M.t.zkoeq6),
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
            L(this, 'scrollerRef', s.createRef()),
            L(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let s = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: s,
                    animate: t,
                    callback: n
                });
            }),
            L(this, 'selectChannel', (e) => {
                e !== j.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            L(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                h.qt(e);
            }),
            L(this, 'handleSearchModeChange', (e) => {
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
                    ((0, E.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: s,
                        mode: e
                    }),
                    l(e));
            }),
            L(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                h.QY(e, !t);
            }),
            L(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, r.jsx)(w.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            L(this, 'renderHeader', () => {
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
            L(this, 'renderIndexing', () => {
                let e = this.props.searchType === Z.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
                return (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)(T.Z, {}),
                        (0, r.jsx)('div', {
                            className: (F.emptyResultsText, F.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            L(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? M.intl.string(M.t['VrK/2d']) : M.intl.string(M.t.V6nAfH);
                return (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)('div', { className: a()(F.noResultsImage, { [F.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: a()(F.emptyResultsText, F.noResults, { [F.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            L(this, 'renderError', () =>
                (0, r.jsxs)(B, {
                    children: [
                        (0, r.jsx)('div', { className: F.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(F.emptyResultsText, F.errorMessage),
                            children: M.intl.string(M.t.uvDZBQ)
                        })
                    ]
                })
            ),
            L(this, 'handleSearchResultClick', (e, t) => {
                let n = S.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: o, totalResults: i } = this.props.search;
                (0, E.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: i,
                    limit: Z.vpv,
                    page: Math.floor(o / Z.vpv) + 1,
                    offset: o,
                    index: t,
                    searchQueryString: D(s),
                    searchQuery: x.Z.getQuery(s)
                });
            }),
            L(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n, search: s, searchId: l, renderEmbeds: a, onPageChange: o } = this.props,
                    { totalResults: i, isSearching: c, isIndexing: u, hasError: d } = s;
                return d
                    ? this.renderError()
                    : u
                      ? this.renderIndexing()
                      : c
                        ? null
                        : i > 0
                          ? (0, r.jsx)(k.Z, {
                                search: s,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
                                searchId: l,
                                renderEmbeds: a,
                                scrollTo: this.scrollTo,
                                onPageChange: o
                            })
                          : this.renderNoResults();
            }));
    }
}
function G(e) {
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: a } = e,
        o = (0, c.cj)([x.Z], () => x.Z.getResultsState(t), [t]),
        i = (0, I.k)(t),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: p, blockCount: f } = (0, R.Z)(t),
        { searchMode: g, setSearchMode: m } = (0, C.Z)({ searchId: t }),
        b = s.useCallback(
            (e) => {
                m(e);
                let n = D(t);
                h.Nz(t, e, n);
            },
            [t, m]
        ),
        S = s.useCallback(
            (e) => {
                if (o.isSearching) return;
                let n = D(t);
                h.oO(t, e, n);
            },
            [t, o.isSearching]
        ),
        j = s.useDeferredValue(d),
        O = s.useDeferredValue(o);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U, {
                searchId: t,
                search: O,
                searchAnalyticsId: u,
                searchType: i,
                searchResults: j,
                ignoreCount: p,
                blockCount: f,
                renderEmbeds: y.NA.useSetting(),
                developerMode: y.Sb.useSetting(),
                theme: l,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: b,
                searchMode: g
            }),
            (0, r.jsx)(H, {
                searchId: t,
                searchType: i,
                searchAnalyticsId: u,
                searchResults: d,
                searchOffset: o.offset,
                searchLimit: Z.vpv,
                searchHasError: o.hasError,
                searchTotalResults: o.totalResults,
                searchIsIndexing: o.isHistoricalIndexing,
                isSearching: o.isSearching
            })
        ]
    });
}
function W(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: Z.aib.DMS }), []),
        o = (0, b.WJ)(a),
        i = (0, c.cj)([m.Z, x.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = m.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = m.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = m.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: m.Z.getDocumentsIndexed(o),
                offset: x.Z.getOffset(o),
                totalResults: null != (r = m.Z.getTotalCount(o)) ? r : 0,
                hasError: null != m.Z.getError(o),
                showBlockedResults: x.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: x.Z.shouldShowNoResultsAlt(o)
            };
        }),
        u = (0, c.e7)([m.Z], () => m.Z.getLastSearchAnalyticsId()),
        { searchResults: d, ignoreCount: h, blockCount: p } = (0, R.G)(a),
        { searchMode: f, setSearchMode: g } = (0, C.Z)({ searchId: o }),
        S = s.useCallback(
            (e) => {
                g(e);
                let t = D(o);
                N.Z.fetchCrossDMMessages({
                    searchContext: a,
                    selectedPageIndex: 0,
                    queryString: null != t ? t : '',
                    searchMode: e
                });
            },
            [a, o, g]
        ),
        j = s.useCallback(
            (e) => {
                var t;
                N.Z.fetchCrossDMMessages({
                    searchContext: a,
                    queryString: null != (t = D(o)) ? t : '',
                    selectedPageIndex: e,
                    searchMode: f
                });
            },
            [a, o, f]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U, {
                searchId: Z.aib.DMS,
                search: i,
                searchAnalyticsId: u,
                searchType: Z.aib.DMS,
                searchResults: d,
                ignoreCount: h,
                blockCount: p,
                renderEmbeds: y.NA.useSetting(),
                developerMode: y.Sb.useSetting(),
                theme: t,
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: l,
                onPageChange: j,
                onSearchModeChange: S,
                searchMode: f
            }),
            (0, r.jsx)(H, {
                searchId: Z.aib.DMS,
                searchType: Z.aib.DMS,
                searchAnalyticsId: u,
                searchResults: d,
                searchOffset: i.offset,
                searchLimit: Z.vpv,
                searchHasError: i.hasError,
                searchTotalResults: i.totalResults,
                searchIsIndexing: i.isHistoricalIndexing,
                isSearching: i.isSearching
            })
        ]
    });
}
function z(e) {
    let { searchId: t } = e,
        n = (0, p.ZP)(),
        l = (0, g.U)({ location: 'SearchResults' }),
        a = s.useRef(null),
        [o, i] = s.useState(!1),
        { enabled: c, force: u } = (0, _.f)({ location: 'SearchResults' });
    (s.useEffect(() => {
        c && u && i(!0);
    }, [u, c]),
        s.useEffect(() => {
            c &&
                (u ||
                    (t !== a.current &&
                        ((a.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            A.nw.SEARCH_RESULTS,
                            () => i(!0),
                            () => i(!1)
                        ))));
        }, [c, u, t]));
    let d = s.useCallback(() => {
        i(!1);
    }, []);
    return l && t === Z.aib.DMS
        ? (0, r.jsx)(W, {
              theme: n,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          })
        : (0, r.jsx)(G, {
              theme: n,
              searchId: t,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          });
}
