s.d(t, { M: () => ed });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(507107),
    r = s(73473),
    c = s(873174),
    d = s(494012),
    u = s(717421),
    m = s(834730),
    x = s(604121),
    h = s(534514),
    j = s(825484),
    g = s(821609),
    v = s(17928),
    f = s(775602),
    E = s(409626),
    N = s(106799),
    C = s(859703),
    q = s(112142),
    A = s(838077),
    S = s(124366),
    b = s(561844),
    _ = s(590202),
    p = s(710969),
    y = s(801365),
    w = s(792620),
    I = s(895253),
    D = s(453384),
    Q = s(371912),
    T = s(442734),
    k = s(368715),
    M = s(79545),
    U = s(646764),
    L = s(398025),
    B = s(617986),
    O = s(190107),
    W = s(375708),
    z = s(562296),
    R = s(474491);
let H = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function P(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: o, sourceQuestContent: r } = e,
        w = i.useRef(null),
        { ref: Q, scrollHeight: P } = (0, d.wR)(),
        $ = 104 !== P,
        { expansionSpring: K } = (0, u.z)({ expansionSpring: +!!a, config: { tension: 250, friction: 20, clamp: !0 } }),
        V = (0, S.Oq)(),
        Y = (0, S.SD)(t),
        X = V && Y,
        Z = (0, p.Ic)(t),
        J = (0, S.In)(t),
        ee = (0, y.mq)(t.config),
        et = (0, y.mH)(t.config),
        es = t.userStatus?.enrolledAt != null,
        en = t.userStatus?.completedAt != null,
        ei = t.userStatus?.claimedAt != null,
        ea = (0, y.ks)(t.config),
        el = (0, y._Z)(t.config),
        { completedRatio: eo, completedRatioDisplay: er } = (0, S.O9)(t),
        ec = (0, A.gj)(t, r, E.Ob.QuestEmbed, w),
        ed = (0, M.Pd)(t),
        eu = i.useMemo(
            () =>
                ei && ea
                    ? W.intl.format(W.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, n.jsxs)(
                                  F,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, n.jsx)(N.A, { shouldUseThemeColor: !0, className: R.Kq, customSize: 14 }),
                                          el,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : ei
                      ? (0, n.jsx)(F, { questId: t.id, children: ee })
                      : ea
                        ? W.intl.format(W.t.ro1sze, {
                              balanceHook: () =>
                                  (0, n.jsxs)(
                                      F,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(N.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: R.Kq,
                                                  customSize: 14,
                                              }),
                                              el,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : W.intl.format(W.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(F, { questId: t.id, children: et }, t.id),
                          }),
            [ee, ei, et, t.id, el, ea],
        ),
        em = i.useMemo(() => {
            if (null != ec)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: R.h_,
                    children: ec,
                });
        }, [ec]),
        ex = (0, v.bG)([f.A], () => f.A.useReducedMotion),
        eh = i.useCallback(() => {
            (0, B.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, b.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: o,
                    questContentCTA: _.Cy.LEARN_MORE,
                    sourceQuestContent: r,
                });
        }, [t.id, s, o, r]),
        ej = (0, v.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []),
        eg = q.t.useConfig({ location: O.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: R.kL,
        ref: w,
        children: [
            (0, n.jsx)(I.A, { visible: X, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: K.to([0, 1], [104, (P ?? 0) + 12]) },
                className: R.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: R.c6,
                        children: [
                            !ei && en && (0, n.jsx)("div", { className: R.Nz }),
                            es
                                ? (0, n.jsxs)("div", {
                                      className: R.Tr,
                                      children: [
                                          en &&
                                              (0, n.jsx)(x.a, {
                                                  importData: H,
                                                  className: R.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !ex,
                                              }),
                                          (0, n.jsx)(D.A, {
                                              size: 76,
                                              percentComplete: eo,
                                              overlayText: a && !Z ? er : void 0,
                                              children: (0, n.jsx)(U.A, {
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
                                : (0, n.jsx)(U.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: R.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: r,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: Q,
                        className: l()(R.FS, { [R.wq]: !$ }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: R.G$,
                                children: W.intl.format(W.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            Y
                                ? (0, n.jsxs)("div", {
                                      className: R.xv,
                                      children: [
                                          (0, n.jsx)(m.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: R.wx,
                                              children: eu,
                                          }),
                                          (0, n.jsx)(T.e, { questId: t.id, canUseQuestOrbMultiplier: V }),
                                      ],
                                  })
                                : (0, n.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: R.wx,
                                      children: eu,
                                  }),
                            em,
                        ],
                    }),
                    $ &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, L.a)(K.to([0, 1], [1, 0])) },
                            className: R.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: z.kL,
                children: ej
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, { variant: "secondary", disabled: !0, text: W.intl.string(W.t.V293qn) }),
                              (0, n.jsx)(g.$, {
                                  variant: "primary",
                                  onClick: () => (0, B.m6)(t, s, r),
                                  text: W.intl.string(W.t.vY9GgG),
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
                                  text: W.intl.string(W.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: eh,
                              }),
                              eg.enabled && eg.enabledQuestStates.has(ed)
                                  ? (0, n.jsx)(k.A, {
                                        quest: t,
                                        surface: M.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: r,
                                        analyticsCtxQuestContentPosition: o,
                                    })
                                  : (0, n.jsx)(G, {
                                        quest: t,
                                        progressState: J,
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
let F = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: R.wx, children: s },
        `${t}_reward`,
    );
});
function G(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        o = (0, v.bG)([C.A], () => C.A.isEnrolling(t.id)),
        r = (0, w.vv)(t),
        c = (0, w.Cr)(t),
        d = (0, p.Ic)(t),
        u = (0, Q._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: r,
            inGameQuest: c,
            sourceQuestContent: l,
        }),
        m = (0, S.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return d
        ? (0, n.jsx)(g.$, {
              variant: "secondary",
              disabled: !0,
              text: W.intl.format(W.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(g.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == u.onClick,
              loading: o,
              onClick: u.onClick ?? void 0,
              text: u.text,
          });
}
var $ = s(366010),
    K = s(331322),
    V = s(939249),
    Y = s(365199),
    X = s(820081),
    Z = s(661531),
    J = s(736653),
    ee = s(814925),
    et = s(814793),
    es = s(918338),
    en = s(270045),
    ei = s(57718),
    ea = s(368774);
function el(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: l()(ea.Io, { [ea.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(m.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: ea.Xi,
            children: t,
        }),
    });
}
function eo(e) {
    let { quest: t, isInteracting: s, location: a, sourceQuestContent: l } = e,
        o = (0, p.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        c = (0, S.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        d = (0, v.bG)([C.A], () => C.A.getQuestHomeHero()),
        u = i.useMemo(() => null != d && (0, et.I0)(d, t.id), [d, t.id]),
        x = (0, J.Ay)(),
        h = (0, $.M)(x) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: ea.kL,
        children: [
            (0, n.jsx)("div", {
                className: ea.IC,
                children: (0, n.jsx)(es.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: ea.l1,
                    imageClassName: ea.c8,
                }),
            }),
            (0, n.jsx)("div", { className: ea.Lw }),
            (0, n.jsx)("div", {
                className: ea.nX,
                children: (0, n.jsxs)("div", {
                    className: ea.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ea.mY,
                            children: [
                                (u || t.preview) &&
                                    (0, n.jsxs)(K.B, {
                                        className: ea.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            u && !o && (0, n.jsx)(el, { children: W.intl.string(W.t.Jt6u7B) }),
                                            t.preview &&
                                                (0, n.jsx)(el, {
                                                    variant: "brand",
                                                    children: W.intl.string(W.t.SKNnqq),
                                                }),
                                        ],
                                    }),
                                (0, n.jsx)(en.C, {
                                    questContent: a,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: l,
                                    children: (e) =>
                                        (0, n.jsx)(V.D, {
                                            ...e,
                                            className: ea.iI,
                                            "aria-label": W.intl.string(W.t.DEoVWZ),
                                            children: (0, n.jsx)(Y.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ea.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(ei.Ay, {
                            className: ea.Iu,
                            logotypeClassName: ea.ND,
                            quest: t,
                            separatorSpacing: ei.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: ea.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: ea.O,
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: h,
                                            children: W.intl.string(W.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(ee.A, {
                                            className: ea.w$,
                                            size: 16,
                                            color: Z.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(X.B, {
                                                color: Z.A.unsafe_rawColors.WHITE.css,
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
                                o || r
                                    ? null
                                    : (0, n.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          color: h,
                                          children: W.intl.format(W.t["7D8r4F"], { expiryDate: c }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var er = s(355620),
    ec = s(103257);
function ed(e) {
    let { quest: t, location: s, questContentPosition: a, sourceQuestContent: c } = e,
        [d, u] = i.useState(!1),
        m = () => u(!0),
        x = () => u(!1);
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
                className: l()(er.k, ec.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(eo, { quest: t, location: s, isInteracting: d, sourceQuestContent: c }),
                    (0, n.jsx)(P, {
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
