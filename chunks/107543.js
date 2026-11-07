s.d(t, { M: () => ef });
var n = s(477900),
    i = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(506988),
    o = s(280905),
    c = s(120692),
    d = s(494012),
    u = s(323889),
    m = s(855986),
    x = s(717421),
    h = s(834730),
    E = s(604121),
    j = s(534514),
    g = s(825484),
    f = s(821609),
    C = s(775602),
    v = s(438457),
    N = s(144779),
    y = s(409626),
    A = s(106799),
    b = s(287809),
    S = s(122760),
    p = s(112142),
    q = s(870273),
    I = s(61387),
    _ = s(646917),
    T = s(590202),
    D = s(651892),
    M = s(710969),
    w = s(977416),
    L = s(576761),
    Q = s(417404),
    k = s(792620),
    U = s(117634),
    R = s(453384),
    B = s(201805),
    O = s(442734),
    P = s(452411),
    W = s(79545),
    z = s(639701),
    G = s(398025),
    F = s(321538),
    K = s(630037),
    $ = s(221596),
    H = s(792996),
    Y = s(336779),
    V = s(503666);
async function X() {
    return await s.e(40119).then(s.t.bind(s, 718698, 19));
}
function Z(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: r, sourceQuestContent: o } = e,
        k = i.useRef(null),
        { ref: B, scrollHeight: K } = (0, d.wR)(),
        Z = 104 !== K,
        { expansionSpring: et } = (0, x.z)({
            expansionSpring: +!!a,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        es = (0, _.z)(),
        en = (0, I.SD)(t, es),
        ei = es === L.MA.NITRO && en,
        ea = (0, w.Ic)(t),
        el = (0, I.In)(t),
        er = (0, m.bG)([b.default], () => b.default.getCurrentUser()),
        eo = (0, Q.mq)(t.config, er),
        ec = (0, Q.mH)(t.config, er),
        ed = t.userStatus?.enrolledAt != null,
        eu = t.userStatus?.completedAt != null,
        em = t.userStatus?.claimedAt != null,
        ex = (0, Q.ks)(t.config),
        eh = t.userStatus?.orbQuantityClaimed ?? (0, Q._Z)(t.config),
        eE = (0, Q.wo)(t.config, er),
        { completedRatio: ej, completedRatioDisplay: eg } = (0, I.O9)(t),
        ef = (0, q.A9)(t, o, $.rE.EMBED_DESKTOP, y.GameProfileSources.QuestEmbed, k),
        eC = (0, W.Pd)(t),
        ev = i.useMemo(
            () =>
                em && ex
                    ? (0, n.jsxs)(
                          J,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(A.A, { shouldUseThemeColor: !0, className: V.Kq, customSize: 14 }),
                                  H.intl.format(H.t["nLXlh+"], { orbAmount: eh ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : em
                      ? (0, n.jsx)(J, { questId: t.id, children: eo })
                      : ex
                        ? H.intl.format(H.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      J,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(A.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: V.Kq,
                                                  customSize: 14,
                                              }),
                                              H.intl.format(H.t["nLXlh+"], { orbAmount: eE ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : H.intl.format(H.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(J, { questId: t.id, children: ec }, t.id),
                          }),
            [eo, em, ec, t.id, eE, eh, ex],
        ),
        eN = i.useMemo(() => {
            if (null != ef)
                return (0, n.jsx)(h.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: V.h_,
                    children: ef,
                });
        }, [ef]),
        ey = (0, m.bG)([C.Ay], () => C.Ay.useReducedMotion),
        eA = i.useMemo(() => (0, w.Ic)(t) && !(0, M.GR)(t.userStatus), [t]),
        eb = (0, I.do)({ quest: t, content: s, ctaContent: T.Cy.OPEN_GAME_LINK, sourceQuestContent: o }),
        eS = (0, D.wr)(t),
        ep = i.useCallback(() => {
            eA
                ? eb()
                : ((0, F.mA)({ fromContent: s, questId: t.id }),
                  (0, v.r)({
                      type: N.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: T.Cy.LEARN_MORE,
                      surfaceId: s,
                      sourceQuestContent: o,
                      questContentPosition: r,
                  }));
        }, [eA, eb, t.id, s, r, o]),
        eq = (0, m.bG)([S.A], () => null != S.A.questEnrollmentBlockedUntil, []),
        eI = p.t.useConfig({ location: $.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: V.kL,
        ref: k,
        children: [
            (0, n.jsx)(U.A, { visible: ei, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: et.to([0, 1], [104, (K ?? 0) + 12]) },
                className: V.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: V.c6,
                        children: [
                            !em && eu && (0, n.jsx)("div", { className: V.Nz }),
                            ed
                                ? (0, n.jsxs)("div", {
                                      className: V.Tr,
                                      children: [
                                          eu &&
                                              (0, n.jsx)(E.a, {
                                                  importData: X,
                                                  className: V.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !ey,
                                              }),
                                          (0, n.jsx)(R.A, {
                                              size: 76,
                                              percentComplete: ej,
                                              overlayText: a && !ea ? eg : void 0,
                                              children: (0, n.jsx)(z.A, {
                                                  quest: t,
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
                                : (0, n.jsx)(z.A, {
                                      quest: t,
                                      location: $.rE.EMBED_DESKTOP,
                                      autoplay: a,
                                      questContent: s,
                                      className: V.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: B,
                        className: l()(V.FS, { [V.wq]: !Z }),
                        children: [
                            (0, n.jsx)(j.D, {
                                variant: "body-sm/medium",
                                color: "text-brand",
                                className: V.G$,
                                children: H.intl.format(H.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            en
                                ? (0, n.jsxs)("div", {
                                      className: V.xv,
                                      children: [
                                          (0, n.jsx)(h.E, {
                                              variant: "body-md/semibold",
                                              color: "text-strong",
                                              className: V.wx,
                                              children: ev,
                                          }),
                                          (0, n.jsx)(O.e, { questId: t.id, orbMultiplierEligibility: es }),
                                      ],
                                  })
                                : (0, n.jsx)(h.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      className: V.wx,
                                      children: ev,
                                  }),
                            eN,
                        ],
                    }),
                    Z &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, G.a)(et.to([0, 1], [1, 0])) },
                            className: V.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: Y.kL,
                children: eq
                    ? (0, n.jsxs)(g.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(f.$, { variant: "secondary", disabled: !0, text: H.intl.string(H.t.V293qn) }),
                              (0, n.jsx)(f.$, {
                                  variant: "primary",
                                  onClick: () => (0, F.m6)(t, s, o),
                                  text: H.intl.string(H.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(g.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(f.$, {
                                  variant: "secondary",
                                  text: eA ? eS : H.intl.string(H.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ep,
                              }),
                              eI.enabled && eI.enabledQuestStates.has(eC)
                                  ? (0, n.jsx)(P.A, {
                                        quest: t,
                                        surface: W.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: r,
                                    })
                                  : (0, n.jsx)(ee, {
                                        quest: t,
                                        progressState: el,
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
let J = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        h.E,
        { variant: "body-md/semibold", color: "text-strong", tag: "span", className: V.wx, children: s },
        `${t}_reward`,
    );
});
function ee(e) {
    return (0, w.Ic)(e.quest) || e.progressState !== I.F3.COMPLETED
        ? (0, n.jsx)(es, { ...e })
        : (0, n.jsx)(et, { ...e });
}
function et(e) {
    let { quest: t, questContent: s, questContentPosition: i, sourceQuestContent: a } = e,
        l = (0, m.bG)([S.A], () => S.A.isClaimingReward(t.id) || S.A.isFetchingRewardCode(t.id)),
        r = (0, K.D)({ quest: t, questContent: s, questContentPosition: i, sourceQuestContent: a });
    return (0, n.jsx)(f.$, {
        fullWidth: !0,
        variant: "primary",
        loading: l,
        onClick: r,
        text: H.intl.string(H.t.cfY4PE),
    });
}
function es(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        r = (0, m.bG)([S.A], () => S.A.isEnrolling(t.id)),
        o = (0, k.vv)(t),
        c = (0, k.Cr)(t),
        d = (0, w.Ic)(t),
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
        x = (0, I.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return d
        ? (0, n.jsx)(f.$, {
              variant: "secondary",
              disabled: !0,
              text: H.intl.format(H.t["6p8BZx"], { expiryDate: x }),
              fullWidth: !0,
          })
        : (0, n.jsx)(f.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == u.onClick,
              loading: r,
              onClick: u.onClick ?? void 0,
              text: u.text,
          });
}
var en = s(646514),
    ei = s(366010),
    ea = s(805251),
    el = s(939249),
    er = s(365199),
    eo = s(820081),
    ec = s(736653),
    ed = s(152578),
    eu = s(918338),
    em = s(270045),
    ex = s(57718),
    eh = s(322335);
function eE(e) {
    let { quest: t, isInteracting: s, location: i, sourceQuestContent: a } = e,
        l = (0, w.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        o = (0, I.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        c = (0, ec.Ay)(),
        d = (0, ei.M)(c) ? "text-muted" : "text-overlay-light";
    return (0, n.jsxs)("div", {
        className: eh.kL,
        children: [
            (0, n.jsx)("div", {
                className: eh.IC,
                children: (0, n.jsx)(eu.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, n.jsx)("div", { className: eh.Lw }),
            (0, n.jsx)("div", {
                className: eh.nX,
                children: (0, n.jsxs)("div", {
                    className: eh.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eh.mY,
                            children: [
                                t.preview &&
                                    (0, n.jsx)("div", {
                                        className: eh.Bv,
                                        children: (0, n.jsx)(ea.E, {
                                            type: { text: H.intl.string(H.t.SKNnqq) },
                                            variant: "primary",
                                        }),
                                    }),
                                (0, n.jsx)(em.C, {
                                    questContent: i,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(el.D, {
                                            ...e,
                                            className: eh.iI,
                                            "aria-label": H.intl.string(H.t.DEoVWZ),
                                            children: (0, n.jsx)(er.MoreHorizontalIcon, {
                                                size: "md",
                                                color: "currentColor",
                                                className: eh.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(ex.Ay, {
                            className: eh.Iu,
                            logotypeClassName: eh.ND,
                            quest: t,
                            separatorSpacing: ex.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: eh.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: eh.O,
                                    children: [
                                        (0, n.jsx)(h.E, {
                                            className: eh.vT,
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: d,
                                            children: H.intl.string(H.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(ed.A, {
                                            className: eh.w$,
                                            size: 16,
                                            color: en.A.unsafe_rawColors.GREEN_360.css,
                                            "aria-label": H.intl.string(H.t.OfMjx9),
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(eo.CheckmarkSmallBoldIcon, {
                                                color: en.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, n.jsx)(h.E, {
                                            className: eh.eA,
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: "text-overlay-light",
                                            children:
                                                t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                l || r
                                    ? null
                                    : (0, n.jsx)(h.E, {
                                          className: eh.xK,
                                          variant: "body-sm/medium",
                                          color: d,
                                          children: H.intl.format(H.t["7D8r4F"], { expiryDate: o }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ej = s(989673),
    eg = s(175926);
function ef(e) {
    let { quest: t, location: s, questContentPosition: a, sourceQuestContent: c } = e,
        [d, u] = i.useState(!1);
    function m() {
        return u(!0);
    }
    function x() {
        return u(!1);
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
                className: l()(ej.k, eg.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(eE, { quest: t, location: s, isInteracting: d, sourceQuestContent: c }),
                    (0, n.jsx)(Z, {
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
