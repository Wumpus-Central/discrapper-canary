s.d(t, { sT: () => eU, Ay: () => eF });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(17928),
    o = s(859703),
    c = s(507107),
    u = s(124366),
    d = s(18437),
    x = s(590202),
    m = s(792620),
    h = s(73473),
    C = s(617986),
    j = s(203879),
    E = s(321503);
s(134528), s(947204);
var f = s(873174),
    v = s(702841),
    N = s(990078),
    g = s(462887),
    O = s(834730),
    p = s(717421),
    A = s(695366),
    y = s(885574),
    S = s(661531),
    T = s(123292),
    I = s(331322),
    _ = s(939249),
    w = s(782134),
    Q = s(365199),
    q = s(820081),
    b = s(765671),
    L = s(736653),
    k = s(814925),
    R = s(178540),
    D = s(710969),
    M = s(814793),
    z = s(988436),
    P = s(918338),
    U = s(270045),
    H = s(57718),
    F = s(398025),
    W = s(516226),
    V = s(181672);
function K(e) {
    let { width: t, height: s, showPlaceholder: i, children: a, className: r } = e;
    return i ? (0, n.jsx)("div", { className: l()(V.s, r), style: { width: t, height: s } }) : a;
}
var $ = s(419367),
    G = s(652215),
    B = s(375708),
    X = s(368774);
