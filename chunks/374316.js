var r = n(446474),
    i = n(598349),
    a = n(837082),
    s = n(95959),
    o = n(863781),
    l = n(380744),
    c = TypeError,
    u = l("toPrimitive");
e.exports = function (e, t) {
    if (!i(e) || a(e)) return e;
    var n,
        l = s(e, u);
    if (l) {
        if ((void 0 === t && (t = "default"), !i((n = r(l, e, t))) || a(n))) return n;
        throw new c("Can't convert object to primitive value");
    }
    return void 0 === t && (t = "number"), o(e, t);
};
