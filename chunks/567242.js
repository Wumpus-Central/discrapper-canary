"use strict";
var r = n(439619),
    i = n(906046),
    a = n(741623),
    s = n(32561),
    o = r("%Reflect.apply%", !0) || i("Function.prototype.apply");
e.exports = function (e, t) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!s(n)) throw new a("Assertion failed: optional `argumentsList`, if provided, must be a List");
    return o(e, t, n);
};
