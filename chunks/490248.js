var i = r(200651),
    a = r(793030),
    o = r(483444),
    s = r(787528),
    l = r(388032),
    u = r(532675);
let c = (e) => {
    let { profileBadge: n, tenureBadge: r } = e;
    return (0, i.jsxs)('div', {
        className: u.tooltipContainer,
        children: [
            (0, i.jsx)('img', {
                src: (0, s.J)(r.id),
                alt: ''
            }),
            (0, i.jsx)('div', {
                className: u.tooltipWordmarkContainer,
                children: (0, i.jsx)(o.Z, {
                    width: 56,
                    className: u.tooltipWordmark
                })
            }),
            (0, i.jsx)(a.X6, {
                variant: 'heading-xl/extrabold',
                children: l.intl.string(r.nameUnformatted)
            }),
            (0, i.jsx)(a.xv, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: u.tooltipDescription,
                children: n.description
            })
        ]
    });
};
n.Z = c;
