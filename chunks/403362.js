"use strict";
n.d(t, { Eo: () => d, QE: () => c, S1: () => o, Vq: () => l, iT: () => a, m6: () => r, xb: () => s });
let i = "development" === window.GLOBAL_ENV.PROJECT_ENV;
function r() {
    return !1;
}
function a() {
    return i;
}
function s(e) {
    throw Error(`Unhandled value: ${e}`);
}
function l(e) {
    return null != e;
}
function o(e, t) {
    return t.includes(e);
}
function d(e, t) {
    return t.has(e);
}
function c(e) {
    return null != e[1];
}
