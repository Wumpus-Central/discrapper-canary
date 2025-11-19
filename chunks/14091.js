n.d(t, { Z: () => W }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(681715),
    d = n(481060),
    u = n(493773),
    p = n(243778),
    h = n(169223),
    f = n(695346),
    g = n(592125),
    m = n(585483),
    b = n(171900),
    _ = n(607802),
    y = n(375123),
    O = n(945577),
    j = n(28964),
    x = n(759209),
    v = n(532428),
    C = n(406326),
    I = n(994463),
    S = n(991896),
    E = n(611004),
    Z = n(619753),
    P = n(902733),
    T = n(165017),
    N = n(737),
    R = n(909125),
    w = n(817190),
    A = n(315322),
    D = n(981631),
    L = n(531578),
    M = n(388032),
    k = n(254321);
class U extends i.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId ||
            this.props.searchOffset !== e.searchOffset) &&
            this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "autoAnalytics", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    i = 0,
                    l = 0;
                t.props.messages.forEach((e) => {
                    null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                        null != e.embeds && e.embeds.length > 0 && i++,
                        null != e.attachments && e.attachments.length > 0 && r++;
                });
                let a = (0, _.Tm)(t.props.searchContext);
                0 === n
                    ? (0, A.Qb)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          searchQueryString: E.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: w.Z.getSearchResultsQuery(a),
                      })
                    : (0, A.hM)({
                          searchContext: t.props.searchContext,
                          searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                          prevSearchRequestAnalyticsId: e !== t.props.searchRequestAnalyticsId ? e : null,
                          isError: t.props.searchHasError,
                          limit: t.props.searchLimit,
                          offset: t.props.searchOffset,
                          page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                          totalResults: t.props.searchTotalResults,
                          pageResults: null != t.props.messages ? t.props.messages.length : null,
                          isIndexing: t.props.searchIsIndexing,
                          pageNumMessages: n,
                          pageNumLinks: l,
                          pageNumEmbeds: i,
                          pageNumAttachments: r,
                          searchQueryString: E.Z.getSearchInputText(t.props.searchContext),
                          searchQuery: w.Z.getSearchResultsQuery(a),
                      });
            });
    }
}
function G(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: k.emptyResultsWrap,
        children: (0, r.jsx)("div", {
            className: k.emptyResultsContent,
            children: t,
        }),
    });
}
function H(e) {
    let { searchContext: t, isFeedbackVisible: n, dismissFeedbackEntrypoint: i } = e;
    return n
        ? (0, r.jsx)(P.Z, {
              searchContext: t,
              dismissFeedbackEntrypoint: i,
          })
        : null;
}
function F(e) {
    let {
            messages: t,
            blockCount: n,
            ignoreCount: i,
            search: l,
            searchContext: s,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: d,
            onPageChange: u,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        } = e,
        { totalResults: _, isSearching: y, isIndexing: O, hasError: j } = l;
    if (j)
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)("div", { className: k.errorImage }),
                (0, r.jsx)("div", {
                    className: a()(k.emptyResultsText, k.errorMessage),
                    children: M.intl.string(M.t.uvDZBZ),
                }),
            ],
        });
    if (O) {
        let e = s.type === D.aib.GUILD ? M.intl.string(M.t.AXPbZr) : M.intl.string(M.t.Q0JJjv);
        return (0, r.jsxs)(G, {
            children: [
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)("div", {
                    className: (k.emptyResultsText, k.stillIndexing),
                    children: e,
                }),
            ],
        });
    }
    if (y) return null;
    if (_ > 0)
        return (0, r.jsx)(Z.Z, {
            search: l,
            messages: t,
            onClick: c,
            blockCount: n,
            ignoreCount: i,
            renderEmbeds: o,
            scrollTo: d,
            onPageChange: u,
            paginationTotalCount: p,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: g,
            searchResultsQuery: m,
            isFavoritesSearch: b,
        });
    let { showNoResultsAlt: x } = l,
        v = x ? M.intl.string(M.t["VrK/2R"]) : M.intl.string(M.t.V6nAfF);
    return (0, r.jsxs)(G, {
        children: [
            (0, r.jsx)("div", { className: a()(k.noResultsImage, { [k.alt]: x }) }),
            (0, r.jsx)("div", {
                className: a()(k.emptyResultsText, k.noResults, { [k.alt]: x }),
                children: v,
            }),
        ],
    });
}
let B = [],
    V = i.memo(function (e) {
        let {
                searchContext: t,
                search: n,
                renderEmbeds: l,
                searchRequestAnalyticsId: a,
                messages: u,
                blockCount: h,
                ignoreCount: f,
                isFeedbackVisible: b,
                dismissFeedbackEntrypoint: O,
                onSearchModeChange: j,
                onPageChange: x,
                searchMode: I,
                onBlockedResultsClick: S,
                searchResultsQuery: Z,
                isFavoritesSearch: P,
                selectedChannelId: T,
            } = e,
            N = i.useRef(null),
            L = i.useCallback(() => {
                E.Z.cleanUpSearchState(t);
            }, [t]);
        i.useEffect(
            () => (
                m.S.subscribe(D.CkL.SEARCH_RESULTS_CLOSE, L),
                () => {
                    m.S.unsubscribe(D.CkL.SEARCH_RESULTS_CLOSE, L);
                }
            ),
            [L],
        );
        let U = i.useRef(n.showBlockedResults);
        i.useEffect(() => {
            if (U.current !== n.showBlockedResults) {
                U.current = n.showBlockedResults;
                let e = N.current;
                null != e && e.scrollToBottom();
            }
        }, [n.showBlockedResults]);
        let G = i.useCallback((e, t, n) => {
                let r = N.current;
                if (null == r) return;
                let i = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: i,
                    animate: t,
                    callback: n,
                });
            }, []),
            {
                paginationTotalCount: V,
                paginationMaxIndex: z,
                isPaginationTotalCountLimited: W,
            } = (0, R.M)({
                totalResults: n.totalResults,
                isSearching: n.isSearching,
            }),
            Y = i.useCallback(
                (e, t) => {
                    let n = z + 1;
                    if (!W || e.targetPage !== n) return t;
                    {
                        let e = M.intl.formatToPlainString(M.t["E+2azY"], { maxPages: n });
                        return (0, r.jsx)(c.u, {
                            asContainer: !0,
                            text: e,
                            children: t,
                        });
                    }
                },
                [W, z],
            ),
            q = i.useCallback(
                (e) => {
                    e === I ||
                        n.isSearching ||
                        ((0, A.zW)({
                            searchContext: t,
                            searchRequestAnalyticsId: a,
                            mode: e,
                        }),
                        j(e));
                },
                [j, n.isSearching, t, I, a],
            ),
            K = i.useCallback(
                (e, r) => {
                    let i = g.Z.getChannel(e.channel_id),
                        l = null != i ? i.getGuildId() : null,
                        s = (0, _.Tm)(t),
                        { offset: o, totalResults: c } = n;
                    (0, A.sL)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: D.vpv,
                        page: Math.floor(o / D.vpv) + 1,
                        offset: o,
                        index: r,
                        searchQueryString: E.Z.getSearchInputText(t),
                        searchQuery: w.Z.getSearchResultsQuery(s),
                    });
                },
                [n, t, a, u],
            ),
            Q = i.useCallback(
                (e) => {
                    (0, A.t6)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        newPageIndex: e,
                    }),
                        x(e);
                },
                [x, t, a],
            ),
            X = Math.floor(n.offset / D.vpv),
            J = W && X >= z,
            $ = z + 1,
            ee = (0, y.C)({ location: "SearchResults" }),
            et = (0, s.Wu)([w.Z], () => {
                if (0 !== n.offset || !ee) return B;
                let e = u.length;
                if (e < 10) return B;
                let r = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && r++;
                    }),
                    r / e < 0.75)
                )
                    return B;
                let i = (0, _.Tm)(t),
                    l = w.Z.getSearchResultsQueryString(i);
                return (0, _.kG)(null != l ? l : "").some((e) => e.type === D.dCx.FILTER_AUTHOR_TYPE)
                    ? B
                    : [o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [en, er] = (0, p.US)(et),
            ei = en === o.z.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            el = i.useCallback(() => {
                if (n.isSearching) return;
                let e = "".concat(v.ZP[D.dCx.FILTER_AUTHOR_TYPE].key, " ").concat(M.intl.string(M.t.tPZo4p)) + " ";
                E.Z.appendToSearchInputText(t, e);
            }, [t, n.isSearching]);
        return (0, r.jsxs)("section", {
            className: k.searchResultsWrap,
            "aria-label": M.intl.string(M.t["zkoeq/"]),
            children: [
                (0, r.jsx)(C.Z, {
                    searchContext: t,
                    searchMode: I,
                    onSearchModeChange: q,
                    totalResults: n.totalResults,
                    isSearching: n.isSearching,
                    isIndexing: n.isHistoricalIndexing,
                    documentsIndexed: n.documentsIndexed,
                    selectedChannelId: T,
                }),
                (0, r.jsxs)(d.Den, {
                    ref: N,
                    className: k.scroller,
                    children: [
                        J &&
                            !n.isSearching &&
                            (0, r.jsx)(d.Wn, {
                                className: k.paginationLimitHeader,
                                messageType: d.QYI.WARNING,
                                children: M.intl.formatToPlainString(M.t["E+2azY"], { maxPages: $ }),
                            }),
                        ei &&
                            (0, r.jsx)(d.Wn, {
                                className: k.helpMessageContainer,
                                messageType: d.QYI.INFO,
                                children: M.intl.format(M.t["gQeg/R"], { handleClick: el }),
                            }),
                        (0, r.jsx)(F, {
                            messages: u,
                            blockCount: h,
                            ignoreCount: f,
                            search: n,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: K,
                            onScrollTo: G,
                            onPageChange: Q,
                            paginationTotalCount: W ? V : void 0,
                            renderPageWrapper: Y,
                            onBlockedResultsClick: S,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: Z,
                            isFavoritesSearch: P,
                        }),
                    ],
                }),
                (0, r.jsx)(H, {
                    searchContext: t,
                    isFeedbackVisible: b,
                    dismissFeedbackEntrypoint: O,
                }),
            ],
        });
    });
