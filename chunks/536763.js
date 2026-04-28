"use strict";
n.d(t, { A: () => s });
var l = n(619517),
    i = n(967758);
function s(e) {
    let { src: t, width: n, height: s, hasMultiple: a = !1, options: r } = e,
        { width: o, height: c } = (0, i.A)(a, { width: n, height: s });
    l.Ay.preloadImage({ src: t, dimensions: { maxWidth: o, maxHeight: c, imageWidth: n, imageHeight: s }, options: r });
}
