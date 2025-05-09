n.d(t, { Z: () => A }), n(388685), n(35282), n(49124);
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
    f = n(695346),
    m = n(592125),
    g = n(768119),
    b = n(944486),
    _ = n(585483),
    y = n(72006),
    x = n(652399),
    C = n(251285),
    v = n(406326),
    j = n(994463),
    O = n(619753),
    E = n(981631),
    I = n(388032),
    S = n(682065);
function P(e, t, n) {
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
class Z extends i.Component {
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
            P(this, 'autoAnalytics', function () {
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
                        ? (0, x.Qb)({
                              searchId: t.props.searchId,
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId
                          })
                        : (0, x.hM)({
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
let N = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: S.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: S.emptyResultsContent,
            children: t
        })
    });
};
class T extends i.PureComponent {
    componentDidMount() {
        _.S.subscribe(E.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        _.S.unsubscribe(E.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
        let n = g.Z.getQuery(this.props.searchId);
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
            className: S.searchResultsWrap,
            'aria-label': I.intl.string(I.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: S.scroller,
                    children: this.renderContent()
                }),
                (0, r.jsx)(Z, {
                    searchId: i,
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: l,
                    searchLimit: E.vpv,
                    searchHasError: o,
                    searchTotalResults: a,
                    searchIsIndexing: s,
                    isSearching: c
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                searchMode: E.QIO.NEWEST,
                searchQuery: null
            }),
            P(this, 'scrollerRef', i.createRef()),
            P(this, 'scrollTo', (e, t, n) => {
                let r = this.scrollerRef.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n
                });
            }),
            P(this, 'selectChannel', (e) => {
                e !== b.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e);
            }),
            P(this, 'searchPrevious', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                if (!t) {
                    let t = null != e ? g.Z.getEditorState(e) : null,
                        n = null != t ? y.Sq(t) : null;
                    p.jn(e, E.vpv, n);
                }
            }),
            P(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                if (!t) {
                    let t = null != e ? g.Z.getEditorState(e) : null,
                        n = null != t ? y.Sq(t) : null;
                    p.m$(e, E.vpv, n);
                }
            }),
            P(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            P(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        searchType: n,
                        search: { isSearching: r },
                        searchAnalyticsId: i
                    } = this.props,
                    { searchMode: l } = this.state;
                if (e !== l && !r) {
                    (0, x.zW)({
                        searchId: t,
                        searchType: n,
                        searchAnalyticsId: i,
                        mode: e
                    });
                    let r = null != t ? g.Z.getEditorState(t) : null,
                        l = null != r ? y.Sq(r) : null;
                    p.Nz(t, e, l), this.setState({ searchMode: e });
                }
            }),
            P(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                p.QY(e, !t);
            }),
            P(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: i, documentsIndexed: l } = this.props.search;
                return (0, r.jsx)(v.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: i,
                    documentsIndexed: l
                });
            }),
            P(this, 'renderIndexing', () => {
                let e = g.Z.getSearchType(this.props.searchId) === E.aib.GUILD ? I.intl.string(I.t.AXPbZm) : I.intl.string(I.t.Q0JJjo);
                return (0, r.jsxs)(N, {
                    children: [
                        (0, r.jsx)(j.Z, {}),
                        (0, r.jsx)('div', {
                            className: (S.emptyResultsText, S.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            P(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? I.intl.string(I.t['VrK/2d']) : I.intl.string(I.t.V6nAfH);
                return (0, r.jsxs)(N, {
                    children: [
                        (0, r.jsx)('div', { className: o()(S.noResultsImage, { [S.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: o()(S.emptyResultsText, S.noResults, { [S.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            P(this, 'renderError', () =>
                (0, r.jsxs)(N, {
                    children: [
                        (0, r.jsx)('div', { className: S.errorImage }),
                        (0, r.jsx)('div', {
                            className: o()(S.emptyResultsText, S.errorMessage),
                            children: I.intl.string(I.t.uvDZBQ)
                        })
                    ]
                })
            ),
            P(this, 'handleSearchResultClick', (e, t) => {
                let n = m.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchId: i, searchType: l, searchAnalyticsId: o } = this.props,
                    { offset: a, totalResults: s } = this.props.search;
                (0, x.sL)({
                    searchId: i,
                    searchType: l,
                    searchAnalyticsId: o,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: s,
                    limit: E.vpv,
                    page: Math.floor(a / E.vpv) + 1,
                    offset: a,
                    index: t
                });
            }),
            P(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t, ignoreCount: n } = this.props,
                    { totalResults: i, isSearching: l, isIndexing: o, hasError: a } = this.props.search;
                return a
                    ? this.renderError()
                    : o
                      ? this.renderIndexing()
                      : l
                        ? null
                        : i > 0
                          ? (0, r.jsx)(O.Z, {
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
function A(e) {
    let { searchId: t } = e,
        n = (0, c.cj)([g.Z], () => g.Z.getResultsState(t), [t]),
        { searchAnalyticsId: i, searchType: l } = (0, c.cj)(
            [g.Z],
            () => ({
                searchAnalyticsId: g.Z.getAnalyticsId(t),
                searchType: g.Z.getSearchType()
            }),
            [t]
        ),
        o = (0, h.ZP)(),
        { searchResults: a, ignoreCount: s, blockCount: u } = (0, C.Z)(t);
    return (0, r.jsx)(T, {
        searchId: t,
        search: n,
        searchAnalyticsId: i,
        searchType: l,
        searchResults: a,
        ignoreCount: s,
        blockCount: u,
        renderEmbeds: f.NA.useSetting(),
        developerMode: f.Sb.useSetting(),
        theme: o
    });
}
