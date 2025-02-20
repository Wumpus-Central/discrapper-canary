var r = n(690244),
    i = r('%Symbol.species%', !0),
    o = r('%TypeError%'),
    a = n(66034),
    s = n(755228),
    l = n(156700),
    c = n(718129),
    u = n(632384),
    d = n(73871);
e.exports = function (e, t) {
    if (!d(t) || t < 0) throw new o('Assertion failed: length must be an integer >= 0');
    if (!l(e)) return a(t);
    var n = s(e, 'constructor');
    if ((i && 'Object' === u(n) && null === (n = s(n, i)) && (n = void 0), void 0 === n)) return a(t);
    if (!c(n)) throw new o('C must be a constructor');
    return new n(t);
};
