n.d(t, { Z: () => O }), n(953529);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(236726),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    m = n(960919),
    p = n(373370),
    h = n(968843),
    f = n(862657),
    x = n(115179),
    b = n(836831),
    g = n(644646),
    v = n(251360),
    j = n(19148),
    y = n(69439),
    C = n(324805),
    _ = n(642145),
    S = n(388032),
    E = n(710294);
let T = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function O(e) {
    var t, n, l, O, w;
    let {
            quest: P,
            questContent: I,
            isHovering: k,
            contentPosition: R,
            rowIndex: A,
            isVisibleInViewport: Z,
            onReceiveErrorHints: D,
            sourceQuestContent: L,
        } = e,
        M = r.useRef(null),
        U = (0, x.w8)(P.config),
        B = (0, x.B3)(P.config),
        F = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: G, scrollHeight: V } = (0, d.kE)(),
        H = 104 !== V,
        { onAssetLoadComplete: z } = r.useContext(v.k),
        { expansionSpring: W } = (0, c.q_F)({
            expansionSpring: +!!k,
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
                })({}, _.Y)),
                (w = w = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(w))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(w)).forEach(function (e) {
                          Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(w, e));
                      }),
                O),
        }),
        K = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        q = (null == (l = P.userStatus) ? void 0 : l.claimedAt) != null,
        Y = (0, x.xN)(P.config),
        Q = (0, x.LM)(P.config),
        { completedRatio: X, completedRatioDisplay: J } = (0, h.I)(P),
        $ = (0, p.Bd)(P, L, M),
        ee = r.useMemo(
            () =>
                q && Y
                    ? S.intl.format(S.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  N,
                                  {
                                      questId: P.id,
                                      children: [
                                          (0, a.jsx)(m.Z, {
                                              shouldUseThemeColor: !0,
                                              className: E.orbsBalanceIcon,
                                              customSize: 14,
                                          }),
                                          Q,
                                      ],
                                  },
                                  P.id,
                              ),
                      })
                    : q
                      ? (0, a.jsx)(N, {
                            questId: P.id,
                            children: U,
                        })
                      : Y
                        ? S.intl.format(S.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      N,
                                      {
                                          questId: P.id,
                                          children: [
                                              (0, a.jsx)(m.Z, {
                                                  shouldUseThemeColor: !0,
                                                  className: E.orbsBalanceIcon,
                                                  customSize: 14,
                                              }),
                                              Q,
                                          ],
                                      },
                                      P.id,
                                  ),
                          })
                        : S.intl.format(S.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, a.jsx)(
                                      N,
                                      {
                                          questId: P.id,
                                          children: B,
                                      },
                                      P.id,
                                  ),
                          }),
            [U, q, B, P.id, Q, Y],
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
                    maxHeight: W.to([0, 1], [104, (null != V ? V : 0) + 12]),
                },
                className: E.rewardDescriptionContainer,
                children: [
                    (0, a.jsx)(j.E, {
                        showPlaceholder: !Z,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: E.assetWrapper,
                            children: [
                                !q && K && (0, a.jsx)("div", { className: E.completionAnimation }),
                                F
                                    ? (0, a.jsxs)("div", {
                                          className: E.progressWrapper,
                                          children: [
                                              K &&
                                                  (0, a.jsx)(c.Fmz, {
                                                      importData: T,
                                                      className: E.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !en,
                                                  }),
                                              (0, a.jsx)(b.Z, {
                                                  quest: P,
                                                  size: 76,
                                                  percentComplete: X,
                                                  percentCompleteText: k && !(0, f.zi)(P) ? J : void 0,
                                                  children: (0, a.jsx)("div", {
                                                      className: E.circularRewardTileWrapper,
                                                      children: (0, a.jsx)(g.Z, {
                                                          quest: P,
                                                          questContent: I,
                                                          className: E.circularQuestRewardTileAsset,
                                                          location: C.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: k,
                                                          onLoadComplete: z,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: L,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(g.Z, {
                                          quest: P,
                                          autoplay: k,
                                          questContent: I,
                                          className: E.questRewardTileAsset,
                                          location: C.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: z,
                                          lazyLoad: !0,
                                          sourceQuestContent: L,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: G,
                        className: i()(E.textContainer, { [E.justifyCenter]: !H }),
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: E.questName,
                                children: S.intl.format(S.t.EAYZAr, { questName: P.config.messages.questName }),
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: E.header,
                                children: ee,
                            }),
                            et,
                        ],
                    }),
                    H &&
                        (0, a.jsx)(s.animated.div, {
                            style: {
                                opacity: W.to([0, 1], [1, 0]),
                            },
                            className: E.textOverflowBlur,
                        }),
                ],
            }),
            (0, a.jsx)(y.Z, {
                quest: P,
                questContent: I,
                contentPosition: R,
                rowIndex: A,
                onReceiveErrorHints: D,
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
            color: "text-strong",
            tag: "span",
            className: E.header,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
