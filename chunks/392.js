s.r(t), s.d(t, { default: () => ej });
var l = s(477900),
    r = s(582128),
    n = s(503698),
    a = s.n(n),
    i = s(17928),
    c = s(554146),
    o = s(689175),
    u = s(512950),
    d = s(964486),
    h = s(131607),
    x = s(651649),
    m = s(885386),
    g = s(734057),
    p = s(625494),
    f = s(517381),
    S = s(822382),
    A = s(868974),
    R = s(304578),
    I = s(616252),
    y = s(753806),
    E = s(775427);
s(321073);
var C = s(738768),
    b = s(457699),
    j = s(521981),
    T = s(383233),
    N = s(994500),
    _ = s(65600);
let v = [];
var L = s(477654),
    k = s(145331),
    M = s(43105),
    O = s(821609),
    F = s(783977),
    H = s(289873),
    w = s(866665),
    P = s(834730),
    W = s(28863),
    q = s(922016),
    D = s(980707),
    G = s(477782),
    z = s(408278),
    $ = s(625903),
    Q = s(112173),
    U = s(93055),
    B = s(975571),
    Y = s(121806),
    V = s(652215),
    Z = s(49999),
    X = s(375708),
    K = s(898029);
function J(e) {
    let t,
        {
            searchContext: s,
            searchMode: n,
            onSearchModeChange: o,
            totalResults: u,
            isIndexing: d,
            isSearching: x,
            documentsIndexed: m,
            selectedChannelId: g,
        } = e,
        p =
            ((t = (0, i.bG)([_.A], () => {
                let e = (0, S.bS)(s);
                return _.A.getSearchResultsQueryString(e);
            })),
            r.useMemo(() => (0, S._o)(t ?? ""), [t])),
        { totalFilters: f } = (0, Y.vj)(p, s),
        A = r.useMemo(() => {
            if (s.type === V.I4_.DMS) {
                let e = (0, S.Zf)(p),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? X.intl.format(X.t.A2dqWG, { filterCount: t }) : X.intl.string(X.t.tc619d);
            }
            return null;
        }, [s.type, p]),
        [R, I] = r.useState(null),
        E = r.useMemo(() => (x ? [] : [c.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [x]),
        [C, b] = (0, h.kn)(E),
        j = C === c.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        T = r.useCallback(
            (e) => {
                null != e && j && b(Z.i.USER_DISMISS), I(e);
            },
            [j, b, I],
        ),
        N = r.useCallback(
            (e) => {
                b("user:explicit" === e ? Z.i.USER_DISMISS : Z.i.AUTO_DISMISS);
            },
            [b],
        ),
        v = r.useCallback(() => {
            T(null), y.A.openSearchFiltersModal(s);
        }, [T, s]),
        L = r.useMemo(() => (f > 0 ? X.intl.format(X.t.uaR4sI, { filterCount: f }) : X.intl.string(X.t.UdhTtk)), [f]),
        k = !(0, U.DZ)() && (s.type === V.I4_.DMS || s.type === V.I4_.CHANNEL);
    return (0, l.jsxs)("header", {
        className: a()(K.wL, { [K.g$]: null != A }),
        children: [
            (0, l.jsx)("div", {
                className: K.TN,
                role: "status",
                children: (0, l.jsx)(ee, {
                    totalResults: u,
                    subtitle: A,
                    isIndexing: d,
                    isSearching: x,
                    documentsIndexed: m,
                }),
            }),
            (0, l.jsxs)("div", {
                className: K.vd,
                children: [
                    (0, l.jsx)(O.$, { variant: "secondary", onClick: v, text: L, icon: F.R, size: "sm" }),
                    (0, l.jsx)(ea, {
                        searchMode: n,
                        onSearchModeChange: o,
                        isPopoutOpen: "sort" === R,
                        setOpenPopout: T,
                    }),
                    k &&
                        (0, l.jsx)(en, {
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
function ee(e) {
    let { totalResults: t, subtitle: s, isSearching: r, isIndexing: n, documentsIndexed: a } = e;
    return n
        ? (0, l.jsx)(es, { documentsIndexed: a })
        : r
          ? (0, l.jsx)(el, {})
          : (0, l.jsx)(er, { totalResults: t, subtitle: s });
}
function et() {
    return (0, l.jsx)("div", {
        className: K.zp,
        children: (0, l.jsx)(H.y, { type: H.y.Type.SPINNING_CIRCLE, className: K.u1, itemClassName: K.pu }),
    });
}
function es(e) {
    let { documentsIndexed: t } = e;
    return (0, l.jsx)(w.m, {
        asContainer: !0,
        text: X.intl.formatToPlainString(X.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, l.jsxs)("div", {
            className: K.q_,
            children: [
                (0, l.jsx)(P.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, l.jsx)(W.Anchor, {
                        className: K.Zd,
                        href: B.A.getArticleURL(V.MVz.SEARCH_INDEXING),
                        children: X.intl.string(X.t["G3EA+4"]),
                    }),
                }),
                (0, l.jsx)(et, {}),
            ],
        }),
    });
}
function el() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(P.E, { variant: "text-md/medium", color: "text-default", children: X.intl.string(X.t.uixzLf) }),
            (0, l.jsx)(et, {}),
        ],
    });
}
function er(e) {
    let { totalResults: t, subtitle: s } = e,
        r = (0, l.jsx)(P.E, {
            variant: "text-md/medium",
            color: "text-strong",
            children: X.intl.format(X.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, l.jsxs)("div", {
              className: K.hy,
              children: [r, (0, l.jsx)(P.E, { variant: "text-xs/medium", color: "text-subtle", children: s })],
          })
        : r;
}
function en(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: n,
            setOpenPopout: a,
            onPopoverRequestClose: i,
            isPopoverVisible: c,
        } = e,
        o = r.useRef(null),
        u = m.Hu.useSetting(),
        d = r.useCallback(
            (e) => {
                if (u !== e) {
                    if (
                        ((0, k._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: m.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: k.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: V.I4_.DMS };
                        y.A.transitionStateToSearchContext(t, e, y.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: V.I4_.CHANNEL, channelId: s };
                        y.A.transitionStateToSearchContext(t, e);
                    }
                    a(null), m.Hu.updateSetting(e);
                }
            },
            [u, a, t, s],
        ),
        [h, x] = r.useMemo(
            () => [
                u ? X.intl.string(X.t["8lklch"]) : X.intl.string(X.t.ji3jTF),
                u ? X.intl.string(X.t.RMQZCa) : X.intl.string(X.t["v/PagC"]),
            ],
            [u],
        ),
        g = r.useMemo(() => ({ align: "end" }), []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(q.Y, {
                targetElementRef: o,
                shouldShow: n,
                animation: q.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(D.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": X.intl.string(X.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, l.jsxs)(
                            G.rX,
                            {
                                label: X.intl.string(X.t["/tMwrA"]),
                                children: [
                                    (0, l.jsx)(G.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: X.intl.string(X.t.jRkYAh),
                                        checked: !u,
                                        action: () => d(!1),
                                    }),
                                    (0, l.jsx)(G.iD, {
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
                    (0, l.jsx)(z.K, {
                        ...e,
                        buttonRef: o,
                        variant: "secondary",
                        icon: $.SettingsIcon,
                        onClick: () => {
                            a(n ? null : "settings");
                        },
                        "aria-label": X.intl.string(X.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, l.jsx)(M.A, {
                targetElementRef: o,
                shouldShow: c,
                onRequestClose: i,
                title: h,
                body: x,
                caretConfig: g,
                badge: "new",
            }),
        ],
    });
}
function ea(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: n, setOpenPopout: a } = e,
        i = r.useRef(null),
        c = r.useMemo(
            () => [
                { label: X.intl.string(X.t.CbaapP), value: V.BBH.NEWEST },
                { label: X.intl.string(X.t.OukXZj), value: V.BBH.OLDEST },
                { label: X.intl.string(X.t.q8gB52), value: V.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        o = r.useCallback(
            (e) => {
                a(null), s(e);
            },
            [a, s],
        );
    return (0, l.jsx)(q.Y, {
        targetElementRef: i,
        shouldShow: n,
        animation: q.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsx)(D.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": X.intl.string(X.t.utp2hS),
                onSelect: () => a(null),
                children: (0, l.jsx)(
                    G.rX,
                    {
                        children: c.map((e) => {
                            let { label: s, value: r } = e;
                            return (0, l.jsx)(
                                G.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${r}`,
                                    label: s,
                                    action: () => o(r),
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
            (0, l.jsx)(O.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                icon: Q.J,
                onClick: () => {
                    a(n ? null : "sort");
                },
                text: X.intl.string(X.t.XvNMNk),
                "aria-label": X.intl.string(X.t.XvNMNk),
                size: "sm",
            }),
    });
}
var ei = s(159083),
    ec = s(876689),
    eo = s(187654),
    eu = s(148795),
    ed = s(53788),
    eh = s(939249),
    ex = s(192308),
    em = s(670455),
    eg = s(596500);
function ep(e) {
    let { rating: t, onClick: s } = e,
        n = t === em.P0.BAD ? eu.d : ed.G,
        a = r.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, l.jsx)(eh.D, {
        onClick: a,
        className: eg.zc,
        children: (0, l.jsx)(n, { size: "md", color: "currentColor", className: eg.Kk }),
    });
}
let ef = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: n } = e;
    r.useEffect(() => {
        (0, k.J$)({ searchContext: t });
    }, [t]);
    let a = r.useCallback(
        (e) => {
            n(),
                (0, ex.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([s.e("36395"), s.e("155925"), s.e("444908")]).then(
                        s.bind(s, 774567),
                    );
                    return (s) => (0, l.jsx)(r, { ...s, searchContext: t, rating: e });
                });
        },
        [n, t],
    );
    return (0, l.jsxs)("div", {
        className: eg.kL,
        children: [
            (0, l.jsx)(P.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: X.intl.string(X.t["I+4OJC"]),
            }),
            (0, l.jsxs)("div", {
                className: eg.Pt,
                children: [
                    (0, l.jsx)(ep, { rating: em.P0.GOOD, onClick: a }),
                    (0, l.jsx)(ep, { rating: em.P0.BAD, onClick: a }),
                ],
            }),
        ],
    });
};
var eS = s(36537);
class eA extends r.Component {
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
            let a = (0, S.bS)(e.props.searchContext);
            0 === s
                ? (0, k.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: y.A.getSearchInputText(e.props.searchContext),
                      searchQuery: _.A.getSearchResultsQuery(a),
                  })
                : (0, k.H9)({
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
                      searchQueryString: y.A.getSearchInputText(e.props.searchContext),
                      searchQuery: _.A.getSearchResultsQuery(a),
                  });
        };
    })();
    render() {
        return null;
    }
}
function eR(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: eS.Oq, children: (0, l.jsx)("div", { className: eS.de, children: t }) });
}
function eI(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: r } = e;
    return s ? (0, l.jsx)(ef, { searchContext: t, dismissFeedbackEntrypoint: r }) : null;
}
function ey(e) {
    let {
            messages: t,
            blockCount: s,
            ignoreCount: r,
            search: n,
            searchContext: i,
            renderEmbeds: c,
            onClick: o,
            onScrollTo: u,
            onBlockedResultsClick: d,
            searchRequestAnalyticsId: h,
            searchResultsQuery: x,
        } = e,
        { totalResults: m, isSearching: g, isIndexing: p, hasError: f } = n;
    if (f)
        return (0, l.jsxs)(eR, {
            children: [
                (0, l.jsx)("div", { className: eS.M6 }),
                (0, l.jsx)("div", { className: a()(eS.pZ, eS.gJ), children: X.intl.string(X.t.uvDZBZ) }),
            ],
        });
    if (p) {
        let e = (0, S.Y7)(i);
        return (0, l.jsxs)(eR, {
            children: [(0, l.jsx)(ei.A, {}), (0, l.jsx)("div", { className: (eS.pZ, eS.Jy), children: e })],
        });
    }
    if (g) return null;
    if (m > 0)
        return (0, l.jsx)(eo.A, {
            search: n,
            messages: t,
            onClick: o,
            blockCount: s,
            ignoreCount: r,
            renderEmbeds: c,
            scrollTo: u,
            onBlockedResultsClick: d,
            searchRequestAnalyticsId: h,
            searchResultsQuery: x,
        });
    let { showNoResultsAlt: A } = n,
        R = A ? X.intl.string(X.t["VrK/2R"]) : X.intl.string(X.t.V6nAfF);
    return (0, l.jsxs)(eR, {
        children: [
            (0, l.jsx)("div", { className: a()(eS.$l, { [eS.CC]: A }) }),
            (0, l.jsx)("div", { className: a()(eS.pZ, eS.wV, { [eS.CC]: A }), children: R }),
        ],
    });
}
let eE = [],
    eC = r.memo(function (e) {
        let {
                searchContext: t,
                search: s,
                renderEmbeds: n,
                searchRequestAnalyticsId: a,
                messages: d,
                blockCount: x,
                ignoreCount: m,
                isFeedbackVisible: f,
                dismissFeedbackEntrypoint: A,
                onSearchModeChange: I,
                onPageChange: E,
                searchMode: C,
                onBlockedResultsClick: b,
                searchResultsQuery: j,
                searchResultsQueryString: T,
                selectedChannelId: N,
            } = e,
            v = r.useRef(null),
            M = r.useCallback(() => {
                y.A.cleanUpSearchState(t);
            }, [t]);
        r.useEffect(
            () => (
                p._.subscribe(V.jej.SEARCH_RESULTS_CLOSE, M),
                () => {
                    p._.unsubscribe(V.jej.SEARCH_RESULTS_CLOSE, M);
                }
            ),
            [M],
        );
        let O = r.useRef(s.showBlockedResults);
        r.useEffect(() => {
            if (O.current !== s.showBlockedResults) {
                O.current = s.showBlockedResults;
                let e = v.current;
                null != e && e.scrollToBottom();
            }
        }, [s.showBlockedResults]);
        let F = r.useCallback((e, t, s) => {
                let l = v.current;
                if (null == l) return;
                let r = l.getScrollerState().scrollTop - e;
                l.scrollTo({ to: r, animate: t, callback: s });
            }, []),
            H = null != T ? `${C}:${T}` : void 0,
            {
                paginationTotalCount: w,
                paginationMaxVisiblePage: P,
                isMaxVisiblePageWarningVisible: W,
                renderPageWrapper: q,
            } = (0, L.o)({
                totalResults: s.totalResults,
                isSearching: s.isSearching,
                offset: s.offset,
                searchResultsPaginationKey: H,
            }),
            D = r.useCallback(
                (e) => {
                    e === C ||
                        s.isSearching ||
                        ((0, k.L6)({ searchContext: t, searchRequestAnalyticsId: a, mode: e }), I(e));
                },
                [I, s.isSearching, t, C, a],
            ),
            G = r.useCallback(
                (e, l) => {
                    let r = g.A.getChannel(e.channel_id),
                        n = null != r ? r.getGuildId() : null,
                        i = (0, S.bS)(t),
                        { offset: c, totalResults: o } = s;
                    (0, k.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: a,
                        guildId: n,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != d ? d.length : null,
                        totalResults: o,
                        limit: V.T_y,
                        page: Math.floor(c / V.T_y) + 1,
                        offset: c,
                        index: l,
                        searchQueryString: y.A.getSearchInputText(t),
                        searchQuery: _.A.getSearchResultsQuery(i),
                    });
                },
                [s, t, a, d],
            ),
            z = r.useCallback(
                (e) => {
                    (0, k.kq)({ searchContext: t, searchRequestAnalyticsId: a, newPageIndex: e }), E(e);
                },
                [E, t, a],
            ),
            $ = w > V.T_y,
            Q = (0, i.yK)([_.A], () => {
                if (0 !== s.offset) return eE;
                let e = d.length;
                if (e < 10) return eE;
                let l = 0;
                if (
                    (d.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && l++;
                    }),
                    l / e < 0.75)
                )
                    return eE;
                let r = (0, S.bS)(t),
                    n = _.A.getSearchResultsQueryString(r);
                return (0, S._o)(n ?? "").some((e) => e.type === V.LWr.FILTER_AUTHOR_TYPE)
                    ? eE
                    : [c.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [U, B] = (0, h.kn)(Q),
            Y = U === c.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            Z = r.useCallback(() => {
                if (s.isSearching) return;
                let e = `${R.Ay[V.LWr.FILTER_AUTHOR_TYPE].key} ${X.intl.string(X.t.tPZo4p)} `;
                y.A.appendToSearchInputText(t, e);
            }, [t, s.isSearching]);
        return (0, l.jsxs)("section", {
            className: eS.zt,
            "aria-label": X.intl.string(X.t["zkoeq/"]),
            children: [
                (0, l.jsx)(J, {
                    searchContext: t,
                    searchMode: C,
                    onSearchModeChange: D,
                    totalResults: s.totalResults,
                    isSearching: s.isSearching,
                    isIndexing: s.isHistoricalIndexing,
                    documentsIndexed: s.documentsIndexed,
                    selectedChannelId: N,
                }),
                (0, l.jsxs)(o.Ch, {
                    ref: v,
                    className: eS.XG,
                    children: [
                        W &&
                            !s.isSearching &&
                            (0, l.jsx)(u.p, {
                                className: eS.VC,
                                messageType: u.Y.WARNING,
                                children: X.intl.formatToPlainString(X.t["E+2azY"], { maxPages: P }),
                            }),
                        Y &&
                            (0, l.jsx)(u.p, {
                                className: eS.QR,
                                messageType: u.Y.INFO,
                                children: X.intl.format(X.t["gQeg/R"], { handleClick: Z }),
                            }),
                        (0, l.jsx)(ey, {
                            messages: d,
                            blockCount: x,
                            ignoreCount: m,
                            search: s,
                            searchContext: t,
                            renderEmbeds: n,
                            onClick: G,
                            onScrollTo: F,
                            onBlockedResultsClick: b,
                            searchRequestAnalyticsId: a,
                            searchResultsQuery: j,
                        }),
                    ],
                }),
                (0, l.jsx)(eI, { searchContext: t, isFeedbackVisible: f, dismissFeedbackEntrypoint: A }),
                $ &&
                    (0, l.jsx)(ec.A, {
                        className: eS.cu,
                        onPageChange: z,
                        offset: s.offset,
                        totalCount: w,
                        pageSize: V.T_y,
                        renderPageWrapper: q,
                    }),
            ],
        });
    });
function eb(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: n, dismissFeedbackEntrypoint: a } = (function () {
            let [e, t] = r.useState(!1),
                s = (0, A.H)({ location: "SearchResults" });
            return (
                (0, d.Ay)(() => {
                    s &&
                        x.A.possiblyShowFeedbackModal(
                            em.MW.SEARCH_RESULTS,
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
        c = (0, S.bS)(t),
        o = (0, i.cf)([f.A, _.A], () => ({
            isSearching: f.A.getIsFetching(c) ?? !1,
            isIndexing: f.A.getIsIndexing(c) ?? !1,
            isHistoricalIndexing: f.A.getIsHistoricalIndexing(c) ?? !1,
            documentsIndexed: f.A.getDocumentsIndexed(c),
            offset: _.A.getSearchResultsOffset(c) ?? 0,
            totalResults: f.A.getTotalCount(c) ?? 0,
            hasError: null != f.A.getError(c),
            showBlockedResults: _.A.shouldShowBlockedResults(c),
            showNoResultsAlt: _.A.shouldShowNoResultsAlt(c),
        })),
        u = (0, i.bG)([f.A], () => f.A.getAnalyticsId(c)),
        {
            renderedMessages: h,
            ignoreCount: g,
            blockCount: p,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, i.bG)(
                    [_.A, f.A, b.A],
                    () => {
                        let e = (0, S.bS)(t),
                            s = _.A.getSearchResultsQuery(e),
                            l = f.A.getMessages(e);
                        if (null == s || null == l || 0 === l.length) return v;
                        let r = (0, C.wG)((0, S.dX)(s) ?? ""),
                            n = [];
                        return (
                            l.forEach((e) => {
                                let t = new T.Ay(e);
                                (t = (t = (function (e, t) {
                                    let [s] = t,
                                        l = s.getMessage(e.id, e.channel_id);
                                    return (
                                        null != l && (e = e.merge({ attachments: l.attachments, embeds: l.embeds })), e
                                    );
                                })(t, [b.A])).set(
                                    "customRenderedContent",
                                    (0, j.Ay)(t, {
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
                { blockCount: l, ignoreCount: r } = (0, i.cf)([N.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        s.forEach((s) => {
                            let l = N.A.isBlockedForMessage(s),
                                r = N.A.isIgnoredForMessage(s);
                            l ? e++ : r && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: s, blockCount: l, ignoreCount: r };
        })({ searchContext: t }),
        R = (0, i.bG)([_.A], () => _.A.getSearchMode(c) ?? V.BBH.NEWEST),
        E = r.useCallback(
            (e) => {
                if (o.isSearching) return;
                I.A.updateSearchMode(t, e);
                let s = y.A.getSearchInputText(t);
                null != s && y.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [o.isSearching, t],
        ),
        L = r.useCallback(
            (e) => {
                let s = y.A.getSearchInputText(t);
                null != s && y.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: e * V.T_y });
            },
            [t],
        ),
        k = (0, i.bG)([_.A], () => {
            let e = (0, S.bS)(t);
            return _.A.getSearchResultsQuery(e);
        }),
        M = (0, i.bG)([_.A], () => {
            let e = (0, S.bS)(t);
            return _.A.getSearchResultsQueryString(e);
        }),
        O = r.useCallback((e) => I.A.setShowBlockedResults(t, e), [t]),
        F = r.useDeferredValue(h),
        H = r.useDeferredValue(o),
        w = r.useDeferredValue(u);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eC, {
                searchContext: t,
                search: H,
                searchRequestAnalyticsId: w,
                messages: F,
                ignoreCount: g,
                blockCount: p,
                renderEmbeds: m.rs.useSetting(),
                isFeedbackVisible: n,
                dismissFeedbackEntrypoint: a,
                onPageChange: L,
                onSearchModeChange: E,
                searchMode: R,
                onBlockedResultsClick: O,
                searchResultsQuery: k,
                searchResultsQueryString: M,
                selectedChannelId: s,
            }),
            (0, l.jsx)(eA, {
                searchContext: t,
                searchRequestAnalyticsId: w,
                messages: F,
                searchOffset: H.offset,
                searchLimit: V.T_y,
                searchHasError: H.hasError,
                searchTotalResults: H.totalResults,
                searchIsIndexing: H.isHistoricalIndexing,
                isSearching: H.isSearching,
            }),
        ],
    });
}
function ej(e) {
    let { guildId: t, channelId: s } = e,
        r = (0, E.J)({ guildId: t, channelId: s });
    return null == r ? null : (0, l.jsx)(eb, { searchContext: r, selectedChannelId: s });
}
