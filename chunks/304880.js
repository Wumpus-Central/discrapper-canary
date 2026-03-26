"use strict";
var r = n(324988),
    i = String;
e.exports = function (e) {
    if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
    return i(e);
};
