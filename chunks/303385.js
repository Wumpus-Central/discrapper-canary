var o = n(200651);
n(192379);
var r = n(666912),
    s = n(481060),
    a = n(497505),
    i = n(644646),
    l = n(46140),
    c = n(388032),
    d = n(734723);
t.Z = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: u, partnerBranding: p, useReducedMotion: m } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('div', { className: d.rewardTileSpacer }),
            (0, o.jsx)(r.animated.div, {
                className: d.rewardTileContainer,
                style: {
                    transform: (0, r.to)(
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
                children: (0, o.jsx)(i.Z, {
                    learnMoreStyle: 'text',
                    quest: t,
                    questContent: a.jn.QUEST_BAR_V2,
                    location: l.dr.QUESTS_BAR,
                    autoplay: u && !m
                })
            }),
            (0, o.jsxs)(r.animated.div, {
                className: d.rewardHighlightLogoCTA,
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
                    (0, o.jsx)('div', {
                        className: d.partnerBranding,
                        children: p
                    }),
                    (0, o.jsx)(r.animated.div, {
                        className: d.rewardHighlightCTA,
                        style: {
                            opacity: n.to({
                                range: [0, 1],
                                output: [0.7, 0]
                            })
                        },
                        children: (0, o.jsx)(s.Text, {
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: c.intl.string(c.t['2BD0CQ'])
                        })
                    })
                ]
            })
        ]
    });
};
