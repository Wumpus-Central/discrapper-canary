"use strict";
n.d(t, { A: () => a });
var r = n(643479),
    i = n(761799);
let a = { isJpegFile: B, findJpegOffsets: j },
    s = 2,
    o = 65496,
    l = 2,
    u = 4,
    c = 2,
    d = 2,
    _ = 10,
    f = 18,
    h = 33,
    p = 79,
    g = 18,
    E = 8,
    A = "ICC_PROFILE\0",
    I = 4 + A.length,
    T = I + 1,
    y = "MPF\0",
    S = 65472,
    v = 65474,
    C = 65476,
    b = 65499,
    N = 65501,
    R = 65498,
    O = 65504,
    D = 65505,
    L = 65506,
    w = 65517,
    x = 65519,
    P = 65534,
    M = 65535,
    k = "JFIF",
    U = "Exif",
    G = "http://ns.adobe.com/xap/1.0/\0",
    F = "http://ns.adobe.com/xmp/extension/\0",
    V = "Photoshop 3.0";
function B(e) {
    return !!e && e.byteLength >= s && e.getUint16(0) === o;
}
function j(e) {
    let t,
        n,
        r,
        a,
        s,
        o,
        h,
        p,
        A,
        y = l;
    for (; y + u + 5 <= e.byteLength; ) {
        if (i.A.USE_FILE && H(e, y)) (t = e.getUint16(y + c)), (n = y + c);
        else if (i.A.USE_FILE && Y(e, y)) (t = e.getUint16(y + c)), (r = y + c);
        else if (i.A.USE_JFIF && $(e, y)) (t = e.getUint16(y + c)), (a = y + d);
        else if (i.A.USE_EXIF && z(e, y)) (t = e.getUint16(y + c)), (s = y + _);
        else if (i.A.USE_XMP && q(e, y)) h || (h = []), (t = e.getUint16(y + c)), h.push(J(y, t));
        else if (i.A.USE_XMP && Z(e, y)) h || (h = []), (t = e.getUint16(y + c)), h.push(ee(y, t));
        else if (i.A.USE_IPTC && et(e, y)) (t = e.getUint16(y + c)), (o = y + f);
        else if (i.A.USE_ICC && W(e, y)) {
            t = e.getUint16(y + c);
            let n = y + g,
                r = t - (g - c),
                i = e.getUint8(y + I),
                a = e.getUint8(y + T);
            p || (p = []), p.push({ offset: n, length: r, chunkNumber: i, chunksTotal: a });
        } else if (i.A.USE_MPF && K(e, y)) (t = e.getUint16(y + c)), (A = y + E);
        else if (en(e, y)) t = e.getUint16(y + c);
        else if (er(e, y)) {
            y++;
            continue;
        } else break;
        y += c + t;
    }
    return {
        hasAppMarkers: y > l,
        fileDataOffset: n || r,
        jfifDataOffset: a,
        tiffHeaderOffset: s,
        iptcDataOffset: o,
        xmpChunks: h,
        iccChunks: p,
        mpfDataOffset: A,
    };
}
function H(e, t) {
    return e.getUint16(t) === S;
}
function Y(e, t) {
    return e.getUint16(t) === v;
}
function W(e, t) {
    let n = A.length;
    return e.getUint16(t) === L && (0, r.hT)(e, t + u, n) === A;
}
function K(e, t) {
    let n = y.length;
    return e.getUint16(t) === L && (0, r.hT)(e, t + u, n) === y;
}
function $(e, t) {
    let n = k.length;
    return e.getUint16(t) === O && (0, r.hT)(e, t + u, n) === k && 0 === e.getUint8(t + u + n);
}
function z(e, t) {
    let n = U.length;
    return e.getUint16(t) === D && (0, r.hT)(e, t + u, n) === U && 0 === e.getUint8(t + u + n);
}
function q(e, t) {
    return e.getUint16(t) === D && X(e, t);
}
function X(e, t) {
    let n = G.length;
    return (0, r.hT)(e, t + u, n) === G;
}
function Z(e, t) {
    return e.getUint16(t) === D && Q(e, t);
}
function Q(e, t) {
    let n = F.length;
    return (0, r.hT)(e, t + u, n) === F;
}
function J(e, t) {
    return { dataOffset: e + h, length: t - (h - c) };
}
function ee(e, t) {
    return { dataOffset: e + p, length: t - (p - c) };
}
function et(e, t) {
    let n = V.length;
    return e.getUint16(t) === w && (0, r.hT)(e, t + u, n) === V && 0 === e.getUint8(t + u + n);
}
function en(e, t) {
    let n = e.getUint16(t);
    return (n >= O && n <= x) || n === P || n === S || n === v || n === C || n === b || n === N || n === R;
}
function er(e, t) {
    return e.getUint16(t) === M;
}
