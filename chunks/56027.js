"use strict";
n.d(t, {
    B1: () => x,
    C0: () => f,
    DD: () => i,
    Dz: () => v,
    Jx: () => u,
    LI: () => l,
    PG: () => h,
    RI: () => c,
    Sg: () => g,
    T9: () => s,
    TV: () => y,
    WJ: () => T,
    _3: () => m,
    aD: () => C,
    bV: () => M,
    jk: () => o,
    lP: () => R,
    nI: () => N,
    qE: () => p,
    r_: () => r,
    sq: () => b,
    w7: () => S,
});
let r = /^(38190|98365)$/.test(n.j) ? null : ["top", "right", "bottom", "left"],
    a = /^(38190|98365)$/.test(n.j) ? null : ["start", "end"],
    i = /^(38190|98365)$/.test(n.j) ? null : r.reduce((e, t) => e.concat(t, t + "-" + a[0], t + "-" + a[1]), []),
    o = /^(38190|98365)$/.test(n.j) ? null : Math.min,
    s = /^(38190|98365)$/.test(n.j) ? null : Math.max,
    l = /^(38190|98365)$/.test(n.j) ? null : Math.round,
    c = /^(38190|98365)$/.test(n.j) ? null : Math.floor,
    u = (e) => ({ x: e, y: e }),
    d = /^(38190|98365)$/.test(n.j) ? null : { left: "right", right: "left", bottom: "top", top: "bottom" },
    _ = /^(38190|98365)$/.test(n.j) ? null : { start: "end", end: "start" };
function p(e, t, n) {
    return s(e, o(t, n));
}
function m(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function f(e) {
    return e.split("-")[0];
}
function g(e) {
    return e.split("-")[1];
}
function h(e) {
    return "x" === e ? "y" : "x";
}
function b(e) {
    return "y" === e ? "height" : "width";
}
let E = new Set(["top", "bottom"]);
function y(e) {
    return E.has(f(e)) ? "y" : "x";
}
function v(e) {
    return h(y(e));
}
function S(e, t, n) {
    void 0 === n && (n = !1);
    let r = g(e),
        a = v(e),
        i = b(a),
        o = "x" === a ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (o = M(o)), [o, M(o)];
}
function T(e) {
    let t = M(e);
    return [C(e), t, C(t)];
}
function C(e) {
    return e.replace(/start|end/g, (e) => _[e]);
}
let D = /^(38190|98365)$/.test(n.j) ? null : ["left", "right"],
    O = /^(38190|98365)$/.test(n.j) ? null : ["right", "left"],
    w = /^(38190|98365)$/.test(n.j) ? null : ["top", "bottom"],
    A = /^(38190|98365)$/.test(n.j) ? null : ["bottom", "top"];
function R(e, t, n, r) {
    let a = g(e),
        i = (function (e, t, n) {
            switch (e) {
                case "top":
                case "bottom":
                    if (n) return t ? O : D;
                    return t ? D : O;
                case "left":
                case "right":
                    return t ? w : A;
                default:
                    return [];
            }
        })(f(e), "start" === n, r);
    return a && ((i = i.map((e) => e + "-" + a)), t && (i = i.concat(i.map(C)))), i;
}
function M(e) {
    return e.replace(/left|right|bottom|top/g, (e) => d[e]);
}
function N(e) {
    return "number" != typeof e
        ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
        : { top: e, right: e, bottom: e, left: e };
}
function x(e) {
    let { x: t, y: n, width: r, height: a } = e;
    return { width: r, height: a, top: n, left: t, right: t + r, bottom: n + a, x: t, y: n };
}
