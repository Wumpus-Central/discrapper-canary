n.d(t, { Z: () => h });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(467721),
    s = n(481060),
    o = n(49436),
    c = n(644646),
    d = n(617889),
    u = n(324805),
    m = n(388032),
    p = n(905952);
let h = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: r, partnerBranding: h, useReducedMotion: x } = e,
        f = (0, d.qe)().label,
        g = f ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.animated.div, {
                className: p.rewardTileContainer,
                style: {
                    transform: (0, l.to)(
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
                children: (0, a.jsx)(c.Z, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: r ? 9 : void 0,
                    quest: t,
                    questContent: o.jn.QUEST_BAR_V2,
                    location: u.dr.QUESTS_BAR,
                    autoplay: r && !x,
                    sourceQuestContent: o.jn.QUEST_BAR_V2,
                    style: {
                        width: 48,
                        height: 48,
                        marginRight: 8,
                        borderRadius: 6,
                    },
                }),
            }),
            (0, a.jsxs)(l.animated.div, {
                className: i()(p.rewardHighlightLogoCTA, { [p.rewardHighlightLogoCTALabel]: f }),
                style: {
                    transform: (0, l.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [0, -48],
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, g],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, a.jsx)("div", {
                        className: i()({ [p.partnerBranding]: !f }),
                        children: h,
                    }),
                    (0, a.jsx)(l.animated.div, {
                        className: i()(p.rewardHighlightCTA, { [p.rewardHighlightCTALabel]: f }),
                        style: {
                            opacity: n.to({
                                range: [0, 1],
                                output: [f ? 1 : 0.7, 0],
                            }),
                        },
                        children: (0, a.jsx)(s.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: m.intl.string(m.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
