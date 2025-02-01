var i,
    r = Object.prototype.toString,
    a = Function.prototype.toString,
    s = /^\s*(?:function)?\*/,
    o = n(703825)(),
    l = Object.getPrototypeOf,
    u = function () {
        if (!o) return !1;
        try {
            return Function('return function*() {}')();
        } catch (e) {}
    };
e.exports = function (e) {
    if ('function' != typeof e) return !1;
    if (s.test(a.call(e))) return !0;
    if (!o) return '[object GeneratorFunction]' === r.call(e);
    if (!l) return !1;
    if (void 0 === i) {
        var t = u();
        i = !!t && l(t);
    }
    return l(e) === i;
};
