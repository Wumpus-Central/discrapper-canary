n.d(t, { Z: () => T }), n(953529);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(467721),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    m = n(960919),
    p = n(373370),
    h = n(968843),
    x = n(862657),
    f = n(115179),
    g = n(836831),
    b = n(644646),
    v = n(251360),
    j = n(19148),
    _ = n(69439),
    y = n(324805),
    C = n(642145),
    S = n(388032),
    E = n(289157);
let O = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function T(e) {
    var t, n, i, T, P;
    let {
            quest: w,
            questContent: I,
            isHovering: k,
            contentPosition: R,
            rowIndex: A,
            isVisibleInViewport: D,
            onReceiveErrorHints: Z,
            sourceQuestContent: L,
        } = e,
        M = r.useRef(null),
        U = (0, f.w8)(w.config),
        B = (0, f.B3)(w.config),
        F = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: G, scrollHeight: V } = (0, d.kE)(),
        H = 104 !== V,
        { onAssetLoadComplete: W } = r.useContext(v.k),
        { expansionSpring: z } = (0, c.q_F)({
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
                })({}, C.Y)),
                (P = P = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(P))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(P)).forEach(function (e) {
                          Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(P, e));
                      }),
                T),
        }),
        q = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        K = (null == (i = w.userStatus) ? void 0 : i.claimedAt) != null,
        Q = (0, f.xN)(w.config),
        Y = (0, f.LM)(w.config),
        { completedRatio: X, completedRatioDisplay: J } = (0, h.I)(w),
        $ = (0, p.Bd)(w, L, M),
        ee = r.useMemo(
            () =>
                K && Q
                    ? S.intl.format(S.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  N,
                                  {
                                      questId: w.id,
                                      children: [
                                          (0, a.jsx)(m.Z, {
                                              shouldUseThemeColor: !0,
                                              className: E.orbsBalanceIcon,
                                              customSize: 14,
                                          }),
                                          Y,
                                      ],
                                  },
                                  w.id,
                              ),
                      })
                    : K
                      ? (0, a.jsx)(N, {
                            questId: w.id,
                            children: U,
                        })
                      : Q
                        ? S.intl.format(S.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      N,
                                      {
                                          questId: w.id,
                                          children: [
                                              (0, a.jsx)(m.Z, {
                                                  shouldUseThemeColor: !0,
                                                  className: E.orbsBalanceIcon,
                                                  customSize: 14,
                                              }),
                                              Y,
                                          ],
                                      },
                                      w.id,
                                  ),
                          })
                        : S.intl.format(S.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, a.jsx)(
                                      N,
                                      {
                                          questId: w.id,
                                          children: B,
                                      },
                                      w.id,
                                  ),
                          }),
            [U, K, B, w.id, Y, Q],
        ),
        et = r.useMemo(() => {
            if (null != $)
                return (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: E.description,
                    children: $,
                });
        }, [$]),
        en = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: E.container,
        ref: M,
        children: [
            (0, a.jsxs)(s.animated.div, {
                style: {
                    maxHeight: z.to([0, 1], [104, (null != V ? V : 0) + 12]),
                },
                className: E.rewardDescriptionContainer,
                children: [
                    (0, a.jsx)(j.E, {
                        showPlaceholder: !D,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: E.assetWrapper,
                            children: [
                                !K && q && (0, a.jsx)("div", { className: E.completionAnimation }),
                                F
                                    ? (0, a.jsxs)("div", {
                                          className: E.progressWrapper,
                                          children: [
                                              q &&
                                                  (0, a.jsx)(c.Fmz, {
                                                      importData: O,
                                                      className: E.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !en,
                                                  }),
                                              (0, a.jsx)(g.Z, {
                                                  quest: w,
                                                  size: 76,
                                                  percentComplete: X,
                                                  percentCompleteText: k && !(0, x.zi)(w) ? J : void 0,
                                                  children: (0, a.jsx)("div", {
                                                      className: E.circularRewardTileWrapper,
                                                      children: (0, a.jsx)(b.Z, {
                                                          quest: w,
                                                          questContent: I,
                                                          className: E.circularQuestRewardTileAsset,
                                                          location: y.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: k,
                                                          onLoadComplete: W,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: L,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(b.Z, {
                                          quest: w,
                                          autoplay: k,
                                          questContent: I,
                                          className: E.questRewardTileAsset,
                                          location: y.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: W,
                                          lazyLoad: !0,
                                          sourceQuestContent: L,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: G,
                        className: l()(E.textContainer, { [E.justifyCenter]: !H }),
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: E.questName,
                                children: S.intl.format(S.t.EAYZAr, { questName: w.config.messages.questName }),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: E.header,
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
                            className: E.textOverflowBlur,
                        }),
                ],
            }),
            (0, a.jsx)(_.Z, {
                quest: w,
                questContent: I,
                contentPosition: R,
                rowIndex: A,
                onReceiveErrorHints: Z,
                sourceQuestContent: L,
            }),
        ],
    });
}
let N = r.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "header-primary",
            tag: "span",
            className: E.header,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
