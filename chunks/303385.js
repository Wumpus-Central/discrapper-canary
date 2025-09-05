n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(261616),
    a = n(481060),
    o = n(497505),
    s = n(644646),
    l = n(46140),
    c = n(388032),
    u = n(895758);
let d = 48,
    f = (e) => {
        let { quest: t, expansionSpring: n, isFullyExpanded: f, partnerBranding: _, useReducedMotion: p } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", { className: u.rewardTileSpacer }),
                (0, r.jsx)(i.animated.div, {
                    className: u.rewardTileContainer,
                    style: {
                        transform: (0, i.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [-8, 0],
                                }),
                                n.to({
                                    range: [0, 1],
                                    output: [0, 92],
                                }),
                                n.to({
                                    range: [1, 0],
                                    output: [1, d / 64],
                                }),
                            ],
                            (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"),
                        ),
                    },
                    children: (0, r.jsx)(s.Z, {
                        learnMoreStyle: "text",
                        quest: t,
                        questContent: o.jn.QUEST_BAR_V2,
                        location: l.dr.QUESTS_BAR,
                        autoplay: f && !p,
                        sourceQuestContent: o.jn.QUEST_BAR_V2,
                    }),
                }),
                (0, r.jsxs)(i.animated.div, {
                    className: u.rewardHighlightLogoCTA,
                    style: {
                        transform: (0, i.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [0, -48],
                                }),
                                n.to({
                                    range: [0, 1],
                                    output: [0, 8],
                                }),
                            ],
                            (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                    },
                    children: [
                        (0, r.jsx)("div", {
                            className: u.partnerBranding,
                            children: _,
                        }),
                        (0, r.jsx)(i.animated.div, {
                            className: u.rewardHighlightCTA,
                            style: {
                                opacity: n.to({
                                    range: [0, 1],
                                    output: [0.7, 0],
                                }),
                            },
                            children: (0, r.jsx)(a.Text, {
                                color: "always-white",
                                variant: "text-xs/medium",
                                children: c.intl.string(c.t["1Wvve3"]),
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
