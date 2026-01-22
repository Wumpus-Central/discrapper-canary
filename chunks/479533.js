n.d(t, { A: () => i });
var r = n(643479);
let i = { read: a };
function a(e) {
    return {
        "GIF Version": s(e),
        "Image Width": o(e),
        "Image Height": l(e),
        "Global Color Map": c(e),
        "Bits Per Pixel": d(e),
        "Color Resolution Depth": u(e),
    };
}
function s(e) {
    let t = 3,
        n = 3;
    if (6 > e.byteLength) return;
    let i = (0, r.hT)(e, t, n);
    return {
        value: i,
        description: i,
    };
}
function o(e) {
    let t = 6;
    if (8 > e.byteLength) return;
    let n = e.getUint16(t, !0);
    return {
        value: n,
        description: `${n}px`,
    };
}
function l(e) {
    let t = 8;
    if (10 > e.byteLength) return;
    let n = e.getUint16(t, !0);
    return {
        value: n,
        description: `${n}px`,
    };
}
function c(e) {
    let t = 10;
    if (11 > e.byteLength) return;
    let n = (128 & e.getUint8(t)) >>> 7;
    return {
        value: n,
        description: 1 === n ? "Yes" : "No",
    };
}
function u(e) {
    let t = 10;
    if (11 > e.byteLength) return;
    let n = ((112 & e.getUint8(t)) >>> 4) + 1;
    return {
        value: n,
        description: `${n} ${1 === n ? "bit" : "bits"}`,
    };
}
function d(e) {
    let t = 10;
    if (11 > e.byteLength) return;
    let n = (7 & e.getUint8(t)) + 1;
    return {
        value: n,
        description: `${n} ${1 === n ? "bit" : "bits"}`,
    };
}
