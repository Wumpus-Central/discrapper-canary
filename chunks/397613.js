n.d(t, { e: () => l });
var r = n(477900),
    i = n(582128),
    s = n(62617);
function l(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: o, width: a, height: d, className: u, style: c } = e,
        h = i.useMemo(
            () => (0, s.H)({ width: a, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, d, c],
        );
    return (0, r.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/25ad255d2f59df1823aa4ce609aafdb973421d70df2a3755c2a81d27bd608938.svg",
        className: (0, s.Z)(u),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: o ?? "img",
    });
}
