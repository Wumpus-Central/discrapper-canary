n.d(t, { x: () => B });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(419354),
    o = n(494012),
    d = n(717421),
    c = n(834730),
    u = n(604121),
    m = n(534514),
    _ = n(825484),
    h = n(821609),
    p = n(311907),
    g = n(775602),
    A = n(409626),
    f = n(106799),
    x = n(859703),
    C = n(112142),
    E = n(714510),
    I = n(890687),
    v = n(561844),
    b = n(590202),
    T = n(710969),
    S = n(92246),
    y = n(792620),
    N = n(453384),
    j = n(201805),
    L = n(212614),
    R = n(79545),
    P = n(646764),
    w = n(398025),
    D = n(545986),
    k = n(654487),
    O = n(985018),
    M = n(562296),
    U = n(474491);
let G = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function B(e) {
    let { quest: t, location: n, isInteracting: a, contentPosition: y, sourceQuestContent: j } = e,
        B = l.useRef(null),
        { ref: V, scrollHeight: q } = (0, o.wR)(),
        W = 104 !== q,
        { expansionSpring: z } = (0, d.z)({ expansionSpring: +!!a, config: { tension: 250, friction: 20, clamp: !0 } }),
        Y = (0, T.Ic)(t),
        Q = (0, I.In)(t),
        K = (0, S.mq)(t.config),
        Z = (0, S.mH)(t.config),
        J = t.userStatus?.enrolledAt != null,
        X = t.userStatus?.completedAt != null,
        $ = t.userStatus?.claimedAt != null,
        ee = (0, S.ks)(t.config),
        et = (0, S._Z)(t.config),
        { completedRatio: en, completedRatioDisplay: ei } = (0, I.O9)(t),
        el = (0, E.gj)(t, j, A.Ob.QuestEmbed, B),
        ea = (0, R.Pd)(t),
        es = l.useMemo(
            () =>
                $ && ee
                    ? O.intl.format(O.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, i.jsxs)(
                                  F,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, i.jsx)(f.A, { shouldUseThemeColor: !0, className: U.Kq, customSize: 14 }),
                                          et,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : $
                      ? (0, i.jsx)(F, { questId: t.id, children: K })
                      : ee
                        ? O.intl.format(O.t.ro1sze, {
                              balanceHook: () =>
                                  (0, i.jsxs)(
                                      F,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, i.jsx)(f.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: U.Kq,
                                                  customSize: 14,
                                              }),
                                              et,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : O.intl.format(O.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, i.jsx)(F, { questId: t.id, children: Z }, t.id),
                          }),
            [K, $, Z, t.id, et, ee],
        ),
        er = l.useMemo(() => {
            if (null != el)
                return (0, i.jsx)(c.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: U.h_,
                    children: el,
                });
        }, [el]),
        eo = (0, p.bG)([g.A], () => g.A.useReducedMotion),
        ed = l.useCallback(() => {
            (0, D.navigateToQuestHome)({ fromContent: n, questId: t.id }),
                (0, v.Y5)({
                    questId: t.id,
                    questContent: n,
                    questContentPosition: y,
                    questContentCTA: b.Cy.LEARN_MORE,
                    sourceQuestContent: j,
                });
        }, [t.id, n, y, j]),
        ec = (0, p.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
        eu = C.t.useConfig({ location: k.rE.EMBED_DESKTOP });
    return (0, i.jsxs)("div", {
        className: U.kL,
        ref: B,
        children: [
            (0, i.jsxs)(r.animated.div, {
                style: { maxHeight: z.to([0, 1], [104, (q ?? 0) + 12]) },
                className: U.z,
                children: [
                    (0, i.jsxs)("div", {
                        className: U.c6,
                        children: [
                            !$ && X && (0, i.jsx)("div", { className: U.Nz }),
                            J
                                ? (0, i.jsxs)("div", {
                                      className: U.Tr,
                                      children: [
                                          X &&
                                              (0, i.jsx)(u.a, {
                                                  importData: G,
                                                  className: U.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !eo,
                                              }),
                                          (0, i.jsx)(N.A, {
                                              size: 76,
                                              percentComplete: en,
                                              overlayText: a && !Y ? ei : void 0,
                                              children: (0, i.jsx)(P.A, {
                                                  quest: t,
                                                  questContent: n,
                                                  autoplay: a,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: j,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(P.A, {
                                      quest: t,
                                      autoplay: a,
                                      questContent: n,
                                      className: U.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: j,
                                  }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        ref: V,
                        className: s()(U.FS, { [U.wq]: !W }),
                        children: [
                            (0, i.jsx)(m.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: U.G$,
                                children: O.intl.format(O.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, i.jsx)(c.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: U.wx,
                                children: es,
                            }),
                            er,
                        ],
                    }),
                    W &&
                        (0, i.jsx)(r.animated.div, {
                            style: { opacity: (0, w.a)(z.to([0, 1], [1, 0])) },
                            className: U.hS,
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: M.kL,
                children: ec
                    ? (0, i.jsxs)(_.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, i.jsx)(h.$, { variant: "secondary", disabled: !0, text: O.intl.string(O.t.V293qn) }),
                              (0, i.jsx)(h.$, {
                                  variant: "primary",
                                  onClick: () => (0, D.m6)(t, n, j),
                                  text: O.intl.string(O.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(_.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, i.jsx)(h.$, {
                                  variant: "secondary",
                                  text: O.intl.string(O.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: ed,
                              }),
                              eu.enabled && eu.enabledQuestStates.has(ea)
                                  ? (0, i.jsx)(L.A, {
                                        quest: t,
                                        surface: R.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: j,
                                        analyticsCtxQuestContentPosition: y,
                                    })
                                  : (0, i.jsx)(H, {
                                        quest: t,
                                        progressState: Q,
                                        questContent: n,
                                        sourceQuestContent: j,
                                        questContentPosition: y,
                                    }),
                          ],
                      }),
            }),
        ],
    });
}
let F = l.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, i.jsx)(
        c.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: U.wx, children: n },
        `${t}_reward`,
    );
});
function H(e) {
    let { quest: t, progressState: n, questContent: l, questContentPosition: a, sourceQuestContent: s } = e,
        r = (0, p.bG)([x.A], () => x.A.isEnrolling(t.id)),
        o = (0, y.vv)(t),
        d = (0, y.Cr)(t),
        c = (0, T.Ic)(t),
        u = (0, j._c)({
            progressState: n,
            quest: t,
            questContent: l,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: d,
            sourceQuestContent: s,
        }),
        m = (0, I.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return c
        ? (0, i.jsx)(h.$, {
              variant: "secondary",
              disabled: !0,
              text: O.intl.format(O.t["6p8BZx"], { expiryDate: m }),
              fullWidth: !0,
          })
        : (0, i.jsx)(h.$, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == u.onClick,
              loading: r,
              onClick: u.onClick ?? void 0,
              text: u.text,
          });
}
