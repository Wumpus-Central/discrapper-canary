"use strict";
var n = r(439619),
    i = n("%RegExp%"),
    o = r(741623),
    a = n("%parseInt%"),
    s = r(906046),
    l = r(429013),
    u = s("String.prototype.slice"),
    c = l(/^0b[01]+$/i),
    f = l(/^0o[0-7]+$/i),
    d = l(/^[-+]0x[0-9a-f]+$/i),
    p = l(new i("[\x85\u200B\uFFFE]", "g")),
    h = r(886309);
e.exports = function e(t) {
    if ("string" != typeof t) throw new o("Assertion failed: `argument` is not a String");
    if (c(t)) return +a(u(t, 2), 2);
    if (f(t)) return +a(u(t, 2), 8);
    if (p(t) || d(t)) return NaN;
    var r = h(t);
    return r !== t ? e(r) : +t;
};
