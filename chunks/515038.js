n.d(t, { A: () => N });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(382222),
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
    f = n(453384),
    v = n(646764),
    b = n(398025),
    j = n(516226),
    A = n(720875),
    C = n(713457),
    y = n(419367),
    T = n(985018),
    S = n(582251);
let E = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function N(e) {
    let {
            quest: t,
            questContent: n,
            isHovering: s,
            contentPosition: N,
            rowIndex: k,
            isVisibleInViewport: O,
            onReceiveErrorHints: R,
            sourceQuestContent: w,
        } = e,
        D = i.useRef(null),
        P = (0, _.mq)(t.config),
        M = (0, _.mH)(t.config),
        L = t.userStatus?.enrolledAt != null,
        { ref: U, scrollHeight: B } = (0, c.wR)(),
        G = 104 !== B,
        { onAssetLoadComplete: F } = i.useContext(j.M),
        { expansionSpring: V } = (0, d.zhh)({ expansionSpring: +!!s, config: { ...y.N, clamp: !0 } }),
        W = t.userStatus?.completedAt != null,
        H = t.userStatus?.claimedAt != null,
        K = (0, _.ks)(t.config),
        z = (0, _._Z)(t.config),
        { completedRatio: $, completedRatioDisplay: q } = (0, p.O9)(t),
        Q = (0, x.gj)(t, w, m.Ob.QuestHome, D),
        Y = i.useMemo(
            () =>
                H && K
                    ? T.intl.format(T.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  I,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, a.jsx)(h.A, { shouldUseThemeColor: !0, className: S.Kq, customSize: 14 }),
                                          z,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : H
                      ? (0, a.jsx)(I, { questId: t.id, children: P })
                      : K
                        ? T.intl.format(T.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      I,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, a.jsx)(h.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: S.Kq,
                                                  customSize: 14,
                                              }),
                                              z,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : T.intl.format(T.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, a.jsx)(I, { questId: t.id, children: M }, t.id),
                          }),
            [P, H, M, t.id, z, K],
        ),
        J = i.useMemo(() => {
            if (null != Q)
                return (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: S.h_,
                    children: Q,
                });
        }, [Q]),
        X = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: S.kL,
        ref: D,
        children: [
            (0, a.jsxs)(r.animated.div, {
                style: { maxHeight: V.to([0, 1], [104, (B ?? 0) + 12]) },
                className: S.z,
                children: [
                    (0, a.jsx)(A.A, {
                        showPlaceholder: !O,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: S.c6,
                            children: [
                                !H && W && (0, a.jsx)("div", { className: S.Nz }),
                                L
                                    ? (0, a.jsxs)("div", {
                                          className: S.Tr,
                                          children: [
                                              W &&
                                                  (0, a.jsx)(d.akl, {
                                                      importData: E,
                                                      className: S.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !X,
                                                  }),
                                              (0, a.jsx)(f.A, {
                                                  size: 76,
                                                  percentComplete: $,
                                                  percentCompleteText: s && !(0, g.Ic)(t) ? q : void 0,
                                                  children: (0, a.jsx)(v.A, {
                                                      quest: t,
                                                      questContent: n,
                                                      autoplay: s,
                                                      onLoadComplete: F,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: w,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(v.A, {
                                          quest: t,
                                          autoplay: s,
                                          questContent: n,
                                          className: S.eB,
                                          onLoadComplete: F,
                                          lazyLoad: !0,
                                          sourceQuestContent: w,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: U,
                        className: l()(S.FS, { [S.wq]: !G }),
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: S.G$,
                                children: T.intl.format(T.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: S.wx,
                                children: Y,
                            }),
                            J,
                        ],
                    }),
                    G &&
                        (0, a.jsx)(r.animated.div, {
                            style: { opacity: (0, b.a)(V.to([0, 1], [1, 0])) },
                            className: S.hS,
                        }),
                ],
            }),
            (0, a.jsx)(C.A, {
                quest: t,
                questContent: n,
                contentPosition: N,
                rowIndex: k,
                onReceiveErrorHints: R,
                sourceQuestContent: w,
            }),
        ],
    });
}
let I = i.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        d.Text,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: S.wx, children: n },
        `${t}_reward`,
    );
});
