var n = e(446474),
    o = e(598349),
    i = e(837082),
    u = e(95959),
    a = e(863781),
    c = e(380744),
    f = TypeError,
    s = c("toPrimitive");
r.exports = function (r, t) {
    if (!o(r) || i(r)) return r;
    var e,
        c = u(r, s);
    if (c) {
        if ((void 0 === t && (t = "default"), !o((e = n(c, r, t))) || i(e))) return e;
        throw new f("Can't convert object to primitive value");
    }
    return void 0 === t && (t = "number"), a(r, t);
};
