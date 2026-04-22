s.d(t, { A: () => L });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(517738),
    o = s(311907),
    c = s(717421),
    u = s(834730),
    d = s(604121),
    x = s(534514),
    m = s(765671),
    h = s(775602),
    C = s(409626),
    j = s(106799),
    E = s(714510),
    f = s(890687),
    v = s(710969),
    N = s(92246),
    g = s(895253),
    A = s(453384),
    O = s(442734),
    p = s(646764),
    y = s(398025),
    S = s(516226),
    T = s(720875),
    I = s(713457),
    _ = s(419367),
    w = s(985018),
    Q = s(474491);
let q = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function L(e) {
    let {
            quest: t,
            questContent: s,
            isHovering: a,
            contentPosition: L,
            rowIndex: k,
            isVisibleInViewport: R,
            onReceiveErrorHints: D,
            sourceQuestContent: M,
        } = e,
        z = i.useRef(null),
        P = (0, f.Oq)(),
        U = (0, f.SD)(t),
        H = P && U,
        W = (0, N.mq)(t.config),
        F = (0, N.mH)(t.config),
        V = t.userStatus?.enrolledAt != null,
        { ref: K, scrollHeight: $ } = (0, m.wR)(),
        B = 104 !== $,
        { onAssetLoadComplete: G } = i.useContext(S.M),
        { expansionSpring: X } = (0, c.z)({ expansionSpring: +!!a, config: { ..._.N, clamp: !0 } }),
        Y = t.userStatus?.completedAt != null,
        J = t.userStatus?.claimedAt != null,
        Z = (0, N.ks)(t.config),
        ee = (0, N._Z)(t.config),
        { completedRatio: et, completedRatioDisplay: es } = (0, f.O9)(t),
        en = (0, E.gj)(t, M, C.Ob.QuestHome, z),
        ei = i.useMemo(
            () =>
                J && Z
                    ? w.intl.format(w.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, n.jsxs)(
                                  b,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, n.jsx)(j.A, { shouldUseThemeColor: !0, className: Q.Kq, customSize: 14 }),
                                          ee,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : J
                      ? (0, n.jsx)(b, { questId: t.id, children: W })
                      : Z
                        ? w.intl.format(w.t.ro1sze, {
                              balanceHook: () =>
                                  (0, n.jsxs)(
                                      b,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(j.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: Q.Kq,
                                                  customSize: 14,
                                              }),
                                              ee,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : w.intl.format(w.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(b, { questId: t.id, children: F }, t.id),
                          }),
            [W, J, F, t.id, ee, Z],
        ),
        ea = i.useMemo(() => {
            if (null != en)
                return (0, n.jsx)(u.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: Q.h_,
                    children: en,
                });
        }, [en]),
        el = (0, o.bG)([h.A], () => h.A.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: Q.kL,
        ref: z,
        children: [
            (0, n.jsx)(g.A, { visible: H, glow: !0 }),
            (0, n.jsxs)(r.animated.div, {
                style: { maxHeight: X.to([0, 1], [104, ($ ?? 0) + 12]) },
                className: Q.z,
                children: [
                    (0, n.jsx)(T.A, {
                        showPlaceholder: !R,
                        width: 80,
                        height: 80,
                        children: (0, n.jsxs)("div", {
                            className: Q.c6,
                            children: [
                                !J && Y && (0, n.jsx)("div", { className: Q.Nz }),
                                V
                                    ? (0, n.jsxs)("div", {
                                          className: Q.Tr,
                                          children: [
                                              Y &&
                                                  (0, n.jsx)(d.a, {
                                                      importData: q,
                                                      className: Q.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !el,
                                                  }),
                                              (0, n.jsx)(A.A, {
                                                  size: 76,
                                                  percentComplete: et,
                                                  overlayText: a && !(0, v.Ic)(t) ? es : void 0,
                                                  children: (0, n.jsx)(p.A, {
                                                      quest: t,
                                                      questContent: s,
                                                      autoplay: a,
                                                      onLoadComplete: G,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: M,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(p.A, {
                                          quest: t,
                                          autoplay: a,
                                          questContent: s,
                                          className: Q.eB,
                                          onLoadComplete: G,
                                          lazyLoad: !0,
                                          sourceQuestContent: M,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: K,
                        className: l()(Q.FS, { [Q.wq]: !B }),
                        children: [
                            (0, n.jsx)(x.D, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: Q.G$,
                                children: w.intl.format(w.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            U
                                ? (0, n.jsxs)("div", {
                                      className: Q.xv,
                                      children: [
                                          (0, n.jsx)(u.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: Q.wx,
                                              children: ei,
                                          }),
                                          (0, n.jsx)(O.e, { questId: t.id, canUseQuestOrbMultiplier: P }),
                                      ],
                                  })
                                : (0, n.jsx)(u.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: Q.wx,
                                      children: ei,
                                  }),
                            ea,
                        ],
                    }),
                    B &&
                        (0, n.jsx)(r.animated.div, {
                            style: { opacity: (0, y.a)(X.to([0, 1], [1, 0])) },
                            className: Q.hS,
                        }),
                ],
            }),
            (0, n.jsx)(I.A, {
                quest: t,
                questContent: s,
                contentPosition: L,
                rowIndex: k,
                onReceiveErrorHints: D,
                sourceQuestContent: M,
            }),
        ],
    });
}
let b = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        u.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: Q.wx, children: s },
        `${t}_reward`,
    );
});
