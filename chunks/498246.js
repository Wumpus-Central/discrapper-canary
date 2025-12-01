var t = "Function.prototype.bind called on incompatible ",
    n = Object.prototype.toString,
    r = Math.max,
    i = "[object Function]",
    a = function (e, t) {
        for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
        for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
        return n;
    },
    o = function (e, t) {
        for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
        return n;
    },
    s = function (e, t) {
        for (var n = "", r = 0; r < e.length; r += 1) (n += e[r]), r + 1 < e.length && (n += t);
        return n;
    };
e.exports = function (e) {
    var l,
        c = this;
    if ("function" != typeof c || n.apply(c) !== i) throw TypeError(t + c);
    for (
        var u = o(arguments, 1),
            d = function () {
                if (this instanceof l) {
                    var t = c.apply(this, a(u, arguments));
                    return Object(t) === t ? t : this;
                }
                return c.apply(e, a(u, arguments));
            },
            f = r(0, c.length - u.length),
            p = [],
            _ = 0;
        _ < f;
        _++
    )
        p[_] = "$" + _;
    if (
        ((l = Function("binder", "return function (" + s(p, ",") + "){ return binder.apply(this,arguments); }")(d)),
        c.prototype)
    ) {
        var m = function () {};
        (m.prototype = c.prototype), (l.prototype = new m()), (m.prototype = null);
    }
    return l;
};
