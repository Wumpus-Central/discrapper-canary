"use strict";
var n = r(381265),
    i = r(854970),
    o = r(142896),
    a = r(906046),
    s = r(691162),
    l = r(189891),
    u = o.apply(l()),
    c = r(255733),
    f = a("Array.prototype.slice"),
    d = function (e, t) {
        return i(e), u(e, f(arguments, 1));
    };
n(d, { getPolyfill: l, implementation: s, shim: c }), (e.exports = d);
