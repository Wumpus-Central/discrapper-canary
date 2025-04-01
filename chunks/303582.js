n.d(t, { Z: () => i }), n(266796);
var r = n(200651),
    s = n(763283),
    o = n(233505);
function i(e) {
    let { name: t, description: n, pointsDescription: i } = e;
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
            null != i
                ? (0, r.jsx)(s.Z, {
                      variant: 'text-sm/normal',
                      className: o.pointsDescription,
                      children: i
                  })
                : null
        ]
    });
}
