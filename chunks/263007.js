n.d(t, { Z: () => o });
var r = n(610388),
    i = n(649793),
    a = n(822632);
let o = { read: s };
function s(e, t) {
    let n = {};
    for (let o = 0; o < t.length; o++) {
        let s = r.Z.getLongAt(e, t[o] + i.zi),
            f = (0, a.oH)(e, t[o] + i.Ic, i.Gj);
        f === i.oT
            ? ((n["Pixels Per Unit X"] = l(e, t[o], s)),
              (n["Pixels Per Unit Y"] = c(e, t[o], s)),
              (n["Pixel Units"] = u(e, t[o], s)))
            : f === i.ZN && (n["Modify Date"] = d(e, t[o], s));
    }
    return n;
}
function l(e, t, n) {
    let a = 0;
    if (!f(e, t, n, 0, 4)) return;
    let o = r.Z.getLongAt(e, t + i.vx + a);
    return {
        value: o,
        description: "" + o,
    };
}
function c(e, t, n) {
    let a = 4;
    if (!f(e, t, n, 4, 4)) return;
    let o = r.Z.getLongAt(e, t + i.vx + a);
    return {
        value: o,
        description: "" + o,
    };
}
function u(e, t, n) {
    let a = 8;
    if (!f(e, t, n, 8, 1)) return;
    let o = r.Z.getByteAt(e, t + i.vx + a);
    return {
        value: o,
        description: 1 === o ? "meters" : "Unknown",
    };
}
function d(e, t, n) {
    if (!f(e, t, n, 0, 7)) return;
    let a = r.Z.getShortAt(e, t + i.vx),
        o = r.Z.getByteAt(e, t + i.vx + 2),
        s = r.Z.getByteAt(e, t + i.vx + 3),
        l = r.Z.getByteAt(e, t + i.vx + 4),
        c = r.Z.getByteAt(e, t + i.vx + 5),
        u = r.Z.getByteAt(e, t + i.vx + 6);
    return {
        value: [a, o, s, l, c, u],
        description: `${p(a, 4)}-${p(o, 2)}-${p(s, 2)} ${p(l, 2)}:${p(c, 2)}:${p(u, 2)}`,
    };
}
function f(e, t, n, r, a) {
    return r + a <= n && t + i.vx + r + a <= e.byteLength;
}
function p(e, t) {
    return `${"0".repeat(t - ("" + e).length)}${e}`;
}
