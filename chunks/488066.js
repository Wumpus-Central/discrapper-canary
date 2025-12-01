n.d(t, { Z: () => p });
var r = n(791473),
    i = n(246806),
    a = n(200508),
    o = n(649793),
    s = n(506438),
    l = n(379135),
    c = n(357502),
    u = n(465178),
    d = n(849856),
    f = n(822632);
let p = { parseAppMarkers: _ };
function _(e, t) {
    if (r.Z.USE_TIFF && i.Z.isTiffFile(e)) return m(i.Z.findTiffOffsets(), "tiff", "TIFF");
    if (r.Z.USE_JPEG && a.Z.isJpegFile(e)) return m(a.Z.findJpegOffsets(e), "jpeg", "JPEG");
    if (r.Z.USE_PNG && o.ZP.isPngFile(e)) return m(o.ZP.findPngOffsets(e, t), "png", "PNG");
    if (r.Z.USE_HEIC && s.Z.isHeicFile(e)) return m(s.Z.findHeicOffsets(e), "heic", "HEIC");
    if (r.Z.USE_AVIF && l.Z.isAvifFile(e)) return m(l.Z.findAvifOffsets(e), "avif", "AVIF");
    if (r.Z.USE_WEBP && c.Z.isWebpFile(e)) return m(c.Z.findOffsets(e), "webp", "WebP");
    if (r.Z.USE_GIF && u.Z.isGifFile(e)) return m(u.Z.findOffsets(e), "gif", "GIF");
    if (r.Z.USE_XMP && d.Z.isXMLFile(e)) return m(d.Z.findOffsets(e), "xml", "XML");
    throw Error("Invalid image format");
}
function m(e, t, n) {
    return (0, f.wB)({}, e, {
        fileType: {
            value: t,
            description: n,
        },
    });
}
