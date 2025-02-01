for (var i = n(293303), r = n(294377), a = n(96403), s = n(538769), o = n(360518), l = r('Symbol'), u = l.isWellKnownSymbol, c = r('Object', 'getOwnPropertyNames'), d = a(l.prototype.valueOf), f = i('wks'), _ = 0, p = c(l), h = p.length; _ < h; _++)
    try {
        var m = p[_];
        s(l[m]) && o(m);
    } catch (e) {}
e.exports = function (e) {
    if (u && u(e)) return !0;
    try {
        for (var t = d(e), n = 0, i = c(f), r = i.length; n < r; n++) if (f[i[n]] == t) return !0;
    } catch (e) {}
    return !1;
};
