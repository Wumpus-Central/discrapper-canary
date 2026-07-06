"use strict";
var r = n(324988),
    o = String;
e.exports = function (e) {
    if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
    return o(e);
};
