n.d(t, {
    Ay: () => a,
    HL: () => p,
    J$: () => g,
    LO: () => d,
    LV: () => l,
    XU: () => u,
    Xo: () => _,
    aA: () => h,
    eZ: () => m,
    vW: () => c,
});
var r = n(643479),
    i = n(761799);
let a = {
        isPngFile: y,
        findPngOffsets: O,
    },
    s = "\x89PNG\r\n\x1a\n",
    o = 4,
    l = 4,
    c = 0,
    u = 4,
    d = 8,
    f = "XML:com.adobe.xmp\0",
    p = "tEXt",
    _ = "iTXt",
    h = "zTXt",
    m = "pHYs",
    g = "tIME",
    E = "eXIf",
    b = "iCCP";

function y(e) {
    return !!e && (0, r.hT)(e, 0, s.length) === s;
}

function O(e, t) {
    let n = 4,
        a = {
            hasAppMarkers: !1,
        },
        f = s.length;
    for (; f + o + l <= e.byteLength; ) {
        if (i.A.USE_PNG_FILE && A(e, f)) (a.hasAppMarkers = !0), (a.pngHeaderOffset = f + d);
        else if (i.A.USE_XMP && v(e, f)) {
            let t = N(e, f);
            void 0 !== t &&
                ((a.hasAppMarkers = !0),
                (a.xmpChunks = [
                    {
                        dataOffset: t,
                        length: e.getUint32(f + c) - (t - (f + d)),
                    },
                ]));
        } else if (S(e, f, t)) {
            a.hasAppMarkers = !0;
            let t = (0, r.hT)(e, f + u, l);
            a.pngTextChunks || (a.pngTextChunks = []),
                a.pngTextChunks.push({
                    length: e.getUint32(f + c),
                    type: t,
                    offset: f + d,
                });
        } else if (I(e, f)) (a.hasAppMarkers = !0), (a.tiffHeaderOffset = f + d);
        else if (i.A.USE_ICC && t && T(e, f)) {
            a.hasAppMarkers = !0;
            let t = e.getUint32(f + c),
                n = f + d,
                { profileName: r, compressionMethod: i, compressedProfileOffset: s } = R(e, n);
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
            C(e, f) &&
                ((a.hasAppMarkers = !0), a.pngChunkOffsets || (a.pngChunkOffsets = []), a.pngChunkOffsets.push(f + c));
        f += e.getUint32(f + c) + o + l + n;
    }
    return a;
}

function A(e, t) {
    let n = "IHDR";
    return (0, r.hT)(e, t + u, l) === n;
}

function v(e, t) {
    return (0, r.hT)(e, t + u, l) === _ && (0, r.hT)(e, t + d, f.length) === f;
}

function S(e, t, n) {
    let i = (0, r.hT)(e, t + u, l);
    return i === p || i === _ || (i === h && n);
}

function I(e, t) {
    return (0, r.hT)(e, t + u, l) === E;
}

function T(e, t) {
    return (0, r.hT)(e, t + u, l) === b;
}

function C(e, t) {
    return [m, g].includes((0, r.hT)(e, t + u, l));
}

function N(e, t) {
    let n = 1,
        r = 1;
    t += d + f.length + n + r;
    let i = 0;
    for (; i < 2 && t < e.byteLength; ) 0 === e.getUint8(t) && i++, t++;
    if (!(i < 2)) return t;
}

function R(e, t) {
    let n = 1,
        i = 1,
        a = (0, r.BD)(e, t);
    return (
        (t += a.length + n),
        {
            profileName: a,
            compressionMethod: e.getUint8(t),
            compressedProfileOffset: (t += i),
        }
    );
}
