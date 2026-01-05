n.d(t, { Z: () => T }), n(953529);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(554916),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    m = n(960919),
    p = n(373370),
    f = n(968843),
    h = n(862657),
    x = n(115179),
    b = n(836831),
    g = n(644646),
    v = n(251360),
    j = n(19148),
    C = n(69439),
    y = n(642145),
    _ = n(388032),
    S = n(710294);
let E = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function T(e) {
    var t, n, i, T, N;
    let {
            quest: P,
            questContent: w,
            isHovering: I,
            contentPosition: k,
            rowIndex: R,
            isVisibleInViewport: A,
            onReceiveErrorHints: D,
            sourceQuestContent: Z,
        } = e,
        L = r.useRef(null),
        M = (0, x.w8)(P.config),
        U = (0, x.B3)(P.config),
        B = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: F, scrollHeight: G } = (0, d.kE)(),
        V = 104 !== G,
        { onAssetLoadComplete: z } = r.useContext(v.k),
        { expansionSpring: W } = (0, c.q_F)({
            expansionSpring: +!!I,
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
                })({}, y.Y)),
                (N = N = { clamp: !0 }),
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
        H = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        q = (null == (i = P.userStatus) ? void 0 : i.claimedAt) != null,
        K = (0, x.xN)(P.config),
        Y = (0, x.LM)(P.config),
        { completedRatio: Q, completedRatioDisplay: X } = (0, f.I)(P),
        J = (0, p.Bd)(P, Z, L),
        $ = r.useMemo(
            () =>
                q && K
                    ? _.intl.format(_.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  O,
                                  {
                                      questId: P.id,
                                      children: [
                                          (0, a.jsx)(m.Z, {
                                              shouldUseThemeColor: !0,
                                              className: S.orbsBalanceIcon,
                                              customSize: 14,
                                          }),
                                          Y,
                                      ],
                                  },
                                  P.id,
                              ),
                      })
                    : q
                      ? (0, a.jsx)(O, {
                            questId: P.id,
                            children: M,
                        })
                      : K
                        ? _.intl.format(_.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      O,
                                      {
                                          questId: P.id,
                                          children: [
                                              (0, a.jsx)(m.Z, {
                                                  shouldUseThemeColor: !0,
                                                  className: S.orbsBalanceIcon,
                                                  customSize: 14,
                                              }),
                                              Y,
                                          ],
                                      },
                                      P.id,
                                  ),
                          })
                        : _.intl.format(_.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, a.jsx)(
                                      O,
                                      {
                                          questId: P.id,
                                          children: U,
                                      },
                                      P.id,
                                  ),
                          }),
            [M, q, U, P.id, Y, K],
        ),
        ee = r.useMemo(() => {
            if (null != J)
                return (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: S.description,
                    children: J,
                });
        }, [J]),
        et = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: S.container,
        ref: L,
        children: [
            (0, a.jsxs)(s.animated.div, {
                style: {
                    maxHeight: W.to([0, 1], [104, (null != G ? G : 0) + 12]),
                },
                className: S.rewardDescriptionContainer,
                children: [
                    (0, a.jsx)(j.E, {
                        showPlaceholder: !A,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: S.assetWrapper,
                            children: [
                                !q && H && (0, a.jsx)("div", { className: S.completionAnimation }),
                                B
                                    ? (0, a.jsxs)("div", {
                                          className: S.progressWrapper,
                                          children: [
                                              H &&
                                                  (0, a.jsx)(c.Fmz, {
                                                      importData: E,
                                                      className: S.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !et,
                                                  }),
                                              (0, a.jsx)(b.Z, {
                                                  quest: P,
                                                  size: 76,
                                                  percentComplete: Q,
                                                  percentCompleteText: I && !(0, h.zi)(P) ? X : void 0,
                                                  children: (0, a.jsx)("div", {
                                                      className: S.circularRewardTileWrapper,
                                                      children: (0, a.jsx)(g.Z, {
                                                          quest: P,
                                                          questContent: w,
                                                          className: S.circularQuestRewardTileAsset,
                                                          autoplay: I,
                                                          onLoadComplete: z,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: Z,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(g.Z, {
                                          quest: P,
                                          autoplay: I,
                                          questContent: w,
                                          className: S.questRewardTileAsset,
                                          onLoadComplete: z,
                                          lazyLoad: !0,
                                          sourceQuestContent: Z,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: F,
                        className: l()(S.textContainer, { [S.justifyCenter]: !V }),
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: S.questName,
                                children: _.intl.format(_.t.EAYZAr, { questName: P.config.messages.questName }),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: S.header,
                                children: $,
                            }),
                            ee,
                        ],
                    }),
                    V &&
                        (0, a.jsx)(s.animated.div, {
                            style: {
                                opacity: W.to([0, 1], [1, 0]),
                            },
                            className: S.textOverflowBlur,
                        }),
                ],
            }),
            (0, a.jsx)(C.Z, {
                quest: P,
                questContent: w,
                contentPosition: k,
                rowIndex: R,
                onReceiveErrorHints: D,
                sourceQuestContent: Z,
            }),
        ],
    });
}
let O = r.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "text-strong",
            tag: "span",
            className: S.header,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
