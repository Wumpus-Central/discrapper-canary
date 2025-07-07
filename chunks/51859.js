(t.d(n, { Z: () => f }), t(388685), t(953529));
var r = t(255367),
    i = t(73800),
    o = t(793030),
    a = t(481060),
    s = t(690786),
    l = t(838968),
    c = t(262212),
    d = t(795338),
    u = t(279604),
    m = t(279475),
    p = t(388032),
    _ = t(117172);
function f(e) {
    let { guildId: n, powerup: t } = e,
        [f, x] = i.useState(void 0);
    (0, u.KT)(f);
    let [b, v] = i.useState(!1),
        g = (0, s.Z)(n, t),
        h = (0, m.d)(null != g);
    return (0, r.jsxs)(l.Z, {
        onHover: (e) => v(e),
        guildId: n,
        powerup: t,
        children: [
            (0, r.jsx)(d.m, {
                className: _.image,
                powerup: t,
                isHovering: b
            }),
            (0, r.jsxs)('div', {
                className: _.contentContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerContainer,
                        children: (0, r.jsx)(o.X6, {
                            color: h,
                            variant: 'heading-md/bold',
                            children: t.title
                        })
                    }),
                    (0, r.jsx)(o.xv, {
                        className: _.description,
                        color: h,
                        variant: 'text-sm/medium',
                        children: t.description
                    }),
                    (0, r.jsx)(l.u, {
                        guildId: n,
                        powerup: t
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: _.buttonContainer,
                children: (0, r.jsx)(c.ZP, {
                    guildId: n,
                    powerup: t,
                    onError: x
                })
            }),
            (0, r.jsx)(a.IGR, {
                className: _.new,
                text: p.intl.string(p.t.y2b7CA)
            })
        ]
    });
}
