n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var o = n(642128),
    s = n(481060),
    a = n(497505),
    i = n(467628),
    l = n(713124),
    c = n(644646),
    d = n(46140),
    u = n(388032),
    p = n(420444);
let m = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: m, partnerBranding: f, useReducedMotion: g } = e,
        x = (0, i.j)({ location: d.dr.QUESTS_BAR }),
        h = (0, l.S)({ location: d.dr.QUESTS_BAR });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', { className: p.rewardTileSpacer }),
            (0, r.jsx)(o.animated.div, {
                className: p.rewardTileContainer,
                style: {
                    transform: (0, o.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [-8, 0]
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, x ? 116 : 92]
                            }),
                            n.to({
                                range: [1, 0],
                                output: [1, 0.75]
                            })
                        ],
                        (e, t, n) => 'translate('.concat(e, 'px, ').concat(t, 'px) scale(').concat(n, ')')
                    )
                },
                children: (0, r.jsx)(c.Z, {
                    learnMoreStyle: 'text',
                    quest: t,
                    questContent: a.jn.QUEST_BAR_V2,
                    location: d.dr.QUESTS_BAR,
                    autoplay: m && !g
                })
            }),
            (0, r.jsxs)(o.animated.div, {
                className: p.rewardHighlightLogoCTA,
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
                        className: p.partnerBranding,
                        children: f
                    }),
                    (0, r.jsx)(o.animated.div, {
                        className: p.rewardHighlightCTA,
                        style: {
                            opacity: n.to({
                                range: [0, 1],
                                output: [0.7, 0]
                            })
                        },
                        children: (0, r.jsx)(s.Text, {
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: h ? u.NW.string(u.t['1Wvve3']) : u.NW.string(u.t['2BD0CQ'])
                        })
                    })
                ]
            })
        ]
    });
};
