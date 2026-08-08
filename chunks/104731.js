s.r(t), s.d(t, { default: () => eT });
var l = s(477900),
    r = s(582128),
    n = s(503698),
    a = s.n(n),
    i = s(17928),
    o = s(554146),
    c = s(866665),
    u = s(689175),
    d = s(512950),
    h = s(964486),
    x = s(131607),
    m = s(651649),
    g = s(885386),
    p = s(734057),
    f = s(625494),
    S = s(517381),
    A = s(822382),
    R = s(868974),
    I = s(304578),
    y = s(616252),
    E = s(753806),
    C = s(775427);
s(321073);
var b = s(738768),
    j = s(457699),
    T = s(521981),
    N = s(383233),
    _ = s(994500),
    v = s(65600);
let L = [];
s(309613);
var k = s(652215);
let M = 9975 + k.T_y,
    O = 9975 / k.T_y;
var F = s(145331),
    H = s(43105),
    P = s(821609),
    w = s(783977),
    W = s(289873),
    q = s(834730),
    D = s(349288),
    z = s(922016),
    $ = s(980707),
    G = s(477782),
    Q = s(408278),
    U = s(625903),
    B = s(112173),
    Y = s(93055),
    V = s(975571),
    Z = s(121806),
    X = s(49999),
    K = s(375708),
    J = s(248791);
