s.d(t, { M: () => eN });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(507107),
    o = s(73473),
    c = s(308186),
    u = s(494012),
    d = s(323889),
    m = s(717421),
    x = s(834730),
    h = s(604121),
    E = s(534514),
    C = s(825484),
    j = s(821609),
    f = s(17928),
    g = s(775602),
    N = s(274670),
    v = s(144779),
    _ = s(409626),
    A = s(106799),
    S = s(287809),
    q = s(859703),
    I = s(192444),
    y = s(104886),
    b = s(112142),
    T = s(3738),
    p = s(347135),
    D = s(646917),
    w = s(561844),
    L = s(590202),
    M = s(651892),
    Q = s(710969),
    k = s(576761),
    U = s(801365),
    R = s(792620),
    O = s(895253),
    P = s(453384),
    B = s(371912),
    W = s(442734),
    F = s(368715),
    z = s(79545),
    G = s(646764),
    K = s(398025),
    H = s(617986),
    $ = s(795965),
    Y = s(190107),
    V = s(375708),
    X = s(562296),
    Z = s(474491);
async function J() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function ee(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: r, sourceQuestContent: o } = e,
        { enabled: R } = I.jm.useConfig({ location: Y.rE.EMBED_DESKTOP }),
        B = i.useRef(null),
        { ref: $, scrollHeight: ee } = (0, u.wR)(),
        en = 104 !== ee,
        { expansionSpring: ei } = (0, m.z)({
            expansionSpring: +!!a,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        ea = (0, D.z)(),
        el = (0, p.SD)(t, ea),
        er = ea === k.MA.NITRO && el,
        eo = (0, Q.Ic)(t),
        ec = (0, p.In)(t),
        eu = (0, f.bG)([S.default], () => S.default.getCurrentUser()),
        ed = (0, U.mq)(t.config, eu),
        em = (0, U.mH)(t.config, eu),
        ex = t.userStatus?.enrolledAt != null,
        eh = t.userStatus?.completedAt != null,
        eE = t.userStatus?.claimedAt != null,
        eC = (0, U.ks)(t.config),
        ej = t.userStatus?.orbQuantityClaimed ?? (0, U._Z)(t.config),
        ef = (0, U.wo)(t.config, eu),
        { completedRatio: eg, completedRatioDisplay: eN } = (0, p.O9)(t),
        ev = (0, T.A9)(t, o, Y.rE.EMBED_DESKTOP, _.Ob.QuestEmbed, B),
        e_ = (0, z.Pd)(t),
        eA = i.useMemo(
            () =>
                eE && eC
                    ? (0, n.jsxs)(
                          et,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(A.A, { shouldUseThemeColor: !0, className: Z.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: ej ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : eE
                      ? (0, n.jsx)(et, { questId: t.id, children: ed })
                      : eC
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      et,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(A.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: Z.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: ef ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(et, { questId: t.id, children: em }, t.id),
                          }),
            [ed, eE, em, t.id, ef, ej, eC],
        ),
        eS = i.useMemo(() => {
            if (null != ev)
                return (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: Z.h_,
                    children: ev,
                });
        }, [ev]),
        eq = (0, f.bG)([g.Ay], () => g.Ay.useReducedMotion),
        eI = i.useMemo(() => R && (0, Q.Ic)(t) && !(0, Q.GR)(t.userStatus), [R, t]),
        ey = (0, p.do)({ quest: t, content: s, ctaContent: L.Cy.OPEN_GAME_LINK, sourceQuestContent: o }),
        eb = (0, M.wr)(t),
        eT = i.useCallback(() => {
            eI
                ? ey()
                : ((0, H.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                  (0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_embed_card_footer")
                      ? (0, N.r)({
                            type: v.F.CLICK_INTERNAL,
                            adCreativeType: d.p.QUEST,
                            adCreativeId: t.id,
                            questContentCTA: L.Cy.LEARN_MORE,
                            surfaceId: s,
                            sourceQuestContent: o,
                            questContentPosition: r,
                        })
                      : (0, w.Y5)({
                            questId: t.id,
                            questContent: s,
                            questContentPosition: r,
                            questContentCTA: L.Cy.LEARN_MORE,
                            sourceQuestContent: o,
                        }));
        }, [eI, ey, t.id, s, r, o]),
        ep = (0, f.bG)([q.A], () => null != q.A.questEnrollmentBlockedUntil, []),
        eD = b.t.useConfig({ location: Y.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: Z.kL,
        ref: B,
        children: [
            (0, n.jsx)(O.A, { visible: er, glow: !0 }),
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
                                                  shouldAnimate: !eq,
                                              }),
                                          (0, n.jsx)(P.A, {
                                              size: 76,
                                              percentComplete: eg,
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
                                              children: eA,
                                          }),
                                          (0, n.jsx)(W.e, { questId: t.id, orbMultiplierEligibility: ea }),
                                      ],
                                  })
                                : (0, n.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: Z.wx,
                                      children: eA,
                                  }),
                            eS,
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
                children: ep
                    ? (0, n.jsxs)(C.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(j.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t.V293qn) }),
                              (0, n.jsx)(j.$, {
                                  variant: "primary",
                                  onClick: () => (0, H.m6)(t, s, o),
                                  text: V.intl.string(V.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(C.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(j.$, {
                                  variant: "secondary",
                                  text: eI ? eb : V.intl.string(V.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: eT,
                              }),
                              eD.enabled && eD.enabledQuestStates.has(e_)
                                  ? (0, n.jsx)(F.A, {
                                        quest: t,
                                        surface: z.V3.QUEST_EMBED,
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
    return (0, Q.Ic)(e.quest) || e.progressState !== p.F3.COMPLETED
        ? (0, n.jsx)(ei, { ...e })
        : (0, n.jsx)(en, { ...e });
}
function en(e) {
    let { quest: t, questContent: s, questContentPosition: i, sourceQuestContent: a } = e,
        l = (0, f.bG)([q.A], () => q.A.isClaimingReward(t.id) || q.A.isFetchingRewardCode(t.id)),
        r = (0, $.D)({
            quest: t,
            questContent: s,
            questContentPosition: i,
            sourceQuestContent: a,
            experimentLocation: Y.rE.EMBED_DESKTOP,
        });
    return (0, n.jsx)(j.$, {
        fullWidth: !0,
        variant: "primary",
        loading: l,
        onClick: r,
        text: V.intl.string(V.t.cfY4PE),
    });
}
function ei(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        r = (0, f.bG)([q.A], () => q.A.isEnrolling(t.id)),
        o = (0, R.vv)(t),
        c = (0, R.Cr)(t),
        u = (0, Q.Ic)(t),
        d = (0, B._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        m = (0, p.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return u
        ? (0, n.jsx)(j.$, {
              variant: "secondary",
              disabled: !0,
              text: V.intl.format(V.t["6p8BZx"], { expiryDate: m }),
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
var ea = s(366010),
    el = s(508770),
    er = s(939249),
    eo = s(365199),
    ec = s(820081),
    eu = s(661531),
    ed = s(736653),
    em = s(814925),
    ex = s(918338),
    eh = s(270045),
    eE = s(57718),
    eC = s(368774);
function ej(e) {
    let { quest: t, isInteracting: s, location: i, sourceQuestContent: a } = e,
        l = (0, Q.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        o = (0, p.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, ed.Ay)(),
        u = (0, ea.M)(c) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: eC.kL,
        children: [
            (0, n.jsx)("div", {
                className: eC.IC,
                children: (0, n.jsx)(ex.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: eC.l1,
                    imageClassName: eC.c8,
                }),
            }),
            (0, n.jsx)("div", { className: eC.Lw }),
            (0, n.jsx)("div", {
                className: eC.nX,
                children: (0, n.jsxs)("div", {
                    className: eC.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eC.mY,
                            children: [
                                t.preview &&
                                    (0, n.jsx)("div", {
                                        className: eC.Bv,
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
                                            className: eC.iI,
                                            "aria-label": V.intl.string(V.t.DEoVWZ),
                                            children: (0, n.jsx)(eo.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: eC.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(eE.Ay, {
                            className: eC.Iu,
                            logotypeClassName: eC.ND,
                            quest: t,
                            separatorSpacing: eE.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: eC.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: eC.O,
                                    children: [
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/medium",
                                            color: u,
                                            children: V.intl.string(V.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(em.A, {
                                            className: eC.w$,
                                            size: 16,
                                            color: eu.A.unsafe_rawColors.GREEN_360.css,
                                            "aria-label": V.intl.string(V.t.OfMjx9),
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(ec.B, {
                                                color: eu.A.unsafe_rawColors.WHITE.css,
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
                                          color: u,
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
var ef = s(355620),
    eg = s(103257);
function eN(e) {
    let { quest: t, location: s, questContentPosition: a, sourceQuestContent: c } = e,
        [u, d] = i.useState(!1);
    function m() {
        return d(!0);
    }
    function x() {
        return d(!1);
    }
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
                className: l()(ef.k, eg.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(ej, { quest: t, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(ee, {
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
