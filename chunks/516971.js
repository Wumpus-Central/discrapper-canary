"use strict";
n.d(t, { g: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(32271);
function o(e) {
    let { indicator: t } = e,
        { type: n, icon: i, color: o = "currentColor", className: l, ...u } = t;
    return (0, r.jsx)("div", {
        className: a.iconContainer,
        children: (0, r.jsx)(i, { "aria-hidden": !0, color: o, ...u, className: s()(a.icon, l) }),
    });
}
