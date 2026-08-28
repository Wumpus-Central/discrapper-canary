var l = i(269791),
    n = i(109850),
    s = i(114727),
    r = i(377482),
    o = i(667349),
    a = i(208009),
    c = i(424478),
    d = i(678270),
    u = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (null == e) return !0;
    if (o(e) && (r(e) || "string" == typeof e || "function" == typeof e.splice || a(e) || d(e) || s(e)))
        return !e.length;
    var t = n(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (c(e)) return !l(e).length;
    for (var i in e) if (u.call(e, i)) return !1;
    return !0;
};
