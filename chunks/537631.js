var r = n(690244),
    i = r('%Number%'),
    o = r('%RegExp%'),
    a = r('%TypeError%'),
    s = r('%parseInt%'),
    l = n(192853),
    c = n(385097),
    u = l('String.prototype.slice'),
    d = c(/^0b[01]+$/i),
    f = c(/^0o[0-7]+$/i),
    _ = c(/^[-+]0x[0-9a-f]+$/i),
    p = c(new o('[\x85\u200B\uFFFE]', 'g')),
    h = n(761652),
    m = n(632384);
e.exports = function e(t) {
    if ('String' !== m(t)) throw new a('Assertion failed: `argument` is not a String');
    if (d(t)) return i(s(u(t, 2), 2));
    if (f(t)) return i(s(u(t, 2), 8));
    if (p(t) || _(t)) return NaN;
    var n = h(t);
    return n !== t ? e(n) : i(t);
};
