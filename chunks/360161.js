n.d(t, { $7: () => s, Bk: () => l, Xf: () => o, a5: () => r, lM: () => d });
var i = n(166862),
    a = n(73510);
function r(e) {
    let t = e.toLowerCase() === a.NH.toLowerCase(),
        n = e.toLowerCase() === a.oW.toLowerCase();
    if (t || n) return t;
}
function s(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("string" == typeof n) return n;
}
function l(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("number" == typeof n) return n;
}
function o(e, t, n) {
    return s(i.A.getAutocompleteLastChoices(e, t), n);
}
function d(e, t, n) {
    return l(i.A.getAutocompleteLastChoices(e, t), n);
}
