n.d(t, { A: () => O });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(773690),
    o = n(311907),
    d = n(397927),
    c = n(765671),
    u = n(775602),
    m = n(409626),
    h = n(106799),
    x = n(714510),
    p = n(890687),
    g = n(710969),
    _ = n(92246),
    f = n(895253),
    v = n(453384),
    b = n(442734),
    j = n(646764),
    A = n(398025),
    C = n(516226),
    y = n(720875),
    S = n(713457),
    T = n(419367),
    E = n(985018),
    N = n(582251);
let I = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function O(e) {
    let {
            quest: t,
            questContent: n,
            isHovering: s,
            contentPosition: O,
            rowIndex: R,
            isVisibleInViewport: w,
            onReceiveErrorHints: D,
            sourceQuestContent: P,
        } = e,
        M = i.useRef(null),
        L = (0, p.Oq)(),
        U = (0, p.SD)(t),
        B = L && U,
        G = (0, _.mq)(t.config),
        F = (0, _.mH)(t.config),
        V = t.userStatus?.enrolledAt != null,
        { ref: W, scrollHeight: H } = (0, c.wR)(),
        K = 104 !== H,
        { onAssetLoadComplete: z } = i.useContext(C.M),
        { expansionSpring: $ } = (0, d.zhh)({ expansionSpring: +!!s, config: { ...T.N, clamp: !0 } }),
        q = t.userStatus?.completedAt != null,
        Q = t.userStatus?.claimedAt != null,
        Y = (0, _.ks)(t.config),
        J = (0, _._Z)(t.config),
        { completedRatio: X, completedRatioDisplay: Z } = (0, p.O9)(t),
        ee = (0, x.gj)(t, P, m.Ob.QuestHome, M),
        et = i.useMemo(
            () =>
                Q && Y
                    ? E.intl.format(E.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  k,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, a.jsx)(h.A, { shouldUseThemeColor: !0, className: N.Kq, customSize: 14 }),
                                          J,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : Q
                      ? (0, a.jsx)(k, { questId: t.id, children: G })
                      : Y
                        ? E.intl.format(E.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      k,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, a.jsx)(h.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: N.Kq,
                                                  customSize: 14,
                                              }),
                                              J,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : E.intl.format(E.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, a.jsx)(k, { questId: t.id, children: F }, t.id),
                          }),
            [G, Q, F, t.id, J, Y],
        ),
        en = i.useMemo(() => {
            if (null != ee)
                return (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: N.h_,
                    children: ee,
                });
        }, [ee]),
        ea = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: N.kL,
        ref: M,
        children: [
            (0, a.jsx)(f.A, { visible: B, glow: !0 }),
            (0, a.jsxs)(r.animated.div, {
                style: { maxHeight: $.to([0, 1], [104, (H ?? 0) + 12]) },
                className: N.z,
                children: [
                    (0, a.jsx)(y.A, {
                        showPlaceholder: !w,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: N.c6,
                            children: [
                                !Q && q && (0, a.jsx)("div", { className: N.Nz }),
                                V
                                    ? (0, a.jsxs)("div", {
                                          className: N.Tr,
                                          children: [
                                              q &&
                                                  (0, a.jsx)(d.akl, {
                                                      importData: I,
                                                      className: N.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ea,
                                                  }),
                                              (0, a.jsx)(v.A, {
                                                  size: 76,
                                                  percentComplete: X,
                                                  percentCompleteText: s && !(0, g.Ic)(t) ? Z : void 0,
                                                  children: (0, a.jsx)(j.A, {
                                                      quest: t,
                                                      questContent: n,
                                                      autoplay: s,
                                                      onLoadComplete: z,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: P,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(j.A, {
                                          quest: t,
                                          autoplay: s,
                                          questContent: n,
                                          className: N.eB,
                                          onLoadComplete: z,
                                          lazyLoad: !0,
                                          sourceQuestContent: P,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: W,
                        className: l()(N.FS, { [N.wq]: !K }),
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: N.G$,
                                children: E.intl.format(E.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            U
                                ? (0, a.jsxs)("div", {
                                      className: N.xv,
                                      children: [
                                          (0, a.jsx)(d.Text, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: N.wx,
                                              children: et,
                                          }),
                                          (0, a.jsx)(b.e, { questId: t.id, canUseQuestOrbMultiplier: L }),
                                      ],
                                  })
                                : (0, a.jsx)(d.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: N.wx,
                                      children: et,
                                  }),
                            en,
                        ],
                    }),
                    K &&
                        (0, a.jsx)(r.animated.div, {
                            style: { opacity: (0, A.a)($.to([0, 1], [1, 0])) },
                            className: N.hS,
                        }),
                ],
            }),
            (0, a.jsx)(S.A, {
                quest: t,
                questContent: n,
                contentPosition: O,
                rowIndex: R,
                onReceiveErrorHints: D,
                sourceQuestContent: P,
            }),
        ],
    });
}
let k = i.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        d.Text,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: N.wx, children: n },
        `${t}_reward`,
    );
});
