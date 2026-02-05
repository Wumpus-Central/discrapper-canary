"use strict";
var r = n(696219),
    i = Object.prototype.toString,
    a = Object.prototype.hasOwnProperty,
    s = function (e, t, n) {
        for (var r = 0, i = e.length; r < i; r++) a.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
    },
    o = function (e, t, n) {
        for (var r = 0, i = e.length; r < i; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
    },
    l = function (e, t, n) {
        for (var r in e) a.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e));
    };
function u(e) {
    return "[object Array]" === i.call(e);
}
e.exports = function (e, t, n) {
    var i;
    if (!r(t)) throw TypeError("iterator must be a function");
    arguments.length >= 3 && (i = n), u(e) ? s(e, t, i) : "string" == typeof e ? o(e, t, i) : l(e, t, i);
};
