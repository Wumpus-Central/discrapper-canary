n.d(t, { A: () => et }), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(522160),
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
    j = n(33621),
    A = n(714510),
    C = n(890687),
    T = n(579473),
    S = n(590202),
    y = n(901406),
    E = n(792620),
    N = n(814793),
    I = n(241124),
    k = n(212614),
    R = n(79545),
    O = n(646764),
    w = n(398025),
    D = n(545986),
    M = n(568329),
    P = n(207869),
    U = n(158265),
    L = n(933378),
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
let Q = i.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: l, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = i.useContext(G.T),
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
function Y(e) {
    let { onClick: t } = e,
        { quest: n } = i.useContext(G.T),
        s = (0, d.bG)([x.A], () => x.A.useReducedMotion),
        [r, o] = i.useState(!1),
        u = (0, T.tW)(n, T.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        h = (0, T.tW)(n, T.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, v.Kr)((e) => e.getVideoProgressState)(n.id),
        g = n.userStatus?.completedAt != null && p === v.K2.COMPLETED,
        _ = !g && (!s || r);
    return (0, a.jsxs)(m.DUT, {
        className: q.QO,
        onClick: t,
        onMouseEnter: () => {
            s && !r && o(!0);
        },
        onMouseLeave: () => {
            s && r && o(!1);
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
        questContent: b.uF.QUEST_BAR_V2,
        sourceQuestContent: b.uF.QUEST_BAR_V2,
    });
}
function X(e) {
    let { preferImageHeroAsset: t, isInteractable: n, containerRef: s, onAcceptQuest: o } = e,
        { quest: c, onGameSheetOpen: x, onGameSheetClose: p, taskDetails: _ } = i.useContext(G.T),
        { expansionSpring: v } = i.useContext(M.PW),
        C = i.useRef(null),
        S = (0, d.bG)([f.A], () => f.A.isEnrolling(c.id), [c]),
        y = i.useMemo(() => (0, T.tW)(c, t ? T.fY.QUEST_BAR_HERO_IMAGE : T.fY.QUEST_BAR_HERO), [c, t]),
        E = (0, A.NA)({ quest: c }),
        N = i.useMemo(() => (0, T.tW)(c, T.fY.HERO_IMAGE), [c]),
        O = i.useMemo(() => (null == N ? {} : { backgroundImage: `url(${N.url})` }), [N]),
        P = (0, h.Ay)(),
        U = (0, u.Mw)(P),
        L = j.t.useConfig({ location: K.rE.QUESTS_BAR }),
        B = (0, A.mU)({
            quest: c,
            location: K.rE.QUESTS_BAR,
            questContent: b.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: b.uF.QUEST_BAR_V2,
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
                    ref: s,
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
                                L.enabled && F === R.UA.UNENROLLED && L.enabledQuestStates.has(R.UA.UNENROLLED)
                                    ? (0, a.jsx)(k.A, {
                                          quest: c,
                                          surface: R.V3.QUEST_BAR_FOOTER,
                                          size: "sm",
                                          analyticsCtxQuestContent: b.uF.QUEST_BAR_V2,
                                          analyticsCtxSourceQuestContent: b.uF.QUEST_BAR_V2,
                                      })
                                    : (0, a.jsx)(m.Button, {
                                          variant: "primary",
                                          onClick: n ? o : void 0,
                                          loading: S,
                                          text: E,
                                          size: "sm",
                                          icon: (0, D.Oz)(c),
                                          fullWidth: !0,
                                      }),
                        }),
                    ],
                }),
            }),
            null != N &&
                (0, a.jsx)(r.animated.div, {
                    className: q.AK,
                    style: { opacity: (0, w.a)(v.to([0, 1], [1, 0])) },
                    children: (0, a.jsx)("div", { className: l()(q.LC, q.Ge), style: O }),
                }),
            (0, a.jsxs)(r.animated.div, {
                className: q.IC,
                style: {
                    backdropFilter: (0, w.Q)(v.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, w.Q)(v.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
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
                    (0, a.jsx)("div", { className: l()(q.tV, { [q.tt]: U }) }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: d } = i.useContext(G.T),
        { expansionSpring: c } = i.useContext(M.PW),
        u = s.userStatus?.completedAt != null,
        m = d.percentComplete > 0,
        h = (0, C.Vn)(s),
        [x, p, g] = (0, C.Qo)(s, d),
        _ = i.useRef(null),
        f = i.useRef(null),
        v = (0, C.RR)({ quest: s }),
        j = (0, E.vv)(s),
        A = (0, C.I3)(s),
        T = i.useCallback(() => {
            (0, D.d5)({
                quest: s,
                questContent: b.uF.QUEST_BAR_V2,
                sourceQuestContent: b.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: S.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [s]),
        N = null != A ? A.percentComplete : d.percentComplete;
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
                    (0, a.jsx)(U.A, { overlayRef: t, progressBarRef: _, isHovered: !1 }),
                    (0, a.jsx)(V.A, {
                        contentLocation: "expanded",
                        progressBarRef: _,
                        isExpanded: !0,
                        percentComplete: N,
                        activeScreen: x,
                        popoutTargetElementRef: f,
                    }),
                    (0, a.jsx)(B.T, {
                        children:
                            !u &&
                            !(0, y.W1)(s) &&
                            (0, o.YW)(x)
                                .with(b.X0.SELECT, () =>
                                    (0, a.jsx)(H.A, {
                                        onConsole: () => g(K.fO.CONSOLE),
                                        onDesktop: () => g(K.fO.DESKTOP),
                                    }),
                                )
                                .with(b.X0.DESKTOP, () => (0, a.jsx)(F.A, { quest: s }))
                                .with(b.X0.CONSOLE, () => (0, a.jsx)(L.A, { quest: s, taskDetails: d }))
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(B.T, {
                        children: [
                            j && (0, a.jsx)(Y, { onClick: T }),
                            (0, a.jsx)(P.f, {
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
                className: l()(q.tv, q.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${z.V}, ${z.u})` },
            }),
        ],
    });
}
async function ee(e, t, n, a) {
    (0, E.vv)(e)
        ? await (0, D.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: a, sourceQuestContentCTA: n })
        : (0, N.vA)(e)
          ? await (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a })
          : (0, _.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: a });
}
let et = i.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: o, isUnfurl: d } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: m, quest: h } = i.useContext(G.T),
        { expansionSpring: x } = i.useContext(M.PW),
        { launchInGameActivity: p } = (0, C.zW)(h),
        g = (0, N.vA)(h),
        _ = i.useCallback(async () => {
            let e = g ? S.Cy.START_QUEST : S.Cy.ACCEPT_QUEST;
            await ee(h, b.uF.QUEST_BAR_V2, e, b.uF.QUEST_BAR_V2), g && p();
        }, [h, p, g]),
        f = h.userStatus?.enrolledAt != null,
        v = u && m;
    return (0, a.jsxs)(r.animated.div, {
        "aria-hidden": !v,
        className: l()(s, q.Rh, { [q.Yd]: v, [q.iH]: f }),
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
                    : (0, a.jsx)(X, { preferImageHeroAsset: d, isInteractable: v, containerRef: t, onAcceptQuest: _ }),
            }),
        ],
    });
});
