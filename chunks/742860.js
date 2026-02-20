n.d(t, { A: () => en }), n(801541);
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
    p = n(775602),
    x = n(607470),
    g = n(409626),
    _ = n(829219),
    f = n(859703),
    b = n(341915),
    v = n(405670),
    j = n(440007),
    C = n(33621),
    A = n(714510),
    T = n(890687),
    S = n(579473),
    y = n(590202),
    E = n(901406),
    N = n(792620),
    I = n(814793),
    k = n(241124),
    R = n(212614),
    O = n(79545),
    w = n(646764),
    D = n(398025),
    M = n(545986),
    P = n(568329),
    L = n(207869),
    U = n(158265),
    B = n(933378),
    G = n(783569),
    F = n(963713),
    V = n(883035),
    W = n(277928),
    H = n(783602),
    K = n(905586),
    z = n(654487),
    $ = n(272111),
    q = n(985018),
    Q = n(993710);
let Y = i.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: l, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = i.useContext(F.T),
        u = (0, d.bG)([p.A], () => p.A.useReducedMotion),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            null != m.current && (c && (!u || n) ? ((m.current.currentTime = 0), m.current.play()) : m.current.pause());
        }, [m, c, n, u]),
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
function J(e) {
    let { onClick: t } = e,
        { quest: n } = i.useContext(F.T),
        s = (0, d.bG)([p.A], () => p.A.useReducedMotion),
        [r, o] = i.useState(!1),
        u = (0, S.tW)(n, S.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        h = (0, S.tW)(n, S.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, v.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && x === v.K2.COMPLETED,
        _ = !g && (!s || r);
    return (0, a.jsxs)(m.DUT, {
        className: Q.QO,
        onClick: t,
        onMouseEnter: () => {
            s && !r && o(!0);
        },
        onMouseLeave: () => {
            s && r && o(!1);
        },
        children: [
            null != h &&
                (0, a.jsx)(k.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, a.jsx)("img", { ref: e, alt: "", src: h.url, className: Q.Ue }),
                }),
            null != u
                ? (0, a.jsx)(k.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, a.jsx)(Y, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: u,
                              poster: h?.url,
                              className: l()(Q.NM, { [Q.Gc]: _ }),
                          }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: Q.LT,
                children: g
                    ? (0, a.jsx)(m.mqY, { color: c.A.colors.WHITE, className: Q.t })
                    : (0, a.jsx)(m.udU, { color: c.A.colors.WHITE, className: Q.t }),
            }),
        ],
    });
}
function X(e) {
    let { quest: t } = e;
    return (0, a.jsx)(w.A, {
        className: l()(Q.Qq, Q.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: b.uF.QUEST_BAR_V2,
        sourceQuestContent: b.uF.QUEST_BAR_V2,
    });
}
function Z(e) {
    let { preferImageHeroAsset: t, isInteractable: n, containerRef: s, onAcceptQuest: o } = e,
        { quest: c, onGameSheetOpen: p, onGameSheetClose: x, taskDetails: _ } = i.useContext(F.T),
        { expansionSpring: v } = i.useContext(P.PW),
        T = i.useRef(null),
        y = (0, d.bG)([f.A], () => f.A.isEnrolling(c.id), [c]),
        E = i.useMemo(() => (0, S.tW)(c, t ? S.fY.QUEST_BAR_HERO_IMAGE : S.fY.QUEST_BAR_HERO), [c, t]),
        N = (0, A.NA)({ quest: c }),
        I = i.useMemo(() => (0, S.tW)(c, S.fY.HERO_IMAGE), [c]),
        w = i.useMemo(() => (null == I ? {} : { backgroundImage: `url(${I.url})` }), [I]),
        L = (0, h.Ay)(),
        U = (0, u.Mw)(L),
        B = C.t.useConfig({ location: z.rE.QUESTS_BAR }),
        G = (0, A.mU)({
            quest: c,
            location: z.rE.QUESTS_BAR,
            questContent: b.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: b.uF.QUEST_BAR_V2,
            popoutTargetElementRef: T,
            onGameSheetOpened: p,
            onGameSheetClosed: x,
            gameProfileSource: g.Ob.QuestBar,
        }),
        V = (0, O.Pd)(c),
        { primaryCtaButtonVariant: W } = (0, j.Op)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: T,
                children: (0, a.jsxs)("div", {
                    className: Q.do,
                    ref: s,
                    children: [
                        (0, a.jsxs)("div", {
                            className: Q.zH,
                            children: [
                                (0, a.jsx)(X, { quest: c }),
                                (0, a.jsx)(m.Heading, {
                                    className: Q.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: q.intl.format(q.t.EQa7os, { questName: c.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, { className: Q.h_, variant: "text-xs/normal", children: G }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: Q.lO,
                            children:
                                B.enabled && V === O.UA.UNENROLLED && B.enabledQuestStates.has(O.UA.UNENROLLED)
                                    ? (0, a.jsx)(R.A, {
                                          quest: c,
                                          surface: O.V3.QUEST_BAR_FOOTER,
                                          size: "sm",
                                          variant: W,
                                          analyticsCtxQuestContent: b.uF.QUEST_BAR_V2,
                                          analyticsCtxSourceQuestContent: b.uF.QUEST_BAR_V2,
                                      })
                                    : (0, a.jsx)(m.Button, {
                                          variant: W,
                                          onClick: n ? o : void 0,
                                          loading: y,
                                          text: N,
                                          size: "sm",
                                          icon: (0, M.Oz)(c),
                                          fullWidth: !0,
                                      }),
                        }),
                    ],
                }),
            }),
            null != I &&
                (0, a.jsx)(r.animated.div, {
                    className: Q.AK,
                    style: { opacity: (0, D.a)(v.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(Q.LC, Q.Ge), style: w }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: Q.IC,
                style: {
                    backdropFilter: (0, D.Q)(v.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, D.Q)(v.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    E.isAnimated
                        ? (0, a.jsx)(k.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(Y, { ref: e, autoPlay: !0, asset: E, className: Q.LO }),
                          })
                        : (0, a.jsx)(k.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: Q.LO, src: E.url }),
                          }),
                    (0, a.jsx)("div", { className: l()(Q.tV, { [Q.tt]: U }) }),
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
        h = (0, T.Vn)(s),
        [p, x, g] = (0, T.Qo)(s, d),
        _ = i.useRef(null),
        f = i.useRef(null),
        v = (0, T.RR)({ quest: s }),
        j = (0, N.vv)(s),
        C = (0, T.I3)(s),
        A = i.useCallback(() => {
            (0, M.d5)({
                quest: s,
                questContent: b.uF.QUEST_BAR_V2,
                sourceQuestContent: b.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: y.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [s]),
        S = null != C ? C.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: l()(Q.tv, Q.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${$.V1}, ${$.us})`,
                    opacity: (0, D.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, a.jsxs)("div", {
                className: Q.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (f.current = e);
                },
                children: [
                    (0, a.jsx)(H.A, {}),
                    (0, a.jsx)("div", { className: Q.yF }),
                    (0, a.jsx)(U.A, { overlayRef: t, progressBarRef: _, isHovered: !1 }),
                    (0, a.jsx)(W.A, {
                        contentLocation: "expanded",
                        progressBarRef: _,
                        isExpanded: !0,
                        percentComplete: S,
                        activeScreen: p,
                        popoutTargetElementRef: f,
                    }),
                    (0, a.jsx)(G.T, {
                        children:
                            !u &&
                            !(0, E.W1)(s) &&
                            (0, o.YW)(p)
                                .with(b.X0.SELECT, () =>
                                    (0, a.jsx)(K.A, {
                                        onConsole: () => g(z.fO.CONSOLE),
                                        onDesktop: () => g(z.fO.DESKTOP),
                                    }),
                                )
                                .with(b.X0.DESKTOP, () => (0, a.jsx)(V.A, { quest: s }))
                                .with(b.X0.CONSOLE, () => (0, a.jsx)(B.A, { quest: s, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(G.T, {
                        children: [
                            j && (0, a.jsx)(J, { onClick: A }),
                            (0, a.jsx)(L.f, {
                                awaitingConsoleConnections: v,
                                hasMadeProgress: m,
                                isProgressing: h,
                                activeScreen: p,
                                showBackButton: p !== b.X0.SELECT && x.length > 1 && !m && !h,
                                onBack: () => g(null),
                                sourceQuestContent: b.uF.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(Q.tv, Q.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${$.V1}, ${$.us})` },
            }),
        ],
    });
}
async function et(e, t, n, a) {
    (0, N.vv)(e)
        ? await (0, M.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, I.vA)(e)
          ? await (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let en = i.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: o, isUnfurl: d } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: m, quest: h } = i.useContext(F.T),
        { expansionSpring: p } = i.useContext(P.PW),
        { launchInGameActivity: x } = (0, T.zW)(h),
        g = (0, I.vA)(h),
        _ = i.useCallback(async () => {
            let e = g ? y.Cy.START_QUEST : y.Cy.ACCEPT_QUEST;
            await et(h, b.uF.QUEST_BAR_V2, e, b.uF.QUEST_BAR_V2), g && x();
        }, [h, x, g]),
        f = h.userStatus?.enrolledAt != null,
        v = u && m;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !v,
        className: l()(s, Q.Rh, { [Q.Yd]: v, [Q.iH]: f }),
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
                    ? (0, a.jsx)(ee, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(Z, { preferImageHeroAsset: d, isInteractable: v, containerRef: t, onAcceptQuest: _ }),
            }),
        ],
    });
});
