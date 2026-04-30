"use strict";
var i = n(503199),
    r = n(120394),
    s = RangeError;
e.exports = function (e, t, n, a) {
    var o = i(e),
        l = r(n),
        u = l < 0 ? o + l : l;
    if (u >= o || u < 0) throw new s("Incorrect index");
    for (var c = new t(o), d = 0; d < o; d++) c[d] = d === u ? a : e[d];
    return c;
};
