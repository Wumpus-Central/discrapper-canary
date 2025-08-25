n.d(t, { Z: () => _ });
var r = n(441349),
    i = n(93856),
    o = n(635927),
    a = n(906597),
    s = n(254797),
    l = n(837437),
    c = n(853879),
    u = n(170053),
    d = n(992374),
    f = n(463424);
let _ = { parseAppMarkers: p };
function p(e, t) {
    if (r.Z.USE_TIFF && i.Z.isTiffFile(e)) return h(i.Z.findTiffOffsets(), "tiff", "TIFF");
    if (r.Z.USE_JPEG && o.Z.isJpegFile(e)) return h(o.Z.findJpegOffsets(e), "jpeg", "JPEG");
    if (r.Z.USE_PNG && a.ZP.isPngFile(e)) return h(a.ZP.findPngOffsets(e, t), "png", "PNG");
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
