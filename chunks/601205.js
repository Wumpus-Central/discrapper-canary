i.d(t, { A: () => p });
var n = i(761799),
    r = i(409437),
    o = i(706208),
    a = i(234291),
    s = i(423661),
    l = i(356826),
    u = i(793600),
    c = i(195386),
    d = i(970667),
    f = i(643479);
let p = {
    parseAppMarkers: function (e, t) {
        if (n.A.USE_TIFF && r.A.isTiffFile(e)) return m(r.A.findTiffOffsets(), "tiff", "TIFF");
        if (n.A.USE_JPEG && o.A.isJpegFile(e)) return m(o.A.findJpegOffsets(e), "jpeg", "JPEG");
        if (n.A.USE_PNG && a.Ay.isPngFile(e)) return m(a.Ay.findPngOffsets(e, t), "png", "PNG");
        if (n.A.USE_HEIC && s.A.isHeicFile(e)) return m(s.A.findHeicOffsets(e), "heic", "HEIC");
        if (n.A.USE_AVIF && l.A.isAvifFile(e)) return m(l.A.findAvifOffsets(e), "avif", "AVIF");
        if (n.A.USE_WEBP && u.A.isWebpFile(e)) return m(u.A.findOffsets(e), "webp", "WebP");
        if (n.A.USE_GIF && c.A.isGifFile(e)) return m(c.A.findOffsets(e), "gif", "GIF");
        if (n.A.USE_XMP && d.A.isXMLFile(e)) return m(d.A.findOffsets(e), "xml", "XML");
        throw Error("Invalid image format");
    },
};
function m(e, t, i) {
    return (0, f.dP)({}, e, { fileType: { value: t, description: i } });
}
