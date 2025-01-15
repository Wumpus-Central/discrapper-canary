var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(51144),
    o = n(885595);
t.Z = (e) => {
    let { user: t, fill: n } = e,
        s = '\xA0(@'.concat(l.ZP.getUserTag(t, { decoration: 'never' }), ')');
    return (0, i.jsxs)(a.Text, {
        className: r()([{ [o.fill]: n }]),
        variant: 'text-md/medium',
        children: [
            (0, i.jsx)('span', {
                className: o.username,
                children: l.ZP.getName(t)
            }),
            (0, i.jsx)('span', {
                className: o.discriminator,
                children: s
            })
        ]
    });
};
