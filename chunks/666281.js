s.d(t, { v: () => u });
var n = s(477900),
    r = s(661531),
    a = s(452027),
    i = s(834730),
    l = s(375708),
    c = s(795043);
function u(e) {
    let {
        fieldLabel: t = l.intl.string(l.t["u+Cw58"]),
        label: s,
        value: u,
        Icon: o,
        iconColor: d = r.A.colors.ICON_SUBTLE,
    } = e;
    return (0, n.jsx)(a.D, {
        label: t,
        children: (0, n.jsxs)("div", {
            className: c.nQ,
            children: [
                (0, n.jsx)(i.E, { className: c.OL, variant: "text-md/normal", children: s }),
                (0, n.jsx)("span", {
                    className: c.OL,
                    children: (0, n.jsxs)(i.E, {
                        variant: "text-md/normal",
                        className: c.Kk,
                        children: [(0, n.jsx)(o, { color: d, size: "sm" }), u],
                    }),
                }),
            ],
        }),
    });
}
