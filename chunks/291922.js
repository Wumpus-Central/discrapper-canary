s.d(t, { A: () => eH });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(507107),
    o = s(890687),
    c = s(18437),
    u = s(590202),
    d = s(792620),
    x = s(73473),
    m = s(545986),
    h = s(203879),
    C = s(321503);
s(134528), s(947204);
var j = s(419354),
    E = s(702841),
    f = s(990078),
    v = s(462887),
    N = s(834730),
    g = s(717421),
    O = s(695366),
    p = s(885574),
    A = s(661531),
    y = s(123292),
    S = s(331322),
    T = s(939249),
    _ = s(782134),
    w = s(365199),
    I = s(820081),
    Q = s(765671),
    q = s(736653),
    L = s(496885),
    b = s(178540),
    k = s(859703),
    R = s(710969),
    D = s(814793),
    M = s(988436),
    z = s(918338),
    P = s(270045),
    U = s(57718),
    H = s(398025),
    W = s(516226),
    F = s(181672);
function V(e) {
    let { width: t, height: s, showPlaceholder: i, children: a, className: r } = e;
    return i ? (0, n.jsx)("div", { className: l()(F.s, r), style: { width: t, height: s } }) : a;
}
var K = s(419367),
    $ = s(652215),
    B = s(985018),
    G = s(368774);
