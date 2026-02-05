"use strict";
n.d(t, { A: () => i });
var r = n(668459);
let i = { read: a };
function a(e, t) {
    return {
        "Image Width": s(e, t),
        "Image Height": o(e, t),
        "Bit Depth": l(e, t),
        "Color Type": u(e, t),
        Compression: c(e, t),
        Filter: d(e, t),
        Interlace: _(e, t),
    };
}
function s(e, t) {
    if (t + 0 + 4 > e.byteLength) return;
    let n = r.A.getLongAt(e, t);
    return { value: n, description: `${n}px` };
}
function o(e, t) {
    let n = 4;
    if (t + 4 + 4 > e.byteLength) return;
    let i = r.A.getLongAt(e, t + n);
    return { value: i, description: `${i}px` };
}
function l(e, t) {
    let n = 8;
    if (t + 8 + 1 > e.byteLength) return;
    let i = r.A.getByteAt(e, t + n);
    return { value: i, description: `${i}` };
}
function u(e, t) {
    let n = 9,
        i = { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" };
    if (t + 9 + 1 > e.byteLength) return;
    let a = r.A.getByteAt(e, t + n);
    return { value: a, description: i[a] || "Unknown" };
}
function c(e, t) {
    let n = 10;
    if (t + 10 + 1 > e.byteLength) return;
    let i = r.A.getByteAt(e, t + n);
    return { value: i, description: 0 === i ? "Deflate/Inflate" : "Unknown" };
}
function d(e, t) {
    let n = 11;
    if (t + 11 + 1 > e.byteLength) return;
    let i = r.A.getByteAt(e, t + n);
    return { value: i, description: 0 === i ? "Adaptive" : "Unknown" };
}
function _(e, t) {
    let n = 12,
        i = { 0: "Noninterlaced", 1: "Adam7 Interlace" };
    if (t + 12 + 1 > e.byteLength) return;
    let a = r.A.getByteAt(e, t + n);
    return { value: a, description: i[a] || "Unknown" };
}
