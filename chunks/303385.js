n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(938288),
    s = n(481060),
    l = n(497505),
    c = n(685138),
    u = n(644646),
    d = n(46140),
    f = n(388032),
    _ = n(96656);
let p = 64,
    h = 8,
    m = (0, o.animated)(s.$i$),
    g = (e) => {
        let { quest: t, expansionSpring: n, isFullyExpanded: i, partnerBranding: g, useReducedMotion: E } = e,
            { status: b } = (0, c.n)({
                location: d.dr.QUESTS_BAR,
                questConfig: t.config,
            }),
            y = null == b ? void 0 : b.progressBlur,
            O = (null == b ? void 0 : b.label1) || (null == b ? void 0 : b.label2),
            v = null == b ? void 0 : b.shineWipe,
            I = y ? 70 : 48,
            T = y ? 12 : 8,
            S = y ? -74 : -48,
            A = y ? 2 : O ? -4 : 6,
            C = 12;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.animated.div, {
                    className: _.rewardTileContainer,
                    style: {
                        transform: (0, o.to)(
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
                                    output: [1, p / I],
                                }),
                            ],
                            (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"),
                        ),
                    },
                    children: (0, r.jsx)(u.Z, {
                        learnMoreStyle: "text",
                        learnMoreFontSize: i ? (I / p) * C : void 0,
                        quest: t,
                        questContent: l.jn.QUEST_BAR_V2,
                        location: d.dr.QUESTS_BAR,
                        autoplay: i && !E,
                        sourceQuestContent: l.jn.QUEST_BAR_V2,
                        showShine: !v,
                        style: {
                            width: I,
                            height: I,
                            marginRight: T,
                            borderRadius: (I / p) * h,
                        },
                    }),
                }),
                (0, r.jsxs)(o.animated.div, {
                    className: a()(_.rewardHighlightLogoCTA, {
                        [_.rewardHighlightLogoCTAHeightBoost]: y,
                        [_.rewardHighlightLogoCTALabel]: O,
                    }),
                    style: {
                        height: y ? I : void 0,
                        transform: (0, o.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [0, S],
                                }),
                                n.to({
                                    range: [0, 1],
                                    output: [0, A],
                                }),
                            ],
                            (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                    },
                    children: [
                        (0, r.jsx)("div", {
                            className: a()({ [_.partnerBranding]: !y && !O }),
                            children: g,
                        }),
                        y &&
                            (0, r.jsx)(m, {
                                style: {
                                    opacity: n.to({
                                        range: [0, 1],
                                        output: [0.52, 0],
                                    }),
                                },
                            }),
                        (0, r.jsx)(o.animated.div, {
                            className: a()(_.rewardHighlightCTA, { [_.rewardHighlightCTALabel]: O }),
                            style: {
                                opacity: n.to({
                                    range: [0, 1],
                                    output: [O ? 1 : 0.7, 0],
                                }),
                            },
                            children: (0, r.jsx)(s.Text, {
                                color: "always-white",
                                lineClamp: 1,
                                variant: O ? "text-sm/medium" : "text-xs/medium",
                                children: f.intl.string(
                                    (null == b ? void 0 : b.label2) ? f.t["3mgEQU"] : f.t["1Wvve3"],
                                ),
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
