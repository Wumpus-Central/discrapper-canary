n.d(t, { A: () => c });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(62617);
function o(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: s, width: o, height: u, className: d, style: c } = e,
        S = r.useMemo(
            () => (0, l.H)({ width: o, height: u, intrinsicWidth: 64, intrinsicHeight: 64, style: c }),
            [o, u, c],
        );
    return (0, i.jsx)("img", {
        style: S,
        src: "https://cdn.discordapp.com/assets/content/1da56878f12f10b79b5ef130d0a55e5ded8c8dc5dc29723c27059772a3e42670.svg",
        className: (0, l.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var u = n(403581),
    d = n(512376);
function c(e) {
    let { size: t, iconSize: n, color: r, className: a } = e;
    return (0, i.jsxs)("div", {
        className: s()(d.j, a),
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
