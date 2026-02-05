"use strict";
async function r(e, t = {}) {
    let { width: n, height: i } = getImageSize(e, t),
        a = await cloneNode(e, t, !0);
    return await embedWebFonts(a, t), await embedImages(a, t), applyStyle(a, t), await nodeToDataURL(a, n, i);
}
n(673299), n(162213), n(53691), n(154963), n(186659);
