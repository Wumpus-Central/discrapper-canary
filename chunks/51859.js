t.d(n, { Z: () => v }), t(47120), t(266796);
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(793030),
    l = t(156732),
    c = t(690786),
    d = t(838968),
    u = t(262212),
    p = t(279604),
    m = t(680278),
    x = t(388032),
    _ = t(117172);
function v(e) {
    let { guildId: n, powerup: t } = e,
        i = null != (0, c.Z)(n, t),
        [v, f] = o.useState(void 0),
        b = (0, l.Z)(t);
    return (
        (0, p.KT)(v),
        (0, r.jsxs)(d.Z, {
            guildId: n,
            powerup: t,
            children: [
                (0, r.jsx)('div', {
                    className: _.imageContainer,
                    children: (0, r.jsx)('img', {
                        className: _.image,
                        alt: '',
                        src: b
                    })
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
                                        className: s()(_.bundle, { [_.active]: i }),
                                        variant: 'text-xs/semibold',
                                        children: x.NW.string(m.Z.j2jUjY)
                                    })
                            ]
                        }),
                        (0, r.jsx)(a.xv, {
                            className: _.description,
                            variant: 'text-sm/medium',
                            children: t.description
                        }),
                        (0, r.jsx)(d.u, {
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
                        onError: f
                    })
                })
            ]
        })
    );
}
