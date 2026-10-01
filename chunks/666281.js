s.d(t, { v: () => u });
var r = s(477900),
    n = s(661531),
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
        iconColor: d = n.A.colors.ICON_SUBTLE,
    } = e;
    return (0, r.jsx)(a.D, {
        label: t,
        children: (0, r.jsxs)("div", {
            className: c.nQ,
            children: [
                (0, r.jsx)(l.E, { className: c.OL, variant: "text-md/normal", children: s }),
                (0, r.jsx)("span", {
                    className: c.OL,
                    children: (0, r.jsxs)(l.E, {
                        variant: "text-md/normal",
                        className: c.Kk,
                        children: [(0, r.jsx)(o, { color: d, size: "sm" }), u],
                    }),
                }),
            ],
        }),
    });
}
