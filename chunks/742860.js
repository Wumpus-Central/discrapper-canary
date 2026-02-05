n.d(t, { A: () => et }), n(801541);
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(563495),
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
    let { isInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: x, taskDetails: p } = s.useContext(G.T),
        { expansionSpring: _ } = s.useContext(M.PW),
        b = s.useRef(null),
        C = (0, d.bG)([f.A], () => f.A.isEnrolling(o.id), [o]),
        T = s.useMemo(() => (0, S.tW)(o, S.fY.QUEST_BAR_HERO), [o]),
        y = (0, A.NA)({ quest: o }),
        N = s.useMemo(() => (0, S.tW)(o, S.fY.HERO_IMAGE), [o]),
        E = s.useMemo(() => (null == N ? {} : { backgroundImage: `url(${N.url})` }), [N]),
        O = (0, h.Ay)(),
        P = (0, u.Mw)(O),
        L = j.t.useConfig({ location: K.rE.QUESTS_BAR }),
        U = (0, A.mU)({
            quest: o,
            location: K.rE.QUESTS_BAR,
            questContent: v.uF.QUEST_BAR_V2,
            taskDetails: p,
            sourceQuestContent: v.uF.QUEST_BAR_V2,
            popoutTargetElementRef: b,
            onGameSheetOpened: c,
            onGameSheetClosed: x,
            gameProfileSource: g.Ob.QuestBar,
        }),
        B = (0, R.P)(o);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: b,
                children: (0, a.jsxs)("div", {
                    className: q.do,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: q.zH,
                            children: [
                                (0, a.jsx)(J, { quest: o }),
                                (0, a.jsx)(m.Heading, {
                                    className: q.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: $.intl.format($.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, { className: q.h_, variant: "text-xs/normal", children: U }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: q.lO,
                            children:
                                L.enabled && B === R.U.UNENROLLED && L.enabledQuestStates.has(R.U.UNENROLLED)
                                    ? (0, a.jsx)(k.A, {
                                          quest: o,
                                          size: "sm",
                                          analyticsCtxQuestContent: v.uF.QUEST_BAR_V2,
                                          analyticsCtxSourceQuestContent: v.uF.QUEST_BAR_V2,
                                      })
                                    : (0, a.jsx)(m.Button, {
                                          variant: "primary",
                                          onClick: t ? i : void 0,
                                          loading: C,
                                          text: y,
                                          size: "sm",
                                          icon: (0, D.Oz)(o),
                                          fullWidth: !0,
                                      }),
                        }),
                    ],
                }),
            }),
            null != N &&
                (0, a.jsx)(r.animated.div, {
                    className: q.AK,
                    style: { opacity: (0, w.a)(_.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(q.LC, q.Ge), style: E }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: q.IC,
                style: {
                    backdropFilter: (0, w.Q)(_.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, w.Q)(_.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    T.isAnimated
                        ? (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, a.jsx)(Q, { ref: e, autoPlay: !0, asset: T, className: q.LO }),
                          })
                        : (0, a.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, a.jsx)("img", { ref: e, alt: "", className: q.LO, src: T.url }),
                          }),
                    (0, a.jsx)("div", { className: l()(q.tV, { [q.tt]: P }) }),
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
    let { children: n, className: i, overlayRef: o } = e,
        { collapsedHeight: d, isExpanded: c, isExpansionAnimationComplete: u, quest: m } = s.useContext(G.T),
        { expansionSpring: h } = s.useContext(M.PW),
        { launchInGameActivity: x } = (0, C.zW)(m),
        p = (0, E.vA)(m),
        g = s.useCallback(async () => {
            let e = p ? T.Cy.START_QUEST : T.Cy.ACCEPT_QUEST;
            await ee(m, v.uF.QUEST_BAR_V2, e, v.uF.QUEST_BAR_V2), p && x();
        }, [m, x, p]),
        _ = m.userStatus?.enrolledAt != null,
        f = c && u;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !f,
        className: l()(i, q.Rh, { [q.Yd]: f, [q.iH]: _ }),
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
                    ? (0, a.jsx)(Z, { overlayRef: o, containerRef: t })
                    : (0, a.jsx)(X, { isInteractable: f, containerRef: t, onAcceptQuest: g }),
            }),
        ],
    });
});