function z(e) {
    let { searchContext: t, selectedChannelId: n } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: a } = (function (e) {
            let [t, n] = i.useState(!1),
                r = (0, j.M_)({ location: "SearchResults" }),
                l = (0, O.Gc)({ location: "SearchResults" }),
                { enabled: a, force: s } = (0, x.f)({ location: "SearchResults" }),
                o = e.type === D.aib.DMS || e.type === D.aib.CHANNEL,
                c = a && (r || (o && l));
            return (
                i.useEffect(() => {
                    c && s && n(!0);
                }, [s, c, a]),
                (0, u.ZP)(() => {
                    c &&
                        (s ||
                            h.Z.possiblyShowFeedbackModal(
                                L.nw.SEARCH_RESULTS,
                                () => n(!0),
                                () => n(!1),
                            ));
                }),
                {
                    dismissFeedbackEntrypoint: i.useCallback(() => {
                        n(!1);
                    }, []),
                    isFeedbackVisible: t,
                }
            );
        })(t),
        o = (0, _.Tm)(t),
        c = (0, s.cj)([b.Z, w.Z], () => {
            var e, t, n, r, i;
            return {
                isSearching: null != (e = b.Z.getIsFetching(o)) && e,
                isIndexing: null != (t = b.Z.getIsIndexing(o)) && t,
                isHistoricalIndexing: null != (n = b.Z.getIsHistoricalIndexing(o)) && n,
                documentsIndexed: b.Z.getDocumentsIndexed(o),
                offset: null != (r = w.Z.getSearchResultsOffset(o)) ? r : 0,
                totalResults: null != (i = b.Z.getTotalCount(o)) ? i : 0,
                hasError: null != b.Z.getError(o),
                showBlockedResults: w.Z.shouldShowBlockedResults(o),
                showNoResultsAlt: w.Z.shouldShowNoResultsAlt(o),
            };
        }),
        d = (0, s.e7)([b.Z], () => b.Z.getAnalyticsId(o)),
        { renderedMessages: p, ignoreCount: g, blockCount: m } = (0, N.Z)({ searchContext: t }),
        y = (0, s.e7)([w.Z], () => {
            var e;
            return null != (e = w.Z.getSearchMode(o)) ? e : D.QIO.NEWEST;
        }),
        v = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                S.Z.updateSearchMode(t, e);
                let n = E.Z.getSearchInputText(t);
                null != n &&
                    E.Z.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: 0,
                    });
            },
            [c.isSearching, t],
        ),
        C = i.useCallback(
            (e) => {
                if (c.isSearching) return;
                let n = E.Z.getSearchInputText(t);
                null != n &&
                    E.Z.fetchMessages({
                        searchContext: t,
                        searchQueryString: n,
                        offset: e * D.vpv,
                    });
            },
            [c.isSearching, t],
        ),
        I = (0, s.e7)([w.Z], () => {
            let e = (0, _.Tm)(t);
            return w.Z.getSearchResultsQuery(e);
        }),
        Z = t.type === D.aib.FAVORITES,
        P = i.useCallback((e) => S.Z.setShowBlockedResults(t, e), [t]),
        T = i.useDeferredValue(p),
        R = i.useDeferredValue(c),
        A = i.useDeferredValue(d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(V, {
                searchContext: t,
                search: R,
                searchRequestAnalyticsId: A,
                messages: T,
                ignoreCount: g,
                blockCount: m,
                renderEmbeds: f.NA.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: a,
                onPageChange: C,
                onSearchModeChange: v,
                searchMode: y,
                onBlockedResultsClick: P,
                searchResultsQuery: I,
                isFavoritesSearch: Z,
                selectedChannelId: n,
            }),
            (0, r.jsx)(U, {
                searchContext: t,
                searchRequestAnalyticsId: A,
                messages: T,
                searchOffset: R.offset,
                searchLimit: D.vpv,
                searchHasError: R.hasError,
                searchTotalResults: R.totalResults,
                searchIsIndexing: R.isHistoricalIndexing,
                isSearching: R.isSearching,
            }),
        ],
    });
}
function W(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, T.H)({
            guildId: t,
            channelId: n,
        });
    return null == i
        ? null
        : (0, r.jsx)(z, {
              searchContext: i,
              selectedChannelId: n,
          });
}
