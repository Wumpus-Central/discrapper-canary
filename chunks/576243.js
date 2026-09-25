l.d(t, { A: () => h });
var i = l(477900);
l(582128);
var a = l(503698),
    n = l.n(a);
function s(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: n, width: s = 64, height: r = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/1da56878f12f10b79b5ef130d0a55e5ded8c8dc5dc29723c27059772a3e42670.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: n ?? "img",
    });
}
var r = l(403581),
    c = l(512376);
function h(e) {
    let { size: t, iconSize: l, color: a, className: h } = e;
    return (0, i.jsxs)("div", {
        className: n()(c.j, h),
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: c.q,
                children: (0, i.jsx)(s, { alt: "", ariaHidden: !0, width: t, height: t }),
            }),
            (0, i.jsx)(r.t, { size: "custom", width: l, height: l, color: a, className: c.q }),
        ],
    });
}
