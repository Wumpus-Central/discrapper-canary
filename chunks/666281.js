n.d(t, { v: () => u });
var a = n(627968),
    r = n(827734),
    l = n(452027),
    i = n(834730),
    s = n(985018),
    o = n(835262);
let u = (e) => {
    let {
        fieldLabel: t = s.intl.string(s.t["u+Cw58"]),
        label: n,
        value: u,
        Icon: c,
        iconColor: d = r.A.colors.ICON_SUBTLE,
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
                        children: [(0, a.jsx)(c, { color: d, size: "sm" }), u],
                    }),
                }),
            ],
        }),
    });
};
