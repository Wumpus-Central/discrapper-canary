s.d(t, { M: () => ex });
var n = s(627968),
    i = s(64700),
    l = s(503698),
    a = s.n(l),
    o = s(507107),
    r = s(73473),
    c = s(873174),
    u = s(494012),
    d = s(717421),
    m = s(834730),
    x = s(604121),
    h = s(534514),
    j = s(825484),
    g = s(821609),
    E = s(17928),
    v = s(775602),
    f = s(409626),
    C = s(106799),
    N = s(287809),
    A = s(859703),
    q = s(112142),
    S = s(838077),
    _ = s(31587),
    b = s(646917),
    p = s(561844),
    y = s(590202),
    I = s(710969),
    w = s(576761),
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
    let { quest: t, location: s, isInteracting: l, contentPosition: o, sourceQuestContent: r } = e,
        D = i.useRef(null),
        { ref: k, scrollHeight: K } = (0, u.wR)(),
        V = 104 !== K,
        { expansionSpring: X } = (0, d.z)({ expansionSpring: +!!l, config: { tension: 250, friction: 20, clamp: !0 } }),
        Z = (0, b.z)(),
        J = (0, _.SD)(t, Z),
        ee = Z === w.MA.NITRO && J,
        et = (0, I.Ic)(t),
        es = (0, _.In)(t),
        en = (0, E.bG)([N.default], () => N.default.getCurrentUser()),
        ei = (0, T.mq)(t.config, en),
        el = (0, T.mH)(t.config, en),
        ea = t.userStatus?.enrolledAt != null,
        eo = t.userStatus?.completedAt != null,
        er = t.userStatus?.claimedAt != null,
        ec = (0, T.ks)(t.config),
        eu = t.userStatus?.orbQuantityClaimed ?? (0, T._Z)(t.config),
        ed = (0, T.wo)(t.config, en),
        { completedRatio: em, completedRatioDisplay: ex } = (0, _.O9)(t),
        eh = (0, S.A9)(t, r, R.rE.EMBED_DESKTOP, s, f.Ob.QuestEmbed, D),
        ej = (0, B.Pd)(t),
        eg = i.useMemo(
            () =>
                er && ec
                    ? (0, n.jsxs)(
                          $,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(C.A, { shouldUseThemeColor: !0, className: F.Kq, customSize: 14 }),
                                  P.intl.format(P.t["nLXlh+"], { orbAmount: eu ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : er
                      ? (0, n.jsx)($, { questId: t.id, children: ei })
                      : ec
                        ? P.intl.format(P.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      $,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(C.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: F.Kq,
                                                  customSize: 14,
                                              }),
                                              P.intl.format(P.t["nLXlh+"], { orbAmount: ed ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : P.intl.format(P.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)($, { questId: t.id, children: el }, t.id),
                          }),
            [ei, er, el, t.id, ed, eu, ec],
        ),
        eE = i.useMemo(() => {
            if (null != eh)
                return (0, n.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: F.h_,
                    children: eh,
                });
        }, [eh]),
        ev = (0, E.bG)([v.A], () => v.A.useReducedMotion),
        ef = i.useCallback(() => {
            (0, z.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                (0, p.Y5)({
                    questId: t.id,
                    questContent: s,
                    questContentPosition: o,
                    questContentCTA: y.Cy.LEARN_MORE,
                    sourceQuestContent: r,
                });
        }, [t.id, s, o, r]),
        eC = (0, E.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
        eN = q.t.useConfig({ location: R.rE.EMBED_DESKTOP });
    return (0, n.jsxs)("div", {
        className: F.kL,
        ref: D,
        children: [
            (0, n.jsx)(Q.A, { visible: ee, glow: !0 }),
            (0, n.jsxs)(c.animated.div, {
                style: { maxHeight: X.to([0, 1], [104, (K ?? 0) + 12]) },
                className: F.z,
                children: [
                    (0, n.jsxs)("div", {
                        className: F.c6,
                        children: [
                            !er && eo && (0, n.jsx)("div", { className: F.Nz }),
                            ea
                                ? (0, n.jsxs)("div", {
                                      className: F.Tr,
                                      children: [
                                          eo &&
                                              (0, n.jsx)(x.a, {
                                                  importData: H,
                                                  className: F.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !ev,
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
                                                  sourceQuestContent: r,
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
                                      sourceQuestContent: r,
                                  }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        ref: k,
                        className: a()(F.FS, { [F.wq]: !V }),
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
                            eE,
                        ],
                    }),
                    V &&
                        (0, n.jsx)(c.animated.div, {
                            style: { opacity: (0, O.a)(X.to([0, 1], [1, 0])) },
                            className: F.hS,
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: G.kL,
                children: eC
                    ? (0, n.jsxs)(j.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, n.jsx)(g.$, { variant: "secondary", disabled: !0, text: P.intl.string(P.t.V293qn) }),
                              (0, n.jsx)(g.$, {
                                  variant: "primary",
                                  onClick: () => (0, z.m6)(t, s, r),
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
                                  onClick: ef,
                              }),
                              eN.enabled && eN.enabledQuestStates.has(ej)
                                  ? (0, n.jsx)(L.A, {
                                        quest: t,
                                        surface: B.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: r,
                                        analyticsCtxQuestContentPosition: o,
                                    })
                                  : (0, n.jsx)(Y, {
                                        quest: t,
                                        progressState: es,
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
let $ = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        m.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: F.wx, children: s },
        `${t}_reward`,
    );
});
function Y(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: l, sourceQuestContent: a } = e,
        o = (0, E.bG)([A.A], () => A.A.isEnrolling(t.id)),
        r = (0, D.vv)(t),
        c = (0, D.Cr)(t),
        u = (0, I.Ic)(t),
        d = (0, k._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: l,
            inGiftInventory: !1,
            isVideoQuest: r,
            inGameQuest: c,
            sourceQuestContent: a,
        }),
        m = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return u
        ? (0, n.jsx)(g.$, {
              variant: "secondary",
              disabled: !0,
              text: P.intl.format(P.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, n.jsx)(g.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == d.onClick,
              loading: o,
              onClick: d.onClick ?? void 0,
              text: d.text,
          });
}
var V = s(366010),
    X = s(331322),
    Z = s(508770),
    J = s(939249),
    ee = s(365199),
    et = s(820081),
    es = s(661531),
    en = s(736653),
    ei = s(814925),
    el = s(814793),
    ea = s(918338),
    eo = s(270045),
    er = s(57718),
    ec = s(368774);
function eu(e) {
    let { quest: t, isInteracting: s, location: l, sourceQuestContent: a } = e,
        o = (0, I.Ic)(t),
        r = t.userStatus?.claimedAt != null,
        c = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        u = (0, E.bG)([A.A], () => A.A.getQuestHomeHero()),
        d = i.useMemo(() => null != u && (0, el.I0)(u, t.id), [u, t.id]),
        x = (0, en.Ay)(),
        h = (0, V.M)(x) ? "text-muted" : "always-white";
    return (0, n.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, n.jsx)("div", {
                className: ec.IC,
                children: (0, n.jsx)(ea.A, {
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
                                (d || t.preview) &&
                                    (0, n.jsxs)(X.B, {
                                        className: ec.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            d &&
                                                !o &&
                                                (0, n.jsx)(Z.E, {
                                                    type: { text: P.intl.string(P.t.Jt6u7B) },
                                                    variant: "expressive",
                                                }),
                                            t.preview &&
                                                (0, n.jsx)(Z.E, {
                                                    type: { text: P.intl.string(P.t.SKNnqq) },
                                                    variant: "brand",
                                                }),
                                        ],
                                    }),
                                (0, n.jsx)(eo.C, {
                                    questContent: l,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: a,
                                    children: (e) =>
                                        (0, n.jsx)(J.D, {
                                            ...e,
                                            className: ec.iI,
                                            "aria-label": P.intl.string(P.t.DEoVWZ),
                                            children: (0, n.jsx)(ee.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: ec.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(er.Ay, {
                            className: ec.Iu,
                            logotypeClassName: ec.ND,
                            quest: t,
                            separatorSpacing: er.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, n.jsxs)("div", {
                            className: ec.E_,
                            children: [
                                (0, n.jsxs)("span", {
                                    className: ec.O,
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            color: h,
                                            children: P.intl.string(P.t.VAbKhK),
                                        }),
                                        (0, n.jsx)(ei.A, {
                                            className: ec.w$,
                                            size: 16,
                                            color: es.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, n.jsx)(et.B, {
                                                color: es.A.unsafe_rawColors.WHITE.css,
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
var ed = s(355620),
    em = s(103257);
function ex(e) {
    let { quest: t, location: s, questContentPosition: l, sourceQuestContent: c } = e,
        [u, d] = i.useState(!1),
        m = () => d(!0),
        x = () => d(!1);
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
                className: a()(ed.k, em.A),
                onMouseEnter: m,
                onMouseLeave: x,
                onFocus: m,
                onBlur: x,
                children: [
                    (0, n.jsx)(eu, { quest: t, location: s, isInteracting: u, sourceQuestContent: c }),
                    (0, n.jsx)(K, {
                        quest: t,
                        location: s,
                        isInteracting: u,
                        contentPosition: l,
                        sourceQuestContent: c,
                    }),
                ],
            }),
    });
}
