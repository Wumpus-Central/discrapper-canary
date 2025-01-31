n.d(t, { Z: () => E });
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(467628),
    x = n(566078),
    h = n(472144),
    g = n(644646),
    f = n(65443),
    v = n(69439),
    _ = n(46140),
    C = n(642145),
    j = n(388032),
    b = n(902904);
let T = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function E(e) {
    var t, n, a;
    let { quest: E, questContent: S, isHovering: N, contentPosition: y, rowIndex: w, onReceiveErrorHints: A } = e,
        B = (0, m.j)({ location: _.dr.QUESTS_BAR_MOBILE }),
        R = r.useMemo(() => x.r.build(E.config), [E.config]),
        P = R.defaultReward.messages.name,
        k = R.defaultReward.messages.nameWithArticle,
        q = B ? P : k,
        I = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: O, scrollHeight: M } = (0, d.Z)(),
        D = 104 !== M,
        { expansionSpring: L } = (0, c.q_F)({
            expansionSpring: N ? 1 : 0,
            config: {
                ...C.Y,
                clamp: !0
            }
        }),
        Z = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        W = (null === (a = E.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
        { completedRatio: V, completedRatioDisplay: Q } = (0, p.I)(E),
        U = (0, p.Bd)(E),
        H = r.useCallback(
            (e) =>
                (0, s.jsx)(
                    c.Text,
                    {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        tag: 'span',
                        className: b.header,
                        children: e
                    },
                    ''.concat(E.id, '_reward')
                ),
            [E.id]
        ),
        z = r.useMemo(() => (W ? H(P) : j.intl.format(j.t['0IUT4e'], { rewardWithArticleHook: () => H(q) })), [P, W, H, q]),
        F = r.useMemo(() => {
            if (null != U)
                return (0, s.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: o()(b.description),
                    children: U
                });
        }, [U]),
        X = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, s.jsxs)('div', {
        className: o()(b.container),
        children: [
            (0, s.jsxs)(i.animated.div, {
                style: {
                    maxHeight: L.to([0, 1], [104, (null != M ? M : 0) + 12])
                },
                className: o()(b.rewardDescriptionContainer),
                children: [
                    (0, s.jsxs)('div', {
                        className: b.assetWrapper,
                        children: [
                            !W && Z && (0, s.jsx)('div', { className: b.completionAnimation }),
                            I && !W
                                ? (0, s.jsxs)('div', {
                                      className: b.progressWrapper,
                                      children: [
                                          Z &&
                                              (0, s.jsx)(c.Fmz, {
                                                  importData: T,
                                                  className: b.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !X
                                              }),
                                          (0, s.jsx)(h.Z, {
                                              quest: E,
                                              size: 76,
                                              percentComplete: V,
                                              percentCompleteText: N ? Q : void 0,
                                              children: (0, s.jsx)('div', {
                                                  className: b.circularRewardTileWrapper,
                                                  children: (0, s.jsx)(g.Z, {
                                                      quest: E,
                                                      questContent: S,
                                                      className: b.circularQuestRewardTileAsset,
                                                      location: _.dr.QUEST_HOME_DESKTOP,
                                                      autoplay: N
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, s.jsx)(g.Z, {
                                      quest: E,
                                      autoplay: N,
                                      questContent: S,
                                      className: b.questRewardTileAsset,
                                      location: _.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        ref: O,
                        className: o()(b.textContainer, { [b.justifyCenter]: !D }),
                        children: [
                            (0, s.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: b.questName,
                                children: j.intl.format(j.t.EAYZAg, { questName: E.config.messages.questName })
                            }),
                            (0, s.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: o()(b.header, { [b.headerWithoutMargin]: B }),
                                children: z
                            }),
                            B &&
                                (0, s.jsx)(f.Z, {
                                    quest: E,
                                    textColor: 'text-muted'
                                }),
                            F
                        ]
                    }),
                    D &&
                        (0, s.jsx)(i.animated.div, {
                            style: {
                                opacity: L.to([0, 1], [1, 0])
                            },
                            className: b.textOverflowBlur
                        })
                ]
            }),
            (0, s.jsx)(v.Z, {
                quest: E,
                location: S,
                contentPosition: y,
                rowIndex: w,
                onReceiveErrorHints: A
            })
        ]
    });
}
