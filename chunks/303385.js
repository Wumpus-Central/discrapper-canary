n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var o = n(200100),
    s = n(481060),
    a = n(497505),
    i = n(467628),
    l = n(644646),
    c = n(46140),
    d = n(388032),
    u = n(420444);
let p = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: p, partnerBranding: m, useReducedMotion: f } = e,
        g = (0, i.j)({ location: c.dr.QUESTS_BAR });
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
                                output: [0, g ? 116 : 92]
                            }),
                            n.to({
                                range: [1, 0],
                                output: [1, 0.75]
                            })
                        ],
                        (e, t, n) => 'translate('.concat(e, 'px, ').concat(t, 'px) scale(').concat(n, ')')
                    )
                },
                children: (0, r.jsx)(l.Z, {
                    learnMoreStyle: 'text',
                    quest: t,
                    questContent: a.jn.QUEST_BAR_V2,
                    location: c.dr.QUESTS_BAR,
                    autoplay: p && !f
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
                        children: m
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
                            children: d.NW.string(d.t['1Wvve3'])
                        })
                    })
                ]
            })
        ]
    });
};
