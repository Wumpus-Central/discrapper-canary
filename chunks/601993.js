n.d(t, {
    Gb: () => o,
    RD: () => h,
    Rs: () => _,
    WA: () => f,
    _2: () => p,
    f5: () => d,
    fG: () => c,
    gL: () => u
});
var i = n(579806),
    r = n(405826),
    a = n(358085);
function s() {
    return (null === i.Z || void 0 === i.Z ? void 0 : i.Z.spellCheck) != null;
}
function o() {
    return (0, a.isDesktop)() && s();
}
let l = o() ? (0, r.N)() : null;
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
async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        i = await l;
    return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n);
}
async function _(e) {
    let t = await l;
    null != t && t.replaceMisspelling(e);
}
async function p(e) {
    let t = await l;
    null != t && t.setAppLocale(e);
}
function h(e) {
    if (!s()) return () => {};
    let t = i.Z.spellCheck.on('spellcheck-result', e);
    return null != t ? t : () => {};
}
