t.d(s, { v: () => u });
var n = t(477900),
    r = t(661531),
    a = t(452027),
    i = t(834730),
    l = t(375708),
    c = t(795043);
function u(e) {
    let {
        fieldLabel: s = l.intl.string(l.t["u+Cw58"]),
        label: t,
        value: u,
        Icon: o,
        iconColor: d = r.A.colors.ICON_SUBTLE,
    } = e;
    return (0, n.jsx)(a.D, {
        label: s,
        children: (0, n.jsxs)("div", {
            className: c.nQ,
            children: [
                (0, n.jsx)(i.E, { className: c.OL, variant: "text-md/normal", children: t }),
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
