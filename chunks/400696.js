"use strict";
var n = r(906046),
    o = n("String.prototype.valueOf"),
    i = function (e) {
        try {
            return o(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = n("Object.prototype.toString"),
    s = r(581070)();
e.exports = function (e) {
    return "string" == typeof e || (!!e && "object" == typeof e && (s ? i(e) : "[object String]" === a(e)));
};
