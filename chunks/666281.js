"use strict";
n.d(t, { v: () => o });
var r = n(627968),
    i = n(397927),
    s = n(985018),
    a = n(585125);
let o = (e) => {
    let {
        fieldLabel: t = s.intl.string(s.t["u+Cw58"]),
        label: n,
        value: o,
        Icon: l,
        iconColor: u = i.LU0.colors.ICON_SUBTLE,
    } = e;
    return (0, r.jsx)(i.D0$, {
        label: t,
        children: (0, r.jsxs)("div", {
            className: a.nQ,
            children: [
                (0, r.jsx)(i.Text, { className: a.OL, variant: "text-md/normal", children: n }),
                (0, r.jsx)("span", {
                    className: a.OL,
                    children: (0, r.jsxs)(i.Text, {
                        variant: "text-md/normal",
                        className: a.Kk,
                        children: [(0, r.jsx)(l, { color: u, size: "sm" }), o],
                    }),
                }),
            ],
        }),
    });
};
