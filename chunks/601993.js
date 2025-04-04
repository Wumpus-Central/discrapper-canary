n.d(t, {
    Gb: () => s,
    RD: () => h,
    Rs: () => _,
    WA: () => f,
    _2: () => p,
    f5: () => d,
    fG: () => u,
    gL: () => c
});
var r = n(579806),
    i = n(405826),
    o = n(358085);
function a() {
    return (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck) != null;
}
function s() {
    return (0, o.isDesktop)() && a();
}
let l = s() ? (0, i.N)() : null;
async function c(e) {
    let t = await l;
    null != t && (t.enabled = e);
}
async function u(e) {
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
        r = await l;
    return null == r ? [] : r.getCorrectionsForMisspelling(e, t).slice(0, n);
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
    if (!a()) return () => {};
    let t = r.Z.spellCheck.on('spellcheck-result', e);
    return null != t ? t : () => {};
}
