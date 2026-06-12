"use strict";
var i,
    r = n(906046),
    s = n(429013)(/^\s*(?:function)?\*/),
    a = n(581070)(),
    o = n(428495),
    l = r("Object.prototype.toString"),
    u = r("Function.prototype.toString"),
    c = function () {
        if (!a) return !1;
        try {
            return Function("return function*() {}")();
        } catch (e) {}
    };
e.exports = function (e) {
    if ("function" != typeof e) return !1;
    if (s(u(e))) return !0;
    if (!a) return "[object GeneratorFunction]" === l(e);
    if (!o) return !1;
    if (void 0 === i) {
        var t = c();
        i = !!t && o(t);
    }
    return o(e) === i;
};
