(n.d(t, { Z: () => x }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    o = n(793030),
    a = n(481060),
    s = n(973772),
    l = n(838968),
    c = n(262212),
    d = n(795338),
    u = n(279604),
    p = n(279475),
    m = n(535396),
    _ = n(388032),
    f = n(117172);
function x(e) {
    let { guildId: t, powerup: n } = e,
        [x, b] = i.useState(void 0);
    (0, u.KT)(x);
    let [v, g] = i.useState(!1),
        h = (0, s.Z)(t, n).type !== m.A3.INACTIVE,
        E = (0, p.d)(h);
    return (0, r.jsxs)(l.Z, {
        onHover: (e) => g(e),
        guildId: t,
        powerup: n,
        children: [
            (0, r.jsx)(d.m, {
                className: f.image,
                powerup: n,
                isHovering: v
            }),
            (0, r.jsxs)('div', {
                className: f.contentContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: f.headerContainer,
                        children: (0, r.jsx)(o.X6, {
                            color: E,
                            variant: 'heading-md/bold',
                            children: n.title
                        })
                    }),
                    (0, r.jsx)(o.xv, {
                        className: f.description,
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
                className: f.buttonContainer,
                children: (0, r.jsx)(c.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: b
                })
            }),
            (0, r.jsx)(a.IGR, {
                className: f.new,
                text: _.intl.string(_.t.y2b7CA)
            })
        ]
    });
}
