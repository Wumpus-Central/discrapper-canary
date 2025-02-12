n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(648488);
function s(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, i.jsxs)('div', {
        className: o.wrapper,
        children: [
            (0, i.jsxs)('span', {
                className: r()(o.users, {
                    [o.video]: l,
                    [o.extraLong]: n >= 100
                }),
                children: [
                    l
                        ? (0, i.jsx)(a.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o.videoIcon
                          })
                        : null,
                    n.toString().padStart(2, '0')
                ]
            }),
            (0, i.jsx)('span', {
                className: r()(o.total, { [o.extraLong]: t >= 100 }),
                children: t.toString().padStart(2, '0')
            })
        ]
    });
}
