n.d(t, { Z: () => E }), n(953529);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(683305),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(960919),
    m = n(113434),
    f = n(918701),
    g = n(467628),
    x = n(566078),
    h = n(472144),
    b = n(644646),
    j = n(251360),
    v = n(19148),
    _ = n(65443),
    y = n(69439),
    C = n(46140),
    O = n(642145),
    w = n(388032),
    S = n(882067);
let P = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function E(e) {
    var t, n, s, E, N;
    let { quest: A, questContent: R, isHovering: B, contentPosition: k, rowIndex: q, isVisibleInViewport: I, onReceiveErrorHints: D } = e,
        M = (0, g.j)({ location: C.dr.QUESTS_BAR_MOBILE }),
        L = o.useMemo(() => x.r.build(A.config), [A.config]),
        Z = L.defaultReward.messages.name,
        W = L.defaultReward.messages.nameWithArticle,
        V = M ? Z : W,
        Q = (null == (t = A.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: U, scrollHeight: H } = (0, d.kE)(),
        z = 104 !== H,
        { onAssetLoadComplete: F } = o.useContext(j.k),
        { expansionSpring: X } = (0, c.q_F)({
            expansionSpring: +!!B,
            config:
                ((E = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, O.Y)),
                (N = N = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(N))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(N)).forEach(function (e) {
                          Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(N, e));
                      }),
                E)
        }),
        K = (null == (n = A.userStatus) ? void 0 : n.completedAt) != null,
        Y = (null == (s = A.userStatus) ? void 0 : s.claimedAt) != null,
        G = (0, f.xN)(A.config),
        J = (0, f.LM)(A.config),
        { completedRatio: $, completedRatioDisplay: ee } = (0, m.I)(A),
        et = (0, m.Bd)(A),
        en = o.useMemo(
            () =>
                Y && G
                    ? w.intl.format(w.t['8Op4c3'], {
                          balanceHook: () =>
                              (0, r.jsxs)(T, {
                                  questId: A.id,
                                  children: [
                                      (0, r.jsx)(p.Z, {
                                          shouldUseThemeColor: !0,
                                          className: S.orbsBalanceIcon
                                      }),
                                      J
                                  ]
                              })
                      })
                    : Y
                      ? (0, r.jsx)(T, {
                            questId: A.id,
                            children: Z
                        })
                      : G
                        ? w.intl.format(w.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(T, {
                                      questId: A.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: S.orbsBalanceIcon
                                          }),
                                          J
                                      ]
                                  })
                          })
                        : w.intl.format(w.t['0IUT4e'], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(T, {
                                      questId: A.id,
                                      children: V
                                  })
                          }),
            [Z, Y, V, A.id, J, G]
        ),
        er = o.useMemo(() => {
            if (null != et)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: S.description,
                    children: et
                });
        }, [et]),
        eo = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: S.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: X.to([0, 1], [104, (null != H ? H : 0) + 12])
                },
                className: S.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(v.E, {
                        showPlaceholder: !I,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)('div', {
                            className: S.assetWrapper,
                            children: [
                                !Y && K && (0, r.jsx)('div', { className: S.completionAnimation }),
                                Q && !Y
                                    ? (0, r.jsxs)('div', {
                                          className: S.progressWrapper,
                                          children: [
                                              K &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: P,
                                                      className: S.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !eo
                                                  }),
                                              (0, r.jsx)(h.Z, {
                                                  quest: A,
                                                  size: 76,
                                                  percentComplete: $,
                                                  percentCompleteText: B && !(0, f.zi)(A) ? ee : void 0,
                                                  children: (0, r.jsx)('div', {
                                                      className: S.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(b.Z, {
                                                          quest: A,
                                                          questContent: R,
                                                          className: S.circularQuestRewardTileAsset,
                                                          location: C.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: B,
                                                          onLoadComplete: F
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(b.Z, {
                                          quest: A,
                                          autoplay: B,
                                          questContent: R,
                                          className: S.questRewardTileAsset,
                                          location: C.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: F
                                      })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        ref: U,
                        className: a()(S.textContainer, { [S.justifyCenter]: !z }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: S.questName,
                                children: w.intl.format(w.t.EAYZAg, { questName: A.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: a()(S.header, { [S.headerWithoutMargin]: M }),
                                children: en
                            }),
                            M &&
                                (0, r.jsx)(_.Z, {
                                    quest: A,
                                    textColor: 'text-muted'
                                }),
                            er
                        ]
                    }),
                    z &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: X.to([0, 1], [1, 0])
                            },
                            className: S.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(y.Z, {
                quest: A,
                location: R,
                contentPosition: k,
                rowIndex: q,
                onReceiveErrorHints: D
            })
        ]
    });
}
let T = o.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: 'text-md/semibold',
            color: 'text-normal',
            tag: 'span',
            className: S.header,
            children: n
        },
        ''.concat(t, '_reward')
    );
});
