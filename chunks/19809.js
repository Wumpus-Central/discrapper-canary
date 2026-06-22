s.d(t, { sT: () => eB, Ay: () => eX });
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
var m = s(308186),
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
    L = s(814925),
    Q = s(178540),
    q = s(590202),
    w = s(710969),
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
    $ = s(368774);
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
        j = (0, Q.O)((e) => e.getErrorHints(t.id)),
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
                    sourceQuestContentCTA: q.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
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
                                                    !(0, w.Ic)(t) &&
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
                                                  : (0, w.Ic)(t)
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
                                            (0, n.jsx)(L.A, {
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
    ed = s(323889),
    ex = s(843282),
    em = s(825484),
    eC = s(821609),
    eh = s(862482),
    eE = s(31300),
    ej = s(687966),
    ef = s(414499),
    ev = s(274670),
    eN = s(144779),
    eg = s(403362),
    eO = s(104886);
let eA = (0, s(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ep = s(112142),
    ey = s(18437),
    eT = s(971649),
    eI = s(651892),
    e_ = s(901406),
    eS = s(814793),
    eL = s(368715),
    eQ = s(79545),
    eq = s(190107),
    ew = s(562296);
let eb = [
    {
        value: eq.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: eq.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function eR(e) {
    let t,
        s,
        { value: i } = e;
    switch (i) {
        case eq.fO.DESKTOP:
            (s = (0, n.jsx)(eE.k, {})), (t = V.intl.string(V.t["QXc01+"]));
            break;
        case eq.fO.CONSOLE:
            (s = (0, n.jsx)(ej._, {})), (t = V.intl.string(V.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: ew.FL, children: [s, t] });
}
function ek(e) {
    if (0 === e.length) return null;
    switch (e[0].value) {
        case eq.fO.DESKTOP:
            return (0, n.jsxs)("span", {
                className: ew.FL,
                children: [(0, n.jsx)(eE.k, {}), V.intl.string(V.t.g6Dr44)],
            });
        case eq.fO.CONSOLE:
            return (0, n.jsxs)("span", {
                className: ew.FL,
                children: [(0, n.jsx)(ej._, {}), V.intl.string(V.t.iyNbj5)],
            });
        default:
            return (0, eg.xb)(e[0].value);
    }
}
function eM(e) {
    let { quest: t, sourceQuestContent: s } = e,
        n = (0, eT.go)();
    return {
        externalLinkCta: (0, eI.wr)(t),
        handleOpenExternalLink: i.useCallback(() => {
            (0, e_.pu)(t, {
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: q.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            });
        }, [t, s, n]),
    };
}
function eD(e) {
    let { quest: t, sourceQuestContent: s, onClick: i, text: a, primaryCtaButton: l } = e,
        { externalLinkCta: r, handleOpenExternalLink: o } = eM({ quest: t, sourceQuestContent: s });
    return (0, n.jsxs)(em.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(eC.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, n.jsx)(eC.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function eU(e) {
    let { quest: t, sourceQuestContent: s, formattedExpirationDate: i, primaryCtaButton: a } = e,
        { externalLinkCta: l, handleOpenExternalLink: r } = eM({ quest: t, sourceQuestContent: s }),
        o = V.intl.format(V.t["6p8BZx"], { expiryDate: i });
    return (0, n.jsxs)(em.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, n.jsx)(eC.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, n.jsx)(eC.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
        ],
    });
}
function eP(e) {
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
        f = (0, ey.Ut)(),
        v = (0, eT.go)(),
        N = (0, u.RR)({ quest: l }),
        g = (0, u.Vn)(l),
        O = (0, u.S5)(l.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: A,
            isEnrolling: p,
            isQuestEnrollmentBlocked: y,
        } = (0, r.cf)([o.A], () => ({
            isClaiming: o.A.isClaimingReward(l.id) || o.A.isFetchingRewardCode(l.id),
            isEnrolling: o.A.isEnrolling(l.id),
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        })),
        T = l.userStatus?.enrolledAt != null,
        I = l.userStatus?.completedAt != null,
        _ = I && l.userStatus?.claimedAt == null,
        S = (0, w.if)(l),
        L = !(0, w.Ic)(l),
        R = (0, u.In)(l),
        k = (0, b.IO)(l),
        M = (0, b.K$)(l),
        U = (0, b.Cr)(l),
        P = (0, u.fc)(l),
        [H, F, W] = (0, u.Qo)(l, P),
        K = L && R === u.F3.ACCEPTED,
        $ = K && H === c.X0.SELECT,
        B = K && !$ && F.length > 1,
        G = ep.t.useConfig({ location: eq.rE.QUEST_HOME_DESKTOP }),
        X = (0, eQ.Pd)(l),
        Y = (0, Q.O)((e) => e.clearErrorHints),
        Z = i.useCallback(
            (e) => {
                W(e), e === eq.fO.DESKTOP && (x([]), Y(l.id));
            },
            [W, x, Y, l.id],
        ),
        { text: ee, onClick: et } = (0, D._c)({
            progressState: R,
            quest: l,
            questContent: d,
            questContentPosition: m,
            questContentRowIndex: C,
            inGiftInventory: !0,
            isVideoQuest: k,
            inGameQuest: U,
            sourceQuestContent: h,
        }),
        { startingConsoleQuest: es, startConsoleQuest: ei } = (0, u.Wj)({
            questId: l.id,
            beforeRequest: () => {
                j.startAnimation(),
                    (0, eO.E5)(eO.kI.STEP_2_CLICKED_INTERNAL, "quest_tile_cta")
                        ? (0, ev.r)({
                              type: eN.F.CLICK_INTERNAL,
                              adCreativeType: ed.p.QUEST,
                              adCreativeId: l.id,
                              questContentCTA: q.Cy.DEFIBRILLATOR,
                              surfaceId: d,
                              sourceQuestContent: h,
                              questContentPosition: m,
                              questContentRowIndex: C,
                              impressionId: v,
                          })
                        : f({
                              questId: l.id,
                              questContent: d,
                              questContentCTA: q.Cy.DEFIBRILLATOR,
                              questContentPosition: m,
                              questContentRowIndex: C,
                              sourceQuestContent: h,
                          });
            },
            afterRequest: (e) => {
                j.stopAnimation(), x(e);
            },
        }),
        ea = l.userStatus?.claimedAt != null,
        { launchInGameActivity: el } = (0, u.zW)(l),
        er = (0, en.NA)({ quest: l, shortText: !0 }),
        eo = (0, u.do)({ quest: l, content: d, ctaContent: q.Cy.OPEN_GAME_LINK, sourceQuestContent: h }),
        ec = (0, eI.wr)(l),
        { handleOpenExternalLink: eu } = eM({ quest: l, sourceQuestContent: h }),
        eE =
            ((t = eq.rE.QUEST_HOME_DESKTOP),
            (s = eA.useConfig({ location: t }).enabled),
            (a = null != l.config.ctaConfig),
            s && a && !(0, b.g5)(l)),
        e_ = eE ? eu : eo,
        eP = (0, b.I6)(l),
        ez = (0, n.jsx)(eC.$, { variant: "secondary", text: ec, onClick: e_ }),
        eH = (0, n.jsx)(eC.$, { variant: "secondary", text: ec, onClick: e_, fullWidth: !0 }),
        eF = (0, n.jsx)(eC.$, { variant: "secondary", text: ec, onClick: eo }),
        eW = null;
    return (G.enabled && X === eQ.UA.EXPIRED_CLAIMABLE && G.enabledQuestStates.has(X)
        ? (eW = (0, n.jsx)("div", {
              className: ew.x6,
              children: (0, n.jsx)(eL.A, {
                  quest: l,
                  surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: d,
                  analyticsCtxSourceQuestContent: h,
                  analyticsCtxQuestContentPosition: m,
                  analyticsCtxQuestContentRowIndex: C,
              }),
          }))
        : S && _
          ? (eW = (0, n.jsx)("div", {
                className: ew.x6,
                children: (0, n.jsx)(eC.$, {
                    variant: "primary",
                    loading: A,
                    onClick: et ?? void 0,
                    text: ee,
                    fullWidth: !0,
                }),
            }))
          : G.enabled && (X === eQ.UA.COMPLETED || X === eQ.UA.CLAIMED) && G.enabledQuestStates.has(X)
            ? (eW = k
                  ? (0, n.jsx)(eD, {
                        quest: l,
                        sourceQuestContent: h,
                        onClick: et,
                        text: ee,
                        primaryCtaButton: (0, n.jsx)(eL.A, {
                            quest: l,
                            surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: d,
                            analyticsCtxSourceQuestContent: h,
                            analyticsCtxQuestContentPosition: m,
                            analyticsCtxQuestContentRowIndex: C,
                        }),
                    })
                  : (0, eS.vA)(l)
                    ? (0, n.jsxs)(em.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(eC.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(eq.Li.CLOUD_GAMING_ACTIVITY) ? ef.h : ej._,
                                  text: er,
                                  onClick: () => {
                                      el();
                                  },
                              }),
                              (0, n.jsx)(eL.A, {
                                  quest: l,
                                  surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: d,
                                  analyticsCtxSourceQuestContent: h,
                                  analyticsCtxQuestContentPosition: m,
                                  analyticsCtxQuestContentRowIndex: C,
                              }),
                          ],
                      })
                    : (0, n.jsx)("div", {
                          className: ew.x6,
                          children: (0, n.jsx)(eL.A, {
                              quest: l,
                              surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: d,
                              analyticsCtxSourceQuestContent: h,
                              analyticsCtxQuestContentPosition: m,
                              analyticsCtxQuestContentRowIndex: C,
                          }),
                      }))
            : I
              ? (eW = k
                    ? (0, n.jsx)(eD, { quest: l, sourceQuestContent: h, onClick: et, text: ee })
                    : (0, eS.vA)(l)
                      ? (0, n.jsxs)(em.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, n.jsx)(eC.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(eq.Li.CLOUD_GAMING_ACTIVITY) ? ef.h : ej._,
                                    text: er,
                                    onClick: () => {
                                        el();
                                    },
                                }),
                                (0, n.jsx)(eC.$, { variant: "primary", onClick: et ?? void 0, text: ee }),
                            ],
                        })
                      : (0, n.jsx)("div", {
                            className: ew.x6,
                            children: (0, n.jsx)(eC.$, {
                                variant: "primary",
                                onClick: et ?? void 0,
                                text: ee,
                                fullWidth: !0,
                            }),
                        }))
              : L
                ? M
                    ? (eW = (0, n.jsx)("div", {
                          className: ew.x6,
                          children:
                              G.enabled &&
                              (X === eQ.UA.UNENROLLED || X === eQ.UA.ENROLLED || X === eQ.UA.INCOMPLETE) &&
                              G.enabledQuestStates.has(X)
                                  ? (0, n.jsxs)(em.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            X === eQ.UA.UNENROLLED ? eF : eE ? ez : null,
                                            (0, n.jsx)(eL.A, {
                                                quest: l,
                                                surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: h,
                                                analyticsCtxQuestContentPosition: m,
                                            }),
                                        ],
                                    })
                                  : (0, n.jsx)(em.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, n.jsx)(eC.$, {
                                            variant: "primary",
                                            loading: p,
                                            onClick: et ?? void 0,
                                            text: ee,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : T && !ea
                      ? (eW = $
                            ? (0, n.jsx)(ex.Pw, {
                                  className: ew.dd,
                                  isSelected: () => !1,
                                  options: eb,
                                  placeholder: V.intl.string(V.t.drVw4T),
                                  renderOptionLabel: eR,
                                  renderOptionValue: ek,
                                  select: Z,
                                  serialize: (e) => {
                                      switch (e) {
                                          case eq.fO.DESKTOP:
                                              return V.intl.string(V.t["QXc01+"]);
                                          case eq.fO.CONSOLE:
                                              return V.intl.string(V.t["8lAfuB"]);
                                          default:
                                              return (0, eg.xb)(e);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : eP
                              ? (0, n.jsx)("div", {
                                    className: ew.x6,
                                    children: (0, n.jsxs)(em.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            ez,
                                            (0, n.jsx)(eL.A, {
                                                quest: l,
                                                surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: h,
                                                analyticsCtxQuestContentPosition: m,
                                                analyticsCtxQuestContentRowIndex: C,
                                            }),
                                        ],
                                    }),
                                })
                              : G.enabled &&
                                  (X === eQ.UA.ENROLLED || X === eQ.UA.INCOMPLETE) &&
                                  G.enabledQuestStates.has(X)
                                ? eE && (0, b.t)({ quest: l }) && !(0, b.g5)(l)
                                    ? (0, n.jsx)("div", { className: ew.x6, children: eH })
                                    : (0, n.jsx)("div", {
                                          className: ew.x6,
                                          children: (0, n.jsxs)(em.e, {
                                              direction: "horizontal",
                                              fullWidth: !0,
                                              wrap: !1,
                                              children: [
                                                  eE && (k || (0, eS.vA)(l)) ? ez : null,
                                                  (0, n.jsx)(eL.A, {
                                                      quest: l,
                                                      surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                                                      analyticsCtxQuestContent: d,
                                                      analyticsCtxSourceQuestContent: h,
                                                      analyticsCtxQuestContentPosition: m,
                                                  }),
                                              ],
                                          }),
                                      })
                                : (0, b.g5)(l) && !g && H !== c.X0.DESKTOP
                                  ? N
                                      ? (0, n.jsx)("div", {
                                            className: ew.x6,
                                            children: (0, n.jsx)(eC.$, {
                                                variant: "secondary",
                                                onClick: et ?? void 0,
                                                text: ee,
                                                fullWidth: !0,
                                            }),
                                        })
                                      : (0, n.jsx)(eh.$n, {
                                            "data-migration-pending": !0,
                                            color: eh.XD.PRIMARY,
                                            onClick: ei,
                                            disabled: es,
                                            className: ew.x6,
                                            children: (0, n.jsxs)("div", {
                                                className: ew.tn,
                                                children: [j.render(), V.intl.string(V.t.nPThNb)],
                                            }),
                                        })
                                  : k
                                    ? eE
                                        ? (0, n.jsx)("div", {
                                              className: ew.x6,
                                              children: (0, n.jsxs)(em.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      ez,
                                                      (0, n.jsx)(eC.$, {
                                                          variant: "primary",
                                                          onClick: et ?? void 0,
                                                          text: ee,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: ew.x6,
                                              children: (0, n.jsx)(eC.$, {
                                                  variant: "primary",
                                                  onClick: et ?? void 0,
                                                  text: ee,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, eS.vA)(l)
                                      ? eE
                                          ? (0, n.jsx)("div", {
                                                className: ew.x6,
                                                children: (0, n.jsxs)(em.e, {
                                                    direction: "horizontal",
                                                    fullWidth: !0,
                                                    wrap: !1,
                                                    children: [
                                                        ez,
                                                        (0, n.jsx)(eC.$, {
                                                            variant: "primary",
                                                            icon: (0, z.Oz)(l),
                                                            onClick: et ?? void 0,
                                                            text: ee,
                                                        }),
                                                    ],
                                                }),
                                            })
                                          : (0, n.jsx)("div", {
                                                className: ew.x6,
                                                children: (0, n.jsx)(eC.$, {
                                                    variant: "primary",
                                                    icon: (0, z.Oz)(l),
                                                    onClick: et ?? void 0,
                                                    text: ee,
                                                    fullWidth: !0,
                                                }),
                                            })
                                      : (0, n.jsx)("div", {
                                            className: ew.x6,
                                            children: eE
                                                ? eH
                                                : (0, n.jsx)(eC.$, {
                                                      variant: "secondary",
                                                      disabled: !0,
                                                      text: V.intl.string(V.t["9KoPyB"]),
                                                      fullWidth: !0,
                                                  }),
                                        }))
                      : T ||
                        (eW = y
                            ? (0, n.jsxs)(em.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, n.jsx)(eC.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: V.intl.string(V.t.V293qn),
                                      }),
                                      (0, n.jsx)(eC.$, {
                                          variant: "primary",
                                          onClick: () => (0, z.m6)(l, d, h),
                                          text: V.intl.string(V.t.vY9GgG),
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
                                          eF,
                                          G.enabled &&
                                          X === eQ.UA.UNENROLLED &&
                                          G.enabledQuestStates.has(eQ.UA.UNENROLLED)
                                              ? (0, n.jsx)(eL.A, {
                                                    quest: l,
                                                    surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: d,
                                                    analyticsCtxSourceQuestContent: h,
                                                    analyticsCtxQuestContentPosition: m,
                                                })
                                              : (0, n.jsx)(eC.$, {
                                                    loading: p,
                                                    variant: "primary",
                                                    onClick: et ?? void 0,
                                                    text: ee,
                                                    icon: (0, z.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (eW =
                      G.enabled && X === eQ.UA.EXPIRED && G.enabledQuestStates.has(X)
                          ? (0, n.jsx)(eU, {
                                quest: l,
                                sourceQuestContent: h,
                                formattedExpirationDate: O,
                                primaryCtaButton: (0, n.jsx)(eL.A, {
                                    quest: l,
                                    surface: eQ.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: d,
                                    analyticsCtxSourceQuestContent: h,
                                    analyticsCtxQuestContentPosition: m,
                                    analyticsCtxQuestContentRowIndex: C,
                                }),
                            })
                          : (0, n.jsx)(eU, { quest: l, sourceQuestContent: h, formattedExpirationDate: O })),
    null == eW)
        ? null
        : (0, n.jsxs)("div", {
              className: ew.kL,
              children: [
                  (0, n.jsx)("div", { className: ew.qz, children: eW }),
                  B &&
                      (0, n.jsx)("div", {
                          className: ew.qz,
                          children: (0, n.jsx)(ex.Pw, {
                              className: ew.xZ,
                              isSelected: (e) => {
                                  switch (H) {
                                      case c.X0.DESKTOP:
                                          return e === eq.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return e === eq.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: eb,
                              placeholder: V.intl.string(V.t.drVw4T),
                              renderOptionLabel: eR,
                              renderOptionValue: ek,
                              select: Z,
                              serialize: (e) => {
                                  switch (e) {
                                      case eq.fO.DESKTOP:
                                          return V.intl.string(V.t["QXc01+"]);
                                      case eq.fO.CONSOLE:
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
var ez = s(474491);
let eH = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function eF(e) {
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
        { onAssetLoadComplete: L } = i.useContext(H.M),
        { expansionSpring: Q } = (0, E.z)({ expansionSpring: +!!a, config: { ...W.N, clamp: !0 } }),
        q = t.userStatus?.completedAt != null,
        R = t.userStatus?.claimedAt != null,
        k = (0, el.ks)(t.config),
        M = t.userStatus?.orbQuantityClaimed ?? (0, el._Z)(t.config),
        D = (0, el.wo)(t.config, O),
        U = (0, b.I6)(t),
        { completedRatio: z, completedRatioDisplay: K } = (0, u.O9)(t, U),
        $ = (0, en.A9)(t, C, eq.rE.QUEST_HOME_DESKTOP, Z.Ob.QuestHome, j),
        B = (function (e, t) {
            let { variant: s } = es.Mk.useConfig({ location: t });
            return s === es.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : s === es.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : V.intl.format(V.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, eq.rE.QUEST_HOME_DESKTOP),
        G = i.useMemo(
            () =>
                R && k
                    ? (0, n.jsxs)(
                          eW,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(ee.A, { shouldUseThemeColor: !0, className: ez.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: M ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : R
                      ? (0, n.jsx)(eW, { questId: t.id, children: A })
                      : k
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      eW,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(ee.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: ez.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: D ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(eW, { questId: t.id, children: p }, t.id),
                          }),
            [A, R, p, t.id, D, M, k],
        ),
        ed = i.useMemo(() => {
            if (null != $)
                return (0, n.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ez.h_,
                    children: $,
                });
        }, [$]),
        ex = (0, r.bG)([J.Ay], () => J.Ay.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: ez.kL,
        ref: j,
        children: [
            (0, n.jsx)(er.A, { visible: g, glow: !0 }),
            (0, n.jsxs)(m.animated.div, {
                style: { maxHeight: Q.to([0, 1], [104, (I ?? 0) + 12]) },
                className: ez.z,
                children: [
                    (0, n.jsx)("div", {
                        className: ez.c6,
                        children: (0, n.jsxs)(F.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !R && q && (0, n.jsx)("div", { className: ez.Nz }),
                                y
                                    ? (0, n.jsxs)("div", {
                                          className: ez.Tr,
                                          children: [
                                              q &&
                                                  (0, n.jsx)(X.a, {
                                                      importData: eH,
                                                      className: ez.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ex,
                                                  }),
                                              (0, n.jsx)(eo.A, {
                                                  size: 76,
                                                  percentComplete: z,
                                                  overlayText: a && !(0, w.Ic)(t) ? K : void 0,
                                                  children: (0, n.jsx)(eu.A, {
                                                      quest: t,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: L,
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
                                          className: ez.eB,
                                          onLoadComplete: L,
                                          lazyLoad: !0,
                                          sourceQuestContent: C,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: T,
                        className: l()(ez.FS, { [ez.wq]: !S }),
                        children: [
                            (0, n.jsx)(Y.D, {
                                id: h,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: ez.G$,
                                children: B,
                            }),
                            v
                                ? (0, n.jsxs)("div", {
                                      className: ez.xv,
                                      children: [
                                          (0, n.jsx)(N.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: ez.wx,
                                              children: G,
                                          }),
                                          (0, n.jsx)(ec.e, { questId: t.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, n.jsx)(N.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: ez.wx,
                                      children: G,
                                  }),
                            ed,
                        ],
                    }),
                    S &&
                        (0, n.jsx)(m.animated.div, {
                            style: { opacity: (0, P.a)(Q.to([0, 1], [1, 0])) },
                            className: ez.hS,
                        }),
                ],
            }),
            (0, n.jsx)(eP, {
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
let eW = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        N.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: ez.wx, children: s },
        `${t}_reward`,
    );
});
var eK = s(688755),
    eV = s(831368),
    e$ = s(355620);
function eB(e) {
    return `quest-tile-${e}`;
}
function eG(e) {
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
        } = (0, eK.B)({ quest: t, questContent: r, contentPosition: o, rowIndex: c, sourceQuestContent: C }),
        p = i.useContext(x.X),
        { visibilityElementRef: y, almostVisibleInViewport: T } = (0, eV.I)(
            p?.current?.getScrollerNode() ?? null,
            d ?? !1,
        );
    return (0, n.jsxs)("article", {
        id: eB(t.id),
        ref: (e) => {
            (m.current = e), (y.current = e);
        },
        "aria-labelledby": h,
        className: l()(e$.k, s),
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
            (0, n.jsx)(eF, {
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
let eX = i.memo(function (e) {
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
              children: (t) => (0, n.jsx)(eG, { ...e, quest: s, impressionRef: t }),
          });
});
