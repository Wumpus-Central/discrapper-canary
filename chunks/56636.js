"use strict";
r.d(t, { C6: () => o, Cl: () => i, fX: () => a });
var n = function (e, t) {
    return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
            function (e, t) {
                e.__proto__ = t;
            }) ||
        function (e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        })(e, t);
};
function o(e, t) {
    if ("function" != typeof t && null !== t)
        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function r() {
        this.constructor = e;
    }
    n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
}
var i = function () {
    return (i =
        Object.assign ||
        function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
        }).apply(this, arguments);
};
function a(e, t, r) {
    if (r || 2 == arguments.length)
        for (var n, o = 0, i = t.length; o < i; o++)
            (!n && o in t) || (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
    return e.concat(n || Array.prototype.slice.call(t));
}
