s.d(t, { sT: () => eW, Ay: () => eV });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(17928),
    o = s(859703),
    c = s(507107),
    u = s(347135),
    d = s(73473),
    x = s(321503);
s(134528), s(947204);
var m = s(242841),
    C = s(990078),
    h = s(462887),
    E = s(717421),
    j = s(695366),
    f = s(885574),
    v = s(661531),
    N = s(834730),
    g = s(123292),
    O = s(331322),
    A = s(508770),
    p = s(939249),
    y = s(782134),
    T = s(365199),
    I = s(820081),
    _ = s(765671),
    S = s(736653),
    Q = s(814925),
    L = s(178540),
    w = s(590202),
    q = s(710969),
    b = s(792620),
    R = s(988436),
    k = s(918338),
    M = s(270045),
    D = s(371912),
    U = s(57718),
    P = s(398025),
    z = s(617986),
    H = s(516226),
    F = s(720875),
    W = s(419367),
    K = s(652215),
    V = s(375708),
    $ = s(258118);
function B(e) {
    let { quest: t, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: r } = e,
        { ref: o, height: c = 0 } = (0, _.Ay)([s]),
        d = t.userStatus?.completedAt != null,
        x = (0, u.Vn)(t),
        { type: C, hints: h } = i.useMemo(
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
        O = 2 !== C,
        A = (0, E.z)({ opacity: +!!O, height: O ? c : 0, config: W.N }),
        p = 0 === C ? j.E : f.m,
        y = v.A.unsafe_rawColors.RED_345.css,
        T = 0 === C ? y : l ? v.A.colors.TEXT_DEFAULT : v.A.colors.WHITE;
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
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === C &&
                    (0, n.jsx)(g.Q, {
                        text: V.intl.string(V.t["yKJi+/"]),
                        onClick: () => (0, R.i)({ quest: t, errorHints: s, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function G(e) {
    let {
            quest: t,
            isHovering: s,
            errorHints: a,
            isInFeaturedSection: l,
            warningHints: r,
            isVisibleInViewport: o,
            onCtxMenuClose: d,
            onCtxMenuOpen: x,
            onCtxMenuSelect: m,
            sourceQuestContent: E,
        } = e,
        j = (0, L.O)((e) => e.getErrorHints(t.id)),
        f = j.length > 0 ? j : a,
        g = (0, b.IO)(t),
        _ = (0, S.Ay)(),
        R = ((0, h.M)(_) ? K.NJ8.DARK : K.NJ8.LIGHT) === K.NJ8.DARK,
        P = (0, u.LS)(t),
        W = t.userStatus?.claimedAt != null,
        G = (0, u.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        X = t.userStatus?.enrolledAt != null,
        Y = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: J } = i.useContext(H.M),
        Z = R ? "text-muted" : "always-white",
        ee = i.useCallback(() => {
            g &&
                (0, z.d5)({
                    quest: t,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: E,
                    sourceQuestContentCTA: w.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [g, t, E]),
        et = (0, D.UX)(t.id),
        es = !0 === l || et,
        en = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: $.kL,
        children: [
            (0, n.jsx)("div", {
                className: $.IC,
                children: (0, n.jsx)(k.A, {
                    quest: t,
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
                                    (es || t.preview) &&
                                        (0, n.jsxs)(O.B, {
                                            className: $.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                es &&
                                                    !(0, q.Ic)(t) &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, n.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    g &&
                                        (0, n.jsx)(C.m, {
                                            text: Y
                                                ? V.intl.string(V.t.YsCuyF)
                                                : X
                                                  ? V.intl.string(V.t["74KqrR"])
                                                  : (0, q.Ic)(t)
                                                    ? V.intl.string(V.t.I6JG46)
                                                    : V.intl.string(V.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(p.D, {
                                                className: $.iI,
                                                "aria-label": V.intl.string(V.t.RscU7I),
                                                onClick: ee,
                                                children: (0, n.jsx)(y.u, { color: "currentColor", className: $.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(M.C, {
                                        onOpen: x,
                                        onClose: d,
                                        onSelect: m,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: E,
                                        returnRef: en,
                                        children: (e) =>
                                            (0, n.jsx)(p.D, {
                                                ...e,
                                                innerRef: en,
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
                            (0, n.jsx)(F.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: $.Iu,
                                children: (0, n.jsx)(U.Ay, {
                                    className: $.Iu,
                                    logotypeClassName: $.ND,
                                    quest: t,
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
                                            (0, n.jsx)(Q.A, {
                                                className: $.w$,
                                                size: 16,
                                                color: v.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": V.intl.string(V.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(I.B, {
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
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    P || W
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
                    (0, n.jsx)(B, { quest: t, errorHints: f, warningHints: r, isDarkTheme: R, sourceQuestContent: E }),
                ],
            }),
        ],
    });
}
var X = s(604121),
    Y = s(534514),
    J = s(775602),
    Z = s(409626),
    ee = s(106799),
    et = s(287809),
    es = s(192444),
    en = s(3738),
    ei = s(646917),
    ea = s(576761),
    el = s(801365),
    er = s(895253),
    eo = s(453384),
    ec = s(442734),
    eu = s(646764),
    ed = s(843282),
    ex = s(825484),
    em = s(821609),
    eC = s(862482),
    eh = s(31300),
    eE = s(687966),
    ej = s(414499),
    ef = s(403362);
let ev = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eN = s(112142),
    eg = s(18437),
    eO = s(971649),
    eA = s(651892),
    ep = s(901406),
    ey = s(814793),
    eT = s(368715),
    eI = s(79545),
    e_ = s(190107),
    eS = s(860600);
let eQ = [
    {
        value: e_.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: e_.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function eL(e) {
    let t,
        s,
        { value: i } = e;
    switch (i) {
        case e_.fO.DESKTOP:
            (s = (0, n.jsx)(eh.k, {})), (t = V.intl.string(V.t["QXc01+"]));
            break;
        case e_.fO.CONSOLE:
            (s = (0, n.jsx)(eE._, {})), (t = V.intl.string(V.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: eS.FL, children: [s, t] });
}
function ew(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case e_.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: eS.FL,
                children: [(0, n.jsx)(eh.k, {}), V.intl.string(V.t.g6Dr44)],
            });
        case e_.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: eS.FL,
                children: [(0, n.jsx)(eE._, {}), V.intl.string(V.t.iyNbj5)],
            });
        default:
            return (0, ef.xb)(e[0].value);
    }
}
function eq(e) {
    let { quest: t, sourceQuestContent: s } = e,
        n = (0, eO.go)();
    return {
        externalLinkCta: (0, eA.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, ep.pu)(t, {
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: w.Cy.OPEN_GAME_LINK,
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
function eR(e) {
    let { quest: t, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = e,
        { externalLinkCta: l, handleOpenExternalLink: r } = eq({ quest: t, sourceQuestContent: s }),
        o = V.intl.format(V.t["6p8BZx"], { expiryDate: i });
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
            questContent: d,
            onReceiveErrorHints: x,
            contentPosition: m,
            rowIndex: C,
            sourceQuestContent: h,
        } = e,
        E = (0, r.bG)([J.Ay], () => J.Ay.useReducedMotion),
        j = (0, D.Xf)({ useReducedMotion: E }),
        f = (0, eg.Ut)(),
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
        I = T && l.userStatus?.claimedAt == null,
        _ = (0, q.if)(l),
        S = !(0, q.Ic)(l),
        Q = (0, u.In)(l),
        R = (0, b.IO)(l),
        k = (0, b.K$)(l),
        M = (0, b.Cr)(l),
        U = (0, u.fc)(l),
        [P, H, F] = (0, u.Qo)(l, U),
        W = S && Q === u.F3.ACCEPTED,
        K = W && P === c.X0.SELECT,
        $ = W && !K && H.length > 1,
        B = eN.t.useConfig({ location: e_.rE.QUEST_HOME_DESKTOP }),
        G = (0, eI.Pd)(l),
        X = (0, L.O)((e) => e.clearErrorHints),
        Y = i.useCallback(
            (e) => {
                F(e), e === e_.fO.DESKTOP && (x([]), X(l.id));
            },
            [F, x, X, l.id],
        ),
        { text: Z, onClick: ee } = (0, D._c)({
            progressState: Q,
            quest: l,
            questContent: d,
            questContentPosition: m,
            questContentRowIndex: C,
            inGiftInventory: !0,
            isVideoQuest: R,
            inGameQuest: M,
            sourceQuestContent: h,
        }),
        { startingConsoleQuest: et, startConsoleQuest: es } = (0, u.Wj)({
            questId: l.id,
            beforeRequest: () => {
                j.startAnimation(),
                    f({
                        questId: l.id,
                        questContent: d,
                        questContentCTA: w.Cy.DEFIBRILLATOR,
                        questContentPosition: m,
                        questContentRowIndex: C,
                        sourceQuestContent: h,
                    });
            },
            afterRequest: (e) => {
                j.stopAnimation(), x(e);
            },
        }),
        ei = l.userStatus?.claimedAt != null,
        { launchInGameActivity: ea } = (0, u.zW)(l),
        el = (0, en.NA)({ quest: l, shortText: !0 }),
        er = (0, u.do)({ quest: l, content: d, ctaContent: w.Cy.OPEN_GAME_LINK, sourceQuestContent: h }),
        eo = (0, eA.wr)(l),
        { handleOpenExternalLink: ec } = eq({ quest: l, sourceQuestContent: h }),
        eu =
            ((t = e_.rE.QUEST_HOME_DESKTOP),
            (s = ev.useConfig({ location: t }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, b.g5)(l)),
        eh = eu ? ec : er,
        eO = (0, b.I6)(l),
        ep = (0, n.jsx)(em.$, { variant: "secondary", text: eo, onClick: eh }),
        ek = (0, n.jsx)(em.$, { variant: "secondary", text: eo, onClick: eh, fullWidth: !0 }),
        eM = (0, n.jsx)(em.$, { variant: "secondary", text: eo, onClick: er }),
        eD = null;
    return (B.enabled && G === eI.UA.EXPIRED_CLAIMABLE && B.enabledQuestStates.has(G)
        ? (eD = (0, n.jsx)("div", {
              className: eS.x6,
              children: (0, n.jsx)(eT.A, {
                  quest: l,
                  surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: d,
                  analyticsCtxSourceQuestContent: h,
                  analyticsCtxQuestContentPosition: m,
                  analyticsCtxQuestContentRowIndex: C,
              }),
          }))
        : _ && I
          ? (eD = (0, n.jsx)("div", {
                className: eS.x6,
                children: (0, n.jsx)(em.$, {
                    variant: "primary",
                    loading: O,
                    onClick: ee ?? void 0,
                    text: Z,
                    fullWidth: !0,
                }),
            }))
          : B.enabled && (G === eI.UA.COMPLETED || G === eI.UA.CLAIMED) && B.enabledQuestStates.has(G)
            ? (eD = R
                  ? (0, n.jsx)(eb, {
                        quest: l,
                        sourceQuestContent: h,
                        onClick: ee,
                        text: Z,
                        primaryCtaButton: (0, n.jsx)(eT.A, {
                            quest: l,
                            surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: d,
                            analyticsCtxSourceQuestContent: h,
                            analyticsCtxQuestContentPosition: m,
                            analyticsCtxQuestContentRowIndex: C,
                        }),
                    })
                  : (0, ey.vA)(l)
                    ? (0, n.jsxs)(ex.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(em.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(e_.Li.CLOUD_GAMING_ACTIVITY) ? ej.h : eE._,
                                  text: el,
                                  onClick: () => {
                                      ea();
                                  },
                              }),
                              (0, n.jsx)(eT.A, {
                                  quest: l,
                                  surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: d,
                                  analyticsCtxSourceQuestContent: h,
                                  analyticsCtxQuestContentPosition: m,
                                  analyticsCtxQuestContentRowIndex: C,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: eS.x6,
                          children: (0, n.jsx)(eT.A, {
                              quest: l,
                              surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: d,
                              analyticsCtxSourceQuestContent: h,
                              analyticsCtxQuestContentPosition: m,
                              analyticsCtxQuestContentRowIndex: C,
                          }),
                      }))
            : T
              ? (eD = R
                    ? (0, n.jsx)(eb, { quest: l, sourceQuestContent: h, onClick: ee, text: Z })
                    : (0, ey.vA)(l)
                      ? (0, n.jsxs)(ex.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(em.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(e_.Li.CLOUD_GAMING_ACTIVITY) ? ej.h : eE._,
                                    text: el,
                                    onClick: () => {
                                        ea();
                                    },
                                }),
                                (0, n.jsx)(em.$, { variant: "primary", onClick: ee ?? void 0, text: Z }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: eS.x6,
                            children: (0, n.jsx)(em.$, {
                                variant: "primary",
                                onClick: ee ?? void 0,
                                text: Z,
                                fullWidth: !0,
                            }),
                        }))
              : S
                ? k
                    ? (eD = (0, n.jsx)("div", {
                          className: eS.x6,
                          children:
                              B.enabled &&
                              (G === eI.UA.UNENROLLED || G === eI.UA.ENROLLED || G === eI.UA.INCOMPLETE) &&
                              B.enabledQuestStates.has(G)
                                  ? (0, n.jsxs)(ex.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            G === eI.UA.UNENROLLED ? eM : eu ? ep : null,
                                            (0, n.jsx)(eT.A, {
                                                quest: l,
                                                surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: h,
                                                analyticsCtxQuestContentPosition: m,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(ex.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(em.$, {
                                            variant: "primary",
                                            loading: A,
                                            onClick: ee ?? void 0,
                                            text: Z,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : y && !ei
                      ? (eD = K
                            ? (0, n.jsx)(ed.Pw, {
                                  className: eS.dd,
                                  isSelected: () => !1,
                                  options: eQ,
                                  placeholder: V.intl.string(V.t.drVw4T),
                                  renderOptionLabel: eL,
                                  renderOptionValue: ew,
                                  select: Y,
                                  serialize: (e) => {
                                      switch (e) {
                                          case e_.fO.DESKTOP:
                                              return V.intl.string(V.t["QXc01+"]);
                                          case e_.fO.CONSOLE:
                                              return V.intl.string(V.t["8lAfuB"]);
                                          default:
                                              return (0, ef.xb)(e);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : eO
                              ? (0, n.jsx)("div", {
                                    className: eS.x6,
                                    children: (0, n.jsxs)(ex.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            ep,
                                            (0, n.jsx)(eT.A, {
                                                quest: l,
                                                surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: h,
                                                analyticsCtxQuestContentPosition: m,
                                                analyticsCtxQuestContentRowIndex: C,
                                            }),
                                        ],
                                    }),
                                })
                              : B.enabled &&
                                  (G === eI.UA.ENROLLED || G === eI.UA.INCOMPLETE) &&
                                  B.enabledQuestStates.has(G)
                                ? eu && (0, b.t)({ quest: l }) && !(0, b.g5)(l)
                                    ? (0, n.jsx)("div", { className: eS.x6, children: ek })
                                    : (0, n.jsx)("div", {
                                          className: eS.x6,
                                          children: (0, n.jsxs)(ex.e, {
                                              direction: "horizontal",
                                              fullWidth: !0,
                                              wrap: !1,
                                              children: [
                                                  eu && (R || (0, ey.vA)(l)) ? ep : null,
                                                  (0, n.jsx)(eT.A, {
                                                      quest: l,
                                                      surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                                      analyticsCtxQuestContent: d,
                                                      analyticsCtxSourceQuestContent: h,
                                                      analyticsCtxQuestContentPosition: m,
                                                  }),
                                              ],
                                          }),
                                      })
                                : (0, b.g5)(l) && !N && P !== c.X0.DESKTOP
                                  ? v
                                      ? (0, n.jsx)("div", {
                                            className: eS.x6,
                                            children: (0, n.jsx)(em.$, {
                                                variant: "secondary",
                                                onClick: ee ?? void 0,
                                                text: Z,
                                                fullWidth: !0,
                                            }),
                                        })
                                      : (0, n.jsx)(eC.$n, {
                                            "data-migration-pending": !0,
                                            color: eC.XD.PRIMARY,
                                            onClick: es,
                                            disabled: et,
                                            className: eS.x6,
                                            children: (0, n.jsxs)("div", {
                                                className: eS.tn,
                                                children: [j.render(), V.intl.string(V.t.nPThNb)],
                                            }),
                                        })
                                  : R
                                    ? eu
                                        ? (0, n.jsx)("div", {
                                              className: eS.x6,
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
                                              className: eS.x6,
                                              children: (0, n.jsx)(em.$, {
                                                  variant: "primary",
                                                  onClick: ee ?? void 0,
                                                  text: Z,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, ey.vA)(l)
                                      ? eu
                                          ? (0, n.jsx)("div", {
                                                className: eS.x6,
                                                children: (0, n.jsxs)(ex.e, {
                                                    direction: "horizontal",
                                                    fullWidth: !0,
                                                    wrap: !1,
                                                    children: [
                                                        ep,
                                                        (0, n.jsx)(em.$, {
                                                            variant: "primary",
                                                            icon: (0, z.Oz)(l),
                                                            onClick: ee ?? void 0,
                                                            text: Z,
                                                        }),
                                                    ],
                                                }),
                                            })
                                          : (0, n.jsx)("div", {
                                                className: eS.x6,
                                                children: (0, n.jsx)(em.$, {
                                                    variant: "primary",
                                                    icon: (0, z.Oz)(l),
                                                    onClick: ee ?? void 0,
                                                    text: Z,
                                                    fullWidth: !0,
                                                }),
                                            })
                                      : (0, n.jsx)("div", {
                                            className: eS.x6,
                                            children: eu
                                                ? ek
                                                : (0, n.jsx)(em.$, {
                                                      variant: "secondary",
                                                      disabled: !0,
                                                      text: V.intl.string(V.t["9KoPyB"]),
                                                      fullWidth: !0,
                                                  }),
                                        }))
                      : y ||
                        (eD = p
                            ? (0, n.jsxs)(ex.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(em.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: V.intl.string(V.t.V293qn),
                                      }),
                                      (0, n.jsx)(em.$, {
                                          variant: "primary",
                                          onClick: () => (0, z.m6)(l, d, h),
                                          text: V.intl.string(V.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)("div", {
                                  className: eS.x6,
                                  children: (0, n.jsxs)(ex.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          eM,
                                          B.enabled &&
                                          G === eI.UA.UNENROLLED &&
                                          B.enabledQuestStates.has(eI.UA.UNENROLLED)
                                              ? (0, n.jsx)(eT.A, {
                                                    quest: l,
                                                    surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: d,
                                                    analyticsCtxSourceQuestContent: h,
                                                    analyticsCtxQuestContentPosition: m,
                                                })
                                              : (0, n.jsx)(em.$, {
                                                    loading: A,
                                                    variant: "primary",
                                                    onClick: ee ?? void 0,
                                                    text: Z,
                                                    icon: (0, z.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eD =
                      B.enabled && G === eI.UA.EXPIRED && B.enabledQuestStates.has(G)
                          ? (0, n.jsx)(eR, {
                                quest: l,
                                sourceQuestContent: h,
                                formattedExpirationDate: g,
                                primaryCtaButton: (0, n.jsx)(eT.A, {
                                    quest: l,
                                    surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: d,
                                    analyticsCtxSourceQuestContent: h,
                                    analyticsCtxQuestContentPosition: m,
                                    analyticsCtxQuestContentRowIndex: C,
                                }),
                            })
                          : (0, n.jsx)(eR, { quest: l, sourceQuestContent: h, formattedExpirationDate: g })),
    null == eD)
        ? null
        : (0, n.jsxs)("div", {
              className: eS.kL,
              children: [
                  (0, n.jsx)("div", { className: eS.qz, children: eD }),
                  $ &&
                      (0, n.jsx)("div", {
                          className: eS.qz,
                          children: (0, n.jsx)(ed.Pw, {
                              className: eS.xZ,
                              isSelected: (e) => {
                                  switch (P) {
                                      case c.X0.DESKTOP:
                                          return e === e_.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return e === e_.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: eQ,
                              placeholder: V.intl.string(V.t.drVw4T),
                              renderOptionLabel: eL,
                              renderOptionValue: ew,
                              select: Y,
                              serialize: (e) => {
                                  switch (e) {
                                      case e_.fO.DESKTOP:
                                          return V.intl.string(V.t["QXc01+"]);
                                      case e_.fO.CONSOLE:
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
var eM = s(847483);
let eD = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function eU(e) {
    let {
            quest: t,
            questContent: s,
            isHovering: a,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            onReceiveErrorHints: x,
            sourceQuestContent: C,
            questNameHeadingId: h,
        } = e,
        j = i.useRef(null),
        f = (0, ei.z)(),
        v = (0, u.SD)(t, f),
        g = f === ea.MA.NITRO && v,
        O = (0, r.bG)([et.default], () => et.default.getCurrentUser()),
        A = (0, el.mq)(t.config, O),
        p = (0, el.mH)(t.config, O),
        y = t.userStatus?.enrolledAt != null,
        { ref: T, scrollHeight: I } = (0, _.wR)(),
        S = null != I && I > 104,
        { onAssetLoadComplete: Q } = i.useContext(H.M),
        { expansionSpring: L } = (0, E.z)({ expansionSpring: +!!a, config: { ...W.N, clamp: !0 } }),
        w = t.userStatus?.completedAt != null,
        R = t.userStatus?.claimedAt != null,
        k = (0, el.ks)(t.config),
        M = t.userStatus?.orbQuantityClaimed ?? (0, el._Z)(t.config),
        D = (0, el.wo)(t.config, O),
        U = (0, b.I6)(t),
        { completedRatio: z, completedRatioDisplay: K } = (0, u.O9)(t, U),
        $ = (0, en.A9)(t, C, e_.rE.QUEST_HOME_DESKTOP, Z.Ob.QuestHome, j),
        B = (function (e, t) {
            let { variant: s } = es.Mk.useConfig({ location: t });
            return s === es.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : s === es.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : V.intl.format(V.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, e_.rE.QUEST_HOME_DESKTOP),
        G = i.useMemo(
            () =>
                R && k
                    ? (0, n.jsxs)(
                          eP,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(ee.A, { shouldUseThemeColor: !0, className: eM.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: M ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : R
                      ? (0, n.jsx)(eP, { questId: t.id, children: A })
                      : k
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      eP,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(ee.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: eM.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: D ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(eP, { questId: t.id, children: p }, t.id),
                          }),
            [A, R, p, t.id, D, M, k],
        ),
        ed = i.useMemo(() => {
            if (null != $)
                return (0, n.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: eM.h_,
                    children: $,
                });
        }, [$]),
        ex = (0, r.bG)([J.Ay], () => J.Ay.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: eM.kL,
        ref: j,
        children: [
            (0, n.jsx)(er.A, { visible: g, glow: !0 }),
            (0, n.jsxs)(m.animated.div, {
                style: { maxHeight: L.to([0, 1], [104, (I ?? 0) + 12]) },
                className: eM.z,
                children: [
                    (0, n.jsx)("div", {
                        className: eM.c6,
                        children: (0, n.jsxs)(F.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !R && w && (0, n.jsx)("div", { className: eM.Nz }),
                                y
                                    ? (0, n.jsxs)("div", {
                                          className: eM.Tr,
                                          children: [
                                              w &&
                                                  (0, n.jsx)(X.a, {
                                                      importData: eD,
                                                      className: eM.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ex,
                                                  }),
                                              (0, n.jsx)(eo.A, {
                                                  size: 76,
                                                  percentComplete: z,
                                                  overlayText: a && !(0, q.Ic)(t) ? K : void 0,
                                                  children: (0, n.jsx)(eu.A, {
                                                      quest: t,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: Q,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: C,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(eu.A, {
                                          quest: t,
                                          autoplay: a,
                                          questContent: s,
                                          className: eM.eB,
                                          onLoadComplete: Q,
                                          lazyLoad: !0,
                                          sourceQuestContent: C,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: T,
                        className: l()(eM.FS, { [eM.wq]: !S }),
                        children: [
                            (0, n.jsx)(Y.D, {
                                id: h,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: eM.G$,
                                children: B,
                            }),
                            v
                                ? (0, n.jsxs)("div", {
                                      className: eM.xv,
                                      children: [
                                          (0, n.jsx)(N.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: eM.wx,
                                              children: G,
                                          }),
                                          (0, n.jsx)(ec.e, { questId: t.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, n.jsx)(N.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: eM.wx,
                                      children: G,
                                  }),
                            ed,
                        ],
                    }),
                    S &&
                        (0, n.jsx)(m.animated.div, {
                            style: { opacity: (0, P.a)(L.to([0, 1], [1, 0])) },
                            className: eM.hS,
                        }),
                ],
            }),
            (0, n.jsx)(ek, {
                quest: t,
                questContent: s,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: x,
                sourceQuestContent: C,
            }),
        ],
    });
}
let eP = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        N.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: eM.wx, children: s },
        `${t}_reward`,
    );
});
var ez = s(688755),
    eH = s(831368),
    eF = s(124900);
function eW(e) {
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
            eagerLoadAssets: d,
            impressionRef: m,
            sourceQuestContent: C,
        } = e,
        h = i.useId(),
        [E, j] = i.useState(!1),
        [f, v] = i.useState([]),
        N = (0, u.aC)(t),
        {
            handleHoverStart: g,
            handleHoverEnd: O,
            isEventWithinParent: A,
        } = (0, ez.B)({ quest: t, questContent: r, contentPosition: o, rowIndex: c, sourceQuestContent: C }),
        p = i.useContext(x.X),
        { visibilityElementRef: y, almostVisibleInViewport: T } = (0, eH.I)(
            p?.current?.getScrollerNode() ?? null,
            d ?? !1,
        );
    return (0, n.jsxs)("article", {
        id: eW(t.id),
        ref: (e) => {
            (m.current = e), (y.current = e);
        },
        "aria-labelledby": h,
        className: l()(eF.k, s),
        onMouseEnter: () => {
            j(!0), g();
        },
        onMouseLeave: () => {
            j(!1), O();
        },
        onFocus: (e) => {
            A(e) || (j(!0), g());
        },
        onBlur: (e) => {
            A(e) || (j(!1), O());
        },
        children: [
            (0, n.jsx)(G, {
                quest: t,
                isInFeaturedSection: a,
                isHovering: E,
                errorHints: f,
                warningHints: N,
                isVisibleInViewport: T,
                sourceQuestContent: C,
            }),
            (0, n.jsx)(eU, {
                quest: t,
                questContent: r,
                isHovering: E,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: v,
                isVisibleInViewport: T,
                sourceQuestContent: C,
                questNameHeadingId: h,
            }),
        ],
    });
}
let eV = i.memo(function (e) {
    let t = (0, r.bG)([o.A], () => (null != e.questId ? o.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, n.jsx)(d.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, n.jsx)(eK, { ...e, quest: s, impressionRef: t }),
          });
});
