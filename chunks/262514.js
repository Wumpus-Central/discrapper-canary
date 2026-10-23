s.d(e, { M: () => tN });
var n = s(477900),
    i = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(738822),
    o = s(657792),
    c = s(941143),
    u = s(494012),
    d = s(323889),
    m = s(17928),
    x = s(717421),
    h = s(834730),
    E = s(604121),
    C = s(297264),
    f = s(825484),
    g = s(821609),
    j = s(775602),
    N = s(274670),
    v = s(144779),
    A = s(409626),
    _ = s(106799),
    S = s(287809),
    I = s(859703),
    q = s(104886),
    y = s(112142),
    p = s(3738),
    T = s(77870),
    b = s(646917),
    D = s(561844),
    L = s(590202),
    w = s(651892),
    M = s(710969),
    Q = s(977416),
    k = s(576761),
    U = s(801365),
    R = s(792620),
    P = s(117634),
    O = s(453384),
    B = s(201805),
    W = s(442734),
    z = s(887899),
    F = s(79545),
    G = s(62405),
    K = s(398025),
    H = s(617986),
    $ = s(630037),
    Y = s(190107),
    V = s(105292),
    X = s(336779),
    Z = s(503666);
async function J() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function tt(t) {
    let { quest: e, location: s, isInteracting: a, contentPosition: r, sourceQuestContent: o } = t,
        R = i.useRef(null),
        { ref: B, scrollHeight: $ } = (0, u.wR)(),
        tt = 104 !== $,
        { expansionSpring: tn } = (0, x.z)({
            expansionSpring: +!!a,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        ti = (0, b.z)(),
        ta = (0, T.SD)(e, ti),
        tl = ti === k.MA.NITRO && ta,
        tr = (0, Q.Ic)(e),
        to = (0, T.In)(e),
        tc = (0, m.bG)([S.default], () => S.default.getCurrentUser()),
        tu = (0, U.mq)(e.config, tc),
        td = (0, U.mH)(e.config, tc),
        tm = e.userStatus?.enrolledAt != null,
        tx = e.userStatus?.completedAt != null,
        th = e.userStatus?.claimedAt != null,
        tE = (0, U.ks)(e.config),
        tC = e.userStatus?.orbQuantityClaimed ?? (0, U._Z)(e.config),
        tf = (0, U.wo)(e.config, tc),
        { completedRatio: tg, completedRatioDisplay: tj } = (0, T.O9)(e),
        tN = (0, p.A9)(e, o, Y.rE.EMBED_DESKTOP, A.GameProfileSources.QuestEmbed, R),
        tv = (0, F.Pd)(e),
        tA = i.useMemo(
            () =>
                th && tE
                    ? (0, n.jsxs)(
                          te,
                          {
                              questId: e.id,
                              children: [
                                  (0, n.jsx)(_.A, { shouldUseThemeColor: !0, className: Z.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: tC ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : th
                      ? (0, n.jsx)(te, { questId: e.id, children: tu })
                      : tE
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      te,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, n.jsx)(_.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: Z.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: tf ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(te, { questId: e.id, children: td }, e.id),
                          }),
            [tu, th, td, e.id, tf, tC, tE],
        ),
        t_ = i.useMemo(() => {
            if (null != tN)
                return (0, n.jsx)(h.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: Z.h_,
                    children: tN,
                });
        }, [tN]),
        tS = (0, m.bG)([j.Ay], () => j.Ay.useReducedMotion),
        tI = i.useMemo(() => (0, Q.Ic)(e) && !(0, M.GR)(e.userStatus), [e]),
        tq = (0, T.do)({ quest: e, content: s, ctaContent: L.Cy.OPEN_GAME_LINK, sourceQuestContent: o }),
        ty = (0, w.wr)(e),
        tp = i.useCallback(() => {
            tI
                ? tq()
                : ((0, H.mA)({ fromContent: s, questId: e.id }),
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
        }, [tI, tq, e.id, s, r, o]),
        tT = (0, m.bG)([I.A], () => null != I.A.questEnrollmentBlockedUntil, []),
        tb = y.t.useConfig({ location: Y.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: Z.kL,
        ref: R,
        children: [
            (0, n.jsx)(P.A, { visible: tl, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: tn.to([0, 1], [104, ($ ?? 0) + 12]) },
                className: Z.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: Z.c6,
                        children: [
                            !th && tx && (0, n.jsx)("div", { className: Z.Nz }),
                            tm
                                ? (0, n.jsxs)("div", {
                                      className: Z.Tr,
                                      children: [
                                          tx &&
                                              (0, n.jsx)(E.a, {
                                                  importData: J,
                                                  className: Z.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !tS,
                                              }),
                                          (0, n.jsx)(O.A, {
                                              size: 76,
                                              percentComplete: tg,
                                              overlayText: a && !tr ? tj : void 0,
                                              children: (0, n.jsx)(G.A, {
                                                  quest: e,
                                                  location: Y.rE.EMBED_DESKTOP,
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
                                      quest: e,
                                      location: Y.rE.EMBED_DESKTOP,
                                      autoplay: a,
                                      questContent: s,
                                      className: Z.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: B,
                        className: l()(Z.FS, { [Z.wq]: !tt }),
                        children: [
                            (0, n.jsx)(C.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: Z.G$,
                                children: V.intl.format(V.t.EAYZAr, { questName: e.config.messages.questName }),
                            }),
                            ta
                                ? (0, n.jsxs)("div", {
                                      className: Z.xv,
                                      children: [
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: Z.wx,
                                              children: tA,
                                          }),
                                          (0, n.jsx)(W.e, { questId: e.id, orbMultiplierEligibility: ti }),
                                      ],
                                  })
                                : (0, n.jsx)(h.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: Z.wx,
                                      children: tA,
                                  }),
                            t_,
                        ],
                    }),
                    tt &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, K.a)(tn.to([0, 1], [1, 0])) },
                            className: Z.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: X.kL,
                children: tT
                    ? (0, n.jsxs)(f.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t.V293qn) }),
                              (0, n.jsx)(g.$, {
                                  variant: "primary",
                                  onClick: () => (0, H.m6)(e, s, o),
                                  text: V.intl.string(V.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(f.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, {
                                  variant: "secondary",
                                  text: tI ? ty : V.intl.string(V.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: tp,
                              }),
                              tb.enabled && tb.enabledQuestStates.has(tv)
                                  ? (0, n.jsx)(z.A, {
                                        quest: e,
                                        surface: F.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: r,
                                    })
                                  : (0, n.jsx)(ts, {
                                        quest: e,
                                        progressState: to,
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
let te = i.memo(function (t) {
    let { questId: e, children: s } = t;
    return (0, n.jsx)(
        h.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: Z.wx, children: s },
        `${e}_reward`,
    );
});
function ts(t) {
    return (0, Q.Ic)(t.quest) || t.progressState !== T.F3.COMPLETED
        ? (0, n.jsx)(ti, { ...t })
        : (0, n.jsx)(tn, { ...t });
}
function tn(t) {
    let { quest: e, questContent: s, questContentPosition: i, sourceQuestContent: a } = t,
        l = (0, m.bG)([I.A], () => I.A.isClaimingReward(e.id) || I.A.isFetchingRewardCode(e.id)),
        r = (0, $.D)({ quest: e, questContent: s, questContentPosition: i, sourceQuestContent: a });
    return (0, n.jsx)(g.$, {
        fullWidth: !0,
        variant: "primary",
        loading: l,
        onClick: r,
        text: V.intl.string(V.t.cfY4PE),
    });
}
function ti(t) {
    let { quest: e, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = t,
        r = (0, m.bG)([I.A], () => I.A.isEnrolling(e.id)),
        o = (0, R.vv)(e),
        c = (0, R.Cr)(e),
        u = (0, Q.Ic)(e),
        d = (0, B._c)({
            progressState: s,
            quest: e,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        x = (0, T.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
    return u
        ? (0, n.jsx)(g.$, {
              variant: "secondary",
              disabled: !0,
              text: V.intl.format(V.t["6p8BZx"], { expiryDate: x }),
              fullWidth: !0,
          })
        : (0, n.jsx)(g.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == d.onClick,
              loading: r,
              onClick: d.onClick ?? void 0,
              text: d.text,
          });
}
var ta = s(661531),
    tl = s(366010),
    tr = s(62010),
    to = s(939249),
    tc = s(365199),
    tu = s(820081),
    td = s(736653),
    tm = s(814925),
    tx = s(918338),
    th = s(270045),
    tE = s(57718),
    tC = s(322335);
function tf(t) {
    let { quest: e, isInteracting: s, location: i, sourceQuestContent: a } = t,
        l = (0, Q.Ic)(e),
        r = e.userStatus?.claimedAt != null,
        o = (0, T.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, td.Ay)(),
        u = (0, tl.M)(c) ? "text-muted" : "text-overlay-light";
    return (0, n.jsxs)("div", {
        className: tC.kL,
        children: [
            (0, n.jsx)("div", {
                className: tC.IC,
                children: (0, n.jsx)(tx.A, {
                    quest: e,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, n.jsx)("div", { className: tC.Lw }),
            (0, n.jsx)("div", {
                className: tC.nX,
                children: (0, n.jsxs)("div", {
                    className: tC.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tC.mY,
                            children: [
                                e.preview &&
                                    (0, n.jsx)("div", {
                                        className: tC.Bv,
                                        children: (0, n.jsx)(tr.E, {
                                            type: { text: V.intl.string(V.t.SKNnqq) },
                                            variant: "primary",
                                        }),
                                    }),
                                (0, n.jsx)(th.C, {
                                    questContent: i,
                                    quest: e,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (t) =>
                                        (0, n.jsx)(to.D, {
                                            ...t,
                                            className: tC.iI,
                                            "aria-label": V.intl.string(V.t.DEoVWZ),
                                            children: (0, n.jsx)(tc.MoreHorizontalIcon, {
                                                size: "md",
                                                color: "currentColor",
                                                className: tC.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(tE.Ay, {
                            className: tC.Iu,
                            logotypeClassName: tC.ND,
                            quest: e,
                            separatorSpacing: tE.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: tC.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: tC.O,
                                    children: [
                                        (0, n.jsx)(h.E, {
                                            className: tC.vT,
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: u,
                                            children: V.intl.string(V.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(tm.A, {
                                            className: tC.w$,
                                            size: 16,
                                            color: ta.A.unsafe_rawColors.GREEN_360.css,
                                            "aria-label": V.intl.string(V.t.OfMjx9),
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(tu.B, {
                                                color: ta.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, n.jsx)(h.E, {
                                            className: tC.eA,
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
                                    : (0, n.jsx)(h.E, {
                                          className: tC.xK,
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
var tg = s(989673),
    tj = s(175926);
function tN(t) {
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
                className: l()(tg.k, tj.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(tf, { quest: e, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(tt, {
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
