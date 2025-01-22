var i = Array.prototype.slice,
    a = r(775569),
    o = r(35262),
    s = (e.exports = function (e, n, r) {
        if ((!r && (r = {}), e === n)) return !0;
        if (e instanceof Date && n instanceof Date) return e.getTime() === n.getTime();
        if (!e || !n || ('object' != typeof e && 'object' != typeof n)) return r.strict ? e === n : e == n;
        else return c(e, n, r);
    });
function l(e) {
    return null == e;
}
function u(e) {
    return !!e && 'object' == typeof e && 'number' == typeof e.length && 'function' == typeof e.copy && 'function' == typeof e.slice && (!(e.length > 0) || 'number' == typeof e[0]) && !0;
}
function c(e, n, r) {
    var c, d;
    if (l(e) || l(n) || e.prototype !== n.prototype) return !1;
    if (o(e)) return !!o(n) && ((e = i.call(e)), s(e, (n = i.call(n)), r));
    if (u(e)) {
        if (!u(n) || e.length !== n.length) return !1;
        for (c = 0; c < e.length; c++) if (e[c] !== n[c]) return !1;
        return !0;
    }
    try {
        var f = a(e),
            p = a(n);
    } catch (e) {
        return !1;
    }
    if (f.length != p.length) return !1;
    for (f.sort(), p.sort(), c = f.length - 1; c >= 0; c--) if (f[c] != p[c]) return !1;
    for (c = f.length - 1; c >= 0; c--) if (!s(e[(d = f[c])], n[d], r)) return !1;
    return typeof e == typeof n;
}
