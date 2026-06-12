"use strict";
var i = n(338547);
e.exports = function (e) {
    return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : i(e);
};
