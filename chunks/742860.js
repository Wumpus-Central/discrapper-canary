n.d(t, { A: () => ei }), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(475539),
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
    b = n(341915),
    v = n(405670),
    j = n(245853),
    C = n(440007),
    A = n(33621),
    T = n(714510),
    S = n(890687),
    y = n(579473),
    E = n(590202),
    N = n(651892),
    I = n(901406),
    k = n(792620),
    R = n(814793),
    O = n(241124),
    w = n(212614),
    D = n(79545),
    M = n(646764),
    P = n(398025),
    L = n(545986),
    U = n(568329),
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
        u = (0, d.bG)([x.A], () => x.A.useReducedMotion),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            null != m.current && (c && (!u || n) ? ((m.current.currentTime = 0), m.current.play()) : m.current.pause());
        }, [m, c, n, u]),
        (0, a.jsx)(p.A, {
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
        s = (0, d.bG)([x.A], () => x.A.useReducedMotion),
        [r, o] = i.useState(!1),
        u = (0, y.tW)(n, y.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        h = (0, y.tW)(n, y.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, v.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && p === v.K2.COMPLETED,
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
                (0, a.jsx)(O.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, a.jsx)("img", { ref: e, alt: "", src: h.url, className: J.Ue }),
                }),
            null != u
                ? (0, a.jsx)(O.Sn, {
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
    return (0, a.jsx)(M.A, {
        className: l()(J.Qq, J.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: b.uF.QUEST_BAR_V2,
        sourceQuestContent: b.uF.QUEST_BAR_V2,
    });
}
function et(e) {
    let { preferImageHeroAsset: t, isInteractable: n, containerRef: s, onAcceptQuest: o } = e,
        { quest: c, onGameSheetOpen: x, onGameSheetClose: p, taskDetails: _ } = i.useContext(W.T),
        { expansionSpring: v } = i.useContext(U.PW),
        I = i.useRef(null),
        k = (0, d.bG)([f.A], () => f.A.isEnrolling(c.id), [c]),
        R = i.useMemo(() => (0, y.tW)(c, t ? y.fY.QUEST_BAR_HERO_IMAGE : y.fY.QUEST_BAR_HERO), [c, t]),
        M = (0, T.NA)({ quest: c }),
        B = i.useMemo(() => (0, y.tW)(c, y.fY.HERO_IMAGE), [c]),
        G = i.useMemo(() => (null == B ? {} : { backgroundImage: `url(${B.url})` }), [B]),
        F = (0, h.Ay)(),
        V = (0, u.Mw)(F),
        H = A.t.useConfig({ location: q.rE.QUESTS_BAR }),
        K = (0, T.mU)({
            quest: c,
            location: q.rE.QUESTS_BAR,
            questContent: b.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: b.uF.QUEST_BAR_V2,
            popoutTargetElementRef: I,
            onGameSheetOpened: x,
            onGameSheetClosed: p,
            gameProfileSource: g.Ob.QuestBar,
        }),
        z = (0, D.Pd)(c),
        { primaryCtaButtonVariant: $ } = (0, C.Op)(),
        Q = (0, S.do)({
            quest: c,
            content: b.uF.QUEST_BAR_V2,
            ctaContent: E.Cy.CONTEXT_MENU_OPEN_GAME_LINK_EXP_TREATMENT_ONE,
            sourceQuestContent: b.uF.QUEST_BAR_V2,
        }),
        Z = j.wK.useConfig({ location: q.rE.QUESTS_CARD }),
        et = Z.enabled && Z.variant === j.dF.NEXT_TO_PRIMARY_CTA,
        en = (0, N.wr)(c);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: I,
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
                                (0, a.jsx)(m.Text, { className: J.h_, variant: "text-xs/normal", children: K }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: J.lO,
                            children: (0, a.jsxs)(m.ButtonGroup, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    et &&
                                        (0, a.jsx)(m.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: en,
                                            onClick: Q,
                                        }),
                                    H.enabled && z === D.UA.UNENROLLED && H.enabledQuestStates.has(D.UA.UNENROLLED)
                                        ? (0, a.jsx)(w.A, {
                                              quest: c,
                                              surface: D.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              variant: $,
                                              analyticsCtxQuestContent: b.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: b.uF.QUEST_BAR_V2,
                                          })
                                        : (0, a.jsx)(m.Button, {
                                              variant: $,
                                              onClick: n ? o : void 0,
                                              loading: k,
                                              text: M,
                                              size: "sm",
                                              icon: (0, L.Oz)(c),
                                              fullWidth: !0,
                                          }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            null != B &&
                (0, a.jsx)(r.animated.div, {
                    className: J.AK,
                    style: { opacity: (0, P.a)(v.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(J.LC, J.Ge), style: G }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: J.IC,
                style: {
                    backdropFilter: (0, P.Q)(v.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, P.Q)(v.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    R.isAnimated
                        ? (0, a.jsx)(O.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(X, { ref: e, autoPlay: !0, asset: R, className: J.LO }),
                          })
                        : (0, a.jsx)(O.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: J.LO, src: R.url }),
                          }),
                    (0, a.jsx)("div", { className: l()(J.tV, { [J.tt]: V }) }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: d } = i.useContext(W.T),
        { expansionSpring: c } = i.useContext(U.PW),
        u = s.userStatus?.completedAt != null,
        m = d.percentComplete > 0,
        h = (0, S.Vn)(s),
        [x, p, g] = (0, S.Qo)(s, d),
        _ = i.useRef(null),
        f = i.useRef(null),
        v = (0, S.RR)({ quest: s }),
        j = (0, k.vv)(s),
        C = (0, S.I3)(s),
        A = i.useCallback(() => {
            (0, L.d5)({
                quest: s,
                questContent: b.uF.QUEST_BAR_V2,
                sourceQuestContent: b.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: E.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [s]),
        T = null != C ? C.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: l()(J.tv, J.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${Q.V1}, ${Q.us})`,
                    opacity: (0, P.a)(c.to({ range: [0, 1], output: [1, 0] })),
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
                            !(0, I.W1)(s) &&
                            (0, o.YW)(x)
                                .with(b.X0.SELECT, () =>
                                    (0, a.jsx)($.A, {
                                        onConsole: () => g(q.fO.CONSOLE),
                                        onDesktop: () => g(q.fO.DESKTOP),
                                    }),
                                )
                                .with(b.X0.DESKTOP, () => (0, a.jsx)(H.A, { quest: s }))
                                .with(b.X0.CONSOLE, () => (0, a.jsx)(F.A, { quest: s, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(V.T, {
                        children: [
                            j && (0, a.jsx)(Z, { onClick: A }),
                            (0, a.jsx)(B.f, {
                                awaitingConsoleConnections: v,
                                hasMadeProgress: m,
                                isProgressing: h,
                                activeScreen: x,
                                showBackButton: x !== b.X0.SELECT && p.length > 1 && !m && !h,
                                onBack: () => g(null),
                                sourceQuestContent: b.uF.QUEST_BAR_V2,
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
    (0, k.vv)(e)
        ? await (0, L.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, R.vA)(e)
          ? await (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let ei = i.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: o, isUnfurl: d } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: m, quest: h } = i.useContext(W.T),
        { expansionSpring: x } = i.useContext(U.PW),
        { launchInGameActivity: p } = (0, S.zW)(h),
        g = (0, R.vA)(h),
        _ = i.useCallback(async () => {
            let e = g ? E.Cy.START_QUEST : E.Cy.ACCEPT_QUEST;
            await ea(h, b.uF.QUEST_BAR_V2, e, b.uF.QUEST_BAR_V2), g && p();
        }, [h, p, g]),
        f = h.userStatus?.enrolledAt != null,
        v = u && m;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !v,
        className: l()(s, J.Rh, { [J.Yd]: v, [J.iH]: f }),
        style: {
            transform: (0, r.to)(
                [x.to({ range: [0, 1], output: [0, -100] }), x.to({ range: [0, 1], output: [0, c] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, a.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: f
                    ? (0, a.jsx)(en, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(et, { preferImageHeroAsset: d, isInteractable: v, containerRef: t, onAcceptQuest: _ }),
            }),
        ],
    });
});
