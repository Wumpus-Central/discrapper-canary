var r = n(931282);
e.exports = function (e) {
    return 'symbol' == typeof e ? 'Symbol' : 'bigint' == typeof e ? 'BigInt' : r(e);
};
