n.d(t, {
    $7: () => s,
    Bk: () => o,
    Xf: () => l,
    a5: () => a,
    lM: () => c,
});
var r = n(166862),
    i = n(73510);
function a(e) {
    let t = e.toLowerCase() === i.NH.toLowerCase(),
        n = e.toLowerCase() === i.oW.toLowerCase();
    if (t || n) return t;
}
function s(e, t) {
    var n;
    let r = null == e || null == (n = e.find((e) => e.displayName === t)) ? void 0 : n.value;
    if ("string" == typeof r) return r;
}
function o(e, t) {
    var n;
    let r = null == e || null == (n = e.find((e) => e.displayName === t)) ? void 0 : n.value;
    if ("number" == typeof r) return r;
}
function l(e, t, n) {
    return s(r.A.getAutocompleteLastChoices(e, t), n);
}
function c(e, t, n) {
    return o(r.A.getAutocompleteLastChoices(e, t), n);
}
