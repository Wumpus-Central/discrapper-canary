n.d(t, { l: () => s });
var i = n(477900),
    r = n(582128),
    a = n(62617);
function s(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: l, width: o, height: d, className: c, style: u } = e,
        _ = r.useMemo(
            () => (0, a.H)({ width: o, height: d, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [o, d, u],
        );
    return (0, i.jsx)("img", {
        style: _,
        src: "https://cdn.discordapp.com/assets/content/f7a6b755e6c2a5228c797a994ec09f9689fd695cafb96eae119c82f72edfe50d.svg",
        className: (0, a.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: l ?? "img",
    });
}
