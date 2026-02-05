"use strict";
var n = e(308227),
    o = Object.defineProperty;
t.exports = function (t, r) {
    try {
        o(n, t, { value: r, configurable: !0, writable: !0 });
    } catch (e) {
        n[t] = r;
    }
    return r;
};
