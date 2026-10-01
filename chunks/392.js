(s.r(t), s.d(t, { default: () => ej }));
var n = s(477900),
    l = s(582128),
    r = s(503698),
    a = s.n(r),
    i = s(17928),
    o = s(554146),
    c = s(689175),
    u = s(512950),
    d = s(964486),
    h = s(131607),
    g = s(106430),
    m = s(885386),
    S = s(734057),
    x = s(625494),
    p = s(517381),
    A = s(822382),
    f = s(868974),
    C = s(304578),
    R = s(616252),
    b = s(753806),
    I = s(775427);
s(321073);
var y = s(738768),
    E = s(457699),
    j = s(521981),
    k = s(383233),
    N = s(994500),
    T = s(65600);
let _ = [];
var M = s(477654),
    v = s(145331),
    O = s(43105),
    H = s(821609),
    P = s(783977),
    D = s(289873),
    w = s(866665),
    L = s(834730),
    q = s(28863),
    B = s(922016),
    Q = s(980707),
    G = s(477782),
    F = s(408278),
    U = s(625903),
    V = s(112173),
    Y = s(93055),
    z = s(975571),
    Z = s(121806),
    W = s(652215),
    $ = s(49999),
    X = s(375708),
    J = s(898029);
function K(e) {
    let t,
        {
            searchContext: s,
            searchMode: r,
            onSearchModeChange: c,
            totalResults: u,
            isIndexing: d,
            isSearching: g,
            documentsIndexed: m,
            selectedChannelId: S,
        } = e,
        x =
            ((t = (0, i.bG)([T.A], () => {
                let e = (0, A.bS)(s);
                return T.A.getSearchResultsQueryString(e);
            })),
            l.useMemo(() => (0, A._o)(t ?? ""), [t])),
        { totalFilters: p } = (0, Z.vj)(x, s),
        f = l.useMemo(() => {
            if (s.type === W.I4_.DMS) {
                let e = (0, A.Zf)(x),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? X.intl.format(X.t.A2dqWG, { filterCount: t }) : X.intl.string(X.t.tc619d);
            }
            return null;
        }, [s.type, x]),
        [C, R] = l.useState(null),
        I = l.useMemo(() => (g ? [] : [o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [g]),
        [y, E] = (0, h.kn)(I),
        j = y === o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        k = l.useCallback(
            (e) => {
                (null != e && j && E($.i.USER_DISMISS), R(e));
            },
            [j, E, R],
        ),
        N = l.useCallback(
            (e) => {
                E("user:explicit" === e ? $.i.USER_DISMISS : $.i.AUTO_DISMISS);
            },
            [E],
        ),
        _ = l.useCallback(() => {
            (k(null), b.A.openSearchFiltersModal(s));
        }, [k, s]),
        M = l.useMemo(() => (p > 0 ? X.intl.format(X.t.uaR4sI, { filterCount: p }) : X.intl.string(X.t.UdhTtk)), [p]),
        v = !(0, Y.DZ)() && (s.type === W.I4_.DMS || s.type === W.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: a()(J.wL, { [J.g$]: null != f }),
        children: [
            (0, n.jsx)("div", {
                className: J.TN,
                role: "status",
                children: (0, n.jsx)(ee, {
                    totalResults: u,
                    subtitle: f,
                    isIndexing: d,
                    isSearching: g,
                    documentsIndexed: m,
                }),
            }),
            (0, n.jsxs)("div", {
                className: J.vd,
                children: [
                    (0, n.jsx)(H.$, { variant: "secondary", onClick: _, text: M, icon: P.R, size: "sm" }),
                    (0, n.jsx)(ea, {
                        searchMode: r,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === C,
                        setOpenPopout: k,
                    }),
                    v &&
                        (0, n.jsx)(er, {
                            searchContext: s,
                            selectedChannelId: S,
                            isPopoutOpen: "settings" === C,
                            setOpenPopout: k,
                            isPopoverVisible: j,
                            onPopoverRequestClose: N,
                        }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { totalResults: t, subtitle: s, isSearching: l, isIndexing: r, documentsIndexed: a } = e;
    return r
        ? (0, n.jsx)(es, { documentsIndexed: a })
        : l
          ? (0, n.jsx)(en, {})
          : (0, n.jsx)(el, { totalResults: t, subtitle: s });
}
function et() {
    return (0, n.jsx)("div", {
        className: J.zp,
        children: (0, n.jsx)(D.y, { type: D.y.Type.SPINNING_CIRCLE, className: J.u1, itemClassName: J.pu }),
    });
}
function es(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(w.m, {
        asContainer: !0,
        text: X.intl.formatToPlainString(X.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: J.q_,
            children: [
                (0, n.jsx)(L.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(q.Anchor, {
                        className: J.Zd,
                        href: z.A.getArticleURL(W.MVz.SEARCH_INDEXING),
                        children: X.intl.string(X.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(et, {}),
            ],
        }),
    });
}
function en() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(L.E, { variant: "text-md/medium", color: "text-default", children: X.intl.string(X.t.uixzLf) }),
            (0, n.jsx)(et, {}),
        ],
    });
}
function el(e) {
    let { totalResults: t, subtitle: s } = e,
        l = (0, n.jsx)(L.E, {
            variant: "text-md/medium",
            color: "text-strong",
            children: X.intl.format(X.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: J.hy,
              children: [l, (0, n.jsx)(L.E, { variant: "text-xs/medium", color: "text-subtle", children: s })],
          })
        : l;
}
function er(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: r,
            setOpenPopout: a,
            onPopoverRequestClose: i,
            isPopoverVisible: o,
        } = e,
        c = l.useRef(null),
        u = m.Hu.useSetting(),
        d = l.useCallback(
            (e) => {
                if (u !== e) {
                    if (
                        ((0, v._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: m.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: v.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: W.I4_.DMS };
                        b.A.transitionStateToSearchContext(t, e, b.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: W.I4_.CHANNEL, channelId: s };
                        b.A.transitionStateToSearchContext(t, e);
                    }
                    (a(null), m.Hu.updateSetting(e));
                }
            },
            [u, a, t, s],
        ),
        [h, g] = l.useMemo(
            () => [
                u ? X.intl.string(X.t["8lklch"]) : X.intl.string(X.t.ji3jTF),
                u ? X.intl.string(X.t.RMQZCa) : X.intl.string(X.t["v/PagC"]),
            ],
            [u],
        ),
        S = l.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(B.Y, {
                targetElementRef: c,
                shouldShow: r,
                animation: B.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(Q.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": X.intl.string(X.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, n.jsxs)(
                            G.rX,
                            {
                                label: X.intl.string(X.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(G.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: X.intl.string(X.t.jRkYAh),
                                        checked: !u,
                                        action: () => d(!1),
                                    }),
                                    (0, n.jsx)(G.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: X.intl.string(X.t["lWpJ/t"]),
                                        checked: u,
                                        action: () => d(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, n.jsx)(F.K, {
                        ...e,
                        buttonRef: c,
                        variant: "secondary",
                        icon: U.SettingsIcon,
                        onClick: () => {
                            a(r ? null : "settings");
                        },
                        "aria-label": X.intl.string(X.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(O.A, {
                targetElementRef: c,
                shouldShow: o,
                onRequestClose: i,
                title: h,
                body: g,
                caretConfig: S,
                badge: "new",
            }),
        ],
    });
}
function ea(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: r, setOpenPopout: a } = e,
        i = l.useRef(null),
        o = l.useMemo(
            () => [
                { label: X.intl.string(X.t.CbaapP), value: W.BBH.NEWEST },
                { label: X.intl.string(X.t.OukXZj), value: W.BBH.OLDEST },
                { label: X.intl.string(X.t.q8gB52), value: W.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = l.useCallback(
            (e) => {
                (a(null), s(e));
            },
            [a, s],
        );
    return (0, n.jsx)(B.Y, {
        targetElementRef: i,
        shouldShow: r,
        animation: B.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(Q.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": X.intl.string(X.t.utp2hS),
                onSelect: () => a(null),
                children: (0, n.jsx)(
                    G.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: l } = e;
                            return (0, n.jsx)(
                                G.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${l}`,
                                    label: s,
                                    action: () => c(l),
                                    checked: t === l,
                                },
                                l,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, n.jsx)(H.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                icon: V.J,
                onClick: () => {
                    a(r ? null : "sort");
                },
                text: X.intl.string(X.t.XvNMNk),
                "aria-label": X.intl.string(X.t.XvNMNk),
                size: "sm",
            }),
    });
}
var ei = s(159083),
    eo = s(876689),
    ec = s(187654),
    eu = s(148795),
    ed = s(53788),
    eh = s(939249),
    eg = s(192308),
    em = s(670455),
    eS = s(596500);
function ex(e) {
    let { rating: t, onClick: s } = e,
        r = t === em.P0.BAD ? eu.d : ed.G,
        a = l.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, n.jsx)(eh.D, {
        onClick: a,
        className: eS.zc,
        children: (0, n.jsx)(r, { size: "md", color: "currentColor", className: eS.Kk }),
    });
}
let ep = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: r } = e;
    l.useEffect(() => {
        (0, v.J$)({ searchContext: t });
    }, [t]);
    let a = l.useCallback(
        (e) => {
            (r(),
                (0, eg.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([s.e("36395"), s.e("155925"), s.e("444908")]).then(
                        s.bind(s, 774567),
                    );
                    return (s) => (0, n.jsx)(l, { ...s, searchContext: t, rating: e });
                }));
        },
        [r, t],
    );
    return (0, n.jsxs)("div", {
        className: eS.kL,
        children: [
            (0, n.jsx)(L.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: X.intl.string(X.t["I+4OJC"]),
            }),
            (0, n.jsxs)("div", {
                className: eS.Pt,
                children: [
                    (0, n.jsx)(ex, { rating: em.P0.GOOD, onClick: a }),
                    (0, n.jsx)(ex, { rating: em.P0.BAD, onClick: a }),
                ],
            }),
        ],
    });
};
var eA = s(36537);
class ef extends l.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId ||
            this.props.searchOffset !== e.searchOffset) &&
            this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    autoAnalytics = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (null == e.props.searchRequestAnalyticsId || e.props.isSearching) return;
            let s = 0,
                n = 0,
                l = 0,
                r = 0;
            e.props.messages.forEach((e) => {
                (null != e.content && "" !== e.content && (s++, /https?:\/\/[^\s]+/.test(e.content) && r++),
                    null != e.embeds && e.embeds.length > 0 && l++,
                    null != e.attachments && e.attachments.length > 0 && n++);
            });
            let a = (0, A.bS)(e.props.searchContext);
            0 === s
                ? (0, v.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: b.A.getSearchInputText(e.props.searchContext),
                      searchQuery: T.A.getSearchResultsQuery(a),
                  })
                : (0, v.H9)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      prevSearchRequestAnalyticsId: t !== e.props.searchRequestAnalyticsId ? t : null,
                      isError: e.props.searchHasError,
                      limit: e.props.searchLimit,
                      offset: e.props.searchOffset,
                      page: Math.floor(e.props.searchOffset / e.props.searchLimit) + 1,
                      totalResults: e.props.searchTotalResults,
                      pageResults: null != e.props.messages ? e.props.messages.length : null,
                      isIndexing: e.props.searchIsIndexing,
                      pageNumMessages: s,
                      pageNumLinks: r,
                      pageNumEmbeds: l,
                      pageNumAttachments: n,
                      searchQueryString: b.A.getSearchInputText(e.props.searchContext),
                      searchQuery: T.A.getSearchResultsQuery(a),
                  });
        };
    })();
    render() {
        return null;
    }
}
function eC(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: eA.Oq, children: (0, n.jsx)("div", { className: eA.de, children: t }) });
}
function eR(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: l } = e;
    return s ? (0, n.jsx)(ep, { searchContext: t, dismissFeedbackEntrypoint: l }) : null;
}
function eb(e) {
    let {
            messages: t,
            blockCount: s,
            ignoreCount: l,
            search: r,
            searchContext: i,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: u,
            onBlockedResultsClick: d,
            searchRequestAnalyticsId: h,
            searchResultsQuery: g,
        } = e,
        { totalResults: m, isSearching: S, isIndexing: x, hasError: p } = r;
    if (p)
        return (0, n.jsxs)(eC, {
            children: [
                (0, n.jsx)("div", { className: eA.M6 }),
                (0, n.jsx)("div", { className: a()(eA.pZ, eA.gJ), children: X.intl.string(X.t.uvDZBZ) }),
            ],
        });
    if (x) {
        let e = (0, A.Y7)(i);
        return (0, n.jsxs)(eC, {
            children: [(0, n.jsx)(ei.A, {}), (0, n.jsx)("div", { className: (eA.pZ, eA.Jy), children: e })],
        });
    }
    if (S) return null;
    if (m > 0)
        return (0, n.jsx)(ec.A, {
            search: r,
            messages: t,
            onClick: c,
            blockCount: s,
            ignoreCount: l,
            renderEmbeds: o,
            scrollTo: u,
            onBlockedResultsClick: d,
            searchRequestAnalyticsId: h,
            searchResultsQuery: g,
        });
    let { showNoResultsAlt: f } = r,
        C = f ? X.intl.string(X.t["VrK/2R"]) : X.intl.string(X.t.V6nAfF);
    return (0, n.jsxs)(eC, {
        children: [
            (0, n.jsx)("div", { className: a()(eA.$l, { [eA.CC]: f }) }),
            (0, n.jsx)("div", { className: a()(eA.pZ, eA.wV, { [eA.CC]: f }), children: C }),
        ],
    });
}
let eI = [],
    ey = l.memo(function (e) {
        let {
                searchContext: t,
                search: s,
                renderEmbeds: r,
                searchRequestAnalyticsId: a,
                messages: d,
                blockCount: g,
                ignoreCount: m,
                isFeedbackVisible: p,
                dismissFeedbackEntrypoint: f,
                onSearchModeChange: R,
                onPageChange: I,
                searchMode: y,
                onBlockedResultsClick: E,
                searchResultsQuery: j,
                searchResultsQueryString: k,
                selectedChannelId: N,
            } = e,
            _ = l.useRef(null),
            O = l.useCallback(() => {
                b.A.cleanUpSearchState(t);
            }, [t]);
        l.useEffect(
            () => (
                x._.subscribe(W.jej.SEARCH_RESULTS_CLOSE, O),
                () => {
                    x._.unsubscribe(W.jej.SEARCH_RESULTS_CLOSE, O);
                }
            ),
            [O],
        );
        let H = l.useRef(s.showBlockedResults);
        l.useEffect(() => {
            if (H.current !== s.showBlockedResults) {
                H.current = s.showBlockedResults;
                let e = _.current;
                null != e && e.scrollToBottom();
            }
        }, [s.showBlockedResults]);
        let P = l.useCallback((e, t, s) => {
                let n = _.current;
                if (null == n) return;
                let l = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: l, animate: t, callback: s });
            }, []),
            D = null != k ? `${y}:${k}` : void 0,
            {
                paginationTotalCount: w,
                paginationMaxVisiblePage: L,
                isMaxVisiblePageWarningVisible: q,
                renderPageWrapper: B,
            } = (0, M.o)({
                totalResults: s.totalResults,
                isSearching: s.isSearching,
                offset: s.offset,
                searchResultsPaginationKey: D,
            }),
            Q = l.useCallback(
                (e) => {
                    e === y ||
                        s.isSearching ||
                        ((0, v.L6)({ searchContext: t, searchRequestAnalyticsId: a, mode: e }), R(e));
                },
                [R, s.isSearching, t, y, a],
            ),
            G = l.useCallback(
                (e, n) => {
                    let l = S.A.getChannel(e.channel_id),
                        r = null != l ? l.getGuildId() : null,
                        i = (0, A.bS)(t),
                        { offset: o, totalResults: c } = s;
                    (0, v.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: r,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != d ? d.length : null,
                        totalResults: c,
                        limit: W.T_y,
                        page: Math.floor(o / W.T_y) + 1,
                        offset: o,
                        index: n,
                        searchQueryString: b.A.getSearchInputText(t),
                        searchQuery: T.A.getSearchResultsQuery(i),
                    });
                },
                [s, t, a, d],
            ),
            F = l.useCallback(
                (e) => {
                    ((0, v.kq)({ searchContext: t, searchRequestAnalyticsId: a, newPageIndex: e }), I(e));
                },
                [I, t, a],
            ),
            U = w > W.T_y,
            V = (0, i.yK)([T.A], () => {
                if (0 !== s.offset) return eI;
                let e = d.length;
                if (e < 10) return eI;
                let n = 0;
                if (
                    (d.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && n++;
                    }),
                    n / e < 0.75)
                )
                    return eI;
                let l = (0, A.bS)(t),
                    r = T.A.getSearchResultsQueryString(l);
                return (0, A._o)(r ?? "").some((e) => e.type === W.LWr.FILTER_AUTHOR_TYPE)
                    ? eI
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [Y, z] = (0, h.kn)(V),
            Z = Y === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            $ = l.useCallback(() => {
                if (s.isSearching) return;
                let e = `${C.Ay[W.LWr.FILTER_AUTHOR_TYPE].key} ${X.intl.string(X.t.tPZo4p)} `;
                b.A.appendToSearchInputText(t, e);
            }, [t, s.isSearching]);
        return (0, n.jsxs)("section", {
            className: eA.zt,
            "aria-label": X.intl.string(X.t["zkoeq/"]),
            children: [
                (0, n.jsx)(K, {
                    searchContext: t,
                    searchMode: y,
                    onSearchModeChange: Q,
                    totalResults: s.totalResults,
                    isSearching: s.isSearching,
                    isIndexing: s.isHistoricalIndexing,
                    documentsIndexed: s.documentsIndexed,
                    selectedChannelId: N,
                }),
                (0, n.jsxs)(c.Ch, {
                    ref: _,
                    className: eA.XG,
                    children: [
                        q &&
                            !s.isSearching &&
                            (0, n.jsx)(u.p, {
                                className: eA.VC,
                                messageType: u.Y.WARNING,
                                children: X.intl.formatToPlainString(X.t["E+2azY"], { maxPages: L }),
                            }),
                        Z &&
                            (0, n.jsx)(u.p, {
                                className: eA.QR,
                                messageType: u.Y.INFO,
                                children: X.intl.format(X.t["gQeg/R"], { handleClick: $ }),
                            }),
                        (0, n.jsx)(eb, {
                            messages: d,
                            blockCount: g,
                            ignoreCount: m,
                            search: s,
                            searchContext: t,
                            renderEmbeds: r,
                            onClick: G,
                            onScrollTo: P,
                            onBlockedResultsClick: E,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: j,
                        }),
                    ],
                }),
                (0, n.jsx)(eR, { searchContext: t, isFeedbackVisible: p, dismissFeedbackEntrypoint: f }),
                U &&
                    (0, n.jsx)(eo.A, {
                        className: eA.cu,
                        onPageChange: F,
                        offset: s.offset,
                        totalCount: w,
                        pageSize: W.T_y,
                        renderPageWrapper: B,
                    }),
            ],
        });
    });
function eE(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: r, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = l.useState(!1),
                s = (0, f.H)({ location: "SearchResults" });
            return (
                (0, d.Ay)(() => {
                    s &&
                        g.A.possiblyShowFeedbackModal(
                            em.MW.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: l.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, A.bS)(t),
        c = (0, i.cf)([p.A, T.A], () => ({
            isSearching: p.A.getIsFetching(o) ?? !1,
            isIndexing: p.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: p.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: p.A.getDocumentsIndexed(o),
            offset: T.A.getSearchResultsOffset(o) ?? 0,
            totalResults: p.A.getTotalCount(o) ?? 0,
            hasError: null != p.A.getError(o),
            showBlockedResults: T.A.shouldShowBlockedResults(o),
            showNoResultsAlt: T.A.shouldShowNoResultsAlt(o),
        })),
        u = (0, i.bG)([p.A], () => p.A.getAnalyticsId(o)),
        {
            renderedMessages: h,
            ignoreCount: S,
            blockCount: x,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, i.bG)(
                    [T.A, p.A, E.A],
                    () => {
                        let e = (0, A.bS)(t),
                            s = T.A.getSearchResultsQuery(e),
                            n = p.A.getMessages(e);
                        if (null == s || null == n || 0 === n.length) return _;
                        let l = (0, y.wG)((0, A.dX)(s) ?? ""),
                            r = [];
                        return (
                            n.forEach((e) => {
                                let t = new k.Ay(e);
                                ((t = (t = (function (e, t) {
                                    let [s] = t,
                                        n = s.getMessage(e.id, e.channel_id);
                                    return (
                                        null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e
                                    );
                                })(t, [E.A])).set(
                                    "customRenderedContent",
                                    (0, j.Ay)(t, {
                                        postProcessor: l,
                                        allowHeading: !0,
                                        allowList: !0,
                                        allowGameMentions: !0,
                                    }),
                                )),
                                    r.push(t));
                            }),
                            r
                        );
                    },
                    [t],
                    i.My,
                ),
                { blockCount: n, ignoreCount: l } = (0, i.cf)([N.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        s.forEach((s) => {
                            let n = N.A.isBlockedForMessage(s),
                                l = N.A.isIgnoredForMessage(s);
                            n ? e++ : l && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: s, blockCount: n, ignoreCount: l };
        })({ searchContext: t }),
        C = (0, i.bG)([T.A], () => T.A.getSearchMode(o) ?? W.BBH.NEWEST),
        I = l.useCallback(
            (e) => {
                if (c.isSearching) return;
                R.A.updateSearchMode(t, e);
                let s = b.A.getSearchInputText(t);
                null != s && b.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [c.isSearching, t],
        ),
        M = l.useCallback(
            (e) => {
                let s = b.A.getSearchInputText(t);
                null != s && b.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: e * W.T_y });
            },
            [t],
        ),
        v = (0, i.bG)([T.A], () => {
            let e = (0, A.bS)(t);
            return T.A.getSearchResultsQuery(e);
        }),
        O = (0, i.bG)([T.A], () => {
            let e = (0, A.bS)(t);
            return T.A.getSearchResultsQueryString(e);
        }),
        H = l.useCallback((e) => R.A.setShowBlockedResults(t, e), [t]),
        P = l.useDeferredValue(h),
        D = l.useDeferredValue(c),
        w = l.useDeferredValue(u);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ey, {
                searchContext: t,
                search: D,
                searchRequestAnalyticsId: w,
                messages: P,
                ignoreCount: S,
                blockCount: x,
                renderEmbeds: m.rs.useSetting(),
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: a,
                onPageChange: M,
                onSearchModeChange: I,
                searchMode: C,
                onBlockedResultsClick: H,
                searchResultsQuery: v,
                searchResultsQueryString: O,
                selectedChannelId: s,
            }),
            (0, n.jsx)(ef, {
                searchContext: t,
                searchRequestAnalyticsId: w,
                messages: P,
                searchOffset: D.offset,
                searchLimit: W.T_y,
                searchHasError: D.hasError,
                searchTotalResults: D.totalResults,
                searchIsIndexing: D.isHistoricalIndexing,
                isSearching: D.isSearching,
            }),
        ],
    });
}
function ej(e) {
    let { guildId: t, channelId: s } = e,
        l = (0, I.J)({ guildId: t, channelId: s });
    return null == l ? null : (0, n.jsx)(eE, { searchContext: l, selectedChannelId: s });
}
