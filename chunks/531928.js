"use strict";
var r = n(715804),
    a = n(123210),
    o = String.prototype;
e.exports = function (e) {
    var t = e.trimStart;
    return "string" == typeof e || e === o || (r(o, e) && t === o.trimStart) ? a : t;
};
