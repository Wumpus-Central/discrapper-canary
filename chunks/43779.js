n.d(t, { Z: () => O }), n(953529);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(790519),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(960919),
    m = n(509212),
    g = n(113434),
    f = n(472144),
    h = n(644646),
    x = n(251360),
    b = n(19148),
    _ = n(69439),
    j = n(46140),
    v = n(642145),
    C = n(388032),
    y = n(289157);
let E = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function O(e) {
    var t, n, o, O, T;
    let {
            quest: w,
            questContent: P,
            isHovering: N,
            contentPosition: A,
            rowIndex: R,
            isVisibleInViewport: B,
            onReceiveErrorHints: k,
            sourceQuestContent: I,
        } = e,
        D = s.useRef(null),
        q = (0, m.w8)(w.config),
        L = (0, m.B3)(w.config),
        Q = (null == (t = w.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: V, scrollHeight: M } = (0, d.kE)(),
        Z = 104 !== M,
        { onAssetLoadComplete: W } = s.useContext(x.k),
        { expansionSpring: U } = (0, c.q_F)({
            expansionSpring: +!!N,
            config:
                ((O = (function (e) {
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
                })({}, v.Y)),
                (T = T = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(T))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(T)).forEach(function (e) {
                          Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(T, e));
                      }),
                O),
        }),
        H = (null == (n = w.userStatus) ? void 0 : n.completedAt) != null,
        F = (null == (o = w.userStatus) ? void 0 : o.claimedAt) != null,
        z = (0, m.xN)(w.config),
        G = (0, m.LM)(w.config),
        { completedRatio: K, completedRatioDisplay: X } = (0, g.I)(w),
        Y = (0, g.Bd)(w, I, D),
        J = s.useMemo(
            () =>
                F && z
                    ? C.intl.format(C.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, r.jsxs)(
                                  S,
                                  {
                                      questId: w.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: y.orbsBalanceIcon,
                                              customSize: 14,
                                          }),
                                          G,
                                      ],
                                  },
                                  w.id,
                              ),
                      })
                    : F
                      ? (0, r.jsx)(S, {
                            questId: w.id,
                            children: q,
                        })
                      : z
                        ? C.intl.format(C.t.ro1sze, {
                              balanceHook: () =>
                                  (0, r.jsxs)(
                                      S,
                                      {
                                          questId: w.id,
                                          children: [
                                              (0, r.jsx)(p.Z, {
                                                  shouldUseThemeColor: !0,
                                                  className: y.orbsBalanceIcon,
                                                  customSize: 14,
                                              }),
                                              G,
                                          ],
                                      },
                                      w.id,
                                  ),
                          })
                        : C.intl.format(C.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(
                                      S,
                                      {
                                          questId: w.id,
                                          children: L,
                                      },
                                      w.id,
                                  ),
                          }),
            [q, F, L, w.id, G, z],
        ),
        $ = s.useMemo(() => {
            if (null != Y)
                return (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: y.description,
                    children: Y,
                });
        }, [Y]),
        ee = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: y.container,
        ref: D,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: U.to([0, 1], [104, (null != M ? M : 0) + 12]),
                },
                className: y.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(b.E, {
                        showPlaceholder: !B,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)("div", {
                            className: y.assetWrapper,
                            children: [
                                !F && H && (0, r.jsx)("div", { className: y.completionAnimation }),
                                Q && !F
                                    ? (0, r.jsxs)("div", {
                                          className: y.progressWrapper,
                                          children: [
                                              H &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: E,
                                                      className: y.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ee,
                                                  }),
                                              (0, r.jsx)(f.Z, {
                                                  quest: w,
                                                  size: 76,
                                                  percentComplete: K,
                                                  percentCompleteText: N && !(0, m.zi)(w) ? X : void 0,
                                                  children: (0, r.jsx)("div", {
                                                      className: y.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(h.Z, {
                                                          quest: w,
                                                          questContent: P,
                                                          className: y.circularQuestRewardTileAsset,
                                                          location: j.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: N,
                                                          onLoadComplete: W,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: I,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(h.Z, {
                                          quest: w,
                                          autoplay: N,
                                          questContent: P,
                                          className: y.questRewardTileAsset,
                                          location: j.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: W,
                                          lazyLoad: !0,
                                          sourceQuestContent: I,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        ref: V,
                        className: a()(y.textContainer, { [y.justifyCenter]: !Z }),
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: y.questName,
                                children: C.intl.format(C.t.EAYZAr, { questName: w.config.messages.questName }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: y.header,
                                children: J,
                            }),
                            $,
                        ],
                    }),
                    Z &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: U.to([0, 1], [1, 0]),
                            },
                            className: y.textOverflowBlur,
                        }),
                ],
            }),
            (0, r.jsx)(_.Z, {
                quest: w,
                questContent: P,
                contentPosition: A,
                rowIndex: R,
                onReceiveErrorHints: k,
                sourceQuestContent: I,
            }),
        ],
    });
}
let S = s.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: "text-md/semibold",
            color: "header-primary",
            tag: "span",
            className: y.header,
            children: n,
        },
        "".concat(t, "_reward"),
    );
});
