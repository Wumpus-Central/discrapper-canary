(n.d(t, { Z: () => z }), n(388685), n(35282), n(49124));
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
    m = n(977885),
    g = n(778877),
    b = n(903488),
    _ = n(416638),
    y = n(695346),
    C = n(592125),
    x = n(768119),
    v = n(944486),
    j = n(585483),
    O = n(72006),
    E = n(965996),
    S = n(652399),
    I = n(861262),
    P = n(251285),
    Z = n(406326),
    N = n(994463),
    T = n(619753),
    A = n(902733),
    w = n(981631),
    R = n(531578),
    k = n(862825),
    M = n(388032),
    L = n(682065);
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
function U(e) {
    let t = null != e ? x.Z.getEditorState(e) : null;
    return null != t ? O.Sq(t) : null;
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
            D(this, 'autoAnalytics', function () {
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
                        ? (0, S.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              searchQueryString: U(t.props.searchId),
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          })
                        : (0, S.hM)({
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
                              searchQuery: x.Z.getQuery(t.props.searchId)
                          }));
            }));
    }
}
let F = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: L.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: L.emptyResultsContent,
            children: t
        })
    });
};
class H extends i.PureComponent {
    componentDidMount() {
        j.S.subscribe(w.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        j.S.unsubscribe(w.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
        let n = x.Z.getQuery(this.props.searchId);
        JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) &&
            this.setState({
                searchQuery: n,
                searchMode: p.Vj({
                    sort_by: null == n ? void 0 : n.sort_by,
                    sort_order: null == n ? void 0 : n.sort_order
                })
            });
    }
    render() {
        let { searchAnalyticsId: e, searchType: t, searchResults: n, searchId: i } = this.props,
            { offset: l, hasError: o, totalResults: a, isHistoricalIndexing: s, isSearching: c } = this.props.search;
        return (0, r.jsxs)('section', {
            className: L.searchResultsWrap,
            'aria-label': M.intl.string(M.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: L.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter(),
                (0, r.jsx)(B, {
                    searchId: i,
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: w.vpv,
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
            D(this, 'state', {
                searchMode: w.QIO.NEWEST,
                searchQuery: null
            }),
            D(this, 'scrollerRef', i.createRef()),
            D(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }),
            D(this, 'selectChannel', (e) => {
                e !== v.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            D(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            D(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        searchType: n,
                        search: { isSearching: r },
                        searchAnalyticsId: i
                    } = this.props,
                    { searchMode: l } = this.state;
                if (e !== l && !r) {
                    (0, S.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: i,
                        mode: e
                    });
                    let r = null != t ? x.Z.getEditorState(t) : null,
                        l = null != r ? O.Sq(r) : null;
                    (p.Nz(t, e, l), this.setState({ searchMode: e }));
                }
            }),
            D(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
            }),
            D(this, 'renderFooter', () =>
                this.props.isFeedbackVisible
                    ? (0, r.jsx)(A.Z, {
                          searchId: this.props.searchId,
                          searchType: this.props.searchType,
                          dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
                      })
                    : null
            ),
            D(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: i, documentsIndexed: l } = this.props.search;
                return (0, r.jsx)(Z.Z, {
                    searchId: this.props.searchId,
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: i,
                    documentsIndexed: l
                });
            }),
            D(this, 'renderIndexing', () => {
                let e = this.props.searchType === w.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
                return (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)('div', {
                            className: (L.emptyResultsText, L.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            D(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? M.intl.string(M.t['VrK/2d']) : M.intl.string(M.t.V6nAfH);
                return (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)('div', { className: o()(L.noResultsImage, { [L.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: o()(L.emptyResultsText, L.noResults, { [L.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            D(this, 'renderError', () =>
                (0, r.jsxs)(F, {
                    children: [
                        (0, r.jsx)('div', { className: L.errorImage }),
                        (0, r.jsx)('div', {
                            className: o()(L.emptyResultsText, L.errorMessage),
                            children: M.intl.string(M.t.uvDZBQ)
                        })
                    ]
                })
            ),
            D(this, 'handleSearchResultClick', (e, t) => {
                let n = C.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: i, searchType: l, searchAnalyticsId: o } = this.props,
                    { offset: a, totalResults: s } = this.props.search;
                (0, S.sL)({
                    searchId: i,
                    searchType: l,
                    searchAnalyticsId: o,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: s,
                    limit: w.vpv,
                    page: Math.floor(a / w.vpv) + 1,
                    offset: a,
                    index: t,
                    searchQueryString: U(i),
                    searchQuery: x.Z.getQuery(i)
                });
            }),
            D(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: i, isSearching: l, isIndexing: o, hasError: a } = this.props.search;
                return a
                    ? this.renderError()
                    : o
                      ? this.renderIndexing()
                      : l
                        ? null
                        : i > 0
                          ? (0, r.jsx)(T.Z, {
                                search: this.props.search,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
                                searchId: this.props.searchId,
                                renderEmbeds: this.props.renderEmbeds,
                                scrollTo: this.scrollTo,
                                onPageChange: this.props.onPageChange
                            })
                          : this.renderNoResults();
            }));
    }
}
function G(e) {
    let { searchId: t, isFeedbackVisible: n, theme: l, dismissFeedbackEntrypoint: o } = e,
        a = (0, c.cj)([x.Z], () => x.Z.getResultsState(t), [t]),
        s = (0, I.k)(t),
        u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(t)),
        d = i.useCallback(
            (e) => {
                if (a.isSearching) return;
                let n = null != t ? x.Z.getEditorState(t) : null,
                    r = null != n ? O.Sq(n) : null;
                p.oO(t, e, r);
            },
            [t, a.isSearching]
        ),
        { searchResults: h, ignoreCount: f, blockCount: m } = (0, P.Z)(t);
    return (0, r.jsx)(H, {
        searchId: t,
        search: a,
        searchAnalyticsId: u,
        searchType: s,
        searchResults: h,
        ignoreCount: f,
        blockCount: m,
        renderEmbeds: y.NA.useSetting(),
        developerMode: y.Sb.useSetting(),
        theme: l,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: o,
        onPageChange: d
    });
}
function V(e) {
    let { theme: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: l } = e,
        o = i.useMemo(() => ({ type: w.aib.DMS }), []),
        a = (0, _.WJ)(o),
        s = (0, c.e7)([x.Z], () => x.Z.getSearchResultsQueryString(a)),
        u = (0, _.jj)(o, k.sR.MESSAGES, s),
        [d, h] = i.useState(0);
    i.useEffect(() => {
        h(0);
    }, [s]);
    let f = (0, c.cj)([b.Z], () => {
            var e, t, n, r;
            return {
                isSearching: null != (e = b.Z.getIsFetching(u)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(u)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(u)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(u),
                offset: d * w.vpv,
                totalResults: null != (r = b.Z.getTotalCount(u)) ? r : 0,
                hasError: null != b.Z.getError(u),
                showBlockedResults: !1,
                showNoResultsAlt: b.Z.getShowNoResultsAlt(u)
            };
        }),
        g = (0, c.e7)([b.Z], () => b.Z.getLastSearchAnalyticsId()),
        C = i.useCallback(
            (e) => {
                var t;
                (h(e),
                    m.Z.clearSearch(),
                    m.Z.fetchMessages({
                        searchContext: o,
                        searchTabs: [k.sR.MESSAGES],
                        searchQueryString: null != (t = U(a)) ? t : '',
                        getLimit: () => w.vpv,
                        onFetchStart: (e) => {
                            let { searchContext: t, searchQueryString: n, searchQuery: r } = e,
                                i = (0, _.WJ)(t);
                            p.Vs(i, n, r);
                        },
                        pagination: { offset: e * w.vpv },
                        trackExactTotalHits: !0
                    }));
            },
            [o, a]
        ),
        { searchResults: v, ignoreCount: j, blockCount: O } = (0, P.G)(o);
    return (0, r.jsx)(H, {
        searchId: w.aib.DMS,
        search: f,
        searchAnalyticsId: g,
        searchType: w.aib.DMS,
        searchResults: v,
        ignoreCount: j,
        blockCount: O,
        renderEmbeds: y.NA.useSetting(),
        developerMode: y.Sb.useSetting(),
        theme: t,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: l,
        onPageChange: C
    });
}
function z(e) {
    let { searchId: t } = e,
        n = (0, h.ZP)(),
        l = (0, g.U)({ location: 'SearchResults' }),
        o = i.useRef(null),
        [a, s] = i.useState(!1),
        { enabled: c, force: u } = (0, E.f)({ location: 'SearchResults' });
    (i.useEffect(() => {
        c && u && s(!0);
    }, [u, c]),
        i.useEffect(() => {
            c &&
                (u ||
                    (t !== o.current &&
                        ((o.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            R.nw.SEARCH_RESULTS,
                            () => s(!0),
                            () => s(!1)
                        ))));
        }, [c, u, t]));
    let d = i.useCallback(() => {
        s(!1);
    }, []);
    return l && t === w.aib.DMS
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
