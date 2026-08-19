"use strict";
var n = r(696219),
    o = Object.prototype.toString,
    i = Object.prototype.hasOwnProperty,
    a = function (e, t, r) {
        for (var n = 0, o = e.length; n < o; n++) i.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
    },
    s = function (e, t, r) {
        for (var n = 0, o = e.length; n < o; n++) null == r ? t(e.charAt(n), n, e) : t.call(r, e.charAt(n), n, e);
    },
    l = function (e, t, r) {
        for (var n in e) i.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
    };
e.exports = function (e, t, r) {
    var i;
    if (!n(t)) throw TypeError("iterator must be a function");
    (arguments.length >= 3 && (i = r), "[object Array]" === o.call(e))
        ? a(e, t, i)
        : "string" == typeof e
          ? s(e, t, i)
          : l(e, t, i);
};
