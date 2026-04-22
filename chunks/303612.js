n.d(t, { A: () => d, y: () => c });
var i = n(627968);
n(64700);
var l = n(23339),
    s = n(319060),
    r = n(492749),
    a = n(234914);
let o = (0, l.xI)(s.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function d(e) {
    let { listing: t, imageSize: n, alt: l, ...s } = e,
        a = (0, r.R)(t, n);
    return (0, i.jsx)("img", { src: a, alt: l, ...s });
}
function c(e) {
    let { listing: t, aspectRatio: n = 16 / 9, height: l, ...s } = e,
        d = (l - 2 * o) * n,
        c = (0, r.R)(t, d),
        u = (0, r.R)(t, d, { shouldAnimate: !1 });
    return (0, i.jsx)(a.A, { src: c, backgroundSrc: u, aspectRatio: n, ...s });
}
