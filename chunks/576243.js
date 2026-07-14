"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r);
function s(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: s = 64, height: l = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/b4c92c606882186980d1bfda32ba55d54eae27a6ab3b25bc4e1d57b6df3b1f2b.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
var l = n(403581),
    o = n(927073);
function d(e) {
    let { size: t, iconSize: n, color: r, className: d } = e;
    return (0, i.jsxs)("div", {
        className: a()(o.j, d),
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: o.q,
                children: (0, i.jsx)(s, { alt: "", ariaHidden: !0, width: t, height: t }),
            }),
            (0, i.jsx)(l.t, { size: "custom", width: n, height: n, color: r, className: o.q }),
        ],
    });
}
