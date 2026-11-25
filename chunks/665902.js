n.d(t, { m: () => d });
var i = n(477900),
    r = n(582128),
    a = n(62617);
let l =
        "https://cdn.discordapp.com/assets/content/b68abdf7f0b79c135850ee225775b37bc5c0dacfb9b590bc3f1ea58db9cc936d.png",
    s = `${l} 1x, https://cdn.discordapp.com/assets/content/5809f70341bbef0e0ecb3f843e543908271bdf63dfb95ef89e61d9db1c84d1e9.png 2x, https://cdn.discordapp.com/assets/content/3a44b1a9c01ae23b5f8363cd164a8ca92a10d5170d80e89f2727b2a52a8a246e.png 3x`;
function d(e) {
    let { alt: t, ariaLabel: n, ariaHidden: d, role: u, width: c, height: o, className: _, style: f } = e,
        E = r.useMemo(
            () => (0, a.H)({ width: c, height: o, intrinsicWidth: 24, intrinsicHeight: 24, style: f }),
            [c, o, f],
        );
    return (0, i.jsx)("img", {
        style: E,
        src: l,
        srcSet: s,
        className: (0, a.Z)(_),
        alt: t,
        "aria-label": n,
        "aria-hidden": d,
        role: u ?? "img",
    });
}
