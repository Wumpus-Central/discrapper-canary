n.d(t, {
    JX: () => l,
    Rj: () => o,
    ZP: () => p
});
var i = n(200651),
    r = n(192379),
    a = n(772848),
    s = n(692547);
let o = Object.freeze({
        PREMIUM_TIER_0: (0, a.Z)(),
        PREMIUM_TIER_1: (0, a.Z)(),
        PREMIUM_TIER_2: (0, a.Z)(),
        PREMIUM_GUILD: (0, a.Z)(),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, a.Z)()
    }),
    l = {
        PREMIUM_TIER_0: 'url(#'.concat(o.PREMIUM_TIER_0, ')'),
        PREMIUM_TIER_1: 'url(#'.concat(o.PREMIUM_TIER_1, ')'),
        PREMIUM_TIER_2: 'url(#'.concat(o.PREMIUM_TIER_2, ')'),
        PREMIUM_GUILD: 'url(#'.concat(o.PREMIUM_GUILD, ')'),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: 'url(#'.concat(o.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ')')
    },
    u = () =>
        (0, i.jsxs)('linearGradient', {
            id: o.PREMIUM_TIER_0,
            children: [
                (0, i.jsx)('stop', {
                    offset: '.1762',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                }),
                (0, i.jsx)('stop', {
                    offset: '0.5351',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                })
            ]
        }),
    c = () =>
        (0, i.jsxs)('linearGradient', {
            id: o.PREMIUM_TIER_1,
            children: [
                (0, i.jsx)('stop', { stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                })
            ]
        }),
    d = () =>
        (0, i.jsxs)('linearGradient', {
            id: o.PREMIUM_TIER_2,
            children: [
                (0, i.jsx)('stop', { stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css }),
                (0, i.jsx)('stop', {
                    offset: '0.502368',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                })
            ]
        }),
    f = () =>
        (0, i.jsxs)('linearGradient', {
            id: o.PREMIUM_GUILD,
            children: [
                (0, i.jsx)('stop', { stopColor: s.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: s.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                })
            ]
        }),
    _ = () =>
        (0, i.jsxs)('linearGradient', {
            id: o.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            gradientTransform: 'rotate(45)',
            children: [
                (0, i.jsx)('stop', {
                    offset: '0',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: s.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                })
            ]
        }),
    p = r.memo(
        function () {
            return (0, i.jsxs)('svg', {
                viewBox: '0 0 1 1',
                style: {
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: -1,
                    left: -1,
                    width: 1,
                    height: 1
                },
                'aria-hidden': !0,
                children: [u(), c(), d(), f(), _()]
            });
        },
        () => !0
    );
