"use strict";
var i = n(741623),
    r = n(14665),
    s = n(798493),
    a = n(44650),
    o = n(159367),
    l = n(732937),
    u = n(94535),
    c = n(228047),
    d = n(227106);
e.exports = function (e, t, n) {
    if (!d(e)) throw new i("Assertion failed: Type(O) is not Object");
    if (!l(t)) throw new i("Assertion failed: P is not a Property Key");
    var _ = r(n) ? n : c(n);
    if (!r(_)) throw new i("Assertion failed: Desc is not a valid Property Descriptor");
    return s(o, u, a, e, t, _);
};
