"use strict";
n.d(t, { Av: () => p, Os: () => _, PS: () => d, TT: () => o, d1: () => c, kv: () => u, nL: () => h, rK: () => f });
var r = n(77729),
    i = n(9858),
    s = n(723702);
function a() {
    return r.A?.spellCheck != null;
}
function o() {
    return (0, s.isDesktop)() && a();
}
let l = o() ? (0, i.J)() : null;
async function u(e) {
    let t = await l;
    null != t && (t.enabled = e);
}
async function c(e) {
    let t = await l;
    null != t && t.setLearnedWords(e);
}
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = await l;
    return null != n && n.isMisspelled(e, t);
}
async function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        r = await l;
    return null == r ? [] : r.getCorrectionsForMisspelling(e, t).slice(0, n);
}
async function f(e) {
    let t = await l;
    null != t && t.replaceMisspelling(e);
}
async function p(e) {
    let t = await l;
    null != t && t.setAppLocale(e);
}
function h(e) {
    return a() ? (r.A.spellCheck.on("spellcheck-result", e) ?? (() => {})) : () => {};
}
