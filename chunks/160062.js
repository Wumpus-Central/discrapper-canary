n.d(t, {
    Kl: () => a,
    Wv: () => l,
    cT: () => o,
    l1: () => s,
    xg: () => c
});
var r = n(174212),
    i = n(689079);
function a(e) {
    let t = e.toLowerCase() === i.WO.toLowerCase(),
        n = e.toLowerCase() === i.Lu.toLowerCase();
    if (t || n) return t;
}
function o(e, t) {
    var n;
    let r = null == e || null == (n = e.find((e) => e.displayName === t)) ? void 0 : n.value;
    if ('string' == typeof r) return r;
}
function s(e, t) {
    var n;
    let r = null == e || null == (n = e.find((e) => e.displayName === t)) ? void 0 : n.value;
    if ('number' == typeof r) return r;
}
function l(e, t, n) {
    return o(r.Z.getAutocompleteLastChoices(e, t), n);
}
function c(e, t, n) {
    return s(r.Z.getAutocompleteLastChoices(e, t), n);
}
