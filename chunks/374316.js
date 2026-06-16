"use strict";
var i = n(446474),
    r = n(598349),
    s = n(837082),
    a = n(95959),
    o = n(863781),
    l = n(380744),
    u = TypeError,
    c = l("toPrimitive");
e.exports = function (e, t) {
    if (!r(e) || s(e)) return e;
    var n,
        l = a(e, c);
    if (l) {
        if ((void 0 === t && (t = "default"), !r((n = i(l, e, t))) || s(n))) return n;
        throw new u("Can't convert object to primitive value");
    }
    return void 0 === t && (t = "number"), o(e, t);
};
