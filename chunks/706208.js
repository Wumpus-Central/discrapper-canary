n.d(t, {
    A: () => a,
});
var r = n(643479),
    i = n(761799);
let a = {
        isJpegFile: V,
        findJpegOffsets: F,
    },
    s = 2,
    o = 65496,
    l = 2,
    c = 4,
    u = 2,
    d = 2,
    f = 10,
    p = 18,
    _ = 33,
    h = 79,
    m = 18,
    g = 8,
    E = "ICC_PROFILE\0",
    b = 4 + E.length,
    y = b + 1,
    O = "MPF\0",
    A = 65472,
    v = 65474,
    S = 65476,
    I = 65499,
    T = 65501,
    C = 65498,
    N = 65504,
    R = 65505,
    w = 65506,
    P = 65517,
    D = 65519,
    x = 65534,
    L = 65535,
    j = "JFIF",
    M = "Exif",
    k = "http://ns.adobe.com/xap/1.0/\0",
    U = "http://ns.adobe.com/xmp/extension/\0",
    G = "Photoshop 3.0";

function V(e) {
    return !!e && e.byteLength >= s && e.getUint16(0) === o;
}

function F(e) {
    let t,
        n,
        r,
        a,
        s,
        o,
        _,
        h,
        E,
        O = l;
    for (; O + c + 5 <= e.byteLength; ) {
        if (i.A.USE_FILE && B(e, O)) (t = e.getUint16(O + u)), (n = O + u);
        else if (i.A.USE_FILE && H(e, O)) (t = e.getUint16(O + u)), (r = O + u);
        else if (i.A.USE_JFIF && K(e, O)) (t = e.getUint16(O + u)), (a = O + d);
        else if (i.A.USE_EXIF && z(e, O)) (t = e.getUint16(O + u)), (s = O + f);
        else if (i.A.USE_XMP && q(e, O)) _ || (_ = []), (t = e.getUint16(O + u)), _.push($(O, t));
        else if (i.A.USE_XMP && Z(e, O)) _ || (_ = []), (t = e.getUint16(O + u)), _.push(J(O, t));
        else if (i.A.USE_IPTC && ee(e, O)) (t = e.getUint16(O + u)), (o = O + p);
        else if (i.A.USE_ICC && Y(e, O)) {
            t = e.getUint16(O + u);
            let n = O + m,
                r = t - (m - u),
                i = e.getUint8(O + b),
                a = e.getUint8(O + y);
            h || (h = []),
                h.push({
                    offset: n,
                    length: r,
                    chunkNumber: i,
                    chunksTotal: a,
                });
        } else if (i.A.USE_MPF && W(e, O)) (t = e.getUint16(O + u)), (E = O + g);
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
        tiffHeaderOffset: s,
        iptcDataOffset: o,
        xmpChunks: _,
        iccChunks: h,
        mpfDataOffset: E,
    };
}

function B(e, t) {
    return e.getUint16(t) === A;
}

function H(e, t) {
    return e.getUint16(t) === v;
}

function Y(e, t) {
    let n = E.length;
    return e.getUint16(t) === w && (0, r.hT)(e, t + c, n) === E;
}

function W(e, t) {
    let n = O.length;
    return e.getUint16(t) === w && (0, r.hT)(e, t + c, n) === O;
}

function K(e, t) {
    let n = j.length;
    return e.getUint16(t) === N && (0, r.hT)(e, t + c, n) === j && 0 === e.getUint8(t + c + n);
}

function z(e, t) {
    let n = M.length;
    return e.getUint16(t) === R && (0, r.hT)(e, t + c, n) === M && 0 === e.getUint8(t + c + n);
}

function q(e, t) {
    return e.getUint16(t) === R && X(e, t);
}

function X(e, t) {
    let n = k.length;
    return (0, r.hT)(e, t + c, n) === k;
}

function Z(e, t) {
    return e.getUint16(t) === R && Q(e, t);
}

function Q(e, t) {
    let n = U.length;
    return (0, r.hT)(e, t + c, n) === U;
}

function $(e, t) {
    return {
        dataOffset: e + _,
        length: t - (_ - u),
    };
}

function J(e, t) {
    return {
        dataOffset: e + h,
        length: t - (h - u),
    };
}

function ee(e, t) {
    let n = G.length;
    return e.getUint16(t) === P && (0, r.hT)(e, t + c, n) === G && 0 === e.getUint8(t + c + n);
}

function et(e, t) {
    let n = e.getUint16(t);
    return (n >= N && n <= D) || n === x || n === A || n === v || n === S || n === I || n === T || n === C;
}

function en(e, t) {
    return e.getUint16(t) === L;
}
