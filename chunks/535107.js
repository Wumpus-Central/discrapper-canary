(c.r(a), c.d(a, { default: () => w }));
var t = c(477900);
c(582128);
let d =
    "https://cdn.discordapp.com/assets/content/27dfe152199455bcd16c27f01cd4e10295760dc97cd82e1a3ad46527da9f8ac3.png";
function s(e) {
    let { alt: a, ariaLabel: c, ariaHidden: s, role: i, width: n = 149, height: r = 100 } = e;
    return (0, t.jsx)("img", {
        style: { width: n, height: r },
        src: d,
        srcSet: `${d} 1x, https://cdn.discordapp.com/assets/content/a88a80450e35c933af32c23502780acbe39c4d5e3c08e586acc952ddef87b000.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
let i =
    "https://cdn.discordapp.com/assets/content/34c3472ff6eca00106688a22db0dec84a2bb9e43fb223fc7fbc3babc3977f2b3.png";
function n(e) {
    let { alt: a, ariaLabel: c, ariaHidden: d, role: s, width: n = 100, height: r = 100 } = e;
    return (0, t.jsx)("img", {
        style: { width: n, height: r },
        src: i,
        srcSet: `${i} 1x, https://cdn.discordapp.com/assets/content/b1ed1f10faa336ff3dbf51ee2666f3e78f4faee25ae620211b784eb2ce79b925.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": d,
        role: s ?? "img",
    });
}
let r =
    "https://cdn.discordapp.com/assets/content/88db4c558e6990ddac80ac023cdc69d9672ea3264938a100b63c154f95b0c432.png";
function l(e) {
    let { alt: a, ariaLabel: c, ariaHidden: d, role: s, width: i = 100, height: n = 100 } = e;
    return (0, t.jsx)("img", {
        style: { width: i, height: n },
        src: r,
        srcSet: `${r} 1x, https://cdn.discordapp.com/assets/content/6f6a03be2333c2e3b7ac5c65e0c9652598ada30e34d4a4c700efd3c35f40e4b2.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": d,
        role: s ?? "img",
    });
}
let f =
    "https://cdn.discordapp.com/assets/content/17ff091ccfa9136e09ea68643a3c697527b16d780fed48164e471d259fbe2a56.png";
function o(e) {
    let { alt: a, ariaLabel: c, ariaHidden: d, role: s, width: i = 100, height: n = 100 } = e;
    return (0, t.jsx)("img", {
        style: { width: i, height: n },
        src: f,
        srcSet: `${f} 1x, https://cdn.discordapp.com/assets/content/b80b0e52163ccbcf8dbbdb5af65cff2bb1958aafa493dfb68e69edc459241ba9.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": d,
        role: s ?? "img",
    });
}
let p =
    "https://cdn.discordapp.com/assets/content/f0c20e67a625c295733133cce9ed79aa71dd14e4d384dd8f9414d219de4e04ca.png";
function b(e) {
    let { alt: a, ariaLabel: c, ariaHidden: d, role: s, width: i = 100, height: n = 100 } = e;
    return (0, t.jsx)("img", {
        style: { width: i, height: n },
        src: p,
        srcSet: `${p} 1x, https://cdn.discordapp.com/assets/content/2fc74aec26aa1d678f9152656ecda29a2ee7abb35615c43a19df4f701c21549e.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": d,
        role: s ?? "img",
    });
}
var h = c(864197),
    g = c(930055);
function x() {
    return (0, t.jsxs)("div", {
        className: g.Re,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)(s, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
            (0, t.jsx)(n, { alt: "", ariaHidden: !0, width: 50, height: 50 }),
            (0, t.jsx)(l, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
        ],
    });
}
function m(e) {
    let { iconUrl: a } = e;
    return (0, t.jsx)("img", { className: g.rF, src: a, alt: "", "aria-hidden": !0, draggable: !1 });
}
let u = { single: g.R2, pair: g.$Z, trio: g.no };
function j(e) {
    let { badgeIconUrls: a = [] } = e,
        c = (0, h.g)(a);
    return "fallback" === c.type
        ? (0, t.jsxs)("div", {
              className: g.U6,
              "aria-hidden": !0,
              children: [
                  (0, t.jsx)(o, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                  (0, t.jsx)(b, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
                  (0, t.jsx)(l, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
              ],
          })
        : (0, t.jsx)("div", {
              className: u[c.type],
              "aria-hidden": !0,
              children: c.iconUrls.map((e) => (0, t.jsx)(m, { iconUrl: e }, e)),
          });
}
function w(e) {
    let { hasProgress: a, badgeIconUrls: c } = e;
    return a ? (0, t.jsx)(j, { badgeIconUrls: c }) : (0, t.jsx)(x, {});
}
