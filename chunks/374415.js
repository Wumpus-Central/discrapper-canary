n.d(t, { h: () => s });
var r = n(255367),
    i = n(73800),
    a = n(793030),
    o = n(974223);
function s(e) {
    let { size: t = 'md', direction: n = 'horizontal', justify: s, align: l, padding: c, className: u, children: d, wrap: f = !0, fullWidth: _ = !1 } = e,
        p = i.useMemo(
            () => ({
                size: t,
                fullWidth: _
            }),
            [t, _]
        );
    return (0, r.jsx)(a.Kq, {
        direction: n,
        gap: 8,
        justify: s,
        align: l,
        wrap: f,
        padding: c,
        className: u,
        children: (0, r.jsx)(o.u.Provider, {
            value: p,
            children: d
        })
    });
}
