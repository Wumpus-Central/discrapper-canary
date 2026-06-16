"use strict";
var r = n(61748)("match");
e.exports = function (e) {
    var t = /./;
    try {
        "/./"[e](t);
    } catch (n) {
        try {
            return (t[r] = !1), "/./"[e](t);
        } catch (e) {}
    }
    return !1;
};
