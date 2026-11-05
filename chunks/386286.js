s.d(t, { x: () => d });
var e = s(477900),
    a = s(582128),
    n = s(62617);
let c =
    "https://cdn.discordapp.com/assets/content/f7cf8ffdd8a0357829b6e27c4ae850ad7601bcd454fa80d64ea21454351bfcc3.png";
var r = s(977544);
let l = `${c} 1x, ${r.A} 2x, https://cdn.discordapp.com/assets/content/8285584fe433b1ae0607cea8372c70e24395b1cd732de13153951c0b42811553.png 3x`;
function d(i) {
    let { alt: t, ariaLabel: s, ariaHidden: r, role: d, width: o, height: x, className: m, style: h } = i,
        p = a.useMemo(
            () => (0, n.H)({ width: o, height: x, intrinsicWidth: 288, intrinsicHeight: 192, style: h }),
            [o, x, h],
        );
    return (0, e.jsx)("img", {
        style: p,
        src: c,
        srcSet: l,
        className: (0, n.Z)(m),
        alt: t,
        "aria-label": s,
        "aria-hidden": r,
        role: d ?? "img",
    });
}
