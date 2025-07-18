(n.d(t, { Z: () => x }), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    i = n(793030),
    s = n(481060),
    a = n(973772),
    l = n(838968),
    c = n(262212),
    u = n(795338),
    d = n(279604),
    p = n(279475),
    m = n(535396),
    f = n(388032),
    _ = n(117172);
function x(e) {
    let { guildId: t, powerup: n } = e,
        [x, v] = o.useState(void 0);
    (0, d.KT)(x);
    let [g, b] = o.useState(!1),
        j = (0, a.Z)(t, n).type !== m.A3.INACTIVE,
        E = (0, p.d)(j);
    return (0, r.jsxs)(l.Z, {
        onHover: (e) => b(e),
        guildId: t,
        powerup: n,
        children: [
            (0, r.jsx)(u.m, {
                className: _.image,
                powerup: n,
                isHovering: g
            }),
            (0, r.jsxs)('div', {
                className: _.contentContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerContainer,
                        children: (0, r.jsx)(i.X6, {
                            color: E,
                            variant: 'heading-md/bold',
                            children: n.title
                        })
                    }),
                    (0, r.jsx)(i.xv, {
                        className: _.description,
                        color: E,
                        variant: 'text-sm/medium',
                        children: n.description
                    }),
                    (0, r.jsx)(l.u, {
                        guildId: t,
                        powerup: n
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: _.buttonContainer,
                children: (0, r.jsx)(c.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: v
                })
            }),
            (0, r.jsx)(s.IGR, {
                className: _.new,
                text: f.intl.string(f.t.y2b7CA)
            })
        ]
    });
}
