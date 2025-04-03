n.d(t, { Z: () => a }), n(266796);
var r = n(200651),
    s = n(763283),
    o = n(204162);
function a(e) {
    let { name: t, description: n, pointsDescription: a } = e;
    return (0, r.jsxs)('div', {
        className: o.tooltipContent,
        children: [
            (0, r.jsx)(s.Z, {
                variant: 'text-md/normal',
                className: o.name,
                color: 'clicker-game-brand',
                children: t
            }),
            (0, r.jsx)(s.Z, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: n
            }),
            null != a
                ? (0, r.jsx)(s.Z, {
                      variant: 'text-sm/normal',
                      className: o.pointsDescription,
                      children: a
                  })
                : null
        ]
    });
}
