n.d(t, { h: () => a });
var i = n(255367),
    r = n(73800),
    s = n(793030),
    l = n(974223);
function a(e) {
    let { size: t = 'md', direction: n = 'horizontal', justify: a, align: o, padding: c, className: d, children: u, fullWidth: m = !1 } = e,
        g = r.useMemo(
            () => ({
                size: t,
                fullWidth: m
            }),
            [t, m]
        );
    return (0, i.jsx)(s.Kq, {
        direction: n,
        gap: 8,
        justify: a,
        align: o,
        padding: c,
        className: d,
        children: (0, i.jsx)(l.u.Provider, {
            value: g,
            children: u
        })
    });
}
