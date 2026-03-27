n.d(t, { x: () => D });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(382222),
    o = n(494012),
    d = n(158954),
    c = n(311907),
    u = n(775602),
    _ = n(409626),
    m = n(106799),
    h = n(859703),
    p = n(33621),
    g = n(714510),
    A = n(890687),
    x = n(561844),
    f = n(590202),
    C = n(710969),
    I = n(92246),
    E = n(792620),
    b = n(453384),
    v = n(201805),
    T = n(212614),
    y = n(79545),
    S = n(646764),
    N = n(398025),
    j = n(545986),
    L = n(654487),
    R = n(985018),
    P = n(376936),
    w = n(582251);
let M = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function D(e) {
    let { quest: t, location: n, isInteracting: r, contentPosition: E, sourceQuestContent: v } = e,
        D = a.useRef(null),
        { ref: U, scrollHeight: B } = (0, o.wR)(),
        G = 104 !== B,
        { expansionSpring: F } = (0, d.zhh)({
            expansionSpring: +!!r,
            config: { tension: 250, friction: 20, clamp: !0 },
        }),
        H = (0, C.Ic)(t),
        V = (0, A.In)(t),
        q = (0, I.mq)(t.config),
        W = (0, I.mH)(t.config),
        z = t.userStatus?.enrolledAt != null,
        Y = t.userStatus?.completedAt != null,
        Q = t.userStatus?.claimedAt != null,
        K = (0, I.ks)(t.config),
        J = (0, I._Z)(t.config),
        { completedRatio: X, completedRatioDisplay: Z } = (0, A.O9)(t),
        $ = (0, g.gj)(t, v, _.Ob.QuestEmbed, D),
        ee = (0, y.Pd)(t),
        et = a.useMemo(
            () =>
                Q && K
                    ? R.intl.format(R.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, i.jsxs)(
                                  k,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, i.jsx)(m.A, { shouldUseThemeColor: !0, className: w.Kq, customSize: 14 }),
                                          J,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : Q
                      ? (0, i.jsx)(k, { questId: t.id, children: q })
                      : K
                        ? R.intl.format(R.t.ro1sze, {
                              balanceHook: () =>
                                  (0, i.jsxs)(
                                      k,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, i.jsx)(m.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: w.Kq,
                                                  customSize: 14,
                                              }),
                                              J,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : R.intl.format(R.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, i.jsx)(k, { questId: t.id, children: W }, t.id),
                          }),
            [q, Q, W, t.id, J, K],
        ),
        en = a.useMemo(() => {
            if (null != $)
                return (0, i.jsx)(d.EYj, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: w.h_,
                    children: $,
                });
        }, [$]),
        ei = (0, c.bG)([u.A], () => u.A.useReducedMotion),
        ea = a.useCallback(() => {
            (0, j.navigateToQuestHome)({ fromContent: n, questId: t.id }),
                (0, x.Y5)({
                    questId: t.id,
                    questContent: n,
                    questContentPosition: E,
                    questContentCTA: f.Cy.LEARN_MORE,
                    sourceQuestContent: v,
                });
        }, [t.id, n, E, v]),
        er = (0, c.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []),
        el = p.t.useConfig({ location: L.rE.EMBED_DESKTOP });
    return (0, i.jsxs)("div", {
        className: w.kL,
        ref: D,
        children: [
            (0, i.jsxs)(s.animated.div, {
                style: { maxHeight: F.to([0, 1], [104, (B ?? 0) + 12]) },
                className: w.z,
                children: [
                    (0, i.jsxs)("div", {
                        className: w.c6,
                        children: [
                            !Q && Y && (0, i.jsx)("div", { className: w.Nz }),
                            z
                                ? (0, i.jsxs)("div", {
                                      className: w.Tr,
                                      children: [
                                          Y &&
                                              (0, i.jsx)(d.akl, {
                                                  importData: M,
                                                  className: w.t_,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !ei,
                                              }),
                                          (0, i.jsx)(b.A, {
                                              size: 76,
                                              percentComplete: X,
                                              percentCompleteText: r && !H ? Z : void 0,
                                              children: (0, i.jsx)(S.A, {
                                                  quest: t,
                                                  questContent: n,
                                                  autoplay: r,
                                                  lazyLoad: !0,
                                                  fullWidth: !0,
                                                  sourceQuestContent: v,
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(S.A, {
                                      quest: t,
                                      autoplay: r,
                                      questContent: n,
                                      className: w.eB,
                                      lazyLoad: !0,
                                      sourceQuestContent: v,
                                  }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        ref: U,
                        className: l()(w.FS, { [w.wq]: !G }),
                        children: [
                            (0, i.jsx)(d.DZT, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: w.G$,
                                children: R.intl.format(R.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, i.jsx)(d.EYj, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: w.wx,
                                children: et,
                            }),
                            en,
                        ],
                    }),
                    G &&
                        (0, i.jsx)(s.animated.div, {
                            style: { opacity: (0, N.a)(F.to([0, 1], [1, 0])) },
                            className: w.hS,
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: P.kL,
                children: er
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
                                  onClick: () => (0, j.m6)(t, n, v),
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
                                  onClick: ea,
                              }),
                              el.enabled && ee === y.UA.UNENROLLED && el.enabledQuestStates.has(y.UA.UNENROLLED)
                                  ? (0, i.jsx)(T.A, {
                                        quest: t,
                                        surface: y.V3.QUEST_EMBED,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: v,
                                        analyticsCtxQuestContentPosition: E,
                                    })
                                  : (0, i.jsx)(O, {
                                        quest: t,
                                        progressState: V,
                                        questContent: n,
                                        sourceQuestContent: v,
                                        questContentPosition: E,
                                    }),
                          ],
                      }),
            }),
        ],
    });
}
let k = a.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, i.jsx)(
        d.EYj,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: w.wx, children: n },
        `${t}_reward`,
    );
});
function O(e) {
    let { quest: t, progressState: n, questContent: a, questContentPosition: r, sourceQuestContent: l } = e,
        s = (0, c.bG)([h.A], () => h.A.isEnrolling(t.id)),
        o = (0, E.vv)(t),
        u = (0, E.Cr)(t),
        _ = (0, C.Ic)(t),
        m = (0, v._c)({
            progressState: n,
            quest: t,
            questContent: a,
            questContentPosition: r,
            inGiftInventory: !1,
            isVideoQuest: o,
            inGameQuest: u,
            sourceQuestContent: l,
        }),
        p = (0, A.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" });
    return _
        ? (0, i.jsx)(d.$nd, {
              variant: "secondary",
              disabled: !0,
              text: R.intl.format(R.t["14o6QY"], { expiryDate: p }),
              fullWidth: !0,
          })
        : (0, i.jsx)(d.$nd, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == m.onClick,
              loading: s,
              onClick: m.onClick ?? void 0,
              text: m.text,
          });
}
