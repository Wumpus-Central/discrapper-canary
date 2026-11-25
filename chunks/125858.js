n.d(t, { b: () => d });
var i = n(477900),
    r = n(582128),
    a = n(62617);
let l =
        "https://cdn.discordapp.com/assets/content/e3ff12ce9ff6af64661e245a86c558e608cffbcb918af93a1114fe79804d7861.png",
    s = `${l} 1x, https://cdn.discordapp.com/assets/content/8f5f221111fa3615d69d879043b508468a28555a8f79f1d8c2c72c02d341f6cd.png 2x, https://cdn.discordapp.com/assets/content/7932e36c4b8669c5e63659892d67e50374cd334d7d34026d428db30055172f4a.png 3x`;
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
