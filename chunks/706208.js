"use strict";
n.d(t, { A: () => s });
var r = n(643479),
    i = n(761799);
let s = { isJpegFile: V, findJpegOffsets: B },
    a = 2,
    o = 65496,
    l = 2,
    u = 4,
    c = 2,
    d = 2,
    _ = 10,
    f = 18,
    p = 33,
    h = 79,
    m = 18,
    E = 8,
    g = "ICC_PROFILE\0",
    A = 4 + g.length,
    I = A + 1,
    T = "MPF\0",
    S = 65472,
    y = 65474,
    v = 65476,
    N = 65499,
    C = 65501,
    b = 65498,
    R = 65504,
    O = 65505,
    D = 65506,
    L = 65517,
    w = 65519,
    x = 65534,
    M = 65535,
    P = "JFIF",
    k = "Exif",
    U = "http://ns.adobe.com/xap/1.0/\0",
    G = "http://ns.adobe.com/xmp/extension/\0",
    F = "Photoshop 3.0";
function V(e) {
    return !!e && e.byteLength >= a && e.getUint16(0) === o;
}
function B(e) {
    let t,
        n,
        r,
        s,
        a,
        o,
        p,
        h,
        g,
        T = l;
    for (; T + u + 5 <= e.byteLength; ) {
        if (i.A.USE_FILE && H(e, T)) (t = e.getUint16(T + c)), (n = T + c);
        else if (i.A.USE_FILE && j(e, T)) (t = e.getUint16(T + c)), (r = T + c);
        else if (i.A.USE_JFIF && K(e, T)) (t = e.getUint16(T + c)), (s = T + d);
        else if (i.A.USE_EXIF && z(e, T)) (t = e.getUint16(T + c)), (a = T + _);
        else if (i.A.USE_XMP && $(e, T)) p || (p = []), (t = e.getUint16(T + c)), p.push(Q(T, t));
        else if (i.A.USE_XMP && Z(e, T)) p || (p = []), (t = e.getUint16(T + c)), p.push(J(T, t));
        else if (i.A.USE_IPTC && ee(e, T)) (t = e.getUint16(T + c)), (o = T + f);
        else if (i.A.USE_ICC && Y(e, T)) {
            t = e.getUint16(T + c);
            let n = T + m,
                r = t - (m - c),
                i = e.getUint8(T + A),
                s = e.getUint8(T + I);
            h || (h = []), h.push({ offset: n, length: r, chunkNumber: i, chunksTotal: s });
        } else if (i.A.USE_MPF && W(e, T)) (t = e.getUint16(T + c)), (g = T + E);
        else if (et(e, T)) t = e.getUint16(T + c);
        else if (en(e, T)) {
            T++;
            continue;
        } else break;
        T += c + t;
    }
    return {
        hasAppMarkers: T > l,
        fileDataOffset: n || r,
        jfifDataOffset: s,
        tiffHeaderOffset: a,
        iptcDataOffset: o,
        xmpChunks: p,
        iccChunks: h,
        mpfDataOffset: g,
    };
}
function H(e, t) {
    return e.getUint16(t) === S;
}
function j(e, t) {
    return e.getUint16(t) === y;
}
function Y(e, t) {
    let n = g.length;
    return e.getUint16(t) === D && (0, r.hT)(e, t + u, n) === g;
}
function W(e, t) {
    let n = T.length;
    return e.getUint16(t) === D && (0, r.hT)(e, t + u, n) === T;
}
function K(e, t) {
    let n = P.length;
    return e.getUint16(t) === R && (0, r.hT)(e, t + u, n) === P && 0 === e.getUint8(t + u + n);
}
function z(e, t) {
    let n = k.length;
    return e.getUint16(t) === O && (0, r.hT)(e, t + u, n) === k && 0 === e.getUint8(t + u + n);
}
function $(e, t) {
    return e.getUint16(t) === O && q(e, t);
}
function q(e, t) {
    let n = U.length;
    return (0, r.hT)(e, t + u, n) === U;
}
function Z(e, t) {
    return e.getUint16(t) === O && X(e, t);
}
function X(e, t) {
    let n = G.length;
    return (0, r.hT)(e, t + u, n) === G;
}
function Q(e, t) {
    return { dataOffset: e + p, length: t - (p - c) };
}
function J(e, t) {
    return { dataOffset: e + h, length: t - (h - c) };
}
function ee(e, t) {
    let n = F.length;
    return e.getUint16(t) === L && (0, r.hT)(e, t + u, n) === F && 0 === e.getUint8(t + u + n);
}
function et(e, t) {
    let n = e.getUint16(t);
    return (n >= R && n <= w) || n === x || n === S || n === y || n === v || n === N || n === C || n === b;
}
function en(e, t) {
    return e.getUint16(t) === M;
}
