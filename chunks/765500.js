n.d(t, { N: () => g, x: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(158954),
    r = n(200921),
    o = n(403362),
    d = n(336926),
    c = n(985018),
    u = n(151885);
function m(e) {
    let { icon: t, label: n, subLabel: s, description: r, children: o, muted: d } = e;
    return (0, i.jsxs)(a.BJc, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, i.jsx)("div", {
                className: l()(u.FU, { [u.SU]: d }),
                children: (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsxs)(a.BJc, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, i.jsxs)(a.BJc, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, i.jsx)(a.EYj, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != s &&
                                (0, i.jsx)(a.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "•",
                                }),
                            null != s &&
                                (0, i.jsx)(a.EYj, { variant: "text-md/medium", color: "text-subtle", children: s }),
                        ],
                    }),
                    (0, i.jsx)(a.EYj, { variant: "text-sm/normal", color: "text-muted", children: r }),
                ],
            }),
            o,
        ],
    });
}
function g(e) {
    let { session: t, current: n } = e,
        { location: s, platform: l, os: g, Icon: _, lastActive: x } = (0, d.T)(t, n),
        A = [s, x].filter(o.Vq);
    return (0, i.jsx)(m, {
        icon: _,
        label: g,
        subLabel: l,
        description: A.join(" \xb7 "),
        children:
            !n &&
            (0, i.jsx)(a.DUT, {
                className: u.XP,
                onClick: () => (0, r.U0)(t.id_hash),
                "aria-label": c.intl.string(c.t.E4MJNt),
                children: (0, i.jsx)(a.PGe, { size: "md", color: "currentColor" }),
            }),
    });
}
