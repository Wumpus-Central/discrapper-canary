s.d(t, { v: () => u });
var n = s(477900),
    r = s(661531),
    a = s(452027),
    l = s(834730),
    i = s(375708),
    c = s(795043);
function u(e) {
    let {
        fieldLabel: t = i.intl.string(i.t["u+Cw58"]),
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
                (0, n.jsx)(l.E, { className: c.OL, variant: "text-md/normal", children: s }),
                (0, n.jsx)("span", {
                    className: c.OL,
                    children: (0, n.jsxs)(l.E, {
                        variant: "text-md/normal",
                        className: c.Kk,
                        children: [(0, n.jsx)(o, { color: d, size: "sm" }), u],
                    }),
                }),
            ],
        }),
    });
}
