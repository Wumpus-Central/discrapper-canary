"use strict";
n.d(t, { A: () => s });
var r = n(668459),
    i = n(234291),
    a = n(643479);
let s = { read: o };
function o(e, t) {
    let n = {};
    for (let s = 0; s < t.length; s++) {
        let o = r.A.getLongAt(e, t[s] + i.vW),
            _ = (0, a.hT)(e, t[s] + i.XU, i.LV);
        _ === i.eZ
            ? ((n["Pixels Per Unit X"] = l(e, t[s], o)),
              (n["Pixels Per Unit Y"] = u(e, t[s], o)),
              (n["Pixel Units"] = c(e, t[s], o)))
            : _ === i.J$ && (n["Modify Date"] = d(e, t[s], o));
    }
    return n;
}
function l(e, t, n) {
    let a = 0;
    if (!_(e, t, n, 0, 4)) return;
    let s = r.A.getLongAt(e, t + i.LO + a);
    return { value: s, description: "" + s };
}
function u(e, t, n) {
    let a = 4;
    if (!_(e, t, n, 4, 4)) return;
    let s = r.A.getLongAt(e, t + i.LO + a);
    return { value: s, description: "" + s };
}
function c(e, t, n) {
    let a = 8;
    if (!_(e, t, n, 8, 1)) return;
    let s = r.A.getByteAt(e, t + i.LO + a);
    return { value: s, description: 1 === s ? "meters" : "Unknown" };
}
function d(e, t, n) {
    if (!_(e, t, n, 0, 7)) return;
    let a = r.A.getShortAt(e, t + i.LO),
        s = r.A.getByteAt(e, t + i.LO + 2),
        o = r.A.getByteAt(e, t + i.LO + 3),
        l = r.A.getByteAt(e, t + i.LO + 4),
        u = r.A.getByteAt(e, t + i.LO + 5),
        c = r.A.getByteAt(e, t + i.LO + 6);
    return {
        value: [a, s, o, l, u, c],
        description: `${f(a, 4)}-${f(s, 2)}-${f(o, 2)} ${f(l, 2)}:${f(u, 2)}:${f(c, 2)}`,
    };
}
function _(e, t, n, r, a) {
    return r + a <= n && t + i.LO + r + a <= e.byteLength;
}
function f(e, t) {
    return `${"0".repeat(t - ("" + e).length)}${e}`;
}
