n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(656855);
function a(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, r.jsxs)('span', {
                className: l()(s.users, {
                    [s.video]: i,
                    [s.extraLong]: n >= 100
                }),
                children: [
                    i
                        ? (0, r.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.videoIcon
                          })
                        : null,
                    n.toString().padStart(2, '0')
                ]
            }),
            (0, r.jsx)('span', {
                className: l()(s.total, { [s.extraLong]: t >= 100 }),
                children: t.toString().padStart(2, '0')
            })
        ]
    });
}
