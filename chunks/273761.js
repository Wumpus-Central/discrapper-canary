"use strict";
var r = n(120394),
    i = Math.max,
    s = Math.min;
e.exports = function (e, t) {
    var n = r(e);
    return n < 0 ? i(n + t, 0) : s(n, t);
};
