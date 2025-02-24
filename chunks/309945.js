t.d(n, { Z: () => d });
var i = t(200651),
    r = t(657707),
    a = t(793030),
    o = t(692547),
    s = t(783684),
    c = t(388032),
    l = t(678970);
function d(e) {
    let { powerup: n } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)(r.P4T, {
                color: o.Z.colors.TEXT_WARNING,
                className: l.icon
            }),
            (0, i.jsx)(a.xv, {
                variant: 'text-md/semibold',
                color: 'text-warning',
                children: c.NW.formatToPlainString(s.Z.n5hQhY, { perk: n.title })
            }),
            (0, i.jsx)(a.xv, {
                variant: 'text-sm/medium',
                children: c.NW.formatToPlainString(s.Z.iAaAiI, {
                    boostCount: 1,
                    dayCount: 1,
                    perk: n.title
                })
            })
        ]
    });
}
