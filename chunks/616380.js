"use strict";
var n = r(439619),
    o = r(142896),
    i = o(n("String.prototype.indexOf"));
e.exports = function (e, t) {
    var r = n(e, !!t);
    return "function" == typeof r && i(e, ".prototype.") > -1 ? o(r) : r;
};
