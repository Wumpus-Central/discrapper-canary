t.d(n, { Z: () => d }), t(388685), t(953529);
var r = t(200651),
    o = t(192379),
    s = t(793030),
    i = t(838968),
    a = t(262212),
    l = t(795338),
    c = t(279604),
    u = t(117172);
function d(e) {
    let { guildId: n, powerup: t } = e,
        [d, m] = o.useState(void 0);
    return (
        (0, c.KT)(d),
        (0, r.jsxs)(i.Z, {
            guildId: n,
            powerup: t,
            children: [
                (0, r.jsx)(l.m, {
                    className: u.image,
                    powerup: t
                }),
                (0, r.jsxs)('div', {
                    className: u.contentContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: u.headerContainer,
                            children: (0, r.jsx)(s.X6, {
                                variant: 'heading-md/bold',
                                children: t.title
                            })
                        }),
                        (0, r.jsx)(s.xv, {
                            className: u.description,
                            variant: 'text-sm/medium',
                            children: t.description
                        }),
                        (0, r.jsx)(i.u, {
                            guildId: n,
                            powerup: t
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: u.buttonContainer,
                    children: (0, r.jsx)(a.ZP, {
                        guildId: n,
                        powerup: t,
                        onError: m
                    })
                })
            ]
        })
    );
}
