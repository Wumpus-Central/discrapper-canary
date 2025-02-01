var i = n(690244),
    r = i('%TypeError%'),
    a = i('%Number%'),
    s = n(814277),
    o = n(444685),
    l = n(537631);
e.exports = function (e) {
    var t = s(e) ? e : o(e, a);
    if ('symbol' == typeof t) throw new r('Cannot convert a Symbol value to a number');
    if ('bigint' == typeof t) throw new r("Conversion from 'BigInt' to 'number' is not allowed.");
    return 'string' == typeof t ? l(t) : a(t);
};
