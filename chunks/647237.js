var r = n(745872),
    i = r('%RegExp%'),
    o = n(815329),
    a = r('%parseInt%'),
    s = n(166691),
    l = n(190337),
    c = s('String.prototype.slice'),
    u = l(/^0b[01]+$/i),
    d = l(/^0o[0-7]+$/i),
    f = l(/^[-+]0x[0-9a-f]+$/i),
    _ = l(new i('[\x85\u200B\uFFFE]', 'g')),
    p = n(943863);
e.exports = function e(t) {
    if ('string' != typeof t) throw new o('Assertion failed: `argument` is not a String');
    if (u(t)) return +a(c(t, 2), 2);
    if (d(t)) return +a(c(t, 2), 8);
    if (_(t) || f(t)) return NaN;
    var n = p(t);
    return n !== t ? e(n) : +t;
};
