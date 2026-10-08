n.d(t, { n: () => s });
var l = n(477900),
    i = n(582128),
    r = n(62617);
function s(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: a, width: o, height: u, className: c, style: d } = e,
        h = i.useMemo(
            () => (0, r.H)({ width: o, height: u, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [o, u, d],
        );
    return (0, l.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/c561ce5c9866c0bdb3f8c9dc43164f873414c3d905d1ab4beace8020dc4933fc.svg",
        className: (0, r.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: a ?? "img",
    });
}
