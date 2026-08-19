"use strict";
var n,
    o = r(906046),
    i = r(581070)(),
    a = r(353841),
    s = r(267768);
if (i) {
    var l = o("RegExp.prototype.exec"),
        u = {},
        c = function () {
            throw u;
        },
        f = { toString: c, valueOf: c };
    "symbol" == typeof Symbol.toPrimitive && (f[Symbol.toPrimitive] = c),
        (n = function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = s(e, "lastIndex");
            if (!(t && a(t, "value"))) return !1;
            try {
                l(e, f);
            } catch (e) {
                return e === u;
            }
        });
} else {
    var p = o("Object.prototype.toString");
    n = function (e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "[object RegExp]" === p(e);
    };
}
e.exports = n;
