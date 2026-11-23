(s.r(t), s.d(t, { default: () => tr }));
var n = s(477900),
    l = s(582128),
    r = s(503698),
    i = s.n(r),
    a = s(855986),
    o = s(554146),
    c = s(516521),
    d = s(683071),
    u = s(263775),
    h = s(160963),
    m = s(133986),
    x = s(894880),
    g = s(534514),
    p = s(834730),
    f = s(866665),
    j = s(408278),
    k = s(900797),
    S = s(847374),
    A = s(435558),
    E = s.n(A),
    M = s(118751),
    I = s(342952),
    b = s(778712),
    y = s(570597),
    C = s(792996),
    v = s(993195);
function R(e) {
    let { citations: t, guildId: s } = e,
        r = l.useMemo(
            () =>
                (0, A.uniqBy)(
                    t.map((e) => e.message.author),
                    (e) => e.id,
                ),
            [t],
        );
    return 0 === r.length
        ? null
        : (0, n.jsxs)("div", {
              role: "img",
              "aria-label": (0, y.X)(r.map((e) => e.username)),
              className: v.tF,
              children: [
                  (0, n.jsx)(I.I, {
                      className: v.UX,
                      users: r,
                      maxUsers: 3,
                      size: b._3.SIZE_20,
                      guildId: s,
                      hideOverflowCount: !0,
                      "aria-hidden": !0,
                  }),
                  r.length > 3 &&
                      (0, n.jsxs)(p.E, {
                          variant: "body-md/semibold",
                          color: "text-default",
                          className: v.qs,
                          "aria-hidden": !0,
                          children: ["+", (0, M.tg)(r.length - 3, C.intl.currentLocale)],
                      }),
              ],
          });
}
var L = s(53788),
    F = s(148795),
    N = s(617713),
    T = s(221355),
    _ = s(743175),
    w = s(869720);
