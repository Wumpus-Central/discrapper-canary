s.d(t, { x: () => r });
var a = s(477900);
s(582128);
let e =
    "https://cdn.discordapp.com/assets/content/f7cf8ffdd8a0357829b6e27c4ae850ad7601bcd454fa80d64ea21454351bfcc3.png";
var n = s(977544);
function r(i) {
    let { alt: t, ariaLabel: s, ariaHidden: r, role: c, width: l = 288, height: d = 192 } = i;
    return (0, a.jsx)("img", {
        style: { width: l, height: d },
        src: e,
        srcSet: `${e} 1x, ${n.A} 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": r,
        role: c ?? "img",
    });
}
