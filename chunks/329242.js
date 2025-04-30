n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(51144),
    o = n(261182);
let c = (e) => {
    let { user: t, fill: n } = e,
        r = '\xA0(@'.concat(a.ZP.getUserTag(t, { decoration: 'never' }), ')');
    return (0, i.jsxs)(l.Text, {
        className: s()([{ [o.fill]: n }]),
        variant: 'text-md/medium',
        children: [
            (0, i.jsx)('span', {
                className: o.username,
                children: a.ZP.getName(t)
            }),
            (0, i.jsx)('span', {
                className: o.discriminator,
                children: r
            })
        ]
    });
};
