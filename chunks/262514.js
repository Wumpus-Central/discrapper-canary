s.d(t, { M: () => er });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(507107),
    r = s(73473),
    c = s(487514),
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
    A = s(112142),
    q = s(838077),
    _ = s(890687),
    S = s(561844),
    p = s(590202),
    b = s(710969),
    y = s(801365),
    I = s(792620),
    w = s(453384),
    T = s(201805),
    Q = s(212614),
    D = s(79545),
    M = s(646764),
    k = s(398025),
    L = s(545986),
    U = s(654487),
    B = s(985018),
    W = s(562296),
    O = s(474491);
let z = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function R(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: o, sourceQuestContent: r } = e,
        I = i.useRef(null),
        { ref: T, scrollHeight: R } = (0, d.wR)(),
        P = 104 !== R,
        { expansionSpring: F } = (0, u.z)({ expansionSpring: +!!a, config: { tension: 250, friction: 20, clamp: !0 } }),
        V = (0, b.Ic)(t),
        $ = (0, _.In)(t),
        K = (0, y.mq)(t.config),
        Y = (0, y.mH)(t.config),
        X = t.userStatus?.enrolledAt != null,
        Z = t.userStatus?.completedAt != null,
        J = t.userStatus?.claimedAt != null,
        ee = (0, y.ks)(t.config),
        et = (0, y._Z)(t.config),
        { completedRatio: es, completedRatioDisplay: en } = (0, _.O9)(t),
        ei = (0, q.gj)(t, r, E.Ob.QuestEmbed, I),
        ea = (0, D.Pd)(t),
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
                                          (0, n.jsx)(N.A, { shouldUseThemeColor: !0, className: O.Kq, customSize: 14 }),
                                          et,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : J
                      ? (0, n.jsx)(H, { questId: t.id, children: K })
                      : ee
                        ? B.intl.format(B.t.ro1sze, {
                              balanceHook: () =>
                                  (0, n.jsxs)(
                                      H,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(N.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: O.Kq,
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
            [K, J, Y, t.id, et, ee],
        ),
        eo = i.useMemo(() => {
            if (null != ei)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: O.h_,
                    children: ei,
                });
        }, [ei]),
        er = (0, v.bG)([f.A], () => f.A.useReducedMotion),
        ec = i.useCallback(() => {
            (0, L.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, S.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: o,
                    questContentCTA: p.Cy.LEARN_MORE,
                    sourceQuestContent: r,
                });
        }, [t.id, s, o, r]),
        ed = (0, v.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []),
        eu = A.t.useConfig({ location: U.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: O.kL,
        ref: I,
        children: [
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: F.to([0, 1], [104, (R ?? 0) + 12]) },
                className: O.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: O.c6,
                        children: [
                            !J && Z && (0, n.jsx)("div", { className: O.Nz }),
                            X
                                ? (0, n.jsxs)("div", {
                                      className: O.Tr,
                                      children: [
                                          Z &&
                                              (0, n.jsx)(x.a, {
                                                  importData: z,
                                                  className: O.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !er,
                                              }),
                                          (0, n.jsx)(w.A, {
                                              size: 76,
                                              percentComplete: es,
                                              overlayText: a && !V ? en : void 0,
                                              children: (0, n.jsx)(M.A, {
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
                                : (0, n.jsx)(M.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: s,
                                      className: O.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: r,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: T,
                        className: l()(O.FS, { [O.wq]: !P }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: O.G$,
                                children: B.intl.format(B.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, n.jsx)(m.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: O.wx,
                                children: el,
                            }),
                            eo,
                        ],
                    }),
                    P &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, k.a)(F.to([0, 1], [1, 0])) },
                            className: O.hS,
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
                                  onClick: () => (0, L.m6)(t, s, r),
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
                                  ? (0, n.jsx)(Q.A, {
                                        quest: t,
                                        surface: D.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: r,
                                        analyticsCtxQuestContentPosition: o,
                                    })
                                  : (0, n.jsx)(G, {
                                        quest: t,
                                        progressState: $,
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
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: O.wx, children: s },
        `${t}_reward`,
    );
});
function G(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        o = (0, v.bG)([C.A], () => C.A.isEnrolling(t.id)),
        r = (0, I.vv)(t),
        c = (0, I.Cr)(t),
        d = (0, b.Ic)(t),
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
        m = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
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
var P = s(366010),
    F = s(331322),
    V = s(939249),
    $ = s(365199),
    K = s(820081),
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
        o = (0, b.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        c = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        d = (0, v.bG)([C.A], () => C.A.getQuestHomeHero()),
        u = i.useMemo(() => null != d && (0, J.I0)(d, t.id), [d, t.id]),
        x = (0, X.Ay)(),
        h = (0, P.M)(x) ? "text-muted" : "always-white";
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
                                    (0, n.jsxs)(F.B, {
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
                                        (0, n.jsx)(V.D, {
                                            ...e,
                                            className: en.iI,
                                            "aria-label": B.intl.string(B.t.DEoVWZ),
                                            children: (0, n.jsx)($.j, {
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
                                            children: (0, n.jsx)(K.B, {
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
