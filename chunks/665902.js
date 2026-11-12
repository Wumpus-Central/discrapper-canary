n.d(t, { m: () => o });
var l = n(477900),
    i = n(582128),
    r = n(62617);
let a =
        "https://cdn.discordapp.com/assets/content/b68abdf7f0b79c135850ee225775b37bc5c0dacfb9b590bc3f1ea58db9cc936d.png",
    s = `${a} 1x, https://cdn.discordapp.com/assets/content/5809f70341bbef0e0ecb3f843e543908271bdf63dfb95ef89e61d9db1c84d1e9.png 2x, https://cdn.discordapp.com/assets/content/3a44b1a9c01ae23b5f8363cd164a8ca92a10d5170d80e89f2727b2a52a8a246e.png 3x`;
function o(e) {
    let { alt: t, ariaLabel: n, ariaHidden: o, role: u, width: d, height: c, className: _, style: f } = e,
        E = i.useMemo(
            () => (0, r.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: f }),
            [d, c, f],
        );
    return (0, l.jsx)("img", {
        style: E,
        src: a,
        srcSet: s,
        className: (0, r.Z)(_),
        alt: t,
        "aria-label": n,
        "aria-hidden": o,
        role: u ?? "img",
    });
}
