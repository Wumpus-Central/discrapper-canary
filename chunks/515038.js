n.d(t, { A: () => E });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(563495),
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
    S = n(419367),
    T = n(985018),
    y = n(196240);
let N = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function E(e) {
    let {
            quest: t,
            questContent: n,
            isHovering: i,
            contentPosition: E,
            rowIndex: k,
            isVisibleInViewport: R,
            onReceiveErrorHints: O,
            sourceQuestContent: w,
        } = e,
        D = s.useRef(null),
        M = (0, _.mq)(t.config),
        P = (0, _.mH)(t.config),
        L = t.userStatus?.enrolledAt != null,
        { ref: U, scrollHeight: B } = (0, c.wR)(),
        G = 104 !== B,
        { onAssetLoadComplete: F } = s.useContext(j.M),
        { expansionSpring: V } = (0, d.zhh)({ expansionSpring: +!!i, config: { ...S.N, clamp: !0 } }),
        W = t.userStatus?.completedAt != null,
        H = t.userStatus?.claimedAt != null,
        K = (0, _.ks)(t.config),
        z = (0, _._Z)(t.config),
        { completedRatio: $, completedRatioDisplay: q } = (0, p.O9)(t),
        Q = (0, x.gj)(t, w, m.Ob.QuestHome, D),
        Y = s.useMemo(
            () =>
                H && K
                    ? T.intl.format(T.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  I,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, a.jsx)(h.A, { shouldUseThemeColor: !0, className: y.Kq, customSize: 14 }),
                                          z,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : H
                      ? (0, a.jsx)(I, { questId: t.id, children: M })
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
                                                  className: y.Kq,
                                                  customSize: 14,
                                              }),
                                              z,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : T.intl.format(T.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, a.jsx)(I, { questId: t.id, children: P }, t.id),
                          }),
            [M, H, P, t.id, z, K],
        ),
        J = s.useMemo(() => {
            if (null != Q)
                return (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: y.h_,
                    children: Q,
                });
        }, [Q]),
        X = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: y.kL,
        ref: D,
        children: [
            (0, a.jsxs)(r.animated.div, {
                style: { maxHeight: V.to([0, 1], [104, (B ?? 0) + 12]) },
                className: y.z,
                children: [
                    (0, a.jsx)(A.A, {
                        showPlaceholder: !R,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: y.c6,
                            children: [
                                !H && W && (0, a.jsx)("div", { className: y.Nz }),
                                L
                                    ? (0, a.jsxs)("div", {
                                          className: y.Tr,
                                          children: [
                                              W &&
                                                  (0, a.jsx)(d.akl, {
                                                      importData: N,
                                                      className: y.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !X,
                                                  }),
                                              (0, a.jsx)(f.A, {
                                                  quest: t,
                                                  size: 76,
                                                  percentComplete: $,
                                                  percentCompleteText: i && !(0, g.Ic)(t) ? q : void 0,
                                                  children: (0, a.jsx)("div", {
                                                      className: y.yv,
                                                      children: (0, a.jsx)(v.A, {
                                                          quest: t,
                                                          questContent: n,
                                                          className: y.ve,
                                                          autoplay: i,
                                                          onLoadComplete: F,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: w,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(v.A, {
                                          quest: t,
                                          autoplay: i,
                                          questContent: n,
                                          className: y.eB,
                                          onLoadComplete: F,
                                          lazyLoad: !0,
                                          sourceQuestContent: w,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: U,
                        className: l()(y.FS, { [y.wq]: !G }),
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: y.G$,
                                children: T.intl.format(T.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: y.wx,
                                children: Y,
                            }),
                            J,
                        ],
                    }),
                    G &&
                        (0, a.jsx)(r.animated.div, {
                            style: { opacity: (0, b.a)(V.to([0, 1], [1, 0])) },
                            className: y.hS,
                        }),
                ],
            }),
            (0, a.jsx)(C.A, {
                quest: t,
                questContent: n,
                contentPosition: E,
                rowIndex: k,
                onReceiveErrorHints: O,
                sourceQuestContent: w,
            }),
        ],
    });
}
let I = s.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        d.Text,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: y.wx, children: n },
        `${t}_reward`,
    );
});
