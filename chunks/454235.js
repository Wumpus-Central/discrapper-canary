n.d(t, { Av: () => I, Os: () => c, PS: () => d, TT: () => _, d1: () => E, kv: () => o, nL: () => A, rK: () => u });
var i = n(77729),
    r = n(710285),
    a = n(723702);
function s() {
    return i.A?.spellCheck != null;
}
function _() {
    return (0, a.isDesktop)() && s();
}
let l = _() ? (0, r.J)() : null;
async function o(e) {
    let t = await l;
    null != t && (t.enabled = e);
}
async function E(e) {
    let t = await l;
    null != t && t.setLearnedWords(e);
}
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = await l;
    return null != n && n.isMisspelled(e, t);
}
async function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        i = await l;
    return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n);
}
async function u(e) {
    let t = await l;
    null != t && t.replaceMisspelling(e);
}
async function I(e) {
    let t = await l;
    null != t && t.setAppLocale(e);
}
function A(e) {
    return s() ? (i.A.spellCheck.on("spellcheck-result", e) ?? (() => {})) : () => {};
}
