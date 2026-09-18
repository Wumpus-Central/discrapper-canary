s.d(e, { M: () => tj });
var n = s(477900),
    i = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(738822),
    o = s(73473),
    c = s(892437),
    u = s(494012),
    d = s(323889),
    m = s(717421),
    x = s(834730),
    h = s(604121),
    E = s(297264),
    C = s(825484),
    f = s(821609),
    g = s(17928),
    j = s(775602),
    N = s(274670),
    v = s(144779),
    A = s(409626),
    _ = s(106799),
    S = s(287809),
    I = s(859703),
    q = s(104886),
    y = s(112142),
    b = s(3738),
    T = s(866157),
    p = s(646917),
    D = s(561844),
    L = s(590202),
    w = s(651892),
    M = s(710969),
    Q = s(576761),
    k = s(801365),
    U = s(792620),
    R = s(895253),
    P = s(453384),
    O = s(130490),
    B = s(442734),
    W = s(887899),
    z = s(79545),
    F = s(62405),
    G = s(398025),
    K = s(617986),
    H = s(630037),
    $ = s(190107),
    Y = s(375708),
    V = s(336779),
    X = s(503666);
async function Z() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function J(t) {
    let { quest: e, location: s, isInteracting: a, contentPosition: r, sourceQuestContent: o } = t,
        U = i.useRef(null),
        { ref: O, scrollHeight: H } = (0, u.wR)(),
        J = 104 !== H,
        { expansionSpring: ts } = (0, m.z)({
            expansionSpring: +!!a,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        tn = (0, p.z)(),
        ti = (0, T.SD)(e, tn),
        ta = tn === Q.MA.NITRO && ti,
        tl = (0, M.Ic)(e),
        tr = (0, T.In)(e),
        to = (0, g.bG)([S.default], () => S.default.getCurrentUser()),
        tc = (0, k.mq)(e.config, to),
        tu = (0, k.mH)(e.config, to),
        td = e.userStatus?.enrolledAt != null,
        tm = e.userStatus?.completedAt != null,
        tx = e.userStatus?.claimedAt != null,
        th = (0, k.ks)(e.config),
        tE = e.userStatus?.orbQuantityClaimed ?? (0, k._Z)(e.config),
        tC = (0, k.wo)(e.config, to),
        { completedRatio: tf, completedRatioDisplay: tg } = (0, T.O9)(e),
        tj = (0, b.A9)(e, o, $.rE.EMBED_DESKTOP, A.GameProfileSources.QuestEmbed, U),
        tN = (0, z.Pd)(e),
        tv = i.useMemo(
            () =>
                tx && th
                    ? (0, n.jsxs)(
                          tt,
                          {
                              questId: e.id,
                              children: [
                                  (0, n.jsx)(_.A, { shouldUseThemeColor: !0, className: X.Kq, customSize: 14 }),
                                  Y.intl.format(Y.t["nLXlh+"], { orbAmount: tE ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : tx
                      ? (0, n.jsx)(tt, { questId: e.id, children: tc })
                      : th
                        ? Y.intl.format(Y.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      tt,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, n.jsx)(_.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: X.Kq,
                                                  customSize: 14,
                                              }),
                                              Y.intl.format(Y.t["nLXlh+"], { orbAmount: tC ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : Y.intl.format(Y.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(tt, { questId: e.id, children: tu }, e.id),
                          }),
            [tc, tx, tu, e.id, tC, tE, th],
        ),
        tA = i.useMemo(() => {
            if (null != tj)
                return (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: X.h_,
                    children: tj,
                });
        }, [tj]),
        t_ = (0, g.bG)([j.Ay], () => j.Ay.useReducedMotion),
        tS = i.useMemo(() => (0, M.Ic)(e) && !(0, M.GR)(e.userStatus), [e]),
        tI = (0, T.do)({ quest: e, content: s, ctaContent: L.Cy.OPEN_GAME_LINK, sourceQuestContent: o }),
        tq = (0, w.wr)(e),
        ty = i.useCallback(() => {
            tS
                ? tI()
                : ((0, K.mA)({ fromContent: s, questId: e.id }),
                  (0, q.E5)(q.kI.STEP_2_CLICKED_INTERNAL, "quest_embed_card_footer")
                      ? (0, N.r)({
                            type: v.F.CLICK_INTERNAL,
                            adCreativeType: d.p.QUEST,
                            adCreativeId: e.id,
                            questContentCTA: L.Cy.LEARN_MORE,
                            surfaceId: s,
                            sourceQuestContent: o,
                            questContentPosition: r,
                        })
                      : (0, D.Y5)({
                            questId: e.id,
                            questContent: s,
                            questContentPosition: r,
                            questContentCTA: L.Cy.LEARN_MORE,
                            sourceQuestContent: o,
                        }));
        }, [tS, tI, e.id, s, r, o]),
        tb = (0, g.bG)([I.A], () => null != I.A.questEnrollmentBlockedUntil, []),
        tT = y.t.useConfig({ location: $.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: X.kL,
        ref: U,
        children: [
            (0, n.jsx)(R.A, { visible: ta, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: ts.to([0, 1], [104, (H ?? 0) + 12]) },
                className: X.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: X.c6,
                        children: [
                            !tx && tm && (0, n.jsx)("div", { className: X.Nz }),
                            td
                                ? (0, n.jsxs)("div", {
                                      className: X.Tr,
                                      children: [
                                          tm &&
                                              (0, n.jsx)(h.a, {
                                                  importData: Z,
                                                  className: X.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !t_,
                                              }),
                                          (0, n.jsx)(P.A, {
                                              size: 76,
                                              percentComplete: tf,
                                              overlayText: a && !tl ? tg : void 0,
                                              children: (0, n.jsx)(F.A, {
                                                  quest: e,
                                                  location: $.rE.EMBED_DESKTOP,
                                                  questContent: s,
                                                  autoplay: a,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: o,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, n.jsx)(F.A, {
                                      quest: e,
                                      location: $.rE.EMBED_DESKTOP,
                                      autoplay: a,
                                      questContent: s,
                                      className: X.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: O,
                        className: l()(X.FS, { [X.wq]: !J }),
                        children: [
                            (0, n.jsx)(E.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: X.G$,
                                children: Y.intl.format(Y.t.EAYZAr, { questName: e.config.messages.questName }),
                            }),
                            ti
                                ? (0, n.jsxs)("div", {
                                      className: X.xv,
                                      children: [
                                          (0, n.jsx)(x.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: X.wx,
                                              children: tv,
                                          }),
                                          (0, n.jsx)(B.e, { questId: e.id, orbMultiplierEligibility: tn }),
                                      ],
                                  })
                                : (0, n.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: X.wx,
                                      children: tv,
                                  }),
                            tA,
                        ],
                    }),
                    J &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, G.a)(ts.to([0, 1], [1, 0])) },
                            className: X.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: V.kL,
                children: tb
                    ? (0, n.jsxs)(C.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(f.$, { variant: "secondary", disabled: !0, text: Y.intl.string(Y.t.V293qn) }),
                              (0, n.jsx)(f.$, {
                                  variant: "primary",
                                  onClick: () => (0, K.m6)(e, s, o),
                                  text: Y.intl.string(Y.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(C.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(f.$, {
                                  variant: "secondary",
                                  text: tS ? tq : Y.intl.string(Y.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ty,
                              }),
                              tT.enabled && tT.enabledQuestStates.has(tN)
                                  ? (0, n.jsx)(W.A, {
                                        quest: e,
                                        surface: z.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: r,
                                    })
                                  : (0, n.jsx)(te, {
                                        quest: e,
                                        progressState: tr,
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
let tt = i.memo(function (t) {
    let { questId: e, children: s } = t;
    return (0, n.jsx)(
        x.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: X.wx, children: s },
        `${e}_reward`,
    );
});
function te(t) {
    return (0, M.Ic)(t.quest) || t.progressState !== T.F3.COMPLETED
        ? (0, n.jsx)(tn, { ...t })
        : (0, n.jsx)(ts, { ...t });
}
function ts(t) {
    let { quest: e, questContent: s, questContentPosition: i, sourceQuestContent: a } = t,
        l = (0, g.bG)([I.A], () => I.A.isClaimingReward(e.id) || I.A.isFetchingRewardCode(e.id)),
        r = (0, H.D)({ quest: e, questContent: s, questContentPosition: i, sourceQuestContent: a });
    return (0, n.jsx)(f.$, {
        fullWidth: !0,
        variant: "primary",
        loading: l,
        onClick: r,
        text: Y.intl.string(Y.t.cfY4PE),
    });
}
function tn(t) {
    let { quest: e, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = t,
        r = (0, g.bG)([I.A], () => I.A.isEnrolling(e.id)),
        o = (0, U.vv)(e),
        c = (0, U.Cr)(e),
        u = (0, M.Ic)(e),
        d = (0, O._c)({
            progressState: s,
            quest: e,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        m = (0, T.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
    return u
        ? (0, n.jsx)(f.$, {
              variant: "secondary",
              disabled: !0,
              text: Y.intl.format(Y.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(f.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == d.onClick,
              loading: r,
              onClick: d.onClick ?? void 0,
              text: d.text,
          });
}
var ti = s(366010),
    ta = s(508770),
    tl = s(939249),
    tr = s(365199),
    to = s(820081),
    tc = s(661531),
    tu = s(736653),
    td = s(814925),
    tm = s(918338),
    tx = s(270045),
    th = s(57718),
    tE = s(322335);
function tC(t) {
    let { quest: e, isInteracting: s, location: i, sourceQuestContent: a } = t,
        l = (0, M.Ic)(e),
        r = e.userStatus?.claimedAt != null,
        o = (0, T.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, tu.Ay)(),
        u = (0, ti.M)(c) ? "text-muted" : "text-overlay-light";
    return (0, n.jsxs)("div", {
        className: tE.kL,
        children: [
            (0, n.jsx)("div", {
                className: tE.IC,
                children: (0, n.jsx)(tm.A, {
                    quest: e,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, n.jsx)("div", { className: tE.Lw }),
            (0, n.jsx)("div", {
                className: tE.nX,
                children: (0, n.jsxs)("div", {
                    className: tE.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tE.mY,
                            children: [
                                e.preview &&
                                    (0, n.jsx)("div", {
                                        className: tE.Bv,
                                        children: (0, n.jsx)(ta.E, {
                                            type: { text: Y.intl.string(Y.t.SKNnqq) },
                                            variant: "brand",
                                        }),
                                    }),
                                (0, n.jsx)(tx.C, {
                                    questContent: i,
                                    quest: e,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (t) =>
                                        (0, n.jsx)(tl.D, {
                                            ...t,
                                            className: tE.iI,
                                            "aria-label": Y.intl.string(Y.t.DEoVWZ),
                                            children: (0, n.jsx)(tr.MoreHorizontalIcon, {
                                                size: "md",
                                                color: "currentColor",
                                                className: tE.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(th.Ay, {
                            className: tE.Iu,
                            logotypeClassName: tE.ND,
                            quest: e,
                            separatorSpacing: th.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: tE.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: tE.O,
                                    children: [
                                        (0, n.jsx)(x.E, {
                                            className: tE.vT,
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: u,
                                            children: Y.intl.string(Y.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(td.A, {
                                            className: tE.w$,
                                            size: 16,
                                            color: tc.A.unsafe_rawColors.GREEN_360.css,
                                            "aria-label": Y.intl.string(Y.t.OfMjx9),
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(to.B, {
                                                color: tc.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, n.jsx)(x.E, {
                                            className: tE.eA,
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-overlay-light",
                                            children:
                                                e.config.cosponsorMetadata?.name ?? e.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                l || r
                                    ? null
                                    : (0, n.jsx)(x.E, {
                                          className: tE.xK,
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
var tf = s(989673),
    tg = s(175926);
function tj(t) {
    let { quest: e, location: s, questContentPosition: a, sourceQuestContent: c } = t,
        [u, d] = i.useState(!1);
    function m() {
        return d(!0);
    }
    function x() {
        return d(!1);
    }
    return (0, n.jsx)(o.R, {
        questOrQuests: e,
        questContent: s,
        questContentPosition: a,
        trackGuildAndChannelMetadata: s === r.uF.QUESTS_EMBED,
        sourceQuestContent: c,
        children: (t) =>
            (0, n.jsxs)("div", {
                ref: (e) => {
                    t.current = e;
                },
                className: l()(tf.k, tg.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(tC, { quest: e, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(J, {
                        quest: e,
                        location: s,
                        isInteracting: u,
                        contentPosition: a,
                        sourceQuestContent: c,
                    }),
                ],
            }),
    });
}
