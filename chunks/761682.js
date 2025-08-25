n.d(t, { Z: () => i });
var r = n(529883);
let i = { read: o };
function o(e, t) {
    return {
        "Image Width": a(e, t),
        "Image Height": s(e, t),
        "Bit Depth": l(e, t),
        "Color Type": c(e, t),
        Compression: u(e, t),
        Filter: d(e, t),
        Interlace: f(e, t),
    };
}
function a(e, t) {
    if (t + 0 + 4 > e.byteLength) return;
    let n = r.Z.getLongAt(e, t);
    return {
        value: n,
        description: `${n}px`,
    };
}
function s(e, t) {
    let n = 4;
    if (t + 4 + 4 > e.byteLength) return;
    let i = r.Z.getLongAt(e, t + n);
    return {
        value: i,
        description: `${i}px`,
    };
}
function l(e, t) {
    let n = 8;
    if (t + 8 + 1 > e.byteLength) return;
    let i = r.Z.getByteAt(e, t + n);
    return {
        value: i,
        description: `${i}`,
    };
}
function c(e, t) {
    let n = 9,
        i = {
            0: "Grayscale",
            2: "RGB",
            3: "Palette",
            4: "Grayscale with Alpha",
            6: "RGB with Alpha",
        };
    if (t + 9 + 1 > e.byteLength) return;
    let o = r.Z.getByteAt(e, t + n);
    return {
        value: o,
        description: i[o] || "Unknown",
    };
}
function u(e, t) {
    let n = 10;
    if (t + 10 + 1 > e.byteLength) return;
    let i = r.Z.getByteAt(e, t + n);
    return {
        value: i,
        description: 0 === i ? "Deflate/Inflate" : "Unknown",
    };
}
function d(e, t) {
    let n = 11;
    if (t + 11 + 1 > e.byteLength) return;
    let i = r.Z.getByteAt(e, t + n);
    return {
        value: i,
        description: 0 === i ? "Adaptive" : "Unknown",
    };
}
function f(e, t) {
    let n = 12,
        i = {
            0: "Noninterlaced",
            1: "Adam7 Interlace",
        };
    if (t + 12 + 1 > e.byteLength) return;
    let o = r.Z.getByteAt(e, t + n);
    return {
        value: o,
        description: i[o] || "Unknown",
    };
}
