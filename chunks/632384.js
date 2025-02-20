var r = n(44286);
e.exports = function (e) {
    return 'symbol' == typeof e ? 'Symbol' : 'bigint' == typeof e ? 'BigInt' : r(e);
};
