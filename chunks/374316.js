var n = e(446474),
    o = e(598349),
    i = e(837082),
    a = e(95959),
    u = e(863781),
    c = e(380744),
    f = TypeError,
    p = c("toPrimitive");
r.exports = function (r, t) {
    if (!o(r) || i(r)) return r;
    var e,
        c = a(r, p);
    if (c) {
        if ((void 0 === t && (t = "default"), !o((e = n(c, r, t))) || i(e))) return e;
        throw new f("Can't convert object to primitive value");
    }
    return void 0 === t && (t = "number"), u(r, t);
};
