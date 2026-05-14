s.d(t, { M: () => eu });
var n = s(627968),
    i = s(64700),
    l = s(503698),
    a = s.n(l),
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
    b = s(31587),
    S = s(646917),
    _ = s(561844),
    y = s(590202),
    p = s(710969),
    w = s(801365),
    I = s(792620),
    T = s(895253),
    D = s(453384),
    Q = s(371912),
    k = s(442734),
    M = s(368715),
    U = s(79545),
    L = s(646764),
    B = s(398025),
    W = s(617986),
    z = s(190107),
    O = s(375708),
    R = s(562296),
    H = s(474491);
let P = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function F(e) {
    let { quest: t, location: s, isInteracting: l, contentPosition: o, sourceQuestContent: r } = e,
        I = i.useRef(null),
        { ref: Q, scrollHeight: F } = (0, d.wR)(),
        K = 104 !== F,
        { expansionSpring: V } = (0, u.z)({ expansionSpring: +!!l, config: { tension: 250, friction: 20, clamp: !0 } }),
        Y = (0, S.z)(),
        X = (0, b.SD)(t, Y),
        Z = Y === S.M.NITRO && X,
        J = (0, p.Ic)(t),
        ee = (0, b.In)(t),
        et = (0, w.mq)(t.config),
        es = (0, w.mH)(t.config),
        en = t.userStatus?.enrolledAt != null,
        ei = t.userStatus?.completedAt != null,
        el = t.userStatus?.claimedAt != null,
        ea = (0, w.ks)(t.config),
        eo = (0, w._Z)(t.config),
        { completedRatio: er, completedRatioDisplay: ec } = (0, b.O9)(t),
        ed = (0, A.gj)(t, r, E.Ob.QuestEmbed, I),
        eu = (0, U.Pd)(t),
        em = i.useMemo(
            () =>
                el && ea
                    ? O.intl.format(O.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, n.jsxs)(
                                  G,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, n.jsx)(N.A, { shouldUseThemeColor: !0, className: H.Kq, customSize: 14 }),
                                          eo,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : el
                      ? (0, n.jsx)(G, { questId: t.id, children: et })
                      : ea
                        ? O.intl.format(O.t.ro1sze, {
                              balanceHook: () =>
                                  (0, n.jsxs)(
                                      G,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(N.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: H.Kq,
                                                  customSize: 14,
                                              }),
                                              eo,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : O.intl.format(O.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(G, { questId: t.id, children: es }, t.id),
                          }),
            [et, el, es, t.id, eo, ea],
        ),
        ex = i.useMemo(() => {
            if (null != ed)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: H.h_,
                    children: ed,
                });
        }, [ed]),
        eh = (0, v.bG)([f.A], () => f.A.useReducedMotion),
        ej = i.useCallback(() => {
            (0, W.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, _.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: o,
                    questContentCTA: y.Cy.LEARN_MORE,
                    sourceQuestContent: r,
                });
        }, [t.id, s, o, r]),
        eg = (0, v.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []),
        ev = q.t.useConfig({ location: z.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: H.kL,
        ref: I,
        children: [
            (0, n.jsx)(T.A, { visible: Z, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: V.to([0, 1], [104, (F ?? 0) + 12]) },
                className: H.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: H.c6,
                        children: [
                            !el && ei && (0, n.jsx)("div", { className: H.Nz }),
                            en
                                ? (0, n.jsxs)("div", {
                                      className: H.Tr,
                                      children: [
                                          ei &&
                                              (0, n.jsx)(x.a, {
                                                  importData: P,
                                                  className: H.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !eh,
                                              }),
                                          (0, n.jsx)(D.A, {
                                              size: 76,
                                              percentComplete: er,
                                              overlayText: l && !J ? ec : void 0,
                                              children: (0, n.jsx)(L.A, {
                                                  quest: t,
                                                  questContent: s,
                                                  autoplay: l,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: r,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, n.jsx)(L.A, {
                                      quest: t,
                                      autoplay: l,
                                      questContent: s,
                                      className: H.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: r,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: Q,
                        className: a()(H.FS, { [H.wq]: !K }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: H.G$,
                                children: O.intl.format(O.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            X
                                ? (0, n.jsxs)("div", {
                                      className: H.xv,
                                      children: [
                                          (0, n.jsx)(m.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: H.wx,
                                              children: em,
                                          }),
                                          (0, n.jsx)(k.e, { questId: t.id, orbMultiplierEligibility: Y }),
                                      ],
                                  })
                                : (0, n.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: H.wx,
                                      children: em,
                                  }),
                            ex,
                        ],
                    }),
                    K &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, B.a)(V.to([0, 1], [1, 0])) },
                            className: H.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: R.kL,
                children: eg
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, { variant: "secondary", disabled: !0, text: O.intl.string(O.t.V293qn) }),
                              (0, n.jsx)(g.$, {
                                  variant: "primary",
                                  onClick: () => (0, W.m6)(t, s, r),
                                  text: O.intl.string(O.t.vY9GgG),
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
                                  text: O.intl.string(O.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ej,
                              }),
                              ev.enabled && ev.enabledQuestStates.has(eu)
                                  ? (0, n.jsx)(M.A, {
                                        quest: t,
                                        surface: U.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: r,
                                        analyticsCtxQuestContentPosition: o,
                                    })
                                  : (0, n.jsx)($, {
                                        quest: t,
                                        progressState: ee,
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
let G = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: H.wx, children: s },
        `${t}_reward`,
    );
});
function $(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: l, sourceQuestContent: a } = e,
        o = (0, v.bG)([C.A], () => C.A.isEnrolling(t.id)),
        r = (0, I.vv)(t),
        c = (0, I.Cr)(t),
        d = (0, p.Ic)(t),
        u = (0, Q._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: l,
            inGiftInventory: !1,
            isVideoQuest: r,
            inGameQuest: c,
            sourceQuestContent: a,
        }),
        m = (0, b.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return d
        ? (0, n.jsx)(g.$, {
              variant: "secondary",
              disabled: !0,
              text: O.intl.format(O.t["6p8BZx"], { expiryDate: m }),
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
var K = s(366010),
    V = s(331322),
    Y = s(939249),
    X = s(365199),
    Z = s(820081),
    J = s(661531),
    ee = s(736653),
    et = s(814925),
    es = s(814793),
    en = s(918338),
    ei = s(270045),
    el = s(57718),
    ea = s(368774);
function eo(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: a()(ea.Io, { [ea.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(m.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: ea.Xi,
            children: t,
        }),
    });
}
function er(e) {
    let { quest: t, isInteracting: s, location: l, sourceQuestContent: a } = e,
        o = (0, p.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        c = (0, b.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        d = (0, v.bG)([C.A], () => C.A.getQuestHomeHero()),
        u = i.useMemo(() => null != d && (0, es.I0)(d, t.id), [d, t.id]),
        x = (0, ee.Ay)(),
        h = (0, K.M)(x) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: ea.kL,
        children: [
            (0, n.jsx)("div", {
                className: ea.IC,
                children: (0, n.jsx)(en.A, {
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
                                    (0, n.jsxs)(V.B, {
                                        className: ea.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            u && !o && (0, n.jsx)(eo, { children: O.intl.string(O.t.Jt6u7B) }),
                                            t.preview &&
                                                (0, n.jsx)(eo, {
                                                    variant: "brand",
                                                    children: O.intl.string(O.t.SKNnqq),
                                                }),
                                        ],
                                    }),
                                (0, n.jsx)(ei.C, {
                                    questContent: l,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(Y.D, {
                                            ...e,
                                            className: ea.iI,
                                            "aria-label": O.intl.string(O.t.DEoVWZ),
                                            children: (0, n.jsx)(X.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ea.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(el.Ay, {
                            className: ea.Iu,
                            logotypeClassName: ea.ND,
                            quest: t,
                            separatorSpacing: el.C8.MEDIUM,
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
                                            children: O.intl.string(O.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(et.A, {
                                            className: ea.w$,
                                            size: 16,
                                            color: J.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(Z.B, {
                                                color: J.A.unsafe_rawColors.WHITE.css,
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
                                          children: O.intl.format(O.t["7D8r4F"], { expiryDate: c }),
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
    ed = s(103257);
function eu(e) {
    let { quest: t, location: s, questContentPosition: l, sourceQuestContent: c } = e,
        [d, u] = i.useState(!1),
        m = () => u(!0),
        x = () => u(!1);
    return (0, n.jsx)(r.R, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: l,
        trackGuildAndChannelMetadata: s === o.uF.QUESTS_EMBED,
        sourceQuestContent: c,
        children: (e) =>
            (0, n.jsxs)("div", {
                ref: (t) => {
                    e.current = t;
                },
                className: a()(ec.k, ed.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(er, { quest: t, location: s, isInteracting: d, sourceQuestContent: c }),
                    (0, n.jsx)(F, {
                        quest: t,
                        location: s,
                        isInteracting: d,
                        contentPosition: l,
                        sourceQuestContent: c,
                    }),
                ],
            }),
    });
}
