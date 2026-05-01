s.d(t, { M: () => er });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(507107),
    r = s(73473),
    c = s(925747),
    d = s(494012),
    u = s(717421),
    m = s(834730),
    x = s(604121),
    h = s(534514),
    j = s(825484),
    g = s(821609),
    f = s(17928),
    v = s(775602),
    E = s(409626),
    C = s(106799),
    N = s(859703),
    q = s(112142),
    A = s(838077),
    S = s(890687),
    _ = s(561844),
    b = s(590202),
    y = s(710969),
    p = s(801365),
    w = s(792620),
    I = s(453384),
    T = s(201805),
    D = s(212614),
    Q = s(79545),
    k = s(646764),
    M = s(398025),
    U = s(545986),
    L = s(654487),
    B = s(985018),
    W = s(562296),
    z = s(474491);
let O = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function R(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: o, sourceQuestContent: r } = e,
        w = i.useRef(null),
        { ref: T, scrollHeight: R } = (0, d.wR)(),
        F = 104 !== R,
        { expansionSpring: G } = (0, u.z)({ expansionSpring: +!!a, config: { tension: 250, friction: 20, clamp: !0 } }),
        $ = (0, y.Ic)(t),
        K = (0, S.In)(t),
        V = (0, p.mq)(t.config),
        Y = (0, p.mH)(t.config),
        X = t.userStatus?.enrolledAt != null,
        Z = t.userStatus?.completedAt != null,
        J = t.userStatus?.claimedAt != null,
        ee = (0, p.ks)(t.config),
        et = (0, p._Z)(t.config),
        { completedRatio: es, completedRatioDisplay: en } = (0, S.O9)(t),
        ei = (0, A.gj)(t, r, E.Ob.QuestEmbed, w),
        ea = (0, Q.Pd)(t),
        el = i.useMemo(
            () =>
                J && ee
                    ? B.intl.format(B.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, n.jsxs)(
                                  H,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, n.jsx)(C.A, { shouldUseThemeColor: !0, className: z.Kq, customSize: 14 }),
                                          et,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : J
                      ? (0, n.jsx)(H, { questId: t.id, children: V })
                      : ee
                        ? B.intl.format(B.t.ro1sze, {
                              balanceHook: () =>
                                  (0, n.jsxs)(
                                      H,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(C.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: z.Kq,
                                                  customSize: 14,
                                              }),
                                              et,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : B.intl.format(B.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(H, { questId: t.id, children: Y }, t.id),
                          }),
            [V, J, Y, t.id, et, ee],
        ),
        eo = i.useMemo(() => {
            if (null != ei)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: z.h_,
                    children: ei,
                });
        }, [ei]),
        er = (0, f.bG)([v.A], () => v.A.useReducedMotion),
        ec = i.useCallback(() => {
            (0, U.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, _.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: o,
                    questContentCTA: b.Cy.LEARN_MORE,
                    sourceQuestContent: r,
                });
        }, [t.id, s, o, r]),
        ed = (0, f.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        eu = q.t.useConfig({ location: L.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: z.kL,
        ref: w,
        children: [
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: G.to([0, 1], [104, (R ?? 0) + 12]) },
                className: z.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: z.c6,
                        children: [
                            !J && Z && (0, n.jsx)("div", { className: z.Nz }),
                            X
                                ? (0, n.jsxs)("div", {
                                      className: z.Tr,
                                      children: [
                                          Z &&
                                              (0, n.jsx)(x.a, {
                                                  importData: O,
                                                  className: z.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !er,
                                              }),
                                          (0, n.jsx)(I.A, {
                                              size: 76,
                                              percentComplete: es,
                                              overlayText: a && !$ ? en : void 0,
                                              children: (0, n.jsx)(k.A, {
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
                                : (0, n.jsx)(k.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: z.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: r,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: T,
                        className: l()(z.FS, { [z.wq]: !F }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: z.G$,
                                children: B.intl.format(B.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, n.jsx)(m.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: z.wx,
                                children: el,
                            }),
                            eo,
                        ],
                    }),
                    F &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, M.a)(G.to([0, 1], [1, 0])) },
                            className: z.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: W.kL,
                children: ed
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, { variant: "secondary", disabled: !0, text: B.intl.string(B.t.V293qn) }),
                              (0, n.jsx)(g.$, {
                                  variant: "primary",
                                  onClick: () => (0, U.m6)(t, s, r),
                                  text: B.intl.string(B.t.vY9GgG),
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
                                  text: B.intl.string(B.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ec,
                              }),
                              eu.enabled && eu.enabledQuestStates.has(ea)
                                  ? (0, n.jsx)(D.A, {
                                        quest: t,
                                        surface: Q.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: r,
                                        analyticsCtxQuestContentPosition: o,
                                    })
                                  : (0, n.jsx)(P, {
                                        quest: t,
                                        progressState: K,
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
let H = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: z.wx, children: s },
        `${t}_reward`,
    );
});
function P(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        o = (0, f.bG)([N.A], () => N.A.isEnrolling(t.id)),
        r = (0, w.vv)(t),
        c = (0, w.Cr)(t),
        d = (0, y.Ic)(t),
        u = (0, T._c)({
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
              text: B.intl.format(B.t["6p8BZx"], { expiryDate: m }),
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
var F = s(366010),
    G = s(331322),
    $ = s(939249),
    K = s(365199),
    V = s(820081),
    Y = s(661531),
    X = s(736653),
    Z = s(496885),
    J = s(814793),
    ee = s(918338),
    et = s(270045),
    es = s(57718),
    en = s(368774);
function ei(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: l()(en.Io, { [en.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(m.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: en.Xi,
            children: t,
        }),
    });
}
function ea(e) {
    let { quest: t, isInteracting: s, location: a, sourceQuestContent: l } = e,
        o = (0, y.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        c = (0, S.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        d = (0, f.bG)([N.A], () => N.A.getQuestHomeHero()),
        u = i.useMemo(() => null != d && (0, J.I0)(d, t.id), [d, t.id]),
        x = (0, X.Ay)(),
        h = (0, F.M)(x) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: en.kL,
        children: [
            (0, n.jsx)("div", {
                className: en.IC,
                children: (0, n.jsx)(ee.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: en.l1,
                    imageClassName: en.c8,
                }),
            }),
            (0, n.jsx)("div", { className: en.Lw }),
            (0, n.jsx)("div", {
                className: en.nX,
                children: (0, n.jsxs)("div", {
                    className: en.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: en.mY,
                            children: [
                                (u || t.preview) &&
                                    (0, n.jsxs)(G.B, {
                                        className: en.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            u && !o && (0, n.jsx)(ei, { children: B.intl.string(B.t.Jt6u7B) }),
                                            t.preview &&
                                                (0, n.jsx)(ei, {
                                                    variant: "brand",
                                                    children: B.intl.string(B.t.SKNnqq),
                                                }),
                                        ],
                                    }),
                                (0, n.jsx)(et.C, {
                                    questContent: a,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: l,
                                    children: (e) =>
                                        (0, n.jsx)($.D, {
                                            ...e,
                                            className: en.iI,
                                            "aria-label": B.intl.string(B.t.DEoVWZ),
                                            children: (0, n.jsx)(K.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: en.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(es.Ay, {
                            className: en.Iu,
                            logotypeClassName: en.ND,
                            quest: t,
                            separatorSpacing: es.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: en.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: en.O,
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: h,
                                            children: B.intl.string(B.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(Z.A, {
                                            className: en.w$,
                                            size: 16,
                                            color: Y.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(V.B, {
                                                color: Y.A.unsafe_rawColors.WHITE.css,
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
                                          children: B.intl.format(B.t["7D8r4F"], { expiryDate: c }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var el = s(355620),
    eo = s(103257);
function er(e) {
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
                className: l()(el.k, eo.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(ea, { quest: t, location: s, isInteracting: d, sourceQuestContent: c }),
                    (0, n.jsx)(R, {
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
