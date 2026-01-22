n.d(t, {
    Av: () => _,
    Os: () => f,
    PS: () => d,
    TT: () => o,
    d1: () => u,
    kv: () => c,
    nL: () => h,
    rK: () => p,
});
var r = n(77729),
    i = n(9858),
    a = n(723702);

function s() {
    return (null === r.A || void 0 === r.A ? void 0 : r.A.spellCheck) != null;
}

function o() {
    return (0, a.isDesktop)() && s();
}
let l = o() ? (0, i.J)() : null;
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
async function p(e) {
    let t = await l;
    null != t && t.replaceMisspelling(e);
}
async function _(e) {
    let t = await l;
    null != t && t.setAppLocale(e);
}

function h(e) {
    if (!s()) return () => {};
    let t = r.A.spellCheck.on("spellcheck-result", e);
    return null != t ? t : () => {};
}
