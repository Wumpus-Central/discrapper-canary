var i = r(690244),
    a = i('%TypeError%'),
    o = i('%Number%'),
    s = r(814277),
    l = r(444685),
    u = r(537631);
e.exports = function (e) {
    var n = s(e) ? e : l(e, o);
    if ('symbol' == typeof n) throw new a('Cannot convert a Symbol value to a number');
    if ('bigint' == typeof n) throw new a("Conversion from 'BigInt' to 'number' is not allowed.");
    return 'string' == typeof n ? u(n) : o(n);
};
