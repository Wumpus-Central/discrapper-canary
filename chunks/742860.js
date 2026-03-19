n.d(t, { A: () => ei }), n(801541);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(497766),
    o = n(889137),
    d = n(311907),
    c = n(827734),
    u = n(582754),
    m = n(397927),
    h = n(736653),
    x = n(775602),
    p = n(607470),
    g = n(409626),
    _ = n(829219),
    f = n(859703),
    v = n(341915),
    b = n(405670),
    j = n(12251),
    A = n(33621),
    C = n(714510),
    y = n(890687),
    T = n(579473),
    S = n(590202),
    E = n(651892),
    N = n(901406),
    I = n(792620),
    k = n(814793),
    R = n(241124),
    O = n(212614),
    w = n(79545),
    D = n(646764),
    M = n(398025),
    P = n(545986),
    U = n(139384),
    L = n(568329),
    B = n(207869),
    G = n(158265),
    F = n(933378),
    V = n(783569),
    W = n(963713),
    H = n(883035),
    K = n(277928),
    z = n(783602),
    $ = n(905586),
    q = n(654487),
    Q = n(272111),
    Y = n(985018),
    J = n(569752);
let X = i.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: s, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = i.useContext(W.T),
        u = (0, d.bG)([x.A], () => x.A.useReducedMotion),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            null != m.current && (c && (!u || n) ? ((m.current.currentTime = 0), m.current.play()) : m.current.pause());
        }, [m, c, n, u]),
        (0, U.A)(m, q.rE.QUESTS_BAR),
        (0, a.jsx)(p.A, {
            ref: (e) => {
                (m.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: o,
            poster: s,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r,
            controls: !1,
            children: (0, a.jsx)("source", { src: l.url, type: l.mimetype ?? void 0 }),
        })
    );
});
function Z(e) {
    let { onClick: t } = e,
        { quest: n } = i.useContext(W.T),
        l = (0, d.bG)([x.A], () => x.A.useReducedMotion),
        [r, o] = i.useState(!1),
        u = (0, T.tW)(n, T.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        h = (0, T.tW)(n, T.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, b.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && p === b.K2.COMPLETED,
        _ = !g && (!l || r);
    return (0, a.jsxs)(m.DUT, {
        className: J.QO,
        onClick: t,
        onMouseEnter: () => {
            l && !r && o(!0);
        },
        onMouseLeave: () => {
            l && r && o(!1);
        },
        children: [
            null != h &&
                (0, a.jsx)(R.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, a.jsx)("img", { ref: e, alt: "", src: h.url, className: J.Ue }),
                }),
            null != u
                ? (0, a.jsx)(R.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, a.jsx)(X, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: u,
                              poster: h?.url,
                              className: s()(J.NM, { [J.Gc]: _ }),
                          }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: J.LT,
                children: g
                    ? (0, a.jsx)(m.mqY, { color: c.A.colors.WHITE, className: J.t })
                    : (0, a.jsx)(m.udU, { color: c.A.colors.WHITE, className: J.t }),
            }),
        ],
    });
}
function ee(e) {
    let { quest: t } = e;
    return (0, a.jsx)(D.A, {
        className: s()(J.Qq, J.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.uF.QUEST_BAR_V2,
        sourceQuestContent: v.uF.QUEST_BAR_V2,
    });
}
function et(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: x, taskDetails: p } = i.useContext(W.T),
        { expansionSpring: _ } = i.useContext(L.PW),
        b = i.useRef(null),
        N = (0, d.bG)([f.A], () => f.A.isEnrolling(o.id), [o]),
        I = i.useMemo(() => (0, T.tW)(o, T.fY.QUEST_BAR_HERO), [o]),
        k = (0, C.NA)({ quest: o }),
        D = i.useMemo(() => (0, T.tW)(o, T.fY.HERO_IMAGE), [o]),
        U = i.useMemo(() => (null == D ? {} : { backgroundImage: `url(${D.url})` }), [D]),
        B = (0, h.Ay)(),
        G = (0, u.Mw)(B),
        F = A.t.useConfig({ location: q.rE.QUESTS_BAR }),
        V = (0, C.mU)({
            quest: o,
            location: q.rE.QUESTS_BAR,
            questContent: v.uF.QUEST_BAR_V2,
            taskDetails: p,
            sourceQuestContent: v.uF.QUEST_BAR_V2,
            popoutTargetElementRef: b,
            onGameSheetOpened: c,
            onGameSheetClosed: x,
            gameProfileSource: g.Ob.QuestBar,
        }),
        H = (0, w.Pd)(o),
        { primaryCtaButtonVariant: K } = (0, j.Op)(),
        z = j.s5.useConfig({ location: q.rE.QUESTS_CARD }),
        $ =
            z.enabled &&
            (z.variant === j.tL.LEARN_MORE_CTA_ONLY || z.variant === j.tL.COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON),
        Q = (0, y.do)({
            quest: o,
            content: v.uF.QUEST_BAR_V2,
            ctaContent:
                z.variant === j.tL.LEARN_MORE_CTA_ONLY
                    ? S.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_TWO_OPEN_GAME_LINK
                    : S.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_THREE_OPEN_GAME_LINK,
            sourceQuestContent: v.uF.QUEST_BAR_V2,
        }),
        Z = (0, E.wr)(o);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: b,
                children: (0, a.jsxs)("div", {
                    className: J.do,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: J.zH,
                            children: [
                                (0, a.jsx)(ee, { quest: o }),
                                (0, a.jsx)(m.Heading, {
                                    className: J.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: Y.intl.format(Y.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, { className: J.h_, variant: "text-xs/normal", children: V }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: J.lO,
                            children: (0, a.jsxs)(m.ButtonGroup, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    $ &&
                                        (0, a.jsx)(m.Button, { size: "sm", variant: "secondary", text: Z, onClick: Q }),
                                    F.enabled && H === w.UA.UNENROLLED && F.enabledQuestStates.has(w.UA.UNENROLLED)
                                        ? (0, a.jsx)(O.A, {
                                              quest: o,
                                              surface: w.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              variant: K,
                                              analyticsCtxQuestContent: v.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: v.uF.QUEST_BAR_V2,
                                          })
                                        : (0, a.jsx)(m.Button, {
                                              variant: K,
                                              onClick: t ? l : void 0,
                                              loading: N,
                                              text: k,
                                              size: "sm",
                                              icon: (0, P.Oz)(o),
                                              fullWidth: !0,
                                          }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            null != D &&
                (0, a.jsx)(r.animated.div, {
                    className: J.AK,
                    style: { opacity: (0, M.a)(_.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: s()(J.LC, J.Ge), style: U }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: J.IC,
                style: {
                    backdropFilter: (0, M.Q)(_.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, M.Q)(_.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    I.isAnimated
                        ? (0, a.jsx)(R.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(X, { ref: e, autoPlay: !0, asset: I, className: J.LO }),
                          })
                        : (0, a.jsx)(R.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: J.LO, src: I.url }),
                          }),
                    (0, a.jsx)("div", { className: s()(J.tV, { [J.tt]: G }) }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: d } = i.useContext(W.T),
        { expansionSpring: c } = i.useContext(L.PW),
        u = l.userStatus?.completedAt != null,
        m = d.percentComplete > 0,
        h = (0, y.Vn)(l),
        [x, p, g] = (0, y.Qo)(l, d),
        _ = i.useRef(null),
        f = i.useRef(null),
        b = (0, y.RR)({ quest: l }),
        j = (0, I.vv)(l),
        A = (0, y.I3)(l),
        C = i.useCallback(() => {
            (0, P.d5)({
                quest: l,
                questContent: v.uF.QUEST_BAR_V2,
                sourceQuestContent: v.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: S.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [l]),
        T = null != A ? A.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: s()(J.tv, J.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${Q.V1}, ${Q.us})`,
                    opacity: (0, M.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, a.jsxs)("div", {
                className: J.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (f.current = e);
                },
                children: [
                    (0, a.jsx)(z.A, {}),
                    (0, a.jsx)("div", { className: J.yF }),
                    (0, a.jsx)(G.A, { overlayRef: t, progressBarRef: _, isHovered: !1 }),
                    (0, a.jsx)(K.A, {
                        contentLocation: "expanded",
                        progressBarRef: _,
                        isExpanded: !0,
                        percentComplete: T,
                        activeScreen: x,
                        popoutTargetElementRef: f,
                    }),
                    (0, a.jsx)(V.T, {
                        children:
                            !u &&
                            !(0, N.W1)(l) &&
                            (0, o.YW)(x)
                                .with(v.X0.SELECT, () =>
                                    (0, a.jsx)($.A, {
                                        onConsole: () => g(q.fO.CONSOLE),
                                        onDesktop: () => g(q.fO.DESKTOP),
                                    }),
                                )
                                .with(v.X0.DESKTOP, () => (0, a.jsx)(H.A, { quest: l }))
                                .with(v.X0.CONSOLE, () => (0, a.jsx)(F.A, { quest: l, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(V.T, {
                        children: [
                            j && (0, a.jsx)(Z, { onClick: C }),
                            (0, a.jsx)(B.f, {
                                awaitingConsoleConnections: b,
                                hasMadeProgress: m,
                                isProgressing: h,
                                activeScreen: x,
                                showBackButton: x !== v.X0.SELECT && p.length > 1 && !m && !h,
                                onBack: () => g(null),
                                sourceQuestContent: v.uF.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: s()(J.tv, J.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${Q.V1}, ${Q.us})` },
            }),
        ],
    });
}
async function ea(e, t, n, a) {
    (0, I.vv)(e)
        ? await (0, P.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, k.vA)(e)
          ? await (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let ei = i.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: d, isExpanded: c, isExpansionAnimationComplete: u, quest: m } = i.useContext(W.T),
        { expansionSpring: h } = i.useContext(L.PW),
        { launchInGameActivity: x } = (0, y.zW)(m),
        p = (0, k.vA)(m),
        g = i.useCallback(async () => {
            let e = p ? S.Cy.START_QUEST : S.Cy.ACCEPT_QUEST;
            await ea(m, v.uF.QUEST_BAR_V2, e, v.uF.QUEST_BAR_V2), p && x();
        }, [m, x, p]),
        _ = m.userStatus?.enrolledAt != null,
        f = c && u;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !f,
        className: s()(l, J.Rh, { [J.Yd]: f, [J.iH]: _ }),
        style: {
            transform: (0, r.to)(
                [h.to({ range: [0, 1], output: [0, -100] }), h.to({ range: [0, 1], output: [0, d] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, a.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: _
                    ? (0, a.jsx)(en, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(et, { isInteractable: f, containerRef: t, onAcceptQuest: g }),
            }),
        ],
    });
});
