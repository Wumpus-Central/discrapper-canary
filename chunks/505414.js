for (var e = n(866686), o = n(178476), i = n(764908), u = n(839593), s = n(394370), c = o('Symbol'), f = c.isWellKnownSymbol, a = o('Object', 'getOwnPropertyNames'), p = i(c.prototype.valueOf), l = e('wks'), v = 0, y = a(c), h = y.length; v < h; v++)
    try {
        var x = y[v];
        u(c[x]) && s(x);
    } catch (t) {}
t.exports = function (t) {
    if (f && f(t)) return !0;
    try {
        for (var r = p(t), n = 0, e = a(l), o = e.length; n < o; n++) if (l[e[n]] == r) return !0;
    } catch (t) {}
    return !1;
};
