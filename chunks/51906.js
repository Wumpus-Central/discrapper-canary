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
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return r(t, a) || (n = e(...a)), (t = a), n;
    };
}
n.d(t, { L_: () => i }), n(896048);
