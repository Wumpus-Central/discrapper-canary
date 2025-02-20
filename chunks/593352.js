for (var r = n(293303), i = n(294377), o = n(96403), a = n(538769), s = n(360518), l = i('Symbol'), c = l.isWellKnownSymbol, u = i('Object', 'getOwnPropertyNames'), d = o(l.prototype.valueOf), f = r('wks'), p = 0, _ = u(l), h = _.length; p < h; p++)
    try {
        var m = _[p];
        a(l[m]) && s(m);
    } catch (e) {}
e.exports = function (e) {
    if (c && c(e)) return !0;
    try {
        for (var t = d(e), n = 0, r = u(f), i = r.length; n < i; n++) if (f[r[n]] == t) return !0;
    } catch (e) {}
    return !1;
};
