n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var s = n(120356),
    o = n.n(s),
    a = n(205120),
    i = n(481060),
    l = n(49436),
    c = n(685138),
    d = n(644646),
    u = n(324805),
    p = n(388032),
    m = n(905952);
let g = (e) => {
    let { quest: t, expansionSpring: n, isFullyExpanded: s, partnerBranding: g, useReducedMotion: f } = e,
        { status: h } = (0, c.n)({
            location: u.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        x = null == h ? void 0 : h.progressBlur,
        _ = (null == h ? void 0 : h.label1) || (null == h ? void 0 : h.label2),
        b = null == h ? void 0 : h.shineWipe,
        j = x ? 70 : 48,
        v = x ? 12 : 8,
        C = x ? -74 : -48,
        y = x ? 0 : _ ? -4 : 6;
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
                                output: [1, 64 / j],
                            }),
                        ],
                        (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"),
                    ),
                },
                children: (0, r.jsx)(d.Z, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: s ? (j / 64) * 12 : void 0,
                    quest: t,
                    questContent: l.jn.QUEST_BAR_V2,
                    location: u.dr.QUESTS_BAR,
                    autoplay: s && !f,
                    sourceQuestContent: l.jn.QUEST_BAR_V2,
                    showShine: !b,
                    style: {
                        width: j,
                        height: j,
                        marginRight: v,
                        borderRadius: (j / 64) * 8,
                    },
                }),
            }),
            (0, r.jsxs)(a.animated.div, {
                className: o()(m.rewardHighlightLogoCTA, {
                    [m.rewardHighlightLogoCTAHeightBoost]: x,
                    [m.rewardHighlightLogoCTALabel]: _,
                }),
                style: {
                    height: x ? j : void 0,
                    transform: (0, a.to)(
                        [
                            n.to({
                                range: [0, 1],
                                output: [0, C],
                            }),
                            n.to({
                                range: [0, 1],
                                output: [0, y],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, r.jsx)("div", {
                        className: o()({ [m.partnerBranding]: !x && !_ }),
                        children: g,
                    }),
                    x &&
                        (0, r.jsx)(a.animated.div, {
                            className: m.rewardHighlightLogoCTADivider,
                            style: {
                                opacity: n.to({
                                    range: [0, 1],
                                    output: [0.1, 0],
                                }),
                            },
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: o()(m.rewardHighlightCTA, { [m.rewardHighlightCTALabel]: _ }),
                        style: {
                            opacity: n.to({
                                range: [0, 1],
                                output: [_ ? 1 : 0.7, 0],
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
