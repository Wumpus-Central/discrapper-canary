n.d(t, { Z: () => p });
var s = n(200651);
n(192379);
var r = n(642128),
    a = n(481060),
    o = n(497505),
    i = n(467628),
    l = n(644646),
    c = n(46140),
    d = n(388032),
    u = n(734723);
let p = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: p, partnerBranding: m, useReducedMotion: x } = e,
        h = (0, i.j)({ location: c.dr.QUESTS_BAR });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', { className: u.rewardTileSpacer }),
            (0, s.jsx)(r.animated.div, {
                className: u.rewardTileContainer,
                style: {
                    transform: (0, r.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [-8, 0]
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, h ? 116 : 92]
                            }),
                            n.to({
                                range: [1, 0],
                                output: [1, 0.75]
                            })
                        ],
                        (e, t, n) => 'translate('.concat(e, 'px, ').concat(t, 'px) scale(').concat(n, ')')
                    )
                },
                children: (0, s.jsx)(l.Z, {
                    learnMoreStyle: 'text',
                    quest: t,
                    questContent: o.jn.QUEST_BAR_V2,
                    location: c.dr.QUESTS_BAR,
                    autoplay: p && !x
                })
            }),
            (0, s.jsxs)(r.animated.div, {
                className: u.rewardHighlightLogoCTA,
                style: {
                    transform: (0, r.to)(
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
                    (0, s.jsx)('div', {
                        className: u.partnerBranding,
                        children: m
                    }),
                    (0, s.jsx)(r.animated.div, {
                        className: u.rewardHighlightCTA,
                        style: {
                            opacity: n.to({
                                range: [0, 1],
                                output: [0.7, 0]
                            })
                        },
                        children: (0, s.jsx)(a.Text, {
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: d.intl.string(d.t['2BD0CQ'])
                        })
                    })
                ]
            })
        ]
    });
};
