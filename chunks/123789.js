"use strict";
function r(e, t) {
    if (!e) throw Error(t);
}
n.d(t, { bn: () => u, e1: () => c, vA: () => r, wO: () => d });
let i = 34028234663852886e22,
    a = -34028234663852886e22,
    s = 0xffffffff,
    o = 0x7fffffff,
    l = -0x80000000;
function u(e) {
    if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
    if (!Number.isInteger(e) || e > o || e < l) throw Error("invalid int 32: " + e);
}
function c(e) {
    if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
    if (!Number.isInteger(e) || e > s || e < 0) throw Error("invalid uint 32: " + e);
}
function d(e) {
    if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > i || e < a)) throw Error("invalid float 32: " + e);
}
