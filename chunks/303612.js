n.d(t, { A: () => u, y: () => c });
var l = n(627968);
n(64700);
var i = n(23339),
    r = n(319060),
    a = n(628677),
    s = n(234914);
let o = (0, i.xI)(r.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function u(e) {
    let { listing: t, imageSize: n, alt: i, ...r } = e,
        s = (0, a.R)(t, n);
    return (0, l.jsx)("img", { src: s, alt: i, ...r });
}
function c(e) {
    let { listing: t, aspectRatio: n = 16 / 9, height: i, ...r } = e,
        u = (i - 2 * o) * n,
        c = (0, a.R)(t, u),
        d = (0, a.R)(t, u, { shouldAnimate: !1 });
    return (0, l.jsx)(s.A, { src: c, backgroundSrc: d, aspectRatio: n, ...r });
}
