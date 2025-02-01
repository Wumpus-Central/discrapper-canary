var i = n(691558),
    r = TypeError;
e.exports = function (e) {
    var t = i(e, 'number');
    if ('number' == typeof t) throw r("Can't convert number to bigint");
    return BigInt(t);
};
