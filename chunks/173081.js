var r = n(741623),
    i = n(14665),
    a = n(798493),
    s = n(44650),
    o = n(159367),
    l = n(732937),
    c = n(94535),
    u = n(228047),
    d = n(227106);
e.exports = function (e, t, n) {
    if (!d(e)) throw new r("Assertion failed: Type(O) is not Object");
    if (!l(t)) throw new r("Assertion failed: P is not a Property Key");
    var f = i(n) ? n : u(n);
    if (!i(f)) throw new r("Assertion failed: Desc is not a valid Property Descriptor");
    return a(o, c, s, e, t, f);
};
