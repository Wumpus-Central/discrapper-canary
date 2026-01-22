var r = n(439619),
    i = r("%RegExp%"),
    a = n(741623),
    s = r("%parseInt%"),
    o = n(906046),
    l = n(429013),
    c = o("String.prototype.slice"),
    u = l(/^0b[01]+$/i),
    d = l(/^0o[0-7]+$/i),
    f = l(/^[-+]0x[0-9a-f]+$/i),
    p = l(new i("[\x85\u200B\uFFFE]", "g")),
    _ = n(886309);
e.exports = function e(t) {
    if ("string" != typeof t) throw new a("Assertion failed: `argument` is not a String");
    if (u(t)) return +s(c(t, 2), 2);
    if (d(t)) return +s(c(t, 2), 8);
    if (p(t) || f(t)) return NaN;
    var n = _(t);
    return n !== t ? e(n) : +t;
};
