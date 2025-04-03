for (var e = n(293303), o = n(294377), i = n(96403), u = n(538769), s = n(360518), c = o('Symbol'), f = c.isWellKnownSymbol, a = o('Object', 'getOwnPropertyNames'), p = i(c.prototype.valueOf), v = e('wks'), l = 0, y = a(c), h = y.length; l < h; l++)
    try {
        var x = y[l];
        u(c[x]) && s(x);
    } catch (t) {}
t.exports = function (t) {
    if (f && f(t)) return !0;
    try {
        for (var r = p(t), n = 0, e = a(v), o = e.length; n < o; n++) if (v[e[n]] == r) return !0;
    } catch (t) {}
    return !1;
};
