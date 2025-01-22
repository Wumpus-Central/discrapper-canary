var i = r(690244),
    a = i('%Number%'),
    o = i('%RegExp%'),
    s = i('%TypeError%'),
    l = i('%parseInt%'),
    u = r(192853),
    c = r(385097),
    d = u('String.prototype.slice'),
    f = c(/^0b[01]+$/i),
    p = c(/^0o[0-7]+$/i),
    h = c(/^[-+]0x[0-9a-f]+$/i),
    _ = c(new o('[\x85\u200B\uFFFE]', 'g')),
    m = r(761652),
    g = r(632384);
e.exports = function e(n) {
    if ('String' !== g(n)) throw new s('Assertion failed: `argument` is not a String');
    if (f(n)) return a(l(d(n, 2), 2));
    if (p(n)) return a(l(d(n, 2), 8));
    if (_(n) || h(n)) return NaN;
    var r = m(n);
    return r !== n ? e(r) : a(n);
};
