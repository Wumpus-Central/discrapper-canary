n.d(t, { Z: () => i });
var r = n(529883);
let i = { read: o };
function o(e, t) {
    let n = a(e, t),
        r = u(e, t, n);
    return {
        "Bits Per Sample": s(e, t, n),
        "Image Height": l(e, t, n),
        "Image Width": c(e, t, n),
        "Color Components": r,
        Subsampling: r && d(e, t, r.value, n),
    };
}
function a(e, t) {
    return r.Z.getShortAt(e, t);
}
function s(e, t, n) {
    let i = 2;
    if (3 > n) return;
    let o = r.Z.getByteAt(e, t + i);
    return {
        value: o,
        description: "" + o,
    };
}
function l(e, t, n) {
    let i = 3;
    if (5 > n) return;
    let o = r.Z.getShortAt(e, t + i);
    return {
        value: o,
        description: `${o}px`,
    };
}
function c(e, t, n) {
    let i = 5;
    if (7 > n) return;
    let o = r.Z.getShortAt(e, t + i);
    return {
        value: o,
        description: `${o}px`,
    };
}
function u(e, t, n) {
    let i = 7;
    if (8 > n) return;
    let o = r.Z.getByteAt(e, t + i);
    return {
        value: o,
        description: "" + o,
    };
}
function d(e, t, n, i) {
    let o = 8;
    if (8 + 3 * n > i) return;
    let a = [];
    for (let i = 0; i < n; i++) {
        let n = t + o + 3 * i;
        a.push([r.Z.getByteAt(e, n), r.Z.getByteAt(e, n + 1), r.Z.getByteAt(e, n + 2)]);
    }
    return {
        value: a,
        description: a.length > 1 ? f(a) + _(a) : "",
    };
}
function f(e) {
    let t = {
        1: "Y",
        2: "Cb",
        3: "Cr",
        4: "I",
        5: "Q",
    };
    return e.map((e) => t[e[0]]).join("");
}
function _(e) {
    let t = {
        17: "4:4:4 (1 1)",
        18: "4:4:0 (1 2)",
        20: "4:4:1 (1 4)",
        33: "4:2:2 (2 1)",
        34: "4:2:0 (2 2)",
        36: "4:2:1 (2 4)",
        65: "4:1:1 (4 1)",
        66: "4:1:0 (4 2)",
    };
    return 0 === e.length || void 0 === e[0][1] || void 0 === t[e[0][1]] ? "" : t[e[0][1]];
}
