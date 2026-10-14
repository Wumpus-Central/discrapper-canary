n.d(t, { Eo: () => c, QE: () => u, S1: () => d, Vq: () => o, fb: () => s, iT: () => a, m6: () => r, xb: () => l });
let i = "development" === window.GLOBAL_ENV.PROJECT_ENV;
function r() {
    return !1;
}
function a() {
    return i;
}
function s() {
    return null;
}
function l(e) {
    throw Error(`Unhandled value: ${e}`);
}
function o(e) {
    return null != e;
}
function d(e, t) {
    return t.includes(e);
}
function c(e, t) {
    return t.has(e);
}
function u(e) {
    return null != e[1];
}
