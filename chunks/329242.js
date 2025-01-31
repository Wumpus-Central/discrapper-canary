n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(51144),
    o = n(885595);
let c = (e) => {
    let { user: t, fill: n } = e,
        s = '\xA0(@'.concat(a.ZP.getUserTag(t, { decoration: 'never' }), ')');
    return (0, i.jsxs)(l.Text, {
        className: r()([{ [o.fill]: n }]),
        variant: 'text-md/medium',
        children: [
            (0, i.jsx)('span', {
                className: o.username,
                children: a.ZP.getName(t)
            }),
            (0, i.jsx)('span', {
                className: o.discriminator,
                children: s
            })
        ]
    });
};
