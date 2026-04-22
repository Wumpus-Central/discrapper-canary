"use strict";
n.d(t, { QE: () => u, S1: () => l, Vq: () => o, iT: () => s, m6: () => i, xb: () => a });
let r = "development" === window.GLOBAL_ENV.PROJECT_ENV;
function i() {
    return !1;
}
function s() {
    return r;
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
function u(e) {
    return null != e[1];
}
