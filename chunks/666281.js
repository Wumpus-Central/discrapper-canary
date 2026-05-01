n.d(t, { v: () => u });
var r = n(627968),
    a = n(661531),
    s = n(452027),
    l = n(834730),
    i = n(985018),
    c = n(91774);
let u = (e) => {
    let {
        fieldLabel: t = i.intl.string(i.t["u+Cw58"]),
        label: n,
        value: u,
        Icon: o,
        iconColor: d = a.A.colors.ICON_SUBTLE,
    } = e;
    return (0, r.jsx)(s.D, {
        label: t,
        children: (0, r.jsxs)("div", {
            className: c.nQ,
            children: [
                (0, r.jsx)(l.E, { className: c.OL, variant: "text-md/normal", children: n }),
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
};
