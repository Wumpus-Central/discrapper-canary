"use strict";
function r(e, t) {
    return (e & t) === t;
}
function i(e, t) {
    return (e & t) != 0;
}
function s(e, t) {
    return e | t;
}
function a(e, t) {
    return e & ~t;
}
function o(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e & ~t, e);
}
function l(e, t, n) {
    return n ? e | t : e & ~t;
}
function u(e, t) {
    return r(e, t) ? e & ~t : e | t;
}
n.d(t, { Lt: () => r, PQ: () => u, UI: () => s, VL: () => a, br: () => i, iE: () => o, lA: () => l });
