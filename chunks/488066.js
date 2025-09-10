n.d(t, { Z: () => _ });
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
let _ = { parseAppMarkers: p };
function p(e, t) {
    if (r.Z.USE_TIFF && i.Z.isTiffFile(e)) return h(i.Z.findTiffOffsets(), "tiff", "TIFF");
    if (r.Z.USE_JPEG && a.Z.isJpegFile(e)) return h(a.Z.findJpegOffsets(e), "jpeg", "JPEG");
    if (r.Z.USE_PNG && o.ZP.isPngFile(e)) return h(o.ZP.findPngOffsets(e, t), "png", "PNG");
    if (r.Z.USE_HEIC && s.Z.isHeicFile(e)) return h(s.Z.findHeicOffsets(e), "heic", "HEIC");
    if (r.Z.USE_AVIF && l.Z.isAvifFile(e)) return h(l.Z.findAvifOffsets(e), "avif", "AVIF");
    if (r.Z.USE_WEBP && c.Z.isWebpFile(e)) return h(c.Z.findOffsets(e), "webp", "WebP");
    if (r.Z.USE_GIF && u.Z.isGifFile(e)) return h(u.Z.findOffsets(e), "gif", "GIF");
    if (r.Z.USE_XMP && d.Z.isXMLFile(e)) return h(d.Z.findOffsets(e), "xml", "XML");
    throw Error("Invalid image format");
}
function h(e, t, n) {
    return (0, f.wB)({}, e, {
        fileType: {
            value: t,
            description: n,
        },
    });
}
