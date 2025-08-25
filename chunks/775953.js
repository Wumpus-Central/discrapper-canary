async function r(e, t = {}) {
    let { width: n, height: i } = getImageSize(e, t),
        a = await cloneNode(e, t, !0);
    return await embedWebFonts(a, t), await embedImages(a, t), applyStyle(a, t), await nodeToDataURL(a, n, i);
}
n(68133), n(431462), n(51466), n(754396), n(961742);
