n.d(t, { Z: () => N });
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
    x = n(467628),
    h = n(566078),
    g = n(472144),
    f = n(644646),
    _ = n(65443),
    C = n(69439),
    v = n(46140),
    j = n(642145),
    b = n(388032),
    T = n(598403);
let E = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function N(e) {
    var t, n, s;
    let { quest: N, questContent: S, isHovering: y, contentPosition: A, rowIndex: B, onReceiveErrorHints: R } = e,
        w = (0, x.j)({ location: v.dr.QUESTS_BAR_MOBILE }),
        q = o.useMemo(() => h.r.build(N.config), [N.config]),
        k = q.defaultReward.messages.name,
        P = q.defaultReward.messages.nameWithArticle,
        I = w ? k : P,
        O = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: M, scrollHeight: W } = (0, d.Z)(),
        D = 104 !== W,
        { expansionSpring: L } = (0, c.q_F)({
            expansionSpring: y ? 1 : 0,
            config: {
                ...j.Y,
                clamp: !0
            }
        }),
        Q = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        Z = (null === (s = N.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        { completedRatio: U, completedRatioDisplay: V } = (0, p.I)(N),
        H = (0, p.Bd)(N),
        z = (0, m.xN)(N.config),
        F = (0, m.LM)(N.config),
        G = o.useCallback(
            (e) =>
                (0, r.jsx)(
                    c.Text,
                    {
                        variant: 'text-md/semibold',
                        color: 'text-normal',
                        tag: 'span',
                        className: T.header,
                        children: e
                    },
                    ''.concat(N.id, '_reward')
                ),
            [N.id]
        ),
        K = o.useMemo(() => (Z ? G(k) : b.intl.format(b.t['0IUT4e'], { rewardWithArticleHook: () => G(I) })), [k, Z, G, I]),
        Y = o.useMemo(() => {
            if (null != H)
                return (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: a()(T.description),
                    children: H
                });
        }, [H]),
        X = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: a()(T.container),
        children: [
            (0, r.jsxs)(i.animated.div, {
                style: {
                    maxHeight: L.to([0, 1], [104, (null != W ? W : 0) + 12])
                },
                className: a()(T.rewardDescriptionContainer),
                children: [
                    (0, r.jsxs)('div', {
                        className: T.assetWrapper,
                        children: [
                            !Z && Q && (0, r.jsx)('div', { className: T.completionAnimation }),
                            O && !Z
                                ? (0, r.jsxs)('div', {
                                      className: T.progressWrapper,
                                      children: [
                                          Q &&
                                              (0, r.jsx)(c.Fmz, {
                                                  importData: E,
                                                  className: T.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !X
                                              }),
                                          (0, r.jsx)(g.Z, {
                                              quest: N,
                                              size: 76,
                                              percentComplete: U,
                                              percentCompleteText: y ? V : void 0,
                                              children: (0, r.jsx)('div', {
                                                  className: T.circularRewardTileWrapper,
                                                  children: (0, r.jsx)(f.Z, {
                                                      quest: N,
                                                      questContent: S,
                                                      className: T.circularQuestRewardTileAsset,
                                                      location: v.dr.QUEST_HOME_DESKTOP,
                                                      autoplay: y
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)('div', {
                                      className: T.questRewardTileContainer,
                                      children: [
                                          z &&
                                              (0, r.jsxs)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-xs/bold',
                                                  className: T.questOrbQuantity,
                                                  children: ['+', F]
                                              }),
                                          (0, r.jsx)(f.Z, {
                                              quest: N,
                                              autoplay: y,
                                              questContent: S,
                                              className: T.questRewardTileAsset,
                                              location: v.dr.QUEST_HOME_DESKTOP
                                          })
                                      ]
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        ref: M,
                        className: a()(T.textContainer, { [T.justifyCenter]: !D }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: T.questName,
                                children: b.intl.format(b.t.EAYZAg, { questName: N.config.messages.questName })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: a()(T.header, { [T.headerWithoutMargin]: w }),
                                children: K
                            }),
                            w &&
                                (0, r.jsx)(_.Z, {
                                    quest: N,
                                    textColor: 'text-muted'
                                }),
                            Y
                        ]
                    }),
                    D &&
                        (0, r.jsx)(i.animated.div, {
                            style: {
                                opacity: L.to([0, 1], [1, 0])
                            },
                            className: T.textOverflowBlur
                        })
                ]
            }),
            (0, r.jsx)(C.Z, {
                quest: N,
                location: S,
                contentPosition: A,
                rowIndex: B,
                onReceiveErrorHints: R
            })
        ]
    });
}
