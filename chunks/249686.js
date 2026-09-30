var n = e(269791),
    i = e(109850),
    p = e(114727),
    o = e(377482),
    u = e(667349),
    c = e(208009),
    a = e(424478),
    f = e(678270),
    s = Object.prototype.hasOwnProperty;
r.exports = function (r) {
    if (null == r) return !0;
    if (u(r) && (o(r) || "string" == typeof r || "function" == typeof r.splice || c(r) || f(r) || p(r)))
        return !r.length;
    var t = i(r);
    if ("[object Map]" == t || "[object Set]" == t) return !r.size;
    if (a(r)) return !n(r).length;
    for (var e in r) if (s.call(r, e)) return !1;
    return !0;
};
