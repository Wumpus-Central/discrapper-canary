n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(71347),
    a = n(755721),
    o = n(481060),
    s = n(565138),
    l = n(678558),
    c = n(981631),
    u = n(831740);
let d = function (e) {
    let { closeLayer: t, guild: n, isVisible: d } = e,
        f = (0, o.q_F)({
            transform: d ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!d,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsx)(i.animated.div, {
        className: u.wrapper,
        style: f,
        children: (0, r.jsxs)('div', {
            className: u.innerWrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: u.guildInfo,
                    children: [
                        (0, r.jsx)(s.Z, {
                            className: u.guildIcon,
                            guild: n,
                            size: s.Z.Sizes.LARGER
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: u.guildName,
                            variant: 'text-lg/bold',
                            children: n.name
                        })
                    ]
                }),
                (0, r.jsx)(l.Z, {
                    className: u.ctaButton,
                    guild: n,
                    analyticsLocation: {
                        page: c.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: c.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: c.qAy.BUTTON_CTA,
                        objectType: c.Qqv.BUY
                    },
                    closeLayer: t,
                    pauseAnimation: !d,
                    size: a.zx.Sizes.LARGE
                })
            ]
        })
    });
};
