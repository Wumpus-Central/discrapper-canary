n.d(t, { $7: () => s, Bk: () => _, Xf: () => l, a5: () => a, lM: () => o });
var i = n(166862),
    r = n(73510);
function a(e) {
    let t = e.toLowerCase() === r.NH.toLowerCase(),
        n = e.toLowerCase() === r.oW.toLowerCase();
    if (t || n) return t;
}
function s(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("string" == typeof n) return n;
}
function _(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("number" == typeof n) return n;
}
function l(e, t, n) {
    return s(i.A.getAutocompleteLastChoices(e, t), n);
}
function o(e, t, n) {
    return _(i.A.getAutocompleteLastChoices(e, t), n);
}
