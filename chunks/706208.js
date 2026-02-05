"use strict";
n.d(t, { A: () => a });
var r = n(643479),
    i = n(761799);
let a = { isJpegFile: F, findJpegOffsets: B },
    s = 2,
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
    g = 8,
    E = "ICC_PROFILE\0",
    A = 4 + E.length,
    I = A + 1,
    T = "MPF\0",
    y = 65472,
    S = 65474,
    v = 65476,
    C = 65499,
    b = 65501,
    N = 65498,
    R = 65504,
    O = 65505,
    D = 65506,
    L = 65517,
    w = 65519,
    x = 65534,
    P = 65535,
    M = "JFIF",
    k = "Exif",
    U = "http://ns.adobe.com/xap/1.0/\0",
    G = "http://ns.adobe.com/xmp/extension/\0",
    V = "Photoshop 3.0";
function F(e) {
    return !!e && e.byteLength >= s && e.getUint16(0) === o;
}
function B(e) {
    let t,
        n,
        r,
        a,
        s,
        o,
        p,
        h,
        E,
        T = l;
    for (; T + u + 5 <= e.byteLength; ) {
        if (i.A.USE_FILE && j(e, T)) (t = e.getUint16(T + c)), (n = T + c);
        else if (i.A.USE_FILE && H(e, T)) (t = e.getUint16(T + c)), (r = T + c);
        else if (i.A.USE_JFIF && K(e, T)) (t = e.getUint16(T + c)), (a = T + d);
        else if (i.A.USE_EXIF && z(e, T)) (t = e.getUint16(T + c)), (s = T + _);
        else if (i.A.USE_XMP && $(e, T)) p || (p = []), (t = e.getUint16(T + c)), p.push(X(T, t));
        else if (i.A.USE_XMP && Z(e, T)) p || (p = []), (t = e.getUint16(T + c)), p.push(J(T, t));
        else if (i.A.USE_IPTC && ee(e, T)) (t = e.getUint16(T + c)), (o = T + f);
        else if (i.A.USE_ICC && Y(e, T)) {
            t = e.getUint16(T + c);
            let n = T + m,
                r = t - (m - c),
                i = e.getUint8(T + A),
                a = e.getUint8(T + I);
            h || (h = []), h.push({ offset: n, length: r, chunkNumber: i, chunksTotal: a });
        } else if (i.A.USE_MPF && W(e, T)) (t = e.getUint16(T + c)), (E = T + g);
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
        jfifDataOffset: a,
        tiffHeaderOffset: s,
        iptcDataOffset: o,
        xmpChunks: p,
        iccChunks: h,
        mpfDataOffset: E,
    };
}
function j(e, t) {
    return e.getUint16(t) === y;
}
function H(e, t) {
    return e.getUint16(t) === S;
}
function Y(e, t) {
    let n = E.length;
    return e.getUint16(t) === D && (0, r.hT)(e, t + u, n) === E;
}
function W(e, t) {
    let n = T.length;
    return e.getUint16(t) === D && (0, r.hT)(e, t + u, n) === T;
}
function K(e, t) {
    let n = M.length;
    return e.getUint16(t) === R && (0, r.hT)(e, t + u, n) === M && 0 === e.getUint8(t + u + n);
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
    return e.getUint16(t) === O && Q(e, t);
}
function Q(e, t) {
    let n = G.length;
    return (0, r.hT)(e, t + u, n) === G;
}
function X(e, t) {
    return { dataOffset: e + p, length: t - (p - c) };
}
function J(e, t) {
    return { dataOffset: e + h, length: t - (h - c) };
}
function ee(e, t) {
    let n = V.length;
    return e.getUint16(t) === L && (0, r.hT)(e, t + u, n) === V && 0 === e.getUint8(t + u + n);
}
function et(e, t) {
    let n = e.getUint16(t);
    return (n >= R && n <= w) || n === x || n === y || n === S || n === v || n === C || n === b || n === N;
}
function en(e, t) {
    return e.getUint16(t) === P;
}
