n.d(t, { Av: () => A, Os: () => E, PS: () => _, TT: () => l, d1: () => c, kv: () => d, nL: () => I, rK: () => u });
var i = n(77729),
    a = n(710285),
    r = n(723702);
function s() {
    return i.A?.spellCheck != null;
}
function l() {
    return (0, r.isDesktop)() && s();
}
let o = l() ? (0, a.J)() : null;
async function d(e) {
    let t = await o;
    null != t && (t.enabled = e);
}
async function c(e) {
    let t = await o;
    null != t && t.setLearnedWords(e);
}
async function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = await o;
    return null != n && n.isMisspelled(e, t);
}
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        i = await o;
    return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n);
}
async function u(e) {
    let t = await o;
    null != t && t.replaceMisspelling(e);
}
async function A(e) {
    let t = await o;
    null != t && t.setAppLocale(e);
}
function I(e) {
    return s() ? (i.A.spellCheck.on("spellcheck-result", e) ?? (() => {})) : () => {};
}
