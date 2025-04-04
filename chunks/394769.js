n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(642128),
    o = n(481060),
    a = n(565138),
    s = n(678558),
    l = n(981631),
    c = n(831740);
let u = function (e) {
    let { closeLayer: t, guild: n, isVisible: u } = e,
        d = (0, o.q_F)({
            transform: u ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!u,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsx)(i.animated.div, {
        className: c.wrapper,
        style: d,
        children: (0, r.jsxs)('div', {
            className: c.innerWrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: c.guildInfo,
                    children: [
                        (0, r.jsx)(a.Z, {
                            className: c.guildIcon,
                            guild: n,
                            size: a.Z.Sizes.LARGER
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: c.guildName,
                            variant: 'text-lg/bold',
                            children: n.name
                        })
                    ]
                }),
                (0, r.jsx)(s.Z, {
                    className: c.ctaButton,
                    guild: n,
                    analyticsLocation: {
                        page: l.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: l.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: l.qAy.BUTTON_CTA,
                        objectType: l.Qqv.BUY
                    },
                    closeLayer: t,
                    pauseAnimation: !u,
                    size: o.zxk.Sizes.LARGE
                })
            ]
        })
    });
};
