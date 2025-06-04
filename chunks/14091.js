n.d(t, { Z: () => M }), n(388685), n(35282), n(49124);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    p = n(603263),
    h = n(410030),
    f = n(169223),
    m = n(695346),
    g = n(592125),
    b = n(768119),
    _ = n(944486),
    x = n(585483),
    y = n(72006),
    C = n(965996),
    v = n(652399),
    j = n(251285),
    O = n(406326),
    E = n(994463),
    I = n(619753),
    P = n(902733),
    S = n(981631),
    Z = n(531578),
    N = n(388032),
    T = n(682065);
function A(e, t, n) {
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
class w extends i.Component {
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
        super(...e),
            (t = this),
            A(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    i = 0,
                    l = 0;
                null != t.props.searchResults &&
                    s()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && r++;
                        }),
                    0 === n
                        ? (0, v.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId
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
                              pageNumMessages: n,
                              pageNumLinks: l,
                              pageNumEmbeds: i,
                              pageNumAttachments: r
                          });
            });
    }
}
let R = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: T.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: T.emptyResultsContent,
            children: t
        })
    });
};
class k extends i.PureComponent {
    componentDidMount() {
        x.S.subscribe(S.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        x.S.unsubscribe(S.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
        let n = b.Z.getQuery(this.props.searchId);
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
            { offset: l, hasError: a, totalResults: o, isHistoricalIndexing: s, isSearching: c } = this.props.search;
        return (0, r.jsxs)('section', {
            className: T.searchResultsWrap,
            'aria-label': N.intl.string(N.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: T.scroller,
                    children: this.renderContent()
                }),
                this.renderFooter(),
                (0, r.jsx)(w, {
                    searchId: i,
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: S.vpv,
                    searchHasError: a,
                    searchTotalResults: o,
                    searchIsIndexing: s,
                    isSearching: c
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                searchMode: S.QIO.NEWEST,
                searchQuery: null
            }),
            A(this, 'scrollerRef', i.createRef()),
            A(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }),
            A(this, 'selectChannel', (e) => {
                e !== _.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            A(this, 'searchPrevious', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                if (!t) {
                    let t = null != e ? b.Z.getEditorState(e) : null,
                        n = null != t ? y.Sq(t) : null;
                    p.jn(e, S.vpv, n);
                }
            }),
            A(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                if (!t) {
                    let t = null != e ? b.Z.getEditorState(e) : null,
                        n = null != t ? y.Sq(t) : null;
                    p.m$(e, S.vpv, n);
                }
            }),
            A(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            A(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        searchType: n,
                        search: { isSearching: r },
                        searchAnalyticsId: i
                    } = this.props,
                    { searchMode: l } = this.state;
                if (e !== l && !r) {
                    (0, v.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: i,
                        mode: e
                    });
                    let r = null != t ? b.Z.getEditorState(t) : null,
                        l = null != r ? y.Sq(r) : null;
                    p.Nz(t, e, l), this.setState({ searchMode: e });
                }
            }),
            A(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
            }),
            A(this, 'renderFooter', () => (this.props.isFeedbackVisible ? (0, r.jsx)(P.Z, {}) : null)),
            A(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: i, documentsIndexed: l } = this.props.search;
                return (0, r.jsx)(O.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: i,
                    documentsIndexed: l
                });
            }),
            A(this, 'renderIndexing', () => {
                let e = b.Z.getSearchType(this.props.searchId) === S.aib.GUILD ? N.intl.string(N.t.AXPbZm) : N.intl.string(N.t.Q0JJjo);
                return (0, r.jsxs)(R, {
                    children: [
                        (0, r.jsx)(E.Z, {}),
                        (0, r.jsx)('div', {
                            className: (T.emptyResultsText, T.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            A(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? N.intl.string(N.t['VrK/2d']) : N.intl.string(N.t.V6nAfH);
                return (0, r.jsxs)(R, {
                    children: [
                        (0, r.jsx)('div', { className: a()(T.noResultsImage, { [T.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: a()(T.emptyResultsText, T.noResults, { [T.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            A(this, 'renderError', () =>
                (0, r.jsxs)(R, {
                    children: [
                        (0, r.jsx)('div', { className: T.errorImage }),
                        (0, r.jsx)('div', {
                            className: a()(T.emptyResultsText, T.errorMessage),
                            children: N.intl.string(N.t.uvDZBQ)
                        })
                    ]
                })
            ),
            A(this, 'handleSearchResultClick', (e, t) => {
                let n = g.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: i, searchType: l, searchAnalyticsId: a } = this.props,
                    { offset: o, totalResults: s } = this.props.search;
                (0, v.sL)({
                    searchId: i,
                    searchType: l,
                    searchAnalyticsId: a,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: s,
                    limit: S.vpv,
                    page: Math.floor(o / S.vpv) + 1,
                    offset: o,
                    index: t
                });
            }),
            A(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: i, isSearching: l, isIndexing: a, hasError: o } = this.props.search;
                return o
                    ? this.renderError()
                    : a
                      ? this.renderIndexing()
                      : l
                        ? null
                        : i > 0
                          ? (0, r.jsx)(I.Z, {
                                search: this.props.search,
                                searchResults: e,
                                onClick: this.handleSearchResultClick,
                                blockCount: t,
                                ignoreCount: n,
                                searchId: this.props.searchId,
                                renderEmbeds: this.props.renderEmbeds,
                                scrollTo: this.scrollTo
                            })
                          : this.renderNoResults();
            });
    }
}
function M(e) {
    let { searchId: t } = e,
        n = (0, c.cj)([b.Z], () => b.Z.getResultsState(t), [t]),
        { searchAnalyticsId: l, searchType: a } = (0, c.cj)(
            [b.Z],
            () => ({
                searchAnalyticsId: b.Z.getAnalyticsId(t),
                searchType: b.Z.getSearchType()
            }),
            [t]
        ),
        o = (0, h.ZP)(),
        { searchResults: s, ignoreCount: u, blockCount: d } = (0, j.Z)(t),
        p = i.useRef(null),
        [g, _] = i.useState(!1),
        { enabled: x, force: y } = (0, C.f)({ location: 'SearchResults' });
    return (
        i.useEffect(() => {
            x && y && _(!0);
        }, [y, x]),
        i.useEffect(() => {
            x &&
                (y ||
                    (t !== p.current &&
                        ((p.current = t),
                        f.Z.possiblyShowFeedbackModal(
                            Z.nw.SEARCH_RESULTS,
                            () => _(!0),
                            () => _(!1)
                        ))));
        }, [x, y, t]),
        (0, r.jsx)(k, {
            searchId: t,
            search: n,
            searchAnalyticsId: l,
            searchType: a,
            searchResults: s,
            ignoreCount: u,
            blockCount: d,
            renderEmbeds: m.NA.useSetting(),
            developerMode: m.Sb.useSetting(),
            theme: o,
            isFeedbackVisible: g
        })
    );
}
