"use strict";
var r = n(410323),
    i = n(210140),
    a = n(581390),
    s = n(464324).indexOf,
    o = n(239586),
    l = r([].push);
e.exports = function (e, t) {
    var n,
        r = a(e),
        u = 0,
        c = [];
    for (n in r) !i(o, n) && i(r, n) && l(c, n);
    for (; t.length > u; ) i(r, (n = t[u++])) && (~s(c, n) || l(c, n));
    return c;
};
