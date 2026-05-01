"use strict";
var i = n(120394),
    r = Math.max,
    s = Math.min;
e.exports = function (e, t) {
    var n = i(e);
    return n < 0 ? r(n + t, 0) : s(n, t);
};
