"use strict";
var r = n(439619),
    i = r("%RegExp%"),
    a = n(741623),
    s = r("%parseInt%"),
    o = n(906046),
    l = n(429013),
    u = o("String.prototype.slice"),
    c = l(/^0b[01]+$/i),
    d = l(/^0o[0-7]+$/i),
    _ = l(/^[-+]0x[0-9a-f]+$/i),
    f = l(new i("[\x85​￾]", "g")),
    p = n(886309);
e.exports = function e(t) {
    if ("string" != typeof t) throw new a("Assertion failed: `argument` is not a String");
    if (c(t)) return +s(u(t, 2), 2);
    if (d(t)) return +s(u(t, 2), 8);
    if (f(t) || _(t)) return NaN;
    var n = p(t);
    return n !== t ? e(n) : +t;
};
