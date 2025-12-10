n.d(t, { Z: () => a });
var r = n(822632),
    i = n(791473);
let a = {
        isJpegFile: Z,
        findJpegOffsets: B,
    },
    o = 2,
    s = 65496,
    l = 2,
    c = 4,
    u = 2,
    d = 2,
    f = 10,
    p = 18,
    _ = 33,
    m = 79,
    h = 18,
    g = 8,
    E = "ICC_PROFILE\0",
    b = 4 + E.length,
    y = b + 1,
    O = "MPF\0",
    v = 65472,
    S = 65474,
    I = 65476,
    T = 65499,
    C = 65501,
    A = 65498,
    N = 65504,
    P = 65505,
    R = 65506,
    D = 65517,
    w = 65519,
    x = 65534,
    L = 65535,
    j = "JFIF",
    M = "Exif",
    k = "http://ns.adobe.com/xap/1.0/\0",
    U = "http://ns.adobe.com/xmp/extension/\0",
    G = "Photoshop 3.0";
function Z(e) {
    return !!e && e.byteLength >= o && e.getUint16(0) === s;
}
function B(e) {
    let t,
        n,
        r,
        a,
        o,
        s,
        _,
        m,
        E,
        O = l;
    for (; O + c + 5 <= e.byteLength; ) {
        if (i.Z.USE_FILE && F(e, O)) (t = e.getUint16(O + u)), (n = O + u);
        else if (i.Z.USE_FILE && V(e, O)) (t = e.getUint16(O + u)), (r = O + u);
        else if (i.Z.USE_JFIF && W(e, O)) (t = e.getUint16(O + u)), (a = O + d);
        else if (i.Z.USE_EXIF && K(e, O)) (t = e.getUint16(O + u)), (o = O + f);
        else if (i.Z.USE_XMP && z(e, O)) _ || (_ = []), (t = e.getUint16(O + u)), _.push(J(O, t));
        else if (i.Z.USE_XMP && Q(e, O)) _ || (_ = []), (t = e.getUint16(O + u)), _.push($(O, t));
        else if (i.Z.USE_IPTC && ee(e, O)) (t = e.getUint16(O + u)), (s = O + p);
        else if (i.Z.USE_ICC && H(e, O)) {
            t = e.getUint16(O + u);
            let n = O + h,
                r = t - (h - u),
                i = e.getUint8(O + b),
                a = e.getUint8(O + y);
            m || (m = []),
                m.push({
                    offset: n,
                    length: r,
                    chunkNumber: i,
                    chunksTotal: a,
                });
        } else if (i.Z.USE_MPF && Y(e, O)) (t = e.getUint16(O + u)), (E = O + g);
        else if (et(e, O)) t = e.getUint16(O + u);
        else if (en(e, O)) {
            O++;
            continue;
        } else break;
        O += u + t;
    }
    return {
        hasAppMarkers: O > l,
        fileDataOffset: n || r,
        jfifDataOffset: a,
        tiffHeaderOffset: o,
        iptcDataOffset: s,
        xmpChunks: _,
        iccChunks: m,
        mpfDataOffset: E,
    };
}
function F(e, t) {
    return e.getUint16(t) === v;
}
function V(e, t) {
    return e.getUint16(t) === S;
}
function H(e, t) {
    let n = E.length;
    return e.getUint16(t) === R && (0, r.oH)(e, t + c, n) === E;
}
function Y(e, t) {
    let n = O.length;
    return e.getUint16(t) === R && (0, r.oH)(e, t + c, n) === O;
}
function W(e, t) {
    let n = j.length;
    return e.getUint16(t) === N && (0, r.oH)(e, t + c, n) === j && 0 === e.getUint8(t + c + n);
}
function K(e, t) {
    let n = M.length;
    return e.getUint16(t) === P && (0, r.oH)(e, t + c, n) === M && 0 === e.getUint8(t + c + n);
}
function z(e, t) {
    return e.getUint16(t) === P && q(e, t);
}
function q(e, t) {
    let n = k.length;
    return (0, r.oH)(e, t + c, n) === k;
}
function Q(e, t) {
    return e.getUint16(t) === P && X(e, t);
}
function X(e, t) {
    let n = U.length;
    return (0, r.oH)(e, t + c, n) === U;
}
function J(e, t) {
    return {
        dataOffset: e + _,
        length: t - (_ - u),
    };
}
function $(e, t) {
    return {
        dataOffset: e + m,
        length: t - (m - u),
    };
}
function ee(e, t) {
    let n = G.length;
    return e.getUint16(t) === D && (0, r.oH)(e, t + c, n) === G && 0 === e.getUint8(t + c + n);
}
function et(e, t) {
    let n = e.getUint16(t);
    return (n >= N && n <= w) || n === x || n === v || n === S || n === I || n === T || n === C || n === A;
}
function en(e, t) {
    return e.getUint16(t) === L;
}
