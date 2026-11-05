i.d(t, { A: () => d });
var n = i(477900),
    r = i(582128),
    a = i(503698),
    s = i.n(a),
    l = i(62617);
function o(e) {
    let { alt: t, ariaLabel: i, ariaHidden: a, role: s, width: o, height: _, className: u, style: d } = e,
        S = r.useMemo(
            () => (0, l.H)({ width: o, height: _, intrinsicWidth: 64, intrinsicHeight: 64, style: d }),
            [o, _, d],
        );
    return (0, n.jsx)("img", {
        style: S,
        src: "https://cdn.discordapp.com/assets/content/1da56878f12f10b79b5ef130d0a55e5ded8c8dc5dc29723c27059772a3e42670.svg",
        className: (0, l.Z)(u),
        alt: t,
        "aria-label": i,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var _ = i(403581),
    u = i(512376);
function d(e) {
    let { size: t, iconSize: i, color: r, className: a } = e;
    return (0, n.jsxs)("div", {
        className: s()(u.j, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("div", {
                className: u.q,
                children: (0, n.jsx)(o, { alt: "", ariaHidden: !0, width: t, height: t }),
            }),
            (0, n.jsx)(_.NitroWheelIcon, { size: "custom", width: i, height: i, color: r, className: u.q }),
        ],
    });
}
