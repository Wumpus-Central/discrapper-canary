n.d(t, { Z: () => c }), n(266796);
var r = n(200651),
    i = n(793030),
    o = n(483444),
    a = n(787528),
    s = n(388032),
    l = n(108337);
let c = (e) => {
    let { profileBadge: t, tenureBadge: n } = e;
    return (0, r.jsxs)('div', {
        className: l.tooltipContainer,
        children: [
            (0, r.jsx)('img', {
                src: (0, a.J)(n.id),
                alt: ''
            }),
            (0, r.jsx)('div', {
                className: l.tooltipWordmarkContainer,
                children: (0, r.jsx)(o.Z, {
                    width: 56,
                    className: l.tooltipWordmark
                })
            }),
            (0, r.jsx)(i.X6, {
                variant: 'heading-xl/extrabold',
                children: s.NW.string(n.nameUnformatted)
            }),
            (0, r.jsx)(i.xv, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: l.tooltipDescription,
                children: t.description
            })
        ]
    });
};
