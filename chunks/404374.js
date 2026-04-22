"use strict";
n.d(t, { Ay: () => u, gi: () => o, k0: () => l });
var r = n(627968),
    i = n(64700),
    s = n(835245),
    a = n(827734);
let o = Object.freeze({
        PREMIUM_TIER_0: (0, s.A)(),
        PREMIUM_TIER_1: (0, s.A)(),
        PREMIUM_TIER_2: (0, s.A)(),
        PREMIUM_GUILD: (0, s.A)(),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, s.A)(),
    }),
    l = {
        PREMIUM_TIER_0: `url(#${o.PREMIUM_TIER_0})`,
        PREMIUM_TIER_1: `url(#${o.PREMIUM_TIER_1})`,
        PREMIUM_TIER_2: `url(#${o.PREMIUM_TIER_2})`,
        PREMIUM_GUILD: `url(#${o.PREMIUM_GUILD})`,
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: `url(#${o.PREMIUM_GUILD_BADGE_V2_BACKGROUND})`,
    },
    u = i.memo(
        function () {
            return (0, r.jsxs)("svg", {
                viewBox: "0 0 1 1",
                style: { position: "absolute", pointerEvents: "none", top: -1, left: -1, width: 1, height: 1 },
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("linearGradient", {
                        id: o.PREMIUM_TIER_0,
                        children: [
                            (0, r.jsx)("stop", {
                                offset: ".1762",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css,
                            }),
                            (0, r.jsx)("stop", {
                                offset: "0.5351",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css,
                            }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                        id: o.PREMIUM_TIER_1,
                        children: [
                            (0, r.jsx)("stop", { stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                        id: o.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)("stop", {
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css,
                            }),
                            (0, r.jsx)("stop", {
                                offset: "0.502368",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                            }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                        id: o.PREMIUM_GUILD,
                        children: [
                            (0, r.jsx)("stop", { stopColor: a.A.unsafe_rawColors.GUILD_BOOSTING_BLUE.css }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: a.A.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                        id: o.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                        gradientTransform: "rotate(45)",
                        children: [
                            (0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css,
                            }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: a.A.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                            }),
                        ],
                    }),
                ],
            });
        },
        () => !0,
    );
