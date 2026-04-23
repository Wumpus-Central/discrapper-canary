"use strict";
var r = n(410323),
    i = n(210140),
    s = n(581390),
    a = n(464324).indexOf,
    o = n(239586),
    l = r([].push);
e.exports = function (e, t) {
    var n,
        r = s(e),
        u = 0,
        c = [];
    for (n in r) !i(o, n) && i(r, n) && l(c, n);
    for (; t.length > u; ) i(r, (n = t[u++])) && (~a(c, n) || l(c, n));
    return c;
};
