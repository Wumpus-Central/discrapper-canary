(a.r(e), a.d(e, { default: () => H }));
var s = a(477900),
    t = a(582128),
    d = a(62617);
let n =
        "https://cdn.discordapp.com/assets/content/8c8c3e223b8c997b254956e97cfa78c9f09d11e91596ca66dccaebba0abda5c0.png",
    i = `${n} 1x, https://cdn.discordapp.com/assets/content/4a9f56445437ee015404becd08d791a8533e8d98507ed09759cb9a5781b963ae.png 2x, https://cdn.discordapp.com/assets/content/9c16e40135c3a418651e2c33526cb836f007e87473559f3c28c5f5812f041476.png 3x`;
function r(c) {
    let { alt: e, ariaLabel: a, ariaHidden: r, role: o, width: l, height: p, className: b, style: h } = c,
        f = t.useMemo(
            () => (0, d.H)({ width: l, height: p, intrinsicWidth: 156, intrinsicHeight: 100, style: h }),
            [l, p, h],
        );
    return (0, s.jsx)("img", {
        style: f,
        src: n,
        srcSet: i,
        className: (0, d.Z)(b),
        alt: e,
        "aria-label": a,
        "aria-hidden": r,
        role: o ?? "img",
    });
}
let o =
        "https://cdn.discordapp.com/assets/content/f673a24d4bc1bc4d95cbec1ec9186b7492cc03c7110ab6c02d4ecc77552cccda.png",
    l = `${o} 1x, https://cdn.discordapp.com/assets/content/c971cbd1e9dee5e0fc5c7b4b414f90990e546d187bc1339de0c0749b13ad639d.png 2x, https://cdn.discordapp.com/assets/content/0ca019c65858dca89944648e90c068ea277d6e0c55e33c297ae55f84f36b0cee.png 3x`;
function p(c) {
    let { alt: e, ariaLabel: a, ariaHidden: n, role: i, width: r, height: p, className: b, style: h } = c,
        f = t.useMemo(
            () => (0, d.H)({ width: r, height: p, intrinsicWidth: 156, intrinsicHeight: 100, style: h }),
            [r, p, h],
        );
    return (0, s.jsx)("img", {
        style: f,
        src: o,
        srcSet: l,
        className: (0, d.Z)(b),
        alt: e,
        "aria-label": a,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
let b =
        "https://cdn.discordapp.com/assets/content/4e7386037eb7480e19dd03fad478675a6aaf99cc7c7b243e428eb0b8e7b9c35b.png",
    h = `${b} 1x, https://cdn.discordapp.com/assets/content/fcc3f91b0eb3f8552dc2b51e8513e6eef89658eae897672c57a40a13a36294d8.png 2x, https://cdn.discordapp.com/assets/content/7badc6a2ba9963659edea7aa8b882f007113c50e64362c5d99cd30840567244f.png 3x`;
function f(c) {
    let { alt: e, ariaLabel: a, ariaHidden: n, role: i, width: r, height: o, className: l, style: p } = c,
        f = t.useMemo(
            () => (0, d.H)({ width: r, height: o, intrinsicWidth: 156, intrinsicHeight: 100, style: p }),
            [r, o, p],
        );
    return (0, s.jsx)("img", {
        style: f,
        src: b,
        srcSet: h,
        className: (0, d.Z)(l),
        alt: e,
        "aria-label": a,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
var g = a(864197),
    m = a(930055);
function x() {
    return (0, s.jsxs)("div", {
        className: m.no,
        "aria-hidden": !0,
        children: [
            (0, s.jsx)(u, {
                iconUrl:
                    "https://cdn.discordapp.com/assets/content/2bddcbc9f9959dab805eb7196c8112ce9dc68b09766c8193ab499b1870e44ac7.svg",
            }),
            (0, s.jsx)(u, {
                iconUrl:
                    "https://cdn.discordapp.com/assets/content/61331d04b7a9542b38bfa59583360c0b9b93c6496a04f99c0ab37fa1d83ec58a.svg",
            }),
            (0, s.jsx)(u, {
                iconUrl:
                    "https://cdn.discordapp.com/assets/content/6fc242e9e8259c471a5e4599cd09af5476e622a572ff235883173913bf506103.svg",
            }),
        ],
    });
}
function u(c) {
    let { iconUrl: e } = c;
    return (0, s.jsx)("img", { className: m.rF, src: e, alt: "", "aria-hidden": !0, draggable: !1 });
}
let j = { single: m.R2, pair: m.$Z, trio: m.no };
function y(c) {
    let { badgeIconUrls: e = [] } = c,
        a = (0, g.g)(e);
    return "fallback" === a.type
        ? (0, s.jsxs)("div", {
              className: m.U6,
              "aria-hidden": !0,
              children: [
                  (0, s.jsx)(r, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                  (0, s.jsx)(p, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
                  (0, s.jsx)(f, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
              ],
          })
        : (0, s.jsx)("div", {
              className: j[a.type],
              "aria-hidden": !0,
              children: a.iconUrls.map((c) => (0, s.jsx)(u, { iconUrl: c }, c)),
          });
}
function H(c) {
    let { hasProgress: e, badgeIconUrls: a } = c;
    return e ? (0, s.jsx)(y, { badgeIconUrls: a }) : (0, s.jsx)(x, {});
}
