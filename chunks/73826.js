n.d(t, { Z: () => g });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(81239),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(49436),
    m = n(644646),
    p = n(444134),
    h = n(526188),
    f = n(617889),
    x = n(388032),
    b = n(964907);
let g = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        i = (0, f.qe)().label,
        g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        { quest: v } = r.useContext(h.A),
        { expansionSpring: j } = r.useContext(p.xo),
        y = i ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: b.rewardTileContainer,
                style: {
                    transform: (0, s.to)(
                        [
                            j.to({
                                range: [0, 1],
                                output: [0, 0],
                            }),
                            j.to({
                                range: [0, 1],
                                output: [0, 82],
                            }),
                            j.to({
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
                    quest: v,
                    questContent: u.jn.QUEST_BAR_V2,
                    autoplay: t && !g,
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
                className: l()(b.rewardHighlightLogoCTA, { [b.rewardHighlightLogoCTALabel]: i }),
                style: {
                    transform: (0, s.to)(
                        [
                            j.to({
                                range: [0, 1],
                                output: [0, -48],
                            }),
                            j.to({
                                range: [0, 1],
                                output: [0, y],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, a.jsx)("div", {
                        className: l()({ [b.partnerBranding]: !i }),
                        children: n,
                    }),
                    (0, a.jsx)(s.animated.div, {
                        className: l()(b.rewardHighlightCTA, { [b.rewardHighlightCTALabel]: i }),
                        style: {
                            opacity: j.to({
                                range: [0, 1],
                                output: [i ? 1 : 0.7, 0],
                            }),
                        },
                        children: (0, a.jsx)(c.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: x.intl.string(x.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
