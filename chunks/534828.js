var i = r(200651),
    a = r(192379),
    s = r(397963),
    o = r(987817),
    l = r(101410);
let u = (0, s.iS)((e) =>
    (0, i.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: l.saturation,
                children: (0, i.jsx)(o.Saturation, { ...e })
            }),
            (0, i.jsx)('div', {
                className: l.hue,
                children: (0, i.jsx)(o.Hue, {
                    ...e,
                    direction: 'horizontal'
                })
            })
        ]
    })
);
n.Z = a.memo(u);
