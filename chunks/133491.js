"use strict";
var r,
    i = n(906046),
    a = n(429013)(/^\s*(?:function)?\*/),
    s = n(581070)(),
    o = n(428495),
    l = i("Object.prototype.toString"),
    u = i("Function.prototype.toString"),
    c = function () {
        if (!s) return !1;
        try {
            return Function("return function*() {}")();
        } catch (e) {}
    };
e.exports = function (e) {
    if ("function" != typeof e) return !1;
    if (a(u(e))) return !0;
    if (!s) return "[object GeneratorFunction]" === l(e);
    if (!o) return !1;
    if (void 0 === r) {
        var t = c();
        r = !!t && o(t);
    }
    return o(e) === r;
};
