"use strict";
var r = n(696367),
    i = TypeError,
    a = n(359268);
e.exports = function (e) {
    var t = r(e);
    if (!t) throw new i("non-iterable value provided");
    return arguments.length > 1 ? a(t, arguments[1]) : a(t);
};
