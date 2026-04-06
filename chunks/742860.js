n.d(t, { A: () => ea }), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(687498),
    o = n(889137),
    d = n(311907),
    c = n(827734),
    u = n(397927),
    m = n(775602),
    h = n(607470),
    x = n(409626),
    p = n(829219),
    g = n(859703),
    f = n(341915),
    _ = n(405670),
    v = n(112142),
    b = n(714510),
    j = n(890687),
    A = n(579473),
    C = n(590202),
    y = n(651892),
    S = n(901406),
    T = n(792620),
    E = n(814793),
    N = n(895253),
    I = n(241124),
    k = n(442734),
    O = n(212614),
    R = n(79545),
    w = n(646764),
    D = n(398025),
    M = n(545986),
    P = n(139384),
    L = n(568329),
    U = n(207869),
    B = n(158265),
    G = n(933378),
    F = n(783569),
    V = n(963713),
    W = n(883035),
    H = n(277928),
    K = n(783602),
    z = n(905586),
    $ = n(654487),
    q = n(272111),
    Y = n(985018),
    Q = n(833931);
let J = i.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: l, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = i.useContext(V.T),
        u = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        x = i.useRef(null);
    return (
        i.useEffect(() => {
            null != x.current && (c && (!u || n) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, n, u]),
        (0, P.A)(x, $.rE.QUESTS_BAR),
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
function X(e) {
    let { onClick: t } = e,
        { quest: n } = i.useContext(V.T),
        s = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        [r, o] = i.useState(!1),
        h = (0, A.tW)(n, A.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        x = (0, A.tW)(n, A.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, _.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && p === _.K2.COMPLETED,
        f = !g && (!s || r);
    return (0, a.jsxs)(u.DUT, {
        className: Q.QO,
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
                    children: (e) => (0, a.jsx)("img", { ref: e, alt: "", src: x.url, className: Q.Ue }),
                }),
            null != h
                ? (0, a.jsx)(I.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, a.jsx)(J, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: h,
                              poster: x?.url,
                              className: l()(Q.NM, { [Q.Gc]: f }),
                          }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: Q.LT,
                children: g
                    ? (0, a.jsx)(u.mqY, { color: c.A.colors.WHITE, className: Q.t })
                    : (0, a.jsx)(u.udU, { color: c.A.colors.WHITE, className: Q.t }),
            }),
        ],
    });
}
function Z(e) {
    let { quest: t } = e;
    return (0, a.jsx)(w.A, {
        className: l()(Q.Qq, Q.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function ee(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: s } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: m, taskDetails: h } = i.useContext(V.T),
        { expansionSpring: p } = i.useContext(L.PW),
        _ = i.useRef(null),
        S = (0, d.bG)([g.A], () => g.A.isEnrolling(o.id), [o]),
        T = i.useMemo(() => (0, A.tW)(o, A.fY.QUEST_BAR_HERO), [o]),
        E = (0, b.NA)({ quest: o }),
        w = i.useMemo(() => (0, A.tW)(o, A.fY.HERO_IMAGE), [o]),
        P = i.useMemo(() => (null == w ? {} : { backgroundImage: `url(${w.url})` }), [w]),
        U = v.t.useConfig({ location: $.rE.QUESTS_BAR }),
        B = (0, b.mU)({
            quest: o,
            location: $.rE.QUESTS_BAR,
            questContent: f.uF.QUEST_BAR_V2,
            taskDetails: h,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: _,
            onGameSheetOpened: c,
            onGameSheetClosed: m,
            gameProfileSource: x.Ob.QuestBar,
        }),
        G = (0, R.Pd)(o),
        F = (0, j.do)({
            quest: o,
            content: f.uF.QUEST_BAR_V2,
            ctaContent: C.Cy.OPEN_GAME_LINK,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        W = (0, y.wr)(o),
        H = (0, j.SD)(o),
        K = (0, j.Oq)(),
        z = K && H;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: _,
                children: (0, a.jsxs)("div", {
                    className: Q.do,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: Q.zH,
                            children: [
                                (0, a.jsx)(Z, { quest: o }),
                                (0, a.jsx)(u.Heading, {
                                    className: Q.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: Y.intl.format(Y.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: Q.zf,
                                    children: [
                                        (0, a.jsx)(u.Text, { className: Q.h_, variant: "text-xs/normal", children: B }),
                                        H && (0, a.jsx)(k.e, { questId: o.id, canUseQuestOrbMultiplier: K }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: Q.lO,
                            children: (0, a.jsxs)(u.ButtonGroup, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    (0, a.jsx)(u.Button, { size: "sm", variant: "secondary", text: W, onClick: F }),
                                    U.enabled && G === R.UA.UNENROLLED && U.enabledQuestStates.has(R.UA.UNENROLLED)
                                        ? (0, a.jsx)(O.A, {
                                              quest: o,
                                              surface: R.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, a.jsx)(u.Button, {
                                              onClick: t ? s : void 0,
                                              loading: S,
                                              text: E,
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
            (0, a.jsx)(N.A, { visible: z, glow: !0, className: Q.Ph }),
            null != w &&
                (0, a.jsx)(r.animated.div, {
                    className: Q.AK,
                    style: { opacity: (0, D.a)(p.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(Q.LC, Q.Ge), style: P }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: Q.IC,
                style: {
                    backdropFilter: (0, D.Q)(p.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, D.Q)(p.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    T.isAnimated
                        ? (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(J, { ref: e, autoPlay: !0, asset: T, className: Q.LO }),
                          })
                        : (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: Q.LO, src: T.url }),
                          }),
                    (0, a.jsx)("div", { className: Q.tV }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: d } = i.useContext(V.T),
        { expansionSpring: c } = i.useContext(L.PW),
        u = s.userStatus?.completedAt != null,
        m = d.percentComplete > 0,
        h = (0, j.Vn)(s),
        [x, p, g] = (0, j.Qo)(s, d),
        _ = i.useRef(null),
        v = i.useRef(null),
        b = (0, j.RR)({ quest: s }),
        A = (0, T.vv)(s),
        y = (0, j.I3)(s),
        E = i.useCallback(() => {
            (0, M.d5)({
                quest: s,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: C.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [s]),
        N = null != y ? y.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: l()(Q.tv, Q.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${q.V1}, ${q.us})`,
                    opacity: (0, D.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, a.jsxs)("div", {
                className: Q.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (v.current = e);
                },
                children: [
                    (0, a.jsx)(K.A, {}),
                    (0, a.jsx)("div", { className: Q.yF }),
                    (0, a.jsx)(B.A, { overlayRef: t, progressBarRef: _, isHovered: !1 }),
                    (0, a.jsx)(H.A, {
                        contentLocation: "expanded",
                        progressBarRef: _,
                        isExpanded: !0,
                        percentComplete: N,
                        activeScreen: x,
                        popoutTargetElementRef: v,
                    }),
                    (0, a.jsx)(F.T, {
                        children:
                            !u &&
                            !(0, S.W1)(s) &&
                            (0, o.YW)(x)
                                .with(f.X0.SELECT, () =>
                                    (0, a.jsx)(z.A, {
                                        onConsole: () => g($.fO.CONSOLE),
                                        onDesktop: () => g($.fO.DESKTOP),
                                    }),
                                )
                                .with(f.X0.DESKTOP, () => (0, a.jsx)(W.A, { quest: s }))
                                .with(f.X0.CONSOLE, () => (0, a.jsx)(G.A, { quest: s, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(F.T, {
                        children: [
                            A && (0, a.jsx)(X, { onClick: E }),
                            (0, a.jsx)(U.f, {
                                awaitingConsoleConnections: b,
                                hasMadeProgress: m,
                                isProgressing: h,
                                activeScreen: x,
                                showBackButton: x !== f.X0.SELECT && p.length > 1 && !m && !h,
                                onBack: () => g(null),
                                sourceQuestContent: f.uF.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(Q.tv, Q.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${q.V1}, ${q.us})` },
            }),
        ],
    });
}
async function en(e, t, n, a) {
    (0, T.vv)(e)
        ? await (0, M.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, E.vA)(e)
          ? await (0, p.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, p.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let ea = i.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: o } = e,
        { collapsedHeight: d, isExpanded: c, isExpansionAnimationComplete: u, quest: m } = i.useContext(V.T),
        { expansionSpring: h } = i.useContext(L.PW),
        { launchInGameActivity: x } = (0, j.zW)(m),
        p = (0, E.vA)(m),
        g = i.useCallback(async () => {
            let e = p ? C.Cy.START_QUEST : C.Cy.ACCEPT_QUEST;
            await en(m, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), p && x();
        }, [m, x, p]),
        _ = m.userStatus?.enrolledAt != null,
        v = c && u;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !v,
        className: l()(s, Q.Rh, { [Q.Yd]: v, [Q.iH]: _ }),
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
                    ? (0, a.jsx)(et, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(ee, { isInteractable: v, containerRef: t, onAcceptQuest: g }),
            }),
        ],
    });
});
