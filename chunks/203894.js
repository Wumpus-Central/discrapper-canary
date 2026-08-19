"use strict";
var n = r(338547);
e.exports = function (e) {
    return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : n(e);
};
