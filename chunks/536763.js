e.d(t, { A: () => a });
var h = e(619517),
    d = e(967758);
function a(i) {
    let { src: t, width: e, height: a, hasMultiple: n = !1, options: r } = i,
        { width: g, height: s } = (0, d.A)(n, { width: e, height: a });
    h.Ay.preloadImage({ src: t, dimensions: { maxWidth: g, maxHeight: s, imageWidth: e, imageHeight: a }, options: r });
}
