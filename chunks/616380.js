"use strict";
var i = n(439619),
    r = n(142896),
    s = r(i("String.prototype.indexOf"));
e.exports = function (e, t) {
    var n = i(e, !!t);
    return "function" == typeof n && s(e, ".prototype.") > -1 ? r(n) : n;
};
