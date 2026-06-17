s.d(t, { M: () => eN });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(507107),
    o = s(73473),
    c = s(922139),
    d = s(494012),
    u = s(323889),
    m = s(717421),
    x = s(834730),
    h = s(604121),
    E = s(534514),
    j = s(825484),
    C = s(821609),
    g = s(17928),
    f = s(775602),
    N = s(274670),
    v = s(144779),
    A = s(409626),
    _ = s(106799),
    q = s(287809),
    S = s(859703),
    y = s(192444),
    b = s(104886),
    I = s(112142),
    p = s(3738),
    T = s(347135),
    D = s(646917),
    w = s(561844),
    M = s(590202),
    L = s(651892),
    Q = s(710969),
    k = s(576761),
    U = s(801365),
    O = s(792620),
    R = s(895253),
    P = s(453384),
    B = s(371912),
    W = s(442734),
    z = s(368715),
    F = s(79545),
    G = s(646764),
    K = s(398025),
    H = s(617986),
    $ = s(795965),
    Y = s(190107),
    V = s(375708),
    X = s(562296),
    Z = s(474491);
let J = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function ee(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: r, sourceQuestContent: o } = e,
        { enabled: O } = y.jm.useConfig({ location: Y.rE.EMBED_DESKTOP }),
        B = i.useRef(null),
        { ref: $, scrollHeight: ee } = (0, d.wR)(),
        en = 104 !== ee,
        { expansionSpring: ei } = (0, m.z)({
            expansionSpring: +!!a,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        ea = (0, D.z)(),
        el = (0, T.SD)(t, ea),
        er = ea === k.MA.NITRO && el,
        eo = (0, Q.Ic)(t),
        ec = (0, T.In)(t),
        ed = (0, g.bG)([q.default], () => q.default.getCurrentUser()),
        eu = (0, U.mq)(t.config, ed),
        em = (0, U.mH)(t.config, ed),
        ex = t.userStatus?.enrolledAt != null,
        eh = t.userStatus?.completedAt != null,
        eE = t.userStatus?.claimedAt != null,
        ej = (0, U.ks)(t.config),
        eC = t.userStatus?.orbQuantityClaimed ?? (0, U._Z)(t.config),
        eg = (0, U.wo)(t.config, ed),
        { completedRatio: ef, completedRatioDisplay: eN } = (0, T.O9)(t),
        ev = (0, p.A9)(t, o, Y.rE.EMBED_DESKTOP, A.Ob.QuestEmbed, B),
        eA = (0, F.Pd)(t),
        e_ = i.useMemo(
            () =>
                eE && ej
                    ? (0, n.jsxs)(
                          et,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(_.A, { shouldUseThemeColor: !0, className: Z.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: eC ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : eE
                      ? (0, n.jsx)(et, { questId: t.id, children: eu })
                      : ej
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      et,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(_.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: Z.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: eg ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(et, { questId: t.id, children: em }, t.id),
                          }),
            [eu, eE, em, t.id, eg, eC, ej],
        ),
        eq = i.useMemo(() => {
            if (null != ev)
                return (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: Z.h_,
                    children: ev,
                });
        }, [ev]),
        eS = (0, g.bG)([f.Ay], () => f.Ay.useReducedMotion),
        ey = i.useMemo(() => O && (0, Q.Ic)(t) && !(0, Q.GR)(t.userStatus), [O, t]),
        eb = (0, T.do)({ quest: t, content: s, ctaContent: M.Cy.OPEN_GAME_LINK, sourceQuestContent: o }),
        eI = (0, L.wr)(t),
        ep = i.useCallback(() => {
            ey
                ? eb()
                : ((0, H.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                  (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_embed_card_footer")
                      ? (0, N.r)({
                            type: v.F.CLICK_INTERNAL,
                            adCreativeType: u.p.QUEST,
                            adCreativeId: t.id,
                            questContentCTA: M.Cy.LEARN_MORE,
                            surfaceId: s,
                            sourceQuestContent: o,
                            questContentPosition: r,
                        })
                      : (0, w.Y5)({
                            questId: t.id,
                            questContent: s,
                            questContentPosition: r,
                            questContentCTA: M.Cy.LEARN_MORE,
                            sourceQuestContent: o,
                        }));
        }, [ey, eb, t.id, s, r, o]),
        eT = (0, g.bG)([S.A], () => null != S.A.questEnrollmentBlockedUntil, []),
        eD = I.t.useConfig({ location: Y.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: Z.kL,
        ref: B,
        children: [
            (0, n.jsx)(R.A, { visible: er, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: ei.to([0, 1], [104, (ee ?? 0) + 12]) },
                className: Z.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: Z.c6,
                        children: [
                            !eE && eh && (0, n.jsx)("div", { className: Z.Nz }),
                            ex
                                ? (0, n.jsxs)("div", {
                                      className: Z.Tr,
                                      children: [
                                          eh &&
                                              (0, n.jsx)(h.a, {
                                                  importData: J,
                                                  className: Z.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !eS,
                                              }),
                                          (0, n.jsx)(P.A, {
                                              size: 76,
                                              percentComplete: ef,
                                              overlayText: a && !eo ? eN : void 0,
                                              children: (0, n.jsx)(G.A, {
                                                  quest: t,
                                                  questContent: s,
                                                  autoplay: a,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: o,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, n.jsx)(G.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: Z.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: $,
                        className: l()(Z.FS, { [Z.wq]: !en }),
                        children: [
                            (0, n.jsx)(E.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: Z.G$,
                                children: V.intl.format(V.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            el
                                ? (0, n.jsxs)("div", {
                                      className: Z.xv,
                                      children: [
                                          (0, n.jsx)(x.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: Z.wx,
                                              children: e_,
                                          }),
                                          (0, n.jsx)(W.e, { questId: t.id, orbMultiplierEligibility: ea }),
                                      ],
                                  })
                                : (0, n.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: Z.wx,
                                      children: e_,
                                  }),
                            eq,
                        ],
                    }),
                    en &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, K.a)(ei.to([0, 1], [1, 0])) },
                            className: Z.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: X.kL,
                children: eT
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(C.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t.V293qn) }),
                              (0, n.jsx)(C.$, {
                                  variant: "primary",
                                  onClick: () => (0, H.m6)(t, s, o),
                                  text: V.intl.string(V.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(C.$, {
                                  variant: "secondary",
                                  text: ey ? eI : V.intl.string(V.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ep,
                              }),
                              eD.enabled && eD.enabledQuestStates.has(eA)
                                  ? (0, n.jsx)(z.A, {
                                        quest: t,
                                        surface: F.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: r,
                                    })
                                  : (0, n.jsx)(es, {
                                        quest: t,
                                        progressState: ec,
                                        questContent: s,
                                        sourceQuestContent: o,
                                        questContentPosition: r,
                                    }),
                          ],
                      }),
            }),
        ],
    });
}
let et = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        x.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: Z.wx, children: s },
        `${t}_reward`,
    );
});
function es(e) {
    return (0, Q.Ic)(e.quest) || e.progressState !== T.F3.COMPLETED
        ? (0, n.jsx)(ei, { ...e })
        : (0, n.jsx)(en, { ...e });
}
function en(e) {
    let { quest: t, questContent: s, questContentPosition: i, sourceQuestContent: a } = e,
        l = (0, g.bG)([S.A], () => S.A.isClaimingReward(t.id) || S.A.isFetchingRewardCode(t.id)),
        r = (0, $.D)({
            quest: t,
            questContent: s,
            questContentPosition: i,
            sourceQuestContent: a,
            experimentLocation: Y.rE.EMBED_DESKTOP,
        });
    return (0, n.jsx)(C.$, {
        fullWidth: !0,
        variant: "primary",
        loading: l,
        onClick: r,
        text: V.intl.string(V.t.cfY4PE),
    });
}
function ei(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        r = (0, g.bG)([S.A], () => S.A.isEnrolling(t.id)),
        o = (0, O.vv)(t),
        c = (0, O.Cr)(t),
        d = (0, Q.Ic)(t),
        u = (0, B._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        m = (0, T.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return d
        ? (0, n.jsx)(C.$, {
              variant: "secondary",
              disabled: !0,
              text: V.intl.format(V.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(C.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == u.onClick,
              loading: r,
              onClick: u.onClick ?? void 0,
              text: u.text,
          });
}
var ea = s(366010),
    el = s(508770),
    er = s(939249),
    eo = s(365199),
    ec = s(820081),
    ed = s(661531),
    eu = s(736653),
    em = s(814925),
    ex = s(918338),
    eh = s(270045),
    eE = s(57718),
    ej = s(368774);
function eC(e) {
    let { quest: t, isInteracting: s, location: i, sourceQuestContent: a } = e,
        l = (0, Q.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        o = (0, T.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, eu.Ay)(),
        d = (0, ea.M)(c) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: ej.kL,
        children: [
            (0, n.jsx)("div", {
                className: ej.IC,
                children: (0, n.jsx)(ex.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: ej.l1,
                    imageClassName: ej.c8,
                }),
            }),
            (0, n.jsx)("div", { className: ej.Lw }),
            (0, n.jsx)("div", {
                className: ej.nX,
                children: (0, n.jsxs)("div", {
                    className: ej.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ej.mY,
                            children: [
                                t.preview &&
                                    (0, n.jsx)("div", {
                                        className: ej.Bv,
                                        children: (0, n.jsx)(el.E, {
                                            type: { text: V.intl.string(V.t.SKNnqq) },
                                            variant: "brand",
                                        }),
                                    }),
                                (0, n.jsx)(eh.C, {
                                    questContent: i,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(er.D, {
                                            ...e,
                                            className: ej.iI,
                                            "aria-label": V.intl.string(V.t.DEoVWZ),
                                            children: (0, n.jsx)(eo.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ej.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(eE.Ay, {
                            className: ej.Iu,
                            logotypeClassName: ej.ND,
                            quest: t,
                            separatorSpacing: eE.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: ej.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: ej.O,
                                    children: [
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/medium",
                                            color: d,
                                            children: V.intl.string(V.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(em.A, {
                                            className: ej.w$,
                                            size: 16,
                                            color: ed.A.unsafe_rawColors.GREEN_360.css,
                                            "aria-label": V.intl.string(V.t.OfMjx9),
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(ec.B, {
                                                color: ed.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children:
                                                t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                l || r
                                    ? null
                                    : (0, n.jsx)(x.E, {
                                          variant: "text-sm/medium",
                                          color: d,
                                          children: V.intl.format(V.t["7D8r4F"], { expiryDate: o }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var eg = s(355620),
    ef = s(103257);
function eN(e) {
    let { quest: t, location: s, questContentPosition: a, sourceQuestContent: c } = e,
        [d, u] = i.useState(!1),
        m = () => u(!0),
        x = () => u(!1);
    return (0, n.jsx)(o.R, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: a,
        trackGuildAndChannelMetadata: s === r.uF.QUESTS_EMBED,
        sourceQuestContent: c,
        children: (e) =>
            (0, n.jsxs)("div", {
                ref: (t) => {
                    e.current = t;
                },
                className: l()(eg.k, ef.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(eC, { quest: t, location: s, isInteracting: d, sourceQuestContent: c }),
                    (0, n.jsx)(ee, {
                        quest: t,
                        location: s,
                        isInteracting: d,
                        contentPosition: a,
                        sourceQuestContent: c,
                    }),
                ],
            }),
    });
}
