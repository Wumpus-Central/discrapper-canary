n.d(t, { N: () => h, x: () => A });
var i = n(627968);
n(64700);
var s = n(331322),
    l = n(834730),
    a = n(939249),
    r = n(789645),
    o = n(827734),
    d = n(200921),
    u = n(176524),
    c = n(403362),
    g = n(336926),
    m = n(985018),
    _ = n(583133);
function A(e) {
    let { icon: t, label: n, subLabel: a, description: r, children: d, muted: c } = e;
    return (0, i.jsxs)(s.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, i.jsx)(u.A, { Icon: t, color: c ? o.A.colors.ICON_MUTED : "currentColor" }),
            (0, i.jsxs)(s.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, i.jsxs)(s.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, i.jsx)(l.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != a &&
                                (0, i.jsx)(l.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "•",
                                }),
                            null != a &&
                                (0, i.jsx)(l.E, { variant: "text-md/medium", color: "text-subtle", children: a }),
                        ],
                    }),
                    (0, i.jsx)(l.E, { variant: "text-sm/normal", color: "text-muted", children: r }),
                ],
            }),
            d,
        ],
    });
}
function h(e) {
    let { session: t, current: n } = e,
        { location: s, platform: l, os: o, Icon: u, lastActive: h } = (0, g.T)(t, n),
        p = [s, h].filter(c.Vq);
    return (0, i.jsx)(A, {
        icon: u,
        label: o,
        subLabel: l,
        description: p.join(" \xb7 "),
        children:
            !n &&
            (0, i.jsx)(a.D, {
                className: _.X,
                onClick: () => (0, d.U0)(t.id_hash),
                "aria-label": m.intl.string(m.t.E4MJNt),
                children: (0, i.jsx)(r.P, { size: "md", color: "currentColor" }),
            }),
    });
}
