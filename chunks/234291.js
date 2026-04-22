i.d(t, {
    Ay: () => o,
    HL: () => f,
    J$: () => h,
    LO: () => c,
    LV: () => s,
    XU: () => u,
    Xo: () => p,
    aA: () => m,
    eZ: () => g,
    vW: () => l,
});
var n = i(643479),
    r = i(761799);
let o = {
        isPngFile: function (e) {
            return !!e && (0, n.hT)(e, 0, a.length) === a;
        },
        findPngOffsets: function (e, t) {
            let i = { hasAppMarkers: !1 },
                o = a.length;
            for (; o + 4 + s <= e.byteLength; ) {
                var y, A, v, T, b, P, S, F, I, C;
                if (r.A.USE_PNG_FILE && ((y = e), (A = o), "IHDR" === (0, n.hT)(y, A + u, s)))
                    (i.hasAppMarkers = !0), (i.pngHeaderOffset = o + c);
                else {
                    if (
                        r.A.USE_XMP &&
                        ((v = e), (T = o), (0, n.hT)(v, T + u, s) === p && (0, n.hT)(v, T + c, d.length) === d)
                    ) {
                        let t = (function (e, t) {
                            t += c + d.length + 1 + 1;
                            let i = 0;
                            for (; i < 2 && t < e.byteLength; ) 0 === e.getUint8(t) && i++, t++;
                            if (!(i < 2)) return t;
                        })(e, o);
                        void 0 !== t &&
                            ((i.hasAppMarkers = !0),
                            (i.xmpChunks = [{ dataOffset: t, length: e.getUint32(o + l) - (t - (o + c)) }]));
                    } else if (
                        (function (e, t, i) {
                            let r = (0, n.hT)(e, t + u, s);
                            return r === f || r === p || (r === m && i);
                        })(e, o, t)
                    ) {
                        i.hasAppMarkers = !0;
                        let t = (0, n.hT)(e, o + u, s);
                        i.pngTextChunks || (i.pngTextChunks = []),
                            i.pngTextChunks.push({ length: e.getUint32(o + l), type: t, offset: o + c });
                    } else {
                        if (((b = e), (P = o), "eXIf" === (0, n.hT)(b, P + u, s)))
                            (i.hasAppMarkers = !0), (i.tiffHeaderOffset = o + c);
                        else {
                            if (r.A.USE_ICC && t && ((S = e), (F = o), "iCCP" === (0, n.hT)(S, F + u, s))) {
                                i.hasAppMarkers = !0;
                                let t = e.getUint32(o + l),
                                    r = o + c,
                                    {
                                        profileName: a,
                                        compressionMethod: s,
                                        compressedProfileOffset: u,
                                    } = (function (e, t) {
                                        let i = (0, n.BD)(e, t);
                                        return (
                                            (t += i.length + 1),
                                            {
                                                profileName: i,
                                                compressionMethod: e.getUint8(t),
                                                compressedProfileOffset: (t += 1),
                                            }
                                        );
                                    })(e, r);
                                i.iccChunks || (i.iccChunks = []),
                                    i.iccChunks.push({
                                        offset: u,
                                        length: t - (u - r),
                                        chunkNumber: 1,
                                        chunksTotal: 1,
                                        profileName: a,
                                        compressionMethod: s,
                                    });
                            } else {
                                (I = e),
                                    (C = o),
                                    [g, h].includes((0, n.hT)(I, C + u, s)) &&
                                        ((i.hasAppMarkers = !0),
                                        i.pngChunkOffsets || (i.pngChunkOffsets = []),
                                        i.pngChunkOffsets.push(o + l));
                            }
                        }
                    }
                }
                o += e.getUint32(o + l) + 4 + s + 4;
            }
            return i;
        },
    },
    a = "\x89PNG\r\n\x1a\n",
    s = 4,
    l = 0,
    u = 4,
    c = 8,
    d = "XML:com.adobe.xmp\0",
    f = "tEXt",
    p = "iTXt",
    m = "zTXt",
    g = "pHYs",
    h = "tIME";
