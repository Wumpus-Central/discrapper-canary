n.d(t, { Z: () => v });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(620792),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(49436),
    m = n(644646),
    p = n(444134),
    h = n(526188),
    f = n(617889),
    x = n(324805),
    b = n(388032),
    g = n(964907);
let v = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        i = (0, f.qe)().label,
        v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        { quest: j } = r.useContext(h.A),
        { expansionSpring: y } = r.useContext(p.xo),
        C = i ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: g.rewardTileContainer,
                style: {
                    transform: (0, s.to)(
                        [
                            y.to({
                                range: [0, 1],
                                output: [0, 0],
                            }),
                            y.to({
                                range: [0, 1],
                                output: [0, 82],
                            }),
                            y.to({
                                range: [0, 1],
                                output: [1, 64 / 48],
                            }),
                        ],
                        (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"),
                    ),
                },
                children: (0, a.jsx)(m.Z, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: j,
                    questContent: u.jn.QUEST_BAR_V2,
                    location: x.dr.QUESTS_BAR,
                    autoplay: t && !v,
                    sourceQuestContent: u.jn.QUEST_BAR_V2,
                    style: {
                        width: 48,
                        height: 48,
                        marginRight: 8,
                        borderRadius: 6,
                    },
                }),
            }),
            (0, a.jsxs)(s.animated.div, {
                className: l()(g.rewardHighlightLogoCTA, { [g.rewardHighlightLogoCTALabel]: i }),
                style: {
                    transform: (0, s.to)(
                        [
                            y.to({
                                range: [0, 1],
                                output: [0, -48],
                            }),
                            y.to({
                                range: [0, 1],
                                output: [0, C],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, a.jsx)("div", {
                        className: l()({ [g.partnerBranding]: !i }),
                        children: n,
                    }),
                    (0, a.jsx)(s.animated.div, {
                        className: l()(g.rewardHighlightCTA, { [g.rewardHighlightCTALabel]: i }),
                        style: {
                            opacity: y.to({
                                range: [0, 1],
                                output: [i ? 1 : 0.7, 0],
                            }),
                        },
                        children: (0, a.jsx)(c.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: b.intl.string(b.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
