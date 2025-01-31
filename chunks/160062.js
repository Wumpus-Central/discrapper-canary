n.d(t, {
    Kl: () => a,
    Wv: () => l,
    cT: () => s,
    l1: () => o,
    xg: () => u
});
var i = n(174212),
    r = n(689079);
function a(e) {
    let t = e.toLowerCase() === r.WO.toLowerCase(),
        n = e.toLowerCase() === r.Lu.toLowerCase();
    if (t || n) return t;
}
function s(e, t) {
    var n;
    let i = null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    if ('string' == typeof i) return i;
}
function o(e, t) {
    var n;
    let i = null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    if ('number' == typeof i) return i;
}
function l(e, t, n) {
    return s(i.Z.getAutocompleteLastChoices(e, t), n);
}
function u(e, t, n) {
    return o(i.Z.getAutocompleteLastChoices(e, t), n);
}
