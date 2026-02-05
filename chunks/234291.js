"use strict";
n.d(t, {
    Ay: () => a,
    HL: () => f,
    J$: () => g,
    LO: () => d,
    LV: () => l,
    XU: () => c,
    Xo: () => p,
    aA: () => h,
    eZ: () => m,
    vW: () => u,
});
var r = n(643479),
    i = n(761799);
let a = { isPngFile: I, findPngOffsets: T },
    s = "\x89PNG\r\n\x1a\n",
    o = 4,
    l = 4,
    u = 0,
    c = 4,
    d = 8,
    _ = "XML:com.adobe.xmp\0",
    f = "tEXt",
    p = "iTXt",
    h = "zTXt",
    m = "pHYs",
    g = "tIME",
    E = "eXIf",
    A = "iCCP";
function I(e) {
    return !!e && (0, r.hT)(e, 0, s.length) === s;
}
function T(e, t) {
    let n = 4,
        a = { hasAppMarkers: !1 },
        _ = s.length;
    for (; _ + o + l <= e.byteLength; ) {
        if (i.A.USE_PNG_FILE && y(e, _)) (a.hasAppMarkers = !0), (a.pngHeaderOffset = _ + d);
        else if (i.A.USE_XMP && S(e, _)) {
            let t = R(e, _);
            void 0 !== t &&
                ((a.hasAppMarkers = !0),
                (a.xmpChunks = [{ dataOffset: t, length: e.getUint32(_ + u) - (t - (_ + d)) }]));
        } else if (v(e, _, t)) {
            a.hasAppMarkers = !0;
            let t = (0, r.hT)(e, _ + c, l);
            a.pngTextChunks || (a.pngTextChunks = []),
                a.pngTextChunks.push({ length: e.getUint32(_ + u), type: t, offset: _ + d });
        } else if (C(e, _)) (a.hasAppMarkers = !0), (a.tiffHeaderOffset = _ + d);
        else if (i.A.USE_ICC && t && b(e, _)) {
            a.hasAppMarkers = !0;
            let t = e.getUint32(_ + u),
                n = _ + d,
                { profileName: r, compressionMethod: i, compressedProfileOffset: s } = O(e, n);
            a.iccChunks || (a.iccChunks = []),
                a.iccChunks.push({
                    offset: s,
                    length: t - (s - n),
                    chunkNumber: 1,
                    chunksTotal: 1,
                    profileName: r,
                    compressionMethod: i,
                });
        } else
            N(e, _) &&
                ((a.hasAppMarkers = !0), a.pngChunkOffsets || (a.pngChunkOffsets = []), a.pngChunkOffsets.push(_ + u));
        _ += e.getUint32(_ + u) + o + l + n;
    }
    return a;
}
function y(e, t) {
    let n = "IHDR";
    return (0, r.hT)(e, t + c, l) === n;
}
function S(e, t) {
    return (0, r.hT)(e, t + c, l) === p && (0, r.hT)(e, t + d, _.length) === _;
}
function v(e, t, n) {
    let i = (0, r.hT)(e, t + c, l);
    return i === f || i === p || (i === h && n);
}
function C(e, t) {
    return (0, r.hT)(e, t + c, l) === E;
}
function b(e, t) {
    return (0, r.hT)(e, t + c, l) === A;
}
function N(e, t) {
    return [m, g].includes((0, r.hT)(e, t + c, l));
}
function R(e, t) {
    let n = 1,
        r = 1;
    t += d + _.length + n + r;
    let i = 0;
    for (; i < 2 && t < e.byteLength; ) 0 === e.getUint8(t) && i++, t++;
    if (!(i < 2)) return t;
}
function O(e, t) {
    let n = 1,
        i = 1,
        a = (0, r.BD)(e, t);
    return (t += a.length + n), { profileName: a, compressionMethod: e.getUint8(t), compressedProfileOffset: (t += i) };
}
