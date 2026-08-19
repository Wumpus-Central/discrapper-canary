"use strict";
function i(e, t) {
    return (e & t) === t;
}
function r(e, t) {
    return (e & t) != 0;
}
function a(e, t) {
    return e | t;
}
function s(e, t) {
    return e & ~t;
}
function l(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return n.reduce((e, t) => e & ~t, e);
}
function o(e, t, n) {
    return n ? e | t : e & ~t;
}
function d(e, t) {
    return i(e, t) ? e & ~t : e | t;
}
n.d(t, { Lt: () => i, PQ: () => d, UI: () => a, VL: () => s, br: () => r, iE: () => l, lA: () => o });
