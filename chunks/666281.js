"use strict";
n.d(t, { v: () => u });
var r = n(627968),
    i = n(827734),
    s = n(452027),
    a = n(834730),
    o = n(985018),
    l = n(91774);
let u = (e) => {
    let {
        fieldLabel: t = o.intl.string(o.t["u+Cw58"]),
        label: n,
        value: u,
        Icon: c,
        iconColor: d = i.A.colors.ICON_SUBTLE,
    } = e;
    return (0, r.jsx)(s.D, {
        label: t,
        children: (0, r.jsxs)("div", {
            className: l.nQ,
            children: [
                (0, r.jsx)(a.E, { className: l.OL, variant: "text-md/normal", children: n }),
                (0, r.jsx)("span", {
                    className: l.OL,
                    children: (0, r.jsxs)(a.E, {
                        variant: "text-md/normal",
                        className: l.Kk,
                        children: [(0, r.jsx)(c, { color: d, size: "sm" }), u],
                    }),
                }),
            ],
        }),
    });
};
