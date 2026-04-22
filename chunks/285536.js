var r = n(50613),
    i = n(257816),
    s = n(467957),
    a = n(168110),
    o = 1 / 0,
    l = r ? r.prototype : void 0,
    u = l ? l.toString : void 0;
e.exports = function e(t) {
    if ("string" == typeof t) return t;
    if (s(t)) return i(t, e) + "";
    if (a(t)) return u ? u.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -o ? "-0" : n;
};
