var i = n(44286);
e.exports = function (e) {
    return 'symbol' == typeof e ? 'Symbol' : 'bigint' == typeof e ? 'BigInt' : i(e);
};
