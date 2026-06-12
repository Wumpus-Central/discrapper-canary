"use strict";
var i = n(969001),
    r = function () {
        return !!i;
    };
(r.hasArrayLengthDefineBug = function () {
    if (!i) return null;
    try {
        return 1 !== i([], "length", { value: 1 }).length;
    } catch (e) {
        return !0;
    }
}),
    (e.exports = r);
