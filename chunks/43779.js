(n.d(t, { Z: () => w }), n(953529));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(42133),
    l = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    p = n(960919),
    m = n(113434),
    f = n(918701),
    g = n(566078),
    x = n(472144),
    h = n(644646),
    b = n(251360),
    j = n(19148),
    _ = n(69439),
    v = n(46140),
    y = n(642145),
    C = n(388032),
    O = n(882067);
let E = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function w(e) {
    var t, n, s, w, T;
    let { quest: P, questContent: A, isHovering: N, contentPosition: R, rowIndex: B, isVisibleInViewport: k, onReceiveErrorHints: I, sourceQuestContent: q } = e,
        D = o.useMemo(() => g.r.build(P.config), [P.config]),
        Q = D.defaultRewardName,
        V = D.defaultRewardNameWithArticle,
        L = (null == (t = P.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: M, scrollHeight: W } = (0, u.kE)(),
        Z = 104 !== W,
        { onAssetLoadComplete: U } = o.useContext(b.k),
        { expansionSpring: H } = (0, c.q_F)({
            expansionSpring: +!!N,
            config:
                ((w = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, y.Y)),
                (T = T = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(T))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(T)).forEach(function (e) {
                          Object.defineProperty(w, e, Object.getOwnPropertyDescriptor(T, e));
                      }),
                w)
        }),
        z = (null == (n = P.userStatus) ? void 0 : n.completedAt) != null,
        F = (null == (s = P.userStatus) ? void 0 : s.claimedAt) != null,
        X = (0, f.xN)(P.config),
        K = (0, f.LM)(P.config),
        { completedRatio: Y, completedRatioDisplay: G } = (0, m.I)(P),
        J = (0, m.Bd)(P, q),
        $ = o.useMemo(
            () =>
                F && X
                    ? C.intl.format(C.t['8Op4c3'], {
                          balanceHook: () =>
                              (0, r.jsxs)(S, {
                                  questId: P.id,
                                  children: [
                                      (0, r.jsx)(p.Z, {
                                          shouldUseThemeColor: !0,
                                          className: O.orbsBalanceIcon
                                      }),
                                      K
                                  ]
                              })
                      })
                    : F
                      ? (0, r.jsx)(S, {
                            questId: P.id,
                            children: Q
                        })
                      : X
                        ? C.intl.format(C.t.ro1szc, {
                              balanceHook: () =>
                                  (0, r.jsxs)(S, {
                                      questId: P.id,
                                      children: [
                                          (0, r.jsx)(p.Z, {
                                              shouldUseThemeColor: !0,
                                              className: O.orbsBalanceIcon
                                          }),
                                          K
                                      ]
                                  })
                          })
                        : C.intl.format(C.t['0IUT4e'], {
                              rewardWithArticleHook: () =>
                                  (0, r.jsx)(S, {
                                      questId: P.id,
                                      children: V
                                  })
                          }),
            [Q, F, V, P.id, K, X]
        ),
        ee = o.useMemo(() => {
            if (null != J)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: O.description,
                    children: J
                });
        }, [J]),
        et = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: H.to([0, 1], [104, (null != W ? W : 0) + 12])
                },
                className: O.rewardDescriptionContainer,
                children: [
                    (0, r.jsx)(j.E, {
                        showPlaceholder: !k,
                        width: 80,
                        height: 80,
                        children: (0, r.jsxs)('div', {
                            className: O.assetWrapper,
                            children: [
                                !F && z && (0, r.jsx)('div', { className: O.completionAnimation }),
                                L && !F
                                    ? (0, r.jsxs)('div', {
                                          className: O.progressWrapper,
                                          children: [
                                              z &&
                                                  (0, r.jsx)(c.Fmz, {
                                                      importData: E,
                                                      className: O.confetti,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !et
                                                  }),
                                              (0, r.jsx)(x.Z, {
                                                  quest: P,
                                                  size: 76,
                                                  percentComplete: Y,
                                                  percentCompleteText: N && !(0, f.zi)(P) ? G : void 0,
                                                  children: (0, r.jsx)('div', {
                                                      className: O.circularRewardTileWrapper,
                                                      children: (0, r.jsx)(h.Z, {
                                                          quest: P,
                                                          questContent: A,
                                                          className: O.circularQuestRewardTileAsset,
                                                          location: v.dr.QUEST_HOME_DESKTOP,
                                                          autoplay: N,
                                                          onLoadComplete: U,
                                                          lazyLoad: !0,
                                                          sourceQuestContent: q
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(h.Z, {
                                          quest: P,
                                          autoplay: N,
                                          questContent: A,
                                          className: O.questRewardTileAsset,
                                          location: v.dr.QUEST_HOME_DESKTOP,
                                          onLoadComplete: U,
                                          lazyLoad: !0,
                                          sourceQuestContent: q
                                      })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        ref: M,
                        className: a()(O.textContainer, { [O.justifyCenter]: !Z }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: O.questName,
                                children: C.intl.format(C.t.EAYZAg, { questName: P.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: O.header,
                                children: $
                            }),
                            ee
                        ]
                    }),
                    Z &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: H.to([0, 1], [1, 0])
                            },
                            className: O.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(_.Z, {
                quest: P,
                questContent: A,
                contentPosition: R,
                rowIndex: B,
                onReceiveErrorHints: I,
                sourceQuestContent: q
            })
        ]
    });
}
let S = o.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, r.jsx)(
        c.Text,
        {
            variant: 'text-md/semibold',
            color: 'header-primary',
            tag: 'span',
            className: O.header,
            children: n
        },
        ''.concat(t, '_reward')
    );
});
