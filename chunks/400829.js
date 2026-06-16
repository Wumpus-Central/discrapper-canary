i.d(t, { D: () => c });
var a = i(627968);
i(64700);
let e =
    "https://cdn.discordapp.com/assets/content/c32c3094f835752871036a54f064a64c2529e643b14db4b6c9695777fce854a2.png";
function c(s) {
    let { alt: t, ariaLabel: i, ariaHidden: c, role: n, width: d = 288, height: r = 192 } = s;
    return (0, a.jsx)("img", {
        style: { width: d, height: r },
        src: e,
        srcSet: `${e} 1x, https://cdn.discordapp.com/assets/content/5b64487ae750fc26cd0dc918c77445068d18b74b68d888d2155b7ac2a3cacda6.png 2x`,
        alt: t,
        "aria-label": i,
        "aria-hidden": c,
        role: n ?? "img",
    });
}
