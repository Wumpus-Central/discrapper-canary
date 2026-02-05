n.d(t, { A: () => et }), n(801541);
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(92674),
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
    j = n(33621),
    A = n(714510),
    C = n(890687),
    S = n(579473),
    T = n(590202),
    y = n(901406),
    N = n(792620),
    E = n(814793),
    I = n(241124),
    k = n(212614),
    R = n(79545),
    O = n(646764),
    w = n(398025),
    D = n(545986),
    M = n(568329),
    P = n(207869),
    L = n(158265),
    U = n(933378),
    B = n(783569),
    G = n(963713),
    F = n(883035),
    V = n(277928),
    W = n(783602),
    H = n(905586),
    K = n(654487),
    z = n(272111),
    $ = n(985018),
    q = n(993710);
let Q = s.forwardRef(function (e, t) {
    let { isHovered: n, asset: i, poster: l, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = s.useContext(G.T),
        u = (0, d.bG)([x.A], () => x.A.useReducedMotion),
        m = s.useRef(null);
    return (
        s.useEffect(() => {
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
            children: (0, a.jsx)("source", { src: i.url, type: i.mimetype ?? void 0 }),
        })
    );
});
function Y(e) {
    let { onClick: t } = e,
        { quest: n } = s.useContext(G.T),
        i = (0, d.bG)([x.A], () => x.A.useReducedMotion),
        [r, o] = s.useState(!1),
        u = (0, S.tW)(n, S.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        h = (0, S.tW)(n, S.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, b.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && p === b.K2.COMPLETED,
        _ = !g && (!i || r);
    return (0, a.jsxs)(m.DUT, {
        className: q.QO,
        onClick: t,
        onMouseEnter: () => {
            i && !r && o(!0);
        },
        onMouseLeave: () => {
            i && r && o(!1);
        },
        children: [
            null != h &&
                (0, a.jsx)(I.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, a.jsx)("img", { ref: e, alt: "", src: h.url, className: q.Ue }),
                }),
            null != u
                ? (0, a.jsx)(I.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, a.jsx)(Q, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: u,
                              poster: h?.url,
                              className: l()(q.NM, { [q.Gc]: _ }),
                          }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: q.LT,
                children: g
                    ? (0, a.jsx)(m.mqY, { color: c.A.colors.WHITE, className: q.t })
                    : (0, a.jsx)(m.udU, { color: c.A.colors.WHITE, className: q.t }),
            }),
        ],
    });
}
function J(e) {
    let { quest: t } = e;
    return (0, a.jsx)(O.A, {
        className: l()(q.Qq, q.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.uF.QUEST_BAR_V2,
        sourceQuestContent: v.uF.QUEST_BAR_V2,
    });
}
function X(e) {
    let { preferImageHeroAsset: t, isInteractable: n, containerRef: i, onAcceptQuest: o } = e,
        { quest: c, onGameSheetOpen: x, onGameSheetClose: p, taskDetails: _ } = s.useContext(G.T),
        { expansionSpring: b } = s.useContext(M.PW),
        C = s.useRef(null),
        T = (0, d.bG)([f.A], () => f.A.isEnrolling(c.id), [c]),
        y = s.useMemo(() => (0, S.tW)(c, t ? S.fY.QUEST_BAR_HERO_IMAGE : S.fY.QUEST_BAR_HERO), [c, t]),
        N = (0, A.NA)({ quest: c }),
        E = s.useMemo(() => (0, S.tW)(c, S.fY.HERO_IMAGE), [c]),
        O = s.useMemo(() => (null == E ? {} : { backgroundImage: `url(${E.url})` }), [E]),
        P = (0, h.Ay)(),
        L = (0, u.Mw)(P),
        U = j.t.useConfig({ location: K.rE.QUESTS_BAR }),
        B = (0, A.mU)({
            quest: c,
            location: K.rE.QUESTS_BAR,
            questContent: v.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: v.uF.QUEST_BAR_V2,
            popoutTargetElementRef: C,
            onGameSheetOpened: x,
            onGameSheetClosed: p,
            gameProfileSource: g.Ob.QuestBar,
        }),
        F = (0, R.Pd)(c);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: C,
                children: (0, a.jsxs)("div", {
                    className: q.do,
                    ref: i,
                    children: [
                        (0, a.jsxs)("div", {
                            className: q.zH,
                            children: [
                                (0, a.jsx)(J, { quest: c }),
                                (0, a.jsx)(m.Heading, {
                                    className: q.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: $.intl.format($.t.EQa7os, { questName: c.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, { className: q.h_, variant: "text-xs/normal", children: B }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: q.lO,
                            children:
                                U.enabled && F === R.UA.UNENROLLED && U.enabledQuestStates.has(R.UA.UNENROLLED)
                                    ? (0, a.jsx)(k.A, {
                                          quest: c,
                                          surface: R.V3.QUEST_BAR_FOOTER,
                                          size: "sm",
                                          analyticsCtxQuestContent: v.uF.QUEST_BAR_V2,
                                          analyticsCtxSourceQuestContent: v.uF.QUEST_BAR_V2,
                                      })
                                    : (0, a.jsx)(m.Button, {
                                          variant: "primary",
                                          onClick: n ? o : void 0,
                                          loading: T,
                                          text: N,
                                          size: "sm",
                                          icon: (0, D.Oz)(c),
                                          fullWidth: !0,
                                      }),
                        }),
                    ],
                }),
            }),
            null != E &&
                (0, a.jsx)(r.animated.div, {
                    className: q.AK,
                    style: { opacity: (0, w.a)(b.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(q.LC, q.Ge), style: O }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: q.IC,
                style: {
                    backdropFilter: (0, w.Q)(b.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, w.Q)(b.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    y.isAnimated
                        ? (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(Q, { ref: e, autoPlay: !0, asset: y, className: q.LO }),
                          })
                        : (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: q.LO, src: y.url }),
                          }),
                    (0, a.jsx)("div", { className: l()(q.tV, { [q.tt]: L }) }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: i, taskDetails: d } = s.useContext(G.T),
        { expansionSpring: c } = s.useContext(M.PW),
        u = i.userStatus?.completedAt != null,
        m = d.percentComplete > 0,
        h = (0, C.Vn)(i),
        [x, p, g] = (0, C.Qo)(i, d),
        _ = s.useRef(null),
        f = s.useRef(null),
        b = (0, C.RR)({ quest: i }),
        j = (0, N.vv)(i),
        A = (0, C.I3)(i),
        S = s.useCallback(() => {
            (0, D.d5)({
                quest: i,
                questContent: v.uF.QUEST_BAR_V2,
                sourceQuestContent: v.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: T.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [i]),
        E = null != A ? A.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: l()(q.tv, q.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${z.V}, ${z.u})`,
                    opacity: (0, w.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, a.jsxs)("div", {
                className: q.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (f.current = e);
                },
                children: [
                    (0, a.jsx)(W.A, {}),
                    (0, a.jsx)("div", { className: q.yF }),
                    (0, a.jsx)(L.A, { overlayRef: t, progressBarRef: _, isHovered: !1 }),
                    (0, a.jsx)(V.A, {
                        contentLocation: "expanded",
                        progressBarRef: _,
                        isExpanded: !0,
                        percentComplete: E,
                        activeScreen: x,
                        popoutTargetElementRef: f,
                    }),
                    (0, a.jsx)(B.T, {
                        children:
                            !u &&
                            !(0, y.W1)(i) &&
                            (0, o.YW)(x)
                                .with(v.X0.SELECT, () =>
                                    (0, a.jsx)(H.A, {
                                        onConsole: () => g(K.fO.CONSOLE),
                                        onDesktop: () => g(K.fO.DESKTOP),
                                    }),
                                )
                                .with(v.X0.DESKTOP, () => (0, a.jsx)(F.A, { quest: i }))
                                .with(v.X0.CONSOLE, () => (0, a.jsx)(U.A, { quest: i, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(B.T, {
                        children: [
                            j && (0, a.jsx)(Y, { onClick: S }),
                            (0, a.jsx)(P.f, {
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
                className: l()(q.tv, q.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${z.V}, ${z.u})` },
            }),
        ],
    });
}
async function ee(e, t, n, a) {
    (0, N.vv)(e)
        ? await (0, D.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, E.vA)(e)
          ? await (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let et = s.forwardRef(function (e, t) {
    let { children: n, className: i, overlayRef: o, isUnfurl: d } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: m, quest: h } = s.useContext(G.T),
        { expansionSpring: x } = s.useContext(M.PW),
        { launchInGameActivity: p } = (0, C.zW)(h),
        g = (0, E.vA)(h),
        _ = s.useCallback(async () => {
            let e = g ? T.Cy.START_QUEST : T.Cy.ACCEPT_QUEST;
            await ee(h, v.uF.QUEST_BAR_V2, e, v.uF.QUEST_BAR_V2), g && p();
        }, [h, p, g]),
        f = h.userStatus?.enrolledAt != null,
        b = u && m;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !b,
        className: l()(i, q.Rh, { [q.Yd]: b, [q.iH]: f }),
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
                    ? (0, a.jsx)(Z, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(X, { preferImageHeroAsset: d, isInteractable: b, containerRef: t, onAcceptQuest: _ }),
            }),
        ],
    });
});
