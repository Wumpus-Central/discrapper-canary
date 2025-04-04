n.d(t, { Z: () => S }), n(266796);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(918701),
    f = n(467628),
    g = n(566078),
    x = n(472144),
    h = n(160766),
    b = n(644646),
    j = n(65443),
    v = n(69439),
    y = n(46140),
    _ = n(642145),
    C = n(388032),
    O = n(882067);
let w = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, s, S, P;
    let { quest: E, questContent: N, isHovering: T, contentPosition: A, rowIndex: R, onReceiveErrorHints: B } = e,
        k = (0, f.j)({ location: y.dr.QUESTS_BAR_MOBILE }),
        q = o.useMemo(() => g.r.build(E.config), [E.config]),
        D = q.defaultReward.messages.name,
        I = q.defaultReward.messages.nameWithArticle,
        W = k ? D : I,
        M = (null == (t = E.userStatus) ? void 0 : t.enrolledAt) != null,
        { ref: L, scrollHeight: Z } = (0, d.Z)(),
        V = 104 !== Z,
        { expansionSpring: Q } = (0, c.q_F)({
            expansionSpring: +!!T,
            config:
                ((S = (function (e) {
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
                })({}, _.Y)),
                (P = P = { clamp: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(P))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(P)).forEach(function (e) {
                          Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(P, e));
                      }),
                S)
        }),
        U = (null == (n = E.userStatus) ? void 0 : n.completedAt) != null,
        H = (null == (s = E.userStatus) ? void 0 : s.claimedAt) != null,
        { completedRatio: F, completedRatioDisplay: z } = (0, p.I)(E),
        X = (0, p.Bd)(E),
        K = o.useCallback(
            (e) =>
                (0, r.jsx)(
                    c.Text,
                    {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        tag: 'span',
                        className: O.header,
                        children: e
                    },
                    ''.concat(E.id, '_reward')
                ),
            [E.id]
        ),
        Y = o.useMemo(() => (H ? K(D) : C.NW.format(C.t['0IUT4e'], { rewardWithArticleHook: () => K(W) })), [D, H, K, W]),
        G = o.useMemo(() => {
            if (null != X)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: O.description,
                    children: X
                });
        }, [X]),
        J = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: Q.to([0, 1], [104, (null != Z ? Z : 0) + 12])
                },
                className: O.rewardDescriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: O.assetWrapper,
                        children: [
                            !H && U && (0, r.jsx)('div', { className: O.completionAnimation }),
                            M && !H
                                ? (0, r.jsxs)('div', {
                                      className: O.progressWrapper,
                                      children: [
                                          U &&
                                              (0, r.jsx)(c.Fmz, {
                                                  importData: w,
                                                  className: O.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !J
                                              }),
                                          (0, r.jsx)(x.Z, {
                                              quest: E,
                                              size: 76,
                                              percentComplete: F,
                                              percentCompleteText: T && !(0, m.zi)(E) ? z : void 0,
                                              children: (0, r.jsx)('div', {
                                                  className: O.circularRewardTileWrapper,
                                                  children: (0, r.jsx)(b.Z, {
                                                      quest: E,
                                                      questContent: N,
                                                      className: O.circularQuestRewardTileAsset,
                                                      location: y.dr.QUEST_HOME_DESKTOP,
                                                      autoplay: T
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(h.Z, {
                                      quest: E,
                                      children: (0, r.jsx)(b.Z, {
                                          quest: E,
                                          autoplay: T,
                                          questContent: N,
                                          className: O.questRewardTileAsset,
                                          location: y.dr.QUEST_HOME_DESKTOP
                                      })
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        ref: L,
                        className: a()(O.textContainer, { [O.justifyCenter]: !V }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: O.questName,
                                children: C.NW.format(C.t.EAYZAg, { questName: E.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: a()(O.header, { [O.headerWithoutMargin]: k }),
                                children: Y
                            }),
                            k &&
                                (0, r.jsx)(j.Z, {
                                    quest: E,
                                    textColor: 'text-muted'
                                }),
                            G
                        ]
                    }),
                    V &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: Q.to([0, 1], [1, 0])
                            },
                            className: O.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(v.Z, {
                quest: E,
                location: N,
                contentPosition: A,
                rowIndex: R,
                onReceiveErrorHints: B
            })
        ]
    });
}
