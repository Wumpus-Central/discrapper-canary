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
            fullWidth: p = !1,
            fullWidthContainer: _ = !1,
        } = e,
        m = i.useMemo(
            () => ({
                size: t,
                fullWidth: p,
            }),
            [t, p],
        );
    return (0, r.jsx)(a.K, {
        direction: n,
        gap: 8,
        justify: s,
        align: l,
        wrap: f,
        padding: c,
        className: u,
        fullWidth: !!_ || p,
        children: (0, r.jsx)(o.u.Provider, {
            value: m,
            children: d,
        }),
    });
}
