t.d(n, { Z: () => p }), t(388685), t(953529);
var r = t(200651),
    o = t(192379),
    s = t(793030),
    i = t(481060),
    a = t(838968),
    l = t(262212),
    c = t(795338),
    d = t(279604),
    u = t(388032),
    m = t(117172);
function p(e) {
    let { guildId: n, powerup: t } = e,
        [p, x] = o.useState(void 0);
    (0, d.KT)(p);
    let [_, v] = o.useState(!1);
    return (0, r.jsxs)(a.Z, {
        onHover: (e) => v(e),
        guildId: n,
        powerup: t,
        children: [
            (0, r.jsx)(c.m, {
                className: m.image,
                powerup: t,
                isHovering: _
            }),
            (0, r.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: m.headerContainer,
                        children: (0, r.jsx)(s.X6, {
                            variant: 'heading-md/bold',
                            children: t.title
                        })
                    }),
                    (0, r.jsx)(s.xv, {
                        className: m.description,
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
                className: m.buttonContainer,
                children: (0, r.jsx)(l.ZP, {
                    guildId: n,
                    powerup: t,
                    onError: x
                })
            }),
            (0, r.jsx)(i.IGR, {
                className: m.new,
                text: u.NW.string(u.t.y2b7CA)
            })
        ]
    });
}
