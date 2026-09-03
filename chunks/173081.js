var n = r(741623),
    i = r(14665),
    o = r(798493),
    a = r(44650),
    s = r(159367),
    l = r(732937),
    u = r(94535),
    c = r(228047),
    f = r(227106);
e.exports = function (e, t, r) {
    if (!f(e)) throw new n("Assertion failed: Type(O) is not Object");
    if (!l(t)) throw new n("Assertion failed: P is not a Property Key");
    var d = i(r) ? r : c(r);
    if (!i(d)) throw new n("Assertion failed: Desc is not a valid Property Descriptor");
    return o(s, u, a, e, t, d);
};
