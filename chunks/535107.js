(c.r(e), c.d(e, { default: () => w }));
var d = c(477900);
c(582128);
let t =
    "https://cdn.discordapp.com/assets/content/27dfe152199455bcd16c27f01cd4e10295760dc97cd82e1a3ad46527da9f8ac3.png";
function s(a) {
    let { alt: e, ariaLabel: c, ariaHidden: s, role: i, width: n = 149, height: r = 100 } = a;
    return (0, d.jsx)("img", {
        style: { width: n, height: r },
        src: t,
        srcSet: `${t} 1x, https://cdn.discordapp.com/assets/content/a88a80450e35c933af32c23502780acbe39c4d5e3c08e586acc952ddef87b000.png 2x`,
        alt: e,
        "aria-label": c,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
let i =
    "https://cdn.discordapp.com/assets/content/d83ff62c1eff1828addc83a675c7d4348319c84c6a25b775c291ea935d2b0328.png";
function n(a) {
    let { alt: e, ariaLabel: c, ariaHidden: t, role: s, width: n = 100, height: r = 100 } = a;
    return (0, d.jsx)("img", {
        style: { width: n, height: r },
        src: i,
        srcSet: `${i} 1x, https://cdn.discordapp.com/assets/content/cd6b82fbab858cd39a2efad4835334f7cade17094e90439012efd3f0fb7f6e64.png 2x`,
        alt: e,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let r =
    "https://cdn.discordapp.com/assets/content/88db4c558e6990ddac80ac023cdc69d9672ea3264938a100b63c154f95b0c432.png";
function l(a) {
    let { alt: e, ariaLabel: c, ariaHidden: t, role: s, width: i = 100, height: n = 100 } = a;
    return (0, d.jsx)("img", {
        style: { width: i, height: n },
        src: r,
        srcSet: `${r} 1x, https://cdn.discordapp.com/assets/content/6f6a03be2333c2e3b7ac5c65e0c9652598ada30e34d4a4c700efd3c35f40e4b2.png 2x`,
        alt: e,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let o =
    "https://cdn.discordapp.com/assets/content/17ff091ccfa9136e09ea68643a3c697527b16d780fed48164e471d259fbe2a56.png";
function p(a) {
    let { alt: e, ariaLabel: c, ariaHidden: t, role: s, width: i = 100, height: n = 100 } = a;
    return (0, d.jsx)("img", {
        style: { width: i, height: n },
        src: o,
        srcSet: `${o} 1x, https://cdn.discordapp.com/assets/content/b80b0e52163ccbcf8dbbdb5af65cff2bb1958aafa493dfb68e69edc459241ba9.png 2x`,
        alt: e,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let f =
    "https://cdn.discordapp.com/assets/content/f0c20e67a625c295733133cce9ed79aa71dd14e4d384dd8f9414d219de4e04ca.png";
function h(a) {
    let { alt: e, ariaLabel: c, ariaHidden: t, role: s, width: i = 100, height: n = 100 } = a;
    return (0, d.jsx)("img", {
        style: { width: i, height: n },
        src: f,
        srcSet: `${f} 1x, https://cdn.discordapp.com/assets/content/2fc74aec26aa1d678f9152656ecda29a2ee7abb35615c43a19df4f701c21549e.png 2x`,
        alt: e,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
var b = c(864197),
    g = c(930055);
function x() {
    return (0, d.jsxs)("div", {
        className: g.Re,
        "aria-hidden": !0,
        children: [
            (0, d.jsx)(s, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
            (0, d.jsx)(n, { alt: "", ariaHidden: !0, width: 50, height: 50 }),
            (0, d.jsx)(l, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
        ],
    });
}
function m(a) {
    let { iconUrl: e } = a;
    return (0, d.jsx)("img", { className: g.rF, src: e, alt: "", "aria-hidden": !0, draggable: !1 });
}
let u = { single: g.R2, pair: g.$Z, trio: g.no };
function j(a) {
    let { badgeIconUrls: e = [] } = a,
        c = (0, b.g)(e);
    return "fallback" === c.type
        ? (0, d.jsxs)("div", {
              className: g.U6,
              "aria-hidden": !0,
              children: [
                  (0, d.jsx)(p, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                  (0, d.jsx)(h, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
                  (0, d.jsx)(l, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
              ],
          })
        : (0, d.jsx)("div", {
              className: u[c.type],
              "aria-hidden": !0,
              children: c.iconUrls.map((a) => (0, d.jsx)(m, { iconUrl: a }, a)),
          });
}
function w(a) {
    let { hasProgress: e, badgeIconUrls: c } = a;
    return e ? (0, d.jsx)(j, { badgeIconUrls: c }) : (0, d.jsx)(x, {});
}
