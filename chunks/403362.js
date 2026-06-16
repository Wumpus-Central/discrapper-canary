"use strict";
n.d(t, { Eo: () => u, QE: () => c, S1: () => l, Vq: () => o, iT: () => s, m6: () => r, xb: () => a });
let i = "development" === window.GLOBAL_ENV.PROJECT_ENV;
function r() {
    return !1;
}
function s() {
    return i;
}
function a(e) {
    throw Error(`Unhandled value: ${e}`);
}
function o(e) {
    return null != e;
}
function l(e, t) {
    return t.includes(e);
}
function u(e, t) {
    return t.has(e);
}
function c(e) {
    return null != e[1];
}
