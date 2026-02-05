"use strict";
n.d(t, { A: () => f });
var r = n(761799),
    i = n(409437),
    a = n(706208),
    s = n(234291),
    o = n(423661),
    l = n(356826),
    u = n(793600),
    c = n(195386),
    d = n(970667),
    _ = n(643479);
let f = { parseAppMarkers: p };
function p(e, t) {
    if (r.A.USE_TIFF && i.A.isTiffFile(e)) return h(i.A.findTiffOffsets(), "tiff", "TIFF");
    if (r.A.USE_JPEG && a.A.isJpegFile(e)) return h(a.A.findJpegOffsets(e), "jpeg", "JPEG");
    if (r.A.USE_PNG && s.Ay.isPngFile(e)) return h(s.Ay.findPngOffsets(e, t), "png", "PNG");
    if (r.A.USE_HEIC && o.A.isHeicFile(e)) return h(o.A.findHeicOffsets(e), "heic", "HEIC");
    if (r.A.USE_AVIF && l.A.isAvifFile(e)) return h(l.A.findAvifOffsets(e), "avif", "AVIF");
    if (r.A.USE_WEBP && u.A.isWebpFile(e)) return h(u.A.findOffsets(e), "webp", "WebP");
    if (r.A.USE_GIF && c.A.isGifFile(e)) return h(c.A.findOffsets(e), "gif", "GIF");
    if (r.A.USE_XMP && d.A.isXMLFile(e)) return h(d.A.findOffsets(e), "xml", "XML");
    throw Error("Invalid image format");
}
function h(e, t, n) {
    return (0, _.dP)({}, e, { fileType: { value: t, description: n } });
}
