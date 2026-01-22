var r = n(439619),
    i = n(741623),
    a = r("%Number%"),
    s = n(858156),
    o = n(449950),
    l = n(483955);
e.exports = function (e) {
    var t = s(e) ? e : o(e, a);
    if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
    if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
    return "string" == typeof t ? l(t) : +t;
};
