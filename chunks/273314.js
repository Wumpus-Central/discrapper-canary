var r = n(690244),
    i = r('%TypeError%'),
    o = r('%Number%'),
    a = n(814277),
    s = n(444685),
    l = n(537631);
e.exports = function (e) {
    var t = a(e) ? e : s(e, o);
    if ('symbol' == typeof t) throw new i('Cannot convert a Symbol value to a number');
    if ('bigint' == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
    return 'string' == typeof t ? l(t) : o(t);
};
