n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(950104),
    c = n(481060),
    d = n(434404),
    u = n(999382),
    m = n(570911),
    h = n(388032),
    g = n(135323),
    x = n(750609);
function p(e) {
    let { guild: t } = e,
        n = t.id,
        l = (0, a.e7)([u.Z], () => u.Z.getGuildProfile()),
        p = r.useCallback(
            (e, t) => () => {
                d.Z.updateGuildProfile(n, { brandColorPrimary: t });
            },
            [n]
        );
    return (0, i.jsxs)(c.hjN, {
        className: x.section,
        children: [
            (0, i.jsxs)('div', {
                className: x.sectionHeader,
                children: [
                    (0, i.jsx)(c.vwX, { children: h.intl.string(h.t.BSVog4) }),
                    (0, i.jsx)(c.R94, {
                        type: c.geA.DESCRIPTION,
                        children: h.intl.string(h.t['93S9Gx'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: g.grid,
                children: m.c.map((e) => {
                    let { name: t, color: n } = e,
                        r = (0, o.DT)(n, 1.75),
                        a = 'radial-gradient(105.43% 127.05% at 50.1% 127.05%, '.concat(r, ' 20.65%, ').concat(n, ' 85.16%)');
                    return (0, i.jsx)(
                        c.ua7,
                        {
                            text: t,
                            children: (e) =>
                                (0, i.jsx)(c.P3F, {
                                    ...e,
                                    'aria-label': t,
                                    onClick: p(t, n),
                                    style: { background: a },
                                    className: g.itemContainer,
                                    children: (0, i.jsx)('div', { className: s()({ [g.itemSelected]: (null == l ? void 0 : l.brandColorPrimary) === n }) })
                                })
                        },
                        t
                    );
                })
            })
        ]
    });
}
