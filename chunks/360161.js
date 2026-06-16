"use strict";
n.d(t, { $7: () => a, Bk: () => o, Xf: () => l, a5: () => s, lM: () => u });
var i = n(166862),
    r = n(73510);
function s(e) {
    let t = e.toLowerCase() === r.NH.toLowerCase(),
        n = e.toLowerCase() === r.oW.toLowerCase();
    if (t || n) return t;
}
function a(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("string" == typeof n) return n;
}
function o(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("number" == typeof n) return n;
}
function l(e, t, n) {
    return a(i.A.getAutocompleteLastChoices(e, t), n);
}
function u(e, t, n) {
    return o(i.A.getAutocompleteLastChoices(e, t), n);
}
