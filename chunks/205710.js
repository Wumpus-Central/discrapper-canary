"use strict";
n.d(t, { A: () => i });
var r = n(668459);
let i = { read: o },
    a = 4,
    s = 7;
function o(e, t) {
    let n = {},
        i = r.A.getByteAt(e, t);
    return (n.Alpha = l(i)), (n.Animation = u(i)), (n.ImageWidth = c(e, t + a)), (n.ImageHeight = c(e, t + s)), n;
}
function l(e) {
    let t = 16 & e;
    return { value: +!!t, description: t ? "Yes" : "No" };
}
function u(e) {
    let t = 2 & e;
    return { value: +!!t, description: t ? "Yes" : "No" };
}
function c(e, t) {
    let n = r.A.getByteAt(e, t) + 256 * r.A.getByteAt(e, t + 1) + 65536 * r.A.getByteAt(e, t + 2) + 1;
    return { value: n, description: n + "px" };
}
