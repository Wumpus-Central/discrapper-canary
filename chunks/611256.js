var n = r(439619),
    i = r(207001),
    o = r(473560)(),
    a = r(267768),
    s = r(741623),
    l = n("%Math.floor%");
e.exports = function (e, t) {
    if ("function" != typeof e) throw new s("`fn` is not a function");
    if ("number" != typeof t || t < 0 || t > 0xffffffff || l(t) !== t)
        throw new s("`length` must be a positive 32-bit integer");
    var r = arguments.length > 2 && !!arguments[2],
        n = !0,
        u = !0;
    if ("length" in e && a) {
        var c = a(e, "length");
        c && !c.configurable && (n = !1), c && !c.writable && (u = !1);
    }
    return (n || u || !r) && (o ? i(e, "length", t, !0, !0) : i(e, "length", t)), e;
};
