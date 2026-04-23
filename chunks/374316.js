"use strict";
var r = n(446474),
    i = n(598349),
    s = n(837082),
    a = n(95959),
    o = n(863781),
    l = n(380744),
    u = TypeError,
    c = l("toPrimitive");
e.exports = function (e, t) {
    if (!i(e) || s(e)) return e;
    var n,
        l = a(e, c);
    if (l) {
        if ((void 0 === t && (t = "default"), !i((n = r(l, e, t))) || s(n))) return n;
        throw new u("Can't convert object to primitive value");
    }
    return void 0 === t && (t = "number"), o(e, t);
};
