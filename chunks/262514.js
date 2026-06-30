s.d(t, { M: () => eg });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(24001),
    o = s(73473),
    c = s(18005),
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
    q = s(287809),
    I = s(859703),
    S = s(104886),
    y = s(112142),
    b = s(3738),
    T = s(347135),
    p = s(646917),
    w = s(561844),
    D = s(590202),
    L = s(651892),
    Q = s(710969),
    M = s(576761),
    k = s(801365),
    U = s(792620),
    R = s(895253),
    O = s(453384),
    P = s(371912),
    W = s(442734),
    B = s(368715),
    F = s(79545),
    z = s(646764),
    G = s(398025),
    K = s(617986),
    H = s(795965),
    $ = s(190107),
    Y = s(375708),
    V = s(562296),
    X = s(474491);
async function Z() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function J(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: r, sourceQuestContent: o } = e,
        U = i.useRef(null),
        { ref: P, scrollHeight: H } = (0, u.wR)(),
        J = 104 !== H,
        { expansionSpring: es } = (0, m.z)({
            expansionSpring: +!!a,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        en = (0, p.z)(),
        ei = (0, T.SD)(t, en),
        ea = en === M.MA.NITRO && ei,
        el = (0, Q.Ic)(t),
        er = (0, T.In)(t),
        eo = (0, f.bG)([q.default], () => q.default.getCurrentUser()),
        ec = (0, k.mq)(t.config, eo),
        eu = (0, k.mH)(t.config, eo),
        ed = t.userStatus?.enrolledAt != null,
        em = t.userStatus?.completedAt != null,
        ex = t.userStatus?.claimedAt != null,
        eh = (0, k.ks)(t.config),
        eE = t.userStatus?.orbQuantityClaimed ?? (0, k._Z)(t.config),
        eC = (0, k.wo)(t.config, eo),
        { completedRatio: ej, completedRatioDisplay: ef } = (0, T.O9)(t),
        eg = (0, b.A9)(t, o, $.rE.EMBED_DESKTOP, _.Ob.QuestEmbed, U),
        eN = (0, F.Pd)(t),
        ev = i.useMemo(
            () =>
                ex && eh
                    ? (0, n.jsxs)(
                          ee,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(A.A, { shouldUseThemeColor: !0, className: X.Kq, customSize: 14 }),
                                  Y.intl.format(Y.t["nLXlh+"], { orbAmount: eE ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : ex
                      ? (0, n.jsx)(ee, { questId: t.id, children: ec })
                      : eh
                        ? Y.intl.format(Y.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      ee,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(A.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: X.Kq,
                                                  customSize: 14,
                                              }),
                                              Y.intl.format(Y.t["nLXlh+"], { orbAmount: eC ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : Y.intl.format(Y.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(ee, { questId: t.id, children: eu }, t.id),
                          }),
            [ec, ex, eu, t.id, eC, eE, eh],
        ),
        e_ = i.useMemo(() => {
            if (null != eg)
                return (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: X.h_,
                    children: eg,
                });
        }, [eg]),
        eA = (0, f.bG)([g.Ay], () => g.Ay.useReducedMotion),
        eq = i.useMemo(() => (0, Q.Ic)(t) && !(0, Q.GR)(t.userStatus), [t]),
        eI = (0, T.do)({ quest: t, content: s, ctaContent: D.Cy.OPEN_GAME_LINK, sourceQuestContent: o }),
        eS = (0, L.wr)(t),
        ey = i.useCallback(() => {
            eq
                ? eI()
                : ((0, K.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                  (0, S.E5)(S.kI.STEP_2_CLICKED_INTERNAL, "quest_embed_card_footer")
                      ? (0, N.r)({
                            type: v.F.CLICK_INTERNAL,
                            adCreativeType: d.p.QUEST,
                            adCreativeId: t.id,
                            questContentCTA: D.Cy.LEARN_MORE,
                            surfaceId: s,
                            sourceQuestContent: o,
                            questContentPosition: r,
                        })
                      : (0, w.Y5)({
                            questId: t.id,
                            questContent: s,
                            questContentPosition: r,
                            questContentCTA: D.Cy.LEARN_MORE,
                            sourceQuestContent: o,
                        }));
        }, [eq, eI, t.id, s, r, o]),
        eb = (0, f.bG)([I.A], () => null != I.A.questEnrollmentBlockedUntil, []),
        eT = y.t.useConfig({ location: $.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: X.kL,
        ref: U,
        children: [
            (0, n.jsx)(R.A, { visible: ea, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: es.to([0, 1], [104, (H ?? 0) + 12]) },
                className: X.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: X.c6,
                        children: [
                            !ex && em && (0, n.jsx)("div", { className: X.Nz }),
                            ed
                                ? (0, n.jsxs)("div", {
                                      className: X.Tr,
                                      children: [
                                          em &&
                                              (0, n.jsx)(h.a, {
                                                  importData: Z,
                                                  className: X.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !eA,
                                              }),
                                          (0, n.jsx)(O.A, {
                                              size: 76,
                                              percentComplete: ej,
                                              overlayText: a && !el ? ef : void 0,
                                              children: (0, n.jsx)(z.A, {
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
                                : (0, n.jsx)(z.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: X.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: P,
                        className: l()(X.FS, { [X.wq]: !J }),
                        children: [
                            (0, n.jsx)(E.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: X.G$,
                                children: Y.intl.format(Y.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            ei
                                ? (0, n.jsxs)("div", {
                                      className: X.xv,
                                      children: [
                                          (0, n.jsx)(x.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: X.wx,
                                              children: ev,
                                          }),
                                          (0, n.jsx)(W.e, { questId: t.id, orbMultiplierEligibility: en }),
                                      ],
                                  })
                                : (0, n.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: X.wx,
                                      children: ev,
                                  }),
                            e_,
                        ],
                    }),
                    J &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, G.a)(es.to([0, 1], [1, 0])) },
                            className: X.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: V.kL,
                children: eb
                    ? (0, n.jsxs)(C.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(j.$, { variant: "secondary", disabled: !0, text: Y.intl.string(Y.t.V293qn) }),
                              (0, n.jsx)(j.$, {
                                  variant: "primary",
                                  onClick: () => (0, K.m6)(t, s, o),
                                  text: Y.intl.string(Y.t.vY9GgG),
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
                                  text: eq ? eS : Y.intl.string(Y.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ey,
                              }),
                              eT.enabled && eT.enabledQuestStates.has(eN)
                                  ? (0, n.jsx)(B.A, {
                                        quest: t,
                                        surface: F.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: r,
                                    })
                                  : (0, n.jsx)(et, {
                                        quest: t,
                                        progressState: er,
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
let ee = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        x.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: X.wx, children: s },
        `${t}_reward`,
    );
});
function et(e) {
    return (0, Q.Ic)(e.quest) || e.progressState !== T.F3.COMPLETED
        ? (0, n.jsx)(en, { ...e })
        : (0, n.jsx)(es, { ...e });
}
function es(e) {
    let { quest: t, questContent: s, questContentPosition: i, sourceQuestContent: a } = e,
        l = (0, f.bG)([I.A], () => I.A.isClaimingReward(t.id) || I.A.isFetchingRewardCode(t.id)),
        r = (0, H.D)({
            quest: t,
            questContent: s,
            questContentPosition: i,
            sourceQuestContent: a,
            experimentLocation: $.rE.EMBED_DESKTOP,
        });
    return (0, n.jsx)(j.$, {
        fullWidth: !0,
        variant: "primary",
        loading: l,
        onClick: r,
        text: Y.intl.string(Y.t.cfY4PE),
    });
}
function en(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        r = (0, f.bG)([I.A], () => I.A.isEnrolling(t.id)),
        o = (0, U.vv)(t),
        c = (0, U.Cr)(t),
        u = (0, Q.Ic)(t),
        d = (0, P._c)({
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
    return u
        ? (0, n.jsx)(j.$, {
              variant: "secondary",
              disabled: !0,
              text: Y.intl.format(Y.t["6p8BZx"], { expiryDate: m }),
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
var ei = s(366010),
    ea = s(508770),
    el = s(939249),
    er = s(365199),
    eo = s(820081),
    ec = s(661531),
    eu = s(736653),
    ed = s(814925),
    em = s(918338),
    ex = s(270045),
    eh = s(57718),
    eE = s(368774);
function eC(e) {
    let { quest: t, isInteracting: s, location: i, sourceQuestContent: a } = e,
        l = (0, Q.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        o = (0, T.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, eu.Ay)(),
        u = (0, ei.M)(c) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: eE.kL,
        children: [
            (0, n.jsx)("div", {
                className: eE.IC,
                children: (0, n.jsx)(em.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: eE.l1,
                    imageClassName: eE.c8,
                }),
            }),
            (0, n.jsx)("div", { className: eE.Lw }),
            (0, n.jsx)("div", {
                className: eE.nX,
                children: (0, n.jsxs)("div", {
                    className: eE.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eE.mY,
                            children: [
                                t.preview &&
                                    (0, n.jsx)("div", {
                                        className: eE.Bv,
                                        children: (0, n.jsx)(ea.E, {
                                            type: { text: Y.intl.string(Y.t.SKNnqq) },
                                            variant: "brand",
                                        }),
                                    }),
                                (0, n.jsx)(ex.C, {
                                    questContent: i,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(el.D, {
                                            ...e,
                                            className: eE.iI,
                                            "aria-label": Y.intl.string(Y.t.DEoVWZ),
                                            children: (0, n.jsx)(er.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: eE.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(eh.Ay, {
                            className: eE.Iu,
                            logotypeClassName: eE.ND,
                            quest: t,
                            separatorSpacing: eh.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: eE.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: eE.O,
                                    children: [
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/medium",
                                            color: u,
                                            children: Y.intl.string(Y.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(ed.A, {
                                            className: eE.w$,
                                            size: 16,
                                            color: ec.A.unsafe_rawColors.GREEN_360.css,
                                            "aria-label": Y.intl.string(Y.t.OfMjx9),
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(eo.B, {
                                                color: ec.A.unsafe_rawColors.WHITE.css,
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
                                          children: Y.intl.format(Y.t["7D8r4F"], { expiryDate: o }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ej = s(355620),
    ef = s(103257);
function eg(e) {
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
                className: l()(ej.k, ef.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(eC, { quest: t, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(J, {
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
