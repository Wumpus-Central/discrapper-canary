"use strict";
var n = r(439619),
    o = r(906046),
    i = r(741623),
    a = r(32561),
    s = n("%Reflect.apply%", !0) || o("Function.prototype.apply");
e.exports = function (e, t) {
    var r = arguments.length > 2 ? arguments[2] : [];
    if (!a(r)) throw new i("Assertion failed: optional `argumentsList`, if provided, must be a List");
    return s(e, t, r);
};
