n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(656855);
function s(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)('div', {
        className: a.wrapper,
        children: [
            (0, r.jsxs)('span', {
                className: l()(a.users, {
                    [a.video]: i,
                    [a.extraLong]: n >= 100
                }),
                children: [
                    i
                        ? (0, r.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.videoIcon
                          })
                        : null,
                    n.toString().padStart(2, '0')
                ]
            }),
            (0, r.jsx)('span', {
                className: l()(a.total, { [a.extraLong]: t >= 100 }),
                children: t.toString().padStart(2, '0')
            })
        ]
    });
}
