"use strict";
n.d(t, { QE: () => c, S1: () => u, Vq: () => l, iT: () => s, m6: () => a, xb: () => o });
let r = !1,
    i = "development" === window.GLOBAL_ENV.PROJECT_ENV;
function a() {
    return r;
}
function s() {
    return i;
}
function o(e) {
    throw Error(`Unhandled value: ${e}`);
}
function l(e) {
    return null != e;
}
function u(e, t) {
    return t.includes(e);
}
function c(e) {
    return null != e[1];
}
