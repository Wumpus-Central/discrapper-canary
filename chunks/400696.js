"use strict";
var r = n(906046),
    i = r("String.prototype.valueOf"),
    s = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = r("Object.prototype.toString"),
    o = n(581070)();
e.exports = function (e) {
    return "string" == typeof e || (!!e && "object" == typeof e && (o ? s(e) : "[object String]" === a(e)));
};
