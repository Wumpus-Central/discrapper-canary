(c.r(a), c.d(a, { default: () => m }));
var d = c(477900);
c(582128);
let t =
    "https://cdn.discordapp.com/assets/content/27dfe152199455bcd16c27f01cd4e10295760dc97cd82e1a3ad46527da9f8ac3.png";
function s(e) {
    let { alt: a, ariaLabel: c, ariaHidden: s, role: n, width: i = 149, height: r = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: i, height: r },
        src: t,
        srcSet: `${t} 1x, https://cdn.discordapp.com/assets/content/a88a80450e35c933af32c23502780acbe39c4d5e3c08e586acc952ddef87b000.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let n =
    "https://cdn.discordapp.com/assets/content/34c3472ff6eca00106688a22db0dec84a2bb9e43fb223fc7fbc3babc3977f2b3.png";
function i(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: i = 100, height: r = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: i, height: r },
        src: n,
        srcSet: `${n} 1x, https://cdn.discordapp.com/assets/content/b1ed1f10faa336ff3dbf51ee2666f3e78f4faee25ae620211b784eb2ce79b925.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let r =
    "https://cdn.discordapp.com/assets/content/88db4c558e6990ddac80ac023cdc69d9672ea3264938a100b63c154f95b0c432.png";
function l(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: r,
        srcSet: `${r} 1x, https://cdn.discordapp.com/assets/content/6f6a03be2333c2e3b7ac5c65e0c9652598ada30e34d4a4c700efd3c35f40e4b2.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let o =
    "https://cdn.discordapp.com/assets/content/17ff091ccfa9136e09ea68643a3c697527b16d780fed48164e471d259fbe2a56.png";
function f(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: o,
        srcSet: `${o} 1x, https://cdn.discordapp.com/assets/content/b80b0e52163ccbcf8dbbdb5af65cff2bb1958aafa493dfb68e69edc459241ba9.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let h =
    "https://cdn.discordapp.com/assets/content/f0c20e67a625c295733133cce9ed79aa71dd14e4d384dd8f9414d219de4e04ca.png";
function p(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: h,
        srcSet: `${h} 1x, https://cdn.discordapp.com/assets/content/2fc74aec26aa1d678f9152656ecda29a2ee7abb35615c43a19df4f701c21549e.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
var b = c(930055);
function x() {
    return (0, d.jsxs)("div", {
        className: b.Re,
        "aria-hidden": !0,
        children: [
            (0, d.jsx)(s, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
            (0, d.jsx)(i, { alt: "", ariaHidden: !0, width: 50, height: 50 }),
            (0, d.jsx)(l, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
        ],
    });
}
function u(e) {
    let { iconUrl: a } = e;
    return (0, d.jsx)("img", { className: b.rF, src: a, alt: "", "aria-hidden": !0, draggable: !1 });
}
function g(e) {
    let { badgeIconUrls: a = [] } = e,
        [c, t, s] = a;
    return null != c && null == t
        ? (0, d.jsx)("div", { className: b.R2, "aria-hidden": !0, children: (0, d.jsx)(u, { iconUrl: c }) })
        : null != c && null != t && null == s
          ? (0, d.jsxs)("div", {
                className: b.$Z,
                "aria-hidden": !0,
                children: [(0, d.jsx)(u, { iconUrl: t }), (0, d.jsx)(u, { iconUrl: c })],
            })
          : null != c && null != t && null != s
            ? (0, d.jsxs)("div", {
                  className: b.no,
                  "aria-hidden": !0,
                  children: [
                      (0, d.jsx)(u, { iconUrl: t }),
                      (0, d.jsx)(u, { iconUrl: c }),
                      (0, d.jsx)(u, { iconUrl: s }),
                  ],
              })
            : (0, d.jsxs)("div", {
                  className: b.U6,
                  "aria-hidden": !0,
                  children: [
                      (0, d.jsx)(f, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                      (0, d.jsx)(p, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
                      (0, d.jsx)(l, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                  ],
              });
}
function m(e) {
    let { hasProgress: a, badgeIconUrls: c } = e;
    return a ? (0, d.jsx)(g, { badgeIconUrls: c }) : (0, d.jsx)(x, {});
}
