n.d(t, { h: () => s });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(974223);
function s(e) {
    let {
            size: t = "md",
            direction: n = "horizontal",
            justify: s,
            align: l,
            padding: c,
            className: u,
            children: d,
            wrap: f = !0,
            fullWidth: _ = !1,
            fullWidthContainer: p = !1,
        } = e,
        h = i.useMemo(
            () => ({
                size: t,
                fullWidth: _,
            }),
            [t, _],
        );
    return (0, r.jsx)(a.Kq, {
        direction: n,
        gap: 8,
        justify: s,
        align: l,
        wrap: f,
        padding: c,
        className: u,
        fullWidth: !!p || _,
        children: (0, r.jsx)(o.u.Provider, {
            value: h,
            children: d,
        }),
    });
}
