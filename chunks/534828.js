var i = r(200651),
    a = r(192379),
    o = r(397963),
    s = r(987817),
    l = r(101410);
let u = (0, o.iS)((e) =>
    (0, i.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: l.saturation,
                children: (0, i.jsx)(s.Saturation, { ...e })
            }),
            (0, i.jsx)('div', {
                className: l.hue,
                children: (0, i.jsx)(s.Hue, {
                    ...e,
                    direction: 'horizontal'
                })
            })
        ]
    })
);
n.Z = a.memo(u);
