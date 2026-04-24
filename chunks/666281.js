n.d(t, { v: () => c });
var a = n(627968),
    r = n(661531),
    l = n(452027),
    i = n(834730),
    s = n(985018),
    o = n(91774);
let c = (e) => {
    let {
        fieldLabel: t = s.intl.string(s.t["u+Cw58"]),
        label: n,
        value: c,
        Icon: d,
        iconColor: u = r.A.colors.ICON_SUBTLE,
    } = e;
    return (0, a.jsx)(l.D, {
        label: t,
        children: (0, a.jsxs)("div", {
            className: o.nQ,
            children: [
                (0, a.jsx)(i.E, { className: o.OL, variant: "text-md/normal", children: n }),
                (0, a.jsx)("span", {
                    className: o.OL,
                    children: (0, a.jsxs)(i.E, {
                        variant: "text-md/normal",
                        className: o.Kk,
                        children: [(0, a.jsx)(d, { color: u, size: "sm" }), c],
                    }),
                }),
            ],
        }),
    });
};
