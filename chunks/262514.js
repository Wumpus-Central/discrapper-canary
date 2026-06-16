s.d(t, { M: () => ej });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(507107),
    o = s(73473),
    c = s(922139),
    u = s(494012),
    d = s(717421),
    m = s(834730),
    x = s(604121),
    h = s(534514),
    E = s(825484),
    j = s(821609),
    g = s(17928),
    f = s(775602),
    C = s(409626),
    v = s(106799),
    N = s(287809),
    A = s(859703),
    S = s(192444),
    q = s(112142),
    _ = s(3738),
    b = s(347135),
    y = s(646917),
    p = s(561844),
    I = s(590202),
    w = s(651892),
    D = s(710969),
    T = s(576761),
    M = s(801365),
    Q = s(792620),
    k = s(895253),
    L = s(453384),
    U = s(371912),
    O = s(442734),
    B = s(368715),
    P = s(79545),
    R = s(646764),
    W = s(398025),
    z = s(617986),
    G = s(795965),
    F = s(190107),
    K = s(375708),
    H = s(562296),
    $ = s(474491);
let Y = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function V(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: r, sourceQuestContent: o } = e,
        { enabled: Q } = S.jm.useConfig({ location: F.rE.EMBED_DESKTOP }),
        U = i.useRef(null),
        { ref: G, scrollHeight: V } = (0, u.wR)(),
        J = 104 !== V,
        { expansionSpring: ee } = (0, d.z)({
            expansionSpring: +!!a,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        et = (0, y.z)(),
        es = (0, b.SD)(t, et),
        en = et === T.MA.NITRO && es,
        ei = (0, D.Ic)(t),
        ea = (0, b.In)(t),
        el = (0, g.bG)([N.default], () => N.default.getCurrentUser()),
        er = (0, M.mq)(t.config, el),
        eo = (0, M.mH)(t.config, el),
        ec = t.userStatus?.enrolledAt != null,
        eu = t.userStatus?.completedAt != null,
        ed = t.userStatus?.claimedAt != null,
        em = (0, M.ks)(t.config),
        ex = t.userStatus?.orbQuantityClaimed ?? (0, M._Z)(t.config),
        eh = (0, M.wo)(t.config, el),
        { completedRatio: eE, completedRatioDisplay: ej } = (0, b.O9)(t),
        eg = (0, _.A9)(t, o, F.rE.EMBED_DESKTOP, C.Ob.QuestEmbed, U),
        ef = (0, P.Pd)(t),
        eC = i.useMemo(
            () =>
                ed && em
                    ? (0, n.jsxs)(
                          X,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(v.A, { shouldUseThemeColor: !0, className: $.Kq, customSize: 14 }),
                                  K.intl.format(K.t["nLXlh+"], { orbAmount: ex ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : ed
                      ? (0, n.jsx)(X, { questId: t.id, children: er })
                      : em
                        ? K.intl.format(K.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      X,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(v.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: $.Kq,
                                                  customSize: 14,
                                              }),
                                              K.intl.format(K.t["nLXlh+"], { orbAmount: eh ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : K.intl.format(K.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(X, { questId: t.id, children: eo }, t.id),
                          }),
            [er, ed, eo, t.id, eh, ex, em],
        ),
        ev = i.useMemo(() => {
            if (null != eg)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: $.h_,
                    children: eg,
                });
        }, [eg]),
        eN = (0, g.bG)([f.Ay], () => f.Ay.useReducedMotion),
        eA = i.useMemo(() => Q && (0, D.Ic)(t) && !(0, D.GR)(t.userStatus), [Q, t]),
        eS = (0, b.do)({ quest: t, content: s, ctaContent: I.Cy.OPEN_GAME_LINK, sourceQuestContent: o }),
        eq = (0, w.wr)(t),
        e_ = i.useCallback(() => {
            eA
                ? eS()
                : ((0, z.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                  (0, p.Y5)({
                      questId: t.id,
                      questContent: s,
                      questContentPosition: r,
                      questContentCTA: I.Cy.LEARN_MORE,
                      sourceQuestContent: o,
                  }));
        }, [eA, eS, t.id, s, r, o]),
        eb = (0, g.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
        ey = q.t.useConfig({ location: F.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: $.kL,
        ref: U,
        children: [
            (0, n.jsx)(k.A, { visible: en, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: ee.to([0, 1], [104, (V ?? 0) + 12]) },
                className: $.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: $.c6,
                        children: [
                            !ed && eu && (0, n.jsx)("div", { className: $.Nz }),
                            ec
                                ? (0, n.jsxs)("div", {
                                      className: $.Tr,
                                      children: [
                                          eu &&
                                              (0, n.jsx)(x.a, {
                                                  importData: Y,
                                                  className: $.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !eN,
                                              }),
                                          (0, n.jsx)(L.A, {
                                              size: 76,
                                              percentComplete: eE,
                                              overlayText: a && !ei ? ej : void 0,
                                              children: (0, n.jsx)(R.A, {
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
                                : (0, n.jsx)(R.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: $.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: G,
                        className: l()($.FS, { [$.wq]: !J }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: $.G$,
                                children: K.intl.format(K.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            es
                                ? (0, n.jsxs)("div", {
                                      className: $.xv,
                                      children: [
                                          (0, n.jsx)(m.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: $.wx,
                                              children: eC,
                                          }),
                                          (0, n.jsx)(O.e, { questId: t.id, orbMultiplierEligibility: et }),
                                      ],
                                  })
                                : (0, n.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: $.wx,
                                      children: eC,
                                  }),
                            ev,
                        ],
                    }),
                    J &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, W.a)(ee.to([0, 1], [1, 0])) },
                            className: $.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: H.kL,
                children: eb
                    ? (0, n.jsxs)(E.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(j.$, { variant: "secondary", disabled: !0, text: K.intl.string(K.t.V293qn) }),
                              (0, n.jsx)(j.$, {
                                  variant: "primary",
                                  onClick: () => (0, z.m6)(t, s, o),
                                  text: K.intl.string(K.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(E.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(j.$, {
                                  variant: "secondary",
                                  text: eA ? eq : K.intl.string(K.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: e_,
                              }),
                              ey.enabled && ey.enabledQuestStates.has(ef)
                                  ? (0, n.jsx)(B.A, {
                                        quest: t,
                                        surface: P.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: r,
                                    })
                                  : (0, n.jsx)(Z, {
                                        quest: t,
                                        progressState: ea,
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
let X = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: $.wx, children: s },
        `${t}_reward`,
    );
});
function Z(e) {
    return (0, D.Ic)(e.quest) || e.progressState !== b.F3.COMPLETED
        ? (0, n.jsx)(ee, { ...e })
        : (0, n.jsx)(J, { ...e });
}
function J(e) {
    let { quest: t, questContent: s, questContentPosition: i, sourceQuestContent: a } = e,
        l = (0, g.bG)([A.A], () => A.A.isClaimingReward(t.id) || A.A.isFetchingRewardCode(t.id)),
        r = (0, G.D)({
            quest: t,
            questContent: s,
            questContentPosition: i,
            sourceQuestContent: a,
            experimentLocation: F.rE.EMBED_DESKTOP,
        });
    return (0, n.jsx)(j.$, {
        fullWidth: !0,
        variant: "primary",
        loading: l,
        onClick: r,
        text: K.intl.string(K.t.cfY4PE),
    });
}
function ee(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        r = (0, g.bG)([A.A], () => A.A.isEnrolling(t.id)),
        o = (0, Q.vv)(t),
        c = (0, Q.Cr)(t),
        u = (0, D.Ic)(t),
        d = (0, U._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        m = (0, b.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return u
        ? (0, n.jsx)(j.$, {
              variant: "secondary",
              disabled: !0,
              text: K.intl.format(K.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(j.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == d.onClick,
              loading: r,
              onClick: d.onClick ?? void 0,
              text: d.text,
          });
}
var et = s(366010),
    es = s(508770),
    en = s(939249),
    ei = s(365199),
    ea = s(820081),
    el = s(661531),
    er = s(736653),
    eo = s(814925),
    ec = s(918338),
    eu = s(270045),
    ed = s(57718),
    em = s(368774);
function ex(e) {
    let { quest: t, isInteracting: s, location: i, sourceQuestContent: a } = e,
        l = (0, D.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        o = (0, b.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, er.Ay)(),
        u = (0, et.M)(c) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: em.kL,
        children: [
            (0, n.jsx)("div", {
                className: em.IC,
                children: (0, n.jsx)(ec.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: em.l1,
                    imageClassName: em.c8,
                }),
            }),
            (0, n.jsx)("div", { className: em.Lw }),
            (0, n.jsx)("div", {
                className: em.nX,
                children: (0, n.jsxs)("div", {
                    className: em.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: em.mY,
                            children: [
                                t.preview &&
                                    (0, n.jsx)("div", {
                                        className: em.Bv,
                                        children: (0, n.jsx)(es.E, {
                                            type: { text: K.intl.string(K.t.SKNnqq) },
                                            variant: "brand",
                                        }),
                                    }),
                                (0, n.jsx)(eu.C, {
                                    questContent: i,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(en.D, {
                                            ...e,
                                            className: em.iI,
                                            "aria-label": K.intl.string(K.t.DEoVWZ),
                                            children: (0, n.jsx)(ei.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: em.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(ed.Ay, {
                            className: em.Iu,
                            logotypeClassName: em.ND,
                            quest: t,
                            separatorSpacing: ed.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: em.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: em.O,
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: u,
                                            children: K.intl.string(K.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(eo.A, {
                                            className: em.w$,
                                            size: 16,
                                            color: el.A.unsafe_rawColors.GREEN_360.css,
                                            "aria-label": K.intl.string(K.t.OfMjx9),
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(ea.B, {
                                                color: el.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children:
                                                t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                l || r
                                    ? null
                                    : (0, n.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          color: u,
                                          children: K.intl.format(K.t["7D8r4F"], { expiryDate: o }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var eh = s(355620),
    eE = s(103257);
function ej(e) {
    let { quest: t, location: s, questContentPosition: a, sourceQuestContent: c } = e,
        [u, d] = i.useState(!1),
        m = () => d(!0),
        x = () => d(!1);
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
                className: l()(eh.k, eE.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(ex, { quest: t, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(V, {
                        quest: t,
                        location: s,
                        isInteracting: u,
                        contentPosition: a,
                        sourceQuestContent: c,
                    }),
                ],
            }),
    });
}
