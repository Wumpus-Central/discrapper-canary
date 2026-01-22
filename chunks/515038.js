n.d(t, { A: () => O }), n(228524);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(432022),
    o = n(311907),
    c = n(397927),
    d = n(765671),
    u = n(775602),
    m = n(106799),
    p = n(714510),
    h = n(890687),
    f = n(710969),
    x = n(92246),
    b = n(453384),
    g = n(646764),
    v = n(516226),
    j = n(720875),
    y = n(713457),
    _ = n(419367),
    A = n(985018),
    C = n(196240);
let S = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function O(e) {
    var t, n, i, O, N;
    let {
            quest: T,
            questContent: I,
            isHovering: w,
            contentPosition: k,
            rowIndex: P,
            isVisibleInViewport: R,
            onReceiveErrorHints: D,
            sourceQuestContent: M,
        } = e,
        L = l.useRef(null),
        U = (0, x.mq)(T.config),
        B = (0, x.mH)(T.config),
        G = (null == (t = T.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: F, scrollHeight: V } = (0, d.wR)(),
        H = 104 !== V,
        { onAssetLoadComplete: W } = l.useContext(v.M),
        { expansionSpring: K } = (0, c.zhh)({
            expansionSpring: +!!w,
            config:
                ((O = (function (e) {
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
                })({}, _.N)),
                (N = N = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(N))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(N)).forEach(function (e) {
                          Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(N, e));
                      }),
                O),
        }),
        z = (null == (n = T.userStatus) ? void 0 : n.completedAt) != null,
        q = (null == (i = T.userStatus) ? void 0 : i.claimedAt) != null,
        Q = (0, x.ks)(T.config),
        Y = (0, x._Z)(T.config),
        { completedRatio: J, completedRatioDisplay: X } = (0, h.O9)(T),
        $ = (0, p.gj)(T, M, L),
        Z = l.useMemo(
            () =>
                q && Q
                    ? A.intl.format(A.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  E,
                                  {
                                      questId: T.id,
                                      children: [
                                          (0, a.jsx)(m.A, {
                                              shouldUseThemeColor: !0,
                                              className: C.Kq,
                                              customSize: 14,
                                          }),
                                          Y,
                                      ],
                                  },
                                  T.id,
                              ),
                      })
                    : q
                      ? (0, a.jsx)(E, {
                            questId: T.id,
                            children: U,
                        })
                      : Q
                        ? A.intl.format(A.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      E,
                                      {
                                          questId: T.id,
                                          children: [
                                              (0, a.jsx)(m.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: C.Kq,
                                                  customSize: 14,
                                              }),
                                              Y,
                                          ],
                                      },
                                      T.id,
                                  ),
                          })
                        : A.intl.format(A.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, a.jsx)(
                                      E,
                                      {
                                          questId: T.id,
                                          children: B,
                                      },
                                      T.id,
                                  ),
                          }),
            [U, q, B, T.id, Y, Q],
        ),
        ee = l.useMemo(() => {
            if (null != $)
                return (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: C.h_,
                    children: $,
                });
        }, [$]),
        et = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: C.kL,
        ref: L,
        children: [
            (0, a.jsxs)(s.animated.div, {
                style: {
                    maxHeight: K.to([0, 1], [104, (null != V ? V : 0) + 12]),
                },
                className: C.z,
                children: [
                    (0, a.jsx)(j.A, {
                        showPlaceholder: !R,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: C.c6,
                            children: [
                                !q && z && (0, a.jsx)("div", { className: C.Nz }),
                                G
                                    ? (0, a.jsxs)("div", {
                                          className: C.Tr,
                                          children: [
                                              z &&
                                                  (0, a.jsx)(c.akl, {
                                                      importData: S,
                                                      className: C.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !et,
                                                  }),
                                              (0, a.jsx)(b.A, {
                                                  quest: T,
                                                  size: 76,
                                                  percentComplete: J,
                                                  percentCompleteText: w && !(0, f.Ic)(T) ? X : void 0,
                                                  children: (0, a.jsx)("div", {
                                                      className: C.yv,
                                                      children: (0, a.jsx)(g.A, {
                                                          quest: T,
                                                          questContent: I,
                                                          className: C.ve,
                                                          autoplay: w,
                                                          onLoadComplete: W,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: M,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(g.A, {
                                          quest: T,
                                          autoplay: w,
                                          questContent: I,
                                          className: C.eB,
                                          onLoadComplete: W,
                                          lazyLoad: !0,
                                          sourceQuestContent: M,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: F,
                        className: r()(C.FS, { [C.wq]: !H }),
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: C.G$,
                                children: A.intl.format(A.t.EAYZAr, { questName: T.config.messages.questName }),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: C.wx,
                                children: Z,
                            }),
                            ee,
                        ],
                    }),
                    H &&
                        (0, a.jsx)(s.animated.div, {
                            style: {
                                opacity: K.to([0, 1], [1, 0]),
                            },
                            className: C.hS,
                        }),
                ],
            }),
            (0, a.jsx)(y.A, {
                quest: T,
                questContent: I,
                contentPosition: k,
                rowIndex: P,
                onReceiveErrorHints: D,
                sourceQuestContent: M,
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
            className: C.wx,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
