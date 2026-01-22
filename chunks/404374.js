n.d(t, {
    Ay: () => _,
    gi: () => o,
    k0: () => l,
});
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(827734);
let o = Object.freeze({
        PREMIUM_TIER_0: (0, a.A)(),
        PREMIUM_TIER_1: (0, a.A)(),
        PREMIUM_TIER_2: (0, a.A)(),
        PREMIUM_GUILD: (0, a.A)(),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, a.A)(),
    }),
    l = {
        PREMIUM_TIER_0: "url(#".concat(o.PREMIUM_TIER_0, ")"),
        PREMIUM_TIER_1: "url(#".concat(o.PREMIUM_TIER_1, ")"),
        PREMIUM_TIER_2: "url(#".concat(o.PREMIUM_TIER_2, ")"),
        PREMIUM_GUILD: "url(#".concat(o.PREMIUM_GUILD, ")"),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(o.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")"),
    },
    c = () =>
        (0, r.jsxs)("linearGradient", {
            id: o.PREMIUM_TIER_0,
            children: [
                (0, r.jsx)("stop", {
                    offset: ".1762",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css,
                }),
                (0, r.jsx)("stop", {
                    offset: "0.5351",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css,
                }),
                (0, r.jsx)("stop", {
                    offset: "1",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css,
                }),
            ],
        }),
    u = () =>
        (0, r.jsxs)("linearGradient", {
            id: o.PREMIUM_TIER_1,
            children: [
                (0, r.jsx)("stop", {
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css,
                }),
                (0, r.jsx)("stop", {
                    offset: "1",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
                }),
            ],
        }),
    d = () =>
        (0, r.jsxs)("linearGradient", {
            id: o.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)("stop", {
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css,
                }),
                (0, r.jsx)("stop", {
                    offset: "0.502368",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                }),
                (0, r.jsx)("stop", {
                    offset: "1",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css,
                }),
            ],
        }),
    f = () =>
        (0, r.jsxs)("linearGradient", {
            id: o.PREMIUM_GUILD,
            children: [
                (0, r.jsx)("stop", {
                    stopColor: s.A.unsafe_rawColors.GUILD_BOOSTING_BLUE.css,
                }),
                (0, r.jsx)("stop", {
                    offset: "1",
                    stopColor: s.A.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css,
                }),
            ],
        }),
    p = () =>
        (0, r.jsxs)("linearGradient", {
            id: o.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            gradientTransform: "rotate(45)",
            children: [
                (0, r.jsx)("stop", {
                    offset: "0",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css,
                }),
                (0, r.jsx)("stop", {
                    offset: "1",
                    stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                }),
            ],
        }),
    _ = i.memo(
        function () {
            return (0, r.jsxs)("svg", {
                viewBox: "0 0 1 1",
                style: {
                    position: "absolute",
                    pointerEvents: "none",
                    top: -1,
                    left: -1,
                    width: 1,
                    height: 1,
                },
                "aria-hidden": !0,
                children: [c(), u(), d(), f(), p()],
            });
        },
        () => !0,
    );
