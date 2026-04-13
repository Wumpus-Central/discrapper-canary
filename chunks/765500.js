n.d(t, { N: () => g, x: () => m });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(827734),
    r = n(200921),
    a = n(176524),
    o = n(403362),
    d = n(336926),
    c = n(985018),
    u = n(151885);
function m(e) {
    let { icon: t, label: n, subLabel: r, description: o, children: d, muted: c } = e;
    return (0, i.jsxs)(s.BJc, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, i.jsx)(a.A, { Icon: t, color: c ? l.A.colors.ICON_MUTED : "currentColor" }),
            (0, i.jsxs)(s.BJc, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, i.jsxs)(s.BJc, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, i.jsx)(s.EYj, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != r &&
                                (0, i.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "•",
                                }),
                            null != r &&
                                (0, i.jsx)(s.EYj, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, i.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            d,
        ],
    });
}
function g(e) {
    let { session: t, current: n } = e,
        { location: l, platform: a, os: g, Icon: _, lastActive: x } = (0, d.T)(t, n),
        h = [l, x].filter(o.Vq);
    return (0, i.jsx)(m, {
        icon: _,
        label: g,
        subLabel: a,
        description: h.join(" \xb7 "),
        children:
            !n &&
            (0, i.jsx)(s.DUT, {
                className: u.X,
                onClick: () => (0, r.U0)(t.id_hash),
                "aria-label": c.intl.string(c.t.E4MJNt),
                children: (0, i.jsx)(s.PGe, { size: "md", color: "currentColor" }),
            }),
    });
}
