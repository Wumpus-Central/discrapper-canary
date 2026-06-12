s.d(e, { sT: () => tW, Ay: () => tK });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(17928),
    o = s(859703),
    c = s(507107),
    u = s(31587),
    d = s(73473),
    x = s(321503);
s(134528), s(947204);
var m = s(922139),
    h = s(990078),
    C = s(462887),
    j = s(717421),
    E = s(695366),
    f = s(885574),
    v = s(661531),
    N = s(834730),
    g = s(123292),
    O = s(331322),
    A = s(508770),
    p = s(939249),
    y = s(782134),
    T = s(365199),
    S = s(820081),
    I = s(765671),
    _ = s(736653),
    w = s(814925),
    Q = s(178540),
    q = s(590202),
    L = s(710969),
    b = s(792620),
    R = s(988436),
    k = s(918338),
    D = s(270045),
    M = s(57718),
    P = s(398025),
    U = s(617986),
    z = s(516226),
    H = s(720875),
    W = s(419367),
    F = s(652215),
    K = s(375708),
    V = s(368774);
function $(t) {
    let { quest: e, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: r } = t,
        { ref: o, height: c = 0 } = (0, I.Ay)([s]),
        d = e.userStatus?.completedAt != null,
        x = (0, u.Vn)(e),
        { type: h, hints: C } = i.useMemo(
            () =>
                d || x
                    ? { type: 2, hints: [] }
                    : s.length > 0
                      ? { type: 0, hints: s.map((t) => t.message) }
                      : a.length > 0
                        ? { type: 1, hints: a }
                        : { type: 2, hints: [] },
            [s, d, x, a],
        ),
        O = 2 !== h,
        A = (0, j.z)({ opacity: +!!O, height: O ? c : 0, config: W.N }),
        p = 0 === h ? E.E : f.m,
        y = v.A.unsafe_rawColors.RED_345.css,
        T = 0 === h ? y : l ? v.A.colors.TEXT_DEFAULT : v.A.colors.WHITE;
    return (0, n.jsx)(m.animated.div, {
        style: { height: A.height, opacity: (0, P.a)(A.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: V.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: V.M5,
                    children: [
                        (0, n.jsx)(p, { size: "xs", color: T }),
                        (0, n.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: C.at(0),
                        }),
                    ],
                }),
                0 === h &&
                    (0, n.jsx)(g.Q, {
                        text: K.intl.string(K.t["yKJi+/"]),
                        onClick: () => (0, R.i)({ quest: e, errorHints: s, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function B(t) {
    let {
            quest: e,
            isHovering: s,
            errorHints: a,
            isInFeaturedSection: l,
            warningHints: r,
            isVisibleInViewport: o,
            onCtxMenuClose: d,
            onCtxMenuOpen: x,
            onCtxMenuSelect: m,
            sourceQuestContent: j,
        } = t,
        E = (0, Q.O)((t) => t.getErrorHints(e.id)),
        f = E.length > 0 ? E : a,
        g = (0, b.IO)(e),
        I = (0, _.Ay)(),
        R = ((0, C.M)(I) ? F.NJ8.DARK : F.NJ8.LIGHT) === F.NJ8.DARK,
        P = (0, u.LS)(e),
        W = e.userStatus?.claimedAt != null,
        B = (0, u.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        G = e.userStatus?.enrolledAt != null,
        X = e.userStatus?.completedAt != null,
        { onAssetLoadComplete: Y } = i.useContext(z.M),
        J = R ? "text-muted" : "always-white",
        Z = i.useCallback(() => {
            g &&
                (0, U.d5)({
                    quest: e,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: j,
                    sourceQuestContentCTA: q.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [g, e, j]),
        tt = (0, u.BA)(e.id),
        te = !0 === l || tt,
        ts = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: V.kL,
        children: [
            (0, n.jsx)("div", {
                className: V.IC,
                children: (0, n.jsx)(k.A, {
                    quest: e,
                    isInteracting: s,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: V.l1,
                    imageClassName: V.c8,
                }),
            }),
            (0, n.jsx)("div", { className: V.Lw }),
            (0, n.jsxs)("div", {
                className: V.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: V.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: V.mY,
                                children: [
                                    (te || e.preview) &&
                                        (0, n.jsxs)(O.B, {
                                            className: V.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                te &&
                                                    !(0, L.Ic)(e) &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: K.intl.string(K.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                e.preview &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: K.intl.string(K.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    g &&
                                        (0, n.jsx)(h.m, {
                                            text: X
                                                ? K.intl.string(K.t.YsCuyF)
                                                : G
                                                  ? K.intl.string(K.t["74KqrR"])
                                                  : (0, L.Ic)(e)
                                                    ? K.intl.string(K.t.I6JG46)
                                                    : K.intl.string(K.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(p.D, {
                                                className: V.iI,
                                                "aria-label": K.intl.string(K.t.RscU7I),
                                                onClick: Z,
                                                children: (0, n.jsx)(y.u, { color: "currentColor", className: V.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(D.C, {
                                        onOpen: x,
                                        onClose: d,
                                        onSelect: m,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: e,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: j,
                                        returnRef: ts,
                                        children: (t) =>
                                            (0, n.jsx)(p.D, {
                                                ...t,
                                                innerRef: ts,
                                                className: V.iI,
                                                "aria-label": K.intl.string(K.t.DEoVWZ),
                                                children: (0, n.jsx)(T.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: V.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(H.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: V.Iu,
                                children: (0, n.jsx)(M.Ay, {
                                    className: V.Iu,
                                    logotypeClassName: V.ND,
                                    quest: e,
                                    separatorSpacing: M.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Y,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: V.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: V.O,
                                        children: [
                                            (0, n.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: J,
                                                children: K.intl.string(K.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(w.A, {
                                                className: V.w$,
                                                size: 16,
                                                color: v.A.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(S.B, {
                                                    color: v.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    e.config.cosponsorMetadata?.name ?? e.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    P || W
                                        ? null
                                        : (0, n.jsx)(N.E, {
                                              variant: "text-sm/medium",
                                              color: J,
                                              children: K.intl.format(K.t["7D8r4F"], { expiryDate: B }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)($, { quest: e, errorHints: f, warningHints: r, isDarkTheme: R, sourceQuestContent: j }),
                ],
            }),
        ],
    });
}
var G = s(604121),
    X = s(534514),
    Y = s(775602),
    J = s(409626),
    Z = s(106799),
    tt = s(287809),
    te = s(3738),
    ts = s(646917),
    tn = s(576761),
    ti = s(801365),
    ta = s(895253),
    tl = s(453384),
    tr = s(442734),
    to = s(646764),
    tc = s(843282),
    tu = s(825484),
    td = s(821609),
    tx = s(862482),
    tm = s(31300),
    th = s(687966),
    tC = s(414499),
    tj = s(403362);
let tE = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tf = s(112142),
    tv = s(18437),
    tN = s(971649),
    tg = s(651892),
    tO = s(901406),
    tA = s(814793),
    tp = s(371912),
    ty = s(192551),
    tT = s(79545),
    tS = s(190107),
    tI = s(562296);
let t_ = [
    {
        value: tS.fO.DESKTOP,
        get label() {
            return K.intl.string(K.t["QXc01+"]);
        },
    },
    {
        value: tS.fO.CONSOLE,
        get label() {
            return K.intl.string(K.t["8lAfuB"]);
        },
    },
];
function tw(t) {
    let e,
        s,
        { value: i } = t;
    switch (i) {
        case tS.fO.DESKTOP:
            (s = (0, n.jsx)(tm.k, {})), (e = K.intl.string(K.t["QXc01+"]));
            break;
        case tS.fO.CONSOLE:
            (s = (0, n.jsx)(th._, {})), (e = K.intl.string(K.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: tI.FL, children: [s, e] });
}
function tQ(t) {
    if (0 === t.length) return null;
    switch (t[0].value) {
        case tS.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: tI.FL,
                children: [(0, n.jsx)(tm.k, {}), K.intl.string(K.t.g6Dr44)],
            });
        case tS.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: tI.FL,
                children: [(0, n.jsx)(th._, {}), K.intl.string(K.t.iyNbj5)],
            });
        default:
            return (0, tj.xb)(t[0].value);
    }
}
function tq(t) {
    let { quest: e, sourceQuestContent: s } = t,
        n = (0, tN.go)();
    return {
        externalLinkCta: (0, tg.wr)(e),
        handleOpenExternalLink: i.useCallback(() => {
            (0, tO.pu)(e, {
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: q.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [e, s, n]),
    };
}
function tL(t) {
    let { quest: e, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = tq({ quest: e, sourceQuestContent: s });
    return (0, n.jsxs)(tu.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(td.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, n.jsx)(td.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function tb(t) {
    let { quest: e, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = t,
        { externalLinkCta: l, handleOpenExternalLink: r } = tq({ quest: e, sourceQuestContent: s }),
        o = K.intl.format(K.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(tu.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(td.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, n.jsx)(td.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
        ],
    });
}
function tR(t) {
    var e;
    let s,
        a,
        {
            quest: l,
            questContent: d,
            onReceiveErrorHints: x,
            contentPosition: m,
            rowIndex: h,
            sourceQuestContent: C,
        } = t,
        j = (0, r.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        E = (0, tp.Xf)({ useReducedMotion: j }),
        f = (0, tv.Ut)(),
        v = (0, u.RR)({ quest: l }),
        N = (0, u.Vn)(l),
        g = (0, u.S5)(l.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: O,
            isEnrolling: A,
            isQuestEnrollmentBlocked: p,
        } = (0, r.cf)([o.A], () => ({
            isClaiming: o.A.isClaimingReward(l.id) || o.A.isFetchingRewardCode(l.id),
            isEnrolling: o.A.isEnrolling(l.id),
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        })),
        y = l.userStatus?.enrolledAt != null,
        T = l.userStatus?.completedAt != null,
        S = T && l.userStatus?.claimedAt == null,
        I = (0, L.if)(l),
        _ = !(0, L.Ic)(l),
        w = (0, u.In)(l),
        R = (0, b.IO)(l),
        k = (0, b.K$)(l),
        D = (0, b.Cr)(l),
        M = (0, u.fc)(l),
        [P, z, H] = (0, u.Qo)(l, M),
        W = _ && w === u.F3.ACCEPTED,
        F = W && P === c.X0.SELECT,
        V = W && !F && z.length > 1,
        $ = tf.t.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        B = (0, tT.Pd)(l),
        G = (0, Q.O)((t) => t.clearErrorHints),
        X = i.useCallback(
            (t) => {
                H(t), t === tS.fO.DESKTOP && (x([]), G(l.id));
            },
            [H, x, G, l.id],
        ),
        { text: J, onClick: Z } = (0, tp._c)({
            progressState: w,
            quest: l,
            questContent: d,
            questContentPosition: m,
            questContentRowIndex: h,
            inGiftInventory: !0,
            isVideoQuest: R,
            inGameQuest: D,
            sourceQuestContent: C,
        }),
        { startingConsoleQuest: tt, startConsoleQuest: ts } = (0, u.Wj)({
            questId: l.id,
            beforeRequest: () => {
                E.startAnimation(),
                    f({
                        questId: l.id,
                        questContent: d,
                        questContentCTA: q.Cy.DEFIBRILLATOR,
                        questContentPosition: m,
                        questContentRowIndex: h,
                        sourceQuestContent: C,
                    });
            },
            afterRequest: (t) => {
                E.stopAnimation(), x(t);
            },
        }),
        tn = l.userStatus?.claimedAt != null,
        { launchInGameActivity: ti } = (0, u.zW)(l),
        ta = (0, te.NA)({ quest: l, shortText: !0 }),
        tl = (0, u.do)({ quest: l, content: d, ctaContent: q.Cy.OPEN_GAME_LINK, sourceQuestContent: C }),
        tr = (0, tg.wr)(l),
        { handleOpenExternalLink: to } = tq({ quest: l, sourceQuestContent: C }),
        tm =
            ((e = tS.rE.QUEST_HOME_DESKTOP),
            (s = tE.useConfig({ location: e }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, b.g5)(l)),
        tN = tm ? to : tl,
        tO = (0, b.I6)(l),
        tR = (0, n.jsx)(td.$, { variant: "secondary", text: tr, onClick: tN }),
        tk = (0, n.jsx)(td.$, { variant: "secondary", text: tr, onClick: tN, fullWidth: !0 }),
        tD = (0, n.jsx)(td.$, { variant: "secondary", text: tr, onClick: tl }),
        tM = null;
    return ($.enabled && B === tT.UA.EXPIRED_CLAIMABLE && $.enabledQuestStates.has(B)
        ? (tM = (0, n.jsx)("div", {
              className: tI.x6,
              children: (0, n.jsx)(ty.A, {
                  quest: l,
                  surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: d,
                  analyticsCtxSourceQuestContent: C,
                  analyticsCtxQuestContentPosition: m,
                  analyticsCtxQuestContentRowIndex: h,
              }),
          }))
        : I && S
          ? (tM = (0, n.jsx)("div", {
                className: tI.x6,
                children: (0, n.jsx)(td.$, {
                    variant: "primary",
                    loading: O,
                    onClick: Z ?? void 0,
                    text: J,
                    fullWidth: !0,
                }),
            }))
          : $.enabled && (B === tT.UA.COMPLETED || B === tT.UA.CLAIMED) && $.enabledQuestStates.has(B)
            ? (tM = R
                  ? (0, n.jsx)(tL, {
                        quest: l,
                        sourceQuestContent: C,
                        onClick: Z,
                        text: J,
                        primaryCtaButton: (0, n.jsx)(ty.A, {
                            quest: l,
                            surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: d,
                            analyticsCtxSourceQuestContent: C,
                            analyticsCtxQuestContentPosition: m,
                            analyticsCtxQuestContentRowIndex: h,
                        }),
                    })
                  : (0, tA.vA)(l)
                    ? (0, n.jsxs)(tu.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(td.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(tS.Li.CLOUD_GAMING_ACTIVITY) ? tC.h : th._,
                                  text: ta,
                                  onClick: () => {
                                      ti();
                                  },
                              }),
                              (0, n.jsx)(ty.A, {
                                  quest: l,
                                  surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: d,
                                  analyticsCtxSourceQuestContent: C,
                                  analyticsCtxQuestContentPosition: m,
                                  analyticsCtxQuestContentRowIndex: h,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: tI.x6,
                          children: (0, n.jsx)(ty.A, {
                              quest: l,
                              surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: d,
                              analyticsCtxSourceQuestContent: C,
                              analyticsCtxQuestContentPosition: m,
                              analyticsCtxQuestContentRowIndex: h,
                          }),
                      }))
            : T
              ? (tM = R
                    ? (0, n.jsx)(tL, { quest: l, sourceQuestContent: C, onClick: Z, text: J })
                    : (0, tA.vA)(l)
                      ? (0, n.jsxs)(tu.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(td.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(tS.Li.CLOUD_GAMING_ACTIVITY) ? tC.h : th._,
                                    text: ta,
                                    onClick: () => {
                                        ti();
                                    },
                                }),
                                (0, n.jsx)(td.$, { variant: "primary", onClick: Z ?? void 0, text: J }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: tI.x6,
                            children: (0, n.jsx)(td.$, {
                                variant: "primary",
                                onClick: Z ?? void 0,
                                text: J,
                                fullWidth: !0,
                            }),
                        }))
              : _
                ? k
                    ? (tM = (0, n.jsx)("div", {
                          className: tI.x6,
                          children:
                              $.enabled &&
                              (B === tT.UA.UNENROLLED || B === tT.UA.ENROLLED || B === tT.UA.INCOMPLETE) &&
                              $.enabledQuestStates.has(B)
                                  ? (0, n.jsxs)(tu.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            B === tT.UA.UNENROLLED ? tD : tm ? tR : null,
                                            (0, n.jsx)(ty.A, {
                                                quest: l,
                                                surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: C,
                                                analyticsCtxQuestContentPosition: m,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(tu.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(td.$, {
                                            variant: "primary",
                                            loading: A,
                                            onClick: Z ?? void 0,
                                            text: J,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : y && !tn
                      ? (tM = F
                            ? (0, n.jsx)(tc.Pw, {
                                  className: tI.dd,
                                  isSelected: () => !1,
                                  options: t_,
                                  placeholder: K.intl.string(K.t.drVw4T),
                                  renderOptionLabel: tw,
                                  renderOptionValue: tQ,
                                  select: X,
                                  serialize: (t) => {
                                      switch (t) {
                                          case tS.fO.DESKTOP:
                                              return K.intl.string(K.t["QXc01+"]);
                                          case tS.fO.CONSOLE:
                                              return K.intl.string(K.t["8lAfuB"]);
                                          default:
                                              return (0, tj.xb)(t);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : tO
                              ? (0, n.jsx)("div", {
                                    className: tI.x6,
                                    children: (0, n.jsxs)(tu.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            tR,
                                            (0, n.jsx)(ty.A, {
                                                quest: l,
                                                surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: C,
                                                analyticsCtxQuestContentPosition: m,
                                                analyticsCtxQuestContentRowIndex: h,
                                            }),
                                        ],
                                    }),
                                })
                              : $.enabled &&
                                  (B === tT.UA.ENROLLED || B === tT.UA.INCOMPLETE) &&
                                  $.enabledQuestStates.has(B)
                                ? tm && (0, b.t)({ quest: l }) && !(0, b.g5)(l)
                                    ? (0, n.jsx)("div", { className: tI.x6, children: tk })
                                    : (0, n.jsx)("div", {
                                          className: tI.x6,
                                          children: (0, n.jsxs)(tu.e, {
                                              direction: "horizontal",
                                              fullWidth: !0,
                                              wrap: !1,
                                              children: [
                                                  tm && (R || (0, tA.vA)(l)) ? tR : null,
                                                  (0, n.jsx)(ty.A, {
                                                      quest: l,
                                                      surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                                      analyticsCtxQuestContent: d,
                                                      analyticsCtxSourceQuestContent: C,
                                                      analyticsCtxQuestContentPosition: m,
                                                  }),
                                              ],
                                          }),
                                      })
                                : (0, b.g5)(l) && !N && P !== c.X0.DESKTOP
                                  ? v
                                      ? (0, n.jsx)("div", {
                                            className: tI.x6,
                                            children: (0, n.jsx)(td.$, {
                                                variant: "secondary",
                                                onClick: Z ?? void 0,
                                                text: J,
                                                fullWidth: !0,
                                            }),
                                        })
                                      : (0, n.jsx)(tx.$n, {
                                            "data-migration-pending": !0,
                                            color: tx.XD.PRIMARY,
                                            onClick: ts,
                                            disabled: tt,
                                            className: tI.x6,
                                            children: (0, n.jsxs)("div", {
                                                className: tI.tn,
                                                children: [E.render(), K.intl.string(K.t.nPThNb)],
                                            }),
                                        })
                                  : R
                                    ? tm
                                        ? (0, n.jsx)("div", {
                                              className: tI.x6,
                                              children: (0, n.jsxs)(tu.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      tR,
                                                      (0, n.jsx)(td.$, {
                                                          variant: "primary",
                                                          onClick: Z ?? void 0,
                                                          text: J,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: tI.x6,
                                              children: (0, n.jsx)(td.$, {
                                                  variant: "primary",
                                                  onClick: Z ?? void 0,
                                                  text: J,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, tA.vA)(l)
                                      ? tm
                                          ? (0, n.jsx)("div", {
                                                className: tI.x6,
                                                children: (0, n.jsxs)(tu.e, {
                                                    direction: "horizontal",
                                                    fullWidth: !0,
                                                    wrap: !1,
                                                    children: [
                                                        tR,
                                                        (0, n.jsx)(td.$, {
                                                            variant: "primary",
                                                            icon: (0, U.Oz)(l),
                                                            onClick: Z ?? void 0,
                                                            text: J,
                                                        }),
                                                    ],
                                                }),
                                            })
                                          : (0, n.jsx)("div", {
                                                className: tI.x6,
                                                children: (0, n.jsx)(td.$, {
                                                    variant: "primary",
                                                    icon: (0, U.Oz)(l),
                                                    onClick: Z ?? void 0,
                                                    text: J,
                                                    fullWidth: !0,
                                                }),
                                            })
                                      : (0, n.jsx)("div", {
                                            className: tI.x6,
                                            children: tm
                                                ? tk
                                                : (0, n.jsx)(td.$, {
                                                      variant: "secondary",
                                                      disabled: !0,
                                                      text: K.intl.string(K.t["9KoPyB"]),
                                                      fullWidth: !0,
                                                  }),
                                        }))
                      : y ||
                        (tM = p
                            ? (0, n.jsxs)(tu.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(td.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: K.intl.string(K.t.V293qn),
                                      }),
                                      (0, n.jsx)(td.$, {
                                          variant: "primary",
                                          onClick: () => (0, U.m6)(l, d, C),
                                          text: K.intl.string(K.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: tI.x6,
                                  children: (0, n.jsxs)(tu.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          tD,
                                          $.enabled &&
                                          B === tT.UA.UNENROLLED &&
                                          $.enabledQuestStates.has(tT.UA.UNENROLLED)
                                              ? (0, n.jsx)(ty.A, {
                                                    quest: l,
                                                    surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: d,
                                                    analyticsCtxSourceQuestContent: C,
                                                    analyticsCtxQuestContentPosition: m,
                                                })
                                              : (0, n.jsx)(td.$, {
                                                    loading: A,
                                                    variant: "primary",
                                                    onClick: Z ?? void 0,
                                                    text: J,
                                                    icon: (0, U.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (tM =
                      $.enabled && B === tT.UA.EXPIRED && $.enabledQuestStates.has(B)
                          ? (0, n.jsx)(tb, {
                                quest: l,
                                sourceQuestContent: C,
                                formattedExpirationDate: g,
                                primaryCtaButton: (0, n.jsx)(ty.A, {
                                    quest: l,
                                    surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: d,
                                    analyticsCtxSourceQuestContent: C,
                                    analyticsCtxQuestContentPosition: m,
                                    analyticsCtxQuestContentRowIndex: h,
                                }),
                            })
                          : (0, n.jsx)(tb, { quest: l, sourceQuestContent: C, formattedExpirationDate: g })),
    null == tM)
        ? null
        : (0, n.jsxs)("div", {
              className: tI.kL,
              children: [
                  (0, n.jsx)("div", { className: tI.qz, children: tM }),
                  V &&
                      (0, n.jsx)("div", {
                          className: tI.qz,
                          children: (0, n.jsx)(tc.Pw, {
                              className: tI.xZ,
                              isSelected: (t) => {
                                  switch (P) {
                                      case c.X0.DESKTOP:
                                          return t === tS.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return t === tS.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: t_,
                              placeholder: K.intl.string(K.t.drVw4T),
                              renderOptionLabel: tw,
                              renderOptionValue: tQ,
                              select: X,
                              serialize: (t) => {
                                  switch (t) {
                                      case tS.fO.DESKTOP:
                                          return K.intl.string(K.t["QXc01+"]);
                                      case tS.fO.CONSOLE:
                                          return K.intl.string(K.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
var tk = s(474491);
let tD = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function tM(t) {
    let {
            quest: e,
            questContent: s,
            isHovering: a,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            onReceiveErrorHints: x,
            sourceQuestContent: h,
            questNameHeadingId: C,
        } = t,
        E = i.useRef(null),
        f = (0, ts.z)(),
        v = (0, u.SD)(e, f),
        g = f === tn.MA.NITRO && v,
        O = (0, r.bG)([tt.default], () => tt.default.getCurrentUser()),
        A = (0, ti.mq)(e.config, O),
        p = (0, ti.mH)(e.config, O),
        y = e.userStatus?.enrolledAt != null,
        { ref: T, scrollHeight: S } = (0, I.wR)(),
        _ = null != S && S > 104,
        { onAssetLoadComplete: w } = i.useContext(z.M),
        { expansionSpring: Q } = (0, j.z)({ expansionSpring: +!!a, config: { ...W.N, clamp: !0 } }),
        q = e.userStatus?.completedAt != null,
        R = e.userStatus?.claimedAt != null,
        k = (0, ti.ks)(e.config),
        D = e.userStatus?.orbQuantityClaimed ?? (0, ti._Z)(e.config),
        M = (0, ti.wo)(e.config, O),
        U = (0, b.I6)(e),
        { completedRatio: F, completedRatioDisplay: V } = (0, u.O9)(e, U),
        $ = (0, te.A9)(e, h, tS.rE.QUEST_HOME_DESKTOP, J.Ob.QuestHome, E),
        B = i.useMemo(
            () =>
                R && k
                    ? (0, n.jsxs)(
                          tP,
                          {
                              questId: e.id,
                              children: [
                                  (0, n.jsx)(Z.A, { shouldUseThemeColor: !0, className: tk.Kq, customSize: 14 }),
                                  K.intl.format(K.t["nLXlh+"], { orbAmount: D ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : R
                      ? (0, n.jsx)(tP, { questId: e.id, children: A })
                      : k
                        ? K.intl.format(K.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      tP,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, n.jsx)(Z.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: tk.Kq,
                                                  customSize: 14,
                                              }),
                                              K.intl.format(K.t["nLXlh+"], { orbAmount: M ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : K.intl.format(K.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(tP, { questId: e.id, children: p }, e.id),
                          }),
            [A, R, p, e.id, M, D, k],
        ),
        tc = i.useMemo(() => {
            if (null != $)
                return (0, n.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: tk.h_,
                    children: $,
                });
        }, [$]),
        tu = (0, r.bG)([Y.Ay], () => Y.Ay.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: tk.kL,
        ref: E,
        children: [
            (0, n.jsx)(ta.A, { visible: g, glow: !0 }),
            (0, n.jsxs)(m.animated.div, {
                style: { maxHeight: Q.to([0, 1], [104, (S ?? 0) + 12]) },
                className: tk.z,
                children: [
                    (0, n.jsx)("div", {
                        className: tk.c6,
                        children: (0, n.jsxs)(H.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !R && q && (0, n.jsx)("div", { className: tk.Nz }),
                                y
                                    ? (0, n.jsxs)("div", {
                                          className: tk.Tr,
                                          children: [
                                              q &&
                                                  (0, n.jsx)(G.a, {
                                                      importData: tD,
                                                      className: tk.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !tu,
                                                  }),
                                              (0, n.jsx)(tl.A, {
                                                  size: 76,
                                                  percentComplete: F,
                                                  overlayText: a && !(0, L.Ic)(e) ? V : void 0,
                                                  children: (0, n.jsx)(to.A, {
                                                      quest: e,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: w,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: h,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(to.A, {
                                          quest: e,
                                          autoplay: a,
                                          questContent: s,
                                          className: tk.eB,
                                          onLoadComplete: w,
                                          lazyLoad: !0,
                                          sourceQuestContent: h,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: T,
                        className: l()(tk.FS, { [tk.wq]: !_ }),
                        children: [
                            (0, n.jsx)(X.D, {
                                id: C,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: tk.G$,
                                children: K.intl.format(K.t.EAYZAr, { questName: e.config.messages.questName }),
                            }),
                            v
                                ? (0, n.jsxs)("div", {
                                      className: tk.xv,
                                      children: [
                                          (0, n.jsx)(N.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: tk.wx,
                                              children: B,
                                          }),
                                          (0, n.jsx)(tr.e, { questId: e.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, n.jsx)(N.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: tk.wx,
                                      children: B,
                                  }),
                            tc,
                        ],
                    }),
                    _ &&
                        (0, n.jsx)(m.animated.div, {
                            style: { opacity: (0, P.a)(Q.to([0, 1], [1, 0])) },
                            className: tk.hS,
                        }),
                ],
            }),
            (0, n.jsx)(tR, {
                quest: e,
                questContent: s,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: x,
                sourceQuestContent: h,
            }),
        ],
    });
}
let tP = i.memo(function (t) {
    let { questId: e, children: s } = t;
    return (0, n.jsx)(
        N.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: tk.wx, children: s },
        `${e}_reward`,
    );
});
var tU = s(688755),
    tz = s(831368),
    tH = s(355620);
function tW(t) {
    return `quest-tile-${t}`;
}
function tF(t) {
    let {
            quest: e,
            className: s,
            isInFeaturedSection: a,
            questContent: r,
            contentPosition: o,
            rowIndex: c,
            eagerLoadAssets: d,
            impressionRef: m,
            sourceQuestContent: h,
        } = t,
        C = i.useId(),
        [j, E] = i.useState(!1),
        [f, v] = i.useState([]),
        N = (0, u.aC)(e),
        {
            handleHoverStart: g,
            handleHoverEnd: O,
            isEventWithinParent: A,
        } = (0, tU.B)({ quest: e, questContent: r, contentPosition: o, rowIndex: c, sourceQuestContent: h }),
        p = i.useContext(x.X),
        { visibilityElementRef: y, almostVisibleInViewport: T } = (0, tz.I)(
            p?.current?.getScrollerNode() ?? null,
            d ?? !1,
        );
    return (0, n.jsxs)("article", {
        id: tW(e.id),
        ref: (t) => {
            (m.current = t), (y.current = t);
        },
        "aria-labelledby": C,
        className: l()(tH.k, s),
        onMouseEnter: () => {
            E(!0), g();
        },
        onMouseLeave: () => {
            E(!1), O();
        },
        onFocus: (t) => {
            A(t) || (E(!0), g());
        },
        onBlur: (t) => {
            A(t) || (E(!1), O());
        },
        children: [
            (0, n.jsx)(B, {
                quest: e,
                isInFeaturedSection: a,
                isHovering: j,
                errorHints: f,
                warningHints: N,
                isVisibleInViewport: T,
                sourceQuestContent: h,
            }),
            (0, n.jsx)(tM, {
                quest: e,
                questContent: r,
                isHovering: j,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: v,
                isVisibleInViewport: T,
                sourceQuestContent: h,
                questNameHeadingId: C,
            }),
        ],
    });
}
let tK = i.memo(function (t) {
    let e = (0, r.bG)([o.A], () => (null != t.questId ? o.A.getQuest(t.questId) : void 0), [t.questId]),
        s = i.useMemo(() => (null != t.quest ? t.quest : e), [e, t.quest]);
    return null == s
        ? null
        : (0, n.jsx)(d.R, {
              questOrQuests: s,
              questContent: t.questContent,
              questContentPosition: t.contentPosition,
              questContentRowIndex: t.rowIndex,
              trackGuildAndChannelMetadata: t.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: t.sourceQuestContent,
              children: (e) => (0, n.jsx)(tF, { ...t, quest: s, impressionRef: e }),
          });
});
