n.d(t, { x: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(294426),
    o = n(494012),
    d = n(158954),
    c = n(311907),
    u = n(775602),
    m = n(409626),
    _ = n(106799),
    h = n(859703),
    p = n(112142),
    g = n(714510),
    A = n(890687),
    x = n(561844),
    f = n(590202),
    C = n(710969),
    E = n(92246),
    I = n(792620),
    v = n(453384),
    b = n(201805),
    T = n(212614),
    y = n(79545),
    N = n(646764),
    S = n(398025),
    j = n(545986),
    L = n(654487),
    R = n(985018),
    P = n(376936),
    D = n(582251);
let M = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function w(e) {
    let { quest: t, location: n, isInteracting: s, contentPosition: I, sourceQuestContent: b } = e,
        w = l.useRef(null),
        { ref: U, scrollHeight: B } = (0, o.wR)(),
        G = 104 !== B,
        { expansionSpring: F } = (0, d.zhh)({
            expansionSpring: +!!s,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        H = (0, C.Ic)(t),
        V = (0, A.In)(t),
        q = (0, E.mq)(t.config),
        W = (0, E.mH)(t.config),
        Y = t.userStatus?.enrolledAt != null,
        z = t.userStatus?.completedAt != null,
        Q = t.userStatus?.claimedAt != null,
        K = (0, E.ks)(t.config),
        J = (0, E._Z)(t.config),
        { completedRatio: X, completedRatioDisplay: Z } = (0, A.O9)(t),
        $ = (0, g.gj)(t, b, m.Ob.QuestEmbed, w),
        ee = (0, y.Pd)(t),
        et = l.useMemo(
            () =>
                Q && K
                    ? R.intl.format(R.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, i.jsxs)(
                                  O,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, i.jsx)(_.A, { shouldUseThemeColor: !0, className: D.Kq, customSize: 14 }),
                                          J,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : Q
                      ? (0, i.jsx)(O, { questId: t.id, children: q })
                      : K
                        ? R.intl.format(R.t.ro1sze, {
                              balanceHook: () =>
                                  (0, i.jsxs)(
                                      O,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, i.jsx)(_.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: D.Kq,
                                                  customSize: 14,
                                              }),
                                              J,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : R.intl.format(R.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, i.jsx)(O, { questId: t.id, children: W }, t.id),
                          }),
            [q, Q, W, t.id, J, K],
        ),
        en = l.useMemo(() => {
            if (null != $)
                return (0, i.jsx)(d.EYj, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: D.h_,
                    children: $,
                });
        }, [$]),
        ei = (0, c.bG)([u.A], () => u.A.useReducedMotion),
        el = l.useCallback(() => {
            (0, j.navigateToQuestHome)({ fromContent: n, questId: t.id }),
                (0, x.Y5)({
                    questId: t.id,
                    questContent: n,
                    questContentPosition: I,
                    questContentCTA: f.Cy.LEARN_MORE,
                    sourceQuestContent: b,
                });
        }, [t.id, n, I, b]),
        es = (0, c.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []),
        er = p.t.useConfig({ location: L.rE.EMBED_DESKTOP });
    return (0, i.jsxs)("div", {
        className: D.kL,
        ref: w,
        children: [
            (0, i.jsxs)(a.animated.div, {
                style: { maxHeight: F.to([0, 1], [104, (B ?? 0) + 12]) },
                className: D.z,
                children: [
                    (0, i.jsxs)("div", {
                        className: D.c6,
                        children: [
                            !Q && z && (0, i.jsx)("div", { className: D.Nz }),
                            Y
                                ? (0, i.jsxs)("div", {
                                      className: D.Tr,
                                      children: [
                                          z &&
                                              (0, i.jsx)(d.akl, {
                                                  importData: M,
                                                  className: D.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !ei,
                                              }),
                                          (0, i.jsx)(v.A, {
                                              size: 76,
                                              percentComplete: X,
                                              percentCompleteText: s && !H ? Z : void 0,
                                              children: (0, i.jsx)(N.A, {
                                                  quest: t,
                                                  questContent: n,
                                                  autoplay: s,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: b,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(N.A, {
                                      quest: t,
                                      autoplay: s,
                                      questContent: n,
                                      className: D.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: b,
                                  }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        ref: U,
                        className: r()(D.FS, { [D.wq]: !G }),
                        children: [
                            (0, i.jsx)(d.DZT, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: D.G$,
                                children: R.intl.format(R.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, i.jsx)(d.EYj, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: D.wx,
                                children: et,
                            }),
                            en,
                        ],
                    }),
                    G &&
                        (0, i.jsx)(a.animated.div, {
                            style: { opacity: (0, S.a)(F.to([0, 1], [1, 0])) },
                            className: D.hS,
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: P.kL,
                children: es
                    ? (0, i.jsxs)(d.e2v, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, i.jsx)(d.$nd, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: R.intl.string(R.t.V293qn),
                              }),
                              (0, i.jsx)(d.$nd, {
                                  variant: "primary",
                                  onClick: () => (0, j.m6)(t, n, b),
                                  text: R.intl.string(R.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(d.e2v, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, i.jsx)(d.$nd, {
                                  variant: "secondary",
                                  text: R.intl.string(R.t.LLLLPD),
                                  fullWidth: !0,
                                  onClick: el,
                              }),
                              er.enabled && er.enabledQuestStates.has(ee)
                                  ? (0, i.jsx)(T.A, {
                                        quest: t,
                                        surface: y.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: b,
                                        analyticsCtxQuestContentPosition: I,
                                    })
                                  : (0, i.jsx)(k, {
                                        quest: t,
                                        progressState: V,
                                        questContent: n,
                                        sourceQuestContent: b,
                                        questContentPosition: I,
                                    }),
                          ],
                      }),
            }),
        ],
    });
}
let O = l.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, i.jsx)(
        d.EYj,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: D.wx, children: n },
        `${t}_reward`,
    );
});
function k(e) {
    let { quest: t, progressState: n, questContent: l, questContentPosition: s, sourceQuestContent: r } = e,
        a = (0, c.bG)([h.A], () => h.A.isEnrolling(t.id)),
        o = (0, I.vv)(t),
        u = (0, I.Cr)(t),
        m = (0, C.Ic)(t),
        _ = (0, b._c)({
            progressState: n,
            quest: t,
            questContent: l,
            questContentPosition: s,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: u,
            sourceQuestContent: r,
        }),
        p = (0, A.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return m
        ? (0, i.jsx)(d.$nd, {
              variant: "secondary",
              disabled: !0,
              text: R.intl.format(R.t["14o6QY"], { expiryDate: p }),
              fullWidth: !0,
          })
        : (0, i.jsx)(d.$nd, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == _.onClick,
              loading: a,
              onClick: _.onClick ?? void 0,
              text: _.text,
          });
}
