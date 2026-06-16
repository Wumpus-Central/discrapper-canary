"use strict";
var i = n(439619),
    r = n(207001),
    s = n(473560)(),
    a = n(267768),
    o = n(741623),
    l = i("%Math.floor%");
e.exports = function (e, t) {
    if ("function" != typeof e) throw new o("`fn` is not a function");
    if ("number" != typeof t || t < 0 || t > 0xffffffff || l(t) !== t)
        throw new o("`length` must be a positive 32-bit integer");
    var n = arguments.length > 2 && !!arguments[2],
        i = !0,
        u = !0;
    if ("length" in e && a) {
        var c = a(e, "length");
        c && !c.configurable && (i = !1), c && !c.writable && (u = !1);
    }
    return (i || u || !n) && (s ? r(e, "length", t, !0, !0) : r(e, "length", t)), e;
};
