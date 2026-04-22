"use strict";
function r(e, t) {
    if (!e) throw Error(t);
}
function i(e) {
    if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
    if (!Number.isInteger(e) || e > 0x7fffffff || e < -0x80000000) throw Error("invalid int 32: " + e);
}
function s(e) {
    if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
    if (!Number.isInteger(e) || e > 0xffffffff || e < 0) throw Error("invalid uint 32: " + e);
}
function a(e) {
    if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22))
        throw Error("invalid float 32: " + e);
}
n.d(t, { bn: () => i, e1: () => s, vA: () => r, wO: () => a });
