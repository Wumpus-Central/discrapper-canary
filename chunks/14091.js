(r.d(t, {
    $: () => D,
    Z: () => q
}),
    r(388685),
    r(35282));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(392711),
    i = r.n(o),
    c = r(442837),
    u = r(481060),
    d = r(447543),
    h = r(603263),
    p = r(410030),
    f = r(169223),
    g = r(778877),
    m = r(903488),
    b = r(416638),
    y = r(695346),
    S = r(592125),
    x = r(768119),
    O = r(944486),
    j = r(585483),
    v = r(72006),
    _ = r(965996),
    E = r(652399),
    C = r(970850),
    I = r(861262),
    R = r(251285),
    P = r(406326),
    T = r(994463),
    N = r(611004),
    k = r(619753),
    w = r(902733),
    Z = r(981631),
    A = r(531578),
    M = r(388032),
    F = r(682065);
function L(e, t, r) {
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
                let r = 0,
                    n = 0,
                    s = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    i()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (r++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && n++);
                        }),
                    0 === r
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
                              pageNumMessages: r,
                              pageNumLinks: l,
                              pageNumEmbeds: s,
                              pageNumAttachments: n,
                              searchQueryString: D(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let B = (e) => {
    let { children: t } = e;
    return (0, n.jsx)('div', {
        className: F.emptyResultsWrap,
        children: (0, n.jsx)('div', {
            className: F.emptyResultsContent,
            children: t
        })
    });
};
class U extends s.PureComponent {
    componentDidMount() {
        j.S.subscribe(Z.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        j.S.unsubscribe(Z.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
            'aria-label': M.intl.string(M.t.zkoeq6),
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
            L(this, 'scrollerRef', s.createRef()),
            L(this, 'scrollTo', (e, t, r) => {
                let n = this.scrollerRef.current;
                if (null == n) return;
                let s = n.getScrollerState().scrollTop - e;
                n.scrollTo({
                    to: s,
                    animate: t,
                    callback: r
                });
            }),
            L(this, 'selectChannel', (e) => {
                e !== O.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            L(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                h.qt(e);
            }),
            L(this, 'handleSearchModeChange', (e) => {
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
                    ((0, E.zW)({
                        searchId: t,
                        searchType: r,
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
                    ? (0, n.jsx)(w.Z, {
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
            L(this, 'renderIndexing', () => {
                let e = this.props.searchType === Z.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
                return (0, n.jsxs)(B, {
                    children: [
                        (0, n.jsx)(T.Z, {}),
                        (0, n.jsx)('div', {
                            className: (F.emptyResultsText, F.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            L(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? M.intl.string(M.t['VrK/2d']) : M.intl.string(M.t.V6nAfH);
                return (0, n.jsxs)(B, {
                    children: [
                        (0, n.jsx)('div', { className: a()(F.noResultsImage, { [F.alt]: e }) }),
                        (0, n.jsx)('div', {
                            className: a()(F.emptyResultsText, F.noResults, { [F.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            L(this, 'renderError', () =>
                (0, n.jsxs)(B, {
                    children: [
                        (0, n.jsx)('div', { className: F.errorImage }),
                        (0, n.jsx)('div', {
                            className: a()(F.emptyResultsText, F.errorMessage),
                            children: M.intl.string(M.t.uvDZBQ)
                        })
                    ]
                })
            ),
            L(this, 'handleSearchResultClick', (e, t) => {
                let r = S.Z.getChannel(e.channel_id),
                    n = null != r ? r.getGuildId() : null,
                    { searchId: s, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: o, totalResults: i } = this.props.search;
                (0, E.sL)({
                    searchId: s,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: n,
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
                let { searchResults: e, blockCount: t, ignoreCount: r, search: s, searchId: l, renderEmbeds: a, onPageChange: o } = this.props,
                    { totalResults: i, isSearching: c, isIndexing: u, hasError: d } = s;
                return d
                    ? this.renderError()
                    : u
                      ? this.renderIndexing()
                      : c
                        ? null
                        : i > 0
                          ? (0, n.jsx)(k.Z, {
                                search: s,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: r,
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
    let { searchId: t, isFeedbackVisible: r, theme: l, dismissFeedbackEntrypoint: a } = e,
        o = (0, c.cj)([x.Z], () => x.Z.getResultsState(t), [t]),
        i = (0, I.k)(t),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: p, blockCount: f } = (0, R.Z)(t),
        { searchMode: g, setSearchMode: m } = (0, C.Z)({ searchId: t }),
        b = s.useCallback(
            (e) => {
                m(e);
                let r = D(t);
                h.Nz(t, e, r);
            },
            [t, m]
        ),
        S = s.useCallback(
            (e) => {
                if (o.isSearching) return;
                let r = D(t);
                h.oO(t, e, r);
            },
            [t, o.isSearching]
        ),
        O = s.useDeferredValue(d),
        j = s.useDeferredValue(o);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(U, {
                searchId: t,
                search: j,
                searchAnalyticsId: u,
                searchType: i,
                searchResults: O,
                ignoreCount: p,
                blockCount: f,
                renderEmbeds: y.NA.useSetting(),
                developerMode: y.Sb.useSetting(),
                theme: l,
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: a,
                onPageChange: S,
                onSearchModeChange: b,
                searchMode: g
            }),
            (0, n.jsx)(H, {
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
function z(e) {
    let { theme: t, isFeedbackVisible: r, dismissFeedbackEntrypoint: l } = e,
        a = s.useMemo(() => ({ type: Z.aib.DMS }), []),
        o = (0, b.WJ)(a),
        i = (0, c.cj)([m.Z, x.Z], () => {
            var e, t, r, n;
            return {
                isSearching: null != (e = m.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = m.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (r = m.Z.getIsHistoricalIndexing(o)) && r,
                documentsIndexed: m.Z.getDocumentsIndexed(o),
                offset: x.Z.getOffset(o),
                totalResults: null != (n = m.Z.getTotalCount(o)) ? n : 0,
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
        O = s.useCallback(
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
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(U, {
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
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: l,
                onPageChange: O,
                onSearchModeChange: S,
                searchMode: f
            }),
            (0, n.jsx)(H, {
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
function q(e) {
    let { searchId: t } = e,
        r = (0, p.ZP)(),
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
        ? (0, n.jsx)(z, {
              theme: r,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          })
        : (0, n.jsx)(G, {
              theme: r,
              searchId: t,
              isFeedbackVisible: o,
              dismissFeedbackEntrypoint: d
          });
}
