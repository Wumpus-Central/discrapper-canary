var r = n(439619)("%Symbol.species%", !0),
    i = n(741623),
    a = n(358073),
    s = n(579405),
    o = n(605468),
    l = n(32561),
    c = n(450460),
    u = n(227106);
e.exports = function (e, t) {
    if (!a(t) || t < 0) throw new i("Assertion failed: length must be an integer >= 0");
    if (!l(e)) return s(t);
    var n = o(e, "constructor");
    if ((r && u(n) && null === (n = o(n, r)) && (n = void 0), void 0 === n)) return s(t);
    if (!c(n)) throw new i("C must be a constructor");
    return new n(t);
};
