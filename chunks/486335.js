"use strict";
var r,
    i = n(906046),
    a = n(581070)(),
    s = n(353841),
    o = n(267768);
if (a) {
    var l = i("RegExp.prototype.exec"),
        u = {},
        c = function () {
            throw u;
        },
        d = { toString: c, valueOf: c };
    "symbol" == typeof Symbol.toPrimitive && (d[Symbol.toPrimitive] = c),
        (r = function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = o(e, "lastIndex");
            if (!(t && s(t, "value"))) return !1;
            try {
                l(e, d);
            } catch (e) {
                return e === u;
            }
        });
} else {
    var _ = i("Object.prototype.toString"),
        f = "[object RegExp]";
    r = function (e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && _(e) === f;
    };
}
e.exports = r;
