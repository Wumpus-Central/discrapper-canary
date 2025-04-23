t.d(n, { Z: () => m }), t(388685), t(953529);
var r = t(200651),
    i = t(192379),
    o = t(793030),
    s = t(481060),
    a = t(838968),
    l = t(262212),
    c = t(795338),
    u = t(279604),
    d = t(388032),
    p = t(117172);
function m(e) {
    let { guildId: n, powerup: t } = e,
        [m, _] = i.useState(void 0);
    (0, u.KT)(m);
    let [x, f] = i.useState(!1);
    return (0, r.jsxs)(a.Z, {
        onHover: (e) => f(e),
        guildId: n,
        powerup: t,
        children: [
            (0, r.jsx)(c.m, {
                className: p.image,
                powerup: t,
                isHovering: x
            }),
            (0, r.jsxs)('div', {
                className: p.contentContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: p.headerContainer,
                        children: (0, r.jsx)(o.X6, {
                            variant: 'heading-md/bold',
                            children: t.title
                        })
                    }),
                    (0, r.jsx)(o.xv, {
                        className: p.description,
                        variant: 'text-sm/medium',
                        children: t.description
                    }),
                    (0, r.jsx)(a.u, {
                        guildId: n,
                        powerup: t
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: p.buttonContainer,
                children: (0, r.jsx)(l.ZP, {
                    guildId: n,
                    powerup: t,
                    onError: _
                })
            }),
            (0, r.jsx)(s.IGR, {
                className: p.new,
                text: d.intl.string(d.t.y2b7CA)
            })
        ]
    });
}
