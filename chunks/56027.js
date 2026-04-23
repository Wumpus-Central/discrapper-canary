"use strict";
n.d(t, {
    B1: () => L,
    C0: () => p,
    DD: () => i,
    Dz: () => I,
    Jx: () => u,
    LI: () => o,
    PG: () => E,
    RI: () => l,
    Sg: () => h,
    T9: () => a,
    TV: () => A,
    WJ: () => S,
    _3: () => f,
    aD: () => y,
    bV: () => b,
    jk: () => s,
    lP: () => R,
    nI: () => D,
    qE: () => _,
    r_: () => r,
    sq: () => m,
    w7: () => T,
});
let r = ["top", "right", "bottom", "left"],
    i = r.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
    s = Math.min,
    a = Math.max,
    o = Math.round,
    l = Math.floor,
    u = (e) => ({ x: e, y: e }),
    c = { left: "right", right: "left", bottom: "top", top: "bottom" },
    d = { start: "end", end: "start" };
function _(e, t, n) {
    return a(e, s(t, n));
}
function f(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function p(e) {
    return e.split("-")[0];
}
function h(e) {
    return e.split("-")[1];
}
function E(e) {
    return "x" === e ? "y" : "x";
}
function m(e) {
    return "y" === e ? "height" : "width";
}
let g = new Set(["top", "bottom"]);
function A(e) {
    return g.has(p(e)) ? "y" : "x";
}
function I(e) {
    return E(A(e));
}
function T(e, t, n) {
    void 0 === n && (n = !1);
    let r = h(e),
        i = I(e),
        s = m(i),
        a = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = b(a)), [a, b(a)];
}
function S(e) {
    let t = b(e);
    return [y(e), t, y(t)];
}
function y(e) {
    return e.replace(/start|end/g, (e) => d[e]);
}
let N = ["left", "right"],
    v = ["right", "left"],
    C = ["top", "bottom"],
    O = ["bottom", "top"];
function R(e, t, n, r) {
    let i = h(e),
        s = (function (e, t, n) {
            switch (e) {
                case "top":
                case "bottom":
                    if (n) return t ? v : N;
                    return t ? N : v;
                case "left":
                case "right":
                    return t ? C : O;
                default:
                    return [];
            }
        })(p(e), "start" === n, r);
    return i && ((s = s.map((e) => e + "-" + i)), t && (s = s.concat(s.map(y)))), s;
}
function b(e) {
    return e.replace(/left|right|bottom|top/g, (e) => c[e]);
}
function D(e) {
    return "number" != typeof e
        ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
        : { top: e, right: e, bottom: e, left: e };
}
function L(e) {
    let { x: t, y: n, width: r, height: i } = e;
    return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
}
