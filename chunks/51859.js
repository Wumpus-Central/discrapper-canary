t.d(n, { Z: () => g }), t(47120), t(266796);
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(793030),
    l = t(156732),
    c = t(690786),
    d = t(838968),
    u = t(262212),
    m = t(279604),
    p = t(535396),
    x = t(680278),
    _ = t(388032),
    v = t(117172);
function g(e) {
    let { guildId: n, powerup: t } = e,
        i = null != (0, c.Z)(n, t),
        [g, f] = o.useState(void 0),
        b = (0, l.Z)(t);
    return (
        (0, m.KT)(g),
        (0, r.jsxs)(d.Z, {
            guildId: n,
            powerup: t,
            children: [
                (0, r.jsx)('div', {
                    className: v.imageContainer,
                    children: (0, r.jsx)('img', {
                        className: s()(v.image, { [v.gradientRoleColorsImage]: t.skuId === p.If }),
                        alt: '',
                        src: b
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.headerContainer,
                            children: [
                                (0, r.jsx)(a.X6, {
                                    variant: 'heading-md/bold',
                                    children: t.title
                                }),
                                t.bundle &&
                                    (0, r.jsx)(a.xv, {
                                        className: s()(v.bundle, { [v.active]: i }),
                                        variant: 'text-xs/semibold',
                                        children: _.NW.string(x.Z.j2jUjY)
                                    })
                            ]
                        }),
                        (0, r.jsx)(a.xv, {
                            className: v.description,
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
                    className: v.buttonContainer,
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
