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
        for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
        return i(t, a) || (n = e(...a)), (t = a), n;
    };
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5000,
        n = -1,
        i = null;
    return () => ((null == i || Date.now() >= n) && ((n = Date.now() + t), (i = e())), i);
}
function s(e) {
    for (var t in e) e.hasOwnProperty(t) && delete e[t];
}
function o(e) {
    for (let t in e) return !1;
    return !0;
}
n.d(t, {
    EF: () => i,
    Ti: () => s,
    ad: () => a,
    ld: () => o,
    oH: () => r
}),
    n(653041),
    n(177593),
    n(47120);
