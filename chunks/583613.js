"use strict";
function i(e, t) {
    if (e === t) return !0;
    if (null == e || null == t || e.length !== t.length) return !1;
    let n = e.length;
    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
    return !0;
}
function r(e) {
    let t = null,
        n = null;
    return function () {
        for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
        return i(t, s) || (n = e(...s)), (t = s), n;
    };
}
function s(e) {
    for (var t in e) e.hasOwnProperty(t) && delete e[t];
}
function a(e) {
    for (let t in e) return !1;
    return !0;
}
n.d(t, { DJ: () => a, LP: () => s, L_: () => r, in: () => i });
