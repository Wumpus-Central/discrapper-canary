t.d(n, { Z: () => v }), t(47120), t(266796);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(793030),
    l = t(690786),
    c = t(838968),
    d = t(969867),
    u = t(279604),
    x = t(730621),
    m = t(388032),
    p = t(709435);
function v(e) {
    let { guildId: n, powerup: t } = e,
        o = null != (0, l.Z)(n, t),
        [v, b] = i.useState(void 0);
    return (
        (0, u.KT)(v),
        (0, r.jsxs)(c.Z, {
            guildId: n,
            powerup: t,
            children: [
                (0, r.jsx)('div', {
                    className: p.imageContainer,
                    children: (0, r.jsx)('img', { alt: '' })
                }),
                (0, r.jsxs)('div', {
                    className: p.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.headerContainer,
                            children: [
                                (0, r.jsx)(a.X6, {
                                    variant: 'heading-md/bold',
                                    children: t.title
                                }),
                                t.bundle &&
                                    (0, r.jsx)(a.xv, {
                                        className: s()(p.bundle, { [p.active]: o }),
                                        variant: 'text-xs/semibold',
                                        children: m.NW.string(x.Z.j2jUjY)
                                    })
                            ]
                        }),
                        (0, r.jsx)(a.xv, {
                            className: p.description,
                            variant: 'text-sm/medium',
                            children: t.description
                        }),
                        (0, r.jsx)(c.Y, {
                            guildId: n,
                            powerup: t
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, r.jsx)(d.Z, {
                        guildId: n,
                        powerup: t,
                        onError: b
                    })
                })
            ]
        })
    );
}
