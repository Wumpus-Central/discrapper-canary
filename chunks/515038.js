n.d(t, {
    A: () => T,
}),
    n(228524);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(108531),
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
    j = n(516226),
    _ = n(720875),
    y = n(713457),
    A = n(419367),
    C = n(985018),
    S = n(196240);
let O = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function T(e) {
    var t, n, r, T, N;
    let {
            quest: w,
            questContent: I,
            isHovering: k,
            contentPosition: P,
            rowIndex: R,
            isVisibleInViewport: D,
            onReceiveErrorHints: M,
            sourceQuestContent: L,
        } = e,
        U = l.useRef(null),
        B = (0, f.mq)(w.config),
        G = (0, f.mH)(w.config),
        F = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: V, scrollHeight: W } = (0, d.wR)(),
        H = 104 !== W,
        { onAssetLoadComplete: K } = l.useContext(j.M),
        { expansionSpring: z } = (0, c.zhh)({
            expansionSpring: +!!k,
            config:
                ((T = (function (e) {
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
                })({}, A.N)),
                (N = N =
                    {
                        clamp: !0,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(N))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(N)).forEach(function (e) {
                          Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(N, e));
                      }),
                T),
        }),
        q = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        Q = (null == (r = w.userStatus) ? void 0 : r.claimedAt) != null,
        Y = (0, f.ks)(w.config),
        J = (0, f._Z)(w.config),
        { completedRatio: X, completedRatioDisplay: $ } = (0, x.O9)(w),
        Z = (0, h.gj)(w, L, m.Ob.QuestHome, U),
        ee = l.useMemo(
            () =>
                Q && Y
                    ? C.intl.format(C.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  E,
                                  {
                                      questId: w.id,
                                      children: [
                                          (0, a.jsx)(p.A, {
                                              shouldUseThemeColor: !0,
                                              className: S.Kq,
                                              customSize: 14,
                                          }),
                                          J,
                                      ],
                                  },
                                  w.id,
                              ),
                      })
                    : Q
                      ? (0, a.jsx)(E, {
                            questId: w.id,
                            children: B,
                        })
                      : Y
                        ? C.intl.format(C.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      E,
                                      {
                                          questId: w.id,
                                          children: [
                                              (0, a.jsx)(p.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: S.Kq,
                                                  customSize: 14,
                                              }),
                                              J,
                                          ],
                                      },
                                      w.id,
                                  ),
                          })
                        : C.intl.format(C.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, a.jsx)(
                                      E,
                                      {
                                          questId: w.id,
                                          children: G,
                                      },
                                      w.id,
                                  ),
                          }),
            [B, Q, G, w.id, J, Y],
        ),
        et = l.useMemo(() => {
            if (null != Z)
                return (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: S.h_,
                    children: Z,
                });
        }, [Z]),
        en = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: S.kL,
        ref: U,
        children: [
            (0, a.jsxs)(s.animated.div, {
                style: {
                    maxHeight: z.to([0, 1], [104, (null != W ? W : 0) + 12]),
                },
                className: S.z,
                children: [
                    (0, a.jsx)(_.A, {
                        showPlaceholder: !D,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: S.c6,
                            children: [
                                !Q &&
                                    q &&
                                    (0, a.jsx)("div", {
                                        className: S.Nz,
                                    }),
                                F
                                    ? (0, a.jsxs)("div", {
                                          className: S.Tr,
                                          children: [
                                              q &&
                                                  (0, a.jsx)(c.akl, {
                                                      importData: O,
                                                      className: S.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !en,
                                                  }),
                                              (0, a.jsx)(b.A, {
                                                  quest: w,
                                                  size: 76,
                                                  percentComplete: X,
                                                  percentCompleteText: k && !(0, g.Ic)(w) ? $ : void 0,
                                                  children: (0, a.jsx)("div", {
                                                      className: S.yv,
                                                      children: (0, a.jsx)(v.A, {
                                                          quest: w,
                                                          questContent: I,
                                                          className: S.ve,
                                                          autoplay: k,
                                                          onLoadComplete: K,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: L,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(v.A, {
                                          quest: w,
                                          autoplay: k,
                                          questContent: I,
                                          className: S.eB,
                                          onLoadComplete: K,
                                          lazyLoad: !0,
                                          sourceQuestContent: L,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: V,
                        className: i()(S.FS, {
                            [S.wq]: !H,
                        }),
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: S.G$,
                                children: C.intl.format(C.t.EAYZAr, {
                                    questName: w.config.messages.questName,
                                }),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: S.wx,
                                children: ee,
                            }),
                            et,
                        ],
                    }),
                    H &&
                        (0, a.jsx)(s.animated.div, {
                            style: {
                                opacity: z.to([0, 1], [1, 0]),
                            },
                            className: S.hS,
                        }),
                ],
            }),
            (0, a.jsx)(y.A, {
                quest: w,
                questContent: I,
                contentPosition: P,
                rowIndex: R,
                onReceiveErrorHints: M,
                sourceQuestContent: L,
            }),
        ],
    });
}
let E = l.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "text-strong",
            tag: "span",
            className: S.wx,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
