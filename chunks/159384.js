"use strict";
var n = e(664886),
    o = e(999843),
    s = e(155084),
    i = e(663172),
    u = e(379180),
    c = TypeError;
t.exports = function (t, r) {
    var e = arguments.length < 2 ? u(t) : r;
    if (o(e)) return s(n(e, t));
    throw new c(i(t) + " is not iterable");
};
