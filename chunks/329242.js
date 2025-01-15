var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(51144),
    o = n(546930);
t.Z = (e) => {
    let { user: t, fill: n } = e,
        r = '\xA0(@'.concat(l.ZP.getUserTag(t, { decoration: 'never' }), ')');
    return (0, i.jsxs)(a.Text, {
        className: s()([{ [o.fill]: n }]),
        variant: 'text-md/medium',
        children: [
            (0, i.jsx)('span', {
                className: o.username,
                children: l.ZP.getName(t)
            }),
            (0, i.jsx)('span', {
                className: o.discriminator,
                children: r
            })
        ]
    });
};
