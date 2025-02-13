n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(51144),
    o = n(230841);
let c = (e) => {
    let { user: t, fill: n } = e,
        r = '\xA0(@'.concat(l.ZP.getUserTag(t, { decoration: 'never' }), ')');
    return (0, i.jsxs)(s.Text, {
        className: a()([{ [o.fill]: n }]),
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
