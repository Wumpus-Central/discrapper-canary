var n,
    i = r(906046),
    o = r(429013)(/^\s*(?:function)?\*/),
    a = r(581070)(),
    s = r(428495),
    l = i("Object.prototype.toString"),
    u = i("Function.prototype.toString"),
    c = function () {
        if (!a) return !1;
        try {
            return Function("return function*() {}")();
        } catch (e) {}
    };
e.exports = function (e) {
    if ("function" != typeof e) return !1;
    if (o(u(e))) return !0;
    if (!a) return "[object GeneratorFunction]" === l(e);
    if (!s) return !1;
    if (void 0 === n) {
        var t = c();
        n = !!t && s(t);
    }
    return s(e) === n;
};
