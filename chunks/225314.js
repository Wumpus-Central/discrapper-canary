"use strict";
var n = r(381265),
    o = r(854970),
    i = r(142896),
    a = r(906046),
    s = r(691162),
    l = r(189891),
    u = i.apply(l()),
    c = r(255733),
    f = a("Array.prototype.slice"),
    p = function (e, t) {
        return o(e), u(e, f(arguments, 1));
    };
n(p, { getPolyfill: l, implementation: s, shim: c }), (e.exports = p);
