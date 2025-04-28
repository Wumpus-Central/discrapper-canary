n.d(t, { Z: () => T }), n(388685), n(35282), n(49124);
var r = n(200651),
    i = n(192379),
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
    y = n(652399),
    x = n(251285),
    C = n(406326),
    v = n(994463),
    j = n(619753),
    O = n(981631),
    E = n(388032),
    I = n(682065);
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
class S extends i.Component {
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
                        ? (0, y.Qb)({
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId
                          })
                        : (0, y.hM)({
                              searchType: t.props.searchType,
                              searchAnalyticsId: t.props.searchAnalyticsId,
                              prevSearchId: e !== t.props.searchAnalyticsId ? e : null,
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
let Z = (e) => {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: I.emptyResultsWrap,
        children: (0, r.jsx)('div', {
            className: I.emptyResultsContent,
            children: t
        })
    });
};
class N extends i.PureComponent {
    componentDidMount() {
        _.S.subscribe(O.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        _.S.unsubscribe(O.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
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
                searchMode:
                    (null == n ? void 0 : n.sort_by) != null && null != n.sort_order
                        ? p.Vj({
                              sort_by: n.sort_by,
                              sort_order: n.sort_order
                          })
                        : O.QIO.NEWEST
            });
    }
    render() {
        let { searchAnalyticsId: e, searchType: t, searchResults: n } = this.props,
            { offset: i, hasError: l, totalResults: o, isHistoricalIndexing: a, isSearching: s } = this.props.search;
        return (0, r.jsxs)('section', {
            className: I.searchResultsWrap,
            'aria-label': E.intl.string(E.t.zkoeq6),
            children: [
                this.renderHeader(),
                (0, r.jsx)(u.Den, {
                    ref: this.scrollerRef,
                    className: I.scroller,
                    children: this.renderContent()
                }),
                (0, r.jsx)(S, {
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: i,
                    searchLimit: O.vpv,
                    searchHasError: l,
                    searchTotalResults: o,
                    searchIsIndexing: a,
                    isSearching: s
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                searchMode: O.QIO.NEWEST,
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
                t || p.jn(e);
            }),
            P(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                t || p.m$(e);
            }),
            P(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                p.qt(e);
            }),
            P(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        search: { isSearching: n },
                        searchAnalyticsId: r
                    } = this.props,
                    { searchMode: i } = this.state;
                e === i ||
                    n ||
                    ((0, y.zW)({
                        searchAnalyticsId: r,
                        mode: e
                    }),
                    p.Nz(t, e),
                    this.setState({ searchMode: e }));
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
                return (0, r.jsx)(C.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: i,
                    documentsIndexed: l
                });
            }),
            P(this, 'renderIndexing', () => {
                let e = g.Z.getSearchType(this.props.searchId) === O.aib.GUILD ? E.intl.string(E.t.AXPbZm) : E.intl.string(E.t.Q0JJjo);
                return (0, r.jsxs)(Z, {
                    children: [
                        (0, r.jsx)(v.Z, {}),
                        (0, r.jsx)('div', {
                            className: (I.emptyResultsText, I.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            P(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? E.intl.string(E.t['VrK/2d']) : E.intl.string(E.t.V6nAfH);
                return (0, r.jsxs)(Z, {
                    children: [
                        (0, r.jsx)('div', { className: o()(I.noResultsImage, { [I.alt]: e }) }),
                        (0, r.jsx)('div', {
                            className: o()(I.emptyResultsText, I.noResults, { [I.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            P(this, 'renderError', () =>
                (0, r.jsxs)(Z, {
                    children: [
                        (0, r.jsx)('div', { className: I.errorImage }),
                        (0, r.jsx)('div', {
                            className: o()(I.emptyResultsText, I.errorMessage),
                            children: E.intl.string(E.t.uvDZBQ)
                        })
                    ]
                })
            ),
            P(this, 'handleSearchResultClick', (e, t) => {
                let n = m.Z.getChannel(e.channel_id),
                    r = null != n ? n.getGuildId() : null,
                    { searchType: i, searchAnalyticsId: l } = this.props,
                    { offset: o, totalResults: a } = this.props.search;
                (0, y.sL)({
                    searchType: i,
                    searchAnalyticsId: l,
                    guildId: r,
                    channelId: e.channel_id,
                    pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
                    totalResults: a,
                    limit: O.vpv,
                    page: Math.floor(o / O.vpv) + 1,
                    offset: o,
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
                          ? (0, r.jsx)(j.Z, {
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
function T(e) {
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
        { searchResults: a, ignoreCount: s, blockCount: u } = (0, x.Z)(t);
    return (0, r.jsx)(N, {
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
