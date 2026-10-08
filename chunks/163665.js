n.d(t, { I: () => s });
var i = n(477900),
    l = n(582128),
    r = n(62617);
function s(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: a, width: o, height: d, className: c, style: u } = e,
        A = l.useMemo(
            () => (0, r.H)({ width: o, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [o, d, u],
        );
    return (0, i.jsx)("img", {
        style: A,
        src: "https://cdn.discordapp.com/assets/content/804d87fc1c1330e6413159eaacc359de89bdfbec7b4602532b1bd074868783c8.svg",
        className: (0, r.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: a ?? "img",
    });
}
