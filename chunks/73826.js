n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var s = n(120356),
    o = n.n(s),
    a = n(205120),
    i = n(481060),
    l = n(49436),
    c = n(644646),
    u = n(617889),
    d = n(324805),
    p = n(388032),
    m = n(905952);
let f = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: s, partnerBranding: f, useReducedMotion: g } = e,
        x = (0, u.qe)().label,
        h = x ? -4 : 6;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: m.rewardTileContainer,
                style: {
                    transform: (0, a.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [0, 0],
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, 82],
                            }),
                            n.to({
                                range: [0, 1],
                                output: [1, 64 / 48],
                            }),
                        ],
                        (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"),
                    ),
                },
                children: (0, r.jsx)(c.Z, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: s ? 9 : void 0,
                    quest: t,
                    questContent: l.jn.QUEST_BAR_V2,
                    location: d.dr.QUESTS_BAR,
                    autoplay: s && !g,
                    sourceQuestContent: l.jn.QUEST_BAR_V2,
                    style: {
                        width: 48,
                        height: 48,
                        marginRight: 8,
                        borderRadius: 6,
                    },
                }),
            }),
            (0, r.jsxs)(a.animated.div, {
                className: o()(m.rewardHighlightLogoCTA, { [m.rewardHighlightLogoCTALabel]: x }),
                style: {
                    transform: (0, a.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [0, -48],
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, h],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, r.jsx)("div", {
                        className: o()({ [m.partnerBranding]: !x }),
                        children: f,
                    }),
                    (0, r.jsx)(a.animated.div, {
                        className: o()(m.rewardHighlightCTA, { [m.rewardHighlightCTALabel]: x }),
                        style: {
                            opacity: n.to({
                                range: [0, 1],
                                output: [x ? 1 : 0.7, 0],
                            }),
                        },
                        children: (0, r.jsx)(i.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: p.intl.string(p.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
