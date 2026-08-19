"use strict";
var n = r(696367),
    o = TypeError,
    i = r(359268);
e.exports = function (e) {
    var t = n(e);
    if (!t) throw new o("non-iterable value provided");
    return arguments.length > 1 ? i(t, arguments[1]) : i(t);
};
