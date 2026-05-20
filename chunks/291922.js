s.d(t, { sT: () => eW, Ay: () => eK });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(17928),
    o = s(859703),
    c = s(507107),
    u = s(31587),
    d = s(18437),
    x = s(590202),
    m = s(792620),
    h = s(73473),
    C = s(617986),
    j = s(203879),
    E = s(321503);
s(134528), s(947204);
var f = s(873174),
    v = s(990078),
    N = s(462887),
    g = s(717421),
    O = s(695366),
    A = s(885574),
    p = s(661531),
    y = s(834730),
    S = s(123292),
    T = s(331322),
    I = s(508770),
    _ = s(939249),
    w = s(782134),
    Q = s(365199),
    q = s(820081),
    b = s(765671),
    L = s(736653),
    R = s(814925),
    k = s(178540),
    D = s(710969),
    M = s(988436),
    U = s(918338),
    P = s(270045),
    z = s(57718),
    H = s(398025),
    W = s(516226),
    F = s(181672);
function K(e) {
    let { width: t, height: s, showPlaceholder: i, children: a, className: r } = e;
    return i ? (0, n.jsx)("div", { className: l()(F.s, r), style: { width: t, height: s } }) : a;
}
var V = s(419367),
    $ = s(652215),
    G = s(375708),
    B = s(368774);
