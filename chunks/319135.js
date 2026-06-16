"use strict";
var i = n(696219),
    r = Object.prototype.toString,
    s = Object.prototype.hasOwnProperty,
    a = function (e, t, n) {
        for (var i = 0, r = e.length; i < r; i++) s.call(e, i) && (null == n ? t(e[i], i, e) : t.call(n, e[i], i, e));
    },
    o = function (e, t, n) {
        for (var i = 0, r = e.length; i < r; i++) null == n ? t(e.charAt(i), i, e) : t.call(n, e.charAt(i), i, e);
    },
    l = function (e, t, n) {
        for (var i in e) s.call(e, i) && (null == n ? t(e[i], i, e) : t.call(n, e[i], i, e));
    };
e.exports = function (e, t, n) {
    var s;
    if (!i(t)) throw TypeError("iterator must be a function");
    (arguments.length >= 3 && (s = n), "[object Array]" === r.call(e))
        ? a(e, t, s)
        : "string" == typeof e
          ? o(e, t, s)
          : l(e, t, s);
};
