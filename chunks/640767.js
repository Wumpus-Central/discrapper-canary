var i = n(690244),
    r = i('%Symbol.species%', !0),
    a = i('%TypeError%'),
    s = n(66034),
    o = n(755228),
    l = n(156700),
    u = n(718129),
    c = n(632384),
    d = n(73871);
e.exports = function (e, t) {
    if (!d(t) || t < 0) throw new a('Assertion failed: length must be an integer >= 0');
    if (!l(e)) return s(t);
    var n = o(e, 'constructor');
    if ((r && 'Object' === c(n) && null === (n = o(n, r)) && (n = void 0), void 0 === n)) return s(t);
    if (!u(n)) throw new a('C must be a constructor');
    return new n(t);
};
