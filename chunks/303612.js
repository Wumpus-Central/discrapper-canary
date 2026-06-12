n.d(t, { A: () => u, y: () => c });
var l = n(627968);
n(64700);
var r = n(23339),
    i = n(319060),
    a = n(628677),
    s = n(234914);
let o = (0, r.xI)(i.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function u(e) {
    let { listing: t, imageSize: n, alt: r, ...i } = e,
        s = (0, a.R)(t, n);
    return (0, l.jsx)("img", { src: s, alt: r, ...i });
}
function c(e) {
    let { listing: t, aspectRatio: n = 16 / 9, height: r, ...i } = e,
        u = (r - 2 * o) * n,
        c = (0, a.R)(t, u),
        d = (0, a.R)(t, u, { shouldAnimate: !1 });
    return (0, l.jsx)(s.A, { src: c, backgroundSrc: d, aspectRatio: n, ...i });
}
