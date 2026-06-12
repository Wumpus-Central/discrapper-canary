"use strict";
n.d(t, { A: () => s });
var i = n(619517),
    r = n(967758);
function s(e) {
    let { src: t, width: n, height: s, hasMultiple: a = !1, options: o } = e,
        { width: l, height: u } = (0, r.A)(a, { width: n, height: s });
    i.Ay.preloadImage({ src: t, dimensions: { maxWidth: l, maxHeight: u, imageWidth: n, imageHeight: s }, options: o });
}
