"use strict";
var n = r(696367),
    i = TypeError,
    o = r(359268);
e.exports = function (e) {
    var t = n(e);
    if (!t) throw new i("non-iterable value provided");
    return arguments.length > 1 ? o(t, arguments[1]) : o(t);
};
