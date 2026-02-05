"use strict";
var r = n(439619),
    i = n(142896),
    a = i(r("String.prototype.indexOf"));
e.exports = function (e, t) {
    var n = r(e, !!t);
    return "function" == typeof n && a(e, ".prototype.") > -1 ? i(n) : n;
};