function ee(e) {
    let t,
        {
            searchContext: s,
            searchMode: n,
            onSearchModeChange: c,
            totalResults: u,
            isIndexing: d,
            isSearching: h,
            documentsIndexed: m,
            selectedChannelId: g,
        } = e,
        p =
            ((t = (0, i.bG)([v.A], () => {
                let e = (0, A.bS)(s);
                return v.A.getSearchResultsQueryString(e);
            })),
            r.useMemo(() => (0, A._o)(t ?? ""), [t])),
        { totalFilters: f } = (0, Z.vj)(p, s),
        S = r.useMemo(() => {
            if (s.type === k.I4_.DMS) {
                let e = (0, A.Zf)(p),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? K.intl.format(K.t.A2dqWG, { filterCount: t }) : K.intl.string(K.t.tc619d);
            }
            return null;
        }, [s.type, p]),
        [R, I] = r.useState(null),
        y = r.useMemo(() => (h ? [] : [o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [C, b] = (0, x.kn)(y),
        j = C === o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        T = r.useCallback(
            (e) => {
                null != e && j && b(X.i.USER_DISMISS), I(e);
            },
            [j, b, I],
        ),
        N = r.useCallback(
            (e) => {
                b("user:explicit" === e ? X.i.USER_DISMISS : X.i.AUTO_DISMISS);
            },
            [b],
        ),
        _ = r.useCallback(() => {
            T(null), E.A.openSearchFiltersModal(s);
        }, [T, s]),
        L = r.useMemo(() => (f > 0 ? K.intl.format(K.t.uaR4sI, { filterCount: f }) : K.intl.string(K.t.UdhTtk)), [f]),
        M = !(0, Y.DZ)() && (s.type === k.I4_.DMS || s.type === k.I4_.CHANNEL);
    return (0, l.jsxs)("header", {
        className: a()(J.wL, { [J.g$]: null != S }),
        children: [
            (0, l.jsx)("div", {
                className: J.TN,
                role: "status",
                children: (0, l.jsx)(et, {
                    totalResults: u,
                    subtitle: S,
                    isIndexing: d,
                    isSearching: h,
                    documentsIndexed: m,
                }),
            }),
            (0, l.jsxs)("div", {
                className: J.vd,
                children: [
                    (0, l.jsx)(P.$, { variant: "secondary", onClick: _, text: L, icon: w.R, size: "sm" }),
                    (0, l.jsx)(ei, {
                        searchMode: n,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === R,
                        setOpenPopout: T,
                    }),
                    M &&
                        (0, l.jsx)(ea, {
                            searchContext: s,
                            selectedChannelId: g,
                            isPopoutOpen: "settings" === R,
                            setOpenPopout: T,
                            isPopoverVisible: j,
                            onPopoverRequestClose: N,
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { totalResults: t, subtitle: s, isSearching: r, isIndexing: n, documentsIndexed: a } = e;
    return n
        ? (0, l.jsx)(el, { documentsIndexed: a })
        : r
          ? (0, l.jsx)(er, {})
          : (0, l.jsx)(en, { totalResults: t, subtitle: s });
}
function es() {
    return (0, l.jsx)("div", {
        className: J.zp,
        children: (0, l.jsx)(W.y, { type: W.y.Type.SPINNING_CIRCLE, className: J.u1, itemClassName: J.pu }),
    });
}
function el(e) {
    let { documentsIndexed: t } = e;
    return (0, l.jsx)(c.m, {
        asContainer: !0,
        text: K.intl.formatToPlainString(K.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, l.jsxs)("div", {
            className: J.q_,
            children: [
                (0, l.jsx)(q.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, l.jsx)(D.Anchor, {
                        className: J.Zd,
                        href: V.A.getArticleURL(k.MVz.SEARCH_INDEXING),
                        children: K.intl.string(K.t["G3EA+4"]),
                    }),
                }),
                (0, l.jsx)(es, {}),
            ],
        }),
    });
}
function er() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(q.E, { variant: "text-md/medium", color: "text-default", children: K.intl.string(K.t.uixzLf) }),
            (0, l.jsx)(es, {}),
        ],
    });
}
function en(e) {
    let { totalResults: t, subtitle: s } = e,
        r = (0, l.jsx)(q.E, {
            variant: "text-md/medium",
            color: "text-strong",
            children: K.intl.format(K.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, l.jsxs)("div", {
              className: J.hy,
              children: [r, (0, l.jsx)(q.E, { variant: "text-xs/medium", color: "text-subtle", children: s })],
          })
        : r;
}
function ea(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: n,
            setOpenPopout: a,
            onPopoverRequestClose: i,
            isPopoverVisible: o,
        } = e,
        c = r.useRef(null),
        u = g.Hu.useSetting(),
        d = r.useCallback(
            (e) => {
                if (u !== e) {
                    if (
                        ((0, F._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: g.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: F.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: k.I4_.DMS };
                        E.A.transitionStateToSearchContext(t, e, E.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: k.I4_.CHANNEL, channelId: s };
                        E.A.transitionStateToSearchContext(t, e);
                    }
                    a(null), g.Hu.updateSetting(e);
                }
            },
            [u, a, t, s],
        ),
        [h, x] = r.useMemo(
            () => [
                u ? K.intl.string(K.t["8lklch"]) : K.intl.string(K.t.ji3jTF),
                u ? K.intl.string(K.t.RMQZCa) : K.intl.string(K.t["v/PagC"]),
            ],
            [u],
        ),
        m = r.useMemo(() => ({ align: "end" }), []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(z.Y, {
                targetElementRef: c,
                shouldShow: n,
                animation: z.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)($.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": K.intl.string(K.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, l.jsxs)(
                            G.rX,
                            {
                                label: K.intl.string(K.t["/tMwrA"]),
                                children: [
                                    (0, l.jsx)(G.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: K.intl.string(K.t.jRkYAh),
                                        checked: !u,
                                        action: () => d(!1),
                                    }),
                                    (0, l.jsx)(G.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: K.intl.string(K.t["lWpJ/t"]),
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
                    (0, l.jsx)(Q.K, {
                        ...e,
                        buttonRef: c,
                        variant: "secondary",
                        icon: U.Z,
                        onClick: () => {
                            a(n ? null : "settings");
                        },
                        "aria-label": K.intl.string(K.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, l.jsx)(H.A, {
                targetElementRef: c,
                shouldShow: o,
                onRequestClose: i,
                title: h,
                body: x,
                caretConfig: m,
                badge: "new",
            }),
        ],
    });
}
function ei(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: n, setOpenPopout: a } = e,
        i = r.useRef(null),
        o = r.useMemo(
            () => [
                { label: K.intl.string(K.t.CbaapP), value: k.BBH.NEWEST },
                { label: K.intl.string(K.t.OukXZj), value: k.BBH.OLDEST },
                { label: K.intl.string(K.t.q8gB52), value: k.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = r.useCallback(
            (e) => {
                a(null), s(e);
            },
            [a, s],
        );
    return (0, l.jsx)(z.Y, {
        targetElementRef: i,
        shouldShow: n,
        animation: z.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsx)($.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": K.intl.string(K.t.utp2hS),
                onSelect: () => a(null),
                children: (0, l.jsx)(
                    G.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: r } = e;
                            return (0, l.jsx)(
                                G.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${r}`,
                                    label: s,
                                    action: () => c(r),
                                    checked: t === r,
                                },
                                r,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, l.jsx)(P.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                icon: B.J,
                onClick: () => {
                    a(n ? null : "sort");
                },
                text: K.intl.string(K.t.XvNMNk),
                "aria-label": K.intl.string(K.t.XvNMNk),
                size: "sm",
            }),
    });
}
var eo = s(159083),
    ec = s(876689),
    eu = s(187654),
    ed = s(148795),
    eh = s(53788),
    ex = s(939249),
    em = s(192308),
    eg = s(670455),
    ep = s(400277);
function ef(e) {
    let { rating: t, onClick: s } = e,
        n = t === eg.P0.BAD ? ed.d : eh.G,
        a = r.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, l.jsx)(ex.D, {
        onClick: a,
        className: ep.zc,
        children: (0, l.jsx)(n, { size: "md", color: "currentColor", className: ep.Kk }),
    });
}
let eS = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: n } = e;
    r.useEffect(() => {
        (0, F.J$)({ searchContext: t });
    }, [t]);
    let a = r.useCallback(
        (e) => {
            n(),
                (0, em.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([s.e("22255"), s.e("55925"), s.e("44908")]).then(
                        s.bind(s, 774567),
                    );
                    return (s) => (0, l.jsx)(r, { ...s, searchContext: t, rating: e });
                });
        },
        [n, t],
    );
    return (0, l.jsxs)("div", {
        className: ep.kL,
        children: [
            (0, l.jsx)(q.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: K.intl.string(K.t["I+4OJC"]),
            }),
            (0, l.jsxs)("div", {
                className: ep.Pt,
                children: [
                    (0, l.jsx)(ef, { rating: eg.P0.GOOD, onClick: a }),
                    (0, l.jsx)(ef, { rating: eg.P0.BAD, onClick: a }),
                ],
            }),
        ],
    });
};
var eA = s(73502);
class eR extends r.Component {
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
                l = 0,
                r = 0,
                n = 0;
            e.props.messages.forEach((e) => {
                null != e.content && "" !== e.content && (s++, /https?:\/\/[^\s]+/.test(e.content) && n++),
                    null != e.embeds && e.embeds.length > 0 && r++,
                    null != e.attachments && e.attachments.length > 0 && l++;
            });
            let a = (0, A.bS)(e.props.searchContext);
            0 === s
                ? (0, F.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: E.A.getSearchInputText(e.props.searchContext),
                      searchQuery: v.A.getSearchResultsQuery(a),
                  })
                : (0, F.H9)({
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
                      pageNumLinks: n,
                      pageNumEmbeds: r,
                      pageNumAttachments: l,
                      searchQueryString: E.A.getSearchInputText(e.props.searchContext),
                      searchQuery: v.A.getSearchResultsQuery(a),
                  });
        };
    })();
    render() {
        return null;
    }
}
function eI(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: eA.Oq, children: (0, l.jsx)("div", { className: eA.de, children: t }) });
}
function ey(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: r } = e;
    return s ? (0, l.jsx)(eS, { searchContext: t, dismissFeedbackEntrypoint: r }) : null;
}
function eE(e) {
    let {
            messages: t,
            blockCount: s,
            ignoreCount: r,
            search: n,
            searchContext: i,
            renderEmbeds: o,
            onClick: c,
            onScrollTo: u,
            onBlockedResultsClick: d,
            searchRequestAnalyticsId: h,
            searchResultsQuery: x,
        } = e,
        { totalResults: m, isSearching: g, isIndexing: p, hasError: f } = n;
    if (f)
        return (0, l.jsxs)(eI, {
            children: [
                (0, l.jsx)("div", { className: eA.M6 }),
                (0, l.jsx)("div", { className: a()(eA.pZ, eA.gJ), children: K.intl.string(K.t.uvDZBZ) }),
            ],
        });
    if (p) {
        let e = (0, A.Y7)(i);
        return (0, l.jsxs)(eI, {
            children: [(0, l.jsx)(eo.A, {}), (0, l.jsx)("div", { className: (eA.pZ, eA.Jy), children: e })],
        });
    }
    if (g) return null;
    if (m > 0)
        return (0, l.jsx)(eu.A, {
            search: n,
            messages: t,
            onClick: c,
            blockCount: s,
            ignoreCount: r,
            renderEmbeds: o,
            scrollTo: u,
            onBlockedResultsClick: d,
            searchRequestAnalyticsId: h,
            searchResultsQuery: x,
        });
    let { showNoResultsAlt: S } = n,
        R = S ? K.intl.string(K.t["VrK/2R"]) : K.intl.string(K.t.V6nAfF);
    return (0, l.jsxs)(eI, {
        children: [
            (0, l.jsx)("div", { className: a()(eA.$l, { [eA.CC]: S }) }),
            (0, l.jsx)("div", { className: a()(eA.pZ, eA.wV, { [eA.CC]: S }), children: R }),
        ],
    });
}
let eC = [],
    eb = r.memo(function (e) {
        let {
                searchContext: t,
                search: s,
                renderEmbeds: n,
                searchRequestAnalyticsId: a,
                messages: h,
                blockCount: m,
                ignoreCount: g,
                isFeedbackVisible: S,
                dismissFeedbackEntrypoint: R,
                onSearchModeChange: y,
                onPageChange: C,
                searchMode: b,
                onBlockedResultsClick: j,
                searchResultsQuery: T,
                searchResultsQueryString: N,
                selectedChannelId: _,
            } = e,
            L = r.useRef(null),
            H = r.useCallback(() => {
                E.A.cleanUpSearchState(t);
            }, [t]);
        r.useEffect(
            () => (
                f._.subscribe(k.jej.SEARCH_RESULTS_CLOSE, H),
                () => {
                    f._.unsubscribe(k.jej.SEARCH_RESULTS_CLOSE, H);
                }
            ),
            [H],
        );
        let P = r.useRef(s.showBlockedResults);
        r.useEffect(() => {
            if (P.current !== s.showBlockedResults) {
                P.current = s.showBlockedResults;
                let e = L.current;
                null != e && e.scrollToBottom();
            }
        }, [s.showBlockedResults]);
        let w = r.useCallback((e, t, s) => {
                let l = L.current;
                if (null == l) return;
                let r = l.getScrollerState().scrollTop - e;
                l.scrollTo({ to: r, animate: t, callback: s });
            }, []),
            W = null != N ? `${b}:${N}` : void 0,
            {
                paginationTotalCount: q,
                paginationMaxIndex: D,
                isPaginationTotalCountLimited: z,
            } = (function (e) {
                let { totalResults: t, isSearching: s, searchResultsPaginationKey: l } = e,
                    [n, a] = r.useState({ searchResultsPaginationKey: l, totalResults: t });
                r.useEffect(() => {
                    s || a({ searchResultsPaginationKey: l, totalResults: t });
                }, [t, s, l]);
                let i = s && n.searchResultsPaginationKey === l,
                    o = t;
                return (
                    s && (o = i ? n.totalResults : 0),
                    {
                        isPaginationTotalCountLimited: o > 9975 + k.T_y,
                        paginationTotalCount: Math.min(o, M),
                        paginationMaxIndex: O,
                    }
                );
            })({ totalResults: s.totalResults, isSearching: s.isSearching, searchResultsPaginationKey: W }),
            $ = r.useCallback(
                (e, t) => {
                    let s = D + 1;
                    if (!z || e.targetPage !== s) return t;
                    {
                        let e = K.intl.formatToPlainString(K.t["E+2azY"], { maxPages: s });
                        return (0, l.jsx)(c.m, { asContainer: !0, text: e, children: t });
                    }
                },
                [z, D],
            ),
            G = r.useCallback(
                (e) => {
                    e === b ||
                        s.isSearching ||
                        ((0, F.L6)({ searchContext: t, searchRequestAnalyticsId: a, mode: e }), y(e));
                },
                [y, s.isSearching, t, b, a],
            ),
            Q = r.useCallback(
                (e, l) => {
                    let r = p.A.getChannel(e.channel_id),
                        n = null != r ? r.getGuildId() : null,
                        i = (0, A.bS)(t),
                        { offset: o, totalResults: c } = s;
                    (0, F.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: n,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != h ? h.length : null,
                        totalResults: c,
                        limit: k.T_y,
                        page: Math.floor(o / k.T_y) + 1,
                        offset: o,
                        index: l,
                        searchQueryString: E.A.getSearchInputText(t),
                        searchQuery: v.A.getSearchResultsQuery(i),
                    });
                },
                [s, t, a, h],
            ),
            U = r.useCallback(
                (e) => {
                    (0, F.kq)({ searchContext: t, searchRequestAnalyticsId: a, newPageIndex: e }), C(e);
                },
                [C, t, a],
            ),
            B = Math.floor(s.offset / k.T_y),
            Y = z && B >= D,
            V = D + 1,
            Z = q > k.T_y,
            X = (0, i.yK)([v.A], () => {
                if (0 !== s.offset) return eC;
                let e = h.length;
                if (e < 10) return eC;
                let l = 0;
                if (
                    (h.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && l++;
                    }),
                    l / e < 0.75)
                )
                    return eC;
                let r = (0, A.bS)(t),
                    n = v.A.getSearchResultsQueryString(r);
                return (0, A._o)(n ?? "").some((e) => e.type === k.LWr.FILTER_AUTHOR_TYPE)
                    ? eC
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [J, et] = (0, x.kn)(X),
            es = J === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            el = r.useCallback(() => {
                if (s.isSearching) return;
                let e = `${I.Ay[k.LWr.FILTER_AUTHOR_TYPE].key} ${K.intl.string(K.t.tPZo4p)} `;
                E.A.appendToSearchInputText(t, e);
            }, [t, s.isSearching]);
        return (0, l.jsxs)("section", {
            className: eA.zt,
            "aria-label": K.intl.string(K.t["zkoeq/"]),
            children: [
                (0, l.jsx)(ee, {
                    searchContext: t,
                    searchMode: b,
                    onSearchModeChange: G,
                    totalResults: s.totalResults,
                    isSearching: s.isSearching,
                    isIndexing: s.isHistoricalIndexing,
                    documentsIndexed: s.documentsIndexed,
                    selectedChannelId: _,
                }),
                (0, l.jsxs)(u.Ch, {
                    ref: L,
                    className: eA.XG,
                    children: [
                        Y &&
                            !s.isSearching &&
                            (0, l.jsx)(d.p, {
                                className: eA.VC,
                                messageType: d.Y.WARNING,
                                children: K.intl.formatToPlainString(K.t["E+2azY"], { maxPages: V }),
                            }),
                        es &&
                            (0, l.jsx)(d.p, {
                                className: eA.QR,
                                messageType: d.Y.INFO,
                                children: K.intl.format(K.t["gQeg/R"], { handleClick: el }),
                            }),
                        (0, l.jsx)(eE, {
                            messages: h,
                            blockCount: m,
                            ignoreCount: g,
                            search: s,
                            searchContext: t,
                            renderEmbeds: n,
                            onClick: Q,
                            onScrollTo: w,
                            onBlockedResultsClick: j,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: T,
                        }),
                    ],
                }),
                (0, l.jsx)(ey, { searchContext: t, isFeedbackVisible: S, dismissFeedbackEntrypoint: R }),
                Z &&
                    (0, l.jsx)(ec.A, {
                        className: eA.cu,
                        onPageChange: U,
                        offset: s.offset,
                        totalCount: q,
                        pageSize: k.T_y,
                        renderPageWrapper: $,
                    }),
            ],
        });
    });
function ej(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: n, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = r.useState(!1),
                s = (0, R.H)({ location: "SearchResults" });
            return (
                (0, h.Ay)(() => {
                    s &&
                        m.A.possiblyShowFeedbackModal(
                            eg.MW.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: r.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, A.bS)(t),
        c = (0, i.cf)([S.A, v.A], () => ({
            isSearching: S.A.getIsFetching(o) ?? !1,
            isIndexing: S.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: S.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: S.A.getDocumentsIndexed(o),
            offset: v.A.getSearchResultsOffset(o) ?? 0,
            totalResults: S.A.getTotalCount(o) ?? 0,
            hasError: null != S.A.getError(o),
            showBlockedResults: v.A.shouldShowBlockedResults(o),
            showNoResultsAlt: v.A.shouldShowNoResultsAlt(o),
        })),
        u = (0, i.bG)([S.A], () => S.A.getAnalyticsId(o)),
        {
            renderedMessages: d,
            ignoreCount: x,
            blockCount: p,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, i.bG)(
                    [v.A, S.A, j.A],
                    () => {
                        let e = (0, A.bS)(t),
                            s = v.A.getSearchResultsQuery(e),
                            l = S.A.getMessages(e);
                        if (null == s || null == l || 0 === l.length) return L;
                        let r = (0, b.wG)((0, A.dX)(s) ?? ""),
                            n = [];
                        return (
                            l.forEach((e) => {
                                let t = new N.Ay(e);
                                (t = (t = (function (e, t) {
                                    let [s] = t,
                                        l = s.getMessage(e.id, e.channel_id);
                                    return (
                                        null != l && (e = e.merge({ attachments: l.attachments, embeds: l.embeds })), e
                                    );
                                })(t, [j.A])).set(
                                    "customRenderedContent",
                                    (0, T.Ay)(t, {
                                        postProcessor: r,
                                        allowHeading: !0,
                                        allowList: !0,
                                        allowGameMentions: !0,
                                    }),
                                )),
                                    n.push(t);
                            }),
                            n
                        );
                    },
                    [t],
                    i.My,
                ),
                { blockCount: l, ignoreCount: r } = (0, i.cf)([_.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        s.forEach((s) => {
                            let l = _.A.isBlockedForMessage(s),
                                r = _.A.isIgnoredForMessage(s);
                            l ? e++ : r && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: s, blockCount: l, ignoreCount: r };
        })({ searchContext: t }),
        f = (0, i.bG)([v.A], () => v.A.getSearchMode(o) ?? k.BBH.NEWEST),
        I = r.useCallback(
            (e) => {
                if (c.isSearching) return;
                y.A.updateSearchMode(t, e);
                let s = E.A.getSearchInputText(t);
                null != s && E.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [c.isSearching, t],
        ),
        C = r.useCallback(
            (e) => {
                let s = E.A.getSearchInputText(t);
                null != s && E.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: e * k.T_y });
            },
            [t],
        ),
        M = (0, i.bG)([v.A], () => {
            let e = (0, A.bS)(t);
            return v.A.getSearchResultsQuery(e);
        }),
        O = (0, i.bG)([v.A], () => {
            let e = (0, A.bS)(t);
            return v.A.getSearchResultsQueryString(e);
        }),
        F = r.useCallback((e) => y.A.setShowBlockedResults(t, e), [t]),
        H = r.useDeferredValue(d),
        P = r.useDeferredValue(c),
        w = r.useDeferredValue(u);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eb, {
                searchContext: t,
                search: P,
                searchRequestAnalyticsId: w,
                messages: H,
                ignoreCount: x,
                blockCount: p,
                renderEmbeds: g.rs.useSetting(),
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: a,
                onPageChange: C,
                onSearchModeChange: I,
                searchMode: f,
                onBlockedResultsClick: F,
                searchResultsQuery: M,
                searchResultsQueryString: O,
                selectedChannelId: s,
            }),
            (0, l.jsx)(eR, {
                searchContext: t,
                searchRequestAnalyticsId: w,
                messages: H,
                searchOffset: P.offset,
                searchLimit: k.T_y,
                searchHasError: P.hasError,
                searchTotalResults: P.totalResults,
                searchIsIndexing: P.isHistoricalIndexing,
                isSearching: P.isSearching,
            }),
        ],
    });
}
function eT(e) {
    let { guildId: t, channelId: s } = e,
        r = (0, C.J)({ guildId: t, channelId: s });
    return null == r ? null : (0, l.jsx)(ej, { searchContext: r, selectedChannelId: s });
}
