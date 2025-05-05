var r,
    i = n(166691),
    o = n(190337)(/^\s*(?:function)?\*/),
    a = n(195653)(),
    s = n(143988),
    l = i('Object.prototype.toString'),
    c = i('Function.prototype.toString'),
    u = function () {
        if (!a) return !1;
        try {
            return Function('return function*() {}')();
        } catch (e) {}
    };
e.exports = function (e) {
    if ('function' != typeof e) return !1;
    if (o(c(e))) return !0;
    if (!a) return '[object GeneratorFunction]' === l(e);
    if (!s) return !1;
    if (void 0 === r) {
        var t = u();
        r = !!t && s(t);
    }
    return s(e) === r;
};
