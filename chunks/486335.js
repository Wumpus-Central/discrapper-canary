"use strict";
var r,
    i = n(906046),
    s = n(581070)(),
    a = n(353841),
    o = n(267768);
if (s) {
    var l = i("RegExp.prototype.exec"),
        u = {},
        d = function () {
            throw u;
        },
        c = { toString: d, valueOf: d };
    "symbol" == typeof Symbol.toPrimitive && (c[Symbol.toPrimitive] = d),
        (r = function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = o(e, "lastIndex");
            if (!(t && a(t, "value"))) return !1;
            try {
                l(e, c);
            } catch (e) {
                return e === u;
            }
        });
} else {
    var _ = i("Object.prototype.toString");
    r = function (e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "[object RegExp]" === _(e);
    };
}
e.exports = r;
