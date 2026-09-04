s.d(t, { x: () => r });
var e = s(477900);
s(582128);
let a =
    "https://cdn.discordapp.com/assets/content/9acc3844a9e6540e7cd86c1a0a04f3b97753c0ecdcdb55ccbee989f09a985882.png";
var n = s(977544);
function r(i) {
    let { alt: t, ariaLabel: s, ariaHidden: r, role: c, width: l = 288, height: d = 192 } = i;
    return (0, e.jsx)("img", {
        style: { width: l, height: d },
        src: a,
        srcSet: `${a} 1x, ${n.A} 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": r,
        role: c ?? "img",
    });
}
