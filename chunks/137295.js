n.d(t, { Z: () => i });
var r = n(529883);
let i = { read: o };
function o(e, t) {
    let n = a(e, t),
        r = f(e, t, n),
        i = _(e, t, n),
        o = {
            "JFIF Version": s(e, t, n),
            "Resolution Unit": l(e, t, n),
            XResolution: u(e, t, n),
            YResolution: d(e, t, n),
            "JFIF Thumbnail Width": r,
            "JFIF Thumbnail Height": i,
        };
    if (void 0 !== r && void 0 !== i) {
        let a = p(e, t, 3 * r.value * i.value, n);
        a && (o["JFIF Thumbnail"] = a);
    }
    for (let e in o) void 0 === o[e] && delete o[e];
    return o;
}
function a(e, t) {
    return r.Z.getShortAt(e, t);
}
function s(e, t, n) {
    let i = 7;
    if (9 > n) return;
    let o = r.Z.getByteAt(e, t + i),
        a = r.Z.getByteAt(e, t + i + 1);
    return {
        value: 256 * o + a,
        description: o + "." + a,
    };
}
function l(e, t, n) {
    let i = 9;
    if (10 > n) return;
    let o = r.Z.getByteAt(e, t + i);
    return {
        value: o,
        description: c(o),
    };
}
function c(e) {
    return 0 === e ? "None" : 1 === e ? "inches" : 2 === e ? "cm" : "Unknown";
}
function u(e, t, n) {
    let i = 10;
    if (12 > n) return;
    let o = r.Z.getShortAt(e, t + i);
    return {
        value: o,
        description: "" + o,
    };
}
function d(e, t, n) {
    let i = 12;
    if (14 > n) return;
    let o = r.Z.getShortAt(e, t + i);
    return {
        value: o,
        description: "" + o,
    };
}
function f(e, t, n) {
    let i = 14;
    if (15 > n) return;
    let o = r.Z.getByteAt(e, t + i);
    return {
        value: o,
        description: `${o}px`,
    };
}
function _(e, t, n) {
    let i = 15;
    if (16 > n) return;
    let o = r.Z.getByteAt(e, t + i);
    return {
        value: o,
        description: `${o}px`,
    };
}
function p(e, t, n, r) {
    let i = 16;
    if (0 !== n && !(i + n > r))
        return {
            value: e.buffer.slice(t + i, t + i + n),
            description: "<24-bit RGB pixel data>",
        };
}
