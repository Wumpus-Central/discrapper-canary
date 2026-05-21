s.d(e, { sT: () => tW, Ay: () => tK });
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
    C = s(73473),
    h = s(617986),
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
    T = s(123292),
    S = s(331322),
    I = s(508770),
    _ = s(939249),
    w = s(782134),
    Q = s(365199),
    q = s(820081),
    L = s(765671),
    b = s(736653),
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
function K(t) {
    let { width: e, height: s, showPlaceholder: i, children: a, className: r } = t;
    return i ? (0, n.jsx)("div", { className: l()(F.s, r), style: { width: e, height: s } }) : a;
}
var V = s(419367),
    $ = s(652215),
    G = s(375708),
    B = s(368774);
function X(t) {
    let { quest: e, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: r } = t,
        { ref: o, height: c = 0 } = (0, L.Ay)([s]),
        d = e.userStatus?.completedAt != null,
        x = (0, u.Vn)(e),
        { type: m, hints: C } = i.useMemo(
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
        h = 2 !== m,
        j = (0, g.z)({ opacity: +!!h, height: h ? c : 0, config: V.N }),
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
                            children: C.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, n.jsx)(T.Q, {
                        text: G.intl.string(G.t["yKJi+/"]),
                        onClick: () => (0, M.i)({ quest: e, errorHints: s, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function Y(t) {
    let {
            quest: e,
            isHovering: s,
            errorHints: a,
            isInFeaturedSection: l,
            warningHints: r,
            isVisibleInViewport: o,
            onCtxMenuClose: d,
            onCtxMenuOpen: C,
            onCtxMenuSelect: j,
            sourceQuestContent: E,
        } = t,
        f = (0, k.O)((t) => t.getErrorHints(e.id)),
        g = f.length > 0 ? f : a,
        O = (0, m.IO)(e),
        A = (0, b.Ay)(),
        T = ((0, N.M)(A) ? $.NJ8.DARK : $.NJ8.LIGHT) === $.NJ8.DARK,
        L = (0, u.LS)(e),
        M = e.userStatus?.claimedAt != null,
        H = (0, u.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        F = e.userStatus?.enrolledAt != null,
        V = e.userStatus?.completedAt != null,
        { onAssetLoadComplete: Y } = i.useContext(W.M),
        J = T ? "text-muted" : "always-white",
        Z = i.useCallback(() => {
            O &&
                (0, h.d5)({
                    quest: e,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: E,
                    sourceQuestContentCTA: x.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [O, e, E]),
        tt = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: B.kL,
        children: [
            (0, n.jsx)("div", {
                className: B.IC,
                children: (0, n.jsx)(U.A, {
                    quest: e,
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
                                    (l || e.preview) &&
                                        (0, n.jsxs)(S.B, {
                                            className: B.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                l &&
                                                    !(0, D.Ic)(e) &&
                                                    (0, n.jsx)(I.E, {
                                                        type: { text: G.intl.string(G.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                e.preview &&
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
                                                  : (0, D.Ic)(e)
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
                                        onOpen: C,
                                        onClose: d,
                                        onSelect: j,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: e,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: E,
                                        returnRef: tt,
                                        children: (t) =>
                                            (0, n.jsx)(_.D, {
                                                ...t,
                                                innerRef: tt,
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
                                    quest: e,
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
                                                    e.config.cosponsorMetadata?.name ?? e.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    L || M
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
                    (0, n.jsx)(X, { quest: e, errorHints: g, warningHints: r, isDarkTheme: T, sourceQuestContent: E }),
                ],
            }),
        ],
    });
}
var J = s(604121),
    Z = s(534514),
    tt = s(775602),
    te = s(409626),
    ts = s(106799),
    tn = s(287809),
    ti = s(838077),
    ta = s(646917),
    tl = s(576761),
    tr = s(801365),
    to = s(895253),
    tc = s(453384),
    tu = s(442734),
    td = s(646764),
    tx = s(843282),
    tm = s(825484),
    tC = s(821609),
    th = s(862482),
    tj = s(31300),
    tE = s(687966),
    tf = s(414499),
    tv = s(403362);
let tN = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tg = s(112142),
    tO = s(971649),
    tA = s(651892),
    tp = s(901406),
    ty = s(814793),
    tT = s(371912),
    tS = s(368715),
    tI = s(79545),
    t_ = s(190107),
    tw = s(562296);
let tQ = [
    {
        value: t_.fO.DESKTOP,
        get label() {
            return G.intl.string(G.t["QXc01+"]);
        },
    },
    {
        value: t_.fO.CONSOLE,
        get label() {
            return G.intl.string(G.t["8lAfuB"]);
        },
    },
];
function tq(t) {
    let e,
        s,
        { value: i } = t;
    switch (i) {
        case t_.fO.DESKTOP:
            (s = (0, n.jsx)(tj.k, {})), (e = G.intl.string(G.t["QXc01+"]));
            break;
        case t_.fO.CONSOLE:
            (s = (0, n.jsx)(tE._, {})), (e = G.intl.string(G.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: tw.FL, children: [s, e] });
}
function tL(t) {
    if (0 === t.length) return null;
    switch (t[0].value) {
        case t_.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: tw.FL,
                children: [(0, n.jsx)(tj.k, {}), G.intl.string(G.t.g6Dr44)],
            });
        case t_.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: tw.FL,
                children: [(0, n.jsx)(tE._, {}), G.intl.string(G.t.iyNbj5)],
            });
        default:
            return (0, tv.xb)(t[0].value);
    }
}
function tb(t) {
    let { quest: e, sourceQuestContent: s } = t,
        n = (0, tO.go)();
    return {
        externalLinkCta: (0, tA.wr)(e),
        handleOpenExternalLink: i.useCallback(() => {
            (0, tp.pu)(e, {
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: x.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [e, s, n]),
    };
}
function tR(t) {
    let { quest: e, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = tb({ quest: e, sourceQuestContent: s });
    return (0, n.jsxs)(tm.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(tC.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, n.jsx)(tC.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function tk(t) {
    let { quest: e, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = t,
        { externalLinkCta: l, handleOpenExternalLink: r } = tb({ quest: e, sourceQuestContent: s }),
        o = G.intl.format(G.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(tm.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(tC.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, n.jsx)(tC.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
        ],
    });
}
function tD(t) {
    var e;
    let s,
        a,
        {
            quest: l,
            questContent: C,
            onReceiveErrorHints: j,
            contentPosition: E,
            rowIndex: f,
            sourceQuestContent: v,
        } = t,
        N = (0, r.bG)([tt.A], () => tt.A.useReducedMotion),
        g = (0, tT.Xf)({ useReducedMotion: N }),
        O = (0, d.Ut)(),
        A = (0, u.RR)({ quest: l }),
        p = (0, u.Vn)(l),
        y = (0, u.S5)(l.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: T,
            isEnrolling: S,
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
        L = !(0, D.Ic)(l),
        b = (0, u.In)(l),
        R = (0, m.IO)(l),
        M = (0, m.K$)(l),
        U = (0, m.Cr)(l),
        P = (0, u.fc)(l),
        [z, H, W] = (0, u.Qo)(l, P),
        F = L && b === u.F3.ACCEPTED,
        K = F && z === c.X0.SELECT,
        V = F && !K && H.length > 1,
        $ = tg.t.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        B = (0, tI.Pd)(l),
        X = (0, k.O)((t) => t.clearErrorHints),
        Y = i.useCallback(
            (t) => {
                W(t), t === t_.fO.DESKTOP && (j([]), X(l.id));
            },
            [W, j, X, l.id],
        ),
        { text: J, onClick: Z } = (0, tT._c)({
            progressState: b,
            quest: l,
            questContent: C,
            questContentPosition: E,
            questContentRowIndex: f,
            inGiftInventory: !0,
            isVideoQuest: R,
            inGameQuest: U,
            sourceQuestContent: v,
        }),
        { startingConsoleQuest: te, startConsoleQuest: ts } = (0, u.Wj)({
            questId: l.id,
            beforeRequest: () => {
                g.startAnimation(),
                    O({
                        questId: l.id,
                        questContent: C,
                        questContentCTA: x.Cy.DEFIBRILLATOR,
                        questContentPosition: E,
                        questContentRowIndex: f,
                        sourceQuestContent: v,
                    });
            },
            afterRequest: (t) => {
                g.stopAnimation(), j(t);
            },
        }),
        tn = l.userStatus?.claimedAt != null,
        { launchInGameActivity: ta } = (0, u.zW)(l),
        tl = (0, ti.NA)({ quest: l, shortText: !0 }),
        tr = (0, u.do)({ quest: l, content: C, ctaContent: x.Cy.OPEN_GAME_LINK, sourceQuestContent: v }),
        to = (0, tA.wr)(l),
        { handleOpenExternalLink: tc } = tb({ quest: l, sourceQuestContent: v }),
        tu =
            ((e = t_.rE.QUEST_HOME_DESKTOP),
            (s = tN.useConfig({ location: e }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, m.g5)(l)),
        td = tu ? tc : tr,
        tj = (0, m.I6)(l),
        tO = (0, n.jsx)(tC.$, { variant: "secondary", text: to, onClick: td }),
        tp = (0, n.jsx)(tC.$, { variant: "secondary", text: to, onClick: td, fullWidth: !0 }),
        tD = (0, n.jsx)(tC.$, { variant: "secondary", text: to, onClick: tr }),
        tM = null;
    return ($.enabled && B === tI.UA.EXPIRED_CLAIMABLE && $.enabledQuestStates.has(B)
        ? (tM = (0, n.jsx)("div", {
              className: tw.x6,
              children: (0, n.jsx)(tS.A, {
                  quest: l,
                  surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: C,
                  analyticsCtxSourceQuestContent: v,
                  analyticsCtxQuestContentPosition: E,
                  analyticsCtxQuestContentRowIndex: f,
              }),
          }))
        : q && Q
          ? (tM = (0, n.jsx)("div", {
                className: tw.x6,
                children: (0, n.jsx)(tC.$, {
                    variant: "primary",
                    loading: T,
                    onClick: Z ?? void 0,
                    text: J,
                    fullWidth: !0,
                }),
            }))
          : $.enabled && (B === tI.UA.COMPLETED || B === tI.UA.CLAIMED) && $.enabledQuestStates.has(B)
            ? (tM = R
                  ? (0, n.jsx)(tR, {
                        quest: l,
                        sourceQuestContent: v,
                        onClick: Z,
                        text: J,
                        primaryCtaButton: (0, n.jsx)(tS.A, {
                            quest: l,
                            surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: C,
                            analyticsCtxSourceQuestContent: v,
                            analyticsCtxQuestContentPosition: E,
                            analyticsCtxQuestContentRowIndex: f,
                        }),
                    })
                  : (0, ty.vA)(l)
                    ? (0, n.jsxs)(tm.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(tC.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(t_.Li.CLOUD_GAMING_ACTIVITY) ? tf.h : tE._,
                                  text: tl,
                                  onClick: () => {
                                      ta();
                                  },
                              }),
                              (0, n.jsx)(tS.A, {
                                  quest: l,
                                  surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: C,
                                  analyticsCtxSourceQuestContent: v,
                                  analyticsCtxQuestContentPosition: E,
                                  analyticsCtxQuestContentRowIndex: f,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: tw.x6,
                          children: (0, n.jsx)(tS.A, {
                              quest: l,
                              surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: C,
                              analyticsCtxSourceQuestContent: v,
                              analyticsCtxQuestContentPosition: E,
                              analyticsCtxQuestContentRowIndex: f,
                          }),
                      }))
            : w
              ? (tM = R
                    ? (0, n.jsx)(tR, { quest: l, sourceQuestContent: v, onClick: Z, text: J })
                    : (0, ty.vA)(l)
                      ? (0, n.jsxs)(tm.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(tC.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(t_.Li.CLOUD_GAMING_ACTIVITY) ? tf.h : tE._,
                                    text: tl,
                                    onClick: () => {
                                        ta();
                                    },
                                }),
                                (0, n.jsx)(tC.$, { variant: "primary", onClick: Z ?? void 0, text: J }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: tw.x6,
                            children: (0, n.jsx)(tC.$, {
                                variant: "primary",
                                onClick: Z ?? void 0,
                                text: J,
                                fullWidth: !0,
                            }),
                        }))
              : L
                ? M
                    ? (tM = (0, n.jsx)("div", {
                          className: tw.x6,
                          children:
                              $.enabled &&
                              (B === tI.UA.UNENROLLED || B === tI.UA.ENROLLED || B === tI.UA.INCOMPLETE) &&
                              $.enabledQuestStates.has(B)
                                  ? (0, n.jsxs)(tm.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            B === tI.UA.UNENROLLED ? tD : tu ? tO : null,
                                            (0, n.jsx)(tS.A, {
                                                quest: l,
                                                surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: C,
                                                analyticsCtxSourceQuestContent: v,
                                                analyticsCtxQuestContentPosition: E,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(tm.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(tC.$, {
                                            variant: "primary",
                                            loading: S,
                                            onClick: Z ?? void 0,
                                            text: J,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : _ && !tn
                      ? (tM = K
                            ? (0, n.jsx)(tx.Pw, {
                                  className: tw.dd,
                                  isSelected: () => !1,
                                  options: tQ,
                                  placeholder: G.intl.string(G.t.drVw4T),
                                  renderOptionLabel: tq,
                                  renderOptionValue: tL,
                                  select: Y,
                                  serialize: (t) => {
                                      switch (t) {
                                          case t_.fO.DESKTOP:
                                              return G.intl.string(G.t["QXc01+"]);
                                          case t_.fO.CONSOLE:
                                              return G.intl.string(G.t["8lAfuB"]);
                                          default:
                                              return (0, tv.xb)(t);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : tj
                              ? (0, n.jsx)("div", {
                                    className: tw.x6,
                                    children: (0, n.jsxs)(tm.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            tO,
                                            (0, n.jsx)(tS.A, {
                                                quest: l,
                                                surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: C,
                                                analyticsCtxSourceQuestContent: v,
                                                analyticsCtxQuestContentPosition: E,
                                                analyticsCtxQuestContentRowIndex: f,
                                            }),
                                        ],
                                    }),
                                })
                              : $.enabled &&
                                  (B === tI.UA.ENROLLED || B === tI.UA.INCOMPLETE) &&
                                  $.enabledQuestStates.has(B)
                                ? tu && (0, m.t)({ quest: l }) && !(0, m.g5)(l)
                                    ? (0, n.jsx)("div", { className: tw.x6, children: tp })
                                    : (0, n.jsx)("div", {
                                          className: tw.x6,
                                          children: (0, n.jsxs)(tm.e, {
                                              direction: "horizontal",
                                              fullWidth: !0,
                                              wrap: !1,
                                              children: [
                                                  tu && (R || (0, ty.vA)(l)) ? tO : null,
                                                  (0, n.jsx)(tS.A, {
                                                      quest: l,
                                                      surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                                                      analyticsCtxQuestContent: C,
                                                      analyticsCtxSourceQuestContent: v,
                                                      analyticsCtxQuestContentPosition: E,
                                                  }),
                                              ],
                                          }),
                                      })
                                : (0, m.g5)(l) && !p && z !== c.X0.DESKTOP
                                  ? A
                                      ? (0, n.jsx)("div", {
                                            className: tw.x6,
                                            children: (0, n.jsx)(tC.$, {
                                                variant: "secondary",
                                                onClick: Z ?? void 0,
                                                text: J,
                                                fullWidth: !0,
                                            }),
                                        })
                                      : (0, n.jsx)(th.$n, {
                                            "data-migration-pending": !0,
                                            color: th.XD.PRIMARY,
                                            onClick: ts,
                                            disabled: te,
                                            className: tw.x6,
                                            children: (0, n.jsxs)("div", {
                                                className: tw.tn,
                                                children: [g.render(), G.intl.string(G.t.nPThNb)],
                                            }),
                                        })
                                  : R
                                    ? tu
                                        ? (0, n.jsx)("div", {
                                              className: tw.x6,
                                              children: (0, n.jsxs)(tm.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      tO,
                                                      (0, n.jsx)(tC.$, {
                                                          variant: "primary",
                                                          onClick: Z ?? void 0,
                                                          text: J,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: tw.x6,
                                              children: (0, n.jsx)(tC.$, {
                                                  variant: "primary",
                                                  onClick: Z ?? void 0,
                                                  text: J,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, ty.vA)(l)
                                      ? tu
                                          ? (0, n.jsx)("div", {
                                                className: tw.x6,
                                                children: (0, n.jsxs)(tm.e, {
                                                    direction: "horizontal",
                                                    fullWidth: !0,
                                                    wrap: !1,
                                                    children: [
                                                        tO,
                                                        (0, n.jsx)(tC.$, {
                                                            variant: "primary",
                                                            icon: (0, h.Oz)(l),
                                                            onClick: Z ?? void 0,
                                                            text: J,
                                                        }),
                                                    ],
                                                }),
                                            })
                                          : (0, n.jsx)("div", {
                                                className: tw.x6,
                                                children: (0, n.jsx)(tC.$, {
                                                    variant: "primary",
                                                    icon: (0, h.Oz)(l),
                                                    onClick: Z ?? void 0,
                                                    text: J,
                                                    fullWidth: !0,
                                                }),
                                            })
                                      : (0, n.jsx)("div", {
                                            className: tw.x6,
                                            children: tu
                                                ? tp
                                                : (0, n.jsx)(tC.$, {
                                                      variant: "secondary",
                                                      disabled: !0,
                                                      text: G.intl.string(G.t["9KoPyB"]),
                                                      fullWidth: !0,
                                                  }),
                                        }))
                      : _ ||
                        (tM = I
                            ? (0, n.jsxs)(tm.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(tC.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: G.intl.string(G.t.V293qn),
                                      }),
                                      (0, n.jsx)(tC.$, {
                                          variant: "primary",
                                          onClick: () => (0, h.m6)(l, C, v),
                                          text: G.intl.string(G.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: tw.x6,
                                  children: (0, n.jsxs)(tm.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          tD,
                                          $.enabled &&
                                          B === tI.UA.UNENROLLED &&
                                          $.enabledQuestStates.has(tI.UA.UNENROLLED)
                                              ? (0, n.jsx)(tS.A, {
                                                    quest: l,
                                                    surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: C,
                                                    analyticsCtxSourceQuestContent: v,
                                                    analyticsCtxQuestContentPosition: E,
                                                })
                                              : (0, n.jsx)(tC.$, {
                                                    loading: S,
                                                    variant: "primary",
                                                    onClick: Z ?? void 0,
                                                    text: J,
                                                    icon: (0, h.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (tM =
                      $.enabled && B === tI.UA.EXPIRED && $.enabledQuestStates.has(B)
                          ? (0, n.jsx)(tk, {
                                quest: l,
                                sourceQuestContent: v,
                                formattedExpirationDate: y,
                                primaryCtaButton: (0, n.jsx)(tS.A, {
                                    quest: l,
                                    surface: tI.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: C,
                                    analyticsCtxSourceQuestContent: v,
                                    analyticsCtxQuestContentPosition: E,
                                    analyticsCtxQuestContentRowIndex: f,
                                }),
                            })
                          : (0, n.jsx)(tk, { quest: l, sourceQuestContent: v, formattedExpirationDate: y })),
    null == tM)
        ? null
        : (0, n.jsxs)("div", {
              className: tw.kL,
              children: [
                  (0, n.jsx)("div", { className: tw.qz, children: tM }),
                  V &&
                      (0, n.jsx)("div", {
                          className: tw.qz,
                          children: (0, n.jsx)(tx.Pw, {
                              className: tw.xZ,
                              isSelected: (t) => {
                                  switch (z) {
                                      case c.X0.DESKTOP:
                                          return t === t_.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return t === t_.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: tQ,
                              placeholder: G.intl.string(G.t.drVw4T),
                              renderOptionLabel: tq,
                              renderOptionValue: tL,
                              select: Y,
                              serialize: (t) => {
                                  switch (t) {
                                      case t_.fO.DESKTOP:
                                          return G.intl.string(G.t["QXc01+"]);
                                      case t_.fO.CONSOLE:
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
var tM = s(474491);
let tU = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function tP(t) {
    let {
            quest: e,
            questContent: s,
            isHovering: a,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            onReceiveErrorHints: x,
            sourceQuestContent: C,
            questNameHeadingId: h,
        } = t,
        j = i.useRef(null),
        E = (0, ta.z)(),
        v = (0, u.SD)(e, E),
        N = E === tl.MA.NITRO && v,
        O = (0, r.bG)([tn.default], () => tn.default.getCurrentUser()),
        A = (0, tr.mq)(e.config, O),
        p = (0, tr.mH)(e.config, O),
        T = e.userStatus?.enrolledAt != null,
        { ref: S, scrollHeight: I } = (0, L.wR)(),
        _ = null != I && I > 104,
        { onAssetLoadComplete: w } = i.useContext(W.M),
        { expansionSpring: Q } = (0, g.z)({ expansionSpring: +!!a, config: { ...V.N, clamp: !0 } }),
        q = e.userStatus?.completedAt != null,
        b = e.userStatus?.claimedAt != null,
        R = (0, tr.ks)(e.config),
        k = e.userStatus?.orbQuantityClaimed ?? (0, tr._Z)(e.config),
        M = (0, tr.wo)(e.config, O),
        U = (0, m.I6)(e),
        { completedRatio: P, completedRatioDisplay: z } = (0, u.O9)(e, U),
        F = (0, ti.A9)(e, C, t_.rE.QUEST_HOME_DESKTOP, s, te.Ob.QuestHome, j),
        $ = i.useMemo(
            () =>
                b && R
                    ? (0, n.jsxs)(
                          tz,
                          {
                              questId: e.id,
                              children: [
                                  (0, n.jsx)(ts.A, { shouldUseThemeColor: !0, className: tM.Kq, customSize: 14 }),
                                  G.intl.format(G.t["nLXlh+"], { orbAmount: k ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : b
                      ? (0, n.jsx)(tz, { questId: e.id, children: A })
                      : R
                        ? G.intl.format(G.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      tz,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, n.jsx)(ts.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: tM.Kq,
                                                  customSize: 14,
                                              }),
                                              G.intl.format(G.t["nLXlh+"], { orbAmount: M ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : G.intl.format(G.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(tz, { questId: e.id, children: p }, e.id),
                          }),
            [A, b, p, e.id, M, k, R],
        ),
        B = i.useMemo(() => {
            if (null != F)
                return (0, n.jsx)(y.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: tM.h_,
                    children: F,
                });
        }, [F]),
        X = (0, r.bG)([tt.A], () => tt.A.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: tM.kL,
        ref: j,
        children: [
            (0, n.jsx)(to.A, { visible: N, glow: !0 }),
            (0, n.jsxs)(f.animated.div, {
                style: { maxHeight: Q.to([0, 1], [104, (I ?? 0) + 12]) },
                className: tM.z,
                children: [
                    (0, n.jsx)("div", {
                        className: tM.c6,
                        children: (0, n.jsxs)(K, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !b && q && (0, n.jsx)("div", { className: tM.Nz }),
                                T
                                    ? (0, n.jsxs)("div", {
                                          className: tM.Tr,
                                          children: [
                                              q &&
                                                  (0, n.jsx)(J.a, {
                                                      importData: tU,
                                                      className: tM.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !X,
                                                  }),
                                              (0, n.jsx)(tc.A, {
                                                  size: 76,
                                                  percentComplete: P,
                                                  overlayText: a && !(0, D.Ic)(e) ? z : void 0,
                                                  children: (0, n.jsx)(td.A, {
                                                      quest: e,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: w,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: C,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(td.A, {
                                          quest: e,
                                          autoplay: a,
                                          questContent: s,
                                          className: tM.eB,
                                          onLoadComplete: w,
                                          lazyLoad: !0,
                                          sourceQuestContent: C,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: S,
                        className: l()(tM.FS, { [tM.wq]: !_ }),
                        children: [
                            (0, n.jsx)(Z.D, {
                                id: h,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: tM.G$,
                                children: G.intl.format(G.t.EAYZAr, { questName: e.config.messages.questName }),
                            }),
                            v
                                ? (0, n.jsxs)("div", {
                                      className: tM.xv,
                                      children: [
                                          (0, n.jsx)(y.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: tM.wx,
                                              children: $,
                                          }),
                                          (0, n.jsx)(tu.e, { questId: e.id, orbMultiplierEligibility: E }),
                                      ],
                                  })
                                : (0, n.jsx)(y.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: tM.wx,
                                      children: $,
                                  }),
                            B,
                        ],
                    }),
                    _ &&
                        (0, n.jsx)(f.animated.div, {
                            style: { opacity: (0, H.a)(Q.to([0, 1], [1, 0])) },
                            className: tM.hS,
                        }),
                ],
            }),
            (0, n.jsx)(tD, {
                quest: e,
                questContent: s,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: x,
                sourceQuestContent: C,
            }),
        ],
    });
}
let tz = i.memo(function (t) {
    let { questId: e, children: s } = t;
    return (0, n.jsx)(
        y.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: tM.wx, children: s },
        `${e}_reward`,
    );
});
var tH = s(355620);
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
            eagerLoadAssets: C,
            impressionRef: f,
            sourceQuestContent: v,
        } = t,
        N = i.useId(),
        [g, O] = i.useState(!1),
        [A, p] = i.useState([]),
        y = (0, u.aC)(e),
        T = i.useMemo(() => (0, m.vv)(e), [e]),
        S = (0, d.u0)(),
        I = i.useCallback(() => {
            O(!0),
                S({
                    questId: e.id,
                    event: $.HAw.QUEST_HOVER,
                    properties: { content_id: r, content_name: (0, x.jO)(r), content_position: o, row_index: c },
                    sourceQuestContent: v,
                }),
                T && (0, h.l9)();
        }, [S, e.id, r, T, v, o, c]),
        _ = i.useCallback(() => {
            O(!1),
                S({
                    questId: e.id,
                    event: $.HAw.QUEST_HOVER_OFF,
                    properties: { content_id: r, content_name: (0, x.jO)(r), content_position: o, row_index: c },
                    sourceQuestContent: v,
                });
        }, [S, e.id, r, v, o, c]),
        w = i.useContext(E.X),
        { visibilityElementRef: Q, almostVisibleInViewport: q } = (function (t, e) {
            let [s, n] = i.useState(e),
                a = i.useCallback((t) => {
                    t.isIntersecting && n(!0);
                }, []);
            return {
                visibilityElementRef: (0, j.B)(
                    a,
                    { root: t ?? null, threshold: 0, rootMargin: "900px 0px 900px 0px" },
                    !0,
                ),
                almostVisibleInViewport: s,
            };
        })(w?.current?.getScrollerNode() ?? null, C ?? !1),
        L = i.useCallback((t) => !!t.currentTarget.contains(t.relatedTarget), []);
    return (0, n.jsxs)("article", {
        id: tW(e.id),
        ref: (t) => {
            (f.current = t), (Q.current = t);
        },
        "aria-labelledby": N,
        className: l()(tH.k, s),
        onMouseEnter: I,
        onMouseLeave: _,
        onFocus: (t) => {
            L(t) || I();
        },
        onBlur: (t) => {
            L(t) || _();
        },
        children: [
            (0, n.jsx)(Y, {
                quest: e,
                isInFeaturedSection: a,
                isHovering: g,
                errorHints: A,
                warningHints: y,
                isVisibleInViewport: q,
                sourceQuestContent: v,
            }),
            (0, n.jsx)(tP, {
                quest: e,
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
let tK = i.memo(function (t) {
    let e = (0, r.bG)([o.A], () => (null != t.questId ? o.A.getQuest(t.questId) : void 0), [t.questId]),
        s = i.useMemo(() => (null != t.quest ? t.quest : e), [e, t.quest]);
    return null == s
        ? null
        : (0, n.jsx)(C.R, {
              questOrQuests: s,
              questContent: t.questContent,
              questContentPosition: t.contentPosition,
              questContentRowIndex: t.rowIndex,
              trackGuildAndChannelMetadata: t.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: t.sourceQuestContent,
              children: (e) => (0, n.jsx)(tF, { ...t, quest: s, impressionRef: e }),
          });
});
