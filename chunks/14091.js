(n.d(t, { Z: () => z }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    p = n(603263),
    h = n(410030),
    f = n(169223),
    m = n(778877),
    g = n(903488),
    b = n(416638),
    _ = n(695346),
    y = n(592125),
    C = n(768119),
    x = n(944486),
    v = n(585483),
    j = n(72006),
    O = n(965996),
    E = n(652399),
    S = n(970850),
    I = n(861262),
    P = n(251285),
    Z = n(406326),
    N = n(994463),
    T = n(611004),
    A = n(619753),
    w = n(902733),
    R = n(981631),
    k = n(531578),
    M = n(388032),
    D = n(682065);
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
function U(e) {
    let t = null != e ? C.Z.getEditorState(e) : null;
    return null != t ? j.Sq(t) : null;
}
class B extends i.Component {
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
                    i = 0,
                    l = 0;
                (null != t.props.searchResults &&
                    s()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            (null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++);
                        }),
                    0 === n
                        ? (0, E.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: U(t.props.searchId),
                              searchQuery: C.Z.getQuery(t.props.searchId)
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
                              pageNumEmbeds: i,
                              pageNumAttachments: r,
                              searchQueryString: U(t.props.searchId),
                              searchQuery: C.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let F = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: D.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: D.emptyResultsContent,
            children: t
        })
    });
};
class H extends i.PureComponent {
    componentDidMount() {
        v.S.subscribe(R.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        v.S.unsubscribe(R.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
        let { searchAnalyticsId: e, searchType: t, searchResults: n, searchId: i } = this.props,
            { offset: l, hasError: o, totalResults: a, isHistoricalIndexing: s, isSearching: c } = this.props.search;
        return (0, r.jsxs)('section', {
            className: D.searchResultsWrap,
            'aria-label': M.intl.string(M.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: D.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter(),
                (0, r.jsx)(B, {
                    searchId: i,
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: R.vpv,
                    searchHasError: o,
                    searchTotalResults: a,
                    searchIsIndexing: s,
                    isSearching: c
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            L(this, 'scrollerRef', i.createRef()),
            L(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }),
            L(this, 'selectChannel', (e) => {
                e !== x.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            L(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            L(this, 'handleSearchModeChange', (e) => {
                let {
                    searchId: t,
                    searchType: n,
                    search: { isSearching: r },
                    searchAnalyticsId: i,
                    onSearchModeChange: l,
                    searchMode: o
                } = this.props;
                e === o ||
                    r ||
                    ((0, E.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: i,
                        mode: e
                    }),
                    l(e));
            }),
            L(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
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
                    search: { totalResults: n, isSearching: i, isHistoricalIndexing: l, documentsIndexed: o }
                } = this.props;
                return (0, r.jsx)(Z.Z, {
                    searchId: e,
                    searchMode: t,
                    onSearchModeChange: this.handleSearchModeChange,
                    totalResults: n,
                    isSearching: i,
                    isIndexing: l,
                    documentsIndexed: o
                });
            }),
            L(this, 'renderIndexing', () => {
                let e = this.props.searchType === R.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
                return (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)('div', {
                            className: (D.emptyResultsText, D.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            L(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? M.intl.string(M.t['VrK/2d']) : M.intl.string(M.t.V6nAfH);
                return (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)('div', { className: o()(D.noResultsImage, { [D.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: o()(D.emptyResultsText, D.noResults, { [D.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            L(this, 'renderError', () =>
                (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)('div', { className: D.errorImage }),
                        (0, r.jsx)('div', {
                            className: o()(D.emptyResultsText, D.errorMessage),
                            children: M.intl.string(M.t.uvDZBQ)
                        })
                    ]
                })
            ),
            L(this, 'handleSearchResultClick', (e, t) => {
                let n = y.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: i, searchType: l, searchAnalyticsId: o } = this.props,
                    { offset: a, totalResults: s } = this.props.search;
                (0, E.sL)({
                    searchId: i,
                    searchType: l,
                    searchAnalyticsId: o,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: s,
                    limit: R.vpv,
                    page: Math.floor(a / R.vpv) + 1,
                    offset: a,
                    index: t,
                    searchQueryString: U(i),
                    searchQuery: C.Z.getQuery(i)
                });
            }),
            L(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n, search: i, searchId: l, renderEmbeds: o, onPageChange: a } = this.props,
                    { totalResults: s, isSearching: c, isIndexing: u, hasError: d } = i;
                return d
                    ? this.renderError()
                    : u
                      ? this.renderIndexing()
                      : c
                        ? null
                        : s > 0
                          ? (0, r.jsx)(A.Z, {
                                search: i,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
                                searchId: l,
                                renderEmbeds: o,
                                scrollTo: this.scrollTo,
                                onPageChange: a
                            })
                          : this.renderNoResults();
            }));
    }
}
function G(e) {
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: o } = e,
        a = (0, c.cj)([C.Z], () => C.Z.getResultsState(t), [t]),
        s = (0, I.k)(t),
        u = (0, c.e7)([C.Z], () => C.Z.getAnalyticsId(t)),
        { searchResults: d, ignoreCount: h, blockCount: f } = (0, P.Z)(t),
        { searchMode: m, setSearchMode: g } = (0, S.Z)({ searchId: t }),
        b = i.useCallback(
            (e) => {
                g(e);
                let n = U(t);
                p.Nz(t, e, n);
            },
            [t, g]
        ),
        y = i.useCallback(
            (e) => {
                if (a.isSearching) return;
                let n = U(t);
                p.oO(t, e, n);
            },
            [t, a.isSearching]
        );
    return (0, r.jsx)(H, {
        searchId: t,
        search: a,
        searchAnalyticsId: u,
        searchType: s,
        searchResults: d,
        ignoreCount: h,
        blockCount: f,
        renderEmbeds: _.NA.useSetting(),
        developerMode: _.Sb.useSetting(),
        theme: l,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: o,
        onPageChange: y,
        onSearchModeChange: b,
        searchMode: m
    });
}
function V(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        o = i.useMemo(() => ({ type: R.aib.DMS }), []),
        a = (0, b.WJ)(o),
        s = (0, c.e7)([C.Z], () => C.Z.getSearchResultsQueryString(a)),
        [u, d] = i.useState(0);
    i.useEffect(() => {
        d(0);
    }, [s]);
    let p = (0, c.cj)([g.Z, C.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = g.Z.getIsFetching(a)) && e,
                isIndexing: null != (t = g.Z.getIsIndexing(a)) && t,
                isHistoricalIndexing: null != (n = g.Z.getIsHistoricalIndexing(a)) && n,
                documentsIndexed: g.Z.getDocumentsIndexed(a),
                offset: u * R.vpv,
                totalResults: null != (r = g.Z.getTotalCount(a)) ? r : 0,
                hasError: null != g.Z.getError(a),
                showBlockedResults: C.Z.shouldShowBlockedResults(a),
                showNoResultsAlt: C.Z.shouldShowNoResultsAlt(a)
            };
        }),
        h = (0, c.e7)([g.Z], () => g.Z.getLastSearchAnalyticsId()),
        { searchResults: f, ignoreCount: m, blockCount: y } = (0, P.G)(o),
        { searchMode: x, setSearchMode: v } = (0, S.Z)({ searchId: a }),
        j = i.useCallback(
            (e) => {
                v(e);
                let t = U(a);
                T.Z.fetchCrossDMMessages({
                    searchContext: o,
                    selectedPageIndex: 0,
                    queryString: null != t ? t : '',
                    searchMode: e
                });
            },
            [o, a, v]
        ),
        O = i.useCallback(
            (e) => {
                var t;
                (d(e),
                    T.Z.fetchCrossDMMessages({
                        searchContext: o,
                        queryString: null != (t = U(a)) ? t : '',
                        selectedPageIndex: e,
                        searchMode: x
                    }));
            },
            [o, a, x]
        );
    return (0, r.jsx)(H, {
        searchId: R.aib.DMS,
        search: p,
        searchAnalyticsId: h,
        searchType: R.aib.DMS,
        searchResults: f,
        ignoreCount: m,
        blockCount: y,
        renderEmbeds: _.NA.useSetting(),
        developerMode: _.Sb.useSetting(),
        theme: t,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: l,
        onPageChange: O,
        onSearchModeChange: j,
        searchMode: x
    });
}
function z(e) {
    let { searchId: t } = e,
        n = (0, h.ZP)(),
        l = (0, m.U)({ location: 'SearchResults' }),
        o = i.useRef(null),
        [a, s] = i.useState(!1),
        { enabled: c, force: u } = (0, O.f)({ location: 'SearchResults' });
    (i.useEffect(() => {
        c && u && s(!0);
    }, [u, c]),
        i.useEffect(() => {
            c &&
                (u ||
                    (t !== o.current &&
                        ((o.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            k.nw.SEARCH_RESULTS,
                            () => s(!0),
                            () => s(!1)
                        ))));
        }, [c, u, t]));
    let d = i.useCallback(() => {
        s(!1);
    }, []);
    return l && t === R.aib.DMS
        ? (0, r.jsx)(V, {
              theme: n,
              isFeedbackVisible: a,
              dismissFeedbackEntrypoint: d
          })
        : (0, r.jsx)(G, {
              theme: n,
              searchId: t,
              isFeedbackVisible: a,
              dismissFeedbackEntrypoint: d
          });
}
