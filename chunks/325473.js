var r = n(338547);
e.exports = function (e) {
    return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : r(e);
};
