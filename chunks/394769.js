n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(642128),
    a = n(481060),
    s = n(565138),
    o = n(678558),
    l = n(981631),
    u = n(509532);
let c = function (e) {
    let { closeLayer: t, guild: n, isVisible: c } = e,
        d = (0, a.q_F)({
            transform: c ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: c ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, i.jsx)(r.animated.div, {
        className: u.wrapper,
        style: d,
        children: (0, i.jsxs)('div', {
            className: u.innerWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: u.guildInfo,
                    children: [
                        (0, i.jsx)(s.Z, {
                            className: u.guildIcon,
                            guild: n,
                            size: s.Z.Sizes.LARGER
                        }),
                        (0, i.jsx)(a.X6q, {
                            className: u.guildName,
                            variant: 'text-lg/bold',
                            children: n.name
                        })
                    ]
                }),
                (0, i.jsx)(o.Z, {
                    className: u.ctaButton,
                    guild: n,
                    analyticsLocation: {
                        page: l.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: l.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: l.qAy.BUTTON_CTA,
                        objectType: l.Qqv.BUY
                    },
                    closeLayer: t,
                    pauseAnimation: !c,
                    size: a.zxk.Sizes.LARGE
                })
            ]
        })
    });
};
