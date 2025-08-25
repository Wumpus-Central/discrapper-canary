n.d(t, { Z: () => i });
var r = n(529883);
let i = { read: s },
    o = 4,
    a = 7;
function s(e, t) {
    let n = {},
        i = r.Z.getByteAt(e, t);
    return (n.Alpha = l(i)), (n.Animation = c(i)), (n.ImageWidth = u(e, t + o)), (n.ImageHeight = u(e, t + a)), n;
}
function l(e) {
    let t = 16 & e;
    return {
        value: +!!t,
        description: t ? "Yes" : "No",
    };
}
function c(e) {
    let t = 2 & e;
    return {
        value: +!!t,
        description: t ? "Yes" : "No",
    };
}
function u(e, t) {
    let n = r.Z.getByteAt(e, t) + 256 * r.Z.getByteAt(e, t + 1) + 65536 * r.Z.getByteAt(e, t + 2) + 1;
    return {
        value: n,
        description: n + "px",
    };
}
