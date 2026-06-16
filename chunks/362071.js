"use strict";
var r = n(155084);
e.exports = function (e, t, n) {
    return function () {
        for (var a = new e(), o = arguments.length, i = 0; i < o; i++) {
            var s = arguments[i];
            n ? t(a, r(s)[0], s[1]) : t(a, s);
        }
        return a;
    };
};
