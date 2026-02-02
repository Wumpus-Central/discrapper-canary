n.d(t, {
    A: () => E,
}),
    n(228524);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(353709),
    o = n(311907),
    c = n(397927),
    d = n(765671),
    u = n(775602),
    m = n(409626),
    p = n(106799),
    h = n(714510),
    x = n(890687),
    g = n(710969),
    f = n(92246),
    b = n(453384),
    v = n(646764),
    j = n(398025),
    _ = n(516226),
    y = n(720875),
    A = n(713457),
    C = n(419367),
    S = n(985018),
    O = n(196240);
let T = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function E(e) {
    var t, n, r, E, w;
    let {
            quest: I,
            questContent: k,
            isHovering: P,
            contentPosition: R,
            rowIndex: D,
            isVisibleInViewport: M,
            onReceiveErrorHints: L,
            sourceQuestContent: U,
        } = e,
        B = l.useRef(null),
        G = (0, f.mq)(I.config),
        F = (0, f.mH)(I.config),
        V = (null == (t = I.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: W, scrollHeight: H } = (0, d.wR)(),
        K = 104 !== H,
        { onAssetLoadComplete: z } = l.useContext(_.M),
        { expansionSpring: q } = (0, c.zhh)({
            expansionSpring: +!!P,
            config:
                ((E = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({}, C.N)),
                (w = w =
                    {
                        clamp: !0,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(w))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(w)).forEach(function (e) {
                          Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(w, e));
                      }),
                E),
        }),
        Q = (null == (n = I.userStatus) ? void 0 : n.completedAt) != null,
        Y = (null == (r = I.userStatus) ? void 0 : r.claimedAt) != null,
        J = (0, f.ks)(I.config),
        X = (0, f._Z)(I.config),
        { completedRatio: $, completedRatioDisplay: Z } = (0, x.O9)(I),
        ee = (0, h.gj)(I, U, m.Ob.QuestHome, B),
        et = l.useMemo(
            () =>
                Y && J
                    ? S.intl.format(S.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  N,
                                  {
                                      questId: I.id,
                                      children: [
                                          (0, a.jsx)(p.A, {
                                              shouldUseThemeColor: !0,
                                              className: O.Kq,
                                              customSize: 14,
                                          }),
                                          X,
                                      ],
                                  },
                                  I.id,
                              ),
                      })
                    : Y
                      ? (0, a.jsx)(N, {
                            questId: I.id,
                            children: G,
                        })
                      : J
                        ? S.intl.format(S.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      N,
                                      {
                                          questId: I.id,
                                          children: [
                                              (0, a.jsx)(p.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: O.Kq,
                                                  customSize: 14,
                                              }),
                                              X,
                                          ],
                                      },
                                      I.id,
                                  ),
                          })
                        : S.intl.format(S.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, a.jsx)(
                                      N,
                                      {
                                          questId: I.id,
                                          children: F,
                                      },
                                      I.id,
                                  ),
                          }),
            [G, Y, F, I.id, X, J],
        ),
        en = l.useMemo(() => {
            if (null != ee)
                return (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: O.h_,
                    children: ee,
                });
        }, [ee]),
        ea = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: O.kL,
        ref: B,
        children: [
            (0, a.jsxs)(s.animated.div, {
                style: {
                    maxHeight: q.to([0, 1], [104, (null != H ? H : 0) + 12]),
                },
                className: O.z,
                children: [
                    (0, a.jsx)(y.A, {
                        showPlaceholder: !M,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: O.c6,
                            children: [
                                !Y &&
                                    Q &&
                                    (0, a.jsx)("div", {
                                        className: O.Nz,
                                    }),
                                V
                                    ? (0, a.jsxs)("div", {
                                          className: O.Tr,
                                          children: [
                                              Q &&
                                                  (0, a.jsx)(c.akl, {
                                                      importData: T,
                                                      className: O.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ea,
                                                  }),
                                              (0, a.jsx)(b.A, {
                                                  quest: I,
                                                  size: 76,
                                                  percentComplete: $,
                                                  percentCompleteText: P && !(0, g.Ic)(I) ? Z : void 0,
                                                  children: (0, a.jsx)("div", {
                                                      className: O.yv,
                                                      children: (0, a.jsx)(v.A, {
                                                          quest: I,
                                                          questContent: k,
                                                          className: O.ve,
                                                          autoplay: P,
                                                          onLoadComplete: z,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: U,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(v.A, {
                                          quest: I,
                                          autoplay: P,
                                          questContent: k,
                                          className: O.eB,
                                          onLoadComplete: z,
                                          lazyLoad: !0,
                                          sourceQuestContent: U,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: W,
                        className: i()(O.FS, {
                            [O.wq]: !K,
                        }),
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: O.G$,
                                children: S.intl.format(S.t.EAYZAr, {
                                    questName: I.config.messages.questName,
                                }),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: O.wx,
                                children: et,
                            }),
                            en,
                        ],
                    }),
                    K &&
                        (0, a.jsx)(s.animated.div, {
                            style: {
                                opacity: (0, j.a)(q.to([0, 1], [1, 0])),
                            },
                            className: O.hS,
                        }),
                ],
            }),
            (0, a.jsx)(A.A, {
                quest: I,
                questContent: k,
                contentPosition: R,
                rowIndex: D,
                onReceiveErrorHints: L,
                sourceQuestContent: U,
            }),
        ],
    });
}
let N = l.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "text-strong",
            tag: "span",
            className: O.wx,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
