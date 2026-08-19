"use strict";
var n = r(439619),
    o = n("%RegExp%"),
    i = r(741623),
    a = n("%parseInt%"),
    s = r(906046),
    l = r(429013),
    u = s("String.prototype.slice"),
    c = l(/^0b[01]+$/i),
    f = l(/^0o[0-7]+$/i),
    p = l(/^[-+]0x[0-9a-f]+$/i),
    d = l(new o("[\x85\u200B\uFFFE]", "g")),
    h = r(886309);
e.exports = function e(t) {
    if ("string" != typeof t) throw new i("Assertion failed: `argument` is not a String");
    if (c(t)) return +a(u(t, 2), 2);
    if (f(t)) return +a(u(t, 2), 8);
    if (d(t) || p(t)) return NaN;
    var r = h(t);
    return r !== t ? e(r) : +t;
};
