var r = n(707104),
    i = TypeError;
e.exports = function (e) {
    var t = r(e, 'number');
    if ('number' == typeof t) throw new i("Can't convert number to bigint");
    return BigInt(t);
};
