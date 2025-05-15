var t = 'Function.prototype.bind called on incompatible ',
    n = Object.prototype.toString,
    r = Math.max,
    i = '[object Function]',
    o = function (e, t) {
        for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
        for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
        return n;
    },
    a = function (e, t) {
        for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
        return n;
    },
    s = function (e, t) {
        for (var n = '', r = 0; r < e.length; r += 1) (n += e[r]), r + 1 < e.length && (n += t);
        return n;
    };
e.exports = function (e) {
    var l,
        c = this;
    if ('function' != typeof c || n.apply(c) !== i) throw TypeError(t + c);
    for (
        var u = a(arguments, 1),
            d = function () {
                if (this instanceof l) {
                    var t = c.apply(this, o(u, arguments));
                    return Object(t) === t ? t : this;
                }
                return c.apply(e, o(u, arguments));
            },
            f = r(0, c.length - u.length),
            _ = [],
            p = 0;
        p < f;
        p++
    )
        _[p] = '$' + p;
    if (((l = Function('binder', 'return function (' + s(_, ',') + '){ return binder.apply(this,arguments); }')(d)), c.prototype)) {
        var h = function () {};
        (h.prototype = c.prototype), (l.prototype = new h()), (h.prototype = null);
    }
    return l;
};
