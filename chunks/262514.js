s.d(t, { M: () => ed });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(507107),
    r = s(73473),
    c = s(873174),
    u = s(494012),
    d = s(717421),
    m = s(834730),
    x = s(604121),
    h = s(534514),
    j = s(825484),
    g = s(821609),
    E = s(17928),
    f = s(775602),
    v = s(409626),
    C = s(106799),
    N = s(287809),
    A = s(859703),
    q = s(112142),
    S = s(838077),
    _ = s(31587),
    b = s(646917),
    y = s(561844),
    p = s(590202),
    I = s(710969),
    w = s(576761),
    T = s(801365),
    D = s(792620),
    Q = s(895253),
    k = s(453384),
    M = s(371912),
    U = s(442734),
    L = s(368715),
    B = s(79545),
    W = s(646764),
    O = s(398025),
    R = s(617986),
    z = s(190107),
    P = s(375708),
    F = s(562296),
    G = s(474491);
let H = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function K(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: o, sourceQuestContent: r } = e,
        D = i.useRef(null),
        { ref: M, scrollHeight: K } = (0, u.wR)(),
        V = 104 !== K,
        { expansionSpring: X } = (0, d.z)({ expansionSpring: +!!a, config: { tension: 250, friction: 20, clamp: !0 } }),
        Z = (0, b.z)(),
        J = (0, _.SD)(t, Z),
        ee = Z === w.MA.NITRO && J,
        et = (0, I.Ic)(t),
        es = (0, _.In)(t),
        en = (0, E.bG)([N.default], () => N.default.getCurrentUser()),
        ei = (0, T.mq)(t.config, en),
        ea = (0, T.mH)(t.config, en),
        el = t.userStatus?.enrolledAt != null,
        eo = t.userStatus?.completedAt != null,
        er = t.userStatus?.claimedAt != null,
        ec = (0, T.ks)(t.config),
        eu = t.userStatus?.orbQuantityClaimed ?? (0, T._Z)(t.config),
        ed = (0, T.wo)(t.config, en),
        { completedRatio: em, completedRatioDisplay: ex } = (0, _.O9)(t),
        eh = (0, S.A9)(t, r, z.rE.EMBED_DESKTOP, s, v.Ob.QuestEmbed, D),
        ej = (0, B.Pd)(t),
        eg = i.useMemo(
            () =>
                er && ec
                    ? (0, n.jsxs)(
                          $,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(C.A, { shouldUseThemeColor: !0, className: G.Kq, customSize: 14 }),
                                  P.intl.format(P.t["nLXlh+"], { orbAmount: eu ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : er
                      ? (0, n.jsx)($, { questId: t.id, children: ei })
                      : ec
                        ? P.intl.format(P.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      $,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(C.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: G.Kq,
                                                  customSize: 14,
                                              }),
                                              P.intl.format(P.t["nLXlh+"], { orbAmount: ed ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : P.intl.format(P.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)($, { questId: t.id, children: ea }, t.id),
                          }),
            [ei, er, ea, t.id, ed, eu, ec],
        ),
        eE = i.useMemo(() => {
            if (null != eh)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: G.h_,
                    children: eh,
                });
        }, [eh]),
        ef = (0, E.bG)([f.A], () => f.A.useReducedMotion),
        ev = i.useCallback(() => {
            (0, R.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, y.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: o,
                    questContentCTA: p.Cy.LEARN_MORE,
                    sourceQuestContent: r,
                });
        }, [t.id, s, o, r]),
        eC = (0, E.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
        eN = q.t.useConfig({ location: z.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: G.kL,
        ref: D,
        children: [
            (0, n.jsx)(Q.A, { visible: ee, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: X.to([0, 1], [104, (K ?? 0) + 12]) },
                className: G.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: G.c6,
                        children: [
                            !er && eo && (0, n.jsx)("div", { className: G.Nz }),
                            el
                                ? (0, n.jsxs)("div", {
                                      className: G.Tr,
                                      children: [
                                          eo &&
                                              (0, n.jsx)(x.a, {
                                                  importData: H,
                                                  className: G.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !ef,
                                              }),
                                          (0, n.jsx)(k.A, {
                                              size: 76,
                                              percentComplete: em,
                                              overlayText: a && !et ? ex : void 0,
                                              children: (0, n.jsx)(W.A, {
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
                                : (0, n.jsx)(W.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: G.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: r,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: M,
                        className: l()(G.FS, { [G.wq]: !V }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: G.G$,
                                children: P.intl.format(P.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            J
                                ? (0, n.jsxs)("div", {
                                      className: G.xv,
                                      children: [
                                          (0, n.jsx)(m.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: G.wx,
                                              children: eg,
                                          }),
                                          (0, n.jsx)(U.e, { questId: t.id, orbMultiplierEligibility: Z }),
                                      ],
                                  })
                                : (0, n.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: G.wx,
                                      children: eg,
                                  }),
                            eE,
                        ],
                    }),
                    V &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, O.a)(X.to([0, 1], [1, 0])) },
                            className: G.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: F.kL,
                children: eC
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, { variant: "secondary", disabled: !0, text: P.intl.string(P.t.V293qn) }),
                              (0, n.jsx)(g.$, {
                                  variant: "primary",
                                  onClick: () => (0, R.m6)(t, s, r),
                                  text: P.intl.string(P.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, {
                                  variant: "secondary",
                                  text: P.intl.string(P.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ev,
                              }),
                              eN.enabled && eN.enabledQuestStates.has(ej)
                                  ? (0, n.jsx)(L.A, {
                                        quest: t,
                                        surface: B.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: r,
                                        analyticsCtxQuestContentPosition: o,
                                    })
                                  : (0, n.jsx)(Y, {
                                        quest: t,
                                        progressState: es,
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
let $ = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: G.wx, children: s },
        `${t}_reward`,
    );
});
function Y(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        o = (0, E.bG)([A.A], () => A.A.isEnrolling(t.id)),
        r = (0, D.vv)(t),
        c = (0, D.Cr)(t),
        u = (0, I.Ic)(t),
        d = (0, M._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: r,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        m = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return u
        ? (0, n.jsx)(g.$, {
              variant: "secondary",
              disabled: !0,
              text: P.intl.format(P.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(g.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == d.onClick,
              loading: o,
              onClick: d.onClick ?? void 0,
              text: d.text,
          });
}
var V = s(366010),
    X = s(508770),
    Z = s(939249),
    J = s(365199),
    ee = s(820081),
    et = s(661531),
    es = s(736653),
    en = s(814925),
    ei = s(918338),
    ea = s(270045),
    el = s(57718),
    eo = s(368774);
function er(e) {
    let { quest: t, isInteracting: s, location: i, sourceQuestContent: a } = e,
        l = (0, I.Ic)(t),
        o = t.userStatus?.claimedAt != null,
        r = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, es.Ay)(),
        u = (0, V.M)(c) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, n.jsx)("div", {
                className: eo.IC,
                children: (0, n.jsx)(ei.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: eo.l1,
                    imageClassName: eo.c8,
                }),
            }),
            (0, n.jsx)("div", { className: eo.Lw }),
            (0, n.jsx)("div", {
                className: eo.nX,
                children: (0, n.jsxs)("div", {
                    className: eo.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eo.mY,
                            children: [
                                t.preview &&
                                    (0, n.jsx)("div", {
                                        className: eo.Bv,
                                        children: (0, n.jsx)(X.E, {
                                            type: { text: P.intl.string(P.t.SKNnqq) },
                                            variant: "brand",
                                        }),
                                    }),
                                (0, n.jsx)(ea.C, {
                                    questContent: i,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(Z.D, {
                                            ...e,
                                            className: eo.iI,
                                            "aria-label": P.intl.string(P.t.DEoVWZ),
                                            children: (0, n.jsx)(J.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: eo.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(el.Ay, {
                            className: eo.Iu,
                            logotypeClassName: eo.ND,
                            quest: t,
                            separatorSpacing: el.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: eo.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: eo.O,
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: u,
                                            children: P.intl.string(P.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(en.A, {
                                            className: eo.w$,
                                            size: 16,
                                            color: et.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(ee.B, {
                                                color: et.A.unsafe_rawColors.WHITE.css,
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
                                          children: P.intl.format(P.t["7D8r4F"], { expiryDate: r }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ec = s(355620),
    eu = s(103257);
function ed(e) {
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
                className: l()(ec.k, eu.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(er, { quest: t, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(K, {
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
