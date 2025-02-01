var t = 'Function.prototype.bind called on incompatible ',
    n = Object.prototype.toString,
    i = Math.max,
    r = '[object Function]',
    a = function (e, t) {
        for (var n = [], i = 0; i < e.length; i += 1) n[i] = e[i];
        for (var r = 0; r < t.length; r += 1) n[r + e.length] = t[r];
        return n;
    },
    s = function (e, t) {
        for (var n = [], i = t || 0, r = 0; i < e.length; i += 1, r += 1) n[r] = e[i];
        return n;
    },
    o = function (e, t) {
        for (var n = '', i = 0; i < e.length; i += 1) (n += e[i]), i + 1 < e.length && (n += t);
        return n;
    };
e.exports = function (e) {
    var l,
        u = this;
    if ('function' != typeof u || n.apply(u) !== r) throw TypeError(t + u);
    for (
        var c = s(arguments, 1),
            d = function () {
                if (this instanceof l) {
                    var t = u.apply(this, a(c, arguments));
                    return Object(t) === t ? t : this;
                }
                return u.apply(e, a(c, arguments));
            },
            f = i(0, u.length - c.length),
            _ = [],
            p = 0;
        p < f;
        p++
    )
        _[p] = '$' + p;
    if (((l = Function('binder', 'return function (' + o(_, ',') + '){ return binder.apply(this,arguments); }')(d)), u.prototype)) {
        var h = function () {};
        (h.prototype = u.prototype), (l.prototype = new h()), (h.prototype = null);
    }
    return l;
};
