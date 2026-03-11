n.d(t, { A: () => ei }), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(490249),
    o = n(889137),
    d = n(311907),
    c = n(827734),
    u = n(582754),
    m = n(397927),
    h = n(736653),
    p = n(775602),
    x = n(607470),
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
    J = n(993710);
let X = i.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: l, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = i.useContext(W.T),
        u = (0, d.bG)([p.A], () => p.A.useReducedMotion),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            null != m.current && (c && (!u || n) ? ((m.current.currentTime = 0), m.current.play()) : m.current.pause());
        }, [m, c, n, u]),
        (0, U.A)(m, q.rE.QUESTS_BAR),
        (0, a.jsx)(x.A, {
            ref: (e) => {
                (m.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: o,
            poster: l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r,
            controls: !1,
            children: (0, a.jsx)("source", { src: s.url, type: s.mimetype ?? void 0 }),
        })
    );
});
function Z(e) {
    let { onClick: t } = e,
        { quest: n } = i.useContext(W.T),
        s = (0, d.bG)([p.A], () => p.A.useReducedMotion),
        [r, o] = i.useState(!1),
        u = (0, T.tW)(n, T.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        h = (0, T.tW)(n, T.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, b.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && x === b.K2.COMPLETED,
        _ = !g && (!s || r);
    return (0, a.jsxs)(m.DUT, {
        className: J.QO,
        onClick: t,
        onMouseEnter: () => {
            s && !r && o(!0);
        },
        onMouseLeave: () => {
            s && r && o(!1);
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
                              className: l()(J.NM, { [J.Gc]: _ }),
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
        className: l()(J.Qq, J.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.uF.QUEST_BAR_V2,
        sourceQuestContent: v.uF.QUEST_BAR_V2,
    });
}
function et(e) {
    let { preferImageHeroAsset: t, isInteractable: n, containerRef: s, onAcceptQuest: o } = e,
        { quest: c, onGameSheetOpen: p, onGameSheetClose: x, taskDetails: _ } = i.useContext(W.T),
        { expansionSpring: b } = i.useContext(L.PW),
        N = i.useRef(null),
        I = (0, d.bG)([f.A], () => f.A.isEnrolling(c.id), [c]),
        k = i.useMemo(() => (0, T.tW)(c, t ? T.fY.QUEST_BAR_HERO_IMAGE : T.fY.QUEST_BAR_HERO), [c, t]),
        D = (0, C.NA)({ quest: c }),
        U = i.useMemo(() => (0, T.tW)(c, T.fY.HERO_IMAGE), [c]),
        B = i.useMemo(() => (null == U ? {} : { backgroundImage: `url(${U.url})` }), [U]),
        G = (0, h.Ay)(),
        F = (0, u.Mw)(G),
        V = A.t.useConfig({ location: q.rE.QUESTS_BAR }),
        H = (0, C.mU)({
            quest: c,
            location: q.rE.QUESTS_BAR,
            questContent: v.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: v.uF.QUEST_BAR_V2,
            popoutTargetElementRef: N,
            onGameSheetOpened: p,
            onGameSheetClosed: x,
            gameProfileSource: g.Ob.QuestBar,
        }),
        K = (0, w.Pd)(c),
        { primaryCtaButtonVariant: z } = (0, j.Op)(),
        $ = j.s5.useConfig({ location: q.rE.QUESTS_CARD }),
        Q =
            $.enabled &&
            ($.variant === j.tL.LEARN_MORE_CTA_ONLY || $.variant === j.tL.COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON),
        Z = (0, y.do)({
            quest: c,
            content: v.uF.QUEST_BAR_V2,
            ctaContent:
                $.variant === j.tL.LEARN_MORE_CTA_ONLY
                    ? S.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_TWO_OPEN_GAME_LINK
                    : S.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_THREE_OPEN_GAME_LINK,
            sourceQuestContent: v.uF.QUEST_BAR_V2,
        }),
        et = (0, E.wr)(c);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: N,
                children: (0, a.jsxs)("div", {
                    className: J.do,
                    ref: s,
                    children: [
                        (0, a.jsxs)("div", {
                            className: J.zH,
                            children: [
                                (0, a.jsx)(ee, { quest: c }),
                                (0, a.jsx)(m.Heading, {
                                    className: J.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: Y.intl.format(Y.t.EQa7os, { questName: c.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, { className: J.h_, variant: "text-xs/normal", children: H }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: J.lO,
                            children: (0, a.jsxs)(m.ButtonGroup, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    Q &&
                                        (0, a.jsx)(m.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: et,
                                            onClick: Z,
                                        }),
                                    V.enabled && K === w.UA.UNENROLLED && V.enabledQuestStates.has(w.UA.UNENROLLED)
                                        ? (0, a.jsx)(O.A, {
                                              quest: c,
                                              surface: w.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              variant: z,
                                              analyticsCtxQuestContent: v.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: v.uF.QUEST_BAR_V2,
                                          })
                                        : (0, a.jsx)(m.Button, {
                                              variant: z,
                                              onClick: n ? o : void 0,
                                              loading: I,
                                              text: D,
                                              size: "sm",
                                              icon: (0, P.Oz)(c),
                                              fullWidth: !0,
                                          }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            null != U &&
                (0, a.jsx)(r.animated.div, {
                    className: J.AK,
                    style: { opacity: (0, M.a)(b.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(J.LC, J.Ge), style: B }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: J.IC,
                style: {
                    backdropFilter: (0, M.Q)(b.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, M.Q)(b.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    k.isAnimated
                        ? (0, a.jsx)(R.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(X, { ref: e, autoPlay: !0, asset: k, className: J.LO }),
                          })
                        : (0, a.jsx)(R.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: J.LO, src: k.url }),
                          }),
                    (0, a.jsx)("div", { className: l()(J.tV, { [J.tt]: F }) }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: d } = i.useContext(W.T),
        { expansionSpring: c } = i.useContext(L.PW),
        u = s.userStatus?.completedAt != null,
        m = d.percentComplete > 0,
        h = (0, y.Vn)(s),
        [p, x, g] = (0, y.Qo)(s, d),
        _ = i.useRef(null),
        f = i.useRef(null),
        b = (0, y.RR)({ quest: s }),
        j = (0, I.vv)(s),
        A = (0, y.I3)(s),
        C = i.useCallback(() => {
            (0, P.d5)({
                quest: s,
                questContent: v.uF.QUEST_BAR_V2,
                sourceQuestContent: v.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: S.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [s]),
        T = null != A ? A.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: l()(J.tv, J.ag),
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
                        activeScreen: p,
                        popoutTargetElementRef: f,
                    }),
                    (0, a.jsx)(V.T, {
                        children:
                            !u &&
                            !(0, N.W1)(s) &&
                            (0, o.YW)(p)
                                .with(v.X0.SELECT, () =>
                                    (0, a.jsx)($.A, {
                                        onConsole: () => g(q.fO.CONSOLE),
                                        onDesktop: () => g(q.fO.DESKTOP),
                                    }),
                                )
                                .with(v.X0.DESKTOP, () => (0, a.jsx)(H.A, { quest: s }))
                                .with(v.X0.CONSOLE, () => (0, a.jsx)(F.A, { quest: s, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(V.T, {
                        children: [
                            j && (0, a.jsx)(Z, { onClick: C }),
                            (0, a.jsx)(B.f, {
                                awaitingConsoleConnections: b,
                                hasMadeProgress: m,
                                isProgressing: h,
                                activeScreen: p,
                                showBackButton: p !== v.X0.SELECT && x.length > 1 && !m && !h,
                                onBack: () => g(null),
                                sourceQuestContent: v.uF.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(J.tv, J.Sx),
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
    let { children: n, className: s, overlayRef: o, isUnfurl: d } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: m, quest: h } = i.useContext(W.T),
        { expansionSpring: p } = i.useContext(L.PW),
        { launchInGameActivity: x } = (0, y.zW)(h),
        g = (0, k.vA)(h),
        _ = i.useCallback(async () => {
            let e = g ? S.Cy.START_QUEST : S.Cy.ACCEPT_QUEST;
            await ea(h, v.uF.QUEST_BAR_V2, e, v.uF.QUEST_BAR_V2), g && x();
        }, [h, x, g]),
        f = h.userStatus?.enrolledAt != null,
        b = u && m;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !b,
        className: l()(s, J.Rh, { [J.Yd]: b, [J.iH]: f }),
        style: {
            transform: (0, r.to)(
                [p.to({ range: [0, 1], output: [0, -100] }), p.to({ range: [0, 1], output: [0, c] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, a.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: f
                    ? (0, a.jsx)(en, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(et, { preferImageHeroAsset: d, isInteractable: b, containerRef: t, onAcceptQuest: _ }),
            }),
        ],
    });
});
