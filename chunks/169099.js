a.d(t, { r: () => i });
var n = a(477900),
    r = a(582128),
    s = a(62617);
function i(e) {
    let { alt: t, ariaLabel: a, ariaHidden: i, role: c, width: o, height: u, className: d, style: l } = e,
        h = r.useMemo(
            () => (0, s.H)({ width: o, height: u, intrinsicWidth: 288, intrinsicHeight: 162, style: l }),
            [o, u, l],
        );
    return (0, n.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/f7e273b7dc25e6660e31315b01153be32ddbbb5d2934b9021b70aff085d022b2.svg",
        className: (0, s.Z)(d),
        alt: t,
        "aria-label": a,
        "aria-hidden": i,
        role: c ?? "img",
    });
}
