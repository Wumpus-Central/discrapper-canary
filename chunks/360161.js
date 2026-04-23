"use strict";
n.d(t, { $7: () => a, Bk: () => o, Xf: () => l, a5: () => s, lM: () => u });
var r = n(166862),
    i = n(73510);
function s(e) {
    let t = e.toLowerCase() === i.NH.toLowerCase(),
        n = e.toLowerCase() === i.oW.toLowerCase();
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
    return a(r.A.getAutocompleteLastChoices(e, t), n);
}
function u(e, t, n) {
    return o(r.A.getAutocompleteLastChoices(e, t), n);
}
