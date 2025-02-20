var r = n(417333);
e.exports = function (e) {
    return 'symbol' == typeof e ? 'Symbol' : 'bigint' == typeof e ? 'BigInt' : r(e);
};