function X(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: l()(G.Io, { [G.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(N.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: G.Xi,
            children: t,
        }),
    });
}
function Y(e) {
    let { quest: t, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: r } = e,
        { ref: c, height: u = 0 } = (0, Q.Ay)([s]),
        d = t.userStatus?.completedAt != null,
        x = (0, o.Vn)(t),
        { type: m, hints: h } = i.useMemo(
            () =>
                d || x
                    ? { type: 2, hints: [] }
                    : s.length > 0
                      ? { type: 0, hints: s.map((e) => e.message) }
                      : a.length > 0
                        ? { type: 1, hints: a }
                        : { type: 2, hints: [] },
            [s, d, x, a],
        ),
        C = 2 !== m,
        E = (0, g.z)({ opacity: +!!C, height: C ? u : 0, config: K.N }),
        f = 0 === m ? O.E : p.m,
        v = A.A.unsafe_rawColors.RED_345.css,
        S = 0 === m ? v : l ? A.A.colors.TEXT_DEFAULT : A.A.colors.WHITE;
    return (0, n.jsx)(j.animated.div, {
        style: { height: E.height, opacity: (0, H.a)(E.opacity) },
        children: (0, n.jsxs)("div", {
            ref: c,
            className: G.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: G.M5,
                    children: [
                        (0, n.jsx)(f, { size: "xs", color: S }),
                        (0, n.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, n.jsx)(y.Q, {
                        text: B.intl.string(B.t["yKJi+/"]),
                        onClick: () => (0, M.i)({ quest: t, errorHints: s, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function J(e) {
    let {
            quest: t,
            isHovering: s,
            errorHints: a,
            warningHints: l,
            isVisibleInViewport: c,
            onCtxMenuClose: x,
            onCtxMenuOpen: h,
            onCtxMenuSelect: C,
            sourceQuestContent: j,
        } = e,
        g = (0, b.O)((e) => e.getErrorHints(t.id)),
        O = g.length > 0 ? g : a,
        p = (0, d.IO)(t),
        y = (0, q.Ay)(),
        Q = ((0, v.M)(y) ? $.NJ8.DARK : $.NJ8.LIGHT) === $.NJ8.DARK,
        M = (0, o.LS)(t),
        H = t.userStatus?.claimedAt != null,
        F = (0, o.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        K = t.userStatus?.enrolledAt != null,
        J = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: Z } = i.useContext(W.M),
        ee = Q ? "text-muted" : "always-white",
        et = i.useCallback(() => {
            p &&
                (0, m.d5)({
                    quest: t,
                    questContent: r.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: j,
                    sourceQuestContentCTA: u.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [p, t, j]),
        es = (0, E.bG)([k.A], () => k.A.getQuestHomeHero()),
        en = i.useMemo(() => null != es && (0, D.I0)(es, t.id), [es, t.id]);
    return (0, n.jsxs)("div", {
        className: G.kL,
        children: [
            (0, n.jsx)("div", {
                className: G.IC,
                children: (0, n.jsx)(z.A, {
                    quest: t,
                    isInteracting: s,
                    hideAssets: !c,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: G.l1,
                    imageClassName: G.c8,
                }),
            }),
            (0, n.jsx)("div", { className: G.Lw }),
            (0, n.jsxs)("div", {
                className: G.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: G.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: G.mY,
                                children: [
                                    (en || t.preview) &&
                                        (0, n.jsxs)(S.B, {
                                            className: G.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                en &&
                                                    !(0, R.Ic)(t) &&
                                                    (0, n.jsx)(X, { children: B.intl.string(B.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, n.jsx)(X, {
                                                        variant: "brand",
                                                        children: B.intl.string(B.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    p &&
                                        (0, n.jsx)(f.m, {
                                            text: J
                                                ? B.intl.string(B.t.YsCuyF)
                                                : K
                                                  ? B.intl.string(B.t["74KqrR"])
                                                  : (0, R.Ic)(t)
                                                    ? B.intl.string(B.t.I6JG46)
                                                    : B.intl.string(B.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(T.D, {
                                                className: G.iI,
                                                "aria-label": B.intl.string(B.t.RscU7I),
                                                onClick: et,
                                                children: (0, n.jsx)(_.u, { color: "currentColor", className: G.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(P.C, {
                                        onOpen: h,
                                        onClose: x,
                                        onSelect: C,
                                        questContent: r.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: j,
                                        children: (e) =>
                                            (0, n.jsx)(T.D, {
                                                ...e,
                                                className: G.iI,
                                                "aria-label": B.intl.string(B.t.DEoVWZ),
                                                children: (0, n.jsx)(w.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: G.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(V, {
                                showPlaceholder: !c,
                                width: 100,
                                height: 30,
                                className: G.Iu,
                                children: (0, n.jsx)(U.Ay, {
                                    className: G.Iu,
                                    logotypeClassName: G.ND,
                                    quest: t,
                                    separatorSpacing: U.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Z,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: G.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: G.O,
                                        children: [
                                            (0, n.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: ee,
                                                children: B.intl.string(B.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(L.A, {
                                                className: G.w$,
                                                size: 16,
                                                color: A.A.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(I.B, {
                                                    color: A.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    M || H
                                        ? null
                                        : (0, n.jsx)(N.E, {
                                              variant: "text-sm/medium",
                                              color: ee,
                                              children: B.intl.format(B.t["7D8r4F"], { expiryDate: F }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(Y, { quest: t, errorHints: O, warningHints: l, isDarkTheme: Q, sourceQuestContent: j }),
                ],
            }),
        ],
    });
}
var Z = s(17928),
    ee = s(604121),
    et = s(534514),
    es = s(775602),
    en = s(409626),
    ei = s(106799),
    ea = s(838077),
    el = s(801365),
    er = s(895253),
    eo = s(453384),
    ec = s(442734),
    eu = s(646764),
    ed = s(843282),
    ex = s(825484),
    em = s(821609),
    eh = s(862482),
    eC = s(31300),
    ej = s(687966),
    eE = s(414499),
    ef = s(403362);
let ev = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eN = s(112142),
    eg = s(971649),
    eO = s(651892),
    ep = s(901406),
    eA = s(371912),
    ey = s(212614),
    eS = s(79545),
    eT = s(654487),
    e_ = s(562296);
let ew = [
    {
        value: eT.fO.DESKTOP,
        get label() {
            return B.intl.string(B.t["QXc01+"]);
        },
    },
    {
        value: eT.fO.CONSOLE,
        get label() {
            return B.intl.string(B.t["8lAfuB"]);
        },
    },
];
function eI(e) {
    let t,
        s,
        { value: i } = e;
    switch (i) {
        case eT.fO.DESKTOP:
            (s = (0, n.jsx)(eC.k, {})), (t = B.intl.string(B.t["QXc01+"]));
            break;
        case eT.fO.CONSOLE:
            (s = (0, n.jsx)(ej._, {})), (t = B.intl.string(B.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: e_.FL, children: [s, t] });
}
function eQ(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case eT.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: e_.FL,
                children: [(0, n.jsx)(eC.k, {}), B.intl.string(B.t.g6Dr44)],
            });
        case eT.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: e_.FL,
                children: [(0, n.jsx)(ej._, {}), B.intl.string(B.t.iyNbj5)],
            });
        default:
            return (0, ef.xb)(e[0].value);
    }
}
function eq(e) {
    let { quest: t, sourceQuestContent: s } = e,
        n = (0, eg.go)();
    return {
        externalLinkCta: (0, eO.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, ep.pu)(t, {
                content: r.uF.QUEST_HOME_DESKTOP,
                ctaContent: u.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [t, s, n]),
    };
}
function eL(e) {
    let { quest: t, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = e,
        { externalLinkCta: r, handleOpenExternalLink: o } = eq({ quest: t, sourceQuestContent: s });
    return (0, n.jsxs)(ex.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(em.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, n.jsx)(em.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function eb(e) {
    let { quest: t, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = e,
        { externalLinkCta: l, handleOpenExternalLink: r } = eq({ quest: t, sourceQuestContent: s }),
        o = B.intl.format(B.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(ex.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(em.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, n.jsx)(em.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
        ],
    });
}
function ek(e) {
    var t;
    let s,
        a,
        {
            quest: l,
            questContent: x,
            onReceiveErrorHints: h,
            contentPosition: C,
            rowIndex: j,
            sourceQuestContent: E,
        } = e,
        f = (0, Z.bG)([es.A], () => es.A.useReducedMotion),
        v = (0, eA.Xf)({ useReducedMotion: f }),
        N = (0, c.Ut)(),
        g = (0, o.RR)({ quest: l }),
        O = (0, o.Vn)(l),
        p = (0, o.S5)(l.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: A,
            isEnrolling: y,
            isQuestEnrollmentBlocked: S,
        } = (0, Z.cf)([k.A], () => ({
            isClaiming: k.A.isClaimingReward(l.id) || k.A.isFetchingRewardCode(l.id),
            isEnrolling: k.A.isEnrolling(l.id),
            isQuestEnrollmentBlocked: null != k.A.questEnrollmentBlockedUntil,
        })),
        T = l.userStatus?.enrolledAt != null,
        _ = l.userStatus?.completedAt != null,
        w = _ && l.userStatus?.claimedAt == null,
        I = (0, R.if)(l),
        Q = !(0, R.Ic)(l),
        q = (0, o.In)(l),
        L = (0, d.IO)(l),
        M = (0, d.K$)(l),
        z = (0, d.Cr)(l),
        P = (0, o.fc)(l),
        [U, H, W] = (0, o.Qo)(l, P),
        F = Q && q === o.F3.ACCEPTED,
        V = F && U === r.X0.SELECT,
        K = F && !V && H.length > 1,
        $ = eN.t.useConfig({ location: eT.rE.QUEST_HOME_DESKTOP }),
        G = (0, eS.Pd)(l),
        X = (0, b.O)((e) => e.clearErrorHints),
        Y = i.useCallback(
            (e) => {
                W(e), e === eT.fO.DESKTOP && (h([]), X(l.id));
            },
            [W, h, X, l.id],
        ),
        { text: J, onClick: ee } = (0, eA._c)({
            progressState: q,
            quest: l,
            questContent: x,
            questContentPosition: C,
            questContentRowIndex: j,
            inGiftInventory: !0,
            isVideoQuest: L,
            inGameQuest: z,
            sourceQuestContent: E,
        }),
        { startingConsoleQuest: et, startConsoleQuest: en } = (0, o.Wj)({
            questId: l.id,
            beforeRequest: () => {
                v.startAnimation(),
                    N({
                        questId: l.id,
                        questContent: x,
                        questContentCTA: u.Cy.DEFIBRILLATOR,
                        questContentPosition: C,
                        questContentRowIndex: j,
                        sourceQuestContent: E,
                    });
            },
            afterRequest: (e) => {
                v.stopAnimation(), h(e);
            },
        }),
        ei = l.userStatus?.claimedAt != null,
        { launchInGameActivity: el } = (0, o.zW)(l),
        er = (0, ea.NA)({ quest: l, shortText: !0 }),
        eo = (0, o.do)({ quest: l, content: x, ctaContent: u.Cy.OPEN_GAME_LINK, sourceQuestContent: E }),
        ec = (0, eO.wr)(l),
        { handleOpenExternalLink: eu } = eq({ quest: l, sourceQuestContent: E }),
        eC =
            ((t = eT.rE.QUEST_HOME_DESKTOP),
            (s = ev.useConfig({ location: t }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, d.g5)(l)),
        eg = eC ? eu : eo,
        ep = (0, n.jsx)(em.$, { variant: "secondary", text: ec, onClick: eg }),
        ek = (0, n.jsx)(em.$, { variant: "secondary", text: ec, onClick: eg, fullWidth: !0 }),
        eR = (0, n.jsx)(em.$, { variant: "secondary", text: ec, onClick: eo }),
        eD = null;
    return ($.enabled && G === eS.UA.EXPIRED_CLAIMABLE && $.enabledQuestStates.has(G)
        ? (eD = (0, n.jsx)("div", {
              className: e_.x6,
              children: (0, n.jsx)(ey.A, {
                  quest: l,
                  surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: x,
                  analyticsCtxSourceQuestContent: E,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: j,
              }),
          }))
        : I && w
          ? (eD = (0, n.jsx)("div", {
                className: e_.x6,
                children: (0, n.jsx)(em.$, {
                    variant: "primary",
                    loading: A,
                    onClick: ee ?? void 0,
                    text: J,
                    fullWidth: !0,
                }),
            }))
          : $.enabled && (G === eS.UA.COMPLETED || G === eS.UA.CLAIMED) && $.enabledQuestStates.has(G)
            ? (eD = L
                  ? (0, n.jsx)(eL, {
                        quest: l,
                        sourceQuestContent: E,
                        onClick: ee,
                        text: J,
                        primaryCtaButton: (0, n.jsx)(ey.A, {
                            quest: l,
                            surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: x,
                            analyticsCtxSourceQuestContent: E,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: j,
                        }),
                    })
                  : (0, D.vA)(l)
                    ? (0, n.jsxs)(ex.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(em.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(eT.Li.CLOUD_GAMING_ACTIVITY) ? eE.h : ej._,
                                  text: er,
                                  onClick: () => {
                                      el();
                                  },
                              }),
                              (0, n.jsx)(ey.A, {
                                  quest: l,
                                  surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: x,
                                  analyticsCtxSourceQuestContent: E,
                                  analyticsCtxQuestContentPosition: C,
                                  analyticsCtxQuestContentRowIndex: j,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: e_.x6,
                          children: (0, n.jsx)(ey.A, {
                              quest: l,
                              surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: x,
                              analyticsCtxSourceQuestContent: E,
                              analyticsCtxQuestContentPosition: C,
                              analyticsCtxQuestContentRowIndex: j,
                          }),
                      }))
            : _
              ? (eD = L
                    ? (0, n.jsx)(eL, { quest: l, sourceQuestContent: E, onClick: ee, text: J })
                    : (0, D.vA)(l)
                      ? (0, n.jsxs)(ex.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(em.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(eT.Li.CLOUD_GAMING_ACTIVITY) ? eE.h : ej._,
                                    text: er,
                                    onClick: () => {
                                        el();
                                    },
                                }),
                                (0, n.jsx)(em.$, { variant: "primary", onClick: ee ?? void 0, text: J }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: e_.x6,
                            children: (0, n.jsx)(em.$, {
                                variant: "primary",
                                onClick: ee ?? void 0,
                                text: J,
                                fullWidth: !0,
                            }),
                        }))
              : Q
                ? M
                    ? (eD = (0, n.jsx)("div", {
                          className: e_.x6,
                          children:
                              $.enabled &&
                              (G === eS.UA.UNENROLLED || G === eS.UA.ENROLLED || G === eS.UA.INCOMPLETE) &&
                              $.enabledQuestStates.has(G)
                                  ? (0, n.jsxs)(ex.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            G === eS.UA.UNENROLLED ? eR : eC ? ep : null,
                                            (0, n.jsx)(ey.A, {
                                                quest: l,
                                                surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: x,
                                                analyticsCtxSourceQuestContent: E,
                                                analyticsCtxQuestContentPosition: C,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(ex.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(em.$, {
                                            variant: "primary",
                                            loading: y,
                                            onClick: ee ?? void 0,
                                            text: J,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : T && !ei
                      ? (eD = V
                            ? (0, n.jsx)(ed.Pw, {
                                  className: e_.dd,
                                  isSelected: () => !1,
                                  options: ew,
                                  placeholder: B.intl.string(B.t.drVw4T),
                                  renderOptionLabel: eI,
                                  renderOptionValue: eQ,
                                  select: Y,
                                  serialize: (e) => {
                                      switch (e) {
                                          case eT.fO.DESKTOP:
                                              return B.intl.string(B.t["QXc01+"]);
                                          case eT.fO.CONSOLE:
                                              return B.intl.string(B.t["8lAfuB"]);
                                          default:
                                              return (0, ef.xb)(e);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : $.enabled &&
                                (G === eS.UA.ENROLLED || G === eS.UA.INCOMPLETE) &&
                                $.enabledQuestStates.has(G)
                              ? eC && (0, d.t)({ quest: l }) && !(0, d.g5)(l)
                                  ? (0, n.jsx)("div", { className: e_.x6, children: ek })
                                  : (0, n.jsx)("div", {
                                        className: e_.x6,
                                        children: (0, n.jsxs)(ex.e, {
                                            direction: "horizontal",
                                            fullWidth: !0,
                                            wrap: !1,
                                            children: [
                                                eC && (L || (0, D.vA)(l)) ? ep : null,
                                                (0, n.jsx)(ey.A, {
                                                    quest: l,
                                                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: x,
                                                    analyticsCtxSourceQuestContent: E,
                                                    analyticsCtxQuestContentPosition: C,
                                                }),
                                            ],
                                        }),
                                    })
                              : (0, d.g5)(l) && !O && U !== r.X0.DESKTOP
                                ? g
                                    ? (0, n.jsx)("div", {
                                          className: e_.x6,
                                          children: (0, n.jsx)(em.$, {
                                              variant: "secondary",
                                              onClick: ee ?? void 0,
                                              text: J,
                                              fullWidth: !0,
                                          }),
                                      })
                                    : (0, n.jsx)(eh.$n, {
                                          "data-migration-pending": !0,
                                          color: eh.XD.PRIMARY,
                                          onClick: en,
                                          disabled: et,
                                          className: e_.x6,
                                          children: (0, n.jsxs)("div", {
                                              className: e_.tn,
                                              children: [v.render(), B.intl.string(B.t.nPThNb)],
                                          }),
                                      })
                                : L
                                  ? eC
                                      ? (0, n.jsx)("div", {
                                            className: e_.x6,
                                            children: (0, n.jsxs)(ex.e, {
                                                direction: "horizontal",
                                                fullWidth: !0,
                                                wrap: !1,
                                                children: [
                                                    ep,
                                                    (0, n.jsx)(em.$, {
                                                        variant: "primary",
                                                        onClick: ee ?? void 0,
                                                        text: J,
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, n.jsx)("div", {
                                            className: e_.x6,
                                            children: (0, n.jsx)(em.$, {
                                                variant: "primary",
                                                onClick: ee ?? void 0,
                                                text: J,
                                                fullWidth: !0,
                                            }),
                                        })
                                  : (0, D.vA)(l)
                                    ? eC
                                        ? (0, n.jsx)("div", {
                                              className: e_.x6,
                                              children: (0, n.jsxs)(ex.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      ep,
                                                      (0, n.jsx)(em.$, {
                                                          variant: "primary",
                                                          icon: (0, m.Oz)(l),
                                                          onClick: ee ?? void 0,
                                                          text: J,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: e_.x6,
                                              children: (0, n.jsx)(em.$, {
                                                  variant: "primary",
                                                  icon: (0, m.Oz)(l),
                                                  onClick: ee ?? void 0,
                                                  text: J,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, n.jsx)("div", {
                                          className: e_.x6,
                                          children: eC
                                              ? ek
                                              : (0, n.jsx)(em.$, {
                                                    variant: "secondary",
                                                    disabled: !0,
                                                    text: B.intl.string(B.t["9KoPyB"]),
                                                    fullWidth: !0,
                                                }),
                                      }))
                      : T ||
                        (eD = S
                            ? (0, n.jsxs)(ex.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(em.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: B.intl.string(B.t.V293qn),
                                      }),
                                      (0, n.jsx)(em.$, {
                                          variant: "primary",
                                          onClick: () => (0, m.m6)(l, x, E),
                                          text: B.intl.string(B.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: e_.x6,
                                  children: (0, n.jsxs)(ex.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          eR,
                                          $.enabled &&
                                          G === eS.UA.UNENROLLED &&
                                          $.enabledQuestStates.has(eS.UA.UNENROLLED)
                                              ? (0, n.jsx)(ey.A, {
                                                    quest: l,
                                                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: x,
                                                    analyticsCtxSourceQuestContent: E,
                                                    analyticsCtxQuestContentPosition: C,
                                                })
                                              : (0, n.jsx)(em.$, {
                                                    loading: y,
                                                    variant: "primary",
                                                    onClick: ee ?? void 0,
                                                    text: J,
                                                    icon: (0, m.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eD =
                      $.enabled && G === eS.UA.EXPIRED && $.enabledQuestStates.has(G)
                          ? (0, n.jsx)(eb, {
                                quest: l,
                                sourceQuestContent: E,
                                formattedExpirationDate: p,
                                primaryCtaButton: (0, n.jsx)(ey.A, {
                                    quest: l,
                                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: x,
                                    analyticsCtxSourceQuestContent: E,
                                    analyticsCtxQuestContentPosition: C,
                                    analyticsCtxQuestContentRowIndex: j,
                                }),
                            })
                          : (0, n.jsx)(eb, { quest: l, sourceQuestContent: E, formattedExpirationDate: p })),
    null == eD)
        ? null
        : (0, n.jsxs)("div", {
              className: e_.kL,
              children: [
                  (0, n.jsx)("div", { className: e_.qz, children: eD }),
                  K &&
                      (0, n.jsx)("div", {
                          className: e_.qz,
                          children: (0, n.jsx)(ed.Pw, {
                              className: e_.xZ,
                              isSelected: (e) => {
                                  switch (U) {
                                      case r.X0.DESKTOP:
                                          return e === eT.fO.DESKTOP;
                                      case r.X0.CONSOLE:
                                          return e === eT.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: ew,
                              placeholder: B.intl.string(B.t.drVw4T),
                              renderOptionLabel: eI,
                              renderOptionValue: eQ,
                              select: Y,
                              serialize: (e) => {
                                  switch (e) {
                                      case eT.fO.DESKTOP:
                                          return B.intl.string(B.t["QXc01+"]);
                                      case eT.fO.CONSOLE:
                                          return B.intl.string(B.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
var eR = s(474491);
let eD = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function eM(e) {
    let {
            quest: t,
            questContent: s,
            isHovering: a,
            contentPosition: r,
            rowIndex: c,
            isVisibleInViewport: u,
            onReceiveErrorHints: d,
            sourceQuestContent: x,
        } = e,
        m = i.useRef(null),
        h = (0, o.Oq)(),
        C = (0, o.SD)(t),
        E = h && C,
        f = (0, el.mq)(t.config),
        v = (0, el.mH)(t.config),
        O = t.userStatus?.enrolledAt != null,
        { ref: p, scrollHeight: A } = (0, Q.wR)(),
        y = null != A && A > 104,
        { onAssetLoadComplete: S } = i.useContext(W.M),
        { expansionSpring: T } = (0, g.z)({ expansionSpring: +!!a, config: { ...K.N, clamp: !0 } }),
        _ = t.userStatus?.completedAt != null,
        w = t.userStatus?.claimedAt != null,
        I = (0, el.ks)(t.config),
        q = (0, el._Z)(t.config),
        { completedRatio: L, completedRatioDisplay: b } = (0, o.O9)(t),
        k = (0, ea.gj)(t, x, en.Ob.QuestHome, m),
        D = i.useMemo(
            () =>
                w && I
                    ? B.intl.format(B.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, n.jsxs)(
                                  ez,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, n.jsx)(ei.A, {
                                              shouldUseThemeColor: !0,
                                              className: eR.Kq,
                                              customSize: 14,
                                          }),
                                          q,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : w
                      ? (0, n.jsx)(ez, { questId: t.id, children: f })
                      : I
                        ? B.intl.format(B.t.ro1sze, {
                              balanceHook: () =>
                                  (0, n.jsxs)(
                                      ez,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(ei.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: eR.Kq,
                                                  customSize: 14,
                                              }),
                                              q,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : B.intl.format(B.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(ez, { questId: t.id, children: v }, t.id),
                          }),
            [f, w, v, t.id, q, I],
        ),
        M = i.useMemo(() => {
            if (null != k)
                return (0, n.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: eR.h_,
                    children: k,
                });
        }, [k]),
        z = (0, Z.bG)([es.A], () => es.A.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: eR.kL,
        ref: m,
        children: [
            (0, n.jsx)(er.A, { visible: E, glow: !0 }),
            (0, n.jsxs)(j.animated.div, {
                style: { maxHeight: T.to([0, 1], [104, (A ?? 0) + 12]) },
                className: eR.z,
                children: [
                    (0, n.jsx)(V, {
                        showPlaceholder: !u,
                        width: 80,
                        height: 80,
                        children: (0, n.jsxs)("div", {
                            className: eR.c6,
                            children: [
                                !w && _ && (0, n.jsx)("div", { className: eR.Nz }),
                                O
                                    ? (0, n.jsxs)("div", {
                                          className: eR.Tr,
                                          children: [
                                              _ &&
                                                  (0, n.jsx)(ee.a, {
                                                      importData: eD,
                                                      className: eR.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !z,
                                                  }),
                                              (0, n.jsx)(eo.A, {
                                                  size: 76,
                                                  percentComplete: L,
                                                  overlayText: a && !(0, R.Ic)(t) ? b : void 0,
                                                  children: (0, n.jsx)(eu.A, {
                                                      quest: t,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: S,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: x,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(eu.A, {
                                          quest: t,
                                          autoplay: a,
                                          questContent: s,
                                          className: eR.eB,
                                          onLoadComplete: S,
                                          lazyLoad: !0,
                                          sourceQuestContent: x,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: p,
                        className: l()(eR.FS, { [eR.wq]: !y }),
                        children: [
                            (0, n.jsx)(et.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: eR.G$,
                                children: B.intl.format(B.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            C
                                ? (0, n.jsxs)("div", {
                                      className: eR.xv,
                                      children: [
                                          (0, n.jsx)(N.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: eR.wx,
                                              children: D,
                                          }),
                                          (0, n.jsx)(ec.e, { questId: t.id, canUseQuestOrbMultiplier: h }),
                                      ],
                                  })
                                : (0, n.jsx)(N.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: eR.wx,
                                      children: D,
                                  }),
                            M,
                        ],
                    }),
                    y &&
                        (0, n.jsx)(j.animated.div, {
                            style: { opacity: (0, H.a)(T.to([0, 1], [1, 0])) },
                            className: eR.hS,
                        }),
                ],
            }),
            (0, n.jsx)(ek, {
                quest: t,
                questContent: s,
                contentPosition: r,
                rowIndex: c,
                onReceiveErrorHints: d,
                sourceQuestContent: x,
            }),
        ],
    });
}
let ez = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        N.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: eR.wx, children: s },
        `${t}_reward`,
    );
});
var eP = s(355620);
function eU(e) {
    let {
            quest: t,
            className: s,
            questContent: a,
            contentPosition: r,
            rowIndex: x,
            impressionRef: j,
            sourceQuestContent: E,
        } = e,
        [f, v] = i.useState(!1),
        [N, g] = i.useState([]),
        O = (0, o.aC)(t),
        p = i.useMemo(() => (0, d.vv)(t), [t]),
        A = (0, c.u0)(),
        y = i.useCallback(() => {
            v(!0),
                A({
                    questId: t.id,
                    event: $.HAw.QUEST_HOVER,
                    properties: { content_id: a, content_name: (0, u.jO)(a), content_position: r, row_index: x },
                    sourceQuestContent: E,
                }),
                p && (0, m.l9)();
        }, [A, t.id, a, p, E, r, x]),
        S = i.useCallback(() => {
            v(!1),
                A({
                    questId: t.id,
                    event: $.HAw.QUEST_HOVER_OFF,
                    properties: { content_id: a, content_name: (0, u.jO)(a), content_position: r, row_index: x },
                    sourceQuestContent: E,
                });
        }, [A, t.id, a, E, r, x]),
        T = i.useContext(C.X),
        { visibilityElementRef: _, almostVisibleInViewport: w } = (function (e) {
            let [t, s] = i.useState(!1),
                n = i.useCallback((e) => {
                    e.isIntersecting && s(!0);
                }, []);
            return {
                visibilityElementRef: (0, h.B)(
                    n,
                    { root: e ?? null, threshold: 0, rootMargin: "900px 0px 900px 0px" },
                    !0,
                ),
                almostVisibleInViewport: t,
            };
        })(T?.current?.getScrollerNode() ?? null);
    return (0, n.jsxs)("div", {
        id: `quest-tile-${t.id}`,
        ref: (e) => {
            (j.current = e), (_.current = e);
        },
        className: l()(eP.k, s),
        onMouseEnter: y,
        onMouseLeave: S,
        onFocus: y,
        onBlur: S,
        children: [
            (0, n.jsx)(J, {
                quest: t,
                isHovering: f,
                errorHints: N,
                warningHints: O,
                isVisibleInViewport: w,
                sourceQuestContent: E,
            }),
            (0, n.jsx)(eM, {
                quest: t,
                questContent: a,
                isHovering: f,
                contentPosition: r,
                rowIndex: x,
                onReceiveErrorHints: g,
                isVisibleInViewport: w,
                sourceQuestContent: E,
            }),
        ],
    });
}
let eH = i.memo(function (e) {
    return (0, n.jsx)(x.R, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === r.uF.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, n.jsx)(eU, { ...e, impressionRef: t }),
    });
});
