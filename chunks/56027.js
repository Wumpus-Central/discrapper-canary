"use strict";
n.d(t, {
    B1: () => P,
    C0: () => h,
    DD: () => a,
    Dz: () => T,
    Jx: () => c,
    LI: () => l,
    PG: () => g,
    RI: () => u,
    Sg: () => m,
    T9: () => o,
    TV: () => I,
    WJ: () => S,
    _3: () => p,
    aD: () => v,
    bV: () => L,
    jk: () => s,
    lP: () => D,
    nI: () => x,
    qE: () => f,
    r_: () => r,
    sq: () => E,
    w7: () => y,
});
let r = ["top", "right", "bottom", "left"],
    i = ["start", "end"],
    a = r.reduce((e, t) => e.concat(t, t + "-" + i[0], t + "-" + i[1]), []),
    s = Math.min,
    o = Math.max,
    l = Math.round,
    u = Math.floor,
    c = (e) => ({ x: e, y: e }),
    d = { left: "right", right: "left", bottom: "top", top: "bottom" },
    _ = { start: "end", end: "start" };
function f(e, t, n) {
    return o(e, s(t, n));
}
function p(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function h(e) {
    return e.split("-")[0];
}
function m(e) {
    return e.split("-")[1];
}
function g(e) {
    return "x" === e ? "y" : "x";
}
function E(e) {
    return "y" === e ? "height" : "width";
}
let A = new Set(["top", "bottom"]);
function I(e) {
    return A.has(h(e)) ? "y" : "x";
}
function T(e) {
    return g(I(e));
}
function y(e, t, n) {
    void 0 === n && (n = !1);
    let r = m(e),
        i = T(e),
        a = E(i),
        s = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (s = L(s)), [s, L(s)];
}
function S(e) {
    let t = L(e);
    return [v(e), t, v(t)];
}
function v(e) {
    return e.replace(/start|end/g, (e) => _[e]);
}
let C = ["left", "right"],
    b = ["right", "left"],
    N = ["top", "bottom"],
    R = ["bottom", "top"];
function O(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            if (n) return t ? b : C;
            return t ? C : b;
        case "left":
        case "right":
            return t ? N : R;
        default:
            return [];
    }
}
function D(e, t, n, r) {
    let i = m(e),
        a = O(h(e), "start" === n, r);
    return i && ((a = a.map((e) => e + "-" + i)), t && (a = a.concat(a.map(v)))), a;
}
function L(e) {
    return e.replace(/left|right|bottom|top/g, (e) => d[e]);
}
function w(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function x(e) {
    return "number" != typeof e ? w(e) : { top: e, right: e, bottom: e, left: e };
}
function P(e) {
    let { x: t, y: n, width: r, height: i } = e;
    return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
}
