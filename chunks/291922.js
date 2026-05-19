s.d(t, { sT: () => eF, Ay: () => eV });
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
    v = s(702841),
    N = s(990078),
    g = s(462887),
    O = s(717421),
    A = s(695366),
    p = s(885574),
    y = s(661531),
    S = s(834730),
    T = s(123292),
    I = s(331322),
    _ = s(508770),
    w = s(939249),
    Q = s(782134),
    q = s(365199),
    b = s(820081),
    L = s(765671),
    R = s(736653),
    k = s(814925),
    D = s(178540),
    M = s(710969),
    U = s(814793),
    P = s(988436),
    z = s(918338),
    H = s(270045),
    W = s(57718),
    F = s(398025),
    K = s(516226),
    V = s(181672);
function $(e) {
    let { width: t, height: s, showPlaceholder: i, children: a, className: r } = e;
    return i ? (0, n.jsx)("div", { className: l()(V.s, r), style: { width: t, height: s } }) : a;
}
var G = s(419367),
    B = s(652215),
    X = s(375708),
    Y = s(368774);
function J(e) {
    let { quest: t, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: r } = e,
        { ref: o, height: c = 0 } = (0, L.Ay)([s]),
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
        j = (0, O.z)({ opacity: +!!C, height: C ? c : 0, config: G.N }),
        E = 0 === m ? A.E : p.m,
        v = y.A.unsafe_rawColors.RED_345.css,
        N = 0 === m ? v : l ? y.A.colors.TEXT_DEFAULT : y.A.colors.WHITE;
    return (0, n.jsx)(f.animated.div, {
        style: { height: j.height, opacity: (0, F.a)(j.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: Y.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: Y.M5,
                    children: [
                        (0, n.jsx)(E, { size: "xs", color: N }),
                        (0, n.jsx)(S.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, n.jsx)(T.Q, {
                        text: X.intl.string(X.t["yKJi+/"]),
                        onClick: () => (0, P.i)({ quest: t, errorHints: s, sourceQuestContent: r }),
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
        O = (0, D.O)((e) => e.getErrorHints(t.id)),
        A = O.length > 0 ? O : a,
        p = (0, m.IO)(t),
        T = (0, R.Ay)(),
        L = ((0, g.M)(T) ? B.NJ8.DARK : B.NJ8.LIGHT) === B.NJ8.DARK,
        P = (0, u.LS)(t),
        F = t.userStatus?.claimedAt != null,
        V = (0, u.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        G = t.userStatus?.enrolledAt != null,
        Z = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: ee } = i.useContext(K.M),
        et = L ? "text-muted" : "always-white",
        es = i.useCallback(() => {
            p &&
                (0, C.d5)({
                    quest: t,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: f,
                    sourceQuestContentCTA: x.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [p, t, f]),
        en = (0, v.bG)([o.A], () => o.A.getQuestHomeHero()),
        ei = i.useMemo(() => l || (null != en && (0, U.I0)(en, t.id)), [l, en, t.id]),
        ea = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, n.jsx)("div", {
                className: Y.IC,
                children: (0, n.jsx)(z.A, {
                    quest: t,
                    isInteracting: s,
                    hideAssets: !d,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: Y.l1,
                    imageClassName: Y.c8,
                }),
            }),
            (0, n.jsx)("div", { className: Y.Lw }),
            (0, n.jsxs)("div", {
                className: Y.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: Y.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: Y.mY,
                                children: [
                                    (ei || t.preview) &&
                                        (0, n.jsxs)(I.B, {
                                            className: Y.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ei &&
                                                    !(0, M.Ic)(t) &&
                                                    (0, n.jsx)(_.E, {
                                                        type: { text: X.intl.string(X.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, n.jsx)(_.E, {
                                                        type: { text: X.intl.string(X.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    p &&
                                        (0, n.jsx)(N.m, {
                                            text: Z
                                                ? X.intl.string(X.t.YsCuyF)
                                                : G
                                                  ? X.intl.string(X.t["74KqrR"])
                                                  : (0, M.Ic)(t)
                                                    ? X.intl.string(X.t.I6JG46)
                                                    : X.intl.string(X.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(w.D, {
                                                className: Y.iI,
                                                "aria-label": X.intl.string(X.t.RscU7I),
                                                onClick: es,
                                                children: (0, n.jsx)(Q.u, { color: "currentColor", className: Y.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(H.C, {
                                        onOpen: j,
                                        onClose: h,
                                        onSelect: E,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: f,
                                        returnRef: ea,
                                        children: (e) =>
                                            (0, n.jsx)(w.D, {
                                                ...e,
                                                innerRef: ea,
                                                className: Y.iI,
                                                "aria-label": X.intl.string(X.t.DEoVWZ),
                                                children: (0, n.jsx)(q.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: Y.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)($, {
                                showPlaceholder: !d,
                                width: 100,
                                height: 30,
                                className: Y.Iu,
                                children: (0, n.jsx)(W.Ay, {
                                    className: Y.Iu,
                                    logotypeClassName: Y.ND,
                                    quest: t,
                                    separatorSpacing: W.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: ee,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: Y.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: Y.O,
                                        children: [
                                            (0, n.jsx)(S.E, {
                                                variant: "text-sm/medium",
                                                color: et,
                                                children: X.intl.string(X.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(k.A, {
                                                className: Y.w$,
                                                size: 16,
                                                color: y.A.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(b.B, {
                                                    color: y.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(S.E, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    P || F
                                        ? null
                                        : (0, n.jsx)(S.E, {
                                              variant: "text-sm/medium",
                                              color: et,
                                              children: X.intl.format(X.t["7D8r4F"], { expiryDate: V }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(J, { quest: t, errorHints: A, warningHints: r, isDarkTheme: L, sourceQuestContent: f }),
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
    ea = s(287809),
    el = s(838077),
    er = s(646917),
    eo = s(576761),
    ec = s(801365),
    eu = s(895253),
    ed = s(453384),
    ex = s(442734),
    em = s(646764),
    eh = s(843282),
    eC = s(825484),
    ej = s(821609),
    eE = s(862482),
    ef = s(31300),
    ev = s(687966),
    eN = s(414499),
    eg = s(403362);
let eO = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eA = s(112142),
    ep = s(971649),
    ey = s(651892),
    eS = s(901406),
    eT = s(371912),
    eI = s(368715),
    e_ = s(79545),
    ew = s(190107),
    eQ = s(562296);
let eq = [
    {
        value: ew.fO.DESKTOP,
        get label() {
            return X.intl.string(X.t["QXc01+"]);
        },
    },
    {
        value: ew.fO.CONSOLE,
        get label() {
            return X.intl.string(X.t["8lAfuB"]);
        },
    },
];
function eb(e) {
    let t,
        s,
        { value: i } = e;
    switch (i) {
        case ew.fO.DESKTOP:
            (s = (0, n.jsx)(ef.k, {})), (t = X.intl.string(X.t["QXc01+"]));
            break;
        case ew.fO.CONSOLE:
            (s = (0, n.jsx)(ev._, {})), (t = X.intl.string(X.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: eQ.FL, children: [s, t] });
}
function eL(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case ew.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: eQ.FL,
                children: [(0, n.jsx)(ef.k, {}), X.intl.string(X.t.g6Dr44)],
            });
        case ew.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: eQ.FL,
                children: [(0, n.jsx)(ev._, {}), X.intl.string(X.t.iyNbj5)],
            });
        default:
            return (0, eg.xb)(e[0].value);
    }
}
function eR(e) {
    let { quest: t, sourceQuestContent: s } = e,
        n = (0, ep.go)();
    return {
        externalLinkCta: (0, ey.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, eS.pu)(t, {
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: x.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [t, s, n]),
    };
}
function ek(e) {
    let { quest: t, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = e,
        { externalLinkCta: r, handleOpenExternalLink: o } = eR({ quest: t, sourceQuestContent: s });
    return (0, n.jsxs)(eC.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(ej.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, n.jsx)(ej.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function eD(e) {
    let { quest: t, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = e,
        { externalLinkCta: l, handleOpenExternalLink: r } = eR({ quest: t, sourceQuestContent: s }),
        o = X.intl.format(X.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(eC.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(ej.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, n.jsx)(ej.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
        ],
    });
}
function eM(e) {
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
        g = (0, eT.Xf)({ useReducedMotion: N }),
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
        q = (0, M.if)(l),
        b = !(0, M.Ic)(l),
        L = (0, u.In)(l),
        R = (0, m.IO)(l),
        k = (0, m.K$)(l),
        P = (0, m.Cr)(l),
        z = (0, u.fc)(l),
        [H, W, F] = (0, u.Qo)(l, z),
        K = b && L === u.F3.ACCEPTED,
        V = K && H === c.X0.SELECT,
        $ = K && !V && W.length > 1,
        G = eA.t.useConfig({ location: ew.rE.QUEST_HOME_DESKTOP }),
        B = (0, e_.Pd)(l),
        Y = (0, D.O)((e) => e.clearErrorHints),
        J = i.useCallback(
            (e) => {
                F(e), e === ew.fO.DESKTOP && (j([]), Y(l.id));
            },
            [F, j, Y, l.id],
        ),
        { text: Z, onClick: ee } = (0, eT._c)({
            progressState: L,
            quest: l,
            questContent: h,
            questContentPosition: E,
            questContentRowIndex: f,
            inGiftInventory: !0,
            isVideoQuest: R,
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
        { launchInGameActivity: ea } = (0, u.zW)(l),
        er = (0, el.NA)({ quest: l, shortText: !0 }),
        eo = (0, u.do)({ quest: l, content: h, ctaContent: x.Cy.OPEN_GAME_LINK, sourceQuestContent: v }),
        ec = (0, ey.wr)(l),
        { handleOpenExternalLink: eu } = eR({ quest: l, sourceQuestContent: v }),
        ed =
            ((t = ew.rE.QUEST_HOME_DESKTOP),
            (s = eO.useConfig({ location: t }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, m.g5)(l)),
        ex = ed ? eu : eo,
        em = (0, n.jsx)(ej.$, { variant: "secondary", text: ec, onClick: ex }),
        ef = (0, n.jsx)(ej.$, { variant: "secondary", text: ec, onClick: ex, fullWidth: !0 }),
        ep = (0, n.jsx)(ej.$, { variant: "secondary", text: ec, onClick: eo }),
        eS = null;
    return (G.enabled && B === e_.UA.EXPIRED_CLAIMABLE && G.enabledQuestStates.has(B)
        ? (eS = (0, n.jsx)("div", {
              className: eQ.x6,
              children: (0, n.jsx)(eI.A, {
                  quest: l,
                  surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: h,
                  analyticsCtxSourceQuestContent: v,
                  analyticsCtxQuestContentPosition: E,
                  analyticsCtxQuestContentRowIndex: f,
              }),
          }))
        : q && Q
          ? (eS = (0, n.jsx)("div", {
                className: eQ.x6,
                children: (0, n.jsx)(ej.$, {
                    variant: "primary",
                    loading: S,
                    onClick: ee ?? void 0,
                    text: Z,
                    fullWidth: !0,
                }),
            }))
          : G.enabled && (B === e_.UA.COMPLETED || B === e_.UA.CLAIMED) && G.enabledQuestStates.has(B)
            ? (eS = R
                  ? (0, n.jsx)(ek, {
                        quest: l,
                        sourceQuestContent: v,
                        onClick: ee,
                        text: Z,
                        primaryCtaButton: (0, n.jsx)(eI.A, {
                            quest: l,
                            surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: h,
                            analyticsCtxSourceQuestContent: v,
                            analyticsCtxQuestContentPosition: E,
                            analyticsCtxQuestContentRowIndex: f,
                        }),
                    })
                  : (0, U.vA)(l)
                    ? (0, n.jsxs)(eC.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(ej.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(ew.Li.CLOUD_GAMING_ACTIVITY) ? eN.h : ev._,
                                  text: er,
                                  onClick: () => {
                                      ea();
                                  },
                              }),
                              (0, n.jsx)(eI.A, {
                                  quest: l,
                                  surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: h,
                                  analyticsCtxSourceQuestContent: v,
                                  analyticsCtxQuestContentPosition: E,
                                  analyticsCtxQuestContentRowIndex: f,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: eQ.x6,
                          children: (0, n.jsx)(eI.A, {
                              quest: l,
                              surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: h,
                              analyticsCtxSourceQuestContent: v,
                              analyticsCtxQuestContentPosition: E,
                              analyticsCtxQuestContentRowIndex: f,
                          }),
                      }))
            : w
              ? (eS = R
                    ? (0, n.jsx)(ek, { quest: l, sourceQuestContent: v, onClick: ee, text: Z })
                    : (0, U.vA)(l)
                      ? (0, n.jsxs)(eC.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(ej.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(ew.Li.CLOUD_GAMING_ACTIVITY) ? eN.h : ev._,
                                    text: er,
                                    onClick: () => {
                                        ea();
                                    },
                                }),
                                (0, n.jsx)(ej.$, { variant: "primary", onClick: ee ?? void 0, text: Z }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: eQ.x6,
                            children: (0, n.jsx)(ej.$, {
                                variant: "primary",
                                onClick: ee ?? void 0,
                                text: Z,
                                fullWidth: !0,
                            }),
                        }))
              : b
                ? k
                    ? (eS = (0, n.jsx)("div", {
                          className: eQ.x6,
                          children:
                              G.enabled &&
                              (B === e_.UA.UNENROLLED || B === e_.UA.ENROLLED || B === e_.UA.INCOMPLETE) &&
                              G.enabledQuestStates.has(B)
                                  ? (0, n.jsxs)(eC.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            B === e_.UA.UNENROLLED ? ep : ed ? em : null,
                                            (0, n.jsx)(eI.A, {
                                                quest: l,
                                                surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: h,
                                                analyticsCtxSourceQuestContent: v,
                                                analyticsCtxQuestContentPosition: E,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(eC.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(ej.$, {
                                            variant: "primary",
                                            loading: T,
                                            onClick: ee ?? void 0,
                                            text: Z,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : _ && !ei
                      ? (eS = V
                            ? (0, n.jsx)(eh.Pw, {
                                  className: eQ.dd,
                                  isSelected: () => !1,
                                  options: eq,
                                  placeholder: X.intl.string(X.t.drVw4T),
                                  renderOptionLabel: eb,
                                  renderOptionValue: eL,
                                  select: J,
                                  serialize: (e) => {
                                      switch (e) {
                                          case ew.fO.DESKTOP:
                                              return X.intl.string(X.t["QXc01+"]);
                                          case ew.fO.CONSOLE:
                                              return X.intl.string(X.t["8lAfuB"]);
                                          default:
                                              return (0, eg.xb)(e);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : G.enabled &&
                                (B === e_.UA.ENROLLED || B === e_.UA.INCOMPLETE) &&
                                G.enabledQuestStates.has(B)
                              ? ed && (0, m.t)({ quest: l }) && !(0, m.g5)(l)
                                  ? (0, n.jsx)("div", { className: eQ.x6, children: ef })
                                  : (0, n.jsx)("div", {
                                        className: eQ.x6,
                                        children: (0, n.jsxs)(eC.e, {
                                            direction: "horizontal",
                                            fullWidth: !0,
                                            wrap: !1,
                                            children: [
                                                ed && (R || (0, U.vA)(l)) ? em : null,
                                                (0, n.jsx)(eI.A, {
                                                    quest: l,
                                                    surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: h,
                                                    analyticsCtxSourceQuestContent: v,
                                                    analyticsCtxQuestContentPosition: E,
                                                }),
                                            ],
                                        }),
                                    })
                              : (0, m.g5)(l) && !p && H !== c.X0.DESKTOP
                                ? A
                                    ? (0, n.jsx)("div", {
                                          className: eQ.x6,
                                          children: (0, n.jsx)(ej.$, {
                                              variant: "secondary",
                                              onClick: ee ?? void 0,
                                              text: Z,
                                              fullWidth: !0,
                                          }),
                                      })
                                    : (0, n.jsx)(eE.$n, {
                                          "data-migration-pending": !0,
                                          color: eE.XD.PRIMARY,
                                          onClick: en,
                                          disabled: et,
                                          className: eQ.x6,
                                          children: (0, n.jsxs)("div", {
                                              className: eQ.tn,
                                              children: [g.render(), X.intl.string(X.t.nPThNb)],
                                          }),
                                      })
                                : R
                                  ? ed
                                      ? (0, n.jsx)("div", {
                                            className: eQ.x6,
                                            children: (0, n.jsxs)(eC.e, {
                                                direction: "horizontal",
                                                fullWidth: !0,
                                                wrap: !1,
                                                children: [
                                                    em,
                                                    (0, n.jsx)(ej.$, {
                                                        variant: "primary",
                                                        onClick: ee ?? void 0,
                                                        text: Z,
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, n.jsx)("div", {
                                            className: eQ.x6,
                                            children: (0, n.jsx)(ej.$, {
                                                variant: "primary",
                                                onClick: ee ?? void 0,
                                                text: Z,
                                                fullWidth: !0,
                                            }),
                                        })
                                  : (0, U.vA)(l)
                                    ? ed
                                        ? (0, n.jsx)("div", {
                                              className: eQ.x6,
                                              children: (0, n.jsxs)(eC.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      em,
                                                      (0, n.jsx)(ej.$, {
                                                          variant: "primary",
                                                          icon: (0, C.Oz)(l),
                                                          onClick: ee ?? void 0,
                                                          text: Z,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: eQ.x6,
                                              children: (0, n.jsx)(ej.$, {
                                                  variant: "primary",
                                                  icon: (0, C.Oz)(l),
                                                  onClick: ee ?? void 0,
                                                  text: Z,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, n.jsx)("div", {
                                          className: eQ.x6,
                                          children: ed
                                              ? ef
                                              : (0, n.jsx)(ej.$, {
                                                    variant: "secondary",
                                                    disabled: !0,
                                                    text: X.intl.string(X.t["9KoPyB"]),
                                                    fullWidth: !0,
                                                }),
                                      }))
                      : _ ||
                        (eS = I
                            ? (0, n.jsxs)(eC.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(ej.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: X.intl.string(X.t.V293qn),
                                      }),
                                      (0, n.jsx)(ej.$, {
                                          variant: "primary",
                                          onClick: () => (0, C.m6)(l, h, v),
                                          text: X.intl.string(X.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: eQ.x6,
                                  children: (0, n.jsxs)(eC.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          ep,
                                          G.enabled &&
                                          B === e_.UA.UNENROLLED &&
                                          G.enabledQuestStates.has(e_.UA.UNENROLLED)
                                              ? (0, n.jsx)(eI.A, {
                                                    quest: l,
                                                    surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: h,
                                                    analyticsCtxSourceQuestContent: v,
                                                    analyticsCtxQuestContentPosition: E,
                                                })
                                              : (0, n.jsx)(ej.$, {
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
                : (eS =
                      G.enabled && B === e_.UA.EXPIRED && G.enabledQuestStates.has(B)
                          ? (0, n.jsx)(eD, {
                                quest: l,
                                sourceQuestContent: v,
                                formattedExpirationDate: y,
                                primaryCtaButton: (0, n.jsx)(eI.A, {
                                    quest: l,
                                    surface: e_.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: h,
                                    analyticsCtxSourceQuestContent: v,
                                    analyticsCtxQuestContentPosition: E,
                                    analyticsCtxQuestContentRowIndex: f,
                                }),
                            })
                          : (0, n.jsx)(eD, { quest: l, sourceQuestContent: v, formattedExpirationDate: y })),
    null == eS)
        ? null
        : (0, n.jsxs)("div", {
              className: eQ.kL,
              children: [
                  (0, n.jsx)("div", { className: eQ.qz, children: eS }),
                  $ &&
                      (0, n.jsx)("div", {
                          className: eQ.qz,
                          children: (0, n.jsx)(eh.Pw, {
                              className: eQ.xZ,
                              isSelected: (e) => {
                                  switch (H) {
                                      case c.X0.DESKTOP:
                                          return e === ew.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return e === ew.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: eq,
                              placeholder: X.intl.string(X.t.drVw4T),
                              renderOptionLabel: eb,
                              renderOptionValue: eL,
                              select: J,
                              serialize: (e) => {
                                  switch (e) {
                                      case ew.fO.DESKTOP:
                                          return X.intl.string(X.t["QXc01+"]);
                                      case ew.fO.CONSOLE:
                                          return X.intl.string(X.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
var eU = s(474491);
let eP = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function ez(e) {
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
        j = (0, er.z)(),
        E = (0, u.SD)(t, j),
        v = j === eo.MA.NITRO && E,
        N = (0, r.bG)([ea.default], () => ea.default.getCurrentUser()),
        g = (0, ec.mq)(t.config, N),
        A = (0, ec.mH)(t.config, N),
        p = t.userStatus?.enrolledAt != null,
        { ref: y, scrollHeight: T } = (0, L.wR)(),
        I = null != T && T > 104,
        { onAssetLoadComplete: _ } = i.useContext(K.M),
        { expansionSpring: w } = (0, O.z)({ expansionSpring: +!!a, config: { ...G.N, clamp: !0 } }),
        Q = t.userStatus?.completedAt != null,
        q = t.userStatus?.claimedAt != null,
        b = (0, ec.ks)(t.config),
        R = t.userStatus?.orbQuantityClaimed ?? (0, ec._Z)(t.config),
        k = (0, ec.wo)(t.config, N),
        { completedRatio: D, completedRatioDisplay: U } = (0, u.O9)(t),
        P = (0, el.A9)(t, m, ew.rE.QUEST_HOME_DESKTOP, s, en.Ob.QuestHome, C),
        z = i.useMemo(
            () =>
                q && b
                    ? (0, n.jsxs)(
                          eH,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(ei.A, { shouldUseThemeColor: !0, className: eU.Kq, customSize: 14 }),
                                  X.intl.format(X.t["nLXlh+"], { orbAmount: R ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : q
                      ? (0, n.jsx)(eH, { questId: t.id, children: g })
                      : b
                        ? X.intl.format(X.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      eH,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(ei.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: eU.Kq,
                                                  customSize: 14,
                                              }),
                                              X.intl.format(X.t["nLXlh+"], { orbAmount: k ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : X.intl.format(X.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(eH, { questId: t.id, children: A }, t.id),
                          }),
            [g, q, A, t.id, k, R, b],
        ),
        H = i.useMemo(() => {
            if (null != P)
                return (0, n.jsx)(S.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: eU.h_,
                    children: P,
                });
        }, [P]),
        W = (0, r.bG)([es.A], () => es.A.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: eU.kL,
        ref: C,
        children: [
            (0, n.jsx)(eu.A, { visible: v, glow: !0 }),
            (0, n.jsxs)(f.animated.div, {
                style: { maxHeight: w.to([0, 1], [104, (T ?? 0) + 12]) },
                className: eU.z,
                children: [
                    (0, n.jsx)("div", {
                        className: eU.c6,
                        children: (0, n.jsxs)($, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !q && Q && (0, n.jsx)("div", { className: eU.Nz }),
                                p
                                    ? (0, n.jsxs)("div", {
                                          className: eU.Tr,
                                          children: [
                                              Q &&
                                                  (0, n.jsx)(ee.a, {
                                                      importData: eP,
                                                      className: eU.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !W,
                                                  }),
                                              (0, n.jsx)(ed.A, {
                                                  size: 76,
                                                  percentComplete: D,
                                                  overlayText: a && !(0, M.Ic)(t) ? U : void 0,
                                                  children: (0, n.jsx)(em.A, {
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
                                    : (0, n.jsx)(em.A, {
                                          quest: t,
                                          autoplay: a,
                                          questContent: s,
                                          className: eU.eB,
                                          onLoadComplete: _,
                                          lazyLoad: !0,
                                          sourceQuestContent: m,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: y,
                        className: l()(eU.FS, { [eU.wq]: !I }),
                        children: [
                            (0, n.jsx)(et.D, {
                                id: h,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: eU.G$,
                                children: X.intl.format(X.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            E
                                ? (0, n.jsxs)("div", {
                                      className: eU.xv,
                                      children: [
                                          (0, n.jsx)(S.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: eU.wx,
                                              children: z,
                                          }),
                                          (0, n.jsx)(ex.e, { questId: t.id, orbMultiplierEligibility: j }),
                                      ],
                                  })
                                : (0, n.jsx)(S.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: eU.wx,
                                      children: z,
                                  }),
                            H,
                        ],
                    }),
                    I &&
                        (0, n.jsx)(f.animated.div, {
                            style: { opacity: (0, F.a)(w.to([0, 1], [1, 0])) },
                            className: eU.hS,
                        }),
                ],
            }),
            (0, n.jsx)(eM, {
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
let eH = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        S.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: eU.wx, children: s },
        `${t}_reward`,
    );
});
var eW = s(355620);
function eF(e) {
    return `quest-tile-${e}`;
}
function eK(e) {
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
                    event: B.HAw.QUEST_HOVER,
                    properties: { content_id: r, content_name: (0, x.jO)(r), content_position: o, row_index: c },
                    sourceQuestContent: v,
                }),
                S && (0, C.l9)();
        }, [T, t.id, r, S, v, o, c]),
        _ = i.useCallback(() => {
            O(!1),
                T({
                    questId: t.id,
                    event: B.HAw.QUEST_HOVER_OFF,
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
        id: eF(t.id),
        ref: (e) => {
            (f.current = e), (Q.current = e);
        },
        "aria-labelledby": N,
        className: l()(eW.k, s),
        onMouseEnter: I,
        onMouseLeave: _,
        onFocus: (e) => {
            b(e) || I();
        },
        onBlur: (e) => {
            b(e) || _();
        },
        children: [
            (0, n.jsx)(Z, {
                quest: t,
                isInFeaturedSection: a,
                isHovering: g,
                errorHints: A,
                warningHints: y,
                isVisibleInViewport: q,
                sourceQuestContent: v,
            }),
            (0, n.jsx)(ez, {
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
let eV = i.memo(function (e) {
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
              children: (t) => (0, n.jsx)(eK, { ...e, quest: s, impressionRef: t }),
          });
});
