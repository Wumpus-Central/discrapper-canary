var i,
    a = Object.prototype.toString,
    o = Function.prototype.toString,
    s = /^\s*(?:function)?\*/,
    l = r(703825)(),
    u = Object.getPrototypeOf,
    c = function () {
        if (!l) return !1;
        try {
            return Function('return function*() {}')();
        } catch (e) {}
    };
e.exports = function (e) {
    if ('function' != typeof e) return !1;
    if (s.test(o.call(e))) return !0;
    if (!l) return '[object GeneratorFunction]' === a.call(e);
    if (!u) return !1;
    if (void 0 === i) {
        var n = c();
        i = !!n && u(n);
    }
    return u(e) === i;
};
