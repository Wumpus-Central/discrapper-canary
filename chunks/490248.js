n.d(t, { Z: () => u });
var i = n(200651),
    r = n(793030),
    a = n(483444),
    s = n(787528),
    o = n(388032),
    l = n(239196);
let u = (e) => {
    let { profileBadge: t, tenureBadge: n } = e;
    return (0, i.jsxs)('div', {
        className: l.tooltipContainer,
        children: [
            (0, i.jsx)('img', {
                src: (0, s.J)(n.id),
                alt: ''
            }),
            (0, i.jsx)('div', {
                className: l.tooltipWordmarkContainer,
                children: (0, i.jsx)(a.Z, {
                    width: 56,
                    className: l.tooltipWordmark
                })
            }),
            (0, i.jsx)(r.X6, {
                variant: 'heading-xl/extrabold',
                children: o.intl.string(n.nameUnformatted)
            }),
            (0, i.jsx)(r.xv, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: l.tooltipDescription,
                children: t.description
            })
        ]
    });
};
