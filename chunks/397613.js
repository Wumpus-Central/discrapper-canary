n.d(t, { e: () => s });
var r = n(477900),
    i = n(582128),
    l = n(62617);
function s(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: o, width: a, height: d, className: u, style: c } = e,
        h = i.useMemo(
            () => (0, l.H)({ width: a, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, d, c],
        );
    return (0, r.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/25ad255d2f59df1823aa4ce609aafdb973421d70df2a3755c2a81d27bd608938.svg",
        className: (0, l.Z)(u),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: o ?? "img",
    });
}
