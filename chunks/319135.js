var n = r(696219),
    i = Object.prototype.toString,
    o = Object.prototype.hasOwnProperty,
    a = function (e, t, r) {
        for (var n = 0, i = e.length; n < i; n++) o.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
    },
    s = function (e, t, r) {
        for (var n = 0, i = e.length; n < i; n++) null == r ? t(e.charAt(n), n, e) : t.call(r, e.charAt(n), n, e);
    },
    l = function (e, t, r) {
        for (var n in e) o.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
    };
e.exports = function (e, t, r) {
    var o;
    if (!n(t)) throw TypeError("iterator must be a function");
    (arguments.length >= 3 && (o = r), "[object Array]" === i.call(e))
        ? a(e, t, o)
        : "string" == typeof e
          ? s(e, t, o)
          : l(e, t, o);
};
