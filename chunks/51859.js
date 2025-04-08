t.d(n, { Z: () => v }), t(388685), t(953529);
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(793030),
    l = t(690786),
    c = t(838968),
    u = t(262212),
    d = t(795338),
    m = t(279604),
    p = t(680278),
    x = t(388032),
    _ = t(117172);
function v(e) {
    let { guildId: n, powerup: t } = e,
        s = null != (0, l.Z)(n, t),
        [v, g] = o.useState(void 0);
    return (
        (0, m.KT)(v),
        (0, r.jsxs)(c.Z, {
            guildId: n,
            powerup: t,
            children: [
                (0, r.jsx)(d.m, {
                    className: _.image,
                    powerup: t
                }),
                (0, r.jsxs)('div', {
                    className: _.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: _.headerContainer,
                            children: [
                                (0, r.jsx)(a.X6, {
                                    variant: 'heading-md/bold',
                                    children: t.title
                                }),
                                t.bundle &&
                                    (0, r.jsx)(a.xv, {
                                        className: i()(_.bundle, { [_.active]: s }),
                                        variant: 'text-xs/semibold',
                                        children: x.NW.string(p.Z.j2jUjY)
                                    })
                            ]
                        }),
                        (0, r.jsx)(a.xv, {
                            className: _.description,
                            variant: 'text-sm/medium',
                            children: t.description
                        }),
                        (0, r.jsx)(c.u, {
                            guildId: n,
                            powerup: t
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: _.buttonContainer,
                    children: (0, r.jsx)(u.ZP, {
                        guildId: n,
                        powerup: t,
                        onError: g
                    })
                })
            ]
        })
    );
}
