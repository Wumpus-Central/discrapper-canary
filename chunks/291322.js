n.d(t, { A: () => c });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(62617);
function o(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: a, width: o, height: u, className: d, style: c } = e,
        S = r.useMemo(
            () => (0, s.H)({ width: o, height: u, intrinsicWidth: 64, intrinsicHeight: 64, style: c }),
            [o, u, c],
        );
    return (0, i.jsx)("img", {
        style: S,
        src: "https://cdn.discordapp.com/assets/content/1da56878f12f10b79b5ef130d0a55e5ded8c8dc5dc29723c27059772a3e42670.svg",
        className: (0, s.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: a ?? "img",
    });
}
var u = n(403581),
    d = n(512376);
function c(e) {
    let { size: t, iconSize: n, color: r, className: l } = e;
    return (0, i.jsxs)("div", {
        className: a()(d.j, l),
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: d.q,
                children: (0, i.jsx)(o, { alt: "", ariaHidden: !0, width: t, height: t }),
            }),
            (0, i.jsx)(u.NitroWheelIcon, { size: "custom", width: n, height: n, color: r, className: d.q }),
        ],
    });
}
