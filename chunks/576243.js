l.d(t, { A: () => c });
var n = l(477900);
l(582128);
var i = l(503698),
    a = l.n(i);
function r(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: r = 64, height: s = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: s },
        src: "https://cdn.discordapp.com/assets/content/1da56878f12f10b79b5ef130d0a55e5ded8c8dc5dc29723c27059772a3e42670.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var s = l(403581),
    o = l(512376);
function c(e) {
    let { size: t, iconSize: l, color: i, className: c } = e;
    return (0, n.jsxs)("div", {
        className: a()(o.j, c),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("div", {
                className: o.q,
                children: (0, n.jsx)(r, { alt: "", ariaHidden: !0, width: t, height: t }),
            }),
            (0, n.jsx)(s.t, { size: "custom", width: l, height: l, color: i, className: o.q }),
        ],
    });
}
