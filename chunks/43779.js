n.d(t, { Z: () => S }), n(953529);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(666917),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(960919),
    m = n(313481),
    g = n(509212),
    f = n(373370),
    h = n(472144),
    x = n(644646),
    _ = n(251360),
    b = n(19148),
    j = n(69439),
    v = n(324805),
    C = n(642145),
    y = n(388032),
    E = n(289157);
let O = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, o, S, w;
    let {
            quest: P,
            questContent: N,
            isHovering: R,
            contentPosition: A,
            rowIndex: B,
            isVisibleInViewport: k,
            onReceiveErrorHints: I,
            sourceQuestContent: D,
        } = e,
        q = s.useRef(null),
        L = (0, g.w8)(P.config),
        Q = (0, g.B3)(P.config),
        V = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: M, scrollHeight: Z } = (0, d.kE)(),
        W = 104 !== Z,
        { onAssetLoadComplete: H } = s.useContext(_.k),
        { expansionSpring: U } = (0, c.q_F)({
            expansionSpring: +!!R,
            config:
                ((S = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, C.Y)),
                (w = w = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(w))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(w)).forEach(function (e) {
                          Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(w, e));
                      }),
                S),
        }),
        F = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        z = (null == (o = P.userStatus) ? void 0 : o.claimedAt) != null,
        G = (0, g.xN)(P.config),
        K = (0, g.LM)(P.config),
        { completedRatio: Y, completedRatioDisplay: X } = (0, m.I)(P),
        J = (0, f.Bd)(P, D, q),
        $ = s.useMemo(
            () =>
                z && G
                    ? y.intl.format(y.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, r.jsxs)(
                                  T,
                                  {
                                      questId: P.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: E.orbsBalanceIcon,
                                              customSize: 14,
                                          }),
                                          K,
                                      ],
                                  },
                                  P.id,
                              ),
                      })
                    : z
                      ? (0, r.jsx)(T, {
                            questId: P.id,
                            children: L,
                        })
                      : G
                        ? y.intl.format(y.t.ro1sze, {
                              balanceHook: () =>
                                  (0, r.jsxs)(
                                      T,
                                      {
                                          questId: P.id,
                                          children: [
                                              (0, r.jsx)(p.Z, {
                                                  shouldUseThemeColor: !0,
                                                  className: E.orbsBalanceIcon,
                                                  customSize: 14,
                                              }),
                                              K,
                                          ],
                                      },
                                      P.id,
                                  ),
                          })
                        : y.intl.format(y.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(
                                      T,
                                      {
                                          questId: P.id,
                                          children: Q,
                                      },
                                      P.id,
                                  ),
                          }),
            [L, z, Q, P.id, K, G],
        ),
        ee = s.useMemo(() => {
            if (null != J)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: E.description,
                    children: J,
                });
        }, [J]),
        et = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: E.container,
        ref: q,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: U.to([0, 1], [104, (null != Z ? Z : 0) + 12]),
                },
                className: E.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(b.E, {
                        showPlaceholder: !k,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)("div", {
                            className: E.assetWrapper,
                            children: [
                                !z && F && (0, r.jsx)("div", { className: E.completionAnimation }),
                                V && !z
                                    ? (0, r.jsxs)("div", {
                                          className: E.progressWrapper,
                                          children: [
                                              F &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: O,
                                                      className: E.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !et,
                                                  }),
                                              (0, r.jsx)(h.Z, {
                                                  quest: P,
                                                  size: 76,
                                                  percentComplete: Y,
                                                  percentCompleteText: R && !(0, g.zi)(P) ? X : void 0,
                                                  children: (0, r.jsx)("div", {
                                                      className: E.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(x.Z, {
                                                          quest: P,
                                                          questContent: N,
                                                          className: E.circularQuestRewardTileAsset,
                                                          location: v.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: R,
                                                          onLoadComplete: H,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: D,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(x.Z, {
                                          quest: P,
                                          autoplay: R,
                                          questContent: N,
                                          className: E.questRewardTileAsset,
                                          location: v.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: H,
                                          lazyLoad: !0,
                                          sourceQuestContent: D,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        ref: M,
                        className: a()(E.textContainer, { [E.justifyCenter]: !W }),
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: E.questName,
                                children: y.intl.format(y.t.EAYZAr, { questName: P.config.messages.questName }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: E.header,
                                children: $,
                            }),
                            ee,
                        ],
                    }),
                    W &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: U.to([0, 1], [1, 0]),
                            },
                            className: E.textOverflowBlur,
                        }),
                ],
            }),
            (0, r.jsx)(j.Z, {
                quest: P,
                questContent: N,
                contentPosition: A,
                rowIndex: B,
                onReceiveErrorHints: I,
                sourceQuestContent: D,
            }),
        ],
    });
}
let T = s.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
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
