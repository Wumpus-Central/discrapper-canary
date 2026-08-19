"use strict";
var n = r(439619),
    o = r(741623),
    i = n("%Number%"),
    a = r(858156),
    s = r(449950),
    l = r(483955);
e.exports = function (e) {
    var t = a(e) ? e : s(e, i);
    if ("symbol" == typeof t) throw new o("Cannot convert a Symbol value to a number");
    if ("bigint" == typeof t) throw new o("Conversion from 'BigInt' to 'number' is not allowed.");
    return "string" == typeof t ? l(t) : +t;
};
