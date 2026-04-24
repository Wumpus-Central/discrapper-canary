s.d(t, { A: () => eE });
var n = s(627968),
    i = s(64700),
    a = s(289873),
    l = s(507107);
let o = (0, s(945810).mj)({
    name: "2026-03-quest-share-embed-refactor",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var r = s(890687),
    d = s(710969),
    c = s(814793),
    u = s(633224),
    m = s(654487),
    x = s(985018);
function h(e) {
    let { questId: t } = e;
    return (0, n.jsx)(u.i, {
        questId: t,
        fallbackReason: m.eA.EXCLUDED_QUEST,
        bodyText: x.intl.string(x.t.NIliWX),
        questContent: l.uF.EXCLUDED_QUEST_EMBED,
    });
}
var g = s(127219);
function j(e) {
    let { questId: t } = e;
    return (0, n.jsx)(u.i, {
        questId: t,
        fallbackReason: m.eA.NOT_SHAREABLE_QUEST,
        bodyText: x.intl.string(x.t.Rw9rwW),
        questContent: l.uF.NOT_SHAREABLE_QUEST_EMBED,
    });
}
var E = s(882406),
    v = s(503698),
    f = s.n(v),
    C = s(73473),
    S = s(419354),
    N = s(494012),
    A = s(717421),
    p = s(834730),
    q = s(604121),
    y = s(534514),
    b = s(825484),
    T = s(821609),
    _ = s(17928),
    w = s(775602),
    Q = s(409626),
    D = s(106799),
    M = s(859703),
    I = s(112142),
    U = s(838077),
    L = s(561844),
    k = s(590202),
    P = s(801365),
    R = s(792620),
    W = s(453384),
    z = s(201805),
    B = s(212614),
    O = s(79545),
    G = s(646764),
    F = s(398025),
    H = s(545986),
    V = s(562296),
    K = s(474491);
let $ = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function Y(e) {
    let { quest: t, location: s, isInteracting: a, contentPosition: l, sourceQuestContent: o } = e,
        c = i.useRef(null),
        { ref: u, scrollHeight: h } = (0, N.wR)(),
        g = 104 !== h,
        { expansionSpring: j } = (0, A.z)({ expansionSpring: +!!a, config: { tension: 250, friction: 20, clamp: !0 } }),
        E = (0, d.Ic)(t),
        v = (0, r.In)(t),
        C = (0, P.mq)(t.config),
        R = (0, P.mH)(t.config),
        z = t.userStatus?.enrolledAt != null,
        Y = t.userStatus?.completedAt != null,
        J = t.userStatus?.claimedAt != null,
        ee = (0, P.ks)(t.config),
        et = (0, P._Z)(t.config),
        { completedRatio: es, completedRatioDisplay: en } = (0, r.O9)(t),
        ei = (0, U.gj)(t, o, Q.Ob.QuestEmbed, c),
        ea = (0, O.Pd)(t),
        el = i.useMemo(
            () =>
                J && ee
                    ? x.intl.format(x.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, n.jsxs)(
                                  Z,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, n.jsx)(D.A, { shouldUseThemeColor: !0, className: K.Kq, customSize: 14 }),
                                          et,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : J
                      ? (0, n.jsx)(Z, { questId: t.id, children: C })
                      : ee
                        ? x.intl.format(x.t.ro1sze, {
                              balanceHook: () =>
                                  (0, n.jsxs)(
                                      Z,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(D.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: K.Kq,
                                                  customSize: 14,
                                              }),
                                              et,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : x.intl.format(x.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(Z, { questId: t.id, children: R }, t.id),
                          }),
            [C, J, R, t.id, et, ee],
        ),
        eo = i.useMemo(() => {
            if (null != ei)
                return (0, n.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: K.h_,
                    children: ei,
                });
        }, [ei]),
        er = (0, _.bG)([w.A], () => w.A.useReducedMotion),
        ed = i.useCallback(() => {
            (0, H.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, L.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: l,
                    questContentCTA: k.Cy.LEARN_MORE,
                    sourceQuestContent: o,
                });
        }, [t.id, s, l, o]),
        ec = (0, _.bG)([M.A], () => null != M.A.questEnrollmentBlockedUntil, []),
        eu = I.t.useConfig({ location: m.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: K.kL,
        ref: c,
        children: [
            (0, n.jsxs)(S.animated.div, {
                style: { maxHeight: j.to([0, 1], [104, (h ?? 0) + 12]) },
                className: K.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: K.c6,
                        children: [
                            !J && Y && (0, n.jsx)("div", { className: K.Nz }),
                            z
                                ? (0, n.jsxs)("div", {
                                      className: K.Tr,
                                      children: [
                                          Y &&
                                              (0, n.jsx)(q.a, {
                                                  importData: $,
                                                  className: K.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !er,
                                              }),
                                          (0, n.jsx)(W.A, {
                                              size: 76,
                                              percentComplete: es,
                                              overlayText: a && !E ? en : void 0,
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
                                      className: K.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: u,
                        className: f()(K.FS, { [K.wq]: !g }),
                        children: [
                            (0, n.jsx)(y.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: K.G$,
                                children: x.intl.format(x.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, n.jsx)(p.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: K.wx,
                                children: el,
                            }),
                            eo,
                        ],
                    }),
                    g &&
                        (0, n.jsx)(S.animated.div, {
                            style: { opacity: (0, F.a)(j.to([0, 1], [1, 0])) },
                            className: K.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: V.kL,
                children: ec
                    ? (0, n.jsxs)(b.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(T.$, { variant: "secondary", disabled: !0, text: x.intl.string(x.t.V293qn) }),
                              (0, n.jsx)(T.$, {
                                  variant: "primary",
                                  onClick: () => (0, H.m6)(t, s, o),
                                  text: x.intl.string(x.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, n.jsxs)(b.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(T.$, {
                                  variant: "secondary",
                                  text: x.intl.string(x.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ed,
                              }),
                              eu.enabled && eu.enabledQuestStates.has(ea)
                                  ? (0, n.jsx)(B.A, {
                                        quest: t,
                                        surface: O.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: l,
                                    })
                                  : (0, n.jsx)(X, {
                                        quest: t,
                                        progressState: v,
                                        questContent: s,
                                        sourceQuestContent: o,
                                        questContentPosition: l,
                                    }),
                          ],
                      }),
            }),
        ],
    });
}
let Z = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        p.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: K.wx, children: s },
        `${t}_reward`,
    );
});
function X(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: l } = e,
        o = (0, _.bG)([M.A], () => M.A.isEnrolling(t.id)),
        c = (0, R.vv)(t),
        u = (0, R.Cr)(t),
        m = (0, d.Ic)(t),
        h = (0, z._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: c,
            inGameQuest: u,
            sourceQuestContent: l,
        }),
        g = (0, r.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return m
        ? (0, n.jsx)(T.$, {
              variant: "secondary",
              disabled: !0,
              text: x.intl.format(x.t["6p8BZx"], { expiryDate: g }),
              fullWidth: !0,
          })
        : (0, n.jsx)(T.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == h.onClick,
              loading: o,
              onClick: h.onClick ?? void 0,
              text: h.text,
          });
}
var J = s(366010),
    ee = s(331322),
    et = s(939249),
    es = s(365199),
    en = s(820081),
    ei = s(661531),
    ea = s(736653),
    el = s(496885),
    eo = s(918338),
    er = s(270045),
    ed = s(57718),
    ec = s(368774);
function eu(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: f()(ec.Io, { [ec.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(p.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: ec.Xi,
            children: t,
        }),
    });
}
function em(e) {
    let { quest: t, isInteracting: s, location: a, sourceQuestContent: l } = e,
        o = (0, d.Ic)(t),
        u = t.userStatus?.claimedAt != null,
        m = (0, r.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        h = (0, _.bG)([M.A], () => M.A.getQuestHomeHero()),
        g = i.useMemo(() => null != h && (0, c.I0)(h, t.id), [h, t.id]),
        j = (0, ea.Ay)(),
        E = (0, J.M)(j) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, n.jsx)("div", {
                className: ec.IC,
                children: (0, n.jsx)(eo.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: ec.l1,
                    imageClassName: ec.c8,
                }),
            }),
            (0, n.jsx)("div", { className: ec.Lw }),
            (0, n.jsx)("div", {
                className: ec.nX,
                children: (0, n.jsxs)("div", {
                    className: ec.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ec.mY,
                            children: [
                                (g || t.preview) &&
                                    (0, n.jsxs)(ee.B, {
                                        className: ec.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            g && !o && (0, n.jsx)(eu, { children: x.intl.string(x.t.Jt6u7B) }),
                                            t.preview &&
                                                (0, n.jsx)(eu, {
                                                    variant: "brand",
                                                    children: x.intl.string(x.t.SKNnqq),
                                                }),
                                        ],
                                    }),
                                (0, n.jsx)(er.C, {
                                    questContent: a,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: l,
                                    children: (e) =>
                                        (0, n.jsx)(et.D, {
                                            ...e,
                                            className: ec.iI,
                                            "aria-label": x.intl.string(x.t.DEoVWZ),
                                            children: (0, n.jsx)(es.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ec.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(ed.Ay, {
                            className: ec.Iu,
                            logotypeClassName: ec.ND,
                            quest: t,
                            separatorSpacing: ed.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: ec.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: ec.O,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: E,
                                            children: x.intl.string(x.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(el.A, {
                                            className: ec.w$,
                                            size: 16,
                                            color: ei.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(en.B, {
                                                color: ei.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children:
                                                t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                o || u
                                    ? null
                                    : (0, n.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          color: E,
                                          children: x.intl.format(x.t["7D8r4F"], { expiryDate: m }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ex = s(355620),
    eh = s(103257);
function eg(e) {
    let { quest: t, location: s, questContentPosition: a, sourceQuestContent: o } = e,
        [r, d] = i.useState(!1),
        c = () => d(!0),
        u = () => d(!1);
    return (0, n.jsx)(C.R, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: a,
        trackGuildAndChannelMetadata: s === l.uF.QUESTS_EMBED,
        sourceQuestContent: o,
        children: (e) =>
            (0, n.jsxs)("div", {
                ref: (t) => {
                    e.current = t;
                },
                className: f()(ex.k, eh.A),
                onMouseEnter: c,
                onMouseLeave: u,
                onFocus: c,
                onBlur: u,
                children: [
                    (0, n.jsx)(em, { quest: t, location: s, isInteracting: r, sourceQuestContent: o }),
                    (0, n.jsx)(Y, {
                        quest: t,
                        location: s,
                        isInteracting: r,
                        contentPosition: a,
                        sourceQuestContent: o,
                    }),
                ],
            }),
    });
}
var ej = s(822663);
function eE(e) {
    let { questId: t } = e,
        {
            quests: s,
            excludedQuests: u,
            isFetchingCurrentQuests: x,
        } = (0, r.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        v = i.useMemo(() => (0, d.vc)(t, s, u), [t, s, u]),
        f = i.useMemo(() => u.find((e) => e.id === t), [t, u]),
        { enabled: C } = o.useConfig({ location: m.rE.EMBED_DESKTOP });
    return x
        ? (0, n.jsx)(a.y, { className: ej.u })
        : null == v
          ? null != f
              ? (0, n.jsx)(h, { questId: t })
              : (0, n.jsx)(g.l, { questId: t, reason: g.o.NOT_FOUND })
          : (0, c.E0)(v.config)
            ? C
                ? (0, n.jsx)(eg, { quest: v, location: l.uF.QUESTS_EMBED, sourceQuestContent: l.uF.QUESTS_EMBED }, v.id)
                : (0, n.jsx)(
                      E.R,
                      { quest: v, location: l.uF.QUESTS_EMBED, sourceQuestContent: l.uF.QUESTS_EMBED },
                      v.id,
                  )
            : (0, n.jsx)(j, { questId: t });
}
