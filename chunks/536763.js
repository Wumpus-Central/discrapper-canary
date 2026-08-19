"use strict";
n.d(t, { A: () => s });
var l = n(619517),
    i = n(967758);
function s(e) {
    let { src: t, width: n, height: s, hasMultiple: r = !1, options: a } = e,
        { width: o, height: u } = (0, i.A)(r, { width: n, height: s });
    l.Ay.preloadImage({ src: t, dimensions: { maxWidth: o, maxHeight: u, imageWidth: n, imageHeight: s }, options: a });
}
