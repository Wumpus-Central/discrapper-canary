s.d(t, { M: () => ex });
var n = s(627968),
    i = s(64700),
    l = s(503698),
    a = s.n(l),
    r = s(507107),
    o = s(73473),
    c = s(873174),
    d = s(494012),
    u = s(717421),
    m = s(834730),
    x = s(604121),
    h = s(534514),
    j = s(825484),
    g = s(821609),
    f = s(17928),
    E = s(775602),
    v = s(409626),
    N = s(106799),
    C = s(287809),
    A = s(859703),
    q = s(112142),
    b = s(838077),
    S = s(31587),
    _ = s(646917),
    y = s(561844),
    p = s(590202),
    w = s(710969),
    I = s(576761),
    T = s(801365),
    D = s(792620),
    Q = s(895253),
    M = s(453384),
    k = s(371912),
    U = s(442734),
    L = s(368715),
    B = s(79545),
    W = s(646764),
    O = s(398025),
    z = s(617986),
    R = s(190107),
    P = s(375708),
    G = s(562296),
    F = s(474491);
let H = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function K(e) {
    let { quest: t, location: s, isInteracting: l, contentPosition: r, sourceQuestContent: o } = e,
        D = i.useRef(null),
        { ref: k, scrollHeight: K } = (0, d.wR)(),
        X = 104 !== K,
        { expansionSpring: Y } = (0, u.z)({ expansionSpring: +!!l, config: { tension: 250, friction: 20, clamp: !0 } }),
        Z = (0, _.z)(),
        J = (0, S.SD)(t, Z),
        ee = Z === I.MA.NITRO && J,
        et = (0, w.Ic)(t),
        es = (0, S.In)(t),
        en = (0, f.bG)([C.default], () => C.default.getCurrentUser()),
        ei = (0, T.mq)(t.config, en),
        el = (0, T.mH)(t.config, en),
        ea = t.userStatus?.enrolledAt != null,
        er = t.userStatus?.completedAt != null,
        eo = t.userStatus?.claimedAt != null,
        ec = (0, T.ks)(t.config),
        ed = t.userStatus?.orbQuantityClaimed ?? (0, T._Z)(t.config),
        eu = (0, T.wo)(t.config, en),
        { completedRatio: em, completedRatioDisplay: ex } = (0, S.O9)(t),
        eh = (0, b.A9)(t, o, R.rE.EMBED_DESKTOP, s, v.Ob.QuestEmbed, D),
        ej = (0, B.Pd)(t),
        eg = i.useMemo(
            () =>
                eo && ec
                    ? (0, n.jsxs)(
                          $,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(N.A, { shouldUseThemeColor: !0, className: F.Kq, customSize: 14 }),
                                  P.intl.format(P.t["nLXlh+"], { orbAmount: ed ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : eo
                      ? (0, n.jsx)($, { questId: t.id, children: ei })
                      : ec
                        ? P.intl.format(P.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      $,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(N.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: F.Kq,
                                                  customSize: 14,
                                              }),
                                              P.intl.format(P.t["nLXlh+"], { orbAmount: eu ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : P.intl.format(P.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)($, { questId: t.id, children: el }, t.id),
                          }),
            [ei, eo, el, t.id, eu, ed, ec],
        ),
        ef = i.useMemo(() => {
            if (null != eh)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: F.h_,
                    children: eh,
                });
        }, [eh]),
        eE = (0, f.bG)([E.A], () => E.A.useReducedMotion),
        ev = i.useCallback(() => {
            (0, z.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, y.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: r,
                    questContentCTA: p.Cy.LEARN_MORE,
                    sourceQuestContent: o,
                });
        }, [t.id, s, r, o]),
        eN = (0, f.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
        eC = q.t.useConfig({ location: R.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: F.kL,
        ref: D,
        children: [
            (0, n.jsx)(Q.A, { visible: ee, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: Y.to([0, 1], [104, (K ?? 0) + 12]) },
                className: F.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: F.c6,
                        children: [
                            !eo && er && (0, n.jsx)("div", { className: F.Nz }),
                            ea
                                ? (0, n.jsxs)("div", {
                                      className: F.Tr,
                                      children: [
                                          er &&
                                              (0, n.jsx)(x.a, {
                                                  importData: H,
                                                  className: F.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !eE,
                                              }),
                                          (0, n.jsx)(M.A, {
                                              size: 76,
                                              percentComplete: em,
                                              overlayText: l && !et ? ex : void 0,
                                              children: (0, n.jsx)(W.A, {
                                                  quest: t,
                                                  questContent: s,
                                                  autoplay: l,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: o,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, n.jsx)(W.A, {
                                      quest: t,
                                      autoplay: l,
                                      questContent: s,
                                      className: F.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: o,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: k,
                        className: a()(F.FS, { [F.wq]: !X }),
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: F.G$,
                                children: P.intl.format(P.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            J
                                ? (0, n.jsxs)("div", {
                                      className: F.xv,
                                      children: [
                                          (0, n.jsx)(m.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: F.wx,
                                              children: eg,
                                          }),
                                          (0, n.jsx)(U.e, { questId: t.id, orbMultiplierEligibility: Z }),
                                      ],
                                  })
                                : (0, n.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: F.wx,
                                      children: eg,
                                  }),
                            ef,
                        ],
                    }),
                    X &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, O.a)(Y.to([0, 1], [1, 0])) },
                            className: F.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: G.kL,
                children: eN
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, { variant: "secondary", disabled: !0, text: P.intl.string(P.t.V293qn) }),
                              (0, n.jsx)(g.$, {
                                  variant: "primary",
                                  onClick: () => (0, z.m6)(t, s, o),
                                  text: P.intl.string(P.t.vY9GgG),
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
                                  text: P.intl.string(P.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ev,
                              }),
                              eC.enabled && eC.enabledQuestStates.has(ej)
                                  ? (0, n.jsx)(L.A, {
                                        quest: t,
                                        surface: B.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: o,
                                        analyticsCtxQuestContentPosition: r,
                                    })
                                  : (0, n.jsx)(V, {
                                        quest: t,
                                        progressState: es,
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
let $ = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: F.wx, children: s },
        `${t}_reward`,
    );
});
function V(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: l, sourceQuestContent: a } = e,
        r = (0, f.bG)([A.A], () => A.A.isEnrolling(t.id)),
        o = (0, D.vv)(t),
        c = (0, D.Cr)(t),
        d = (0, w.Ic)(t),
        u = (0, k._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: l,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: c,
            sourceQuestContent: a,
        }),
        m = (0, S.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return d
        ? (0, n.jsx)(g.$, {
              variant: "secondary",
              disabled: !0,
              text: P.intl.format(P.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(g.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == u.onClick,
              loading: r,
              onClick: u.onClick ?? void 0,
              text: u.text,
          });
}
var X = s(366010),
    Y = s(331322),
    Z = s(939249),
    J = s(365199),
    ee = s(820081),
    et = s(661531),
    es = s(736653),
    en = s(814925),
    ei = s(814793),
    el = s(918338),
    ea = s(270045),
    er = s(57718),
    eo = s(368774);
function ec(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: a()(eo.Io, { [eo.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(m.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: eo.Xi,
            children: t,
        }),
    });
}
function ed(e) {
    let { quest: t, isInteracting: s, location: l, sourceQuestContent: a } = e,
        r = (0, w.Ic)(t),
        o = t.userStatus?.claimedAt != null,
        c = (0, S.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        d = (0, f.bG)([A.A], () => A.A.getQuestHomeHero()),
        u = i.useMemo(() => null != d && (0, ei.I0)(d, t.id), [d, t.id]),
        x = (0, es.Ay)(),
        h = (0, X.M)(x) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, n.jsx)("div", {
                className: eo.IC,
                children: (0, n.jsx)(el.A, {
                    quest: t,
                    isInteracting: s,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: eo.l1,
                    imageClassName: eo.c8,
                }),
            }),
            (0, n.jsx)("div", { className: eo.Lw }),
            (0, n.jsx)("div", {
                className: eo.nX,
                children: (0, n.jsxs)("div", {
                    className: eo.PG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eo.mY,
                            children: [
                                (u || t.preview) &&
                                    (0, n.jsxs)(Y.B, {
                                        className: eo.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            u && !r && (0, n.jsx)(ec, { children: P.intl.string(P.t.Jt6u7B) }),
                                            t.preview &&
                                                (0, n.jsx)(ec, {
                                                    variant: "brand",
                                                    children: P.intl.string(P.t.SKNnqq),
                                                }),
                                        ],
                                    }),
                                (0, n.jsx)(ea.C, {
                                    questContent: l,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(Z.D, {
                                            ...e,
                                            className: eo.iI,
                                            "aria-label": P.intl.string(P.t.DEoVWZ),
                                            children: (0, n.jsx)(J.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: eo.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(er.Ay, {
                            className: eo.Iu,
                            logotypeClassName: eo.ND,
                            quest: t,
                            separatorSpacing: er.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: eo.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: eo.O,
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: h,
                                            children: P.intl.string(P.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(en.A, {
                                            className: eo.w$,
                                            size: 16,
                                            color: et.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(ee.B, {
                                                color: et.A.unsafe_rawColors.WHITE.css,
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
                                r || o
                                    ? null
                                    : (0, n.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          color: h,
                                          children: P.intl.format(P.t["7D8r4F"], { expiryDate: c }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var eu = s(355620),
    em = s(103257);
function ex(e) {
    let { quest: t, location: s, questContentPosition: l, sourceQuestContent: c } = e,
        [d, u] = i.useState(!1),
        m = () => u(!0),
        x = () => u(!1);
    return (0, n.jsx)(o.R, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: l,
        trackGuildAndChannelMetadata: s === r.uF.QUESTS_EMBED,
        sourceQuestContent: c,
        children: (e) =>
            (0, n.jsxs)("div", {
                ref: (t) => {
                    e.current = t;
                },
                className: a()(eu.k, em.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(ed, { quest: t, location: s, isInteracting: d, sourceQuestContent: c }),
                    (0, n.jsx)(K, {
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
