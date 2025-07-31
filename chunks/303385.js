n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var o = n(855659),
    s = n(481060),
    a = n(497505),
    i = n(644646),
    l = n(46140),
    c = n(388032),
    u = n(420444);
let d = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: d, partnerBranding: p, useReducedMotion: m } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', { className: u.rewardTileSpacer }),
            (0, r.jsx)(o.animated.div, {
                className: u.rewardTileContainer,
                style: {
                    transform: (0, o.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [-8, 0]
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, 92]
                            }),
                            n.to({
                                range: [1, 0],
                                output: [1, 0.75]
                            })
                        ],
                        (e, t, n) => 'translate('.concat(e, 'px, ').concat(t, 'px) scale(').concat(n, ')')
                    )
                },
                children: (0, r.jsx)(i.Z, {
                    learnMoreStyle: 'text',
                    quest: t,
                    questContent: a.jn.QUEST_BAR_V2,
                    location: l.dr.QUESTS_BAR,
                    autoplay: d && !m,
                    sourceQuestContent: a.jn.QUEST_BAR_V2
                })
            }),
            (0, r.jsxs)(o.animated.div, {
                className: u.rewardHighlightLogoCTA,
                style: {
                    transform: (0, o.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [0, -48]
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, 8]
                            })
                        ],
                        (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                    )
                },
                children: [
                    (0, r.jsx)('div', {
                        className: u.partnerBranding,
                        children: p
                    }),
                    (0, r.jsx)(o.animated.div, {
                        className: u.rewardHighlightCTA,
                        style: {
                            opacity: n.to({
                                range: [0, 1],
                                output: [0.7, 0]
                            })
                        },
                        children: (0, r.jsx)(s.Text, {
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: c.intl.string(c.t['1Wvve3'])
                        })
                    })
                ]
            })
        ]
    });
};
