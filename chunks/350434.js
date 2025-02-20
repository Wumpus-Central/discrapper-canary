var r,
    i = Object.prototype.toString,
    o = Function.prototype.toString,
    a = /^\s*(?:function)?\*/,
    s = n(703825)(),
    l = Object.getPrototypeOf,
    c = function () {
        if (!s) return !1;
        try {
            return Function('return function*() {}')();
        } catch (e) {}
    };
e.exports = function (e) {
    if ('function' != typeof e) return !1;
    if (a.test(o.call(e))) return !0;
    if (!s) return '[object GeneratorFunction]' === i.call(e);
    if (!l) return !1;
    if (void 0 === r) {
        var t = c();
        r = !!t && l(t);
    }
    return l(e) === r;
};
