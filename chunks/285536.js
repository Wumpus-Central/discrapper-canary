var r = n(50613),
    i = n(257816),
    a = n(467957),
    s = n(168110),
    o = 1 / 0,
    l = r ? r.prototype : void 0,
    u = l ? l.toString : void 0;
function c(e) {
    if ("string" == typeof e) return e;
    if (a(e)) return i(e, c) + "";
    if (s(e)) return u ? u.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -o ? "-0" : t;
}
e.exports = c;
