var i = r(320387),
    a = Object.prototype.toString,
    o = Object.prototype.hasOwnProperty,
    s = function (e, n, r) {
        for (var i = 0, a = e.length; i < a; i++) o.call(e, i) && (null == r ? n(e[i], i, e) : n.call(r, e[i], i, e));
    },
    l = function (e, n, r) {
        for (var i = 0, a = e.length; i < a; i++) null == r ? n(e.charAt(i), i, e) : n.call(r, e.charAt(i), i, e);
    },
    u = function (e, n, r) {
        for (var i in e) o.call(e, i) && (null == r ? n(e[i], i, e) : n.call(r, e[i], i, e));
    },
    c = function (e, n, r) {
        var o;
        if (!i(n)) throw TypeError('iterator must be a function');
        arguments.length >= 3 && (o = r), '[object Array]' === a.call(e) ? s(e, n, o) : 'string' == typeof e ? l(e, n, o) : u(e, n, o);
    };
e.exports = c;
