"use strict";
function r(e, t) {
    if (e === t) return !0;
    if (null == e || null == t || e.length !== t.length) return !1;
    let n = e.length;
    for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
    return !0;
}
function i(e) {
    let t = null,
        n = null;
    return function () {
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return r(t, s) || (n = e(...s)), (t = s), n;
    };
}
function s(e) {
    for (var t in e) e.hasOwnProperty(t) && delete e[t];
}
function a(e) {
    for (let t in e) return !1;
    return !0;
}
n.d(t, { DJ: () => a, LP: () => s, L_: () => i, in: () => r });
