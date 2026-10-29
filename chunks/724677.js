i.d(t, { H: () => a });
var s = i(477900),
    n = i(582128),
    r = i(62617);
function a(e) {
    let { alt: t, ariaLabel: i, ariaHidden: a, role: l, size: o = 64 } = e,
        c = n.useMemo(() => (0, r.H)({ width: o, height: o, intrinsicWidth: 64, intrinsicHeight: 64 }), [o]);
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/cb869ee40a8ed5d6210e69a02cebbf03025be47006b310ec2564f74f6ad1dff8.svg",
        className: (0, r.Z)(),
        alt: t,
        "aria-label": i,
        "aria-hidden": a,
        role: l ?? "img",
    });
}
