var i = Array.prototype.slice,
    r = n(775569),
    a = n(35262),
    s = (e.exports = function (e, t, n) {
        return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : e && t && ('object' == typeof e || 'object' == typeof t) ? u(e, t, n) : n.strict ? e === t : e == t);
    });
function o(e) {
    return null == e;
}
function l(e) {
    return !!e && 'object' == typeof e && 'number' == typeof e.length && 'function' == typeof e.copy && 'function' == typeof e.slice && (!(e.length > 0) || 'number' == typeof e[0]);
}
function u(e, t, n) {
    var u, c;
    if (o(e) || o(t) || e.prototype !== t.prototype) return !1;
    if (a(e)) return !!a(t) && s((e = i.call(e)), (t = i.call(t)), n);
    if (l(e)) {
        if (!l(t) || e.length !== t.length) return !1;
        for (u = 0; u < e.length; u++) if (e[u] !== t[u]) return !1;
        return !0;
    }
    try {
        var d = r(e),
            f = r(t);
    } catch (e) {
        return !1;
    }
    if (d.length != f.length) return !1;
    for (d.sort(), f.sort(), u = d.length - 1; u >= 0; u--) if (d[u] != f[u]) return !1;
    for (u = d.length - 1; u >= 0; u--) if (!s(e[(c = d[u])], t[c], n)) return !1;
    return typeof e == typeof t;
}
