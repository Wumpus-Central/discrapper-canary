"use strict";
var r = n(696219),
    i = Object.prototype.toString,
    s = Object.prototype.hasOwnProperty,
    a = function (e, t, n) {
        for (var r = 0, i = e.length; r < i; r++) s.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
    },
    o = function (e, t, n) {
        for (var r = 0, i = e.length; r < i; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
    },
    l = function (e, t, n) {
        for (var r in e) s.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
    };
e.exports = function (e, t, n) {
    var s;
    if (!r(t)) throw TypeError("iterator must be a function");
    (arguments.length >= 3 && (s = n), "[object Array]" === i.call(e))
        ? a(e, t, s)
        : "string" == typeof e
          ? o(e, t, s)
          : l(e, t, s);
};
