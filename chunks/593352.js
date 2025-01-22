for (var i = r(293303), a = r(294377), o = r(96403), s = r(538769), l = r(360518), u = a('Symbol'), c = u.isWellKnownSymbol, d = a('Object', 'getOwnPropertyNames'), f = o(u.prototype.valueOf), p = i('wks'), h = 0, _ = d(u), m = _.length; h < m; h++)
    try {
        var g = _[h];
        s(u[g]) && l(g);
    } catch (e) {}
e.exports = function (e) {
    if (c && c(e)) return !0;
    try {
        for (var n = f(e), r = 0, i = d(p), a = i.length; r < a; r++) if (p[i[r]] == n) return !0;
    } catch (e) {}
    return !1;
};
