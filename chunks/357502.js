n.d(t, { Z: () => a });
var r = n(822632),
    i = n(791473);
let a = {
    isWebpFile: o,
    findOffsets: s,
};
function o(e) {
    let t = 0,
        n = "RIFF",
        i = 8,
        a = "WEBP";
    return !!e && (0, r.oH)(e, t, n.length) === n && (0, r.oH)(e, i, a.length) === a;
}
function s(e) {
    let t,
        n,
        a,
        o,
        s = 4,
        l = "Exif\0\0",
        c = 8,
        u = 12,
        d = !1;
    for (; u + c < e.byteLength; ) {
        let f = (0, r.oH)(e, u, 4),
            p = e.getUint32(u + s, !0);
        i.Z.USE_EXIF && "EXIF" === f
            ? ((d = !0), (t = (0, r.oH)(e, u + c, l.length) === l ? u + c + l.length : u + c))
            : i.Z.USE_XMP && "XMP " === f
              ? ((d = !0),
                (n = [
                    {
                        dataOffset: u + c,
                        length: p,
                    },
                ]))
              : i.Z.USE_ICC && "ICCP" === f
                ? ((d = !0),
                  (a = [
                      {
                          offset: u + c,
                          length: p,
                          chunkNumber: 1,
                          chunksTotal: 1,
                      },
                  ]))
                : "VP8X" === f && ((d = !0), (o = u + c)),
            (u += c + (p % 2 == 0 ? p : p + 1));
    }
    return {
        hasAppMarkers: d,
        tiffHeaderOffset: t,
        xmpChunks: n,
        iccChunks: a,
        vp8xChunkOffset: o,
    };
}
