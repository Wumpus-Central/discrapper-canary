var i = n(320387),
    r = Object.prototype.toString,
    a = Object.prototype.hasOwnProperty,
    s = function (e, t, n) {
        for (var i = 0, r = e.length; i < r; i++) a.call(e, i) && (null == n ? t(e[i], i, e) : t.call(n, e[i], i, e));
    },
    o = function (e, t, n) {
        for (var i = 0, r = e.length; i < r; i++) null == n ? t(e.charAt(i), i, e) : t.call(n, e.charAt(i), i, e);
    },
    l = function (e, t, n) {
        for (var i in e) a.call(e, i) && (null == n ? t(e[i], i, e) : t.call(n, e[i], i, e));
    },
    u = function (e, t, n) {
        var a;
        if (!i(t)) throw TypeError('iterator must be a function');
        arguments.length >= 3 && (a = n), '[object Array]' === r.call(e) ? s(e, t, a) : 'string' == typeof e ? o(e, t, a) : l(e, t, a);
    };
e.exports = u;
