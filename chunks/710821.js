"use strict";
var r = n(503199),
    i = n(120394),
    a = RangeError;
e.exports = function (e, t, n, s) {
    var o = r(e),
        l = i(n),
        u = l < 0 ? o + l : l;
    if (u >= o || u < 0) throw new a("Incorrect index");
    for (var c = new t(o), d = 0; d < o; d++) c[d] = d === u ? s : e[d];
    return c;
};