function Y(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: l()(X.Io, { [X.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(O.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: X.Xi,
            children: t,
        }),
    });
}
function J(e) {
    let { quest: t, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: r } = e,
        { ref: o, height: c = 0 } = (0, b.Ay)([s]),
        d = t.userStatus?.completedAt != null,
        x = (0, u.Vn)(t),
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
        j = (0, p.z)({ opacity: +!!C, height: C ? c : 0, config: $.N }),
        E = 0 === m ? A.E : y.m,
        v = S.A.unsafe_rawColors.RED_345.css,
        N = 0 === m ? v : l ? S.A.colors.TEXT_DEFAULT : S.A.colors.WHITE;
    return (0, n.jsx)(f.animated.div, {
        style: { height: j.height, opacity: (0, F.a)(j.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: X.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: X.M5,
                    children: [
                        (0, n.jsx)(E, { size: "xs", color: N }),
                        (0, n.jsx)(O.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, n.jsx)(T.Q, {
                        text: B.intl.string(B.t["yKJi+/"]),
                        onClick: () => (0, z.i)({ quest: t, errorHints: s, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function Z(e) {
    let {
            quest: t,
            isHovering: s,
            errorHints: a,
            isInFeaturedSection: l,
            warningHints: r,
            isVisibleInViewport: d,
            onCtxMenuClose: h,
            onCtxMenuOpen: j,
            onCtxMenuSelect: E,
            sourceQuestContent: f,
        } = e,
        p = (0, R.O)((e) => e.getErrorHints(t.id)),
        A = p.length > 0 ? p : a,
        y = (0, m.IO)(t),
        T = (0, L.Ay)(),
        b = ((0, g.M)(T) ? G.NJ8.DARK : G.NJ8.LIGHT) === G.NJ8.DARK,
        z = (0, u.LS)(t),
        F = t.userStatus?.claimedAt != null,
        V = (0, u.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        $ = t.userStatus?.enrolledAt != null,
        Z = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: ee } = i.useContext(W.M),
        et = b ? "text-muted" : "always-white",
        es = i.useCallback(() => {
            y &&
                (0, C.d5)({
                    quest: t,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: f,
                    sourceQuestContentCTA: x.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [y, t, f]),
        en = (0, v.bG)([o.A], () => o.A.getQuestHomeHero()),
        ei = i.useMemo(() => l || (null != en && (0, M.I0)(en, t.id)), [l, en, t.id]);
    return (0, n.jsxs)("div", {
        className: X.kL,
        children: [
            (0, n.jsx)("div", {
                className: X.IC,
                children: (0, n.jsx)(P.A, {
                    quest: t,
                    isInteracting: s,
                    hideAssets: !d,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: X.l1,
                    imageClassName: X.c8,
                }),
            }),
            (0, n.jsx)("div", { className: X.Lw }),
            (0, n.jsxs)("div", {
                className: X.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: X.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: X.mY,
                                children: [
                                    (ei || t.preview) &&
                                        (0, n.jsxs)(I.B, {
                                            className: X.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ei &&
                                                    !(0, D.Ic)(t) &&
                                                    (0, n.jsx)(Y, { children: B.intl.string(B.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, n.jsx)(Y, {
                                                        variant: "brand",
                                                        children: B.intl.string(B.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    y &&
                                        (0, n.jsx)(N.m, {
                                            text: Z
                                                ? B.intl.string(B.t.YsCuyF)
                                                : $
                                                  ? B.intl.string(B.t["74KqrR"])
                                                  : (0, D.Ic)(t)
                                                    ? B.intl.string(B.t.I6JG46)
                                                    : B.intl.string(B.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(_.D, {
                                                className: X.iI,
                                                "aria-label": B.intl.string(B.t.RscU7I),
                                                onClick: es,
                                                children: (0, n.jsx)(w.u, { color: "currentColor", className: X.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(U.C, {
                                        onOpen: j,
                                        onClose: h,
                                        onSelect: E,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: f,
                                        children: (e) =>
                                            (0, n.jsx)(_.D, {
                                                ...e,
                                                className: X.iI,
                                                "aria-label": B.intl.string(B.t.DEoVWZ),
                                                children: (0, n.jsx)(Q.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: X.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(K, {
                                showPlaceholder: !d,
                                width: 100,
                                height: 30,
                                className: X.Iu,
                                children: (0, n.jsx)(H.Ay, {
                                    className: X.Iu,
                                    logotypeClassName: X.ND,
                                    quest: t,
                                    separatorSpacing: H.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: ee,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: X.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: X.O,
                                        children: [
                                            (0, n.jsx)(O.E, {
                                                variant: "text-sm/medium",
                                                color: et,
                                                children: B.intl.string(B.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(k.A, {
                                                className: X.w$,
                                                size: 16,
                                                color: S.A.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(q.B, {
                                                    color: S.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(O.E, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    z || F
                                        ? null
                                        : (0, n.jsx)(O.E, {
                                              variant: "text-sm/medium",
                                              color: et,
                                              children: B.intl.format(B.t["7D8r4F"], { expiryDate: V }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(J, { quest: t, errorHints: A, warningHints: r, isDarkTheme: b, sourceQuestContent: f }),
                ],
            }),
        ],
    });
}
var ee = s(604121),
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
    ey = s(368715),
    eS = s(79545),
    eT = s(190107),
    eI = s(562296);
let e_ = [
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
function ew(e) {
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
    return (0, n.jsxs)("div", { className: eI.FL, children: [s, t] });
}
function eQ(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case eT.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: eI.FL,
                children: [(0, n.jsx)(eC.k, {}), B.intl.string(B.t.g6Dr44)],
            });
        case eT.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: eI.FL,
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
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: x.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [t, s, n]),
    };
}
function eb(e) {
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
function eL(e) {
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
            questContent: h,
            onReceiveErrorHints: j,
            contentPosition: E,
            rowIndex: f,
            sourceQuestContent: v,
        } = e,
        N = (0, r.bG)([es.A], () => es.A.useReducedMotion),
        g = (0, eA.Xf)({ useReducedMotion: N }),
        O = (0, d.Ut)(),
        p = (0, u.RR)({ quest: l }),
        A = (0, u.Vn)(l),
        y = (0, u.S5)(l.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: S,
            isEnrolling: T,
            isQuestEnrollmentBlocked: I,
        } = (0, r.cf)([o.A], () => ({
            isClaiming: o.A.isClaimingReward(l.id) || o.A.isFetchingRewardCode(l.id),
            isEnrolling: o.A.isEnrolling(l.id),
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        })),
        _ = l.userStatus?.enrolledAt != null,
        w = l.userStatus?.completedAt != null,
        Q = w && l.userStatus?.claimedAt == null,
        q = (0, D.if)(l),
        b = !(0, D.Ic)(l),
        L = (0, u.In)(l),
        k = (0, m.IO)(l),
        z = (0, m.K$)(l),
        P = (0, m.Cr)(l),
        U = (0, u.fc)(l),
        [H, F, W] = (0, u.Qo)(l, U),
        V = b && L === u.F3.ACCEPTED,
        K = V && H === c.X0.SELECT,
        $ = V && !K && F.length > 1,
        G = eN.t.useConfig({ location: eT.rE.QUEST_HOME_DESKTOP }),
        X = (0, eS.Pd)(l),
        Y = (0, R.O)((e) => e.clearErrorHints),
        J = i.useCallback(
            (e) => {
                W(e), e === eT.fO.DESKTOP && (j([]), Y(l.id));
            },
            [W, j, Y, l.id],
        ),
        { text: Z, onClick: ee } = (0, eA._c)({
            progressState: L,
            quest: l,
            questContent: h,
            questContentPosition: E,
            questContentRowIndex: f,
            inGiftInventory: !0,
            isVideoQuest: k,
            inGameQuest: P,
            sourceQuestContent: v,
        }),
        { startingConsoleQuest: et, startConsoleQuest: en } = (0, u.Wj)({
            questId: l.id,
            beforeRequest: () => {
                g.startAnimation(),
                    O({
                        questId: l.id,
                        questContent: h,
                        questContentCTA: x.Cy.DEFIBRILLATOR,
                        questContentPosition: E,
                        questContentRowIndex: f,
                        sourceQuestContent: v,
                    });
            },
            afterRequest: (e) => {
                g.stopAnimation(), j(e);
            },
        }),
        ei = l.userStatus?.claimedAt != null,
        { launchInGameActivity: el } = (0, u.zW)(l),
        er = (0, ea.NA)({ quest: l, shortText: !0 }),
        eo = (0, u.do)({ quest: l, content: h, ctaContent: x.Cy.OPEN_GAME_LINK, sourceQuestContent: v }),
        ec = (0, eO.wr)(l),
        { handleOpenExternalLink: eu } = eq({ quest: l, sourceQuestContent: v }),
        eC =
            ((t = eT.rE.QUEST_HOME_DESKTOP),
            (s = ev.useConfig({ location: t }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, m.g5)(l)),
        eg = eC ? eu : eo,
        ep = (0, n.jsx)(em.$, { variant: "secondary", text: ec, onClick: eg }),
        ek = (0, n.jsx)(em.$, { variant: "secondary", text: ec, onClick: eg, fullWidth: !0 }),
        eR = (0, n.jsx)(em.$, { variant: "secondary", text: ec, onClick: eo }),
        eD = null;
    return (G.enabled && X === eS.UA.EXPIRED_CLAIMABLE && G.enabledQuestStates.has(X)
        ? (eD = (0, n.jsx)("div", {
              className: eI.x6,
              children: (0, n.jsx)(ey.A, {
                  quest: l,
                  surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: h,
                  analyticsCtxSourceQuestContent: v,
                  analyticsCtxQuestContentPosition: E,
                  analyticsCtxQuestContentRowIndex: f,
              }),
          }))
        : q && Q
          ? (eD = (0, n.jsx)("div", {
                className: eI.x6,
                children: (0, n.jsx)(em.$, {
                    variant: "primary",
                    loading: S,
                    onClick: ee ?? void 0,
                    text: Z,
                    fullWidth: !0,
                }),
            }))
          : G.enabled && (X === eS.UA.COMPLETED || X === eS.UA.CLAIMED) && G.enabledQuestStates.has(X)
            ? (eD = k
                  ? (0, n.jsx)(eb, {
                        quest: l,
                        sourceQuestContent: v,
                        onClick: ee,
                        text: Z,
                        primaryCtaButton: (0, n.jsx)(ey.A, {
                            quest: l,
                            surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: h,
                            analyticsCtxSourceQuestContent: v,
                            analyticsCtxQuestContentPosition: E,
                            analyticsCtxQuestContentRowIndex: f,
                        }),
                    })
                  : (0, M.vA)(l)
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
                                  analyticsCtxQuestContent: h,
                                  analyticsCtxSourceQuestContent: v,
                                  analyticsCtxQuestContentPosition: E,
                                  analyticsCtxQuestContentRowIndex: f,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: eI.x6,
                          children: (0, n.jsx)(ey.A, {
                              quest: l,
                              surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: h,
                              analyticsCtxSourceQuestContent: v,
                              analyticsCtxQuestContentPosition: E,
                              analyticsCtxQuestContentRowIndex: f,
                          }),
                      }))
            : w
              ? (eD = k
                    ? (0, n.jsx)(eb, { quest: l, sourceQuestContent: v, onClick: ee, text: Z })
                    : (0, M.vA)(l)
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
                                (0, n.jsx)(em.$, { variant: "primary", onClick: ee ?? void 0, text: Z }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: eI.x6,
                            children: (0, n.jsx)(em.$, {
                                variant: "primary",
                                onClick: ee ?? void 0,
                                text: Z,
                                fullWidth: !0,
                            }),
                        }))
              : b
                ? z
                    ? (eD = (0, n.jsx)("div", {
                          className: eI.x6,
                          children:
                              G.enabled &&
                              (X === eS.UA.UNENROLLED || X === eS.UA.ENROLLED || X === eS.UA.INCOMPLETE) &&
                              G.enabledQuestStates.has(X)
                                  ? (0, n.jsxs)(ex.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            X === eS.UA.UNENROLLED ? eR : eC ? ep : null,
                                            (0, n.jsx)(ey.A, {
                                                quest: l,
                                                surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: h,
                                                analyticsCtxSourceQuestContent: v,
                                                analyticsCtxQuestContentPosition: E,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(ex.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(em.$, {
                                            variant: "primary",
                                            loading: T,
                                            onClick: ee ?? void 0,
                                            text: Z,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : _ && !ei
                      ? (eD = K
                            ? (0, n.jsx)(ed.Pw, {
                                  className: eI.dd,
                                  isSelected: () => !1,
                                  options: e_,
                                  placeholder: B.intl.string(B.t.drVw4T),
                                  renderOptionLabel: ew,
                                  renderOptionValue: eQ,
                                  select: J,
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
                            : G.enabled &&
                                (X === eS.UA.ENROLLED || X === eS.UA.INCOMPLETE) &&
                                G.enabledQuestStates.has(X)
                              ? eC && (0, m.t)({ quest: l }) && !(0, m.g5)(l)
                                  ? (0, n.jsx)("div", { className: eI.x6, children: ek })
                                  : (0, n.jsx)("div", {
                                        className: eI.x6,
                                        children: (0, n.jsxs)(ex.e, {
                                            direction: "horizontal",
                                            fullWidth: !0,
                                            wrap: !1,
                                            children: [
                                                eC && (k || (0, M.vA)(l)) ? ep : null,
                                                (0, n.jsx)(ey.A, {
                                                    quest: l,
                                                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: h,
                                                    analyticsCtxSourceQuestContent: v,
                                                    analyticsCtxQuestContentPosition: E,
                                                }),
                                            ],
                                        }),
                                    })
                              : (0, m.g5)(l) && !A && H !== c.X0.DESKTOP
                                ? p
                                    ? (0, n.jsx)("div", {
                                          className: eI.x6,
                                          children: (0, n.jsx)(em.$, {
                                              variant: "secondary",
                                              onClick: ee ?? void 0,
                                              text: Z,
                                              fullWidth: !0,
                                          }),
                                      })
                                    : (0, n.jsx)(eh.$n, {
                                          "data-migration-pending": !0,
                                          color: eh.XD.PRIMARY,
                                          onClick: en,
                                          disabled: et,
                                          className: eI.x6,
                                          children: (0, n.jsxs)("div", {
                                              className: eI.tn,
                                              children: [g.render(), B.intl.string(B.t.nPThNb)],
                                          }),
                                      })
                                : k
                                  ? eC
                                      ? (0, n.jsx)("div", {
                                            className: eI.x6,
                                            children: (0, n.jsxs)(ex.e, {
                                                direction: "horizontal",
                                                fullWidth: !0,
                                                wrap: !1,
                                                children: [
                                                    ep,
                                                    (0, n.jsx)(em.$, {
                                                        variant: "primary",
                                                        onClick: ee ?? void 0,
                                                        text: Z,
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, n.jsx)("div", {
                                            className: eI.x6,
                                            children: (0, n.jsx)(em.$, {
                                                variant: "primary",
                                                onClick: ee ?? void 0,
                                                text: Z,
                                                fullWidth: !0,
                                            }),
                                        })
                                  : (0, M.vA)(l)
                                    ? eC
                                        ? (0, n.jsx)("div", {
                                              className: eI.x6,
                                              children: (0, n.jsxs)(ex.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      ep,
                                                      (0, n.jsx)(em.$, {
                                                          variant: "primary",
                                                          icon: (0, C.Oz)(l),
                                                          onClick: ee ?? void 0,
                                                          text: Z,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: eI.x6,
                                              children: (0, n.jsx)(em.$, {
                                                  variant: "primary",
                                                  icon: (0, C.Oz)(l),
                                                  onClick: ee ?? void 0,
                                                  text: Z,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, n.jsx)("div", {
                                          className: eI.x6,
                                          children: eC
                                              ? ek
                                              : (0, n.jsx)(em.$, {
                                                    variant: "secondary",
                                                    disabled: !0,
                                                    text: B.intl.string(B.t["9KoPyB"]),
                                                    fullWidth: !0,
                                                }),
                                      }))
                      : _ ||
                        (eD = I
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
                                          onClick: () => (0, C.m6)(l, h, v),
                                          text: B.intl.string(B.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: eI.x6,
                                  children: (0, n.jsxs)(ex.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          eR,
                                          G.enabled &&
                                          X === eS.UA.UNENROLLED &&
                                          G.enabledQuestStates.has(eS.UA.UNENROLLED)
                                              ? (0, n.jsx)(ey.A, {
                                                    quest: l,
                                                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: h,
                                                    analyticsCtxSourceQuestContent: v,
                                                    analyticsCtxQuestContentPosition: E,
                                                })
                                              : (0, n.jsx)(em.$, {
                                                    loading: T,
                                                    variant: "primary",
                                                    onClick: ee ?? void 0,
                                                    text: Z,
                                                    icon: (0, C.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eD =
                      G.enabled && X === eS.UA.EXPIRED && G.enabledQuestStates.has(X)
                          ? (0, n.jsx)(eL, {
                                quest: l,
                                sourceQuestContent: v,
                                formattedExpirationDate: y,
                                primaryCtaButton: (0, n.jsx)(ey.A, {
                                    quest: l,
                                    surface: eS.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: h,
                                    analyticsCtxSourceQuestContent: v,
                                    analyticsCtxQuestContentPosition: E,
                                    analyticsCtxQuestContentRowIndex: f,
                                }),
                            })
                          : (0, n.jsx)(eL, { quest: l, sourceQuestContent: v, formattedExpirationDate: y })),
    null == eD)
        ? null
        : (0, n.jsxs)("div", {
              className: eI.kL,
              children: [
                  (0, n.jsx)("div", { className: eI.qz, children: eD }),
                  $ &&
                      (0, n.jsx)("div", {
                          className: eI.qz,
                          children: (0, n.jsx)(ed.Pw, {
                              className: eI.xZ,
                              isSelected: (e) => {
                                  switch (H) {
                                      case c.X0.DESKTOP:
                                          return e === eT.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return e === eT.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: e_,
                              placeholder: B.intl.string(B.t.drVw4T),
                              renderOptionLabel: ew,
                              renderOptionValue: eQ,
                              select: J,
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
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            onReceiveErrorHints: x,
            sourceQuestContent: m,
        } = e,
        h = i.useRef(null),
        C = (0, u.Oq)(),
        j = (0, u.SD)(t),
        E = C && j,
        v = (0, el.mq)(t.config),
        N = (0, el.mH)(t.config),
        g = t.userStatus?.enrolledAt != null,
        { ref: A, scrollHeight: y } = (0, b.wR)(),
        S = null != y && y > 104,
        { onAssetLoadComplete: T } = i.useContext(W.M),
        { expansionSpring: I } = (0, p.z)({ expansionSpring: +!!a, config: { ...$.N, clamp: !0 } }),
        _ = t.userStatus?.completedAt != null,
        w = t.userStatus?.claimedAt != null,
        Q = (0, el.ks)(t.config),
        q = (0, el._Z)(t.config),
        { completedRatio: L, completedRatioDisplay: k } = (0, u.O9)(t),
        R = (0, ea.gj)(t, m, en.Ob.QuestHome, h),
        M = i.useMemo(
            () =>
                w && Q
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
                      ? (0, n.jsx)(ez, { questId: t.id, children: v })
                      : Q
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
                              rewardWithArticleHook: () => (0, n.jsx)(ez, { questId: t.id, children: N }, t.id),
                          }),
            [v, w, N, t.id, q, Q],
        ),
        z = i.useMemo(() => {
            if (null != R)
                return (0, n.jsx)(O.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: eR.h_,
                    children: R,
                });
        }, [R]),
        P = (0, r.bG)([es.A], () => es.A.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: eR.kL,
        ref: h,
        children: [
            (0, n.jsx)(er.A, { visible: E, glow: !0 }),
            (0, n.jsxs)(f.animated.div, {
                style: { maxHeight: I.to([0, 1], [104, (y ?? 0) + 12]) },
                className: eR.z,
                children: [
                    (0, n.jsx)("div", {
                        className: eR.c6,
                        children: (0, n.jsxs)(K, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !w && _ && (0, n.jsx)("div", { className: eR.Nz }),
                                g
                                    ? (0, n.jsxs)("div", {
                                          className: eR.Tr,
                                          children: [
                                              _ &&
                                                  (0, n.jsx)(ee.a, {
                                                      importData: eD,
                                                      className: eR.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !P,
                                                  }),
                                              (0, n.jsx)(eo.A, {
                                                  size: 76,
                                                  percentComplete: L,
                                                  overlayText: a && !(0, D.Ic)(t) ? k : void 0,
                                                  children: (0, n.jsx)(eu.A, {
                                                      quest: t,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: T,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: m,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(eu.A, {
                                          quest: t,
                                          autoplay: a,
                                          questContent: s,
                                          className: eR.eB,
                                          onLoadComplete: T,
                                          lazyLoad: !0,
                                          sourceQuestContent: m,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: A,
                        className: l()(eR.FS, { [eR.wq]: !S }),
                        children: [
                            (0, n.jsx)(et.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: eR.G$,
                                children: B.intl.format(B.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            j
                                ? (0, n.jsxs)("div", {
                                      className: eR.xv,
                                      children: [
                                          (0, n.jsx)(O.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: eR.wx,
                                              children: M,
                                          }),
                                          (0, n.jsx)(ec.e, { questId: t.id, canUseQuestOrbMultiplier: C }),
                                      ],
                                  })
                                : (0, n.jsx)(O.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: eR.wx,
                                      children: M,
                                  }),
                            z,
                        ],
                    }),
                    S &&
                        (0, n.jsx)(f.animated.div, {
                            style: { opacity: (0, F.a)(I.to([0, 1], [1, 0])) },
                            className: eR.hS,
                        }),
                ],
            }),
            (0, n.jsx)(ek, {
                quest: t,
                questContent: s,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: x,
                sourceQuestContent: m,
            }),
        ],
    });
}
let ez = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        O.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: eR.wx, children: s },
        `${t}_reward`,
    );
});
var eP = s(355620);
function eU(e) {
    return `quest-tile-${e}`;
}
function eH(e) {
    let {
            quest: t,
            className: s,
            isInFeaturedSection: a,
            questContent: r,
            contentPosition: o,
            rowIndex: c,
            eagerLoadAssets: h,
            impressionRef: f,
            sourceQuestContent: v,
        } = e,
        [N, g] = i.useState(!1),
        [O, p] = i.useState([]),
        A = (0, u.aC)(t),
        y = i.useMemo(() => (0, m.vv)(t), [t]),
        S = (0, d.u0)(),
        T = i.useCallback(() => {
            g(!0),
                S({
                    questId: t.id,
                    event: G.HAw.QUEST_HOVER,
                    properties: { content_id: r, content_name: (0, x.jO)(r), content_position: o, row_index: c },
                    sourceQuestContent: v,
                }),
                y && (0, C.l9)();
        }, [S, t.id, r, y, v, o, c]),
        I = i.useCallback(() => {
            g(!1),
                S({
                    questId: t.id,
                    event: G.HAw.QUEST_HOVER_OFF,
                    properties: { content_id: r, content_name: (0, x.jO)(r), content_position: o, row_index: c },
                    sourceQuestContent: v,
                });
        }, [S, t.id, r, v, o, c]),
        _ = i.useContext(E.X),
        { visibilityElementRef: w, almostVisibleInViewport: Q } = (function (e, t) {
            let [s, n] = i.useState(t),
                a = i.useCallback((e) => {
                    e.isIntersecting && n(!0);
                }, []);
            return {
                visibilityElementRef: (0, j.B)(
                    a,
                    { root: e ?? null, threshold: 0, rootMargin: "900px 0px 900px 0px" },
                    !0,
                ),
                almostVisibleInViewport: s,
            };
        })(_?.current?.getScrollerNode() ?? null, h ?? !1);
    return (0, n.jsxs)("div", {
        id: eU(t.id),
        ref: (e) => {
            (f.current = e), (w.current = e);
        },
        className: l()(eP.k, s),
        onMouseEnter: T,
        onMouseLeave: I,
        onFocus: T,
        onBlur: I,
        children: [
            (0, n.jsx)(Z, {
                quest: t,
                isInFeaturedSection: a,
                isHovering: N,
                errorHints: O,
                warningHints: A,
                isVisibleInViewport: Q,
                sourceQuestContent: v,
            }),
            (0, n.jsx)(eM, {
                quest: t,
                questContent: r,
                isHovering: N,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: p,
                isVisibleInViewport: Q,
                sourceQuestContent: v,
            }),
        ],
    });
}
let eF = i.memo(function (e) {
    let t = (0, r.bG)([o.A], () => (null != e.questId ? o.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, n.jsx)(h.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, n.jsx)(eH, { ...e, quest: s, impressionRef: t }),
          });
});
