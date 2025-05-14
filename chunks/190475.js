var e = r(707104),
    o = TypeError;
t.exports = function (t) {
    var n = e(t, 'number');
    if ('number' == typeof n) throw new o("Can't convert number to bigint");
    return BigInt(n);
};
