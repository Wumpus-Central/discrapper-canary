n.d(t, { A: () => en }), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(497766),
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
    b = n(33621),
    j = n(714510),
    A = n(890687),
    C = n(579473),
    T = n(590202),
    E = n(651892),
    S = n(901406),
    y = n(792620),
    N = n(814793),
    I = n(241124),
    O = n(212614),
    R = n(79545),
    k = n(646764),
    w = n(398025),
    D = n(545986),
    M = n(139384),
    P = n(568329),
    L = n(207869),
    U = n(158265),
    B = n(933378),
    G = n(783569),
    F = n(963713),
    V = n(883035),
    H = n(277928),
    W = n(783602),
    K = n(905586),
    z = n(654487),
    $ = n(272111),
    q = n(985018),
    Y = n(993710);
let Q = i.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: l, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = i.useContext(F.T),
        u = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        x = i.useRef(null);
    return (
        i.useEffect(() => {
            null != x.current && (c && (!u || n) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, n, u]),
        (0, M.A)(x, z.rE.QUESTS_BAR),
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
function J(e) {
    let { onClick: t } = e,
        { quest: n } = i.useContext(F.T),
        s = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        [r, o] = i.useState(!1),
        h = (0, C.tW)(n, C.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        x = (0, C.tW)(n, C.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, f.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && p === f.K2.COMPLETED,
        _ = !g && (!s || r);
    return (0, a.jsxs)(u.DUT, {
        className: Y.QO,
        onClick: t,
        onMouseEnter: () => {
            s && !r && o(!0);
        },
        onMouseLeave: () => {
            s && r && o(!1);
        },
        children: [
            null != x &&
                (0, a.jsx)(I.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, a.jsx)("img", { ref: e, alt: "", src: x.url, className: Y.Ue }),
                }),
            null != h
                ? (0, a.jsx)(I.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, a.jsx)(Q, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: h,
                              poster: x?.url,
                              className: l()(Y.NM, { [Y.Gc]: _ }),
                          }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: Y.LT,
                children: g
                    ? (0, a.jsx)(u.mqY, { color: c.A.colors.WHITE, className: Y.t })
                    : (0, a.jsx)(u.udU, { color: c.A.colors.WHITE, className: Y.t }),
            }),
        ],
    });
}
function X(e) {
    let { quest: t } = e;
    return (0, a.jsx)(k.A, {
        className: l()(Y.Qq, Y.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: _.uF.QUEST_BAR_V2,
        sourceQuestContent: _.uF.QUEST_BAR_V2,
    });
}
function Z(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: s } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: m, taskDetails: h } = i.useContext(F.T),
        { expansionSpring: p } = i.useContext(P.PW),
        f = i.useRef(null),
        S = (0, d.bG)([g.A], () => g.A.isEnrolling(o.id), [o]),
        y = i.useMemo(() => (0, C.tW)(o, C.fY.QUEST_BAR_HERO), [o]),
        N = (0, j.NA)({ quest: o }),
        k = i.useMemo(() => (0, C.tW)(o, C.fY.HERO_IMAGE), [o]),
        M = i.useMemo(() => (null == k ? {} : { backgroundImage: `url(${k.url})` }), [k]),
        L = b.t.useConfig({ location: z.rE.QUESTS_BAR }),
        U = (0, j.mU)({
            quest: o,
            location: z.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: h,
            sourceQuestContent: _.uF.QUEST_BAR_V2,
            popoutTargetElementRef: f,
            onGameSheetOpened: c,
            onGameSheetClosed: m,
            gameProfileSource: x.Ob.QuestBar,
        }),
        B = (0, R.Pd)(o),
        { primaryCtaButtonVariant: G } = (0, v.Op)(),
        V = v.s5.useConfig({ location: z.rE.QUESTS_CARD }),
        H =
            V.enabled &&
            (V.variant === v.tL.LEARN_MORE_CTA_ONLY || V.variant === v.tL.COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON),
        W = (0, A.do)({
            quest: o,
            content: _.uF.QUEST_BAR_V2,
            ctaContent:
                V.variant === v.tL.LEARN_MORE_CTA_ONLY
                    ? T.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_TWO_OPEN_GAME_LINK
                    : T.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_THREE_OPEN_GAME_LINK,
            sourceQuestContent: _.uF.QUEST_BAR_V2,
        }),
        K = (0, E.wr)(o);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: f,
                children: (0, a.jsxs)("div", {
                    className: Y.do,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: Y.zH,
                            children: [
                                (0, a.jsx)(X, { quest: o }),
                                (0, a.jsx)(u.Heading, {
                                    className: Y.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: q.intl.format(q.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsx)(u.Text, { className: Y.h_, variant: "text-xs/normal", children: U }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: Y.lO,
                            children: (0, a.jsxs)(u.ButtonGroup, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    H &&
                                        (0, a.jsx)(u.Button, { size: "sm", variant: "secondary", text: K, onClick: W }),
                                    L.enabled && B === R.UA.UNENROLLED && L.enabledQuestStates.has(R.UA.UNENROLLED)
                                        ? (0, a.jsx)(O.A, {
                                              quest: o,
                                              surface: R.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              variant: G,
                                              analyticsCtxQuestContent: _.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: _.uF.QUEST_BAR_V2,
                                          })
                                        : (0, a.jsx)(u.Button, {
                                              variant: G,
                                              onClick: t ? s : void 0,
                                              loading: S,
                                              text: N,
                                              size: "sm",
                                              icon: (0, D.Oz)(o),
                                              fullWidth: !0,
                                          }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            null != k &&
                (0, a.jsx)(r.animated.div, {
                    className: Y.AK,
                    style: { opacity: (0, w.a)(p.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(Y.LC, Y.Ge), style: M }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: Y.IC,
                style: {
                    backdropFilter: (0, w.Q)(p.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, w.Q)(p.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    y.isAnimated
                        ? (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(Q, { ref: e, autoPlay: !0, asset: y, className: Y.LO }),
                          })
                        : (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: Y.LO, src: y.url }),
                          }),
                    (0, a.jsx)("div", { className: Y.tV }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: d } = i.useContext(F.T),
        { expansionSpring: c } = i.useContext(P.PW),
        u = s.userStatus?.completedAt != null,
        m = d.percentComplete > 0,
        h = (0, A.Vn)(s),
        [x, p, g] = (0, A.Qo)(s, d),
        f = i.useRef(null),
        v = i.useRef(null),
        b = (0, A.RR)({ quest: s }),
        j = (0, y.vv)(s),
        C = (0, A.I3)(s),
        E = i.useCallback(() => {
            (0, D.d5)({
                quest: s,
                questContent: _.uF.QUEST_BAR_V2,
                sourceQuestContent: _.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: T.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [s]),
        N = null != C ? C.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: l()(Y.tv, Y.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${$.V1}, ${$.us})`,
                    opacity: (0, w.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, a.jsxs)("div", {
                className: Y.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (v.current = e);
                },
                children: [
                    (0, a.jsx)(W.A, {}),
                    (0, a.jsx)("div", { className: Y.yF }),
                    (0, a.jsx)(U.A, { overlayRef: t, progressBarRef: f, isHovered: !1 }),
                    (0, a.jsx)(H.A, {
                        contentLocation: "expanded",
                        progressBarRef: f,
                        isExpanded: !0,
                        percentComplete: N,
                        activeScreen: x,
                        popoutTargetElementRef: v,
                    }),
                    (0, a.jsx)(G.T, {
                        children:
                            !u &&
                            !(0, S.W1)(s) &&
                            (0, o.YW)(x)
                                .with(_.X0.SELECT, () =>
                                    (0, a.jsx)(K.A, {
                                        onConsole: () => g(z.fO.CONSOLE),
                                        onDesktop: () => g(z.fO.DESKTOP),
                                    }),
                                )
                                .with(_.X0.DESKTOP, () => (0, a.jsx)(V.A, { quest: s }))
                                .with(_.X0.CONSOLE, () => (0, a.jsx)(B.A, { quest: s, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(G.T, {
                        children: [
                            j && (0, a.jsx)(J, { onClick: E }),
                            (0, a.jsx)(L.f, {
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
                className: l()(Y.tv, Y.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${$.V1}, ${$.us})` },
            }),
        ],
    });
}
async function et(e, t, n, a) {
    (0, y.vv)(e)
        ? await (0, D.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, N.vA)(e)
          ? await (0, p.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, p.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let en = i.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: o } = e,
        { collapsedHeight: d, isExpanded: c, isExpansionAnimationComplete: u, quest: m } = i.useContext(F.T),
        { expansionSpring: h } = i.useContext(P.PW),
        { launchInGameActivity: x } = (0, A.zW)(m),
        p = (0, N.vA)(m),
        g = i.useCallback(async () => {
            let e = p ? T.Cy.START_QUEST : T.Cy.ACCEPT_QUEST;
            await et(m, _.uF.QUEST_BAR_V2, e, _.uF.QUEST_BAR_V2), p && x();
        }, [m, x, p]),
        f = m.userStatus?.enrolledAt != null,
        v = c && u;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !v,
        className: l()(s, Y.Rh, { [Y.Yd]: v, [Y.iH]: f }),
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
                    ? (0, a.jsx)(ee, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(Z, { isInteractable: v, containerRef: t, onAcceptQuest: g }),
            }),
        ],
    });
});
