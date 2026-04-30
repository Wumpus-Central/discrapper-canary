"use strict";
var i = n(410323),
    r = n(210140),
    s = n(581390),
    a = n(464324).indexOf,
    o = n(239586),
    l = i([].push);
e.exports = function (e, t) {
    var n,
        i = s(e),
        u = 0,
        c = [];
    for (n in i) !r(o, n) && r(i, n) && l(c, n);
    for (; t.length > u; ) r(i, (n = t[u++])) && (~a(c, n) || l(c, n));
    return c;
};
