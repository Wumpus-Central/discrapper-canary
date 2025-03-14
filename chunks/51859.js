t.d(n, { Z: () => m }), t(47120), t(266796);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(793030),
    l = t(157353),
    c = t(838968),
    d = t(969867),
    u = t(279604),
    x = t(730621),
    p = t(388032),
    v = t(709435);
function m(e) {
    let { guildId: n, powerup: t } = e,
        { onShowMore: o } = (0, u.ZP)(n, t),
        m = (0, l.Z)(n, t),
        [b, _] = i.useState(void 0);
    return (
        (0, u.KT)(b),
        (0, r.jsxs)(c.Z, {
            label: t.title,
            onClick: o,
            active: m,
            children: [
                (0, r.jsx)('div', {
                    className: v.imageContainer,
                    children: (0, r.jsx)('img', { alt: '' })
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
                                        className: s()(v.bundle, { [v.active]: m }),
                                        variant: 'text-xs/semibold',
                                        children: p.NW.string(x.Z.j2jUjY)
                                    })
                            ]
                        }),
                        (0, r.jsx)(a.xv, {
                            className: v.description,
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
                    className: v.buttonContainer,
                    children: (0, r.jsx)(d.Z, {
                        guildId: n,
                        powerup: t,
                        onError: _
                    })
                })
            ]
        })
    );
}
