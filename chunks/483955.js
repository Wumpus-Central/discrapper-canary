"use strict";
var i = n(439619),
    r = i("%RegExp%"),
    s = n(741623),
    a = i("%parseInt%"),
    o = n(906046),
    l = n(429013),
    u = o("String.prototype.slice"),
    c = l(/^0b[01]+$/i),
    d = l(/^0o[0-7]+$/i),
    _ = l(/^[-+]0x[0-9a-f]+$/i),
    f = l(new r("[\x85\u200B\uFFFE]", "g")),
    h = n(886309);
e.exports = function e(t) {
    if ("string" != typeof t) throw new s("Assertion failed: `argument` is not a String");
    if (c(t)) return +a(u(t, 2), 2);
    if (d(t)) return +a(u(t, 2), 8);
    if (f(t) || _(t)) return NaN;
    var n = h(t);
    return n !== t ? e(n) : +t;
};
