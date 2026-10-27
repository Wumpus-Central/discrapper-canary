n.d(t, { I: () => l });
var i = n(477900),
    s = n(582128),
    r = n(62617);
function l(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: a, width: o, height: c, className: d, style: u } = e,
        h = s.useMemo(
            () => (0, r.H)({ width: o, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [o, c, u],
        );
    return (0, i.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/804d87fc1c1330e6413159eaacc359de89bdfbec7b4602532b1bd074868783c8.svg",
        className: (0, r.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: a ?? "img",
    });
}
