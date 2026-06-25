"use strict";
n.d(t, { v: () => u });
var i = n(627968),
    r = n(661531),
    s = n(452027),
    a = n(834730),
    o = n(375708),
    l = n(835262);
function u(e) {
    let {
        fieldLabel: t = o.intl.string(o.t["u+Cw58"]),
        label: n,
        value: u,
        Icon: c,
        iconColor: d = r.A.colors.ICON_SUBTLE,
    } = e;
    return (0, i.jsx)(s.D, {
        label: t,
        children: (0, i.jsxs)("div", {
            className: l.nQ,
            children: [
                (0, i.jsx)(a.E, { className: l.OL, variant: "text-md/normal", children: n }),
                (0, i.jsx)("span", {
                    className: l.OL,
                    children: (0, i.jsxs)(a.E, {
                        variant: "text-md/normal",
                        className: l.Kk,
                        children: [(0, i.jsx)(c, { color: d, size: "sm" }), u],
                    }),
                }),
            ],
        }),
    });
}
