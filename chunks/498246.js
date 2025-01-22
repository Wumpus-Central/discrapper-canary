var n = 'Function.prototype.bind called on incompatible ',
    r = Object.prototype.toString,
    i = Math.max,
    a = '[object Function]',
    o = function (e, n) {
        for (var r = [], i = 0; i < e.length; i += 1) r[i] = e[i];
        for (var a = 0; a < n.length; a += 1) r[a + e.length] = n[a];
        return r;
    },
    s = function (e, n) {
        for (var r = [], i = n || 0, a = 0; i < e.length; i += 1, a += 1) r[a] = e[i];
        return r;
    },
    l = function (e, n) {
        for (var r = '', i = 0; i < e.length; i += 1) (r += e[i]), i + 1 < e.length && (r += n);
        return r;
    };
e.exports = function (e) {
    var u,
        c = this;
    if ('function' != typeof c || r.apply(c) !== a) throw TypeError(n + c);
    for (
        var d = s(arguments, 1),
            f = function () {
                if (this instanceof u) {
                    var n = c.apply(this, o(d, arguments));
                    return Object(n) === n ? n : this;
                }
                return c.apply(e, o(d, arguments));
            },
            p = i(0, c.length - d.length),
            h = [],
            _ = 0;
        _ < p;
        _++
    )
        h[_] = '$' + _;
    if (((u = Function('binder', 'return function (' + l(h, ',') + '){ return binder.apply(this,arguments); }')(f)), c.prototype)) {
        var m = function () {};
        (m.prototype = c.prototype), (u.prototype = new m()), (m.prototype = null);
    }
    return u;
};