function D(e) {
    let { smartSearchQuery: t } = e,
        s = (0, a.bG)([_.A], () => _.A.getResultFeedback(t.guildId, t.requestKey), [t.guildId, t.requestKey]),
        [r] = l.useState(null !== s),
        i = l.useRef(null);
    if (r) return null;
    function o(e) {
        (i.current?.focus(),
            (0, T.X)({ smartSearchQuery: t, hasPositiveFeedback: e, SearchSessionAnalyticsManager: N.A }));
    }
    let c = C.intl.string(w.default["x/H32X"]),
        d = C.intl.string(w.default.FoToeH);
    return (0, n.jsxs)("div", {
        className: v.mp,
        ref: i,
        tabIndex: -1,
        children: [
            (0, n.jsx)("div", {
                role: "status",
                children: (0, n.jsx)(p.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    children: C.intl.string(null === s ? w.default.uij9Dy : C.t.kZbFIO),
                }),
            }),
            null === s &&
                (0, n.jsxs)("div", {
                    className: v.BX,
                    children: [
                        (0, n.jsx)(f.m, {
                            text: c,
                            children: (0, n.jsx)(j.K, {
                                icon: L.ThumbsUpIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": c,
                                onClick: () => o(!0),
                            }),
                        }),
                        (0, n.jsx)(f.m, {
                            text: d,
                            children: (0, n.jsx)(j.K, {
                                icon: F.ThumbsDownIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": d,
                                onClick: () => o(!1),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var H = s(844222),
    W = s(140735),
    z = s(336288),
    O = s(286251),
    q = s(114212);
function B(e) {
    let { isCollapsed: t } = e,
        { reducedMotion: s } = l.useContext(H.C),
        r = l.useMemo(
            () =>
                [
                    w.default.ffCCEe,
                    ...E().shuffle([
                        w.default.Sb2fo2,
                        w.default.rXNe0Z,
                        w.default["22g6Ju"],
                        w.default.IogGZY,
                        w.default.UEnMJF,
                        w.default.kk7BVL,
                        w.default.UVa49v,
                    ]),
                ].map((e) => C.intl.string(e)),
            [],
        ),
        a = s.enabled ? 4800 : 2400;
    return (0, n.jsxs)("div", {
        role: "status",
        className: i()(v.qV, { [v.yZ]: t }),
        children: [
            (0, n.jsx)(W.A, { children: C.intl.string(w.default.ffCCEe) }),
            (0, n.jsxs)("div", {
                className: v.uH,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(z.i, { size: 12 }),
                    (0, n.jsx)(O.o, {
                        text: r,
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        delay: a - (s.enabled ? 450 : 1e3),
                        initialDelay: s.enabled ? 550 : 300,
                        duration: 1e3,
                        className: v.h5,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: v.Ft,
                "aria-hidden": !0,
                children: Array.from({ length: t ? 3 : 6 }, (e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: v._f,
                            children: [
                                (0, n.jsx)(q.F, { width: 32, height: 32, className: v.qf }),
                                (0, n.jsxs)("div", {
                                    className: v.lm,
                                    children: [
                                        (0, n.jsx)(q.F, { width: 128, height: 12, className: v.qf }),
                                        (0, n.jsx)(q.F, { width: 192, height: 16, className: v.qf }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
let P = l.memo(function (e) {
    let {
            isVisible: t = !0,
            searchSubmissionId: s,
            query: r,
            result: a,
            isKeywordLoading: o,
            isKeywordSearchSettled: c,
            hasKeywordResults: d,
            renderCitations: u,
        } = e,
        [m, x] = l.useState(null),
        A = !c || d,
        E = !A || m === s,
        M = l.useId(),
        I = l.useId(),
        b = l.useRef(null);
    return (l.useLayoutEffect(() => {
        E || b.current !== document.activeElement || b.current?.scrollIntoView({ block: "nearest" });
    }, [E]),
    !t || o)
        ? null
        : (0, n.jsx)("section", {
              className: v.om,
              "aria-label": C.intl.string(w.default.ydAwWi),
              children: (0, n.jsxs)("div", {
                  className: i()(v.Gt, { [v.Td]: E && A && a.status === h.o.LOADED }),
                  children: [
                      a.status === h.o.LOADING
                          ? (0, n.jsx)(B, { isCollapsed: !E })
                          : (0, n.jsxs)("div", {
                                id: I,
                                className: i()(v.VH, { [v.yZ]: !E }),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: v.wx,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: v.qd,
                                                children: [
                                                    (0, n.jsx)(g.D, {
                                                        id: M,
                                                        variant: "heading-sm/semibold",
                                                        color: "text-subtle",
                                                        lineClamp: 1,
                                                        children: C.intl.string(w.default.ydAwWi),
                                                    }),
                                                    (0, n.jsx)(p.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-subtle",
                                                        lineClamp: 1,
                                                        children: C.intl.string(w.default.QIdSmb),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(R, { citations: a.citations, guildId: r.guildId }),
                                        ],
                                    }),
                                    (0, n.jsx)(p.E, {
                                        variant: "body-md/normal",
                                        color: "text-default",
                                        className: v.z,
                                        children: a.answerText,
                                    }),
                                    (0, n.jsx)("div", { inert: !E, children: u?.(r, a) }),
                                    (0, n.jsx)("div", { hidden: !E, children: (0, n.jsx)(D, { smartSearchQuery: r }) }),
                                ],
                            }),
                      !E && (0, n.jsx)("div", { className: v.aE, "aria-hidden": !0 }),
                      A &&
                          a.status === h.o.LOADED &&
                          (0, n.jsx)("div", {
                              className: v.fT,
                              children: (0, n.jsx)("div", {
                                  className: v.os,
                                  children: (0, n.jsx)(f.m, {
                                      text: C.intl.string(E ? w.default.FKLBbW : w.default.NuTbB9),
                                      children: (0, n.jsx)(j.K, {
                                          buttonRef: b,
                                          icon: E ? k.ChevronSmallUpIcon : S.ChevronSmallDownIcon,
                                          variant: "secondary",
                                          size: "sm",
                                          "aria-label": C.intl.string(E ? w.default.FKLBbW : w.default.NuTbB9),
                                          onClick: () => x(E ? null : s),
                                          "aria-expanded": E,
                                          "aria-controls": I,
                                      }),
                                  }),
                              }),
                          }),
                  ],
              }),
          });
});
s(321073);
var G = s(347347),
    Q = s(697530),
    V = s(775602),
    U = s(58241),
    Z = s(856896),
    K = s(457699),
    Y = s(146849),
    X = s(954403),
    $ = s(81437),
    J = s(378570),
    ee = s(222),
    et = s(354777),
    es = s(383233),
    en = s(994500),
    el = s(517381),
    er = s(822382),
    ei = s(65600);
function ea(e, t, s, n) {
    let l = (0, Q.wG)(t),
        r = [];
    return (
        e.forEach((e) => {
            let t = new es.Ay(e);
            ((t = (function (e, t) {
                let [s] = t,
                    n = s.getMessage(e.id, e.channel_id);
                return (null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e);
            })(t, n)),
                s ||
                    (t = t.set(
                        "customRenderedContent",
                        (0, et.Ay)(t, { postProcessor: l, allowHeading: !0, allowList: !0, allowGameMentions: !0 }),
                    )),
                r.push(t));
        }),
        r
    );
}
let eo = [];
var ec = s(253932),
    ed = s(734057),
    eu = s(576705),
    eh = s(583231),
    em = s(652215);
function ex(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ed.A, eu.A, en.A],
        [s, n, l] = t,
        r = s.getChannel(e.channelId);
    return (
        null != r &&
        n.can(em.xBc.VIEW_CHANNEL, r) &&
        n.can(em.xBc.READ_MESSAGE_HISTORY, r) &&
        !l.isBlockedForMessage(e.message) &&
        !l.isIgnoredForMessage(e.message)
    );
}
function eg(e) {
    let { query: t, result: s } = e,
        r = (0, Y.I2)({ location: "useRenderedSearchResults" }).enabled,
        i = ec.rs.useSetting(),
        o = l.useId(),
        c = l.useRef([]),
        d = (0, a.bG)(
            [K.A],
            () =>
                ea(
                    s.citations.map((e) => e.message),
                    t.queryText,
                    r,
                    [K.A],
                ),
            [s.citations, t.queryText, r],
            a.My,
        ),
        u = l.useCallback(
            (e, t) => {
                let n = s.citations[t];
                null != n &&
                    (async function (e) {
                        if (!ex(e)) return;
                        let t = async () => {
                            if ("conversation" === e.sourceType)
                                try {
                                    let t = await (0, U.Al)({
                                        channelId: e.channelId,
                                        conversationId: (0, eh.E2)(e.sourceId),
                                        messageId: e.messageId,
                                    });
                                    if (!ex(e)) return;
                                    if (t) {
                                        ((0, J.iN)(e.channelId), (0, Z.Rl)());
                                        return;
                                    }
                                } catch {}
                            ex(e) && (0, J.ci)(e.channelId, e.messageId);
                        };
                        (0, $.A)(e.message, () => {
                            t();
                        }) && (await t());
                    })(n);
            },
            [s.citations],
        ),
        h = (0, G.Ay)({
            navId: o,
            itemCount: d.length,
            focusedIndex: 0,
            focusOnMount: !1,
            setFocus: (e) => {
                V.Ay.keyboardModeEnabled && document.getElementById(e)?.focus();
            },
            onSelect: (e) => c.current[e]?.jumpTo(),
        }),
        m = l.useMemo(() => {
            let e = [];
            return (
                d.forEach((t, s) => {
                    let n = ed.A.getChannel(t.channel_id);
                    if (null == n) return;
                    let l = e[e.length - 1];
                    ((null == l || l.channel.id !== n.id) &&
                        ((l = { channel: n, messages: [], startIndex: s }), e.push(l)),
                        l.messages.push(t));
                }),
                e
            );
        }, [d]),
        x = l.useMemo(() => (0, Q.wG)(t.queryText), [t.queryText]),
        g = l.useMemo(() => (0, Q.th)(t.queryText), [t.queryText]),
        p = l.useCallback(() => {}, []);
    return (0, n.jsx)("div", {
        ...h.getContainerProps(),
        className: v.zH,
        children: (0, n.jsx)(X.G.Provider, {
            value: g,
            children: m.map((e) =>
                (0, n.jsx)(
                    ee.l,
                    {
                        ...e,
                        highlighter: x,
                        resultRefs: c,
                        totalResults: d.length,
                        scrollTo: p,
                        renderEmbeds: i,
                        offset: 0,
                        jumpToMessage: u,
                        listNavigator: h,
                        resultIdPrefix: o,
                    },
                    `${e.channel.id}-${e.startIndex}`,
                ),
            ),
        }),
    });
}
var ep = s(765178),
    ef = s(939249),
    ej = s(7689),
    ek = s(753806);
s(163839);
var eS = s(768570);
function eA(e) {
    let { query: t, suggestions: s, isEmptyScreen: r = !1, hasError: i = !1 } = e;
    return (
        l.useEffect(() => {
            r && ep.O.announce(C.intl.string(i ? C.t.uvDZBZ : C.t.V6nAfF), "polite");
        }, [r, i]),
        (0, n.jsxs)("div", {
            className: v.Gn,
            children: [
                (0, n.jsx)(g.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    children: C.intl.string(w.default.bzswFC),
                }),
                (0, n.jsx)("div", {
                    className: v.aG,
                    children: s.map((e) =>
                        (0, n.jsxs)(
                            ef.D,
                            {
                                className: v.bC,
                                onClick: () => {
                                    let s;
                                    return (
                                        (s = (0, er._o)(t.searchQueryString)
                                            .filter((e) => e.type === em.LWr.FILTER_IN || e.type === em.LWr.ANSWER_IN)
                                            .map((e) => t.searchQueryString.slice(e.start, e.end))
                                            .join(" ")),
                                        void (ek.A.dispatchSetSearchQuery({
                                            query: [s, e.suggestedSearchText].filter(Boolean).join(" "),
                                            replace: !0,
                                            performSearch: !0,
                                            searchQuerySource: eS.Q_.SEARCH_RESULTS_HINT,
                                        }),
                                        (0, m.A)(t, N.A, 3))
                                    );
                                },
                                children: [
                                    (0, n.jsx)(ej.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: v.Av,
                                    }),
                                    (0, n.jsx)(p.E, {
                                        variant: "body-md/medium",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        className: v.vV,
                                        children: e.suggestedSearchText,
                                    }),
                                ],
                            },
                            e.suggestionId,
                        ),
                    ),
                }),
                r &&
                    (0, n.jsx)("div", {
                        className: v.p3,
                        children: i
                            ? (0, n.jsx)(p.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-muted",
                                  children: C.intl.string(C.t.uvDZBZ),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(g.D, {
                                          variant: "heading-sm/semibold",
                                          color: "text-muted",
                                          children: C.intl.string(w.default["HX/WYf"]),
                                      }),
                                      (0, n.jsx)(p.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-muted",
                                          children: C.intl.string(w.default["0ySxbu"]),
                                      }),
                                  ],
                              }),
                    }),
            ],
        })
    );
}
var eE = s(705912),
    eM = s(624018),
    eI = s(188567),
    eb = s(224467),
    ey = s(616252),
    eC = s(775427),
    ev = s(477654),
    eR = s(145331),
    eL = s(43105),
    eF = s(821609),
    eN = s(783977),
    eT = s(289873),
    e_ = s(28863),
    ew = s(265872),
    eD = s(165862),
    eH = s(477782),
    eW = s(625903),
    ez = s(112173),
    eO = s(93055),
    eq = s(975571),
    eB = s(121806),
    eP = s(49999),
    eG = s(898029);
function eQ(e) {
    let t,
        {
            searchContext: s,
            searchMode: r,
            onSearchModeChange: c,
            totalResults: d,
            isIndexing: h,
            isSearching: m,
            documentsIndexed: x,
            selectedChannelId: g,
        } = e,
        p =
            ((t = (0, a.bG)([ei.A], () => {
                let e = (0, er.bS)(s);
                return ei.A.getSearchResultsQueryString(e);
            })),
            l.useMemo(() => (0, er._o)(t ?? ""), [t])),
        { totalFilters: f } = (0, eB.vj)(p, s),
        j = l.useMemo(() => {
            if (s.type === em.I4_.DMS) {
                let e = (0, er.Zf)(p),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? C.intl.format(C.t.A2dqWG, { filterCount: t }) : C.intl.string(C.t.tc619d);
            }
            return null;
        }, [s.type, p]),
        [k, S] = l.useState(null),
        A = l.useMemo(() => (m ? [] : [o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [m]),
        [E, M] = (0, u.kn)(A),
        I = E === o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        b = l.useCallback(
            (e) => {
                (null != e && I && M(eP.i.USER_DISMISS), S(e));
            },
            [I, M, S],
        ),
        y = l.useCallback(
            (e) => {
                M("user:explicit" === e ? eP.i.USER_DISMISS : eP.i.AUTO_DISMISS);
            },
            [M],
        ),
        v = l.useCallback(() => {
            (b(null), ek.A.openSearchFiltersModal(s));
        }, [b, s]),
        R = l.useMemo(() => (f > 0 ? C.intl.format(C.t.uaR4sI, { filterCount: f }) : C.intl.string(C.t.UdhTtk)), [f]),
        L = !(0, eO.DZ)() && (s.type === em.I4_.DMS || s.type === em.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: i()(eG.wL, { [eG.g$]: null != j }),
        children: [
            (0, n.jsx)("div", {
                className: eG.TN,
                role: "status",
                children: (0, n.jsx)(eV, {
                    totalResults: d,
                    subtitle: j,
                    isIndexing: h,
                    isSearching: m,
                    documentsIndexed: x,
                }),
            }),
            (0, n.jsxs)("div", {
                className: eG.vd,
                children: [
                    (0, n.jsx)(eF.$, {
                        variant: "secondary",
                        onClick: v,
                        text: R,
                        icon: eN.FiltersHorizontalIcon,
                        size: "sm",
                    }),
                    (0, n.jsx)(e$, {
                        searchMode: r,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === k,
                        setOpenPopout: b,
                    }),
                    L &&
                        (0, n.jsx)(eX, {
                            searchContext: s,
                            selectedChannelId: g,
                            isPopoutOpen: "settings" === k,
                            setOpenPopout: b,
                            isPopoverVisible: I,
                            onPopoverRequestClose: y,
                        }),
                ],
            }),
        ],
    });
}
function eV(e) {
    let { totalResults: t, subtitle: s, isSearching: l, isIndexing: r, documentsIndexed: i } = e;
    return r
        ? (0, n.jsx)(eZ, { documentsIndexed: i })
        : l
          ? (0, n.jsx)(eK, {})
          : (0, n.jsx)(eY, { totalResults: t, subtitle: s });
}
function eU() {
    return (0, n.jsx)("div", {
        className: eG.zp,
        children: (0, n.jsx)(eT.y, { type: eT.y.Type.SPINNING_CIRCLE, className: eG.u1, itemClassName: eG.pu }),
    });
}
function eZ(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(f.m, {
        asContainer: !0,
        text: C.intl.formatToPlainString(C.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: eG.q_,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "body-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(e_.Anchor, {
                        className: eG.Zd,
                        href: eq.A.getArticleURL(em.MVz.SEARCH_INDEXING),
                        children: C.intl.string(C.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(eU, {}),
            ],
        }),
    });
}
function eK() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(p.E, { variant: "body-md/medium", color: "text-default", children: C.intl.string(C.t.uixzLf) }),
            (0, n.jsx)(eU, {}),
        ],
    });
}
function eY(e) {
    let { totalResults: t, subtitle: s } = e,
        l = (0, n.jsx)(p.E, {
            variant: "body-md/medium",
            color: "text-strong",
            children: C.intl.format(C.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: eG.hy,
              children: [l, (0, n.jsx)(p.E, { variant: "body-xs/medium", color: "text-subtle", children: s })],
          })
        : l;
}
function eX(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: r,
            setOpenPopout: i,
            onPopoverRequestClose: a,
            isPopoverVisible: o,
        } = e,
        c = l.useRef(null),
        d = ec.Hu.useSetting(),
        u = l.useCallback(
            (e) => {
                if (d !== e) {
                    if (
                        ((0, eR._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: ec.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: eR.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: em.I4_.DMS };
                        ek.A.transitionStateToSearchContext(t, e, ek.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: em.I4_.CHANNEL, channelId: s };
                        ek.A.transitionStateToSearchContext(t, e);
                    }
                    (i(null), ec.Hu.updateSetting(e));
                }
            },
            [d, i, t, s],
        ),
        [h, m] = l.useMemo(
            () => [
                d ? C.intl.string(C.t["8lklch"]) : C.intl.string(C.t.ji3jTF),
                d ? C.intl.string(C.t.RMQZCa) : C.intl.string(C.t["v/PagC"]),
            ],
            [d],
        ),
        x = l.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ew.Y, {
                targetElementRef: c,
                shouldShow: r,
                animation: ew.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => i(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eD.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": C.intl.string(C.t.fb59v0),
                        onSelect: () => i(null),
                        children: (0, n.jsxs)(
                            eH.rX,
                            {
                                label: C.intl.string(C.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(eH.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t.jRkYAh),
                                        checked: !d,
                                        action: () => u(!1),
                                    }),
                                    (0, n.jsx)(eH.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t["lWpJ/t"]),
                                        checked: d,
                                        action: () => u(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, n.jsx)(j.K, {
                        ...e,
                        buttonRef: c,
                        variant: "secondary",
                        icon: eW.SettingsIcon,
                        onClick: () => {
                            i(r ? null : "settings");
                        },
                        "aria-label": C.intl.string(C.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(eL.A, {
                targetElementRef: c,
                shouldShow: o,
                onRequestClose: a,
                title: h,
                body: m,
                caretConfig: x,
                badge: "new",
            }),
        ],
    });
}
function e$(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: r, setOpenPopout: i } = e,
        a = l.useRef(null),
        o = l.useMemo(
            () => [
                { label: C.intl.string(C.t.CbaapP), value: em.BBH.NEWEST },
                { label: C.intl.string(C.t.OukXZj), value: em.BBH.OLDEST },
                { label: C.intl.string(C.t.q8gB52), value: em.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = l.useCallback(
            (e) => {
                (i(null), s(e));
            },
            [i, s],
        );
    return (0, n.jsx)(ew.Y, {
        targetElementRef: a,
        shouldShow: r,
        animation: ew.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => i(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(eD.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": C.intl.string(C.t.utp2hS),
                onSelect: () => i(null),
                children: (0, n.jsx)(
                    eH.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: l } = e;
                            return (0, n.jsx)(
                                eH.iD,
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
            (0, n.jsx)(eF.$, {
                ...e,
                buttonRef: a,
                variant: "secondary",
                icon: ez.ArrowsUpDownIcon,
                onClick: () => {
                    i(r ? null : "sort");
                },
                text: C.intl.string(C.t.XvNMNk),
                "aria-label": C.intl.string(C.t.XvNMNk),
                size: "sm",
            }),
    });
}
var eJ = s(481613),
    e1 = s.n(eJ),
    e2 = s(615300),
    e3 = s(569286);
function e0(e) {
    function t(e) {
        return e.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] });
    }
    return { transform: [{ translateX: t(e.x) }, { translateY: t(e.y) }] };
}
class e5 extends l.Component {
    state = { x: new e2.A.Value(0), y: new e2.A.Value(0) };
    _isMounted = !1;
    componentDidMount() {
        ((this._isMounted = !0), this.startAnimations());
    }
    componentDidUpdate(e) {
        e.reducedMotion !== this.props.reducedMotion &&
            (this.props.reducedMotion ? (this.state.x.setValue(0), this.state.y.setValue(0)) : this.startAnimations());
    }
    componentWillUnmount() {
        this._isMounted = !1;
    }
    shouldLoop = () => this._isMounted && !this.props.reducedMotion && "Firefox" !== e1().name;
    startAnimations() {
        if (!this.shouldLoop()) return;
        let { x: e, y: t } = this.state;
        (e2.A.animate(e, {
            loop: !0,
            toValueMin: -74,
            toValueMax: 95,
            overshootClamping: !0,
            friction: 5,
            tension: 1,
            shouldLoop: this.shouldLoop,
        }),
            e2.A.animate(t, {
                loop: !0,
                toValueMin: -59,
                toValueMax: 75,
                overshootClamping: !0,
                friction: 5,
                tension: 1,
                shouldLoop: this.shouldLoop,
            }));
    }
    render() {
        return (0, n.jsxs)("div", {
            className: e3.dJ,
            children: [
                (0, n.jsx)("div", { className: e3.LU }),
                (0, n.jsxs)("svg", {
                    className: e3.GR,
                    width: "320",
                    height: "280",
                    children: [
                        (0, n.jsx)("defs", {
                            children: (0, n.jsx)("rect", {
                                id: "search-index-foreground-mask-a",
                                width: "80",
                                height: "80",
                                rx: "40",
                            }),
                        }),
                        (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [
                                (0, n.jsxs)("g", {
                                    transform: "translate(120 80)",
                                    children: [
                                        (0, n.jsx)("mask", {
                                            id: "search-index-foreground-mask-b",
                                            fill: "#fff",
                                            children: (0, n.jsx)(e2.A.use, {
                                                style: e0(this.state),
                                                className: e3.dK,
                                                xlinkHref: "#search-index-foreground-mask-a",
                                            }),
                                        }),
                                        (0, n.jsxs)("g", {
                                            mask: "url(#search-index-foreground-mask-b)",
                                            children: [
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-15.0267 170.8361c0 6.311-5.116 11.427-11.428 11.427-6.31 0-11.426-5.116-11.426-11.427s5.116-11.427 11.426-11.427c6.312 0 11.428 5.116 11.428 11.427z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-12.39 165.5622c-6.311 0-11.427-5.116-11.427-11.427s5.116-11.427 11.427-11.427 11.427 5.116 11.427 11.427c0 2.727-.955 5.231-2.55 7.196",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-23.8168 129.5232c6.311 0 11.427 5.116 11.427 11.427s-5.116 11.427-11.427 11.427c-6.312 0-11.427-5.116-11.427-11.427",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M110.2125-35.5789c.556 6.286-4.089 11.833-10.375 12.39-6.287.556-11.834-4.089-12.391-10.375-.555-6.286 4.089-11.834 10.376-12.39",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#C2FFF9",
                                                    d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671zm-18.6982 25.5654l33.402-19.788",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-93.1889 132.2868l23.272 20.241-6.571-30.135",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#C2FFF9",
                                                    d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M135.6949-69.0003l-.625 26.692 16.447-21.032m-27.3679 1.6701l31.645 11.319",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#7687B2",
                                                    d: "M45.3502-64.8382c-.602-2.453-3.078-3.954-5.532-3.353l-102.171 25.056c-2.454.601-3.954 3.078-3.353 5.531l3.489 14.228 111.056-27.234-3.489-14.228z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532zM-62.2172-23.3763l111.057-27.234m-95.9164 3.7287l-8.367 21.844m30.0096-27.1517l-8.366 21.844m30.0096-27.1516l-8.366 21.844M17.8522-62.804L9.4862-40.96m30.0095-27.1516l-8.366 21.844",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FF7B78",
                                                    d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#5871B7",
                                                    d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123zM64.1588 1.2805h-43.147m21.5738-8.1114h-21.574m91.3894 0H49.816m33.9815-8.1118h-62.786",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#5865f2",
                                                    d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-26.3637 22.2653h48.67M6.0826 30.3767h68.309m-100.7553 0h22.799m53.1942 8.1118h14.942m-24.3346 0h4.534m-71.1346 0h54.093m-54.093 8.1113h63.186",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#98AFED",
                                                    d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-60.6225 77.6657h99.433m-23.4398 8.1114h7.949m-19.6892 0h-64.253m0 8.1118h47.398m-47.398 8.1113h116.122",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#7687B2",
                                                    d: "M42.4547-33.7181v-14.743c0-2.527-2.048-4.574-4.574-4.574h-105.198c-2.527 0-4.575 2.047-4.575 4.574v14.743h114.347z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574zM-71.892-33.8123H42.455m-94.0442-19.2231l-13.328 19.223m35.6121-19.223l-13.328 19.223m35.6132-19.223l-13.328 19.223m35.6122-19.223l-13.328 19.223m35.6121-19.223l-13.328 19.223",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FF7B78",
                                                    d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-26.6293-25.6136v33.584l31.445-16.792",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-26.6293-25.6136v33.584l31.445-16.792zM184.3375 8.3772v6.43m3.2149-3.2152h-6.43m-292.9079 79.082v6.43m3.2148-3.2151h-6.43M195.901-43.6692l-1.516 1.515m-6.0611 6.0621l-1.516 1.516m9.0931-.0004l-1.516-1.516m-6.0611-6.0616l-1.516-1.515M-88.642 168.9265l-1.516 1.516m-6.0621 6.0616l-1.516 1.515m9.0941.0001l-1.516-1.515m-6.0621-6.0621l-1.516-1.516M174.3463-8.8211c0 1.775-1.439 3.215-3.215 3.215-1.776 0-3.215-1.44-3.215-3.215s1.439-3.215 3.215-3.215c1.776 0 3.215 1.44 3.215 3.215z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)(e2.A.g, {
                                    className: e3.KS,
                                    style: e0(this.state),
                                    children: [
                                        (0, n.jsx)("path", {
                                            fill: "#C9D2F0",
                                            d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            fill: "#9F7373",
                                            d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            fill: "#F3F9FF",
                                            d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0m63.895-63.895c-19.667-19.667-51.554-19.667-71.221 0s-19.667 51.554 0 71.221 51.554 19.667 71.221 0 19.667-51.554 0-71.221",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M196.0069 155.9708c-19.667 19.667-51.554 19.667-71.221 0s-19.667-51.554 0-71.221 51.554-19.667 71.221 0 19.667 51.554 0 71.221z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", { d: "M84 66h130v130H84z" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function e6() {
    let e = (0, a.bG)([V.Ay], () => V.Ay.useReducedMotion);
    return (0, n.jsx)(e5, { reducedMotion: e });
}
var e8 = s(876689),
    e9 = s(6993),
    e4 = s(36537);
class e7 extends l.Component {
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
            let i = (0, er.bS)(e.props.searchContext);
            0 === s
                ? (0, eR.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: ek.A.getSearchInputText(e.props.searchContext),
                      searchQuery: ei.A.getSearchResultsQuery(i),
                  })
                : (0, eR.H9)({
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
                      searchQueryString: ek.A.getSearchInputText(e.props.searchContext),
                      searchQuery: ei.A.getSearchResultsQuery(i),
                  });
        };
    })();
    render() {
        return null;
    }
}
function te(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: e4.Oq, children: (0, n.jsx)("div", { className: e4.de, children: t }) });
}
function tt(e) {
    let {
            suppressEmptyState: t,
            smartEmptyState: s,
            messages: l,
            blockCount: r,
            ignoreCount: a,
            search: o,
            searchContext: c,
            renderEmbeds: d,
            onClick: u,
            onScrollTo: h,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: x,
            searchResultsQuery: g,
        } = e,
        { totalResults: p, isSearching: f, isIndexing: j, hasError: k } = o;
    if (k)
        return 0 === o.offset && t
            ? null
            : 0 === o.offset && null != s
              ? s
              : (0, n.jsxs)(te, {
                    children: [
                        (0, n.jsx)("div", { className: e4.M6 }),
                        (0, n.jsx)("div", { className: i()(e4.pZ, e4.gJ), children: C.intl.string(C.t.uvDZBZ) }),
                    ],
                });
    if (j) {
        let e = (0, er.Y7)(c);
        return (0, n.jsxs)(te, {
            children: [(0, n.jsx)(e6, {}), (0, n.jsx)("div", { className: (e4.pZ, e4.Jy), children: e })],
        });
    }
    if (f) return null;
    if (p > 0)
        return (0, n.jsx)(e9.A, {
            search: o,
            messages: l,
            onClick: u,
            blockCount: r,
            ignoreCount: a,
            renderEmbeds: d,
            scrollTo: h,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: x,
            searchResultsQuery: g,
        });
    if (t) return null;
    if (null != s) return s;
    let { showNoResultsAlt: S } = o,
        A = S ? C.intl.string(C.t["VrK/2R"]) : C.intl.string(C.t.V6nAfF);
    return (0, n.jsxs)(te, {
        children: [
            (0, n.jsx)("div", { className: i()(e4.$l, { [e4.CC]: S }) }),
            (0, n.jsx)("div", { className: i()(e4.pZ, e4.wV, { [e4.CC]: S }), children: A }),
        ],
    });
}
let ts = [],
    tn = l.memo(function (e) {
        let t,
            s,
            r,
            {
                smartSearchKeywordState: i,
                searchContext: g,
                search: p,
                renderEmbeds: f,
                searchRequestAnalyticsId: j,
                messages: k,
                blockCount: S,
                ignoreCount: A,
                onSearchModeChange: E,
                onPageChange: M,
                searchMode: I,
                onBlockedResultsClick: b,
                searchResultsQuery: y,
                searchResultsQueryString: v,
                selectedChannelId: R,
            } = e,
            L = i.isInitialFetchComplete && !i.isSearching && !i.isIndexing,
            F = i.totalResults > 0 && !(i.hasError && 0 === i.offset),
            [T, w] = l.useState(null),
            D = T?.submissionId;
        l.useLayoutEffect(() => {
            L && D !== i.searchSubmissionId && w({ submissionId: i.searchSubmissionId, hasKeywordResults: F });
        }, [L, D, i.searchSubmissionId, F]);
        let H = D === i.searchSubmissionId ? T : null,
            W = L || null != H,
            z = !W && !i.isIndexing,
            O = L && 0 === i.offset ? F : (H?.hasKeywordResults ?? F),
            q = 0 === p.offset,
            {
                query: B,
                status: G,
                result: Q,
                citationsCount: V,
            } = ((t = l.useMemo(() => (null == v || "" === v.trim() ? null : (0, eM.W)(g, v)), [g, v])),
            (s = (0, eE.fu)(t?.guildId, "fetch_answer")),
            (r = (0, a.bG)(
                [_.A, ed.A, eu.A, en.A],
                () => {
                    let e = s && null != t ? _.A.getAnswer(t.guildId, t.requestKey) : null;
                    if (null == e || null == t) return { status: h.o.NOT_QUALIFIED, result: null, citationsCount: 0 };
                    let n = (0, eh.Vw)(t.searchContext, t.searchQueryString, O, _.A),
                        l = e.citations.filter((e) => ex(e, [ed.A, eu.A, en.A])).slice(0, n),
                        r = e.status === h.o.LOADED && 0 === l.length ? h.o.EMPTY : e.status;
                    return {
                        status: r,
                        result: { ...e, status: r, citations: l },
                        citationsCount: r === h.o.LOADED ? l.length : 0,
                    };
                },
                [s, t, O],
                a.My,
            )),
            { query: t, ...r }),
            U = G === h.o.LOADING || G === h.o.LOADED,
            Z = G === h.o.EMPTY || G === h.o.ERROR,
            K = Z ? B : null,
            { suggestedSearches: Y } = (0, x.H)(K, { source: O ? "smart_search_row" : "error_screen" });
        l.useEffect(() => {
            null == K || i.isSearching || (0, m.E)(K, N.A);
        }, [K, i.isSearching]);
        let X =
                q && null != B && Z && Y.length > 0
                    ? (0, n.jsx)(eA, {
                          query: B,
                          suggestions: Y,
                          isEmptyScreen: !O && !i.isIndexing,
                          hasError: i.hasError,
                      })
                    : null,
            $ =
                U && null != B && null != Q
                    ? (0, n.jsx)(
                          P,
                          {
                              isVisible: q,
                              searchSubmissionId: i.searchSubmissionId,
                              query: B,
                              result: Q,
                              isKeywordLoading: z,
                              isKeywordSearchSettled: W,
                              hasKeywordResults: O,
                              renderCitations: (e, t) => (0, n.jsx)(eg, { query: e, result: t }),
                          },
                          B.requestKey,
                      )
                    : !z && (O || i.isIndexing)
                      ? X
                      : null,
            J = l.useRef(null),
            ee = l.useCallback(() => {
                ek.A.cleanUpSearchState(g);
            }, [g]);
        l.useEffect(
            () => (
                eI._.subscribe(em.jej.SEARCH_RESULTS_CLOSE, ee),
                () => {
                    eI._.unsubscribe(em.jej.SEARCH_RESULTS_CLOSE, ee);
                }
            ),
            [ee],
        );
        let et = l.useRef(p.showBlockedResults);
        l.useEffect(() => {
            if (et.current !== p.showBlockedResults) {
                et.current = p.showBlockedResults;
                let e = J.current;
                null != e && e.scrollToBottom();
            }
        }, [p.showBlockedResults]);
        let es = l.useCallback((e, t, s) => {
                let n = J.current;
                if (null == n) return;
                let l = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: l, animate: t, callback: s });
            }, []),
            el = null != v ? `${I}:${v}` : void 0,
            {
                paginationTotalCount: ea,
                paginationMaxVisiblePage: eo,
                isMaxVisiblePageWarningVisible: ec,
                renderPageWrapper: ep,
            } = (0, ev.o)({
                totalResults: p.totalResults,
                isSearching: p.isSearching,
                offset: p.offset,
                searchResultsPaginationKey: el,
            }),
            ef = l.useCallback(
                (e) => {
                    e === I ||
                        p.isSearching ||
                        ((0, eR.L6)({ searchContext: g, searchRequestAnalyticsId: j, mode: e }), E(e));
                },
                [E, p.isSearching, g, I, j],
            ),
            ej = l.useCallback(
                (e, t) => {
                    let s = ed.A.getChannel(e.channel_id),
                        n = null != s ? s.getGuildId() : null,
                        l = (0, er.bS)(g),
                        { offset: r, totalResults: i } = p;
                    (0, eR.i4)({
                        searchContext: g,
                        searchRequestAnalyticsId: j,
                        guildId: n,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != k ? k.length : null,
                        totalResults: i,
                        limit: 25,
                        page: Math.floor(r / 25) + 1,
                        offset: r,
                        index: t,
                        searchQueryString: ek.A.getSearchInputText(g),
                        searchQuery: ei.A.getSearchResultsQuery(l),
                    });
                },
                [p, g, j, k],
            ),
            eS = l.useCallback(
                (e) => {
                    ((0, eR.kq)({ searchContext: g, searchRequestAnalyticsId: j, newPageIndex: e }), M(e));
                },
                [M, g, j],
            ),
            ey = (0, a.yK)([ei.A], () => {
                if (0 !== p.offset) return ts;
                let e = k.length;
                if (e < 10) return ts;
                let t = 0;
                if (
                    (k.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && t++;
                    }),
                    t / e < 0.75)
                )
                    return ts;
                let s = (0, er.bS)(g),
                    n = ei.A.getSearchResultsQueryString(s);
                return (0, er._o)(n ?? "").some((e) => e.type === em.LWr.FILTER_AUTHOR_TYPE)
                    ? ts
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [eC, eL] = (0, u.kn)(ey),
            eF = eC === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            eN = l.useCallback(() => {
                if (p.isSearching) return;
                let e = `${eb.Ay[em.LWr.FILTER_AUTHOR_TYPE].key} ${C.intl.string(C.t.tPZo4p)} `;
                ek.A.appendToSearchInputText(g, e);
            }, [g, p.isSearching]);
        return (0, n.jsxs)("section", {
            className: e4.zt,
            "aria-label": C.intl.string(C.t["zkoeq/"]),
            children: [
                (0, n.jsx)(eQ, {
                    searchContext: g,
                    searchMode: I,
                    onSearchModeChange: ef,
                    totalResults: p.totalResults + V,
                    isSearching: p.isSearching,
                    isIndexing: p.isHistoricalIndexing,
                    documentsIndexed: p.documentsIndexed,
                    selectedChannelId: R,
                }),
                (0, n.jsxs)(c.Ch, {
                    ref: J,
                    className: e4.XG,
                    children: [
                        $,
                        ec &&
                            !p.isSearching &&
                            (0, n.jsx)("div", {
                                className: e4.VC,
                                children: (0, n.jsx)(d.w, {
                                    type: "warning",
                                    message: C.intl.formatToPlainString(C.t["E+2azY"], { maxPages: eo }),
                                    role: "status",
                                }),
                            }),
                        eF &&
                            (0, n.jsx)("div", {
                                className: e4.QR,
                                children: (0, n.jsx)(d.w, {
                                    type: "info",
                                    message: C.intl.format(C.t["gQeg/R"], { handleClick: eN }),
                                    role: "none",
                                }),
                            }),
                        (0, n.jsx)(tt, {
                            suppressEmptyState: q && !O && U,
                            smartEmptyState: O || p.isSearching ? null : X,
                            messages: k,
                            blockCount: S,
                            ignoreCount: A,
                            search: p,
                            searchContext: g,
                            renderEmbeds: f,
                            onClick: ej,
                            onScrollTo: es,
                            onBlockedResultsClick: b,
                            searchRequestAnalyticsId: j,
                            searchResultsQuery: y,
                        }),
                    ],
                }),
                ea > 25 &&
                    (0, n.jsx)(e8.A, {
                        className: e4.cu,
                        onPageChange: eS,
                        offset: p.offset,
                        totalCount: ea,
                        pageSize: 25,
                        renderPageWrapper: ep,
                    }),
            ],
        });
    });
function tl(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        r = (0, er.bS)(t),
        i = (0, a.cf)([el.A, ei.A], () => ({
            searchSubmissionId: ei.A.getSearchSubmissionId(r),
            isInitialFetchComplete: el.A.getIsInitialFetchComplete(r) ?? !1,
            isSearching: el.A.getIsFetching(r) ?? !1,
            isIndexing: el.A.getIsIndexing(r) ?? !1,
            isHistoricalIndexing: el.A.getIsHistoricalIndexing(r) ?? !1,
            documentsIndexed: el.A.getDocumentsIndexed(r),
            offset: ei.A.getSearchResultsOffset(r) ?? 0,
            totalResults: el.A.getTotalCount(r) ?? 0,
            hasError: null != el.A.getError(r),
            showBlockedResults: ei.A.shouldShowBlockedResults(r),
            showNoResultsAlt: ei.A.shouldShowNoResultsAlt(r),
        })),
        o = (0, a.bG)([el.A], () => el.A.getAnalyticsId(r)),
        {
            renderedMessages: c,
            ignoreCount: d,
            blockCount: u,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, Y.I2)({ location: "useRenderedSearchResults" }).enabled,
                n = (0, a.bG)(
                    [ei.A, el.A, K.A],
                    () => {
                        let e = (0, er.bS)(t),
                            n = ei.A.getSearchResultsQuery(e),
                            l = el.A.getMessages(e);
                        return null == n || null == l || 0 === l.length ? eo : ea(l, (0, er.dX)(n) ?? "", s, [K.A]);
                    },
                    [t, s],
                    a.My,
                ),
                { blockCount: l, ignoreCount: r } = (0, a.cf)([en.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        n.forEach((s) => {
                            let n = en.A.isBlockedForMessage(s),
                                l = en.A.isIgnoredForMessage(s);
                            n ? e++ : l && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: n, blockCount: l, ignoreCount: r };
        })({ searchContext: t }),
        h = (0, a.bG)([ei.A], () => ei.A.getSearchMode(r) ?? em.BBH.NEWEST),
        m = l.useCallback(
            (e) => {
                if (i.isSearching) return;
                ey.A.updateSearchMode(t, e);
                let s = ek.A.getSearchInputText(t);
                null != s && ek.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [i.isSearching, t],
        ),
        x = l.useCallback(
            (e) => {
                let s = ek.A.getSearchInputText(t);
                null != s && ek.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 25 * e });
            },
            [t],
        ),
        g = (0, a.bG)([ei.A], () => {
            let e = (0, er.bS)(t);
            return ei.A.getSearchResultsQuery(e);
        }),
        p = (0, a.bG)([ei.A], () => {
            let e = (0, er.bS)(t);
            return ei.A.getSearchResultsQueryString(e);
        }),
        f = l.useCallback((e) => ey.A.setShowBlockedResults(t, e), [t]),
        j = l.useDeferredValue(c),
        k = l.useDeferredValue(i),
        S = l.useDeferredValue(o);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tn, {
                smartSearchKeywordState: i,
                searchContext: t,
                search: k,
                searchRequestAnalyticsId: S,
                messages: j,
                ignoreCount: d,
                blockCount: u,
                renderEmbeds: ec.rs.useSetting(),
                onPageChange: x,
                onSearchModeChange: m,
                searchMode: h,
                onBlockedResultsClick: f,
                searchResultsQuery: g,
                searchResultsQueryString: p,
                selectedChannelId: s,
            }),
            (0, n.jsx)(e7, {
                searchContext: t,
                searchRequestAnalyticsId: S,
                messages: j,
                searchOffset: k.offset,
                searchLimit: 25,
                searchHasError: k.hasError,
                searchTotalResults: k.totalResults,
                searchIsIndexing: k.isHistoricalIndexing,
                isSearching: k.isSearching,
            }),
        ],
    });
}
function tr(e) {
    let { guildId: t, channelId: s } = e,
        l = (0, eC.J)({ guildId: t, channelId: s });
    return null == l ? null : (0, n.jsx)(tl, { searchContext: l, selectedChannelId: s });
}
