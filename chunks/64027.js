n.d(t, { h: () => s });
var r = n(54381),
    i = n(473749),
    a = n(821541),
    o = n(986794);
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
    return (0, r.jsx)(a.K, {
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
