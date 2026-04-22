n.d(t, { A: () => eo }), n(801541);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(517738),
    o = n(889137),
    d = n(311907),
    c = n(827734),
    u = n(939249),
    p = n(417270),
    h = n(782134),
    m = n(534514),
    _ = n(834730),
    A = n(825484),
    f = n(821609),
    g = n(775602),
    x = n(607470),
    E = n(409626),
    C = n(829219),
    T = n(859703),
    v = n(341915),
    S = n(405670),
    b = n(112142),
    j = n(714510),
    I = n(890687),
    R = n(579473),
    N = n(590202),
    y = n(901406),
    O = n(792620),
    M = n(814793),
    U = n(895253),
    k = n(241124),
    P = n(442734),
    w = n(212614),
    L = n(79545),
    D = n(646764),
    F = n(398025),
    B = n(545986),
    G = n(139384),
    V = n(568329),
    W = n(207869),
    Q = n(158265),
    H = n(933378),
    q = n(783569),
    z = n(963713),
    K = n(883035),
    $ = n(277928),
    Y = n(783602),
    X = n(905586),
    Z = n(654487),
    J = n(272111),
    ee = n(985018),
    et = n(495707);
let en = s.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: a, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = s.useContext(z.T),
        u = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        p = s.useRef(null);
    return (
        s.useEffect(() => {
            null != p.current && (c && (!u || n) ? ((p.current.currentTime = 0), p.current.play()) : p.current.pause());
        }, [p, c, n, u]),
        (0, G.A)(p, Z.rE.QUESTS_BAR),
        (0, i.jsx)(x.A, {
            ref: (e) => {
                (p.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: o,
            poster: a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r,
            controls: !1,
            children: (0, i.jsx)("source", { src: l.url, type: l.mimetype ?? void 0 }),
        })
    );
});
function ei(e) {
    let { onClick: t } = e,
        { quest: n } = s.useContext(z.T),
        l = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        [r, o] = s.useState(!1),
        m = (0, R.tW)(n, R.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        _ = (0, R.tW)(n, R.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        A = (0, S.Kr)((e) => e.getVideoProgressState)(n.id),
        f = n.userStatus?.completedAt != null && A === S.K2.COMPLETED,
        x = !f && (!l || r);
    return (0, i.jsxs)(u.D, {
        className: et.QO,
        onClick: t,
        onMouseEnter: () => {
            l && !r && o(!0);
        },
        onMouseLeave: () => {
            l && r && o(!1);
        },
        children: [
            null != _ &&
                (0, i.jsx)(k.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, i.jsx)("img", { ref: e, alt: "", src: _.url, className: et.Ue }),
                }),
            null != m
                ? (0, i.jsx)(k.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, i.jsx)(en, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: m,
                              poster: _?.url,
                              className: a()(et.NM, { [et.Gc]: x }),
                          }),
                  })
                : null,
            (0, i.jsx)("div", {
                className: et.LT,
                children: f
                    ? (0, i.jsx)(p.m, { color: c.A.colors.WHITE, className: et.t })
                    : (0, i.jsx)(h.u, { color: c.A.colors.WHITE, className: et.t }),
            }),
        ],
    });
}
function es(e) {
    let { quest: t } = e;
    return (0, i.jsx)(D.A, {
        className: a()(et.Qq, et.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.uF.QUEST_BAR_V2,
        sourceQuestContent: v.uF.QUEST_BAR_V2,
    });
}
function el(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: u, taskDetails: p } = s.useContext(z.T),
        { expansionSpring: h } = s.useContext(V.PW),
        g = s.useRef(null),
        x = (0, d.bG)([T.A], () => T.A.isEnrolling(o.id), [o]),
        C = s.useMemo(() => (0, R.tW)(o, R.fY.QUEST_BAR_HERO), [o]),
        S = (0, j.NA)({ quest: o }),
        N = s.useMemo(() => (0, R.tW)(o, R.fY.HERO_IMAGE), [o]),
        y = s.useMemo(() => (null == N ? {} : { backgroundImage: `url(${N.url})` }), [N]),
        O = b.t.useConfig({ location: Z.rE.QUESTS_BAR }),
        M = (0, j.mU)({
            quest: o,
            location: Z.rE.QUESTS_BAR,
            questContent: v.uF.QUEST_BAR_V2,
            taskDetails: p,
            sourceQuestContent: v.uF.QUEST_BAR_V2,
            popoutTargetElementRef: g,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
            gameProfileSource: E.Ob.QuestBar,
        }),
        D = (0, L.Pd)(o),
        G = (0, I.SD)(o),
        W = (0, I.Oq)(),
        Q = W && G;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsxs)("div", {
                    className: et.do,
                    ref: n,
                    children: [
                        (0, i.jsxs)("div", {
                            className: et.zH,
                            children: [
                                (0, i.jsx)(es, { quest: o }),
                                (0, i.jsx)(m.D, {
                                    className: et.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: ee.intl.format(ee.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: et.zf,
                                    children: [
                                        (0, i.jsx)(_.E, { className: et.h_, variant: "text-xs/normal", children: M }),
                                        G && (0, i.jsx)(P.e, { questId: o.id, canUseQuestOrbMultiplier: W }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: et.lO,
                            children: (0, i.jsx)(A.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    O.enabled && D === L.UA.UNENROLLED && O.enabledQuestStates.has(L.UA.UNENROLLED)
                                        ? (0, i.jsx)(w.A, {
                                              quest: o,
                                              surface: L.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: v.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: v.uF.QUEST_BAR_V2,
                                          })
                                        : (0, i.jsx)(f.$, {
                                              onClick: t ? l : void 0,
                                              variant: "primary",
                                              loading: x,
                                              text: S,
                                              size: "sm",
                                              icon: (0, B.Oz)(o),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(U.A, { visible: Q, glow: !0, className: et.Ph }),
            null != N &&
                (0, i.jsx)(r.animated.div, {
                    className: et.AK,
                    style: { opacity: (0, F.a)(h.to([0, 1], [1, 0])) },
                    children: (0, i.jsx)("div", { className: a()(et.LC, et.Ge), style: y }),
                }),
            (0, i.jsxs)(r.animated.div, {
                className: et.IC,
                style: {
                    backdropFilter: (0, F.Q)(h.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, F.Q)(h.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    C.isAnimated
                        ? (0, i.jsx)(k.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, i.jsx)(en, { ref: e, autoPlay: !0, asset: C, className: et.LO }),
                          })
                        : (0, i.jsx)(k.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, i.jsx)("img", { ref: e, alt: "", className: et.LO, src: C.url }),
                          }),
                    (0, i.jsx)("div", { className: et.tV }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: d } = s.useContext(z.T),
        { expansionSpring: c } = s.useContext(V.PW),
        u = l.userStatus?.completedAt != null,
        p = d.percentComplete > 0,
        h = (0, I.Vn)(l),
        [m, _, A] = (0, I.Qo)(l, d),
        f = s.useRef(null),
        g = s.useRef(null),
        x = (0, I.RR)({ quest: l }),
        E = (0, O.vv)(l),
        C = (0, I.I3)(l),
        T = s.useCallback(() => {
            (0, B.d5)({
                quest: l,
                questContent: v.uF.QUEST_BAR_V2,
                sourceQuestContent: v.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: N.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [l]),
        S = null != C ? C.percentComplete : d.percentComplete;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                className: a()(et.tv, et.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${J.V1}, ${J.us})`,
                    opacity: (0, F.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, i.jsxs)("div", {
                className: et.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (g.current = e);
                },
                children: [
                    (0, i.jsx)(Y.A, {}),
                    (0, i.jsx)("div", { className: et.yF }),
                    (0, i.jsx)(Q.A, { overlayRef: t, progressBarRef: f, isHovered: !1 }),
                    (0, i.jsx)($.A, {
                        contentLocation: "expanded",
                        progressBarRef: f,
                        isExpanded: !0,
                        percentComplete: S,
                        activeScreen: m,
                        popoutTargetElementRef: g,
                    }),
                    (0, i.jsx)(q.T, {
                        children:
                            !u &&
                            !(0, y.W1)(l) &&
                            (0, o.YW)(m)
                                .with(v.X0.SELECT, () =>
                                    (0, i.jsx)(X.A, {
                                        onConsole: () => A(Z.fO.CONSOLE),
                                        onDesktop: () => A(Z.fO.DESKTOP),
                                    }),
                                )
                                .with(v.X0.DESKTOP, () => (0, i.jsx)(K.A, { quest: l }))
                                .with(v.X0.CONSOLE, () => (0, i.jsx)(H.A, { quest: l, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, i.jsxs)(q.T, {
                        children: [
                            E && (0, i.jsx)(ei, { onClick: T }),
                            (0, i.jsx)(W.f, {
                                awaitingConsoleConnections: x,
                                hasMadeProgress: p,
                                isProgressing: h,
                                activeScreen: m,
                                showBackButton: m !== v.X0.SELECT && _.length > 1 && !p && !h,
                                onBack: () => A(null),
                                sourceQuestContent: v.uF.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a()(et.tv, et.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${J.V1}, ${J.us})` },
            }),
        ],
    });
}
async function er(e, t, n, i) {
    (0, O.vv)(e)
        ? await (0, B.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: i, sourceQuestContentCTA: n })
        : (0, M.vA)(e)
          ? await (0, C.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i })
          : (0, C.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i });
}
let eo = s.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: d, isExpanded: c, isExpansionAnimationComplete: u, quest: p } = s.useContext(z.T),
        { expansionSpring: h } = s.useContext(V.PW),
        { launchInGameActivity: m } = (0, I.zW)(p),
        _ = (0, M.vA)(p),
        A = s.useCallback(async () => {
            let e = _ ? N.Cy.START_QUEST : N.Cy.ACCEPT_QUEST;
            await er(p, v.uF.QUEST_BAR_V2, e, v.uF.QUEST_BAR_V2), _ && m();
        }, [p, m, _]),
        f = p.userStatus?.enrolledAt != null,
        g = c && u;
    return (0, i.jsxs)(r.animated.div, {
        "aria-hidden": !g,
        className: a()(l, et.Rh, { [et.Yd]: g, [et.iH]: f }),
        style: {
            transform: (0, r.to)(
                [h.to({ range: [0, 1], output: [0, -100] }), h.to({ range: [0, 1], output: [0, d] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, i.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: f
                    ? (0, i.jsx)(ea, { overlayRef: o, containerRef: t })
                    : (0, i.jsx)(el, { isInteractable: g, containerRef: t, onAcceptQuest: A }),
            }),
        ],
    });
});
