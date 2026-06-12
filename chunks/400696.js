"use strict";
var i = n(906046),
    r = i("String.prototype.valueOf"),
    s = function (e) {
        try {
            return r(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = i("Object.prototype.toString"),
    o = n(581070)();
e.exports = function (e) {
    return "string" == typeof e || (!!e && "object" == typeof e && (o ? s(e) : "[object String]" === a(e)));
};
