n.d(t, { Ay: () => o, gi: () => _, k0: () => l });
var i = n(627968),
    r = n(64700),
    a = n(132500),
    s = n(661531);
let _ = Object.freeze({
        PREMIUM_TIER_0: (0, a.A)(),
        PREMIUM_TIER_1: (0, a.A)(),
        PREMIUM_TIER_2: (0, a.A)(),
        PREMIUM_GUILD: (0, a.A)(),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, a.A)(),
    }),
    l = {
        PREMIUM_TIER_0: `url(#${_.PREMIUM_TIER_0})`,
        PREMIUM_TIER_1: `url(#${_.PREMIUM_TIER_1})`,
        PREMIUM_TIER_2: `url(#${_.PREMIUM_TIER_2})`,
        PREMIUM_GUILD: `url(#${_.PREMIUM_GUILD})`,
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: `url(#${_.PREMIUM_GUILD_BADGE_V2_BACKGROUND})`,
    },
    o = r.memo(
        function () {
            return (0, i.jsxs)("svg", {
                viewBox: "0 0 1 1",
                style: { position: "absolute", pointerEvents: "none", top: -1, left: -1, width: 1, height: 1 },
                "aria-hidden": !0,
                children: [
                    (0, i.jsxs)("linearGradient", {
                        id: _.PREMIUM_TIER_0,
                        children: [
                            (0, i.jsx)("stop", {
                                offset: ".1762",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css,
                            }),
                            (0, i.jsx)("stop", {
                                offset: "0.5351",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css,
                            }),
                            (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                        id: _.PREMIUM_TIER_1,
                        children: [
                            (0, i.jsx)("stop", { stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css }),
                            (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                        id: _.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("stop", {
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css,
                            }),
                            (0, i.jsx)("stop", {
                                offset: "0.502368",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                            }),
                            (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                        id: _.PREMIUM_GUILD,
                        children: [
                            (0, i.jsx)("stop", { stopColor: s.A.unsafe_rawColors.GUILD_BOOSTING_BLUE.css }),
                            (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: s.A.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                        id: _.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                        gradientTransform: "rotate(45)",
                        children: [
                            (0, i.jsx)("stop", {
                                offset: "0",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css,
                            }),
                            (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                        ],
                    }),
                ],
            });
        },
        () => !0,
    );
