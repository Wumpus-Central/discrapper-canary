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
    b = s(710969),
    L = s(792620),
    R = s(988436),
    k = s(918338),
    D = s(270045),
    M = s(371912),
    U = s(57718),
    P = s(398025),
    z = s(617986),
    H = s(516226),
    W = s(720875),
    F = s(419367),
    K = s(652215),
    V = s(375708),
    $ = s(368774);
function B(t) {
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
        A = (0, j.z)({ opacity: +!!O, height: O ? c : 0, config: F.N }),
        p = 0 === h ? E.E : f.m,
        y = v.A.unsafe_rawColors.RED_345.css,
        T = 0 === h ? y : l ? v.A.colors.TEXT_DEFAULT : v.A.colors.WHITE;
    return (0, n.jsx)(m.animated.div, {
        style: { height: A.height, opacity: (0, P.a)(A.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: $.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: $.M5,
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
                        text: V.intl.string(V.t["yKJi+/"]),
                        onClick: () => (0, R.i)({ quest: e, errorHints: s, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function G(t) {
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
        g = (0, L.IO)(e),
        I = (0, _.Ay)(),
        R = ((0, C.M)(I) ? K.NJ8.DARK : K.NJ8.LIGHT) === K.NJ8.DARK,
        P = (0, u.LS)(e),
        F = e.userStatus?.claimedAt != null,
        G = (0, u.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        X = e.userStatus?.enrolledAt != null,
        Y = e.userStatus?.completedAt != null,
        { onAssetLoadComplete: J } = i.useContext(H.M),
        Z = R ? "text-muted" : "always-white",
        tt = i.useCallback(() => {
            g &&
                (0, z.d5)({
                    quest: e,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: j,
                    sourceQuestContentCTA: q.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [g, e, j]),
        te = (0, M.UX)(e.id),
        ts = !0 === l || te,
        tn = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: $.kL,
        children: [
            (0, n.jsx)("div", {
                className: $.IC,
                children: (0, n.jsx)(k.A, {
                    quest: e,
                    isInteracting: s,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: $.l1,
                    imageClassName: $.c8,
                }),
            }),
            (0, n.jsx)("div", { className: $.Lw }),
            (0, n.jsxs)("div", {
                className: $.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: $.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: $.mY,
                                children: [
                                    (ts || e.preview) &&
                                        (0, n.jsxs)(O.B, {
                                            className: $.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ts &&
                                                    !(0, b.Ic)(e) &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                e.preview &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    g &&
                                        (0, n.jsx)(h.m, {
                                            text: Y
                                                ? V.intl.string(V.t.YsCuyF)
                                                : X
                                                  ? V.intl.string(V.t["74KqrR"])
                                                  : (0, b.Ic)(e)
                                                    ? V.intl.string(V.t.I6JG46)
                                                    : V.intl.string(V.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(p.D, {
                                                className: $.iI,
                                                "aria-label": V.intl.string(V.t.RscU7I),
                                                onClick: tt,
                                                children: (0, n.jsx)(y.u, { color: "currentColor", className: $.A9 }),
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
                                        returnRef: tn,
                                        children: (t) =>
                                            (0, n.jsx)(p.D, {
                                                ...t,
                                                innerRef: tn,
                                                className: $.iI,
                                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                                children: (0, n.jsx)(T.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: $.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(W.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: $.Iu,
                                children: (0, n.jsx)(U.Ay, {
                                    className: $.Iu,
                                    logotypeClassName: $.ND,
                                    quest: e,
                                    separatorSpacing: U.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: J,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: $.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: $.O,
                                        children: [
                                            (0, n.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: Z,
                                                children: V.intl.string(V.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(w.A, {
                                                className: $.w$,
                                                size: 16,
                                                color: v.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": V.intl.string(V.t.OfMjx9),
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
                                    P || F
                                        ? null
                                        : (0, n.jsx)(N.E, {
                                              variant: "text-sm/medium",
                                              color: Z,
                                              children: V.intl.format(V.t["7D8r4F"], { expiryDate: G }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(B, { quest: e, errorHints: f, warningHints: r, isDarkTheme: R, sourceQuestContent: j }),
                ],
            }),
        ],
    });
}
var X = s(604121),
    Y = s(534514),
    J = s(775602),
    Z = s(409626),
    tt = s(106799),
    te = s(287809),
    ts = s(3738),
    tn = s(646917),
    ti = s(576761),
    ta = s(801365),
    tl = s(895253),
    tr = s(453384),
    to = s(442734),
    tc = s(646764),
    tu = s(843282),
    td = s(825484),
    tx = s(821609),
    tm = s(862482),
    th = s(31300),
    tC = s(687966),
    tj = s(414499),
    tE = s(403362);
let tf = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tv = s(112142),
    tN = s(18437),
    tg = s(971649),
    tO = s(651892),
    tA = s(901406),
    tp = s(814793),
    ty = s(192551),
    tT = s(79545),
    tS = s(190107),
    tI = s(562296);
let t_ = [
    {
        value: tS.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: tS.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function tw(t) {
    let e,
        s,
        { value: i } = t;
    switch (i) {
        case tS.fO.DESKTOP:
            (s = (0, n.jsx)(th.k, {})), (e = V.intl.string(V.t["QXc01+"]));
            break;
        case tS.fO.CONSOLE:
            (s = (0, n.jsx)(tC._, {})), (e = V.intl.string(V.t["8lAfuB"]));
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
                children: [(0, n.jsx)(th.k, {}), V.intl.string(V.t.g6Dr44)],
            });
        case tS.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: tI.FL,
                children: [(0, n.jsx)(tC._, {}), V.intl.string(V.t.iyNbj5)],
            });
        default:
            return (0, tE.xb)(t[0].value);
    }
}
function tq(t) {
    let { quest: e, sourceQuestContent: s } = t,
        n = (0, tg.go)();
    return {
        externalLinkCta: (0, tO.wr)(e),
        handleOpenExternalLink: i.useCallback(() => {
            (0, tA.pu)(e, {
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: q.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [e, s, n]),
    };
}
function tb(t) {
    let { quest: e, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = tq({ quest: e, sourceQuestContent: s });
    return (0, n.jsxs)(td.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(tx.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, n.jsx)(tx.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function tL(t) {
    let { quest: e, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = t,
        { externalLinkCta: l, handleOpenExternalLink: r } = tq({ quest: e, sourceQuestContent: s }),
        o = V.intl.format(V.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(td.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(tx.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, n.jsx)(tx.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
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
        j = (0, r.bG)([J.Ay], () => J.Ay.useReducedMotion),
        E = (0, M.Xf)({ useReducedMotion: j }),
        f = (0, tN.Ut)(),
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
        I = (0, b.if)(l),
        _ = !(0, b.Ic)(l),
        w = (0, u.In)(l),
        R = (0, L.IO)(l),
        k = (0, L.K$)(l),
        D = (0, L.Cr)(l),
        U = (0, u.fc)(l),
        [P, H, W] = (0, u.Qo)(l, U),
        F = _ && w === u.F3.ACCEPTED,
        K = F && P === c.X0.SELECT,
        $ = F && !K && H.length > 1,
        B = tv.t.useConfig({ location: tS.rE.QUEST_HOME_DESKTOP }),
        G = (0, tT.Pd)(l),
        X = (0, Q.O)((t) => t.clearErrorHints),
        Y = i.useCallback(
            (t) => {
                W(t), t === tS.fO.DESKTOP && (x([]), X(l.id));
            },
            [W, x, X, l.id],
        ),
        { text: Z, onClick: tt } = (0, M._c)({
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
        { startingConsoleQuest: te, startConsoleQuest: tn } = (0, u.Wj)({
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
        ti = l.userStatus?.claimedAt != null,
        { launchInGameActivity: ta } = (0, u.zW)(l),
        tl = (0, ts.NA)({ quest: l, shortText: !0 }),
        tr = (0, u.do)({ quest: l, content: d, ctaContent: q.Cy.OPEN_GAME_LINK, sourceQuestContent: C }),
        to = (0, tO.wr)(l),
        { handleOpenExternalLink: tc } = tq({ quest: l, sourceQuestContent: C }),
        th =
            ((e = tS.rE.QUEST_HOME_DESKTOP),
            (s = tf.useConfig({ location: e }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, L.g5)(l)),
        tg = th ? tc : tr,
        tA = (0, L.I6)(l),
        tR = (0, n.jsx)(tx.$, { variant: "secondary", text: to, onClick: tg }),
        tk = (0, n.jsx)(tx.$, { variant: "secondary", text: to, onClick: tg, fullWidth: !0 }),
        tD = (0, n.jsx)(tx.$, { variant: "secondary", text: to, onClick: tr }),
        tM = null;
    return (B.enabled && G === tT.UA.EXPIRED_CLAIMABLE && B.enabledQuestStates.has(G)
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
                children: (0, n.jsx)(tx.$, {
                    variant: "primary",
                    loading: O,
                    onClick: tt ?? void 0,
                    text: Z,
                    fullWidth: !0,
                }),
            }))
          : B.enabled && (G === tT.UA.COMPLETED || G === tT.UA.CLAIMED) && B.enabledQuestStates.has(G)
            ? (tM = R
                  ? (0, n.jsx)(tb, {
                        quest: l,
                        sourceQuestContent: C,
                        onClick: tt,
                        text: Z,
                        primaryCtaButton: (0, n.jsx)(ty.A, {
                            quest: l,
                            surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: d,
                            analyticsCtxSourceQuestContent: C,
                            analyticsCtxQuestContentPosition: m,
                            analyticsCtxQuestContentRowIndex: h,
                        }),
                    })
                  : (0, tp.vA)(l)
                    ? (0, n.jsxs)(td.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(tx.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(tS.Li.CLOUD_GAMING_ACTIVITY) ? tj.h : tC._,
                                  text: tl,
                                  onClick: () => {
                                      ta();
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
                    ? (0, n.jsx)(tb, { quest: l, sourceQuestContent: C, onClick: tt, text: Z })
                    : (0, tp.vA)(l)
                      ? (0, n.jsxs)(td.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(tx.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(tS.Li.CLOUD_GAMING_ACTIVITY) ? tj.h : tC._,
                                    text: tl,
                                    onClick: () => {
                                        ta();
                                    },
                                }),
                                (0, n.jsx)(tx.$, { variant: "primary", onClick: tt ?? void 0, text: Z }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: tI.x6,
                            children: (0, n.jsx)(tx.$, {
                                variant: "primary",
                                onClick: tt ?? void 0,
                                text: Z,
                                fullWidth: !0,
                            }),
                        }))
              : _
                ? k
                    ? (tM = (0, n.jsx)("div", {
                          className: tI.x6,
                          children:
                              B.enabled &&
                              (G === tT.UA.UNENROLLED || G === tT.UA.ENROLLED || G === tT.UA.INCOMPLETE) &&
                              B.enabledQuestStates.has(G)
                                  ? (0, n.jsxs)(td.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            G === tT.UA.UNENROLLED ? tD : th ? tR : null,
                                            (0, n.jsx)(ty.A, {
                                                quest: l,
                                                surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: C,
                                                analyticsCtxQuestContentPosition: m,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(td.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(tx.$, {
                                            variant: "primary",
                                            loading: A,
                                            onClick: tt ?? void 0,
                                            text: Z,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : y && !ti
                      ? (tM = K
                            ? (0, n.jsx)(tu.Pw, {
                                  className: tI.dd,
                                  isSelected: () => !1,
                                  options: t_,
                                  placeholder: V.intl.string(V.t.drVw4T),
                                  renderOptionLabel: tw,
                                  renderOptionValue: tQ,
                                  select: Y,
                                  serialize: (t) => {
                                      switch (t) {
                                          case tS.fO.DESKTOP:
                                              return V.intl.string(V.t["QXc01+"]);
                                          case tS.fO.CONSOLE:
                                              return V.intl.string(V.t["8lAfuB"]);
                                          default:
                                              return (0, tE.xb)(t);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : tA
                              ? (0, n.jsx)("div", {
                                    className: tI.x6,
                                    children: (0, n.jsxs)(td.e, {
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
                              : B.enabled &&
                                  (G === tT.UA.ENROLLED || G === tT.UA.INCOMPLETE) &&
                                  B.enabledQuestStates.has(G)
                                ? th && (0, L.t)({ quest: l }) && !(0, L.g5)(l)
                                    ? (0, n.jsx)("div", { className: tI.x6, children: tk })
                                    : (0, n.jsx)("div", {
                                          className: tI.x6,
                                          children: (0, n.jsxs)(td.e, {
                                              direction: "horizontal",
                                              fullWidth: !0,
                                              wrap: !1,
                                              children: [
                                                  th && (R || (0, tp.vA)(l)) ? tR : null,
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
                                : (0, L.g5)(l) && !N && P !== c.X0.DESKTOP
                                  ? v
                                      ? (0, n.jsx)("div", {
                                            className: tI.x6,
                                            children: (0, n.jsx)(tx.$, {
                                                variant: "secondary",
                                                onClick: tt ?? void 0,
                                                text: Z,
                                                fullWidth: !0,
                                            }),
                                        })
                                      : (0, n.jsx)(tm.$n, {
                                            "data-migration-pending": !0,
                                            color: tm.XD.PRIMARY,
                                            onClick: tn,
                                            disabled: te,
                                            className: tI.x6,
                                            children: (0, n.jsxs)("div", {
                                                className: tI.tn,
                                                children: [E.render(), V.intl.string(V.t.nPThNb)],
                                            }),
                                        })
                                  : R
                                    ? th
                                        ? (0, n.jsx)("div", {
                                              className: tI.x6,
                                              children: (0, n.jsxs)(td.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      tR,
                                                      (0, n.jsx)(tx.$, {
                                                          variant: "primary",
                                                          onClick: tt ?? void 0,
                                                          text: Z,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: tI.x6,
                                              children: (0, n.jsx)(tx.$, {
                                                  variant: "primary",
                                                  onClick: tt ?? void 0,
                                                  text: Z,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, tp.vA)(l)
                                      ? th
                                          ? (0, n.jsx)("div", {
                                                className: tI.x6,
                                                children: (0, n.jsxs)(td.e, {
                                                    direction: "horizontal",
                                                    fullWidth: !0,
                                                    wrap: !1,
                                                    children: [
                                                        tR,
                                                        (0, n.jsx)(tx.$, {
                                                            variant: "primary",
                                                            icon: (0, z.Oz)(l),
                                                            onClick: tt ?? void 0,
                                                            text: Z,
                                                        }),
                                                    ],
                                                }),
                                            })
                                          : (0, n.jsx)("div", {
                                                className: tI.x6,
                                                children: (0, n.jsx)(tx.$, {
                                                    variant: "primary",
                                                    icon: (0, z.Oz)(l),
                                                    onClick: tt ?? void 0,
                                                    text: Z,
                                                    fullWidth: !0,
                                                }),
                                            })
                                      : (0, n.jsx)("div", {
                                            className: tI.x6,
                                            children: th
                                                ? tk
                                                : (0, n.jsx)(tx.$, {
                                                      variant: "secondary",
                                                      disabled: !0,
                                                      text: V.intl.string(V.t["9KoPyB"]),
                                                      fullWidth: !0,
                                                  }),
                                        }))
                      : y ||
                        (tM = p
                            ? (0, n.jsxs)(td.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(tx.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: V.intl.string(V.t.V293qn),
                                      }),
                                      (0, n.jsx)(tx.$, {
                                          variant: "primary",
                                          onClick: () => (0, z.m6)(l, d, C),
                                          text: V.intl.string(V.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: tI.x6,
                                  children: (0, n.jsxs)(td.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          tD,
                                          B.enabled &&
                                          G === tT.UA.UNENROLLED &&
                                          B.enabledQuestStates.has(tT.UA.UNENROLLED)
                                              ? (0, n.jsx)(ty.A, {
                                                    quest: l,
                                                    surface: tT.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: d,
                                                    analyticsCtxSourceQuestContent: C,
                                                    analyticsCtxQuestContentPosition: m,
                                                })
                                              : (0, n.jsx)(tx.$, {
                                                    loading: A,
                                                    variant: "primary",
                                                    onClick: tt ?? void 0,
                                                    text: Z,
                                                    icon: (0, z.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (tM =
                      B.enabled && G === tT.UA.EXPIRED && B.enabledQuestStates.has(G)
                          ? (0, n.jsx)(tL, {
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
                          : (0, n.jsx)(tL, { quest: l, sourceQuestContent: C, formattedExpirationDate: g })),
    null == tM)
        ? null
        : (0, n.jsxs)("div", {
              className: tI.kL,
              children: [
                  (0, n.jsx)("div", { className: tI.qz, children: tM }),
                  $ &&
                      (0, n.jsx)("div", {
                          className: tI.qz,
                          children: (0, n.jsx)(tu.Pw, {
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
                              placeholder: V.intl.string(V.t.drVw4T),
                              renderOptionLabel: tw,
                              renderOptionValue: tQ,
                              select: Y,
                              serialize: (t) => {
                                  switch (t) {
                                      case tS.fO.DESKTOP:
                                          return V.intl.string(V.t["QXc01+"]);
                                      case tS.fO.CONSOLE:
                                          return V.intl.string(V.t["8lAfuB"]);
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
        f = (0, tn.z)(),
        v = (0, u.SD)(e, f),
        g = f === ti.MA.NITRO && v,
        O = (0, r.bG)([te.default], () => te.default.getCurrentUser()),
        A = (0, ta.mq)(e.config, O),
        p = (0, ta.mH)(e.config, O),
        y = e.userStatus?.enrolledAt != null,
        { ref: T, scrollHeight: S } = (0, I.wR)(),
        _ = null != S && S > 104,
        { onAssetLoadComplete: w } = i.useContext(H.M),
        { expansionSpring: Q } = (0, j.z)({ expansionSpring: +!!a, config: { ...F.N, clamp: !0 } }),
        q = e.userStatus?.completedAt != null,
        R = e.userStatus?.claimedAt != null,
        k = (0, ta.ks)(e.config),
        D = e.userStatus?.orbQuantityClaimed ?? (0, ta._Z)(e.config),
        M = (0, ta.wo)(e.config, O),
        U = (0, L.I6)(e),
        { completedRatio: z, completedRatioDisplay: K } = (0, u.O9)(e, U),
        $ = (0, ts.A9)(e, h, tS.rE.QUEST_HOME_DESKTOP, Z.Ob.QuestHome, E),
        B = i.useMemo(
            () =>
                R && k
                    ? (0, n.jsxs)(
                          tU,
                          {
                              questId: e.id,
                              children: [
                                  (0, n.jsx)(tt.A, { shouldUseThemeColor: !0, className: tk.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: D ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : R
                      ? (0, n.jsx)(tU, { questId: e.id, children: A })
                      : k
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      tU,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, n.jsx)(tt.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: tk.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: M ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(tU, { questId: e.id, children: p }, e.id),
                          }),
            [A, R, p, e.id, M, D, k],
        ),
        G = i.useMemo(() => {
            if (null != $)
                return (0, n.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: tk.h_,
                    children: $,
                });
        }, [$]),
        tu = (0, r.bG)([J.Ay], () => J.Ay.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: tk.kL,
        ref: E,
        children: [
            (0, n.jsx)(tl.A, { visible: g, glow: !0 }),
            (0, n.jsxs)(m.animated.div, {
                style: { maxHeight: Q.to([0, 1], [104, (S ?? 0) + 12]) },
                className: tk.z,
                children: [
                    (0, n.jsx)("div", {
                        className: tk.c6,
                        children: (0, n.jsxs)(W.A, {
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
                                                  (0, n.jsx)(X.a, {
                                                      importData: tD,
                                                      className: tk.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !tu,
                                                  }),
                                              (0, n.jsx)(tr.A, {
                                                  size: 76,
                                                  percentComplete: z,
                                                  overlayText: a && !(0, b.Ic)(e) ? K : void 0,
                                                  children: (0, n.jsx)(tc.A, {
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
                                    : (0, n.jsx)(tc.A, {
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
                            (0, n.jsx)(Y.D, {
                                id: C,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: tk.G$,
                                children: V.intl.format(V.t.EAYZAr, { questName: e.config.messages.questName }),
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
                                          (0, n.jsx)(to.e, { questId: e.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, n.jsx)(N.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: tk.wx,
                                      children: B,
                                  }),
                            G,
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
let tU = i.memo(function (t) {
    let { questId: e, children: s } = t;
    return (0, n.jsx)(
        N.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: tk.wx, children: s },
        `${e}_reward`,
    );
});
var tP = s(688755),
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
        } = (0, tP.B)({ quest: e, questContent: r, contentPosition: o, rowIndex: c, sourceQuestContent: h }),
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
            (0, n.jsx)(G, {
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
