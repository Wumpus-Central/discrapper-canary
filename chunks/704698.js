"use strict";
var r = n(906046),
    i = r("Object.prototype.toString"),
    s = n(912877)(),
    a = n(429013);
if (s) {
    var o = r("Symbol.prototype.toString"),
        l = a(/^Symbol\(.*\)$/);
    e.exports = function (e) {
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || "[object Symbol]" !== i(e)) return !1;
        try {
            return "symbol" == typeof e.valueOf() && l(o(e));
        } catch (e) {
            return !1;
        }
    };
} else
    e.exports = function (e) {
        return !1;
    };
