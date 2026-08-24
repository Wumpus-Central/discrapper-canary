"use strict";
var n = r(439619),
    i = r(741623),
    o = n("%Number%"),
    a = r(858156),
    s = r(449950),
    l = r(483955);
e.exports = function (e) {
    var t = a(e) ? e : s(e, o);
    if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
    if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
    return "string" == typeof t ? l(t) : +t;
};
