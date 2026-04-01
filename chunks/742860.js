n.d(t, { A: () => ei }), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(773690),
    o = n(889137),
    d = n(311907),
    c = n(827734),
    u = n(397927),
    m = n(775602),
    h = n(607470),
    x = n(409626),
    p = n(829219),
    g = n(859703),
    _ = n(341915),
    f = n(405670),
    v = n(12251),
    b = n(112142),
    j = n(714510),
    A = n(890687),
    C = n(579473),
    y = n(590202),
    S = n(651892),
    T = n(901406),
    E = n(792620),
    N = n(814793),
    I = n(895253),
    O = n(241124),
    k = n(442734),
    R = n(212614),
    w = n(79545),
    D = n(646764),
    P = n(398025),
    M = n(545986),
    L = n(139384),
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
    J = n(833931);
let X = i.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: l, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = i.useContext(W.T),
        u = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        x = i.useRef(null);
    return (
        i.useEffect(() => {
            null != x.current && (c && (!u || n) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, n, u]),
        (0, L.A)(x, q.rE.QUESTS_BAR),
        (0, a.jsx)(h.A, {
            ref: (e) => {
                (x.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
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
        s = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        [r, o] = i.useState(!1),
        h = (0, C.tW)(n, C.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        x = (0, C.tW)(n, C.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, f.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && p === f.K2.COMPLETED,
        _ = !g && (!s || r);
    return (0, a.jsxs)(u.DUT, {
        className: J.QO,
        onClick: t,
        onMouseEnter: () => {
            s && !r && o(!0);
        },
        onMouseLeave: () => {
            s && r && o(!1);
        },
        children: [
            null != x &&
                (0, a.jsx)(O.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, a.jsx)("img", { ref: e, alt: "", src: x.url, className: J.Ue }),
                }),
            null != h
                ? (0, a.jsx)(O.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, a.jsx)(X, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: h,
                              poster: x?.url,
                              className: l()(J.NM, { [J.Gc]: _ }),
                          }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: J.LT,
                children: g
                    ? (0, a.jsx)(u.mqY, { color: c.A.colors.WHITE, className: J.t })
                    : (0, a.jsx)(u.udU, { color: c.A.colors.WHITE, className: J.t }),
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
        questContent: _.uF.QUEST_BAR_V2,
        sourceQuestContent: _.uF.QUEST_BAR_V2,
    });
}
function et(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: s } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: m, taskDetails: h } = i.useContext(W.T),
        { expansionSpring: p } = i.useContext(U.PW),
        f = i.useRef(null),
        T = (0, d.bG)([g.A], () => g.A.isEnrolling(o.id), [o]),
        E = i.useMemo(() => (0, C.tW)(o, C.fY.QUEST_BAR_HERO), [o]),
        N = (0, j.NA)({ quest: o }),
        D = i.useMemo(() => (0, C.tW)(o, C.fY.HERO_IMAGE), [o]),
        L = i.useMemo(() => (null == D ? {} : { backgroundImage: `url(${D.url})` }), [D]),
        B = b.t.useConfig({ location: q.rE.QUESTS_BAR }),
        G = (0, j.mU)({
            quest: o,
            location: q.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: h,
            sourceQuestContent: _.uF.QUEST_BAR_V2,
            popoutTargetElementRef: f,
            onGameSheetOpened: c,
            onGameSheetClosed: m,
            gameProfileSource: x.Ob.QuestBar,
        }),
        F = (0, w.Pd)(o),
        { primaryCtaButtonVariant: V } = (0, v.Op)(),
        H = v.s5.useConfig({ location: q.rE.QUESTS_CARD }),
        K =
            H.enabled &&
            (H.variant === v.tL.LEARN_MORE_CTA_ONLY || H.variant === v.tL.COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON),
        z = (0, A.do)({
            quest: o,
            content: _.uF.QUEST_BAR_V2,
            ctaContent:
                H.variant === v.tL.LEARN_MORE_CTA_ONLY
                    ? y.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_TWO_OPEN_GAME_LINK
                    : y.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_THREE_OPEN_GAME_LINK,
            sourceQuestContent: _.uF.QUEST_BAR_V2,
        }),
        $ = (0, S.wr)(o),
        Q = (0, A.SD)(o),
        Z = (0, A.Oq)(),
        et = Z && Q;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: f,
                children: (0, a.jsxs)("div", {
                    className: J.do,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: J.zH,
                            children: [
                                (0, a.jsx)(ee, { quest: o }),
                                (0, a.jsx)(u.Heading, {
                                    className: J.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: Y.intl.format(Y.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: J.zf,
                                    children: [
                                        (0, a.jsx)(u.Text, { className: J.h_, variant: "text-xs/normal", children: G }),
                                        Q && (0, a.jsx)(k.e, { questId: o.id, canUseQuestOrbMultiplier: Z }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: J.lO,
                            children: (0, a.jsxs)(u.ButtonGroup, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    K &&
                                        (0, a.jsx)(u.Button, { size: "sm", variant: "secondary", text: $, onClick: z }),
                                    B.enabled && F === w.UA.UNENROLLED && B.enabledQuestStates.has(w.UA.UNENROLLED)
                                        ? (0, a.jsx)(R.A, {
                                              quest: o,
                                              surface: w.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              variant: V,
                                              analyticsCtxQuestContent: _.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: _.uF.QUEST_BAR_V2,
                                          })
                                        : (0, a.jsx)(u.Button, {
                                              variant: V,
                                              onClick: t ? s : void 0,
                                              loading: T,
                                              text: N,
                                              size: "sm",
                                              icon: (0, M.Oz)(o),
                                              fullWidth: !0,
                                          }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(I.A, { visible: et, glow: !0, className: J.Ph }),
            null != D &&
                (0, a.jsx)(r.animated.div, {
                    className: J.AK,
                    style: { opacity: (0, P.a)(p.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(J.LC, J.Ge), style: L }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: J.IC,
                style: {
                    backdropFilter: (0, P.Q)(p.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, P.Q)(p.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    E.isAnimated
                        ? (0, a.jsx)(O.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(X, { ref: e, autoPlay: !0, asset: E, className: J.LO }),
                          })
                        : (0, a.jsx)(O.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: J.LO, src: E.url }),
                          }),
                    (0, a.jsx)("div", { className: J.tV }),
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
        h = (0, A.Vn)(s),
        [x, p, g] = (0, A.Qo)(s, d),
        f = i.useRef(null),
        v = i.useRef(null),
        b = (0, A.RR)({ quest: s }),
        j = (0, E.vv)(s),
        C = (0, A.I3)(s),
        S = i.useCallback(() => {
            (0, M.d5)({
                quest: s,
                questContent: _.uF.QUEST_BAR_V2,
                sourceQuestContent: _.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: y.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [s]),
        N = null != C ? C.percentComplete : d.percentComplete;
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
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (v.current = e);
                },
                children: [
                    (0, a.jsx)(z.A, {}),
                    (0, a.jsx)("div", { className: J.yF }),
                    (0, a.jsx)(G.A, { overlayRef: t, progressBarRef: f, isHovered: !1 }),
                    (0, a.jsx)(K.A, {
                        contentLocation: "expanded",
                        progressBarRef: f,
                        isExpanded: !0,
                        percentComplete: N,
                        activeScreen: x,
                        popoutTargetElementRef: v,
                    }),
                    (0, a.jsx)(V.T, {
                        children:
                            !u &&
                            !(0, T.W1)(s) &&
                            (0, o.YW)(x)
                                .with(_.X0.SELECT, () =>
                                    (0, a.jsx)($.A, {
                                        onConsole: () => g(q.fO.CONSOLE),
                                        onDesktop: () => g(q.fO.DESKTOP),
                                    }),
                                )
                                .with(_.X0.DESKTOP, () => (0, a.jsx)(H.A, { quest: s }))
                                .with(_.X0.CONSOLE, () => (0, a.jsx)(F.A, { quest: s, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(V.T, {
                        children: [
                            j && (0, a.jsx)(Z, { onClick: S }),
                            (0, a.jsx)(B.f, {
                                awaitingConsoleConnections: b,
                                hasMadeProgress: m,
                                isProgressing: h,
                                activeScreen: x,
                                showBackButton: x !== _.X0.SELECT && p.length > 1 && !m && !h,
                                onBack: () => g(null),
                                sourceQuestContent: _.uF.QUEST_BAR_V2,
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
    (0, E.vv)(e)
        ? await (0, M.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, N.vA)(e)
          ? await (0, p.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, p.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let ei = i.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: o } = e,
        { collapsedHeight: d, isExpanded: c, isExpansionAnimationComplete: u, quest: m } = i.useContext(W.T),
        { expansionSpring: h } = i.useContext(U.PW),
        { launchInGameActivity: x } = (0, A.zW)(m),
        p = (0, N.vA)(m),
        g = i.useCallback(async () => {
            let e = p ? y.Cy.START_QUEST : y.Cy.ACCEPT_QUEST;
            await ea(m, _.uF.QUEST_BAR_V2, e, _.uF.QUEST_BAR_V2), p && x();
        }, [m, x, p]),
        f = m.userStatus?.enrolledAt != null,
        v = c && u;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !v,
        className: l()(s, J.Rh, { [J.Yd]: v, [J.iH]: f }),
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
                children: f
                    ? (0, a.jsx)(en, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(et, { isInteractable: v, containerRef: t, onAcceptQuest: g }),
            }),
        ],
    });
});
