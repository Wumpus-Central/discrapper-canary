n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var s = n(120356),
    o = n.n(s),
    a = n(137317),
    i = n(481060),
    l = n(497505),
    c = n(685138),
    d = n(644646),
    u = n(46140),
    p = n(388032),
    m = n(96656);
let g = (0, a.animated)(i.izJ),
    f = (e) => {
        let { quest: t, expansionSpring: n, isFullyExpanded: s, partnerBranding: f, useReducedMotion: h } = e,
            { status: x } = (0, c.n)({
                location: u.dr.QUESTS_BAR,
                questConfig: t.config,
            }),
            _ = null == x ? void 0 : x.progressBlur,
            b = (null == x ? void 0 : x.label1) || (null == x ? void 0 : x.label2),
            j = null == x ? void 0 : x.shineWipe,
            v = _ ? 70 : 48,
            C = _ ? 12 : 8,
            y = _ ? -74 : -48,
            O = _ ? 0 : b ? -4 : 6;
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
                                    output: [1, 64 / v],
                                }),
                            ],
                            (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"),
                        ),
                    },
                    children: (0, r.jsx)(d.Z, {
                        learnMoreStyle: "text",
                        learnMoreFontSize: s ? (v / 64) * 12 : void 0,
                        quest: t,
                        questContent: l.jn.QUEST_BAR_V2,
                        location: u.dr.QUESTS_BAR,
                        autoplay: s && !h,
                        sourceQuestContent: l.jn.QUEST_BAR_V2,
                        showShine: !j,
                        style: {
                            width: v,
                            height: v,
                            marginRight: C,
                            borderRadius: (v / 64) * 8,
                        },
                    }),
                }),
                (0, r.jsxs)(a.animated.div, {
                    className: o()(m.rewardHighlightLogoCTA, {
                        [m.rewardHighlightLogoCTAHeightBoost]: _,
                        [m.rewardHighlightLogoCTALabel]: b,
                    }),
                    style: {
                        height: _ ? v : void 0,
                        transform: (0, a.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [0, y],
                                }),
                                n.to({
                                    range: [0, 1],
                                    output: [0, O],
                                }),
                            ],
                            (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                    },
                    children: [
                        (0, r.jsx)("div", {
                            className: o()({ [m.partnerBranding]: !_ && !b }),
                            children: f,
                        }),
                        _ &&
                            (0, r.jsx)(g, {
                                className: m.rewardHighlightLogoCTADivider,
                                style: {
                                    opacity: n.to({
                                        range: [0, 1],
                                        output: [0.1, 0],
                                    }),
                                },
                            }),
                        (0, r.jsx)(a.animated.div, {
                            className: o()(m.rewardHighlightCTA, { [m.rewardHighlightCTALabel]: b }),
                            style: {
                                opacity: n.to({
                                    range: [0, 1],
                                    output: [b ? 1 : 0.7, 0],
                                }),
                            },
                            children: (0, r.jsx)(i.Text, {
                                color: "always-white",
                                lineClamp: 1,
                                variant: "text-xs/medium",
                                children: p.intl.string(
                                    (null == x ? void 0 : x.label2) ? p.t["3mgEQU"] : p.t["1Wvve3"],
                                ),
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
