s.d(t, { M: () => ex });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(507107),
    r = s(73473),
    c = s(922139),
    u = s(494012),
    d = s(717421),
    m = s(834730),
    x = s(604121),
    h = s(534514),
    j = s(825484),
    E = s(821609),
    g = s(17928),
    f = s(775602),
    C = s(409626),
    v = s(106799),
    N = s(287809),
    A = s(859703),
    q = s(192444),
    S = s(112142),
    _ = s(629455),
    b = s(31587),
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
    B = s(442734),
    O = s(192551),
    W = s(79545),
    R = s(646764),
    P = s(398025),
    z = s(617986),
    G = s(190107),
    F = s(375708),
    H = s(562296),
    K = s(474491);
let $ = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function Y(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: o, sourceQuestContent: r } = e,
        { enabled: Q } = q.jm.useConfig({ location: G.rE.EMBED_DESKTOP }),
        U = i.useRef(null),
        { ref: Y, scrollHeight: Z } = (0, u.wR)(),
        J = 104 !== Z,
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
        eo = (0, M.mq)(t.config, el),
        er = (0, M.mH)(t.config, el),
        ec = t.userStatus?.enrolledAt != null,
        eu = t.userStatus?.completedAt != null,
        ed = t.userStatus?.claimedAt != null,
        em = (0, M.ks)(t.config),
        ex = t.userStatus?.orbQuantityClaimed ?? (0, M._Z)(t.config),
        eh = (0, M.wo)(t.config, el),
        { completedRatio: ej, completedRatioDisplay: eE } = (0, b.O9)(t),
        eg = (0, _.A9)(t, r, G.rE.EMBED_DESKTOP, C.Ob.QuestEmbed, U),
        ef = (0, W.Pd)(t),
        eC = i.useMemo(
            () =>
                ed && em
                    ? (0, n.jsxs)(
                          V,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(v.A, { shouldUseThemeColor: !0, className: K.Kq, customSize: 14 }),
                                  F.intl.format(F.t["nLXlh+"], { orbAmount: ex ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : ed
                      ? (0, n.jsx)(V, { questId: t.id, children: eo })
                      : em
                        ? F.intl.format(F.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      V,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(v.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: K.Kq,
                                                  customSize: 14,
                                              }),
                                              F.intl.format(F.t["nLXlh+"], { orbAmount: eh ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : F.intl.format(F.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(V, { questId: t.id, children: er }, t.id),
                          }),
            [eo, ed, er, t.id, eh, ex, em],
        ),
        ev = i.useMemo(() => {
            if (null != eg)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: K.h_,
                    children: eg,
                });
        }, [eg]),
        eN = (0, g.bG)([f.A], () => f.A.useReducedMotion),
        eA = i.useMemo(() => Q && (0, D.Ic)(t) && !(0, D.GR)(t.userStatus), [Q, t]),
        eq = (0, b.do)({ quest: t, content: s, ctaContent: I.Cy.OPEN_GAME_LINK, sourceQuestContent: r }),
        eS = (0, w.wr)(t),
        e_ = i.useCallback(() => {
            eA
                ? eq()
                : ((0, z.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                  (0, p.Y5)({
                      questId: t.id,
                      questContent: s,
                      questContentPosition: o,
                      questContentCTA: I.Cy.LEARN_MORE,
                      sourceQuestContent: r,
                  }));
        }, [eA, eq, t.id, s, o, r]),
        eb = (0, g.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
        ey = S.t.useConfig({ location: G.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: K.kL,
        ref: U,
        children: [
            (0, n.jsx)(k.A, { visible: en, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: ee.to([0, 1], [104, (Z ?? 0) + 12]) },
                className: K.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: K.c6,
                        children: [
                            !ed && eu && (0, n.jsx)("div", { className: K.Nz }),
                            ec
                                ? (0, n.jsxs)("div", {
                                      className: K.Tr,
                                      children: [
                                          eu &&
                                              (0, n.jsx)(x.a, {
                                                  importData: $,
                                                  className: K.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !eN,
                                              }),
                                          (0, n.jsx)(L.A, {
                                              size: 76,
                                              percentComplete: ej,
                                              overlayText: a && !ei ? eE : void 0,
                                              children: (0, n.jsx)(R.A, {
                                                  quest: t,
                                                  questContent: s,
                                                  autoplay: a,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: r,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, n.jsx)(R.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: K.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: r,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: Y,
                        className: l()(K.FS, { [K.wq]: !J }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: K.G$,
                                children: F.intl.format(F.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            es
                                ? (0, n.jsxs)("div", {
                                      className: K.xv,
                                      children: [
                                          (0, n.jsx)(m.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: K.wx,
                                              children: eC,
                                          }),
                                          (0, n.jsx)(B.e, { questId: t.id, orbMultiplierEligibility: et }),
                                      ],
                                  })
                                : (0, n.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: K.wx,
                                      children: eC,
                                  }),
                            ev,
                        ],
                    }),
                    J &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, P.a)(ee.to([0, 1], [1, 0])) },
                            className: K.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: H.kL,
                children: eb
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(E.$, { variant: "secondary", disabled: !0, text: F.intl.string(F.t.V293qn) }),
                              (0, n.jsx)(E.$, {
                                  variant: "primary",
                                  onClick: () => (0, z.m6)(t, s, r),
                                  text: F.intl.string(F.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(E.$, {
                                  variant: "secondary",
                                  text: eA ? eS : F.intl.string(F.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: e_,
                              }),
                              ey.enabled && ey.enabledQuestStates.has(ef)
                                  ? (0, n.jsx)(O.A, {
                                        quest: t,
                                        surface: W.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: r,
                                        analyticsCtxQuestContentPosition: o,
                                    })
                                  : (0, n.jsx)(X, {
                                        quest: t,
                                        progressState: ea,
                                        questContent: s,
                                        sourceQuestContent: r,
                                        questContentPosition: o,
                                    }),
                          ],
                      }),
            }),
        ],
    });
}
let V = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: K.wx, children: s },
        `${t}_reward`,
    );
});
function X(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        o = (0, g.bG)([A.A], () => A.A.isEnrolling(t.id)),
        r = (0, Q.vv)(t),
        c = (0, Q.Cr)(t),
        u = (0, D.Ic)(t),
        d = (0, U._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: r,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        m = (0, b.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return u
        ? (0, n.jsx)(E.$, {
              variant: "secondary",
              disabled: !0,
              text: F.intl.format(F.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(E.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == d.onClick,
              loading: o,
              onClick: d.onClick ?? void 0,
              text: d.text,
          });
}
var Z = s(366010),
    J = s(508770),
    ee = s(939249),
    et = s(365199),
    es = s(820081),
    en = s(661531),
    ei = s(736653),
    ea = s(814925),
    el = s(918338),
    eo = s(270045),
    er = s(57718),
    ec = s(368774);
function eu(e) {
    let { quest: t, isInteracting: s, location: i, sourceQuestContent: a } = e,
        l = (0, D.Ic)(t),
        o = t.userStatus?.claimedAt != null,
        r = (0, b.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, ei.Ay)(),
        u = (0, Z.M)(c) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, n.jsx)("div", {
                className: ec.IC,
                children: (0, n.jsx)(el.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: ec.l1,
                    imageClassName: ec.c8,
                }),
            }),
            (0, n.jsx)("div", { className: ec.Lw }),
            (0, n.jsx)("div", {
                className: ec.nX,
                children: (0, n.jsxs)("div", {
                    className: ec.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ec.mY,
                            children: [
                                t.preview &&
                                    (0, n.jsx)("div", {
                                        className: ec.Bv,
                                        children: (0, n.jsx)(J.E, {
                                            type: { text: F.intl.string(F.t.SKNnqq) },
                                            variant: "brand",
                                        }),
                                    }),
                                (0, n.jsx)(eo.C, {
                                    questContent: i,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(ee.D, {
                                            ...e,
                                            className: ec.iI,
                                            "aria-label": F.intl.string(F.t.DEoVWZ),
                                            children: (0, n.jsx)(et.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ec.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(er.Ay, {
                            className: ec.Iu,
                            logotypeClassName: ec.ND,
                            quest: t,
                            separatorSpacing: er.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: ec.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: ec.O,
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: u,
                                            children: F.intl.string(F.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(ea.A, {
                                            className: ec.w$,
                                            size: 16,
                                            color: en.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(es.B, {
                                                color: en.A.unsafe_rawColors.WHITE.css,
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
                                l || o
                                    ? null
                                    : (0, n.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          color: u,
                                          children: F.intl.format(F.t["7D8r4F"], { expiryDate: r }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ed = s(355620),
    em = s(103257);
function ex(e) {
    let { quest: t, location: s, questContentPosition: a, sourceQuestContent: c } = e,
        [u, d] = i.useState(!1),
        m = () => d(!0),
        x = () => d(!1);
    return (0, n.jsx)(r.R, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: a,
        trackGuildAndChannelMetadata: s === o.uF.QUESTS_EMBED,
        sourceQuestContent: c,
        children: (e) =>
            (0, n.jsxs)("div", {
                ref: (t) => {
                    e.current = t;
                },
                className: l()(ed.k, em.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(eu, { quest: t, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(Y, {
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
