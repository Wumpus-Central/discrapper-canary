var i = r(200651);
r(192379);
var a = r(666912),
    s = r(481060),
    o = r(565138),
    l = r(678558),
    u = r(981631),
    c = r(509532);
function d(e) {
    let { closeLayer: n, guild: r, isVisible: d } = e,
        f = (0, s.useSpring)({
            transform: d ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: d ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, i.jsx)(a.animated.div, {
        className: c.wrapper,
        style: f,
        children: (0, i.jsxs)('div', {
            className: c.innerWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: c.guildInfo,
                    children: [
                        (0, i.jsx)(o.Z, {
                            className: c.guildIcon,
                            guild: r,
                            size: o.Z.Sizes.LARGER
                        }),
                        (0, i.jsx)(s.Heading, {
                            className: c.guildName,
                            variant: 'text-lg/bold',
                            children: r.name
                        })
                    ]
                }),
                (0, i.jsx)(l.Z, {
                    className: c.ctaButton,
                    guild: r,
                    analyticsLocation: {
                        page: u.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: u.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: u.qAy.BUTTON_CTA,
                        objectType: u.Qqv.BUY
                    },
                    closeLayer: n,
                    pauseAnimation: !d,
                    size: s.Button.Sizes.LARGE
                })
            ]
        })
    });
}
n.Z = d;
