"use strict";
n.d(t, { X: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(68379);
let r = (e) => {
    let { title: t, subtitle: n, icon: r } = e;
    return (0, i.jsxs)("div", {
        className: l.iE,
        children: [
            null != r && (0, i.jsx)(r, { size: "xs", color: "currentColor", className: l.Kk }),
            (0, i.jsx)(s.Text, { variant: "text-md/normal", className: l.DD, children: t }),
            null != n && "" !== n
                ? (0, i.jsx)(s.Text, { variant: "text-xs/semibold", className: l.VA, children: n })
                : null,
        ],
    });
};
