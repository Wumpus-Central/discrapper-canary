"use strict";
var n = r(969001),
    o = function () {
        return !!n;
    };
(o.hasArrayLengthDefineBug = function () {
    if (!n) return null;
    try {
        return 1 !== n([], "length", { value: 1 }).length;
    } catch (e) {
        return !0;
    }
}),
    (e.exports = o);
