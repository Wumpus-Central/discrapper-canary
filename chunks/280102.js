n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(348554);
function s(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, i.jsxs)('div', {
        className: a.wrapper,
        children: [
            (0, i.jsxs)('span', {
                className: r()(a.users, {
                    [a.video]: l,
                    [a.extraLong]: n >= 100
                }),
                children: [
                    l
                        ? (0, i.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.videoIcon
                          })
                        : null,
                    n.toString().padStart(2, '0')
                ]
            }),
            (0, i.jsx)('span', {
                className: r()(a.total, { [a.extraLong]: t >= 100 }),
                children: t.toString().padStart(2, '0')
            })
        ]
    });
}