function X(e) {
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
        j = (0, g.z)({ opacity: +!!C, height: C ? c : 0, config: V.N }),
        E = 0 === m ? O.E : A.m,
        v = p.A.unsafe_rawColors.RED_345.css,
        N = 0 === m ? v : l ? p.A.colors.TEXT_DEFAULT : p.A.colors.WHITE;
    return (0, n.jsx)(f.animated.div, {
        style: { height: j.height, opacity: (0, H.a)(j.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: B.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: B.M5,
                    children: [
                        (0, n.jsx)(E, { size: "xs", color: N }),
                        (0, n.jsx)(y.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, n.jsx)(S.Q, {
                        text: G.intl.string(G.t["yKJi+/"]),
                        onClick: () => (0, M.i)({ quest: t, errorHints: s, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function Y(e) {
    let {
            quest: t,
            isHovering: s,
            errorHints: a,
            isInFeaturedSection: l,
            warningHints: r,
            isVisibleInViewport: o,
            onCtxMenuClose: d,
            onCtxMenuOpen: h,
            onCtxMenuSelect: j,
            sourceQuestContent: E,
        } = e,
        f = (0, k.O)((e) => e.getErrorHints(t.id)),
        g = f.length > 0 ? f : a,
        O = (0, m.IO)(t),
        A = (0, L.Ay)(),
        S = ((0, N.M)(A) ? $.NJ8.DARK : $.NJ8.LIGHT) === $.NJ8.DARK,
        b = (0, u.LS)(t),
        M = t.userStatus?.claimedAt != null,
        H = (0, u.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        F = t.userStatus?.enrolledAt != null,
        V = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: Y } = i.useContext(W.M),
        J = S ? "text-muted" : "always-white",
        Z = i.useCallback(() => {
            O &&
                (0, C.d5)({
                    quest: t,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: E,
                    sourceQuestContentCTA: x.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [O, t, E]),
        ee = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: B.kL,
        children: [
            (0, n.jsx)("div", {
                className: B.IC,
                children: (0, n.jsx)(U.A, {
                    quest: t,
                    isInteracting: s,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: B.l1,
                    imageClassName: B.c8,
                }),
            }),
            (0, n.jsx)("div", { className: B.Lw }),
            (0, n.jsxs)("div", {
                className: B.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: B.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: B.mY,
                                children: [
                                    (l || t.preview) &&
                                        (0, n.jsxs)(T.B, {
                                            className: B.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                l &&
                                                    !(0, D.Ic)(t) &&
                                                    (0, n.jsx)(I.E, {
                                                        type: { text: G.intl.string(G.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, n.jsx)(I.E, {
                                                        type: { text: G.intl.string(G.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    O &&
                                        (0, n.jsx)(v.m, {
                                            text: V
                                                ? G.intl.string(G.t.YsCuyF)
                                                : F
                                                  ? G.intl.string(G.t["74KqrR"])
                                                  : (0, D.Ic)(t)
                                                    ? G.intl.string(G.t.I6JG46)
                                                    : G.intl.string(G.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(_.D, {
                                                className: B.iI,
                                                "aria-label": G.intl.string(G.t.RscU7I),
                                                onClick: Z,
                                                children: (0, n.jsx)(w.u, { color: "currentColor", className: B.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(P.C, {
                                        onOpen: h,
                                        onClose: d,
                                        onSelect: j,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: E,
                                        returnRef: ee,
                                        children: (e) =>
                                            (0, n.jsx)(_.D, {
                                                ...e,
                                                innerRef: ee,
                                                className: B.iI,
                                                "aria-label": G.intl.string(G.t.DEoVWZ),
                                                children: (0, n.jsx)(Q.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: B.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(K, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: B.Iu,
                                children: (0, n.jsx)(z.Ay, {
                                    className: B.Iu,
                                    logotypeClassName: B.ND,
                                    quest: t,
                                    separatorSpacing: z.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Y,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: B.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: B.O,
                                        children: [
                                            (0, n.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                color: J,
                                                children: G.intl.string(G.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(R.A, {
                                                className: B.w$,
                                                size: 16,
                                                color: p.A.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(q.B, {
                                                    color: p.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    b || M
                                        ? null
                                        : (0, n.jsx)(y.E, {
                                              variant: "text-sm/medium",
                                              color: J,
                                              children: G.intl.format(G.t["7D8r4F"], { expiryDate: H }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(X, { quest: t, errorHints: g, warningHints: r, isDarkTheme: S, sourceQuestContent: E }),
                ],
            }),
        ],
    });
}
var J = s(604121),
    Z = s(534514),
    ee = s(775602),
    et = s(409626),
    es = s(106799),
    en = s(287809),
    ei = s(838077),
    ea = s(646917),
    el = s(576761),
    er = s(801365),
    eo = s(895253),
    ec = s(453384),
    eu = s(442734),
    ed = s(646764),
    ex = s(843282),
    em = s(825484),
    eh = s(821609),
    eC = s(862482),
    ej = s(31300),
    eE = s(687966),
    ef = s(414499),
    ev = s(403362);
let eN = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eg = s(112142),
    eO = s(971649),
    eA = s(651892),
    ep = s(901406),
    ey = s(814793),
    eS = s(371912),
    eT = s(368715),
    eI = s(79545),
    e_ = s(190107),
    ew = s(562296);
let eQ = [
    {
        value: e_.fO.DESKTOP,
        get label() {
            return G.intl.string(G.t["QXc01+"]);
        },
    },
    {
        value: e_.fO.CONSOLE,
        get label() {
            return G.intl.string(G.t["8lAfuB"]);
        },
    },
];
function eq(e) {
    let t,
        s,
        { value: i } = e;
    switch (i) {
        case e_.fO.DESKTOP:
            (s = (0, n.jsx)(ej.k, {})), (t = G.intl.string(G.t["QXc01+"]));
            break;
        case e_.fO.CONSOLE:
            (s = (0, n.jsx)(eE._, {})), (t = G.intl.string(G.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: ew.FL, children: [s, t] });
}
function eb(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case e_.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: ew.FL,
                children: [(0, n.jsx)(ej.k, {}), G.intl.string(G.t.g6Dr44)],
            });
        case e_.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: ew.FL,
                children: [(0, n.jsx)(eE._, {}), G.intl.string(G.t.iyNbj5)],
            });
        default:
            return (0, ev.xb)(e[0].value);
    }
}
function eL(e) {
    let { quest: t, sourceQuestContent: s } = e,
        n = (0, eO.go)();
    return {
        externalLinkCta: (0, eA.wr)(t),
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
function eR(e) {
    let { quest: t, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = e,
        { externalLinkCta: r, handleOpenExternalLink: o } = eL({ quest: t, sourceQuestContent: s });
    return (0, n.jsxs)(em.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(eh.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, n.jsx)(eh.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function ek(e) {
    let { quest: t, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = e,
        { externalLinkCta: l, handleOpenExternalLink: r } = eL({ quest: t, sourceQuestContent: s }),
        o = G.intl.format(G.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(em.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(eh.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, n.jsx)(eh.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
        ],
    });
}
function eD(e) {
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
        N = (0, r.bG)([ee.A], () => ee.A.useReducedMotion),
        g = (0, eS.Xf)({ useReducedMotion: N }),
        O = (0, d.Ut)(),
        A = (0, u.RR)({ quest: l }),
        p = (0, u.Vn)(l),
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
        R = (0, m.IO)(l),
        M = (0, m.K$)(l),
        U = (0, m.Cr)(l),
        P = (0, u.fc)(l),
        [z, H, W] = (0, u.Qo)(l, P),
        F = b && L === u.F3.ACCEPTED,
        K = F && z === c.X0.SELECT,
        V = F && !K && H.length > 1,
        $ = eg.t.useConfig({ location: e_.rE.QUEST_HOME_DESKTOP }),
        B = (0, eI.Pd)(l),
        X = (0, k.O)((e) => e.clearErrorHints),
        Y = i.useCallback(
            (e) => {
                W(e), e === e_.fO.DESKTOP && (j([]), X(l.id));
            },
            [W, j, X, l.id],
        ),
        { text: J, onClick: Z } = (0, eS._c)({
            progressState: L,
            quest: l,
            questContent: h,
            questContentPosition: E,
            questContentRowIndex: f,
            inGiftInventory: !0,
            isVideoQuest: R,
            inGameQuest: U,
            sourceQuestContent: v,
        }),
        { startingConsoleQuest: et, startConsoleQuest: es } = (0, u.Wj)({
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
        en = l.userStatus?.claimedAt != null,
        { launchInGameActivity: ea } = (0, u.zW)(l),
        el = (0, ei.NA)({ quest: l, shortText: !0 }),
        er = (0, u.do)({ quest: l, content: h, ctaContent: x.Cy.OPEN_GAME_LINK, sourceQuestContent: v }),
        eo = (0, eA.wr)(l),
        { handleOpenExternalLink: ec } = eL({ quest: l, sourceQuestContent: v }),
        eu =
            ((t = e_.rE.QUEST_HOME_DESKTOP),
            (s = eN.useConfig({ location: t }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, m.g5)(l)),
        ed = eu ? ec : er,
        ej = (0, n.jsx)(eh.$, { variant: "secondary", text: eo, onClick: ed }),
        eO = (0, n.jsx)(eh.$, { variant: "secondary", text: eo, onClick: ed, fullWidth: !0 }),
        ep = (0, n.jsx)(eh.$, { variant: "secondary", text: eo, onClick: er }),
        eD = null;
    return ($.enabled && B === eI.UA.EXPIRED_CLAIMABLE && $.enabledQuestStates.has(B)
        ? (eD = (0, n.jsx)("div", {
              className: ew.x6,
              children: (0, n.jsx)(eT.A, {
                  quest: l,
                  surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: h,
                  analyticsCtxSourceQuestContent: v,
                  analyticsCtxQuestContentPosition: E,
                  analyticsCtxQuestContentRowIndex: f,
              }),
          }))
        : q && Q
          ? (eD = (0, n.jsx)("div", {
                className: ew.x6,
                children: (0, n.jsx)(eh.$, {
                    variant: "primary",
                    loading: S,
                    onClick: Z ?? void 0,
                    text: J,
                    fullWidth: !0,
                }),
            }))
          : $.enabled && (B === eI.UA.COMPLETED || B === eI.UA.CLAIMED) && $.enabledQuestStates.has(B)
            ? (eD = R
                  ? (0, n.jsx)(eR, {
                        quest: l,
                        sourceQuestContent: v,
                        onClick: Z,
                        text: J,
                        primaryCtaButton: (0, n.jsx)(eT.A, {
                            quest: l,
                            surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: h,
                            analyticsCtxSourceQuestContent: v,
                            analyticsCtxQuestContentPosition: E,
                            analyticsCtxQuestContentRowIndex: f,
                        }),
                    })
                  : (0, ey.vA)(l)
                    ? (0, n.jsxs)(em.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(eh.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(e_.Li.CLOUD_GAMING_ACTIVITY) ? ef.h : eE._,
                                  text: el,
                                  onClick: () => {
                                      ea();
                                  },
                              }),
                              (0, n.jsx)(eT.A, {
                                  quest: l,
                                  surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: h,
                                  analyticsCtxSourceQuestContent: v,
                                  analyticsCtxQuestContentPosition: E,
                                  analyticsCtxQuestContentRowIndex: f,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: ew.x6,
                          children: (0, n.jsx)(eT.A, {
                              quest: l,
                              surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: h,
                              analyticsCtxSourceQuestContent: v,
                              analyticsCtxQuestContentPosition: E,
                              analyticsCtxQuestContentRowIndex: f,
                          }),
                      }))
            : w
              ? (eD = R
                    ? (0, n.jsx)(eR, { quest: l, sourceQuestContent: v, onClick: Z, text: J })
                    : (0, ey.vA)(l)
                      ? (0, n.jsxs)(em.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(eh.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(e_.Li.CLOUD_GAMING_ACTIVITY) ? ef.h : eE._,
                                    text: el,
                                    onClick: () => {
                                        ea();
                                    },
                                }),
                                (0, n.jsx)(eh.$, { variant: "primary", onClick: Z ?? void 0, text: J }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: ew.x6,
                            children: (0, n.jsx)(eh.$, {
                                variant: "primary",
                                onClick: Z ?? void 0,
                                text: J,
                                fullWidth: !0,
                            }),
                        }))
              : b
                ? M
                    ? (eD = (0, n.jsx)("div", {
                          className: ew.x6,
                          children:
                              $.enabled &&
                              (B === eI.UA.UNENROLLED || B === eI.UA.ENROLLED || B === eI.UA.INCOMPLETE) &&
                              $.enabledQuestStates.has(B)
                                  ? (0, n.jsxs)(em.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            B === eI.UA.UNENROLLED ? ep : eu ? ej : null,
                                            (0, n.jsx)(eT.A, {
                                                quest: l,
                                                surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: h,
                                                analyticsCtxSourceQuestContent: v,
                                                analyticsCtxQuestContentPosition: E,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(em.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(eh.$, {
                                            variant: "primary",
                                            loading: T,
                                            onClick: Z ?? void 0,
                                            text: J,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : _ && !en
                      ? (eD = K
                            ? (0, n.jsx)(ex.Pw, {
                                  className: ew.dd,
                                  isSelected: () => !1,
                                  options: eQ,
                                  placeholder: G.intl.string(G.t.drVw4T),
                                  renderOptionLabel: eq,
                                  renderOptionValue: eb,
                                  select: Y,
                                  serialize: (e) => {
                                      switch (e) {
                                          case e_.fO.DESKTOP:
                                              return G.intl.string(G.t["QXc01+"]);
                                          case e_.fO.CONSOLE:
                                              return G.intl.string(G.t["8lAfuB"]);
                                          default:
                                              return (0, ev.xb)(e);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : $.enabled &&
                                (B === eI.UA.ENROLLED || B === eI.UA.INCOMPLETE) &&
                                $.enabledQuestStates.has(B)
                              ? eu && (0, m.t)({ quest: l }) && !(0, m.g5)(l)
                                  ? (0, n.jsx)("div", { className: ew.x6, children: eO })
                                  : (0, n.jsx)("div", {
                                        className: ew.x6,
                                        children: (0, n.jsxs)(em.e, {
                                            direction: "horizontal",
                                            fullWidth: !0,
                                            wrap: !1,
                                            children: [
                                                eu && (R || (0, ey.vA)(l)) ? ej : null,
                                                (0, n.jsx)(eT.A, {
                                                    quest: l,
                                                    surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: h,
                                                    analyticsCtxSourceQuestContent: v,
                                                    analyticsCtxQuestContentPosition: E,
                                                }),
                                            ],
                                        }),
                                    })
                              : (0, m.g5)(l) && !p && z !== c.X0.DESKTOP
                                ? A
                                    ? (0, n.jsx)("div", {
                                          className: ew.x6,
                                          children: (0, n.jsx)(eh.$, {
                                              variant: "secondary",
                                              onClick: Z ?? void 0,
                                              text: J,
                                              fullWidth: !0,
                                          }),
                                      })
                                    : (0, n.jsx)(eC.$n, {
                                          "data-migration-pending": !0,
                                          color: eC.XD.PRIMARY,
                                          onClick: es,
                                          disabled: et,
                                          className: ew.x6,
                                          children: (0, n.jsxs)("div", {
                                              className: ew.tn,
                                              children: [g.render(), G.intl.string(G.t.nPThNb)],
                                          }),
                                      })
                                : R
                                  ? eu
                                      ? (0, n.jsx)("div", {
                                            className: ew.x6,
                                            children: (0, n.jsxs)(em.e, {
                                                direction: "horizontal",
                                                fullWidth: !0,
                                                wrap: !1,
                                                children: [
                                                    ej,
                                                    (0, n.jsx)(eh.$, {
                                                        variant: "primary",
                                                        onClick: Z ?? void 0,
                                                        text: J,
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, n.jsx)("div", {
                                            className: ew.x6,
                                            children: (0, n.jsx)(eh.$, {
                                                variant: "primary",
                                                onClick: Z ?? void 0,
                                                text: J,
                                                fullWidth: !0,
                                            }),
                                        })
                                  : (0, ey.vA)(l)
                                    ? eu
                                        ? (0, n.jsx)("div", {
                                              className: ew.x6,
                                              children: (0, n.jsxs)(em.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      ej,
                                                      (0, n.jsx)(eh.$, {
                                                          variant: "primary",
                                                          icon: (0, C.Oz)(l),
                                                          onClick: Z ?? void 0,
                                                          text: J,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: ew.x6,
                                              children: (0, n.jsx)(eh.$, {
                                                  variant: "primary",
                                                  icon: (0, C.Oz)(l),
                                                  onClick: Z ?? void 0,
                                                  text: J,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, n.jsx)("div", {
                                          className: ew.x6,
                                          children: eu
                                              ? eO
                                              : (0, n.jsx)(eh.$, {
                                                    variant: "secondary",
                                                    disabled: !0,
                                                    text: G.intl.string(G.t["9KoPyB"]),
                                                    fullWidth: !0,
                                                }),
                                      }))
                      : _ ||
                        (eD = I
                            ? (0, n.jsxs)(em.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(eh.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: G.intl.string(G.t.V293qn),
                                      }),
                                      (0, n.jsx)(eh.$, {
                                          variant: "primary",
                                          onClick: () => (0, C.m6)(l, h, v),
                                          text: G.intl.string(G.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: ew.x6,
                                  children: (0, n.jsxs)(em.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          ep,
                                          $.enabled &&
                                          B === eI.UA.UNENROLLED &&
                                          $.enabledQuestStates.has(eI.UA.UNENROLLED)
                                              ? (0, n.jsx)(eT.A, {
                                                    quest: l,
                                                    surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: h,
                                                    analyticsCtxSourceQuestContent: v,
                                                    analyticsCtxQuestContentPosition: E,
                                                })
                                              : (0, n.jsx)(eh.$, {
                                                    loading: T,
                                                    variant: "primary",
                                                    onClick: Z ?? void 0,
                                                    text: J,
                                                    icon: (0, C.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eD =
                      $.enabled && B === eI.UA.EXPIRED && $.enabledQuestStates.has(B)
                          ? (0, n.jsx)(ek, {
                                quest: l,
                                sourceQuestContent: v,
                                formattedExpirationDate: y,
                                primaryCtaButton: (0, n.jsx)(eT.A, {
                                    quest: l,
                                    surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: h,
                                    analyticsCtxSourceQuestContent: v,
                                    analyticsCtxQuestContentPosition: E,
                                    analyticsCtxQuestContentRowIndex: f,
                                }),
                            })
                          : (0, n.jsx)(ek, { quest: l, sourceQuestContent: v, formattedExpirationDate: y })),
    null == eD)
        ? null
        : (0, n.jsxs)("div", {
              className: ew.kL,
              children: [
                  (0, n.jsx)("div", { className: ew.qz, children: eD }),
                  V &&
                      (0, n.jsx)("div", {
                          className: ew.qz,
                          children: (0, n.jsx)(ex.Pw, {
                              className: ew.xZ,
                              isSelected: (e) => {
                                  switch (z) {
                                      case c.X0.DESKTOP:
                                          return e === e_.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return e === e_.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: eQ,
                              placeholder: G.intl.string(G.t.drVw4T),
                              renderOptionLabel: eq,
                              renderOptionValue: eb,
                              select: Y,
                              serialize: (e) => {
                                  switch (e) {
                                      case e_.fO.DESKTOP:
                                          return G.intl.string(G.t["QXc01+"]);
                                      case e_.fO.CONSOLE:
                                          return G.intl.string(G.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
var eM = s(474491);
let eU = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function eP(e) {
    let {
            quest: t,
            questContent: s,
            isHovering: a,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            onReceiveErrorHints: x,
            sourceQuestContent: m,
            questNameHeadingId: h,
        } = e,
        C = i.useRef(null),
        j = (0, ea.z)(),
        E = (0, u.SD)(t, j),
        v = j === el.MA.NITRO && E,
        N = (0, r.bG)([en.default], () => en.default.getCurrentUser()),
        O = (0, er.mq)(t.config, N),
        A = (0, er.mH)(t.config, N),
        p = t.userStatus?.enrolledAt != null,
        { ref: S, scrollHeight: T } = (0, b.wR)(),
        I = null != T && T > 104,
        { onAssetLoadComplete: _ } = i.useContext(W.M),
        { expansionSpring: w } = (0, g.z)({ expansionSpring: +!!a, config: { ...V.N, clamp: !0 } }),
        Q = t.userStatus?.completedAt != null,
        q = t.userStatus?.claimedAt != null,
        L = (0, er.ks)(t.config),
        R = t.userStatus?.orbQuantityClaimed ?? (0, er._Z)(t.config),
        k = (0, er.wo)(t.config, N),
        { completedRatio: M, completedRatioDisplay: U } = (0, u.O9)(t),
        P = (0, ei.A9)(t, m, e_.rE.QUEST_HOME_DESKTOP, s, et.Ob.QuestHome, C),
        z = i.useMemo(
            () =>
                q && L
                    ? (0, n.jsxs)(
                          ez,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(es.A, { shouldUseThemeColor: !0, className: eM.Kq, customSize: 14 }),
                                  G.intl.format(G.t["nLXlh+"], { orbAmount: R ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : q
                      ? (0, n.jsx)(ez, { questId: t.id, children: O })
                      : L
                        ? G.intl.format(G.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      ez,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(es.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: eM.Kq,
                                                  customSize: 14,
                                              }),
                                              G.intl.format(G.t["nLXlh+"], { orbAmount: k ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : G.intl.format(G.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(ez, { questId: t.id, children: A }, t.id),
                          }),
            [O, q, A, t.id, k, R, L],
        ),
        F = i.useMemo(() => {
            if (null != P)
                return (0, n.jsx)(y.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: eM.h_,
                    children: P,
                });
        }, [P]),
        $ = (0, r.bG)([ee.A], () => ee.A.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: eM.kL,
        ref: C,
        children: [
            (0, n.jsx)(eo.A, { visible: v, glow: !0 }),
            (0, n.jsxs)(f.animated.div, {
                style: { maxHeight: w.to([0, 1], [104, (T ?? 0) + 12]) },
                className: eM.z,
                children: [
                    (0, n.jsx)("div", {
                        className: eM.c6,
                        children: (0, n.jsxs)(K, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !q && Q && (0, n.jsx)("div", { className: eM.Nz }),
                                p
                                    ? (0, n.jsxs)("div", {
                                          className: eM.Tr,
                                          children: [
                                              Q &&
                                                  (0, n.jsx)(J.a, {
                                                      importData: eU,
                                                      className: eM.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !$,
                                                  }),
                                              (0, n.jsx)(ec.A, {
                                                  size: 76,
                                                  percentComplete: M,
                                                  overlayText: a && !(0, D.Ic)(t) ? U : void 0,
                                                  children: (0, n.jsx)(ed.A, {
                                                      quest: t,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: _,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: m,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(ed.A, {
                                          quest: t,
                                          autoplay: a,
                                          questContent: s,
                                          className: eM.eB,
                                          onLoadComplete: _,
                                          lazyLoad: !0,
                                          sourceQuestContent: m,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: S,
                        className: l()(eM.FS, { [eM.wq]: !I }),
                        children: [
                            (0, n.jsx)(Z.D, {
                                id: h,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: eM.G$,
                                children: G.intl.format(G.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            E
                                ? (0, n.jsxs)("div", {
                                      className: eM.xv,
                                      children: [
                                          (0, n.jsx)(y.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: eM.wx,
                                              children: z,
                                          }),
                                          (0, n.jsx)(eu.e, { questId: t.id, orbMultiplierEligibility: j }),
                                      ],
                                  })
                                : (0, n.jsx)(y.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: eM.wx,
                                      children: z,
                                  }),
                            F,
                        ],
                    }),
                    I &&
                        (0, n.jsx)(f.animated.div, {
                            style: { opacity: (0, H.a)(w.to([0, 1], [1, 0])) },
                            className: eM.hS,
                        }),
                ],
            }),
            (0, n.jsx)(eD, {
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
        y.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: eM.wx, children: s },
        `${t}_reward`,
    );
});
var eH = s(355620);
function eW(e) {
    return `quest-tile-${e}`;
}
function eF(e) {
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
        N = i.useId(),
        [g, O] = i.useState(!1),
        [A, p] = i.useState([]),
        y = (0, u.aC)(t),
        S = i.useMemo(() => (0, m.vv)(t), [t]),
        T = (0, d.u0)(),
        I = i.useCallback(() => {
            O(!0),
                T({
                    questId: t.id,
                    event: $.HAw.QUEST_HOVER,
                    properties: { content_id: r, content_name: (0, x.jO)(r), content_position: o, row_index: c },
                    sourceQuestContent: v,
                }),
                S && (0, C.l9)();
        }, [T, t.id, r, S, v, o, c]),
        _ = i.useCallback(() => {
            O(!1),
                T({
                    questId: t.id,
                    event: $.HAw.QUEST_HOVER_OFF,
                    properties: { content_id: r, content_name: (0, x.jO)(r), content_position: o, row_index: c },
                    sourceQuestContent: v,
                });
        }, [T, t.id, r, v, o, c]),
        w = i.useContext(E.X),
        { visibilityElementRef: Q, almostVisibleInViewport: q } = (function (e, t) {
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
        })(w?.current?.getScrollerNode() ?? null, h ?? !1),
        b = i.useCallback((e) => !!e.currentTarget.contains(e.relatedTarget), []);
    return (0, n.jsxs)("article", {
        id: eW(t.id),
        ref: (e) => {
            (f.current = e), (Q.current = e);
        },
        "aria-labelledby": N,
        className: l()(eH.k, s),
        onMouseEnter: I,
        onMouseLeave: _,
        onFocus: (e) => {
            b(e) || I();
        },
        onBlur: (e) => {
            b(e) || _();
        },
        children: [
            (0, n.jsx)(Y, {
                quest: t,
                isInFeaturedSection: a,
                isHovering: g,
                errorHints: A,
                warningHints: y,
                isVisibleInViewport: q,
                sourceQuestContent: v,
            }),
            (0, n.jsx)(eP, {
                quest: t,
                questContent: r,
                isHovering: g,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: p,
                isVisibleInViewport: q,
                sourceQuestContent: v,
                questNameHeadingId: N,
            }),
        ],
    });
}
let eK = i.memo(function (e) {
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
              children: (t) => (0, n.jsx)(eF, { ...e, quest: s, impressionRef: t }),
          });
});
